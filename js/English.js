QUESTION_NODE= '"abroad":"Yes"'



browserDetection_pre = "Hi there, it looks like you are using "
browserDetection_post = " browser. This page only works in Chrome or Firefox--please open this page using Chrome or Firefox. If you found this page through Amazon Mechanical Turk and you do not have access to Chrome or Firefox, please return this HIT."

page_title = "Decision Making" //how do we get this to work?
first_page_instruction = ["<div class='w3-container' style='width: 600px; bottom-padding: 20px; text-align: left;'>" + 
                "<div style='width: 600px; margin: 0 auto; text-align: center; background-color: #8C1516; padding: 20px 15px 10px 10px'>" +
                "<img src='images/stanford.png' height='46' width='360' alt='Stanford University'></div>"+
                "<center><p><strong>Stanford Language and Cognition Lab</strong></p></center>"+
                "<p>In this experiment, you'll play a few short games. The materials were " +
                "designed for children, but we ask you to pay close attention and try to be as "+
                "accurate as possible. " + "<u style=\"color:red;\">You will hear sound, so please make sure your speakers"+
                " are turned on and your volume is up.</u> " +
                "<p class='block-text' id='legal'>Legal information: By answering the following questions, you are participating in a study being performed by cognitive scientists in the Stanford Department of Psychology. If you have questions about this research, please contact Alex Carstensen at <a href='mailto://abcarstensen@stanford.edu'>abcarstensen@stanford.edu</a>. You must be at least 18 years old to participate. Your participation in this research is voluntary. You may decline to answer any or all of the following questions. You may decline further participation, at any time, without adverse consequences. Your anonymity is assured; the researchers who have requested your participation will not receive any personal information about you.</p></div><p />" //,
        //"<div class='w3-container' id='stage'><p><strong>Instructions</strong></p>" +
        //"<p>More instructions / explanation?</p>"
        ]



// audio check
audio_check_file = 'sound/six_E.mp3'
audio0 = ["Let's test your sound: Turn on your speaker and type in the number you hear. Just press the key for the single number, e.g., 2."]
audio1 = ["Incorrect response: Your sound is not working, but is needed to continue. Please refresh the page if you would like to try again. Thank you!"]

// horizon
horizon0 = ['<img src="images/sort/instruction/Ehorizon_instruction_1.jpeg" style="width:800px;height:600px;">']
horizonOKbutton = 'OK!'
horizon1 = "<p>Let's practice! Use these stickers to make a picture! You can put as many stickers as you want.</p><p>When you are done, click on the button below.</p>"
horizondonebutton = "Done!"

horizonpractice_feedback_yes = 'Great! Let\'s try another one!'
horizonpractice_feedback_no = '<p>Oops! You need to use at least one sticker to make a picture!</p><p>Let\'s try again!</p>'
horizonslides = [
                '<img src="images/sort/instruction/Ehorizon_instruction_2.jpeg" style="width:800px;height:600px;">',
                '<img src="images/sort/instruction/Ehorizon_instruction_3.jpeg" style="width:800px;height:600px;">',
                '<img src="images/sort/instruction/Ehorizon_instruction_4.jpeg" style="width:800px;height:600px;">',
                '<img src="images/sort/instruction/Ehorizon_instruction_6.jpeg" style="width:800px;height:600px;">',
                '<img src="images/sort/instruction/Ehorizon_instruction_7.jpeg" style="width:800px;height:600px;">',
                '<img src="images/sort/instruction/Ehorizon_instruction_8.jpeg" style="width:800px;height:600px;">',
                 '<img src="images/sort/instruction/Ehorizon_instruction_9.jpeg" style="width:800px;height:600px;">'
                ]
horizon2 = "<p><b>Remember to put a horizon line in your picture!</b></p><p>Your picture should have at least one tree, one house, and one person, but you can put more than that too.</p>"

// attribution
att_ready = '<p>Now, you are going to watch some videos. After the videos, I will ask you a few questions.</p><p>Are you ready?</p>'
att_ready_button = 'Yes!'
attvid = ['images/attribution/AttributionEngPilot.mp4']
attvid_adult = ['images/attribution/E_attribution_adult.webm']
attprompt = '<p>Please watch the video.</p>'
attq1 = "<p><img src='images/attribution/E1.jpg' width=600></p><p>Please explain in full sentences.</p>"
attq2 = "<img src='images/attribution/E2.jpg' width=600><p>Please explain in full sentences.</p>"
attribution_q1_button = "Done!"
attribution_q2_button = "Done!"
// pens
pen1 = ["<p>You are almost done!</p><p> This time, you get to pick your sticker! You can pick only one sticker. </p><p>Which one do you want to pick?</p>"]
penchoicelabel = ["This one"]

