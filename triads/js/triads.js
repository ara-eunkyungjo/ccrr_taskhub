// a bunch of preloading stuff 

// helper function 

function chunk(array, size) {
    const chunked_arr = [];
    let index = 0;
    while (index < array.length) {
        chunked_arr.push(array.slice(index, size + index));
        index += size;
    }
    return chunked_arr;
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}


// setting up


const N_TRIAL = 20; // number of items displayed on 1 page
triads_pages = [];   
var all_dup_triads = shuffle([
    dup_triads_1,
    dup_triads_2,
    dup_triads_3,
    dup_triads_4,
    dup_triads_5,
    dup_triads_6,
    dup_triads_7,
    dup_triads_8,
    dup_triads_9,
    dup_triads_10,
    dup_triads_11,
    dup_triads_12,
    dup_triads_13,
    dup_triads_14,
    dup_triads_15,
    dup_triads_16,
    dup_triads_17,
    dup_triads_18,
    dup_triads_19
    //dup_triads_20
]);

 ////////////////////////////////////////////////////////////////////////
   ///////////////////// create 1st half of Qs ////////////////////////////
   ////////////////////////////////////////////////////////////////////////
        
   questions1stHalf = [];
        
   // CHANGE: divide single triads in 2
   //for (var i = 0; i < all_triads.length; i++) {
   var next_single_triad = 0; 
   for (var i = 0; i < single_triads.length / 2; i++) {
       questions1stHalf.push({prompt: single_triads[i][0], name: single_triads[i][0] + "_triad" + i, options: shuffle(single_triads[i][1]), required: true, horizontal: false, stimulus_type: "triad"});
       next_single_triad++; 
   }
   //console.log("without fillers 1st half single triad: " + questions1stHalf.length);
   
   // CHANGE: add dup fillers. choose one from each array
   for (var i = 0; i < all_dup_triads.length; i++)  { // iterate through all groups
       //just take the first group because it's already shuffled
       curr_triads = all_dup_triads[i][0];
       //console.log(curr_triads);
       for (var j = 0; j < curr_triads.length; j++) {
           var curr_options = shuffle(curr_triads[j][1]); // shuffle the options
           var item = {
               prompt: curr_triads[j][0], 
               name: curr_triads[j][0] + "_triadA" + j, 
               options: curr_options, 
               required: true, 
               horizontal: false,
               stimulus_type: "triad"
               
           }
           questions1stHalf.push(item);
       }
   }


var n_fillers = questions1stHalf.length; 


var next_filler = 0;
//add all fillers until n_fillers
for (var i = 0; i < n_fillers; i++) {
    var curr_options = shuffle(triads_all_fillers[i][1]); // shuffle the options
        var item =  {
             prompt: triads_all_fillers[i][0],
             name: triads_all_fillers[i][0] + "_filler",
             options: curr_options, 
             required: true, 
             horizontal: false,
             stimulus_type: "filler"
        }
        questions1stHalf.push(item);
        next_filler++; 
}

 
questions2ndHalf = [];       
// CHANGE: divide single triads in 2
//for (var i = 0; i < all_triads.length; i++) {
for (var i = next_single_triad; i < single_triads.length; i++) {
    questions2ndHalf.push({prompt: single_triads[i][0], name: single_triads[i][0] + "_triad" + i, options: shuffle(single_triads[i][1]), required: true, horizontal: false, stimulus_type: "triad"});
}
    //console.log("without fillers 2nd half single triad: " + questions2ndHalf.length);
// CHANGE: add dup triads. choose one from each array
for (var i = 0; i < all_dup_triads.length; i++)  { // iterate through all groups
    //just take the second group because it's already shuffled
    curr_triads = all_dup_triads[i][1];
    //console.log(curr_triads);
    for (var j = 0; j < curr_triads.length; j++) {
        var curr_options = shuffle(curr_triads[j][1]); // shuffle the options
        var item = {
            prompt: curr_triads[j][0], 
            name: curr_triads[j][0] + "_triadB" + j, 
            options: curr_options, 
            required: true, 
            horizontal: false, 
            stimulus_type: "triad"
        }
        questions2ndHalf.push(item);
    }
}

var n_fillers = next_filler + questions2ndHalf.length; 
for (var i = next_filler; i < n_fillers; i++) {
    var curr_options = shuffle(triads_all_fillers[i][1]); // shuffle the options
        var item =  {
             prompt: triads_all_fillers[i][0],
             name: triads_all_fillers[i][0] + "_filler",
             options: curr_options, 
             required: true, 
             horizontal: false,  
             stimulus_type: "filler"
        }
        questions2ndHalf.push(item);
}

var all_questions = []
    questions1stHalf = shuffle(questions1stHalf);
    for (var i = 0; i < questions1stHalf.length; i++) {
        all_questions.push(questions1stHalf[i]);
    }
    questions2ndHalf = shuffle(questions2ndHalf);
    for (var i = 0; i < questions2ndHalf.length; i++) {
        all_questions.push(questions2ndHalf[i]);
    }

    var pages = chunk(all_questions, N_TRIAL); 
    
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
     
    var n_trials = pages.length;
    for (var i = 0; i < pages.length; i++) {
        curr_questions = shuffle(pages[i]);
        if (curr_questions.length >= N_TRIAL) {
            if (triads_attention_checks.length > 0) {
                curr_att_check = triads_attention_checks.shift();
                var index = randomIntFromInterval(Math.ceil(N_TRIAL / 2), N_TRIAL - 1);
                curr_questions.splice(index, 0, {
                    prompt: curr_att_check[0], 
                    name: curr_att_check[0] + "_attention check", 
                    options: shuffle(curr_att_check[1]), 
                    required: true,
                    horizontal: false,
                    stimulus_type: "attention check"     
                });
            }
        }
        //console.log(curr_questions.map(({stimulus_type})=>stimulus_type)); 
        curr_triad_page = 
        {
            type: 'survey-multi-choice',
            questions: curr_questions,
            preamble: question_preamble, 
            randomize_question_order: false,
            timeout: null,
            post_trial_gap: 10,
            data: {
                stimulus_type: curr_questions.map(({stimulus_type})=>stimulus_type),
                prompt: curr_questions.map(({prompt})=>prompt),
                options: curr_questions.map(({options})=>options)
            },
            on_finish: function() {
                // at the end of each trial, update the progress bar
                // based on the current value and the proportion to update for each trial
                var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
                jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
            }
        };
        triads_pages.push(curr_triad_page);
    }
triads = triads_pages