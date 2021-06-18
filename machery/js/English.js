//Tell people to use the right broswer
browserDetection_pre = "Hi there, it looks like you are using "
browserDetection_post = " browser. This page only works in Chrome or Firefox--please open this page using Chrome or Firefox. If you found this page through Amazon Mechanical Turk and you do not have access to Chrome or Firefox, please return this HIT."

// Stanford Consent
first_page_instruction = [
    "<div class='w3-container' style='width: 600px; bottom-padding: 20px; text-align: left;'>" +
    "<div style='width: 568px; margin: 0 auto; text-align: center; background-color: #8C1516; padding: 20px 15px 10px 10px'>" +
    "<img src='media/images/infrastructure/stanford.png' height='46' width='360' alt='Stanford University'></div>" +
    "<center><p><strong>Stanford Language and Cognition Lab</strong></p></center>" +
    "<p>In this experiment, you'll play a few short games. The materials were " +
    "designed for children, but we ask you to pay close attention and try to be as " +
    "accurate as possible. " + "<u style=\"color:red;\">You will hear sound, so please make sure your speakers" +
    " are turned on and your volume is up.</u> " +
    "<p class='block-text' id='legal'>Legal information: By answering the following questions, you are participating in a study being performed by cognitive scientists in the Stanford Department of Psychology. If you have questions about this research, please contact Alex Carstensen at <a href='mailto://abcarstensen@stanford.edu'>abcarstensen@stanford.edu</a>. You must be at least 18 years old to participate. Your participation in this research is voluntary. You may decline to answer any or all of the following questions. You may decline further participation, at any time, without adverse consequences. Your anonymity is assured; the researchers who have requested your participation will not receive any personal information about you.</p></div><p />" //,
]

first_page_instruction_kid = [
    "<div class='w3-container' style='width: 600px; bottom-padding: 20px; text-align: left;'>" +
    "<div style='width: 568px; margin: 0 auto; text-align: center; background-color: #8C1516; padding: 20px 15px 10px 10px'>" +
    "<img src='media/images/infrastructure/stanford.png' height='46' width='360' alt='Stanford University'></div>" +
    "<center><p><strong>Stanford Language and Cognition Lab</strong></p></center>" +
    "<p>In this experiment, your child will play a few short games. We will start off with a " +
    "few pages for you to go through before passing over to your child. " +
    "<u style=\"color:red;\">You will hear sound, so please make sure your speakers are turned on " +
    "and your volume is up.</u></p></div>"
]

consent_text = [
    "<div id='consent' style='font-size: 15px; line-height: normal; text-align: left; padding: 40px'><h1>Parent Consent for Online Testing</h1>" +
    "<p>DESCRIPTION: Our studies are designed to be fun, age-appropriate activities for young children, and easily conducted " +
    "online through a web browser or through tablet-based apps with parental guidance. Your child will be asked to play one or " +
    "more short research games. In these games, your child will be introduced to storybooks, pictures, animations, or pre-recorded " +
    "video clips; in some studies we may present toys and puppets. Afterwards we will ask short questions. Thereare no right or " +
    "wrong answers; we are just interested in what children think.</p>" +
    "<p>RISKS AND BENEFITS: Participation in our research has no foreseeable risks or discomforts to you or your child. If your " +
    "child wants to stop participating for any reason, you can end the session immediately with no penalty. We cannot and do not " +
    "guarantee that you will receive any benefits from participation, apart from the satisfaction of contributing to scientific " +
    "research.</p>" +
    "<p>PAYMENTS: You will not receive a cash payment for your participation in this research.</p>" +
    "<p>TIME: Each session typically lasts no more than 15 minutes, depending on the nature of the study.  Most studies involve a " +
    "single session, but in some cases you and your child will be invited to participate in more than one session.</p>" +
    "<p>CONTACT INFORMATION: If you have any questions, concerns, or complaints about this research study, its procedures, risks, " +
    "and benefits, contact the Protocol Director, Dr. Michael C. Frank. Email: <a href='mailto:langcoglab@stanford.edu'>" +
    "langcoglab@stanford.edu</a>, Phone: (650) 721-9270. <br />" +
    "Independent Contact: If you have any concerns, complaints, or general questions about your rights as a participant, please " +
    "contact the Stanford Institutional Review Board (IRB) to speak to someone independent of the research team. Phone: " +
    "(650) 723-2480, or toll free at 1-866-680-2906.  Mail: Stanford IRB, 1705 El Camino Real, Stanford University, Stanford, " +
    "CA 94305-5401.</p>" +
    "<p>PARTICIPANT'S RIGHTS: Your child's participation is voluntary and your child has the right to withdraw his/her consent or " +
    "discontinue participation at any time without any negative consequences.</p>" +
    "<p><input type='checkbox' id='consent_checkbox' />  I give consent for my child to participate in this study. I understand that " +
    "I or my child may stop participation at any time.</p>" +
    "</div>"
]

consent_alert = "If you wish to participate, you must check the box indicating consent."

parental_instruction_text = [
    "We are now ready to go! Please hand control over to your child. You are welcome to sit behind " +
    "him/her, but please let your child complete the tasks by himself/herself without intervening. <br /><br />"
]

parental_instruction_btn = ["Let's go!"]

child_assent_text = [
    "Would you like to play some computer games? If you want to stop playing, you can stop at any time! <br /><br />"
]

child_assent_btn = ["Let's go!"]