// circles
circle0 = "In this game, you will draw circles with your mouse. Please click and drag to practice drawing some circles now. If you want to delete a circle, double-click on it."
circle1 = "Now for our drawing game, I want you to draw yourself and your family members as circles. You should draw a circle for the family members you lived with as a child. Who did you live with? Please write labels for up to 7 people (e.g., Mom, Dad, Sister, Grandma)."
circle2 = "Now you will draw a series of circles representing each of those people. First draw a circle representing yourself. Click and drag to draw a circle below. If you want to delete a circle, double-click on it. Create a circle for each person you listed, from left to right: Me, "



circle3 = "<p>Draw yourself and your family members as circles.</p> <p><b> You should start by drawing yourself and label the circle as \"Me\". </b></p><p>To draw: click and drag.</p><p>To add label: click on the circle, and double click on the textbox. </p><p>To delete a circle or a label: right click.</p>"
circle_prompt = [
            {prompt: "Person 1:"}, 
            {prompt: "Person 2:"},
            {prompt: "Person 3:"},
            {prompt: "Person 4:"},
            {prompt: "Person 5:"},
            {prompt: "Person 6:"},
            {prompt: "Person 7:"}
        ]

circle_game_button= "Done!"


circle_instruction_1 = '<img src="images/circle_drawing/E_circle_drawing_1.png" style="width:800px;height:600px;">'
circle_instruction_2 = '<img src="images/circle_drawing/E_circle_drawing_2.png" style="width:800px;height:600px;">'
circle_instruction_3 = '<img src="images/circle_drawing/E_circle_drawing_3.png" style="width:800px;height:600px;">'
circle_instruction_4 = '<img src="images/circle_drawing/E_circle_drawing_4.png" style="width:800px;height:600px;">'
circle_instruction_5 = '<img src="images/circle_drawing/E_circle_drawing_5.png" style="width:800px;height:600px;">'
circle_instruction_6 = '<img src="images/circle_drawing/E_circle_drawing_6.png" style="width:800px;height:600px;">'
circle_instruction_7 = '<img src="images/circle_drawing/E_circle_drawing_7.png" style="width:800px;height:600px;">'
circle_instruction_8 = '<img src="images/circle_drawing/E_circle_drawing_8.png" style="width:800px;height:600px;">'



//ebbinghaus 
//phase 1 prepractice instruction
ebbinghaus_phase_1_prepractice_instruction_1 = '<img src="images/ebb_illu/instruction/Ephase_1_prepractice_1.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_prepractice_instruction_2 ='<img src="images/ebb_illu/instruction/Ephase_1_prepractice_2.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_prepractice_instruction_2b ='<img src="images/ebb_illu/instruction/Ephase_1_prepractice_2b.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_prepractice_instruction_3 ='<img src="images/ebb_illu/instruction/Ephase_1_prepractice_3.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_prepractice_instruction_4 ='<img src="images/ebb_illu/instruction/Ephase_1_prepractice_4.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_prepractice_instruction_5 ='<img src="images/ebb_illu/instruction/Ephase_1_prepractice_5.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_prepractice_instruction_6 ='<img src="images/ebb_illu/instruction/Ephase_1_prepractice_6.jpeg" style="width:800px;height:600px;">'

ebbinghaus_phase_1_prepractice_ready = "<p>Let's practice the game.</p> <p> Ready?</p>"
ebbinghaus_phase_1_prepractice_readyButton = 'Yes!'
// phase 1 practice: 
ebbinghaus_phase_1_practice_prompt = "<p>Which circle is a larger circle?</p>"

// feed back
ebbinghaus_practice_feedback_yes = "Great!"
ebbinghaus_practice_feedback_no = "<p>Oops, remember to press the button under the larger circle!</p><p> Let's try that again!</p>"

