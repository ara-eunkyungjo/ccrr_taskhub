//Stanford Consent
first_page_instruction = ["<div class='w3-container' style='width: 600px; bottom-padding: 20px; text-align: left;'>" + 
                "<div style='width: 600px; margin: 0 auto; text-align: center; background-color: #8C1516; padding: 20px 15px 10px 10px'>" +
                "<img src='images/stanford.png' height='46' width='360' alt='Stanford University'></div>"+
                "<center><p><strong>斯坦福语言与认知实验室</strong></p></center>"+
                "<p>在这个实验中，你将会被邀请按事物的关联程度把它们分组，然后回答几个关于你自己的问题。这个实验大约需要25分钟。</p>" +
                "<p class='block-text' id='legal'>法律信息：通过回答以下的问题，你将参与到一项由斯坦福大学心理系的认知科学家们开展的实验。如果你对本研究有任何问题的话，请联系Alex Carstensen （邮箱：<a href='mailto://abcarstensen@stanford.edu'>abcarstensen@stanford.edu</a>）。你必须要满十八岁才能参与本项实验。你的参与是完全自愿的。你可以拒绝回答以下任何一个、或所有的问题。你可以在任何时刻拒绝继续参与，并且不会带来不良后果。你的匿名性是被确保的；要求你参与实验的研究人员不会收到任何你的个人信息。</p></div><p />" //,     
        ]


//PARTICIPANT'S ID//
//prolific stuff not used but put in so that code doesn't complain
prolific_ID_prompt = "请在下方输入您的被试ID："

prolific_ID_button = "继续"

prolific_completion_code = "<p>感谢您的参与！请在微信上告知LangCog实验小助手，以便获得报酬有关的信息。</p>"


participantIDtext1 = "<p>欢迎参加我们的实验！你的被试ID为</p><p><b>"
participantIDtext2 = "</b></p><p>请确保将它存放在一个安全的地方，以便于你能即时收到报酬。</p>"


studyPaused = "你好！感谢你对我们实验的兴趣。很遗憾，我们目前已经完成了数据收集。如果我们重启这一实验，我们将会在这个链接发布，你可以在日后返回尝试。<p></p>我们衷心希望你能在下次参与我们的实验！"

//TASK//
question_preamble = "哪个事物与加粗项关联最紧密？"


////////////////////////// demog questions ////////////////////////// 

questions_pre_button = "继续"
question_button = "下一题"
label_done = "完成!"
demog_dropdown_placeholder = "请选择你的回答"
demog_require_answer = "标有<font color='brown'>*</font> 的问题是必答问题。"

demog_p0_instr = ["最后，我们想问一些关于你的问题。你的回答是保密的。"]


// PAGE 1
demog_born_instr = "<b>你是否出生于中国大陆、香港、澳门、台湾中的一个地区?</b><font color='brown'>*</font>"
demog_born_opts = ["是", "否"]
demog_living_instr = "<b>你现在是否居住在中国大陆、香港、澳门、台湾中的一个地区?</b><font color='brown'>*</font>"
demog_living_opts = ["是", "否"]
demog_location_state_instr = "<b>如果你出生于中国大陆、香港、澳门、台湾中的一个地区，你是在哪个省份或地区长大的？</b><font color='brown'>*</font>"
demog_location_state_opts = ["北京", "天津", "上海", "重庆", "河北", 
                   "陕西", "辽宁","吉林", "黑龙江", "江苏",
                   "浙江", "安徽", "福建", "江西", "山东",
                   "河南", "湖北", "湖南", "广东", "海南",
                   "四川", "贵州", "云南", "山西","甘肃", 
                   "青海", "台湾", "内蒙古", "广西","宁夏", 
                   "新疆", "西藏", "香港", "澳门", "其它"]





// PAGE 2
demog_us_zipcode_instr = "<b>如果你现在居住于中国大陆、香港、澳门、台湾中的一个地区，请填写你邮政编码的前四位。</b>"
demog_res_mobi_num = "<p><b>你从5岁起在多少不同的城市/城镇/村居住过？</b><font color='brown'>*</font></p><p>请回想你从五岁起所居住过的所有城市/城镇/村。如果你在一个城市/城镇/村中的不同位置居住过，请不要重复计算。请把总数填在这里：</p>"


//PAGE 3
demog_year_abroad_instr = "<b>你在海外（中国大陆、香港、澳门、台湾以外的国家与地区）居住的时间是否在两年及以上？</b>"
demog_year_abroad_opts = ["是", "否"]
demog_num_ovs_exp_instr = "<b>你有多少国际经历（每次时长在2天及以上的都算）？</b> (例如：出国度假、拜访海外亲戚等等。)"
demog_num_ovs_exp_opts = ["没有国际经历", "一段国际经历", "两段国际经历", "三到五段国际经历", "六段或更多国际经历"]
//Page 3 conditionals:
demog_conditional_year_abroad_question_node = '"abroadexp":"是"'
demog_conditional_year_abroad_regions_instr = "<b>你曾在下列哪个（些）地区居住过两年及以上？请选择所有适用的选项。</b>"
demog_conditional_year_abroad_regions_opts = ["北美洲","南美洲", "欧洲", "非洲", "亚洲", "澳洲", "其它"]