// audio check
audio_check_file = 'media/audios/infrastructure/six_E.mp3'
audio_prompt = ["Let's test your sound: Turn on your speaker and type in the number you hear. Just press the key for the single number, e.g., 2."]
audio_alert = ["Incorrect response: Your sound is not working, but is needed to continue. Please refresh the page if you would like to try again. Thank you!"]


// TASKS:

//horizon and circle transition instruction
circle_sticker_readyButton = "Yes!"
circle_sticker_package_instruction_circle_first = "<p>Now, you are going to play two short games.</p><p>In the first game, you will draw some circles.</p><p>In the second game, you will make a picture with stickers.</p><p>Are you ready?</p>"
circle_sticker_package_instruction_sticker_first = "<p>Now, you are going to play two short games.</p><p>In the first game, you will make a picture with stickers.</p><p>In the second game, you will draw some circles.</p><p>Are you ready?</p>"

// horizon
horizonOKbutton = 'OK!'
horizon1 = "<p>Let's practice! Use these stickers to make a picture! You can put as many stickers as you want.</p><p>When you are done, click on the button below.</p>"
horizondonebutton = "Done!"
horizonpractice_feedback_yes = 'Great! Let\'s try another one!'
horizonpractice_feedback_no = '<p>Oops! You need to use at least one sticker to make a picture!</p><p>Let\'s try again!</p>'

horizon_prepractice_instruction = "Now we are going to play a picture game. I'm going to give you some stickers, and you can put them together to make a picture."

horizon_postpractice_instruction1 = "There is no right way or wrong way to make the picture, and you can make your picture any way you like! You can put as many stickers as you want!"
horizon_postpractice_instruction2 = "This will be a picture of the outside, so your picture will have a <b>horizon</b>. Do you know what a <b>horizon</b> is?"
horizon_postpractice_instruction3 = "When you go outside, you see the sky comes down and meets the ground, and meakes one line. <p><b>That line is called a horizon.</b></p><p><img src= 'media/images/horizon/horizon.png'></p>"
horizon_postpractice_instruction4 = "Here is a picture with a horizon."
horizon_postpractice_instruction5 = "This is a horizon. <p><img src= 'media/images/horizon/instruction/horizon_postpractice_instruction5.png'></p>"
horizon_postpractice_instruction6 = "This is also a horizon. <p><img src= 'media/images/horizon/instruction/horizon_postpractice_instruction6.png'></p>"
horizon_postpractice_instruction7 = "Now that you know how, you can make your own picture with these stickers!"
horizon_postpractice_instruction8 = "Remember to put a horizon line in your picture. <p><img src= 'media/images/horizon/horizon.png'></p>"
horizon2 = "<p><b>Remember to put a horizon line in your picture!</b></p><p>Your picture should have at least one tree, one house, and one person, but you can put more than that too.</p>"

// Attribution Task
att_ready = '<p>Now, you are going to watch some videos. After the videos, I will ask you a few questions.</p><p>Are you ready?</p>'
att_ready_audio = ['media/audios/attribution/E_att_ready.mp3']
att_ready_button = 'Yes!'
attvid_kid = ['media/videos/attribution/english_kid.webm']
attvid_adult = ['media/videos/attribution/english_adult.webm']
attprompt = '<p>Please watch the video.</p>'
attq1 = "<p><b>Why didn\'t Kelly play on the bicycle?</b></p><p><b>Is it because she is the kind of person who gets scared, or because the bicycle is dangerous to play on?</b></p><p><img src='media/images/attribution/ca_kelly.png' width=600></p><p>Please explain in full sentences.</p>"
attq1_audio = ['media/audios/attribution/E_attq1.mp3']
attq2 = "<p><b>Why didn\'t Lucy play on the bicycle?</b></p><p><b>Is it because she is the kind of person who gets scared, or because the bicycle is dangerous to play on?</b></p><img src='media/images/attribution/ca_lucy.png' width=600><p>Please explain in full sentences.</p>"
attq2_audio = ['media/audios/attribution/E_attq2.mp3']
attribution_button = "Done!"
attribution_alert = "Please say a little more!"

//Raven's SPM
//instruction
raven_button = "Continue"
raven_instruction = [
    "<p><b>On the following pages, you\'ll see twelve incomplete pictures, like this.</b></p><p><img src='media/images/raven/instructions/rv_ins_1.png' width=600></p>",
     
    "<p><b>Each picture has a piece missing.</b></p><p><img src='media/images/raven/instructions/rv_ins_2.png' width=600></p>",
    
    "<p><b>Each picture has a piece missing. </b></p><p><img src='media/images/raven/instructions/rv_ins_3.png' width=600></p><p><b>Below it you will see six different pieces.</b></p>",
    
    "<p><b>All six of the pieces are the right shape, but only one piece correctly completes the pattern.</b></p><p><img src='media/images/raven/instructions/rv_ins_4.png' width=600></p>",
    
    "<p><b>All six of the pieces are the right shape, but only one piece correctly completes the pattern.</b></p><p><b>Your job is to decide which of the six pieces is the correct one for completing the pattern.</b></p><p><img src='media/images/raven/instructions/rv_ins_5.png' width=600></p>",
    
    "<p><b>Please answer as accurately and quickly as possible.</b></p><p><b>OK? Let\’s practice!</b></p>",
    
    "<p><b>Which of these pieces completes the picture?</b></p><p>(Click for the answer.)</p><p><img src='media/images/raven/instructions/rv_ins_6.png' width=600></p>",
    
    "<p><b>Which of these pieces completes the picture?</b></p><p>Number 2 can’t be correct because it’s the same as the missing piece.</p><img src='media/images/raven/instructions/rv_ins_7.png' width=600></p>",
     
    "<p><b>Which of these pieces completes the picture?</b></p><p>Numbers 1, 3, and 5 show the wrong pattern.</p><img src='media/images/raven/instructions/rv_ins_8.png' width=600></p>",
    
    "<p><b>Which of these pieces completes the picture?</b></p><p>How about number 6?  It shows the right pattern but the pattern doesn\'t cover the whole piece, so it wouldn\’t complete the picture.</p><img src='media/images/raven/instructions/rv_ins_9.png' width=600></p>",
    
    "<p><b>Which of these pieces completes the picture?</b></p><p>Number 4 is the right answer - it shows the correct pattern across the whole missing piece.</p><img src='media/images/raven/instructions/rv_ins_10.png' width=600></p>",
     
     
     "<p><b>On the following pages, you will have 90 seconds to choose which piece completes each picture.The first page will show the example we just saw. Please select #4, then click to continue.</b></p><p><img src='media/images/raven/instructions/rv_ins_11.png' width=600></p>"  
]


