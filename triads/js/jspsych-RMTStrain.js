/**
 * jsPsych plugin for RMTS training trial:
 * accept two stimuli, show them activating (or not) the machine 1x (by default) or n times (specified as numTriesPerPair)
 * Alex Carstensen
 *
 * documentation: docs.jspsych.org
 */

jsPsych.plugins.RMTStrain = (function() {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('RMTStrain', 'stimuli', 'image');
  //jsPsych.pluginAPI.registerPreload('RMTStrain', 'scene', 'audio');

  plugin.info = {
    name: 'RMTStrain',
    description: '',
    parameters: {
      stimuli: {
        type: jsPsych.plugins.parameterType.IMAGE,
        pretty_name: 'Stimuli',
        default: undefined,
        array: true,
        description: 'The two objects to be displayed.'
      },
      scene: {
        type: jsPsych.plugins.parameterType.AUDIO,
        pretty_name: 'scene',
        default: 250,
        description: 'contains background, box, box2 (flashing), song, and table'
      },
      numTriesPerPair: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Number of observations per pair',
        default: 1,
        description: 'Number of times each pair is put on the machine'
      }
    }
  }

  plugin.trial = function(display_element, trial) {

    // setup audio stimulus
    // var context = jsPsych.pluginAPI.audioContext();
    // if(context !== null){
    //   var source = context.createBufferSource();
    //   source.buffer = jsPsych.pluginAPI.getAudioBuffer(trial.scene.song);
    //   source.connect(context.destination);
    // } else {
    //   var audio = jsPsych.pluginAPI.getAudioBuffer(trial.scene.song);
    //   //audio.currentTime = 0;
    // }
    var blicket = new Audio(trial.scene.song);
    blicket.preload = "auto";

    var reps = 0;
    var startTime = (new Date()).getTime();
    var animation_sequence = [];
    var responses = [];
    
    var counter = 0; 
    var flicker_state = 1;

    display_element.innerHTML = '<div id="scene">\
                        <img src="'+trial.stimuli[0]+'" id="leftObj"></img> \
                        <img src="'+trial.stimuli[1]+'" id="rightObj"></img> \
                        <img src="'+trial.scene.box2+'" id="box2" class="box"></img> \
                        <img src="'+trial.scene.table+'" id="table"></img> \
                        <img src="'+trial.scene.box+'" id="box" class="box"></img> </div> \
                        <p><div id="nextButton">&raquo;</div>';

    $( "#nextButton" ).click(function() {
      counter = 0;
      $("#nextButton").off('click');
      goDown();
    });

    var flicker = function(total_duration, flick_duration) {
      if(total_duration < 0) {
        $("#box2").css({"z-index": "0"})
        return;
      }
      setTimeout(function() {
        if(flicker_state==1) {
          $("#box2").css({"z-index": "1"})
          flicker_state = 0;
        } else {
          $("#box2").css({"z-index": "0"})
          flicker_state = 1;
        }
        flicker(total_duration-flick_duration, flick_duration)
      }, flick_duration);
      // endTrial()? 
    };

    var goUp = function() {
        $( "#leftObj" ).animate({ "top": "-=110px" }, 1000, "linear");
        $( "#rightObj" ).animate({ "top": "-=110px" }, 1000, "linear", function() {
          setTimeout(function(){
            counter++;
            if (counter<trial.numTriesPerPair) {
              goDown();
            } else { 
              
              endTrial();
            }
          }, 1000); // need to have down counter and not always go down
        });
    };

    var goDown = function() {
        $( "#leftObj" ).animate({ "top": "+=110px" }, 1000, "linear");
        $( "#rightObj" ).animate({ "top": "+=110px" }, 1000, "linear", function() {
          if(trial.activate) {
            flicker(5500, 150);
            blicket.play();
          }

          // start audio
          // if(context !== null){
          //   startTime = context.currentTime;
          //   source.start(startTime);
          // } else {
          //   audio.play();
          // }
          setTimeout(goUp, 5800);
        });
    };      

    //goDown();


    function endTrial() {
      var endTime = (new Date()).getTime();
      var trial_data = {
        "trial_type": "RMTStrain",
        "left_object": trial.stimuli[0],
        "right_object": trial.stimuli[1],
        "activate": trial.activate,
        "box": trial.scene.box,
        "startTime": startTime,
        "endTime": endTime
      };

      // stop the audio file if it is playing
      // remove end event listeners if they exist
      // if(context !== null){
      //   source.stop();
      //   source.onended = function() { }
      // } else {
      //   audio.pause();
      //   audio.removeEventListener('ended', end_trial);
      // }
      jsPsych.finishTrial(trial_data);
    }
  };

  return plugin;
})();
