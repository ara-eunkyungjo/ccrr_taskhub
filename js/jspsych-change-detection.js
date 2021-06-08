/**adapted from:
 * jspsych-html-keyboard-response
 * Josh de Leeuw
 *
 * plugin for displaying a stimulus and getting a keyboard response
 *
 * documentation: docs.jspsych.org
 *
 **/


jsPsych.plugins["change-detection"] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'change-detection',
    description: '',
    parameters: {
      first_stimulus: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The HTML string to be displayed'
      },
      second_stimulus: {
         type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The HTML string to be displayed' 
      },
      choices: {
        type: jsPsych.plugins.parameterType.KEY,
        array: true,
        pretty_name: 'Choices',
        default: jsPsych.ALL_KEYS,
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
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
        interval_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'interval duration',
        default: null,
        description: 'How long the ISI is.'
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

    }
  }

  plugin.trial = function(display_element, trial) {

    var trial_end = false
    var first_stimulus = '<div id="first-stimulus">'+trial.first_stimulus+'</div>';
    var second_stimulus = '<div id="second-stimulus">'+trial.second_stimulus+'</div>';
      var n = 1
      
      
      while(!trial_end){
        
        
        jsPsych.pluginAPI.setTimeout(function() {   
        display_element.innerHTML = first_stimulus;    
        
      }, 0);  
          
        jsPsych.pluginAPI.setTimeout(function() {
        display_element.querySelector('#first-stimulus').style.visibility = 'hidden';
      }, trial.stimulus_duration);
          
        jsPsych.pluginAPI.setTimeout(function() {
        display_element.innerHTML = second_stimulus;
        display_element.querySelector('#second-stimulus').style.visibility = 'visible';
      }, trial.interval_duration);  
       
        jsPsych.pluginAPI.setTimeout(function() {
        display_element.querySelector('#second-stimulus').style.visibility = 'hidden';
      }, trial.stimulus_duration);
          
        jsPsych.pluginAPI.setTimeout(function() {
        display_element.querySelector('#first-stimulus').style.visibility = 'visible';
      }, trial.interval_duration);  
       
          n = n + 1
    }
      
  
    // store response
    var response = {
      rt: null,
      key: null
    };

    // function to end trial when it is time
    var end_trial = function() {

      var trial_end = true 
      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // kill keyboard listeners
      if (typeof keyboardListener !== 'undefined') {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
      }

      // gather the data to store for the trial
      var trial_data = {
        rt: response.rt,
        stimulus: trial.stimulus,
        response: response.key
      };

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    // function to handle responses by the subject
    var after_response = function(info) {

      // after a valid response, the stimulus will have the CSS class 'responded'
      // which can be used to provide visual feedback that a response was recorded
      display_element.querySelector('#first-stimulus').className += ' responded';

      // only record the first response
      if (response.key == null) {
        response = info;
      }

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
        display_element.querySelector('#first-stimulus').style.visibility = 'hidden';
         display_element.querySelector('#second-stimulus').style.visibility = 'hidden';
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