// Sticker choice task
pen_prompt = ["<p>You are almost done!</p><p> This time, you get to pick your sticker! You can only pick one sticker. </p><p>Which one do you want to pick?</p>"]
pen_prompt_audio = ['media/audios/pen/E_pen_prompt.mp3']
penchoicelabel = ["This one"]

// Circle Drawing task
circle_instruction = [
    "images/circle_drawing/E_circle_drawing_1.png", "images/circle_drawing/E_circle_drawing_2.png",
    "images/circle_drawing/E_circle_drawing_3.png", "images/circle_drawing/E_circle_drawing_4.png",
    "images/circle_drawing/E_circle_drawing_5.png", "images/circle_drawing/E_circle_drawing_6.png",
    "images/circle_drawing/E_circle_drawing_7.png", "images/circle_drawing/E_circle_drawing_8.png",
]
circle_recap = "<p>Draw yourself and your family members as circles.</p><p> Remember to draw the family members that you lived with as a child.</p> <p><b> You should start by drawing yourself and label the circle as \"Me\". </b></p><p style='color:blue;font-size: 20px;'><b>To draw</b>: click and drag.</p><p style='color:blue;font-size: 20px;'><b>To add label</b>: click on the circle, then double click on the textbox. <u>Hit \"Enter\" when done.</u> </p><p style='color:blue;font-size: 20px;'><b>To delete a circle or a label</b>: right click to see the delete button.</p>"
circle_textbox_default = "Add Label Here"
circle_delete_button = "Delete"
circle_unlabeled_alert = "You have unlabeled circle. Please label each circle as the person it represents."
circle_empty_alert = "You haven't drawn any circle. Please draw yourself and your family members as circles."
circle_small_alert = "The circle you have just drawn is too small. Please redraw a larger circle so you can label it properly."
circle_game_button = "Done!"

//Ebbinghaus 
ebbinghaus_practice_feedback_yes = "Great!"
ebbinghaus_practice_feedback_no = "<p>Oops, remember to press the button under the larger circle!</p><p> Let's try that again!</p>"

//phase 1 
ebbinghaus_phase_1_prepractice_instruction = [
    "<p><b>Now, we are going to play the Big Circle game. </b></p><p><b>In this game, you will see two orange circles like these.</b></p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_1.png' style='width:800px;height:600px;'>", 
    "<p><b>To minimize interference, during this game you will not be able to see your cursor around the circles.</b></p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_2.png' style='width:800px;height:600px;'>", 
    "<p><b>The game is to find the larger circle between the two.</b></p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_3.png' style='width:800px;height:600px;'>",
    "<p><b>If you think the orange circle on the right is larger……</b></p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_4.png' style='width:800px;height:600px;'>", 
    "<p><b>If you think the orange circle on the right is larger……</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_5.png' style='width:800px;height:600px;'></p><p>Press the key M.</p>", 
     "<p><b>If you think the orange circle on the left is larger……</b></p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_4b.png' style='width:800px;height:600px;'>", 
    "<p><b>If you think the orange circle on the left is larger……</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_5b.png' style='width:800px;height:600px;'></p><p>Press the key Z.</p>",     
    
]


ebbinghaus_phase_1_prepractice_ready = "<p>Let's practice the game.</p> <p> Ready?</p>"
ebbinghaus_phase_1_prepractice_readyButton = 'Yes!'
ebbinghaus_phase_1_practice_prompt = "<p>Which circle is a larger circle?</p>"

ebbinghaus_phase_1_postpractice_instruction = [
    "Great! You are now ready to play the game for real. You will see many more circles.",
    "Now we will try it again, but remember what you need to do. Let\'s go over it again together.",
    "<p><b>If you think the orange circle on the right is larger……</b></p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_6.png' style='width:800px;height:600px;'>", 
    "<p><b>If you think the orange circle on the right is larger……</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_7.png' style='width:800px;height:600px;'></p><p>Press the key M.</p>", 
     "<p><b>If you think the orange circle on the left is larger……</b></p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_6b.png' style='width:800px;height:600px;'>", 
    "<p><b>If you think the orange circle on the left is larger……</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_7b.png' style='width:800px;height:600px;'></p><p>Press the key Z.</p>",    
]
ebbinghaus_phase_1_postpractice_ready = "<p>You will get 10 questions like this, with a short pause between questions. </p><p>During the pause, an image like the one below will flash on the screen, but all you need to do is wait for the next question.</p><img src=\"media/images/ebbinghaus/mask/mask1.png\" style=\"width:400px;height:200px;\"><p>Some may be difficult, but then you can make a guess. Ready?</p>"
ebbinghaus_phase_1_postpractice_readyButton = 'Yes!'
ebbinghaus_phase_1_prompt = "<p>Which circle is a larger circle?</p>"