//PAGE 4
demog_language_first_instr = "<b>中文是你的母语（或母语之一）吗？</b>"
demog_language_first_opts = ["是", "不是"]
demog_language_mono_instr = "<b>你是否能流畅地说和理解任何其它的语言？</b> "
demog_language_mono_options =["不，我只说中文", "是，我是多语者"]
demog_language_en_instr = "<b>你能说或理解英语吗（哪怕并不流利）？"
demog_language_en_options = ["能", "不能"]
//PAGE 4 conditional
demog_conditional_language_en_question_node = '"englishlanguage":"能"'
demog_conditional_language_en_fluency_preamble = "<b>语言流利度</b>"
demog_conditional_language_en_fluency_superq = "<p>在0到10的量表上，请从下拉菜单中选择你说和理解英语时熟练程度：</p>"
demog_conditional_language_en_fluency_sp = "<b>说口语</b><font color='brown'>*</font>"
demog_conditional_language_en_fluency_sp_placeholder = "选择你说英语的熟练程度"
demog_conditional_language_en_fluency_ud = "<b>理解口语</b><font color='brown'>*</font>"
demog_conditional_language_en_fluency_ud_placeholder = "选择你理解口语的熟练程度"
demog_conditional_language_en_fluency_opts = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

demog_language_vn_instr = "<b>你能说或理解越南语吗（哪怕并不流利）？"
demog_language_vn_options = ["能", "不能"]
//PAGE 4 conditional
demog_conditional_language_vn_question_node = '"vietnameselanguage":"能"'
demog_conditional_language_vn_fluency_preamble = "<b>语言流利度</b>"
demog_conditional_language_vn_fluency_superq = "<p>在0到10的量表上，请从下拉菜单中选择你说和理解越南语的熟练程度：</p>"
demog_conditional_language_vn_fluency_sp = "<b>说口语</b><font color='brown'>*</font>"
demog_conditional_language_vn_fluency_sp_placeholder = "选择你说英语的熟练程度"
demog_conditional_language_vn_fluency_ud = "<b>理解口语</b><font color='brown'>*</font>"
demog_conditional_language_vn_fluency_ud_placeholder = "选择你理解口语的熟练程度"
demog_conditional_language_vn_fluency_opts = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]


//PAGE5
demog_agegender_age_instr = "<b>你的年龄是?</b><font color='brown'>*</font>"
demog_agegender_age_opts = ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68","69", "70", "71", "72", "73", "74", "75", "76", "77", "78","79", "80", "81", "82", "83", "84", "85", "86", "87", "88","89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"]
demog_agegender_gender_instr = "<b>你的性别是?</b><font color='brown'>*</font>"
demog_agegender_gender_opts = ["女性", "男性", "非二元性别者", "拒绝回答"]
demog_ethnic_instr = "<p><b>你属于下列哪一个族群？</b></p><font color='brown'>*</font> <p>（请选择所有适用的选项）在这里，我们对你的族群身份感兴趣，而不是国籍。如果你和你的家人认为你们拥有任何华裔血统，无论国籍，都请在下拉菜单中选择中国人。</p>"
demog_ethnic_opts =  ["中国人（包括居住在中国大陆、香港、澳门、台湾，以及任何亚洲国家地区在内有华裔血统的人）","非中国人的亚洲人","我是混血儿","我不是亚洲人"]


//PAGE6 SES
demog_objective_ses_instr = '<b>请选择你的最高受教育程度：</b>'
demog_objective_ses_opts = ["九年级/初中及以下", "上过一部分高中", "普通高中或职业高中毕业/高中等级学历", "一年或多年大学教育，无学位", "大专学历", "四年/五年制大学本科学位", "有过一些研究生经历"]

demog_subjective_ses_instr = "<p style = 'float: left; margin: 40px'><img src='demog/ladder.png'></p><p>&nbsp;</p><p>&nbsp;</p><p>设想这把梯子反映了社会是如何构成的。</p><p>梯子的顶端是那些境况最优越的人：他们拥有最多的钱财，受过最多的教育，工作也最受人尊敬。</p><p>梯子的底端是那些境况最糟糕的人：他们只有最少的钱，极少或没有受过教育，没有工作，或者只有没人想干或没人尊敬的工作。</p><p></p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p><b>现在想想你的家庭。请告诉我们，你认为你的家庭在这个梯子上处于什么位置。</b> 选择与最能代表你家庭所处位置的梯级相对应的数字：</p>"
demog_subjective_ses_opts = ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]


demog_p4_final_feedback_instr = "本实验中是否有任何部分令你感到疑惑或沮丧？我们将十分感谢你的反馈！"

demog_meta_instr = "<p>你认为这个实验是关于什么的？</p>"


///////////////////// demog questions end //////////////////////// 

//finish slides 
finish_instruction = "<div class='slide' id='finished'>" +
               "<p>你完成了全部任务! 感谢你对我们研究的参与！</p>" +
              "<p>我们在研究人们对相似性是如何认知的。感谢你的帮助！确保将它存放在一个安全的地方，以便于你能即时收到报酬。</p>"
finish_instruction_button = "好的"

prolific_completion_code =  "<p>您的完成代码为</p><p><b>15BF41AB</b></p> <p>请确保将其保存在安全的地方，以便您能够及时收到付款。</p>"



