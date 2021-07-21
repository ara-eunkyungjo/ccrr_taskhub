/**
 * jsPsych plugin for RMTS test trial:
 * accept two stimulus pairs, register choice between them
 * Alex Carstensen
 *
 * documentation: docs.jspsych.org
 */

jsPsych.plugins.RMTStest = (function() {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('RMTStest', 'stimuli', 'image');

  plugin.info = {
    name: 'RMTStest',
    description: 'Choose between two pairs of blocks',
    parameters: {
      samePair: {
        type: jsPsych.plugins.parameterType.IMAGE,
        pretty_name: 'Same Pair',
        default: undefined,
        array: true,
        description: 'The pair of same objects to be displayed.'
      },
      diffPair: {
        type: jsPsych.plugins.parameterType.IMAGE,
        pretty_name: 'Different Pair',
        default: undefined,
        array: true,
        description: 'The pair of different objects to be displayed.'
      },
      sameSide: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Same Side?',
        default: undefined,
        array: false,
        description: 'The side (L/R) that the same pair should be displayed on.'
      },
      scene: {
        type: jsPsych.plugins.parameterType.IMAGE,
        pretty_name: 'scene',
        default: 250,
        description: 'contains background, box, and table'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Any content here will be displayed above stimulus.'
      }
    }
  }

  plugin.trial = function(display_element, trial) {

    var startTime = (new Date()).getTime();
    var responses = [];

    if(trial.sameSide=="L") {
      var left_side = trial.samePair;
      var right_side = trial.diffPair;
    } else {
      var left_side = trial.diffPair;
      var right_side = trial.samePair;
    }
    
    display_element.innerHTML = '<div align="left">'+trial.prompt+'</div><br><div id="scene"> \
                        <img src="'+left_side[0]+'" id="leftPair1"></img> \
                        <img src="'+left_side[1]+'" id="leftPair2"></img> \
                        <img src="img/tray.png" id="leftTray"></img> \
                        <div id="leftTestButton"> </div> <div id="rightTestButton"> </div> \
                        <img src="'+trial.friend+'" id="friend"></img> \
                        <img src="'+right_side[0]+'" id="rightPair1"></img> \
                        <img src="'+right_side[1]+'" id="rightPair2"></img> \
                        <img src="img/tray.png" id="rightTray"></img> \
                        <img src="'+trial.scene.table+'" id="table"></img> \
                        <img src="'+trial.scene.box+'" id="box" class="box"></img> </div>'; 
                        // draw invisible buttons on left and right side of screen (or directly over stim pairs)
    setTimeout(function(){
      $("#leftTestButton").click(function(){
        after_response(this.id);
      });

      $("#rightTestButton").click(function(){
        after_response(this.id);
      });
    }, 1000); // wait 1 s before buttons are clickable

    // store response
    var response = {
      rt: null,
      button: null
    };

    var after_response = function(choice) {

      // measure rt
      var end_time = performance.now();
      var rt = end_time - startTime;
      response.button = choice;
      response.rt = rt;

      endTrial();
    }


    function endTrial() {

      var trial_data = {
        "trial_type": "RMTStest",
        "RT": response.rt,
        "choice": response.button,
        "sameSide": trial.sameSide,
        "samePair": trial.samePair,
        "diffPair": trial.diffPair,
        "box": trial.scene.box,
        "startTime": startTime
      };

      console.log(trial_data);
      jsPsych.finishTrial(trial_data);
    }
  };

  return plugin;
})();
