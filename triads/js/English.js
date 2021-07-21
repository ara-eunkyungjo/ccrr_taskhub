// Stanford Consent
first_page_instruction = ["<div class='w3-container' style='width: 600px; bottom-padding: 20px; text-align: left;'>" + 
                "<div style='width: 600px; margin: 0 auto; text-align: center; background-color: #8C1516; padding: 20px 15px 10px 10px'>" +
                "<img src='images/stanford.png' height='46' width='360' alt='Stanford University'></div>"+
                "<center><p><strong>Stanford Language and Cognition Lab</strong></p></center>"+
                "<p>In this study, you'll be asked to group things based on how related they are, and then answer some questions about yourself. It will take about 25 minutes.</p>" +
                "<p class='block-text' id='legal'>Legal information: By answering the following questions, you are participating in a study being performed by cognitive scientists in the Stanford Department of Psychology. If you have questions about this research, please contact Alex Carstensen at <a href='mailto://abcarstensen@stanford.edu'>abcarstensen@stanford.edu</a>. You must be at least 18 years old to participate. Your participation in this research is voluntary. You may decline to answer any or all of the following questions. You may decline further participation, at any time, without adverse consequences. Your anonymity is assured; the researchers who have requested your participation will not receive any personal information about you.</p></div><p />" //,
        ]

//PARTICIPANT'S ID//

prolific_ID_prompt = "Please enter your Participant ID below. If you do not have a Participant ID, check with Khuyen at khuyenle@stanford.edu before you proceed."

prolific_ID_button = "Continue"

participantIDtext1 =  "<p>Welcome to our study! Your Participant ID is</p><p><b>"
participantIDtext2 =  "</b></p><p>Please make sure you save it somewhere secure so that you will be able to receive your compensation promptly.</p>"

studyPaused = "Hello! Thank you for your interest in our study. Unfortunately, we have completed data collection for now. If we reopen the study, we will post it at this link, so feel free to try back in the future.<p></p>We hope you can participate next time!"


//TASK//
question_preamble = "Which thing is most closely related to the bolded item?"




///////////////////////// demog questions /////////////////////////

questions_pre_button = "Continue"
question_button = "Next"
label_done = "Done!"
demog_dropdown_placeholder = "Select your answer"
demog_require_answer = "Question marked with <font color='brown'>*</font> requires response."

demog_p0_instr = ["Finally, we would like to ask a few questions about you. Your answers will remain confidential"]


// PAGE 1
demog_born_instr = "<b>Were you born in the United States?</b><font color='brown'>*</font>"
demog_born_opts = ["Yes", "No"]
demog_living_instr = "<b>Do you currently live in the United States?</b><font color='brown'>*</font>"
demog_living_opts = ["Yes", "No"]
demog_location_state_instr = "<b>If you grew up in the US, which state did you grow up in?</b><font color='brown'>*</font>"
demog_location_state_opts = ["Not applicable", "Alabama", "Alaska", "Arizona", "Arkansas", "California", 
                   "Colorado", "Connecticut","Delaware", "Florida", "Georgia",
                   "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
                   "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
                   "Massachusetts", "Michigan", "Minnesota", "Mississippi","Missouri", 
                   "Montana", "Nebraska", "Nevada", "New Hampshire","New Jersey", 
                   "New Mexico", "New York", "North Carolina", "North Dakota","Ohio", 
                   "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island","South Carolina", 
                   "South Dakota", "Tennessee", "Texas", "Utah","Vermont", 
                   "Virginia", "Washington", "West Virginia", "Wisconsin","Wyoming"]


// PAGE 2
demog_us_zipcode_instr = "<b>If you currently live in the United States, what are the first 3 digits of your zipcode?</b>"
demog_res_mobi_num = "<p><b>How many different cities/towns/villages have you lived in since age 5?</b><font color='brown'>*</font></p><p>Please think about all the cities/towns/distinct villages and counties that you have lived in. Note that if you have lived in different locations within the same city/town/village, please don't count the place twice. Enter the total here:</p>"


//PAGE 3
demog_year_abroad_instr = "<b>Have you lived outside of the United States for more than 2 years?</b>"
demog_year_abroad_opts = ["Yes", "No"]
demog_num_ovs_exp_instr = "<b>How many international experiences (2 days or longer) have you had?</b> (e.g. vacations, family visits etc.)"
demog_num_ovs_exp_opts = ["No experiences", "One experience", "Two experiences", "Three to five experiences", "Six or more experiences"]
//Page 3 conditionals:
demog_conditional_year_abroad_question_node = '"abroadexp":"Yes"'
demog_conditional_year_abroad_regions_instr = "<b>Which region(s) have you lived in for at least 2 years? Check all that apply.</b>"
demog_conditional_year_abroad_regions_opts = ["North America","South America", "Europe", "Africa", "Asia", "Australia", "Other"]