//phase 1 post-practice instruction
ebbinghaus_phase_1_postpractice_instruction_1 = '<img src="images/ebb_illu/instruction/Ephase_1_postpractice_1.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_postpractice_instruction_1b = '<img src="images/ebb_illu/instruction/Ephase_1_postpractice_1b.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_postpractice_instruction_2 ='<img src="images/ebb_illu/instruction/Ephase_1_postpractice_2.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_postpractice_instruction_3 ='<img src="images/ebb_illu/instruction/Ephase_1_postpractice_3.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_postpractice_instruction_4 ='<img src="images/ebb_illu/instruction/Ephase_1_postpractice_4.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_postpractice_instruction_5 ='<img src="images/ebb_illu/instruction/Ephase_1_postpractice_5.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_postpractice_ready = "<p>You will get 10 questions like this, with a short pause between questions. </p><p>During the pause, an image like the one below will flash on the screen, but all you need to do is wait for the next question.</p><img src=\"images/ebb_illu/mask/mask1.png\" style=\"width:400px;height:200px;\"><p>Some may be difficult, but then you can make a guess. Ready?</p>"
ebbinghaus_phase_1_postpractice_readyButton = 'Yes!'

ebbinghaus_phase_1_prompt = "<p>Which circle is a larger circle?</p>"


//phase 2 prepractice instruction
ebbinghaus_phase_2_prepractice_instruction_1 = '<img src="images/ebb_illu/instruction/Ephase_2_prepractice_1.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_2 = '<img src="images/ebb_illu/instruction/Ephase_2_prepractice_2.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_3 = '<img src="images/ebb_illu/instruction/Ephase_2_prepractice_3.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_4 = '<img src="images/ebb_illu/instruction/Ephase_2_prepractice_4.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_5 = '<img src="images/ebb_illu/instruction/Ephase_2_prepractice_5.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_6 = '<img src="images/ebb_illu/instruction/Ephase_2_prepractice_6.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_7 = '<img src="images/ebb_illu/instruction/Ephase_2_prepractice_7.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_8 = '<img src="images/ebb_illu/instruction/Ephase_2_prepractice_8.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_9 = '<img src="images/ebb_illu/instruction/Ephase_2_prepractice_9.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_10 = '<img src="images/ebb_illu/instruction/Ephase_2_prepractice_10.jpeg" style="width:800px;height:600px;">'

ebbinghaus_phase_2_prepractice_ready_prompt = "<p>Let's try one.</p> <p> Ready?</p>"
ebbinghaus_phase_2_prepractice_readyButton =  'Yes!'   

ebbinghaus_phase_2_practice_prompt = "<p>Which organge circle is a larger circle?</p>"

ebbinghaus_phase_2_postpractice_instruction_1 = '<img src="images/ebb_illu/instruction/Ephase_2_postpractice_1.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_postpractice_instruction_1b = '<img src="images/ebb_illu/instruction/Ephase_2_postpractice_1b.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_postpractice_instruction_2 = '<img src="images/ebb_illu/instruction/Ephase_2_postpractice_2.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_postpractice_instruction_3 = '<img src="images/ebb_illu/instruction/Ephase_2_postpractice_3.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_postpractice_instruction_4 = '<img src="images/ebb_illu/instruction/Ephase_2_postpractice_4.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_postpractice_instruction_5 = '<img src="images/ebb_illu/instruction/Ephase_2_postpractice_5.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_postpractice_instruction_6 = '<img src="images/ebb_illu/instruction/Ephase_2_postpractice_6.jpeg" style="width:800px;height:600px;">'

ebbinghaus_phase_2_postpractice_ready_prompt = "<p>You will get 24 questions like this, with a short pause between questions.</p><p> During the pause, an image like the one below will flash on the screen, but all you need to do is wait for the next question.</p><img src=\"images/ebb_illu/mask/mask1.png\" style=\"width:400px;height:200px;\"><p>Now we are going to play the game for real, are you ready?</p>"
ebbinghaus_phase_2_postpractice_readyButton = "Yes!"
ebbinghaus_phase_2_prompt = "<p>Which orange circle is a larger circle?</p>"
ebbinghaus_finished_prompt = "<p>We are done with this game.</p><p>Thank you!</p>"
ebbinghaus_finished_nextButton = 'Next Game'



//free description
free_description_prepractice_instruction_adult = "<p>Now, we are going to play a picture game.</p> <p> In this game, you are going to see many different pictures. </p><p>You have 5 seconds to study each picture.</p> <p>Take a look at the picture, Ready?</p>"

free_description_prepractice_instruction_kid = "<p>Now, we are going to play a picture game.</p> <p> In this game, you are going to see many different pictures. Let's see the first picture together. </p><p>You have 15 seconds to study this picture.</p> <p>Take a look at the picture, Ready?</p>"

free_description_prepractice_OKButton = "OK!"
free_description_prompts = "<p>Imagine you are talking to someone who did not see this picture. How would you tell them what you saw? </p><p>Use 2-3 full sentences</p>"
free_description_ready_instruction = "<p>Great! You are ready to play the game for real. </p> <p> Now, I am going to show you some more pictures.</p><p>Ready?</p>"
free_description_ready_YesButton = "Yes!"
free_description_continueButton = "Done!"
free_description_finishedInstruction = "<p>Great, we are done with this game!</p>"
free_description_finishedButton = "Next Game"
free_description_alert = "Please say a little more!"