//phase 2
ebbinghaus_phase_2_prepractice_instruction = [
   
   "Let\'s play the next game. This game is a little different.", 
    
   "<p><b>In this game, you will see gray circles around the orange circles.</b></p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_8.png' style='width:800px;height:600px;'>",
    
    "<p><b>In this game, you will see gray circles around the orange circles.</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_9.png' style='width:800px;height:600px;'></p><p>Like these.</p>",
    
      "<p><b>Look carefully at the orange circles in the middle</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_10.png' style='width:800px;height:600px;'></p>", 
    
     "<p><b>Look carefully at the orange circles in the middle</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_11.png' style='width:800px;height:600px;'></p><p>Like this one</p>",
    
    "<p><b>Look carefully at the orange circles in the middle</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_12.png' style='width:800px;height:600px;'></p><p>And this one</p>",
    
     "<p><b>If the orange circle on this side is larger…</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_13.png' style='width:800px;height:600px;'></p>",
    
    "<p><b>If the orange circle on this side is larger…</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_14.png' style='width:800px;height:600px;'></p><p>Press the key Z</p>",
    
     "<p><b>If the orange circle on this side is larger…</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_15.png' style='width:800px;height:600px;'></p>",
    
    "<p><b>If the orange circle on this side is larger…</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_16.png' style='width:800px;height:600px;'></p><p>Press the key M</p>"
    
    
]
ebbinghaus_phase_2_prepractice_ready_prompt = "<p>Let's try one.</p> <p> Ready?</p>"
ebbinghaus_phase_2_prepractice_readyButton = 'Yes!'
ebbinghaus_phase_2_practice_prompt = "<p>Which organge circle is a larger circle?</p>"

ebbinghaus_phase_2_postpractice_instruction = [
    "Great! You are now ready to play the game for real.",
    
    "Now we will try it again, but remember what you need to do. Let\'s go over it again together.",
    
    "<p><b>Remember, look at the orange circles in the middle.</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_17.png' style='width:800px;height:600px;'></p><p>Like these two.</p>", 
    
    "<p><b>If the orange circle on this side is larger…</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_18.png' style='width:800px;height:600px;'></p>",
    
    "<p><b>If the orange circle on this side is larger…</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_19.png' style='width:800px;height:600px;'></p><p>Press the key Z</p>",
    
     "<p><b>If the orange circle on this side is larger…</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_20.png' style='width:800px;height:600px;'></p>",
    
    "<p><b>If the orange circle on this side is larger…</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_21.png' style='width:800px;height:600px;'></p><p>Press the key M</p>"
    
    
]
ebbinghaus_phase_2_postpractice_ready_prompt = "<p>You will get 24 questions like this, with a short pause between questions.</p><p> During the pause, an image like the one below will flash on the screen, but all you need to do is wait for the next question.</p><img src=\"media/images/ebbinghaus/mask/mask1.png\" style=\"width:400px;height:200px;\"><p>Now we are going to play the game for real, are you ready?</p>"
ebbinghaus_phase_2_postpractice_readyButton = "Yes!"
ebbinghaus_phase_2_prompt = "<p>Which orange circle is a larger circle?</p>"

ebbinghaus_finished_prompt = "<p>We are done with this game.</p><p>Thank you!</p>"
ebbinghaus_finished_nextButton = 'Next Game'


//Free description 
free_description_prepractice_instruction_adult = "<p>Now, we are going to play a picture game.</p> <p> In this game, you are going to see many different pictures. </p><p>You have 5 seconds to study each picture.</p> <p>Take a look at the picture, Ready?</p>"
free_description_prepractice_instruction_kid = "<p>Now, we are going to play a picture game.</p> <p> In this game, you are going to see many different pictures. Let's see the first picture together. </p><p>You have 15 seconds to study this picture.</p> <p>Take a look at the picture, Ready?</p>"
free_description_prepractice_instruction_kid_audio = ['media/audios/free_description/E_free_description_prepractice_instruction_kid.mp3']

free_description_prepractice_OKButton = "OK!"
free_description_prompts = "<p>Imagine you are talking to someone who did not see this picture. How would you tell them what you saw? </p><p>Use 2-3 full sentences</p>"
free_description_prompts_audio = ['media/audios/free_description/E_free_description_prompts.mp3']
free_description_ready_instruction = "<p>Great! You are ready to play the game for real. </p> <p> Now, I am going to show you some more pictures.</p>"
free_description_ready_instruction_audio = ['media/audios/free_description/E_free_description_ready_instruction.mp3']
free_description_ready_OKButton = "OK!"
free_description_next_instruction = "<p>Are you ready to see the next picture?</p>"
free_description_next_instruction_audio = ['media/audios/free_description/E_free_description_next_instruction.mp3']
free_description_next_YesButton = "Yes!"
free_description_continueButton = "Done!"
free_description_finishedInstruction = "<p>Great, we are done with this game!</p>"
free_description_finishedInstruction_audio = ['media/audios/free_description/E_free_description_finishedInstruction.mp3']
free_description_finishedButton = "Next Game"
free_description_alert = "Please say a little more!"


