/**
 * jspsych-draw-circles
 * plugin for creating and labeling circles of different sizes
 * George Kachergis
 *
 * documentation: docs.jspsych.org
 */


jsPsych.plugins['draw-circles-practice'] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'draw-circles-practice',
    description: 'Prompts participant to draw a series of labeled circles of varying size.',
    parameters: {
      circle_labels: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Circle labels',
        default: undefined,
        array: true,
        description: 'Array of labels to apply to successively drawn circles.'
      },
      circle_diameter: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Circle diameter',
        default: 100,
        description: 'Starting diameter of new circles.'
      },
      sort_area_height: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Sort area height',
        default: .8*window.innerHeight, //550,
        description: 'The height of the container that subjects can move the stimuli in.'
      },
      sort_area_width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Sort area width',
        default: .9*window.innerWidth, //1024,
        description: 'The width of the container that subjects can move the stimuli in.'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Provide a reminder about the action the subject is supposed to take.'
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
        default:  'Continue',
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
    /*
    html += '<div '+
      'id="jspsych-circles-arena" '+
      'class="jspsych-circles-arena" '+
      'style="position: relative; width:'+trial.sort_area_width+'px; height:'+trial.sort_area_height+'px; border:2px solid #444;"'+
      '></div>';
    */
    html += '<br /><canvas id="canvas" width="'+ trial.sort_area_width + '" height="' + trial.sort_area_height + 
      '" style="border:1px solid #000000;"></canvas><br />';

    // check if prompt exists and if it is shown below
    if (trial.prompt !== null && trial.prompt_location == "below") {
      html += trial.prompt;
    }

    display_element.innerHTML = html;

    display_element.innerHTML += '<button id="jspsych-draw-circles-done-btn" class="jspsych-btn">'+trial.button_label+'</button>';

    var maxz = 1;

    // canvas stuff...
    canvas = document.getElementById("canvas");
    context = canvas.getContext('2d');

    context.lineWidth = 4;
    context.lineCap = 'round';
  
    context.font = "20px Georgia";
    yoffset = trial.sort_area_height / 2;
    xoffset = trial.sort_area_width / 4; 
    //context.fillText("Me", 100, yoffset);
    for (var i = 0; i<trial.circle_labels.length; i++) {
      if(i<4) { 
        row = 0;
      } else {
        row = 1
      }
      col = i % 4;
      context.fillText(trial.circle_labels[i], 50 + col*xoffset, 30 + row*yoffset);
      console.log(trial.circle_labels[i]);
    }

    circleCount = 0;  
    draggingDraw = false;
    bgColor = "#ffffff";
    circles = [];
    
    //event listeners to draw circles
    canvas.addEventListener('mousedown', dragStart, false);
    canvas.addEventListener('mousemove', drag, false);
    canvas.addEventListener('mouseup', dragStop, false);
    
    //event listener to delete circle
    canvas.addEventListener('dblclick', deleteCircle,false);
    // if we allow deletions, need to redraw the labels as well

    display_element.querySelector('#jspsych-draw-circles-done-btn').addEventListener('click', function(){

      var end_time = performance.now();
      var rt = end_time - start_time;
      // gather data
      // get position of drawn circles
      var locations = [];
      //var matches = display_element.querySelectorAll('.jspsych-free-sort-draggable');
      for(var i=0; i<circles.length; i++){
        if(i<trial.circle_labels.length) {
          label = trial.circle_labels[i]
        } else {
          label = "circle" + i // extra circles were drawn...
        }
        locations.push({
          "label": label, 
          "x": circles[i].x,
          "y": circles[i].y,
          "radius": circles[i].rad
        });
      }

      var trial_data = {
        "locations": JSON.stringify(locations),
        "rt": rt
      };

      console.log(locations);
      // advance to next part
      display_element.innerHTML = '';
      jsPsych.finishTrial(trial_data);
    });

  };

  // helper functions

  //Drawing of Circles with random colors 
  
  function dragStart(event) {
    draggingDraw = true;
    dragStartLocation = getCanvasCoordinates(event);
    color = "rgb(" + Math.floor(Math.random()*200) + "," + Math.floor(Math.random()*200) + "," + Math.floor(Math.random()*200) +")";
    getImage();
  }

  function drag(event) {
    var position;
    if (draggingDraw === true) {
        putImage();
        position = getCanvasCoordinates(event);
        drawCircle(position);
    context.fillStyle = color;
    context.fill();
    }
  }

  function dragStop(event) {
    draggingDraw = false;
    putImage();
    var position = getCanvasCoordinates(event);
    drawCircle(position);   
    context.fillStyle = color;
    context.fill(); 
    circleCount=circleCount+1;
    tempCircle = {x:tempX, y:tempY, rad:radius, color:color};
  
    circles.push(tempCircle);
  }
  
  function getCanvasCoordinates(event) {
    var x = event.clientX - canvas.getBoundingClientRect().left;
    var y = event.clientY - canvas.getBoundingClientRect().top;
    return {x: x, y: y};
  }

  function getImage() {
    canvasImage = context.getImageData(0, 0, canvas.width, canvas.height);
  }

  function putImage() {
    context.putImageData(canvasImage, 0, 0);
  }

  function drawCircle(position) {
  
    tempX=dragStartLocation.x;
    tempY=dragStartLocation.y;
    
    radius = Math.sqrt(Math.pow((tempX - position.x), 2) + Math.pow((tempY - position.y), 2));
    context.beginPath();
    context.arc(tempX, tempY, radius, 0, 2 * Math.PI, false);
    context.closePath();
  }


