// Change Detection Task 

//////// PRELOAD 
// a bunch of change detection images 

var change_detection_audio = []
var change_detection_images = []
var chagne_detection_video = []


audio = audio.concat(change_detection_audio)
images = images.concat(change_detection_images)
video = video.concat(chagne_detection_video)


// TASK VARIABLES 
var stimulus_pair = 4 
var stimulus_presentation_length = 560
var stimulus_interval_length = 80
var max_time = 5 * 1000 


var resp_prompt = change_detection_prompt
var manipulation_prompt = change_detection_manipulation_prompt

var stimulus_index = Array.from({ length: stimulus_pair }, (v, i) => i+1)
var task_stimulus_a = stimulus_index.map(i =>'<img src="images/change_detection/' + i + 'a.jpg" style="width:800px;height:600px;">')
var task_stimulus_b = stimulus_index.map(i =>'<img src="images/change_detection/' + i + 'b.jpg" style="width:800px;height:600px;">')
    


// Set up the experiment 
var all_change_detection_trials = []
    
for (i = 0; i < stimulus_pair; i++){        
        // shuffle within pair 
        var stimuli = [task_stimulus_a[i], task_stimulus_b[i]]
        var stimuli = shuffle(stimuli)
        
        var first_stimulus = {
        type: "html-keyboard-response", 
        data: {
           variable_type: "change_detection_trialA" 
        },     
        stimulus: stimuli[0],
        choices:["Space"], 
        //stimulus_duration: 1000, 
        trial_duration: stimulus_presentation_length,
        response_ends_trial: false, 
        }
        
        var interval = {
        type: "html-keyboard-response", 
        data: {
           variable_type: "change_detection_trial_interval" 
        },    
        stimulus: "",
        choices:jsPsych.NO_KEYS, 
        trial_duration: stimulus_interval_length,
        response_ends_trial: false, 
        }
        
        
    
    
        var second_stimulus = {
            type: "html-keyboard-response",
            data: {
                variable_type: "change_detection_trialB" 
            },
            stimulus: stimuli[1],
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
           
            var first_trial = jsPsych.data.get().filter({rt:null}).first().values()[0]
            var last_survey = jsPsych.data.get().filter({trial_type:"survey-text"}).last().values()[0]
            
            var end_time = jsPsych.data.get().last().values()[0].time_elapsed
            
            if(typeof last_survey === "undefined"){
                // calculate time using the starting trial 
                var start_time = first_trial.time_elapsed    
                
            }else{
                // calculate time using the last survey trial 
                var start_time = last_survey.time_elapsed    
               
            }
            
            if(end_time - start_time > max_time){

                return false
            }    
            
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
        
        var describe_difference_trial = {
                type: 'survey-text',
                data: {
                variable_type: "change_detection_report" 
            },
                questions: [
                    {prompt: resp_prompt, name: 'Description' + i}, 
                ],
            };
        
        var change_detection_trial = [trial_while_loop, describe_difference_trial]
        
        all_change_detection_trials.push(change_detection_trial)
        
        
    }
    
all_change_detection_trials = shuffle(all_change_detection_trials)
all_change_detection_trials = all_change_detection_trials.flat()

var manipulation_check_stimuli = stimulus_index.map(i =>
                                             ({prompt: '<img src="images/change_detection/' + i + 'a.jpg" style="width:400px;height:300px;">' +  '<img src="images/change_detection/' + i + 'b.jpg" style="width:400px;height:300px;">', name: "pair" + i})
                                             ) 
    
        
manipulation_check_stimuli = shuffle(manipulation_check_stimuli)
    
var manipulation_trials = []
        
for (i = 0; i < stimulus_pair; i++){

        manipulation_check_stimulus = manipulation_check_stimuli[i].prompt
        console.log(manipulation_check_stimulus)
         var manipulation_trial = {
                type: 'survey-text',
                data: {
                variable_type: "change_detection_manipulation_check" 
            },
                questions: [
                    {prompt: manipulation_check_stimulus + manipulation_prompt}, 
                ],
                required: true 
            };
        
        manipulation_trials.push(manipulation_trial)
    }

var change_detection_task = []
change_detection_task = change_detection_task.concat[all_change_detection_trials]
change_detection_task = change_detection_task.concat[manipulation_trials]