//RMTS 
/*
rmts_instruction_0 = "<div class='w3-container' id='scene'><p><strong>Instructions</strong></p>" +
        "<p>In this game, you'll learn about my toy, which is a special machine. " + 
        "Sometimes when I put things on top of my toy, my toy plays music, and sometimes when I put things on top of my toy, it does not play music. " + 
        "We'll try putting different things on my toy. It's your job to watch and find out which things make my toy play music. Let's see how it works! </p>"
*/
rmts_instruction_0 = [
    '<img src="images/RMTS_instructions/E_RMTS_preinstructions01.jpeg" style="width:800px;height:600px;">',
    '<img src="images/RMTS_instructions/E_RMTS_preinstructions02.jpeg" style="width:800px;height:600px;">',
    '<img src="images/RMTS_instructions/E_RMTS_preinstructions03.jpeg" style="width:800px;height:600px;">',
    '<img src="images/RMTS_instructions/E_RMTS_preinstructions04.jpeg" style="width:800px;height:600px;">',
        
]

/*
rmts_instruction_1 = "<div class='w3-container' style='width: 600px; bottom-padding: 20px; text-align: left;'>" + 
          "Now that you know how my toy works, my friends need your help finding the things "+ 
          "that will make my toy play music! Each of my friends has 2 choices for you. " +
          "<p>Only one of the trays has the things that will make my toy play music.</p>" +
          "<p>Can you help my friends? Click on the tray that has the things that will make my toy play music.</p></div>"
*/
rmts_instruction_1 = [
    '<img src="images/RMTS_instructions/E_RMTS_postinstructions01.jpeg" style="width:800px;height:600px;">',
    '<img src="images/RMTS_instructions/E_RMTS_postinstructions02.jpeg" style="width:800px;height:600px;">',
    '<img src="images/RMTS_instructions/E_RMTS_postinstructions03.jpeg" style="width:800px;height:600px;">'        
]
          
rmts_test_trial = "Which ones will make my toy play music?"
rmts_instruction_2 = "<p><strong>Great! You're done with this game! Let's play another!</strong></p>"
rmts_instruction_2button = "OK"


//funnel debriefing 
funnel_general = "Well done! You\'ve finished all the tasks! What do you think this study is about?"
funnel_general_button = "Done!"
funnel_debrief_specific_preamble = "<p>Thank you! Could you tell us a bit more? </p><p>What do you think each task is trying to measure, respectively? Please fill in the research question you think we are trying to answer. </p><p> An example of the response might be: \"are younger people more likely to choose the correct answer?\"</p>"
funnel_debrief_specific_button = "Done!"
funnel_spec_pic0 = "<img src='images/debriefing/E_ebb.jpeg' height='300' width='400'> "
funnel_spec_pic1 = "<img src='images/debriefing/E_CausalAttribution.jpeg' height='300' width='400'> "
funnel_spec_pic2 = "<img src='images/debriefing/E_freeDescription.jpeg' height='300' width='400'> "
funnel_spec_pic3 = "<img src='images/debriefing/E_horizon.jpeg' height='300' width='400'>"
funnel_spec_pic4 = "<img src='images/debriefing/E_penchoice.jpeg' height='70' width='400'> "
funnel_spec_pic5 = "<img src='images/debriefing/E_RMTS.jpeg' height='300' width='400'> "
funnel_spec_pic6 = "<img src='images/debriefing/E_circleDrawing.jpeg' height='300' width='400'> "
funnel_final = "<p>Great! Now could you name the independent variable(s) and dependent variable(s) in each of these tasks? </p><p>It might be difficult, but just put what you think is the most appropriate!</p>"
funnel_final_button = "Done!"


//questions: 
Q1_born = "Were you born in the United States?"
Q1_born_options = ["Yes", "No"]
Q1_residence = "Do you currently live in the United States?"
Q1_residence_options = ["Yes", "No"]
Q1_year_abroad = "Have you lived outside of the United States for more than 2 years?"
Q1_abroad_options = ["Yes", "No"]
Q3_watch_movie = "Do you speak any Chinese language/dialect (e.g. Mandarin, Cantonese, etc) well enough to watch a movie without subtitles? "
Q1_conditional = "Which region(s) have you lived in for at least 2 years? Check all that apply"
Q1_conditional_options = ["North America","South America", "Europe", "Africa", "Asia", "Australia", "Other"]
Q3_movie_options = ["Yes","Sometimes", "No"]