//On click of Erase Button
  function drawScreen() {
    circleCount=0;
    circles = [];
    context.fillStyle = bgColor;
    context.fillRect(0,0,canvas.width,canvas.height);
  } 



//To Delete the Circles 

function drawCircles() {
    var i;
    var x;
    var y;
    var rad;
    var color;
    
    context.fillStyle = bgColor;
    context.fillRect(0,0,canvas.width,canvas.height);   
    
    for (i=0; i < circleCount; i++) {
      rad = circles[i].rad;
      x = circles[i].x;
      y = circles[i].y;
      color=circles[i].color;
      context.beginPath();
      context.arc(x, y, rad, 0, 2*Math.PI, false);
      context.closePath();
      context.fillStyle = color;
      context.fill();
  }   
} 
  
//To check whether the circle was clicked
function isCircleClicked(shape,mx,my) {   
    var dx;
    var dy;
    dx = mx - shape.x;
    dy = my - shape.y;
    return (dx*dx + dy*dy < shape.rad*shape.rad);
}


//To Delete the Circles (on double-click)

  function deleteCircle(event) {
    var i;
    var bRect = canvas.getBoundingClientRect();

    dragIndexDelete=-1;
    
    mouseX = (event.clientX - bRect.left)*(canvas.width/bRect.width);
    mouseY = (event.clientY - bRect.top)*(canvas.height/bRect.height);
    //To find that which circle has been clicked
    for (i=0; i < circleCount; i++) {
      if  (isCircleClicked(circles[i], mouseX, mouseY)) {
        dragIndexDelete = i;    
      }
    }
    //Remove the circle from the array
    if ( dragIndexDelete> -1 ){
      circles.splice(dragIndexDelete,1)[0];
      circleCount=circleCount-1;
    }
    
    if (event.preventDefault) {
      event.preventDefault();
    } 
    else if (event.returnValue) {
      event.returnValue = false;
    } 
    drawCircles();        
    return false;
  }


//To Move the Circles (doesn't currently work..)

  function mouseDown(event) {
    var i;
    var highestIndex = -1;    
    var bRect = canvas.getBoundingClientRect();
  
    mouseX = (event.clientX - bRect.left)*(canvas.width/bRect.width);
    mouseY = (event.clientY - bRect.top)*(canvas.height/bRect.height);
    
    //To find which circle has been clicked
    for (i=0; i < circleCount; i++) {
      if  (isCircleClicked(circles[i], mouseX, mouseY)) {
        draggingMove = true;
        if (i > highestIndex) {
          dragX = mouseX - circles[i].x;
          dragY = mouseY - circles[i].y;
          highestIndex = i;
          dragIndexMove = i;
        }       
      }
    }
    if (draggingMove) {
      window.addEventListener("mousemove", mouseMove, false);
      //Remove the circle and then push it to the top of the array
      circles.push(circles.splice(dragIndexMove,1)[0]);
      
    }
    canvas.removeEventListener("mousedown", mouseDown, false);
    window.addEventListener("mouseup", mouseUp, false);
    
    if (event.preventDefault) {
        event.preventDefault();
      } 
    else if (event.returnValue) {
        event.returnValue = false;
      } 
    return false;
  }
  
function mouseUp(event) {
    canvas.addEventListener("mousedown", mouseDown, false);
    window.removeEventListener("mouseup", mouseUp, false);
    if (draggingMove) {
      draggingMove = false;
      window.removeEventListener("mousemove", mouseMove, false);
    }
}

function mouseMove(event) {
    var posX;
    var posY;
    var shapeRad = circles[circleCount-1].rad;
    var minX = shapeRad;
    var maxX = canvas.width - shapeRad;
    var minY = shapeRad;
    var maxY = canvas.height - shapeRad;
    
    var bRect = canvas.getBoundingClientRect();
    mouseX = (event.clientX - bRect.left)*(canvas.width/bRect.width);
    mouseY = (event.clientY - bRect.top)*(canvas.height/bRect.height);
    
    posX = mouseX - dragX;
    posX = (posX < minX) ? minX : ((posX > maxX) ? maxX : posX);
    posY = mouseY - dragY;
    posY = (posY < minY) ? minY : ((posY > maxY) ? maxY : posY);
    
    circles[circleCount-1].x = posX;
    circles[circleCount-1].y = posY;
    circles[circleCount-1].rad = shapeRad;
    
    drawCircles();
}



  return plugin;
})();
