/**
 * jspsych-image-button-response
 * Josh de Leeuw
 *
 * plugin for displaying a stimulus and getting a keyboard response
 *
 * documentation: docs.jspsych.org
 *
 **/

jsPsych.plugins["ebbinghaus"] = (function() {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('ebbinghaus', 'stimulus', 'image');

  plugin.info = {
    name: 'ebbinghaus',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.IMAGE,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The image to be displayed'
      },
      choices: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Choices',
        default: undefined,
        array: true,
        description: 'The labels for the buttons.'
      },
      button_html: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button HTML',
        default: '<button class="jspsych-btn">%choice%</button>',
        array: true,
        description: 'The html of the button. Can create own style.'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Any content here will be displayed under the button.'
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
        description: 'How long to show the trial.'
      },
      feedback_duration:  {
          type: jsPsych.plugins.parameterType.INT, 
          pretty_name: 'Feedback duration', 
          default: null, 
          description: 'How long to show the feedback'
      },
      margin_vertical: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Margin vertical',
        default: '0px',
        description: 'The vertical margin of the button.'
      },
      margin_horizontal: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Margin horizontal',
        default: '100px',
        description: 'The horizontal margin of the button.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, then trial will end when user responds.'
      },
      correct_response: {
        type: jsPsych.plugins.parameterType.INT, 
        pretty_name: 'the correct repsonse for this trial', 
          default: null, 
          description: 'the button that participants should be pushing'
      },
      feedback_provided: {
          type: jsPsych.plugins.parameterType.BOOL, 
          pretty_name : 'provide feedback to the trials',
          default: false, 
          description: "If true, then a feedback would be provided"
      }
    }
  }

  plugin.trial = function(display_element, trial) {

    if(typeof trial.choices === 'undefined'){
      console.error('Required parameter "choices" missing in image-button-response');
    }
    if(typeof trial.stimulus === 'undefined'){
      console.error('Required parameter "stimulus" missing in image-button-response');
    }

      
   //'style = "width:720px; height:540px;"'
    /*  
    var html = '<img src="'+trial.stimulus+'" id="jspsych-image-button-response-stimulus"></img>'  */
    // display stimulus
    /*var html = '<img src="' +trial.stimulus+
        'style ="position = relative"' + 
        '"id="jspsych-image-button-response-stimulus"></img>';*/

      
    var html = '<img src="'+trial.stimulus +'" id="jspsych-image-button-response-stimulus"'+
        'style="position: relative; cursor: none; width:720px;height:480 px; top:0 px; left:3px;">'+'</img>';
      
    //display buttons
    var buttons = [];
    if (Array.isArray(trial.button_html)) {
      if (trial.button_html.length == trial.choices.length) {
        buttons = trial.button_html;
      } else {
        console.error('Error in image-button-response plugin. The length of the button_html array does not equal the length of the choices array');
      }
    } else {
      for (var i = 0; i < trial.choices.length; i++) {
        buttons.push(trial.button_html);
      }
    }
    html += '<div id="jspsych-image-button-response-btngroup">';

      
      
    for (var i = 0; i < trial.choices.length; i++) {
      var str = buttons[i].replace(/%choice%/g, trial.choices[i]);
      html += '<div class="jspsych-image-button-response-button" style="display: inline-block; margin:'+trial.margin_vertical+' '+trial.margin_horizontal+'" id="jspsych-image-button-response-button-' + i +'" data-choice="'+i+'">'+str+'</div>';
    }
    html += '</div>';

    //show prompt if there is one
    if (trial.prompt !== null) {
      html += trial.prompt;
    }

    display_element.innerHTML = html;

    // start timing
    var start_time = Date.now();

    for (var i = 0; i < trial.choices.length; i++) {
      display_element.querySelector('#jspsych-image-button-response-button-' + i).addEventListener('click', function(e){
        var choice = e.currentTarget.getAttribute('data-choice'); // don't use dataset for jsdom compatibility
        after_response(choice);
      });
    }
      
      
  
        
        
        
      
      
      
      
      

    // store response
    var response = {
      rt: null,
      button: null
    };

    // function to handle responses by the subject
    function after_response(choice) {

      // measure rt
      var end_time = Date.now();
      var rt = end_time - start_time;
      response.button = choice;
      response.rt = rt;
        
      if (trial.feedback_provided){ 
        
        if (response.button == trial.correct_response){
          display_element.innerHTML ="Great!";
          jsPsych.pluginAPI.setTimeout(function(){end_trial()}, 2000)
        }else{
          display_element.innerHTML ="Oops, remember to click the larger circle! Let's try that again!";
         jsPsych.pluginAPI.setTimeout(function(){end_trial()}, trial.feedback_duration)
        }
      } 

      // after a valid response, the stimulus will have the CSS class 'responded'
      // which can be used to provide visual feedback that a response was recorded
      display_element.querySelector('#jspsych-image-button-response-stimulus').className += 'responded';

      // disable all the buttons after a response
      var btns = document.querySelectorAll('.jspsych-image-button-response-button button');
      for(var i=0; i<btns.length; i++){
        //btns[i].removeEventListener('click');
        btns[i].setAttribute('disabled', 'disabled');
      }
        
     
        
    

      if (trial.response_ends_trial) {
        end_trial();
      }
    };
      
    // check if needed feedback 
   
     
      
      
      

    // function to end trial when it is time
    function end_trial() {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // gather the data to store for the trial
      var trial_data = {
        "rt": response.rt,
        "stimulus": trial.stimulus,
        "button_pressed": response.button
      };
    
       
    if (response.button == 0){
        trial_data.button_side = "L"
    } else{
        trial_data.button_side = "R"
    }
        
    var ebbinghaus_image_answer = {
            'images/ebb_illu/N_82_100.jpg':1,
            'images/ebb_illu/N_90_100.jpg':1,
            'images/ebb_illu/N_98_100.jpg':1,
            'images/ebb_illu/N_100_86.jpg':0,
            'images/ebb_illu/N_100_94.jpg':0,
            'images/ebb_illu/N_100_102.jpg':1,
            'images/ebb_illu/N_100_110.jpg':1,
            'images/ebb_illu/N_100_118.jpg':1, 
            'images/ebb_illu/N_106_100.jpg':0,
            'images/ebb_illu/N_114_100.jpg':0,
            'images/ebb_illu/H_98-125_100-50.jpg':1,
            'images/ebb_illu/H_100-50_98-125.jpg':0,
            'images/ebb_illu/H_100-125_102-50.jpg':1,
            'images/ebb_illu/H_102-50_100-125.jpg':0,
            'images/ebb_illu/I_82-50_100-125.jpg':1,
            'images/ebb_illu/I_86-50_100-125.jpg':1,
            'images/ebb_illu/I_90-50_100-125.jpg':1,
            'images/ebb_illu/I_94-50_100-125.jpg':1,
            'images/ebb_illu/I_98-50_100-125.jpg':1,
            'images/ebb_illu/I_100-50_102-125.jpg':1,
            'images/ebb_illu/I_100-50_106-125.jpg':1,
            'images/ebb_illu/I_100-50_110-125.jpg':1,
            'images/ebb_illu/I_100-50_114-125.jpg':1,
            'images/ebb_illu/I_100-50_118-125.jpg':1,
            'images/ebb_illu/I_100-125_82-50.jpg':0,
            'images/ebb_illu/I_100-125_86-50.jpg':0,
            'images/ebb_illu/I_100-125_90-50.jpg':0,
            'images/ebb_illu/I_100-125_94-50.jpg':0,
            'images/ebb_illu/I_100-125_98-50.jpg':0,
            'images/ebb_illu/I_102-125_100-50.jpg':0,
            'images/ebb_illu/I_106-125_100-50.jpg':0,
            'images/ebb_illu/I_110-125_100-50.jpg':0,
            'images/ebb_illu/I_114-125_100-50.jpg':0,
            'images/ebb_illu/I_118-125_100-50.jpg':0
        }
        
    
    var answer_correct = 0
    if (ebbinghaus_image_answer.hasOwnProperty(trial_data.stimulus)){
        if (ebbinghaus_image_answer[trial_data.stimulus] == trial_data.button_pressed){
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


    

    // hide image if timing is set
    if (trial.stimulus_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        display_element.querySelector('#jspsych-image-button-response-stimulus').style.visibility = 'hidden';
      }, trial.stimulus_duration);
    }

    // end trial if time limit is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }
      
      

  };

  return plugin;
})();