//PAGE 4
demog_language_first_instr = "<b>Is English your first language (or one of your first languages)?</b>"
demog_language_first_opts = ["Yes", "No"]
demog_language_mono_instr = "<b>Can you speak and understand any other languages fluently?</b> "
demog_language_mono_options =["No, just English", "Yes, I am multilingual"]
demog_language_cn_instr = "<b>Can you speak or understand any Chinese language or dialect at all, even if you aren't fluent?</b>"
demog_language_cn_options = ["Yes", "No"]
//PAGE 4 conditional
demog_conditional_language_cn_question_node = '"chineselanguage":"Yes"'
demog_conditional_language_cn_fluency_preamble = "<b>Language Fluency</b>"
demog_conditional_language_cn_fluency_superq = "<p>On a scale from zero to ten, please select your level of proficiency in speaking and understanding any Chinese language or dialect from the scroll-down menus:</p>"
demog_conditional_language_cn_fluency_sp = "<b>Speaking</b><font color='brown'>*</font>"
demog_conditional_language_cn_fluency_sp_placeholder = "select your level of proficiency in speaking"
demog_conditional_language_cn_fluency_ud = "<b>Understanding Spoken Language</b><font color='brown'>*</font>"
demog_conditional_language_cn_fluency_ud_placeholder = "select your level of proficiency in understanding spoken language"
demog_conditional_language_cn_fluency_opts = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

demog_language_vn_instr = "<b>Can you speak or understand any Vietnamese at all, even if you aren't fluent?</b>"
demog_language_vn_options = ["Yes", "No"]
//PAGE 4 conditional
demog_conditional_language_vn_question_node = '"vietnameselanguage":"Yes"'
demog_conditional_language_vn_fluency_preamble = "<b>Language Fluency</b>"
demog_conditional_language_vn_fluency_superq = "<p>On a scale from zero to ten, please select your level of proficiency in speaking and understanding Vietnamese from the scroll-down menus:</p>"
demog_conditional_language_vn_fluency_sp = "<b>Speaking</b><font color='brown'>*</font>"
demog_conditional_language_vn_fluency_sp_placeholder = "select your level of proficiency in speaking"
demog_conditional_language_vn_fluency_ud = "<b>Understanding Spoken Language</b><font color='brown'>*</font>"
demog_conditional_language_vn_fluency_ud_placeholder = "select your level of proficiency in understanding spoken language"
demog_conditional_language_vn_fluency_opts = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]


//PAGE5
demog_agegender_age_instr = "<b>What is your age?</b><font color='brown'>*</font>"
demog_agegender_age_opts = ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68","69", "70", "71", "72", "73", "74", "75", "76", "77", "78","79", "80", "81", "82", "83", "84", "85", "86", "87", "88","89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"]
demog_agegender_gender_instr = "<b>What is your gender?</b><font color='brown'>*</font>"
demog_agegender_gender_opts = ["Female", "Male", "Non-binary", "Decline to answer"]
demog_ethnic_instr = "<p><b>What is your racial or ethnic identification?</b></p><font color='brown'>*</font> <p>Please select all that apply. To remove a choice, you can press the backspace on your keyboard.</p>"
demog_ethnic_opts =  ["American Indian or Alaska Native", "Asian", "Black or African American", "Hispanic or Latino", "Native Hawaiian or Other Pacific Islander", "White", "Other"]


//PAGE6 SES
demog_objective_ses_instr = '<b>What is the highest degree or level of school you have completed?</b>'
demog_objective_ses_opts = ['8th grade/junior high or less', 'Some high school', 'High school graduate/GED', 'One or more years of college, no degree', 'Two-year college degree/vocational school', "Four-/Five-year college Bachelor's degree", 'At least some graduate school']

demog_subjective_ses_instr = "<p style = 'float: left; margin: 40px'><img src='ladder.png'></p><p>&nbsp;</p><p>&nbsp;</p><p>Imagine that this ladder represents how the society is set up.</p><p>At the top of the ladder are the people who are the best off: they have the most money, the highest amount of schooling, and the jobs that bring the most respect.</p><p>At the bottom are people who are the worst off: they have the least money, little or no education, no job, or jobs that no one wants or respects.</p><p></p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Now think about your family. <b>Please tell us where you think your family would be on this ladder.</b> Select the number corresponding to the rung that best represents where your family would be on this ladder:</p>"
demog_subjective_ses_opts = ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]


demog_p4_final_feedback_instr = "Were any parts of this experiment confusing or frustrating?<p></p>We highly appreciate your feedback!"

demog_meta_instr = "<p>What do you think this study is about?</p>"

////////////////////// demog questions end ////////////////////////


//finish slides 
finish_instruction = "<div class='slide' id='finished'>" +
               "<p>You are all done! Thanks so much for participating in our research!</p>" +
              "<p>We are studying how people think about similarity. Thanks for your help! Please make sure you email your Participant ID to langcogculture@gmail.com so we can compensate you for your time. Your Participant ID is:</p>"
              
finish_instruction_button = "OK"


prolific_completion_code =  "<p>For Prolific users only: Your Completion Code is</p><p><b>15BF41AB</b></p><p>Please make sure you save it somewhere secure so that you will be able to receive your payment promptly.</p>"

//collect phone number
payment_preamble = "<b>Payment Information</b>"
phone_carrier_instr = "What is your phone carrier?</b><font color='brown'>*</font>"
phone_carrier_opts = ["Mobiphone", "Vinaphone", "Viettel", "Vietnamobile", "Gmobile"]
phone_number_instr = "Please enter the phone number you want to receive the credit.<br>We will only use your information to send you your compensation for this study.</b><font color='brown'>*</font>"