//RMTS 
rmts_instruction_0 = [
    "<p><b>In this game, you'll learn about my toy, which is a special machine. </b></p><img src='media/images/rmts/rmts_instruction/rmts_ins_1.png' width=600>", 
   
    "<p><b>Sometimes when I put things on top of my toy, my toy plays music </b></p><img src='media/images/rmts/rmts_instruction/rmts_ins_2.png' width=600>", 
    
    "<p><b>and sometimes when I put things on top of my toy, it does not play music.</b></p><img src='media/images/rmts/rmts_instruction/rmts_ins_3.png' width=600>", 
    
    "<p><b>We will try putting different things on my toy.</b></p><p>It\'s your job to watch and find out which things make my toy play music. Let\'s see how it works! </p><img src='media/images/rmts/rmts_instruction/rmts_ins_4.png' width=600>" 
    
]
rmts_instruction_0_audio = [
    'media/audios/rmts/E_RMTS_preinstructions01.mp3',
    'media/audios/rmts/E_RMTS_preinstructions02.mp3',
    'media/audios/rmts/E_RMTS_preinstructions03.mp3',
    'media/audios/rmts/E_RMTS_preinstructions04.mp3'
]

rmts_instruction_1 = [
    
    "<p><b>Now that you know how my toy works.</b></p><p>My friends need your help finding the things that will make my toy play music!</p><img src='media/images/rmts/rmts_instruction/rmts_ins_5.png' width=600>", 
    
    "<p><b>Only one of the trays has the things that will make my toy play music.</b></p><img src='media/images/rmts/rmts_instruction/rmts_ins_6.png' width=600>", 
    
    "<p><b>Can you help my friends?</b></p><p>Click on the tray that has the things that will make my toy play music.</p><img src='media/images/rmts/rmts_instruction/rmts_ins_7.png' width=600>",
]
rmts_instruction_1_audio = [
    'media/audios/rmts/E_RMTS_postinstructions01.mp3',
    'media/audios/rmts/E_RMTS_postinstructions02.mp3',
    'media/audios/rmts/E_RMTS_postinstructions03.mp3'
]

rmts_test_trial = "Which ones will make my toy play music?"
rmts_instruction_2 = "<p><strong>Great! You're done with this game! Let's play another!</strong></p>"
rmts_instruction_2button = "OK"
rmts_test_trial_audio = ['media/audios/rmts/E_rmts_test_trial.mp3']


// semantic intuitino task (Machery)
godel_1_story = ["<div class='w3-container' style='width: 800px; bottom-padding: 20px;'>" + "Ivy is a high school student in Hong Kong. In her astronomy class she was taught that Tsu Ch'ung Chih was the man who first determined the precise time of the summer and winter solstices. But, like all her classmates, this is the only thing she has heard about Tsu Ch'ung Chih. Now suppose that Tsu Ch'ung Chih did not really make this discovery. He stole it from an astronomer who died soon after making the discovery. But the theft remained entirely undetected and Tsu Ch'ung Chih became famous for the discovery of the precise times of the solstices. Many people are like Ivy; the claim that Tsu Ch'ung Chih determined the solstice times is the only thing they have heard about him. When Ivy uses the name 'Tsu Ch'ung Chih,' is she talking about:"]
godel_1_opt = ["the person who really determined the solstice times? or", "the person who stole the discovery of the solstice times?</div>"]
godel_2_story = ["<div class='w3-container' style='width: 800px; bottom-padding: 20px;'>" + "Suppose that John has learned in college that Gödel is the man who proved an important mathematical theorem, called the incompleteness of arithmetic. John is quite good at mathematics and he can give an accurate statement of the incompleteness theorem, which he attributes to Gödel as the discoverer. But this is the only thing that he has heard about Gödel. Now suppose that Gödel was not the author of this theorem. A man called “Schmidt” whose body was found in Vienna under mysterious circumstances many years ago, actually did the work in question. His friend Gödel somehow got hold of the manuscript and claimed credit for the work, which was thereafter attributed to Gödel. Thus he has been known as the man who proved the incompleteness of arithmetic. Most people who have heard the name “Gödel” are like John; the claim that Gödel discovered the incompleteness theorem is the only thing they have ever heard about Gödel. When John uses the name “Gödel,” is he talking about:"]
godel_2_opt = ["the person who really discovered the incompleteness of arithmetic? or", "the person who got hold of the manuscript and claimed credit for the work?</div>"]
jonah_1_story = ["<div class='w3-container' style='width: 800px; bottom-padding: 20px;'>" + "<p>In high school, German students learn that Attila founded Germany in the second century A.D. They are taught that Attila was the king of a nomadic tribe that migrated from the east to settle in what would become Germany. Germans also believe that Attila was a merciless warrior and leader who expelled the Romans from Germany, and that after his victory against the Romans, Attila organized a large and prosperous kingdom.</p><p>Now suppose that none of this is true. No merciless warrior expelled the Romans from Germany, and Germany was not founded by a single individual. Actually, the facts are the following. In the fourth century A.D., a nobleman of low rank, called “Raditra”, ruled a small and peaceful area in what today is Poland, several hundred miles from Germany. Raditra was a wise and gentle man who managed to preserve the peace in the small land he was ruling. For this reason, he quickly became the main character of many stories and legends. These stories were passed on from one generation of peasants to the next. But often when the story was passed on the peasants would embellish it, adding imaginary details and dropping some true facts to make the story more exciting. From a peaceful nobleman of low rank, Raditra was gradually transformed into a warrior fighting for his land. When the legend reached Germany, it told of a merciless warrior who was victorious against the Romans. By the 8th century A.D., the story told of an Eastern king who expelled the Romans and founded Germany. By that time, not a single true fact remained in the story.</p><p>Meanwhile, as the story was told and retold, the name “Raditra” was slowly altered: it was successively replaced by “Aditra”, then by “Arritrak” in the sixth century, by “Arrita” and “Arrila” in the seventh and finally by “Attila”. The story about the glorious life of Attila was written down in the 8th century by a scrupulous Catholic monk, from whom all our beliefs are derived. Of course, Germans know nothing about these real events. They believe a story about a merciless Eastern king who expelled the Romans and founded Germany.</p><p>When a contemporary German high school student says “Attila was the king who drove the Roman from Germany,” is he actually talking about the wise and gentle nobleman, Raditra, who is the original source of the Attila legend, or is he talking about a fictional person, someone who does not really exist?</p>"]
jonah_1_opt = ["He is talking about Raditra.", "He is talking about a fictional person who does not really exist.</div>"]
jonah_2_story = ["<div class='w3-container' style='width: 800px; bottom-padding: 20px;'>" + "<p>Lau Mei Ling is a high school student in the Chinese city of Guangzhou. Like everyone who goes to high school in Guangzhou, Mei Ling believes that Chan Wai Man was a Guangdong nobleman who had to take refuge in the wild mountains around Guangzhou in the 11th century A.D, because Chan Wai Man was in love with the daughter of the ruthless Government Minister Lee, and the Minister did not approve. Everyone in Lau Mei Ling’s high school believes that Chan Wai Man had to live as a thief in the mountains around Guangzhou, and that he would often steal from the rich allies of the Minister Lee and distribute their goods to the poor peasants.</p><p>Now suppose that none of this is true. No Guangdong nobleman ever lived in the mountains around Ghangzhou, stealing from the wealthy people to help the peasants. The real facts are the following. In one of the monasteries around Guangzhou, there was a helpful monk called “Leung Yiu Pang”. Leung Yiu Pang was always ready to help the peasants around his monastery, providing food in the winter, giving medicine to the sick and helping the children. Because he was so kind, he quickly became the main character of many stories. These stories were passed on from one generation of peasants to the next. Over the years, the story changed slowly as the peasants would forget some elements of the story and add other elements. In one version, Leung Yiu Pang was described as a rebel fighting Minister Lee. Progressively the story came to describe the admirable deeds of a generous thief. By the late 14th century, the story was about a generous nobleman who was forced to live as a thief because of his love for the Minister’s daughter. At length, not a single true fact remained in the story.</p><p>Meanwhile, the name “Leung Yiu Pang” was slowly altered: it was successively replaced by “Cheung Wai Pang” in the 12th century, “Chung Wai Man” in the 13th, and finally by “Chan Wai Man”. The story about the adventurous life of Chan Wai Man was written down in the 15th century by a scrupulous historian, from whom all our beliefs are derived. Of course, Mei Ling, her classmates and her parents know nothing about these real events. Mei Ling believes a story about a generous thief who was fighting against a mean minister.</p><p>When Mei Ling says “Chan Wai Man stole from the rich and gave to the poor”, is she actually talking about the generous monk, Leung Yiu Pang, who is the original source of the legend about Chan Wai Man, or is she talking about a fictional person, someone who does not really exist?</p>"]
jonah_2_opt = ["She is talking about the generous monk, Leung Yiu Pang.", "She is talking about a fictional person who does not really exist.</div>"]