Q2_first_language = "Is English your first language (or one of your first languages)?"
Q2_first_language_options = ["Yes", "No", "Decline to Answer"]
Q2_mono = "Can you speak and understand any other languages fluently? "
Q2_mono_options =["No, just English", "Yes, I am multilingual", "Decline to Answer"]

Q4_freq_family = "<p>How often do you speak any Chinese language/dialect with your family?</p>"
Q4_freq_prompt ='Percent of time'

Q5_ethnic = "What is your racial or ethnic identification? Check all that apply."
Q5_ethnic_options =  ["American Indian or Alaska Native", "Asian", "Black or African American", "Hispanic or Latino", "Native Hawaiian or Other Pacific Islander", "White", "Other"]
Q6_age = "What is your age?"
Q6_age_options = ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"]
Q6_gender = "What is your gender?"
Q6_gender_options = ["Female", "Male", "Non-binary", "Decline to Answer"]
Q6_education = "What is the highest degree or the higest level of school you have completed? If you are currently enrolled as a student, then please select the highest degree or education you have received."
Q6_education_options = ["Some high school", "High school diploma", "Associate Degree/Technical certification", "Bachelor's Degree",  "Master's Degree", "Doctorate/Professional degree", "Other"]

question_button = "Next Question"
quesitons_pre = ["Finally, we would like to ask a few questions about you. Your answers will remain confidential"]
questions_pre_button = "Continue"




demog_locations = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", 
                   "Colorado", "Connecticut","Delaware", "Florida", "Georgia",
                   "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
                   "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
                   "Massachusetts", "Michigan", "Minnesota", "Mississippi","Missouri", 
                   "Montana", "Nebraska", "Nevada", "New Hampshire","New Jersey", 
                   "New Mexico", "New York", "North Carolina", "North Dakota","Ohio", 
                   "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island","South Carolina", 
                   "South Dakota", "Tennessee", "Texas", "Utah","Vermont", 
                   "Virginia", "Washington", "West Virginia", "Wisconsin","Wyoming"]


//game
//



game_intro = ['images/gamification/low_res/Egame_intro.webm']


game_start_free = 
['images/gamification/low_res/Egame_start_free.webm']
game_task1 = ['images/gamification/low_res/Egame_task1.webm']
game_task2 = ['images/gamification/low_res/Egame_task2.webm']
game_task3 = ['images/gamification/low_res/Egame_task3.webm']
game_task4 = ['images/gamification/low_res/Egame_task4.webm']
game_task5_green = ['images/gamification/low_res/Egame_task5_green.webm']
game_task5_yellow = ['images/gamification/low_res/Egame_task5_yellow.webm']
game_task6Done_green = ['images/gamification/low_res/Egame_task6Done_green.webm']
game_task6Done_yellow = ['images/gamification/low_res/Egame_task6Done_yellow.webm']



/*
//game_intro = ['images/gamification/Egame_intro.mp4']

//game_intro = ["images/gamification/Egame_intro.mp4"]
game_start_free = 
['images/gamification/Egame_start_free.mp4']
game_task1 = ['images/gamification/Egame_task1.mp4']
game_task2 = ['images/gamification/Egame_task2.mp4']
game_task3 = ['images/gamification/Egame_task3.mp4']
game_task4 = ['images/gamification/Egame_task4.mp4']
game_task5_green = ['images/gamification/Egame_task5_green.mp4']
game_task5_yellow = ['images/gamification/Egame_task5_yellow.mp4']
game_task6Done_green = ['images/gamification/Egame_task6Done_green.mp4']
game_task6Done_yellow = ['images/gamification/Egame_task6Done_yellow.mp4']
*/














//finish slides 
finish_instruction = "<div class='slide' id='finished'>" +
               "<p>You are all done! Thanks so much for participating in our research!</p>" +
              "<p>We are studying how people incorporate context into their reasoning, " +
              "and how this changes over childhood development. Thanks for your help! Please click the button below to proceed to payment information.</p>"
finish_instruction_button = "OK"


prolific_ID_prompt = "Please enter your Prolific ID below. If you did not come here from Prolific, please enter 000."

prolific_ID_button = "Continue"

prolific_completion_code =  "<p>For Prolific users only: Your Completion Code is</p><p><b>COMPLETION CODE</b></p><p>Please make sure you save it somewhere secure so that you will be able to receive your payment promptly.</p>"