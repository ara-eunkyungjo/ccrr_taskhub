// Sociogram task 
var sociogram_audio = [
]

var sociogram_images = [
]

var sociogram_videos = []

audio = audio.concat(sociogram_audio)
images = images.concat(sociogram_images)
video = video.concat(sociogram_videos)

// TASK VARIABLES 

 var instruction = {
    type: 'instructions',
    pages: [
        
    ],
    show_clickable_nav: true
}  
 
 var exp = {
        type: "konva-draw-circle",
        canvas_width: 1000,
        canvas_height: 720,
        prompt:circle3,
        button_label: circle_game_button
    }    
 
 
 var sociogram_task = [instruction, exp]
 
 