// Post-tasks 
//funnel debriefing 
funnel_general_button = "Done!"
funnel_familiarity_prompt = '<img src="media/images/debriefing/funnel.png" style="width:800px;height:600px;"><p>Here we have pictured each of the research games you just played. Have you seen any of these games before today\'s study? If you have, please type in the number above each of the games you \'ve seen before. (Type "none" if you have never seen any of these before today.)</p>'
funnel_tellmore_prompt = '<p><img src="media/images/debriefing/funnel.png" style="width:1000px;height:600px;"></p><p>If some of the games you played today were familiar, or if you think you know what we are studying in this research project, please describe what you think this research is about. </p>Be as specific as possible: use the number from above to refer to each game, and let us know what you think we are measuring and what predictions we are testing.'





///////////////////////// demog questions /////////////////////////

questions_pre_button = "Continue"
question_button = "Next"
label_done = "Done!"
demog_dropdown_placeholder = "Select your answer"
demog_require_answer = "Questions marked with <font color='brown'>*</font> require a response."

demog_instr = ["Finally, we would like to ask a few questions about you. Your answers will remain confidential"]
demog_instr_kid = ["Finally, we would like to ask a few questions about you. Your answers will remain confidential - we won't share them with anyone."]
demog_instr_audio = ['media/audios/demog/E_demog_instr.mp3']

// PAGE 1
demog_born_instr = "<b>Were you born in the United States?</b>"
demog_born_instr_kid = "<b>Were you born in the United States?</b>"
demog_born_instr_audio = ['media/audios/demog/E_demog_born_instr.mp3']
demog_born_opts = ["Yes", "No"]
demog_living_instr = "<b>Do you currently live in the United States?</b>"
demog_living_instr_kid = "<b>Do you currently live in the United States?</b>"
demog_living_instr_audio = ['media/audios/demog/E_demog_living_instr.mp3']
demog_living_opts = ["Yes", "No"]
demog_location_state_instr = "<b>If you grew up in the US, which state did you grow up in?</b>"
demog_location_state_opts = [
    "Not applicable", "Alabama", "Alaska", "Arizona", "Arkansas", "California",
    "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
    "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
]
demog_location_state_instr_kid = "<b>Which state do you live in?</b>"
demog_location_state_instr_kid_audio = ['media/audios/demog/E_demog_location_state_instr_kid.mp3']
demog_location_state_opts_kid = [
    "I don't live in the United States", "Alabama", "Alaska", "Arizona", "Arkansas", "California",
    "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
    "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
]


