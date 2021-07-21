// Stanford Consent
first_page_instruction = ["<div class='w3-container' style='width: 600px; bottom-padding: 20px; text-align: left;'>" + 
                "<div style='width: 600px; margin: 0 auto; text-align: center; background-color: #8C1516; padding: 20px 15px 10px 10px'>" +
                "<img src='images/stanford.png' height='46' width='360' alt='Stanford University'></div>"+
                "<center><p><strong>Phòng Nghiên cứu Ngôn ngữ và Nhận thức - Đại học Stanford</strong></p></center>"+
                "<p>Trong nghiên cứu này, bạn sẽ được yêu cầu xếp các thứ theo mức độ liên quan của chúng. Sau đó, bạn sẽ trả lời một số câu hỏi về bản thân. Nghiên cứu này sẽ mất khoảng 25 phút." +
                "<p class='block-text' id='legal'>Thông tin pháp lý: Khi trả lời những câu hỏi sau đây, bạn đang tham gia vào một nghiên cứu được thực hiện bởi các nhà khoa học nhận thức tại Khoa Tâm lý học, Đại học Stanford. Nếu bạn có thắc mắc nào về nghiên cứu này, vui lòng liên hệ với Alex Carstensen qua email <a href='mailto://abcarstensen@stanford.edu'>abcarstensen@stanford.edu</a>. Bạn phải ít nhất 18 tuổi để tham gia vào nghiên cứu này. Sự tham gia của bạn là tự nguyện. Bạn có thể từ chối trả lời bất kỳ hoặc tất cả các câu hỏi trong nghiên cứu. Bạn có thể từ chối tiếp tục tham gia nghiên cứu bất kỳ lúc nào mà không gây bất lợi gì cho bạn. Quyền bảo mật của bạn sẽ được đảm bảo; các nhà nghiên cứu sẽ không nhận được bất kỳ thông tin cá nhân nào của bạn.</p></div><p />" //,
        ]

//PARTICIPANT'S ID//

prolific_ID_prompt = "Xin hãy nhập mã tham gia của bạn vào khung dưới đây. Nếu bạn không có mã tham gia, xin hãy kiểm tra với Khuyên tại email khuyenle@stanford.edu trước khi bạn tiếp tục."

prolific_ID_button = "Tiếp tục"

participantIDtext1 =  "<p>Chào mừng bạn đến với nghiên cứu của chúng tôi! Mã số tham gia của bạn là<p><b>"
participantIDtext2 =  "</b></p><p>Xin hãy lưu mã này lại để bạn có thể nhận tiền thù lao đúng hạn.</p>"

studyPaused = "Chào bạn! Cảm ơn bạn đã quan tâm tới nghiên cứu của chúng tôi. Lúc này chúng tôi đã tạm thời hoàn thành việc thu thập dữ liệu cho nghiên cứu này. Nếu chúng tôi tiếp tục nghiên cứu, chúng tôi sẽ dùng lại đường liên kết này, vì vậy bạn có thể thử lại trong tương lai.<p></p>Chúng tôi hy vọng bạn có thể tham gia nghiên cứu lần sau!"


//TASK//
question_preamble = "Thứ nào liên quan nhất với thứ được in đậm?" // CHANGE




///////////////////////// demog questions /////////////////////////

questions_pre_button = "Tiếp tục"
question_button = "Tiếp theo"
label_done = "Xong!"
demog_dropdown_placeholder = "Chọn câu trả lời của bạn"
demog_require_answer = "Câu hỏi có dấu <font color='brown'>*</font> là bắt buộc."

demog_p0_instr = ["Cuối cùng, chúng tôi muốn hỏi bạn một vài câu hỏi về bản thân. Câu trả lời của bạn sẽ được bảo mật."]


// PAGE 1
demog_born_instr = "<b>Bạn sinh ra ở Việt Nam phải không?</b><font color='brown'>*</font>"
demog_born_opts = ["Đúng", "Không"]
demog_living_instr = "<b>Hiện tại bạn sống ở Việt Nam phải không?</b><font color='brown'>*</font>"
demog_living_opts = ["Đúng", "Không"]
demog_location_state_instr = "<b>Nếu bạn lớn lên ở Việt Nam, bạn lớn lên ở tỉnh/thành phố nào?</b><font color='brown'>*</font>"
demog_location_state_opts = ["Không áp dụng được", 
                    "An Giang", "Bà Rịa-Vũng Tàu", "Bạc Liêu", "Bắc Giang", "Bắc Kạn", 
                   "Bắc Ninh", "Bến Tre", "Bình Dương", "Bình Định", "Bình Phước",
                   "Bình Thuận", "Cà Mau", "Cao Bằng", "Cần Thơ", "Đà Nẵng",
                   "Đắk Lắk", "Đắk Nông", "Điện Biên", "Đồng Nai", "Đồng Tháp",
                   "Gia Lai", "Hà Giang", "Hà Nam", "Hà Nội","Hà Tĩnh", 
                   "Hải Dương", "Hải Phòng", "Hậu Giang", "Hòa Bình","Hưng Yên", 
                   "Khánh Hòa", "Kiên Giang", "Kon Tum", "Lai Châu","Lạng Sơn", 
                   "Lào Cai", "Lâm Đồng", "Long An", "Nam Định","Nghệ An", 
                   "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Phú Yên","Quảng Bình", 
                   "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị","Sóc Trăng", 
                    "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên","Thanh Hóa", 
                   "Thành phố Hồ Chí Minh", "Thừa Thiên-Huế", "Tiền Giang", "Trà Vinh",
                    "Tuyên Quang", "Vĩnh Long", "Vĩnh Phúc", "Yên Bái"]


