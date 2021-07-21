
/**
 * jspsych-free-sort
 * plugin for drag-and-drop sorting of a collection of images
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 */


jsPsych.plugins['horizon-sticker'] = (function() {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('free-sort', 'stimuli', 'image');

  plugin.info = {
    name: 'horizon-sticker',
    description: '',
    parameters: {
      stimuli: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Stimuli',
        default: undefined,
        array: true,
        description: 'Images to be displayed.'
      },
      stim_height: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus height',
        default: 100,
        description: 'Height of images in pixels.'
      },
      stim_width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus width',
        default: 100,
        description: 'Width of images in pixels'
      },
      
      horizon_height: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'horizon height',
        default: 5,
        description: 'Height of horizon in pixels.'
      },
        
      horizon_width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'horizon width',
        default: 454,
        description: 'width of horizon in pixels.'
      },
       
      sort_area_height: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Sort area height',
        default: 334.4,
        description: 'The height of the container that subjects can move the stimuli in.'
      },
      sort_area_width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Sort area width',
        default: 451.4 ,
        description: 'The width of the container that subjects can move the stimuli in.'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'It can be used to provide a reminder about the action the subject is supposed to take.'
      },
      prompt_location: {
        type: jsPsych.plugins.parameterType.SELECT,
        pretty_name: 'Prompt location',
        options: ['above','below'],
        default: 'above',
        description: 'Indicates whether to show prompt "above" or "below" the sorting area.'
      },
      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default:  'Done!',
        default:  'Done!',
        description: 'The text that appears on the button to continue to the next trial.'
      }
    }
  }

  plugin.trial = function(display_element, trial) {

    var start_time = performance.now();

    var html = "";
    // check if there is a prompt and if it is shown above
    if (trial.prompt !== null && trial.prompt_location == "above") {
      html += trial.prompt;
    }

      
 
    html += '<div '+
      'id="jspsych-free-sort-arena" '+
      'class="jspsych-free-sort-arena" '+
      'style="position: relative; up: 0%; left: 50%;transform: translateX(-50%);align: center;width:'+trial.sort_area_width+'px; height:'+trial.sort_area_height+'px; border:2px solid #444;"'+
      '></div>';
      
   

    // check if prompt exists and if it is shown below
    if (trial.prompt !== null && trial.prompt_location == "below") {
      html += trial.prompt;
    }

    display_element.innerHTML = html;

    // store initial location data
    var init_locations = [];

      
    //display the weird horizon stickers:
    var coords = {
        x: trial.sort_area_width,
        y: 350
    };
      
      
    display_element.querySelector("#jspsych-free-sort-arena").innerHTML += '<img '+
        'src = "images/sort/horizon_2.png" id="horizon"'+
        'data-src= "images/sort/horizon_2.png"'+
        'class="jspsych-free-sort-draggable" '+
        'draggable="false" '+
        'style="position: relative; cursor: move; width:'+trial.horizon_width+'px; height:'+trial.horizon_height+'px; top:'+coords.y +'px; left:'+coords.x+'px;">'+
        '</img>';
 

            
    for (var i = 0; i < trial.stimuli.length; i++) {       
        if(i== 0 || i == 1){
          //bike_num is 0 or 1
		  var coords = {
				x: -1*trial.stim_width - (i%2) * trial.stim_width,
				y: trial.stim_height * Math.floor(i/2)
		  }
		}else if(i==2 || i == 3){
         // car
          var coords = {
				x: -1*trial.stim_width - (i%2) * trial.stim_width-85,
				y: 60
           }
        }else if (i == 4){
            // cat 1
             var coords = {
				x: -20,
				y: 150
           }
            
        } else if (i == 5){
            // cat 2
            var coords = {
				x: -40,
				y: 150
           }
            
        } else if (i ==6){
            // dog 1
            var coords = {
				x: -100,
				y: 150
           }
            
        }else if (i ==7){
            //dog 2
            var coords = {
				x: -130,
				y: 150
           }
           
        }else if (i==8){
            //flower 1
            var coords = {
				x: -180,
				y: 150
           }
            
        }else if (i==9){
            // flower 2
            var coords = {
				x: -250,
				y: 150
           }
            
        }else if (i==10){
            // flower 3
             var coords = {
				x: -270,
				y: 150
           }
            
        }else if (i==11){
            // flower 4
             var coords = {
				x: -300,
				y: 150
           }
            
        }else if (i==18){
            //person 1
            var coords = {
				x: -40,
				y: 200
           }
            
        }else if (i==19){
            //person 2
            var coords = {
				x: -65,
				y: 200
           }
            
        }else if (i==20){
            //person 3
            var coords = {
				x: -90,
				y: 200
           }
            
        }else if (i==21){
            // person 4
            var coords = {
				x: -115,
				y: 200
           }
            
        }else if (i==22){
            // person 5
            var coords = {
				x: -140,
				y: 200
           }
            
        }else if (i==23){
            // person 6
            var coords = {
				x: -165,
				y: 200
           }
            
        }else if (i==24){
            // person 7
            var coords = {
				x: -190,
				y: 200
           }
            
        }else if (i==25){
            // person 8
            var coords = {
				x: -210,
				y: 200
           }
            
        }else if (i == 12){
            // mid house 1 (house 1)
            var coords = {
                x : trial.sort_area_width + 270,
                y : 0
            }
            
        }else if (i == 13){
            // mid house 2 (house2)
            var coords = {
                x : trial.sort_area_width ,
                y : 120
            }
            
        }else if (i == 14){
            // small house 1(house 3)
            var coords = {
                x : trial.sort_area_width + 85,
                y : 130
            }
            
        }else if (i ==15){
            // small house 2(house4)
            var coords = {
                x : trial.sort_area_width + 80,
                y : 180
            }
            
        }else if (i == 16){
            // big house 2(house5)
            var coords = {
                x : trial.sort_area_width + 130,
                y : 0
            }
            
        }else if (i == 17){
            // big house 1 (house6)
            var coords = {
                x : trial.sort_area_width ,
                y : 0
            }
            
        }else if (i==26){
            // big tree 1 (tree 1)
            var coords = {
                x: trial.sort_area_width + 270,
                y: 140
            }
            
        }else if (i==27){ 
            // small tree 1 (tree 2)
             var coords = {
                x: trial.sort_area_width,
                y: 230
            }
        }else if (i==28){
            // small tree 2 (tree 3)
             var coords = {
                x: trial.sort_area_width +80,
                y: 230
            }
            
        }else if(i==29){
            // big tree 2 (tree 4)
             var coords = {
                x: trial.sort_area_width + 140,
                y: 150
            }
            
        };  

          
/*
      display_element.querySelector("#jspsych-free-sort-arena").innerHTML += '<img '+
        'src="'+trial.stimuli[i]+'" '+
        'data-src="'+trial.stimuli[i]+'" '+
        'class="jspsych-free-sort-draggable" '+
        'draggable="false" '+
        'style="position: absolute; cursor: move; width:'+trial.stim_width+'px; height:'+trial.stim_height+'px; top:'+coords.y+'px; left:'+coords.x+'px;">'+
        '</img>';
*/

	  const image = document.createElement('img')
      image.src = trial.stimuli[i]
      image.dataset.src = trial.stimuli[i]
      image.draggable = false
      image.classList.add('jspsych-free-sort-draggable')

      display_element.querySelector("#jspsych-free-sort-arena").appendChild(image)

      width = image.width = trial.dimensions[i][0]
      height = image.height = trial.dimensions[i][1]
//      var coords = random_coordinate(trial.sort_area_width - width, trial.sort_area_height - height);

      image.style = 'position: absolute; cursor: move; top:'+coords.y+'px; left:'+coords.x+'px;'



      init_locations.push({
        "src": trial.stimuli[i],
        "x": coords.x,
        "y": coords.y
      });
    }
    

/*
    init.locations.push({
        "src": "images/sort/horizon.png",
        "x": coords.x, 
        "y": coords.y   
    })
     */
    
    

    display_element.innerHTML += '<button id="jspsych-free-sort-done-btn" class="jspsych-btn">'+trial.button_label+'</button>';

    var maxz = 1;

    var moves = [];

 var draggables = display_element.querySelectorAll('.jspsych-free-sort-draggable');

    for(var i=0;i<draggables.length; i++){
      draggables[i].addEventListener('mousedown', function(event){
        var x = event.pageX - event.currentTarget.offsetLeft;
        var y = event.pageY - event.currentTarget.offsetTop - window.scrollY;
        var elem = event.currentTarget;
        if(elem.id != 'horizon'){
         elem.style.zIndex = ++maxz;
        }else{
         elem.style.zIndex = -5;
        }


        var mousemoveevent = function(e){
			elem.style.top =  Math.min(trial.sort_area_height - elem.height, Math.max(0,(e.clientY - y))) + 'px';
			elem.style.left = Math.min(trial.sort_area_width  - elem.width,  Math.max(0,(e.clientX - x))) + 'px';
        }
        document.addEventListener('mousemove', mousemoveevent);

        var mouseupevent = function(e){
          document.removeEventListener('mousemove', mousemoveevent);
          moves.push({
            "src": elem.dataset.src,
            "x": elem.offsetLeft,
            "y": elem.offsetTop
          });
          document.removeEventListener('mouseup', mouseupevent);
        }
        document.addEventListener('mouseup', mouseupevent);
      });
    }

    display_element.querySelector('#jspsych-free-sort-done-btn').addEventListener('click', function(){

      var end_time = performance.now();
      var rt = end_time - start_time;
      // gather data
      // get final position of all objects
      var final_locations = [];
      var matches = display_element.querySelectorAll('.jspsych-free-sort-draggable');
      for(var i=0; i<matches.length; i++){
        final_locations.push({
          "src": matches[i].dataset.src,
          "x": parseInt(matches[i].style.left),
          "y": parseInt(matches[i].style.top)
        });
      }

      var trial_data = {
        "init_locations": JSON.stringify(init_locations),
        "moves": JSON.stringify(moves),
        "final_locations": JSON.stringify(final_locations),
        "rt": rt
      };

      // advance to next part
      display_element.innerHTML = '';
      jsPsych.finishTrial(trial_data);
    });

  };

  // helper functions

  function random_coordinate(max_width, max_height) {
    var rnd_x = Math.floor(Math.random() * (max_width - 1));
    var rnd_y = Math.floor(Math.random() * (max_height - 1));

    return {
      x: rnd_x,
      y: rnd_y
    };
  }

  return plugin;
})();