// PAGE 2
demog_us_zipcode_instr = "<b>If you currently live in the United States, what are the first 3 digits of your zipcode?</b>"
demog_res_mobi_num = "<p><b>How many different cities/towns/villages have you lived in since age 5?</b></p><p>Please think about all the cities/towns/distinct villages and counties that you have lived in. Note that if you have lived in different locations within the same city/town/village, please don't count the place twice. Enter the total here:</p>"


//PAGE 3
demog_year_abroad_instr = "<b>Have you lived outside of the United States for more than 2 years?</b>"
demog_year_abroad_instr_kid = "<b>Have you lived in any other countries?</b>"
demog_year_abroad_instr_kid_audio = ['media/audios/demog/E_demog_year_abroad_instr_kid.mp3']
demog_year_abroad_opts = ["Yes", "No"]
demog_num_ovs_exp_instr = "<b>How many international experiences (2 days or longer) have you had?</b> (e.g. vacations, family visits, etc.)"
demog_num_ovs_exp_opts = ["No experiences", "One experience", "Two experiences", "Three to five experiences", "Six or more experiences"]
demog_num_ovs_exp_instr_kid = "<b>Have you traveled outside the country?</b>"
demog_num_ovs_exp_instr_kid_audio = ['media/audios/demog/E_demog_num_ovs_exp_instr_kid.mp3']
demog_num_ovs_exp_opts_kid = ["No", "Yes, only once", "Yes, two times", "Yes, three to five times", "Yes, more than five times"]
//Page 3 conditionals:
demog_conditional_year_abroad_question_node = '"abroadexp":"Yes"'
demog_conditional_year_abroad_regions_instr = "<b>Which region(s) have you lived in for at least 2 years? Check all that apply.</b>"
demog_conditional_year_abroad_regions_instr_audio = ['media/audios/demog/E_demog_conditional_year_abroad_regions_instr.mp3']
demog_conditional_year_abroad_regions_opts = ["North America", "South America", "Europe", "Africa", "Asia", "Australia", "Other"]