// PAGE 2
demog_us_zipcode_instr = "<b>Nếu hiện tại bạn đang sống ở Việt Nam, 3 số đầu tiên của mã vùng của bạn là gì?</b>"
demog_res_mobi_num = "<p><b>Bạn đã sống trong bao nhiêu thành phố/thị trấn/làng từ khi bạn 5 tuổi?</b><font color='brown'>*</font></p><p>Xin hãy nghĩ về tất cả thành phố/thị trấn/làng khác nhau mà bạn đã sống. Lưu ý rằng nếu bạn đã sống ở nhiều địa điểm khác nhau trong cùng một thành phố/thị trấn/làng, vui lòng không tính địa điểm đó hai lần. Hãy nhập tổng số ở đây:</p>"


//PAGE 3
demog_year_abroad_instr = "<b>Bạn có từng sống ở nước ngoài (các quốc gia và khu vực ngoài Việt Nam) từ hai năm trở lên không?</b>"
demog_year_abroad_opts = ["Có", "Không"]
demog_num_ovs_exp_instr = "<b>Bạn đã có bao nhiêu lần ở nước ngoài từ hai ngày trở lên?</b> (Ví dụ: đi nghỉ ở nước ngoài, thăm người thân ở nước ngoài, v.v.)"
demog_num_ovs_exp_opts = ["Chưa lần nào", "1 lần", "2 lần", "3-5 lần", "6 lần trở lên"]
//Page 3 conditionals:
demog_conditional_year_abroad_question_node = '"abroadexp":"Có"'
demog_conditional_year_abroad_regions_instr = "<b>Bạn đã sống ở (những) vùng nào sau đây trong hai năm trở lên? Vui lòng chọn tất cả những lựa chọn phù hợp.</b>"
demog_conditional_year_abroad_regions_opts = ["Bắc Mỹ","Nam Mỹ", "Châu Âu", "Châu Phi", "Châu Á", "Châu Úc", "Khác"]


//PAGE 4
demog_language_first_instr = "<b>Tiếng Việt có phải là tiếng mẹ đẻ của bạn (hoặc là một trong những tiếng mẹ đẻ của bạn) không?</b>"
demog_language_first_opts = ["Có", "Không"]
demog_language_mono_instr = "<b>Bạn có thể nói và hiểu thông thạo bất kỳ ngôn ngữ nào khác không?</b> "
demog_language_mono_options =["Không, tôi chỉ nói và hiểu được tiếng Việt.", "Đúng, tôi có thể nói và hiểu nhiều ngôn ngữ."]

/* EN language questions */ 
demog_language_en_instr = "<b>Bạn có thể nói hoặc hiểu tiếng Anh không (ngay cả khi bạn không thông thạo)?</b>"
demog_language_en_options = ["Có", "Không"]
//PAGE 4 condiional
demog_conditional_language_en_question_node = '"englishlanguage":"Có"'
demog_conditional_language_en_fluency_preamble = "<b>Khả năng ngôn ngữ</b>"
demog_conditional_language_en_fluency_superq = "<p>Trên thang điểm từ 0 đến 10, vui lòng chọn mức độ thông thạo của bạn trong việc nói và hiểu tiếng Anh:</p>"
demog_conditional_language_en_fluency_sp = "<b>Nói</b><font color='brown'>*</font>"
demog_conditional_language_en_fluency_sp_placeholder = "Chọn trình độ nói của bạn"
demog_conditional_language_en_fluency_ud = "<b>Nghe hiểu</b><font color='brown'>*</font>"
demog_conditional_language_en_fluency_ud_placeholder = "Chọn trình độ nghe hiểu của bạn"
demog_conditional_language_en_fluency_opts = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

/* CN language questions */ 
demog_language_cn_instr = "<b>Bạn có thể nói hoặc hiểu bất kỳ ngôn ngữ hoặc phương ngữ tiếng Trung Quốc không (ngay cả khi bạn không thông thạo)?</b>"
demog_language_cn_options = ["Có", "Không"]
//PAGE 4 conditional
demog_conditional_language_cn_question_node = '"chineselanguage":"Có"'
demog_conditional_language_cn_fluency_preamble = "<b>Khả năng ngôn ngữ</b>"
demog_conditional_language_cn_fluency_superq = "<p>Trên thang điểm từ 0 đến 10, vui lòng chọn mức độ thông thạo của bạn trong việc nói và hiểu bất kỳ ngôn ngữ hoặc phương ngữ tiếng Trung Quốc:</p>"
demog_conditional_language_cn_fluency_sp = "<b>Nói</b><font color='brown'>*</font>"
demog_conditional_language_cn_fluency_sp_placeholder = "Chọn trình độ nói của bạn"
demog_conditional_language_cn_fluency_ud = "<b>Nghe hiểu</b><font color='brown'>*</font>"
demog_conditional_language_cn_fluency_ud_placeholder = "Chọn trình độ nghe hiểu của bạn"
demog_conditional_language_cn_fluency_opts = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

