/////// experiment parameters 
var stimulus_pair = 30 
var stimulus_presentation_length = 1000
var stimulus_interval_length = 500
var resp_prompt = "Can you describe the differences you saw?"


var stimulus_index = Array.from({ length: stimulus_pair }, (v, i) => i+1)
var image_a = stimulus_index.map(i =>'images/change_detection/' + i + 'a.jpg')
var image_b = stimulus_index.map(i =>'images/change_detection/' + i + 'b.jpg')


//////// PRELOAD
var cd_audio = []

var cd_images = []
cd_images = cd_images.concat(image_a)
cd_images = cd_images.concat(image_b)

var cd_video = []

audio = audio.concat(cd_audio)
images = images.concat(cd_images)
video = video.concat(cd_video)

// variables
var task_stimulus_a = stimulus_index.map(i =>'<img src="images/change_detection/' + i + 'a.jpg" style="width:800px;height:600px;">')
var task_stimulus_b = stimulus_index.map(i =>'<img src="images/change_detection/' + i + 'b.jpg" style="width:800px;height:600px;">')


 var all_change_detection_trials = []
    
    for (i = 0; i < stimulus_pair; i++){
        
        var stimulus_a = task_stimulus_a[i]
        var stimulus_b = task_stimulus_b[i]
        
        var first_stimulus = {
        type: "html-keyboard-response", 
        stimulus: stimulus_a,
        choices:["Space"], 
        //stimulus_duration: 1000, 
        trial_duration: stimulus_presentation_length,
        response_ends_trial: false, 
        }
        
        var interval = {
        type: "html-keyboard-response", 
        stimulus: "",
        choices:jsPsych.NO_KEYS, 
        trial_duration: stimulus_interval_length,
        response_ends_trial: false, 
        }
        
        
    
    
        var second_stimulus = {
            type: "html-keyboard-response", 
            stimulus: stimulus_b,
            choices:["Space"],
            //stimulus_duration: 1000, 
            trial_duration: stimulus_presentation_length,
            response_ends_trial: false 
        }
        
         
        
        var second_stimulus_if_node = {
            timeline: [interval, second_stimulus], 
            conditional_function: function(){
                 var data = jsPsych.data.get().last(1).values()[0];
                if(jsPsych.pluginAPI.compareKeys(data.response, 'Space')){
                    return false;
                    } else {
                return true;
                }
                }
        }
        
        
        
        var trial_while_loop = {
        timeline: [interval, first_stimulus, second_stimulus_if_node],
        loop_function: function (data) {
            console.log(data.values())
            
            
            if (data.values().length == 4){
                if(data.values()[1].response == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('Space') | 
                  data.values()[3].response == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('Space')){
                    return false
                }else{
                    return true 
                }  
            }else{
                return false
            }
        }
        }
        
        var survey_trial = {
                type: 'survey-text',
                questions: [
                    {prompt: resp_prompt, name: 'Description' + i}, 
                ],
            };
        
        all_change_detection_trials.push(trial_while_loop, survey_trial)
        
        
    }

// PACKAGING 
var change_detection = all_change_detection_trials