//PAGE 4
demog_language_first_instr = "<b>Is English your first language (or one of your first languages)?</b>"
demog_language_first_instr_audio = ['media/audios/demog/E_demog_language_first_instr.mp3']
demog_language_first_opts = ["Yes", "No"]
demog_language_mono_instr = "<b>Can you speak and understand any other languages fluently?</b> "
demog_language_mono_options = ["No, just English", "Yes, I am multilingual"]
demog_language_mono_instr_kid = "<b>Can you speak and understand any other languages?</b>"
demog_language_mono_instr_kid_audio = ['media/audios/demog/E_demog_language_mono_instr_kid.mp3']
demog_language_mono_options_kid = ["No, just English", "Yes, I can speak and understand other languages"]
demog_language_target_instr = "<b>Can you speak or understand any Chinese language or dialect at all, even if you aren't fluent?</b>"
demog_language_target_instr_kid = "<b>Can you speak or understand any Chinese language at all?</b>"
demog_language_target_instr_kid_audio = ['media/audios/demog/E_demog_language_target_instr_kid.mp3']
demog_language_target_options = ["Yes", "No"]
//PAGE 4 conditional
demog_conditional_language_target_question_node = '"targetlanguage":"Yes"'
demog_conditional_language_target_fluency_preamble = "<b>Language Fluency</b>"
demog_conditional_language_target_fluency_preamble_kid = "<b>Language Ability</b>"
demog_conditional_language_target_fluency_superq = "<p>On a scale from zero to ten, please select your level of proficiency in speaking and understanding any Chinese language or dialect from the scroll-down menus:</p>"
demog_conditional_language_target_fluency_superq_kid = "<p>On a scale from zero to ten, please select your ability in speaking and understanding any Chinese language from the scroll-down menus:</p> "
demog_conditional_language_target_fluency_superq_kid_audio = ['media/audios/demog/E_demog_conditional_language_target_fluency_superq_kid.mp3']
demog_conditional_language_target_fluency_sp = "<b>Speaking</b>"
demog_conditional_language_target_fluency_sp_placeholder = "select your level of proficiency in speaking"
demog_conditional_language_target_fluency_sp_placeholder_kid = "select your ability in speaking"
demog_conditional_language_target_fluency_ud = "<b>Understanding Spoken Language</b>"
demog_conditional_language_target_fluency_ud_placeholder = "select your level of proficiency in understanding spoken language"
demog_conditional_language_target_fluency_ud_placeholder_kid = "select your ability in understanding spoken language"
demog_conditional_language_target_fluency_opts = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
demog_conditional_language_target_fluency_sp_opts_kid = ["0 - I cannot speak any Chinese language at all", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10 - I can speak a Chinese language perfectly"]
demog_conditional_language_target_fluency_ud_opts_kid = ["0 - When someone is speaking any Chinese language, I cannot understand at all", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10 - When someone is speaking a Chinese language, I can understand perfectly"]


//PAGE5
demog_agegender_age_instr = "<b>What is your age?</b>"
demog_agegender_age_instr_kid = "<b>What is your age?</b>"
demog_agegender_age_instr_audio = ['media/audios/demog/E_demog_agegender_age_instr.mp3']
demog_agegender_age_opts = ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"]
demog_agegender_age_opts_kid = ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"]
demog_agegender_gender_instr = "<b>What is your gender?</b>"
demog_agegender_gender_instr_kid = "<b>What is your gender?</b>"
demog_agegender_gender_instr_audio = ['media/audios/demog/E_demog_agegender_gender_instr.mp3']
demog_agegender_gender_opts = ["Female", "Male", "Non-binary", "Decline to answer"]
demog_ethnic_instr = "<p><b>What is your racial or ethnic identification?</b></p> <p>Please select all that apply. To remove a choice, you can press backspace on your keyboard.</p>"
demog_ethnic_instr_kid = "<p><b>What is your racial or ethnic identification?</b></p>Click on the answer. You can choose one answer or more. To remove a choice, you can press backspace on your keyboard."
demog_ethnic_instr_audio = ['media/audios/demog/E_demog_ethnic_instr.mp3']
demog_ethnic_opts = ["American Indian or Alaska Native", "Asian", "Black or African American", "Hispanic or Latino", "Native Hawaiian or Other Pacific Islander", "White", "Other"]


//PAGE6 SES
demog_objective_ses_instr = '<b>What is the highest degree or level of school you have completed?</b>'
demog_objective_ses_instr_kid = "<b>What is the highest degree or level of school your mother (or primary caregiver) has completed?</b>"
demog_objective_ses_instr_kid_audio = ['media/audios/demog/E_demog_objective_ses_instr_kid.mp3']
demog_objective_ses_opts = ['8th grade/junior high or less', 'Some high school', 'High school graduate/GED', 'One or more years of college, no degree', 'Two-year college degree/vocational school', "Four-/Five-year college Bachelor's degree", 'At least some graduate school']
demog_objective_ses_opts_kid = ['8th grade/junior high or less', 'Some high school', 'High school graduate/GED', 'One or more years of college, no degree', 'Two-year college degree/vocational school', "Four-/Five-year college Bachelor's degree", 'At least some graduate school', 'Not sure']

demog_subjective_ses_instr = "<p style = 'float: left; margin: 40px'><img src='media/images/demog/ladder.png'></p><p>&nbsp;</p><p>&nbsp;</p><p>Imagine that this ladder represents how society is set up.</p><p>At the top of the ladder are the people who are the best off: they have the most money, the highest amount of schooling, and the jobs that bring the most respect.</p><p>At the bottom are people who are the worst off: they have the least money, little or no education, no job, or jobs that no one wants or respects.</p><p></p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Now think about your family. <b>Please tell us where you think your family would be on this ladder.</b> Select the number corresponding to the rung that best represents where your family would be on this ladder:</p>"
demog_subjective_ses_opts = ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]


demog_final_feedback_instr = "Were any parts of this experiment confusing or frustrating?<p></p>We really appreciate your feedback!"
demog_final_feedback_instr_kid = '<img src="media/images/debriefing/funnel_kid.png" style="width:714px;height:455px;"><br />What did you think of these games? Were any parts hard or was there anything you didn\'t like? Use the numbers next to each game to tell us about it - for example, game 1 was my favorite!<br />We really appreciate your feedback!'
demog_final_feedback_instr_kid_audio = ['media/audios/demog/E_demog_final_feedback_instr_kid.mp3']



////////////////////// demog questions end ////////////////////////

game_intro = ['media/videos/gamification/E_game_intro.webm']
game_start_free = ['media/videos/gamification/E_game_start_free.webm']
game_task1 = ['media/videos/gamification/E_game_task1.webm']
game_task2 = ['media/videos/gamification/E_game_task2.webm']
game_task3 = ['media/videos/gamification/E_game_task3.webm']
game_task4 = ['media/videos/gamification/E_game_task4.webm']
game_task5_green = ['media/videos/gamification/E_game_task5_green.webm']
game_task5_yellow = ['media/videos/gamification/E_game_task5_yellow.webm']
game_task6Done_green = ['media/videos/gamification/E_game_task6Done_green.webm']
game_task6Done_yellow = ['media/videos/gamification/E_game_task6Done_yellow.webm']

game_intro_kid = ['media/videos/gamification/E_kid_intro.webm']
game_task1_kid = ['media/videos/gamification/E_kid_first.webm']
game_task2_kid = ['media/videos/gamification/E_kid_second.webm']
game_task5_green_kid = ['media/videos/gamification/E_kid_third_green.webm']
game_task5_yellow_kid = ['media/videos/gamification/E_kid_third_yellow.webm']

//finish slides 
finish_instruction = "<div class='slide' id='finished'>" +
    "<p>You are all done! Thanks so much for participating in our research!</p>" +
    "<p>We are studying how people incorporate context into their reasoning, " +
    "and how this changes over childhood development. Thanks for your help! Please make sure you email your Participant ID to langcogculture@gmail.com so we can compensate you for your time. Your Participant ID is: </p>"
finish_instruction_kid = "<div class='slide' id='finished'>" +
    "<p>You are all done! Thank you so much for your help!</p>"
finish_instruction_button = "OK"


prolific_ID_prompt = "Please enter your Prolific ID below. If you did not come here from Prolific, please enter 000."

prolific_ID_button = "Continue"

prolific_completion_code = "<p>For Prolific users only: Your Completion Code is</p><p><b>15BF41AB</b></p><p>Please make sure you save it somewhere secure so that you will be able to receive your payment promptly.</p>"

participantIDtext1 = "<p>Welcome to our study! Your Participant ID is</p><p><b>"
participantIDtext2 = "</b></p><p>Please make sure you save it somewhere secure so that you will be able to receive your compensation promptly.</p>"

studyPaused = "Hello! Thank you for your interest in our study. Unfortunately, we have completed data collection for now. If we reopen the study, we will post it at this link, so feel free to try back in the future.<p></p>We hope you can participate next time!"