/* VN language questions -- not translated in vietnamese version*/
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
demog_agegender_age_instr = "<b>Bạn bao nhiêu tuổi?</b><font color='brown'>*</font>"
demog_agegender_age_opts = ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68","69", "70", "71", "72", "73", "74", "75", "76", "77", "78","79", "80", "81", "82", "83", "84", "85", "86", "87", "88","89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"]
demog_agegender_gender_instr = "<b>Giới tính của bạn là gì?</b><font color='brown'>*</font>"
demog_agegender_gender_opts = ["Nữ", "Nam", "Phi nhị nguyên giới / Phi nhị giới", "Từ chối trả lời"]

demog_ethnic_instr = "<p><b>Bạn thuộc nhóm dân tộc nào sao đây?</b></p><font color='brown'>*</font> <p>Xin hãy chọn tất cả câu trả lời đúng với bạn. Để xoá 1 đáp án, bạn có thể nhấn nút backspace.</p>"
demog_ethnic_opts =  ["Dân tộc Kinh", "Một trong những dân tộc thiểu số ở Việt Nam (ví dụ: Tày, Thái, Mường, Hoa,...)", "Người châu Á nhưng không phải gốc Việt", "Không phải người gốc châu Á"]


//PAGE6 SES
demog_objective_ses_instr = '<b>Vui lòng chọn trình độ học vấn cao nhất của bạn:</b>'
demog_objective_ses_opts = ['Lớp 9 / Trung học Cơ sở trở xuống', 'Một phần Trung học Phổ thông', 'Tốt nghiệp Trung học Phổ thông', 'Một hoặc nhiều năm học Đại học, chưa tốt nghiệp', "Tốt nghiệp Đại học", 'Có kinh nghiệm học cao học']

demog_subjective_ses_instr = "<p style = 'float: left; margin: 40px'><img src='ladder.png'></p><p>&nbsp;</p><p>&nbsp;</p><p>Hãy tưởng tượng rằng chiếc thang này phản ánh cấu trúc xã hội.</p><p> Ở bậc thang trên cừng là những người có cuộc sống tốt nhất: họ có nhiều tiền nhất, được học hành nhiều nhất, và làm những công việc được tôn trọng nhất.</p><p>Ở bậc thang dưới cùng là những người có điều kiện tệ nhất: họ có ít tiền nhất, ít hoặc không được học hành, không có việc làm hoặc chỉ có những công việc không ai muốn làm hoặc không được tôn trọng. </p><p></p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Bây giờ hãy nghĩ về gia đình bạn.<b>Vui lòng cho chúng tôi biết bạn nghĩ gia đình bạn sẽ ở đâu trên chiếc thang này.</b> Hãy chọn số tương ứng với bậc thang thể hiện rõ nhất vị trí của gia đình bạn trên chiếc thang:</p>"
demog_subjective_ses_opts = ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]


demog_p4_final_feedback_instr = "Có bất kỳ phần nào trong nghiên cứu này gây nhầm lẫn hoặc khó chịu không? Chúng tôi sẽ rất cảm kích phản hồi của bạn!"

demog_meta_instr = "<p>Bạn nghĩ nghiên cứu này về việc gì?</p>"

////////////////////// demog questions end ////////////////////////


//finish slides 
finish_instruction = "<div class='slide' id='finished'>" +
               "<p>Bạn đã hoàn thành! Cảm ơn bạn rất nhiều vì đã tham gia nghiên cứu của chúng tôi!</p>" +
              "<p>Chúng tôi đang nghiên cứu cách mọi người nghĩ về sự tương đồng. Cảm ơn vì sự giúp đỡ của bạn!</p>" +
                "<p>Xin hãy gửi mã tham gia dưới đây tới email: langcogculturevn@gmail.com để nhận được thù lao của bạn. Mã tham gia của bạn là:</p>"
              
finish_instruction_button = "OK"


prolific_completion_code =  "<p>Chỉ cho người sử dụng Prolific: Mã hoàn thành của bạn là</p><p><b>15BF41AB</b></p><p>Xin hãy lưu mã này lại để bạn có thể nhận tiền thù lao đúng hạn.</p>"

//collect phone number
payment_preamble = "<b>Thông tin thù lao</b>"
phone_carrier_instr = "Bạn sử dụng nhà mạng nào?</b><font color='brown'>*</font>"
phone_carrier_opts = ["Mobiphone", "Vinaphone", "Viettel", "Vietnamobile"]
phone_number_instr = "Vui lòng nhập số điện thoại bạn muốn nạp tiền. Chúng tôi sẽ chỉ sử dụng thông tin này để gửi cho bạn tiền thù lao cho nghiên cứu."