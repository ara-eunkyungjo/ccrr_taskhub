/**
 * jspsych-image-keyboard-response
 * Josh de Leeuw
 *
 * plugin for displaying a stimulus and getting a keyboard response
 *
 * documentation: docs.jspsych.org
 *
 **/


jsPsych.plugins["ebbinghaus-keyboard-practice"] = (function() {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('ebbinghaus-keyboard-practice', 'stimulus', 'image');

  plugin.info = {
    name: 'ebbinghaus-keyboard-practice',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.IMAGE,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The image to be displayed'
      },
      stimulus_height: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Image height',
        default: 540,
        description: 'Set the image height in pixels'
      },
      stimulus_width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Image width',
        default: 720,
        description: 'Set the image width in pixels'
      },
      maintain_aspect_ratio: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Maintain aspect ratio',
        default: true,
        description: 'Maintain the aspect ratio after setting width or height'
      },
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'Choices',
        default: jsPsych.ALL_KEYS,
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
     correct_response: {
        type: jsPsych.plugins.parameterType.INT, 
        pretty_name: 'the correct repsonse for this trial', 
          default: null, 
          description: 'the button that participants should be pushing'
      },
     prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Any content here will be displayed below the stimulus.'
      },
      stimulus_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus duration',
        default: null,
        description: 'How long to hide the stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show trial before it ends.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, trial will end when subject makes a response.'
      },
      feedback_provided: {
          type: jsPsych.plugins.parameterType.BOOL, 
          pretty_name : 'provide feedback to the trials',
          default: false, 
          description: "If true, then a feedback would be provided"
      },
      feedback_duration:  {
          type: jsPsych.plugins.parameterType.INT, 
          pretty_name: 'Feedback duration', 
          default: null, 
          description: 'How long to show the feedback'
      },
      feedback_yes: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: "feedback yes",
          default: "DEFAULT YES",
          description: "feedback when the participant responds correctly"
      },
      feedback_no:{
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: "feedback yes",
          default: "DEFAULT NO",
          description: "feedback when the participant DOES NOT respond correctly"
      }
    }
  }

  plugin.trial = function(display_element, trial) {

    // display stimulus
    var html = '<img src="'+trial.stimulus+'" id="jspsych-image-keyboard-response-stimulus" style="position: relative; cursor: none; width:720px;height:480 px; top:0 px; left:3px;""';
    if(trial.stimulus_height !== null){
      html += 'height:'+trial.stimulus_height+'px; '
      if(trial.stimulus_width == null && trial.maintain_aspect_ratio){
        html += 'width: auto; ';
      }
    }
    if(trial.stimulus_width !== null){
      html += 'width:'+trial.stimulus_width+'px; '
      if(trial.stimulus_height == null && trial.maintain_aspect_ratio){
        html += 'height: auto; ';
      }
    }
    html +='"></img>';

  
      

    html +='<div class="row">'+
           '<div class="column">'+
            '<img src= "images/ebb_illu/key_m.jpg"></img>'+ 
            '</div>'+ 
            '<div class="column">'+
            '<img src= "images/ebb_illu/key_z.jpg"></img>'+ 
            '</div>'+
            '</div>'
      
      
    // add prompt
    if (trial.prompt !== null){
      html += "<div>" + trial.prompt + "</div>";
    }

    // render
    display_element.innerHTML = html;

    // store response
    var response = {
      rt: null,
      key: null
    };

    // function to end trial when it is time
    var end_trial = function() {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // kill keyboard listeners
      if (typeof keyboardListener !== 'undefined') {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
      }

      // gather the data to store for the trial
      var trial_data = {
        "rt": response.rt,
        "stimulus": trial.stimulus,
        "key_press": response.key
      };
        
        
        var ebbinghaus_image_answer = {
            'images/ebb_illu/N_82_100.jpg':"m",
            'images/ebb_illu/N_90_100.jpg':"m",
            'images/ebb_illu/N_98_100.jpg':"m",
            'images/ebb_illu/N_100_86.jpg':"z",
            'images/ebb_illu/N_100_94.jpg':"z",
            'images/ebb_illu/N_100_102.jpg':"m",
            'images/ebb_illu/N_100_110.jpg':"m",
            'images/ebb_illu/N_100_118.jpg':"m", 
            'images/ebb_illu/N_106_100.jpg':"z",
            'images/ebb_illu/N_114_100.jpg':"z",
            'images/ebb_illu/H_98-125_100-50.jpg':"m",
            'images/ebb_illu/H_100-50_98-125.jpg':"z",
            'images/ebb_illu/H_100-125_102-50.jpg':"m",
            'images/ebb_illu/H_102-50_100-125.jpg':"z",
            'images/ebb_illu/I_82-50_100-125.jpg':"m",
            'images/ebb_illu/I_86-50_100-125.jpg':"m",
            'images/ebb_illu/I_90-50_100-125.jpg':"m",
            'images/ebb_illu/I_94-50_100-125.jpg':"m",
            'images/ebb_illu/I_98-50_100-125.jpg':"m",
            'images/ebb_illu/I_100-50_102-125.jpg':"m",
            'images/ebb_illu/I_100-50_106-125.jpg':"m",
            'images/ebb_illu/I_100-50_110-125.jpg':"m",
            'images/ebb_illu/I_100-50_114-125.jpg':"m",
            'images/ebb_illu/I_100-50_118-125.jpg':"m",
            'images/ebb_illu/I_100-125_82-50.jpg':"z",
            'images/ebb_illu/I_100-125_86-50.jpg':"z",
            'images/ebb_illu/I_100-125_90-50.jpg':"z",
            'images/ebb_illu/I_100-125_94-50.jpg':"z",
            'images/ebb_illu/I_100-125_98-50.jpg':"z",
            'images/ebb_illu/I_102-125_100-50.jpg':"z",
            'images/ebb_illu/I_106-125_100-50.jpg':"z",
            'images/ebb_illu/I_110-125_100-50.jpg':"z",
            'images/ebb_illu/I_114-125_100-50.jpg':"z",
            'images/ebb_illu/I_118-125_100-50.jpg':"z"
        }
        
    
    var answer_correct = 0
    if (ebbinghaus_image_answer.hasOwnProperty(trial_data.stimulus)){
        if (ebbinghaus_image_answer[trial_data.stimulus] == jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(trial_data.key_press)){
            answer_correct = 1
            
        }else{
            answer_correct = 0
        }
    }else{
        answer_correct = 999
    }
    
    
    
     trial_data.answer_correct = answer_correct;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    
    
      // clear the display
      display_element.innerHTML = '';

        
        
        
        
        
        
      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    // function to handle responses by the subject
    var after_response = function(info) {
      
          // only record the first response
    
    if (response.key == null) {
        response = info;
      }
        
       if (trial.feedback_provided){ 
        if (response.key == trial.correct_response){
          display_element.innerHTML = trial.feedback_yes;
          jsPsych.pluginAPI.setTimeout(function(){end_trial()}, 2000)
        }else{
          display_element.innerHTML = trial.feedback_no;
         jsPsych.pluginAPI.setTimeout(function(){end_trial()}, trial.feedback_duration)
        }
      }   
        
   
      // after a valid response, the stimulus will have the CSS class 'responded'
      // which can be used to provide visual feedback that a response was recorded
      display_element.querySelector('#jspsych-image-keyboard-response-stimulus').className += ' responded';
  
      
              
    

        
    
      if (trial.response_ends_trial) {
        end_trial();
      }
        
        
        
    };

    // start the response listener
    if (trial.choices != jsPsych.NO_KEYS) {
      var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: trial.choices,
        rt_method: 'performance',
        persist: false,
        allow_held_key: false
      });
    }
      
   

    // hide stimulus if stimulus_duration is set
    if (trial.stimulus_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        display_element.querySelector('#jspsych-image-keyboard-response-stimulus').style.visibility = 'hidden';
      }, trial.stimulus_duration);
    }

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }

  };

  return plugin;
})();
