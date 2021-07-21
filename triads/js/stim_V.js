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

single_triads = shuffle([
                        ["cốc trà", ["ly", "ấm đun nước"]], 
                        ["bia", ["nước ép", "tiệc"]],
                        ["bồ câu", ["vịt", "tổ"]], 
                        ["bóng", ["xúc xắc", "đứa trẻ"]], 
                        ["ủng", ["dép", "bàn chân"]], 
                        ["tóc", ["râu", "lược"]],
                        ["đạn", ["mũi tên", "súng"]], 
                        ["cà rốt", ["đậu", "thỏ"]], 
                        ["ghế", ["ghế đẩu", "bàn"]],
                        ["phấn", ["bút lông", "bảng đen"]], 
                        ["ống khói", ["tường", "lửa"]],
                        ["sóc", ["chuột", "hạt dẻ"]], 
                        ["bút sáp", ["cọ", "tranh vẽ"]], 
                        ["cốc", ["đĩa lót tách", "cà phê"]],
                        ["cửa ra vào", ["cửa sổ", "chìa khoá"]], 
                        ["đàn pi-a-nô", ["sáo", "bài hát"]], 
                        ["bụi", ["tro", "chổi"]],
                        ["bóng đá", ["quần vợt", "khung thành"]], 
                        ["nhà bếp", ["phòng ngủ", "tủ lạnh"]], 
                        ["hiệp sĩ", ["người lính", "áo giáp"]], 
                        ["găng tay", ["quần đùi", "ván trượt tuyết"]], 
                        ["miệng", ["mũi", "bàn chải đánh răng"]],
                        ["phim", ["hoạt hình", "đạo diễn"]], 
                        //["needle", ["pin", "sewing machine"]], 
                        ["con trai", ["con sò", "ngọc trai"]], 
                        ["người đưa thư", ["lính cứu hoả", "bưu kiện"]], 
                        ["chậu rửa tay", ["bồn tắm", "xà phòng"]], 
                        ["nhện", ["châu chấu", "mạng nhện"]],
                        ["kiếm", ["dao găm", "cướp biển"]], 
                        ["lều trại", ["chòi", "lửa trại"]], 
                        ["khăn tắm", ["khăn tay", "phòng tắm"]], 
                        ["tàu hoả", ["xe buýt", "đường ray"]],
                        ["đào", ["mận", "hạt"]], 
                        ["kèn", ["đàn vi-ô-lông", "dàn nhạc"]] 
                     ]);


    // arrays of 2 each
dup_triads_1 = shuffle([
        [ ["máy bay", ["tàu thuỷ", "phi công"]], 
            ["xe hơi", ["xe máy", "đèn giao thông"]], 
             ["hải âu", ["dơi", "trời"]]
            
        ],
        [ ["thuỷ thủ", ["phi công", "tàu thuỷ"]], 
            ["máy bay", ["trực thăng", "trời"]], 
            ["xe hơi", ["xe đạp", "lốp"]],
         ["mũ bảo hiểm", ["nón", "xe máy"]]
            
        ]
        
    ]);
        
dup_triads_2 = shuffle([
        [ ["búa", ["cưa", "đinh"]]
        ],
        [ ["cưa", ["búa", "tấm ván"]]
        ]
    ]);
        
dup_triads_3 = shuffle([
        [ ["táo", ["dâu", "cây"]], 
            ["xương rồng", ["bụi rậm", "cát"]], 
             ["bình tưới", ["xô", "hoa"]]
            
        ],
        [ ["táo", ["cam", "giỏ"]], 
            ["dừa", ["xoài", "cây"]], 
            ["rìu", ["kéo", "gốc cây"]],
         ["hoa", ["bụi rậm", "lọ"]]
            
        ]
        
    ]);
        
dup_triads_4 = shuffle([
        [ ["em bé", ["người lớn", "bình"]], 
            ["giường", ["ghế bành", "gối"]]
            
        ],
        [ ["nôi", ["giường", "em bé"]], 
            ["lon", ["chai", "ống hút"]]
        ]
        
    ]);
        
dup_triads_5 = shuffle([
        [ ["ong", ["bọ rùa", "vườn"]]
            
        ],
        [ ["ong", ["bướm", "mật"]], 
            ["nhà", ["chòi", "vườn"]] // double check!!!!!!
        ]
        
    ]);
    
dup_triads_6 = shuffle([
        [ ["gà", ["thiên nga", "trứng"]], 
            ["cỏ", ["lá", "ngựa"]], 
             ["bò", ["lợn", "sữa"]], 
            ["khỉ", ["lừa", "rừng"]], 
            
        ],
        [ ["bò", ["gà", "cỏ"]], 
            ["voi", ["hươu cao cổ", "vườn thú"]], 
            ["ngựa", ["lừa", "yên ngựa"]]
            
        ]
        
    ]);
        
dup_triads_7 = shuffle([
        [ ["bánh kem", ["bánh quy", "sinh nhật"]]
            
        ],
        [ ["bánh ngọt", ["bánh kem", "thợ làm bánh"]] 

        ]
        
    ]);
        
dup_triads_8 = shuffle([
        [ ["chân", ["tay", "quần"]]
            
        ],
        [ ["đầm", ["quần", "móc quần áo"]] 

        ]
        
    ]);
    
dup_triads_9 = shuffle([
        [ ["chén", ["đĩa", "súp"]], 
            ["nồi", ["chảo", "muôi"]], 
             ["muỗng", ["nĩa", "đường"]]
            
        ],
        [ ["bánh mì", ["cơm", "lò nướng"]], 
            ["nồi", ["chảo", "bếp"]], 
            ["muỗng", ["muôi", "chén"]]
            
        ]
        
    ]);
    
dup_triads_10 = shuffle([
        [ ["chó", ["mèo", "dây xích"]]       
        ],
        [ ["chó", ["mèo", "xương"]]
        ]
        
    ]);
    
dup_triads_11 = shuffle([
        [ ["hồ", ["suối", "cá"]], 
            ["biển", ["sông", "cá voi"]], 
            ["xích", ["dây thừng", "khoá"]]
        ],
        [ ["biển", ["suối", "thuyền"]],
            ["lưới", ["dây thừng", "cá"]]
        ]
        
    ]);
    
dup_triads_12 = shuffle([
        [ ["áo khoác", ["áo len", "dù"]]
            
        ],
        [ ["áo khoác", ["áo len", "mùa đông"]] 

        ]
        
    ]);
    
dup_triads_13 = shuffle([
        [ ["hành", ["cà chua", "nông dân"]], 
            ["cừu", ["dê", "len"]]
        ],
        [ ["nông dân", ["người bán thịt", "máy kéo"]], 
            ["dê", ["nai", "đồng cỏ"]], 
            ["hành", ["ớt", "chảo"]]
        ]
        
    ]);
    
dup_triads_14 = shuffle([
        [ ["vương miện", ["mũ", "hoàng hậu"]]
            
        ],
        [ ["mũ", ["vương miện", "đầu"]] 

        ]
        
    ]);
    
dup_triads_15 = shuffle([
        [ ["giáo viên", ["cảnh sát", "bàn"]], 
            ["bác sĩ", ["kỹ sư", "bệnh viện"]]
        ],
        [ ["đèn", ["đèn pin", "bàn"]], 
            ["cảnh sát", ["giáo viên", "nhà tù"]]
        ]
        
    ]);
    
dup_triads_16 = shuffle([
        [ ["ếch", ["rùa", "ao"]]
            
        ],
        [ ["bèo", ["hoa hồng", "ao"]] 

        ]
        
    ]);
    
dup_triads_17 = shuffle([
        [ ["nhẫn", ["dây chuyền", "tay"]], 
            ["bút chì", ["bút bi", "cục tẩy"]]
        ],
        [ ["bàn tay", ["bàn chân", "vòng tay"]], 
            ["tập", ["sách", "cặp"]], 
            ["bút chì", ["bút bi", "giấy"]]
        ]
        
    ]);
    
dup_triads_18 = shuffle([
        [ ["trường", ["nhà thờ", "học sinh"]]
            
        ],
        [ ["đại học", ["nhà trường", "giáo sư"]] 

        ]
        
    ]);
    
dup_triads_19 = shuffle([
        [ ["tuyết", ["băng", "núi"]],
        ],
        [ ["núi", ["vách đá", "băng"]],
            ["chim cánh cụt", ["ngỗng", "tuyết"]]

        ]
        
    ]);

/*
dup_triads_20 = shuffle([
        [ ["drum", ["trumpet", "sticks"]]
            
        ],
        [ ["trumpet", ["violin", "orchestra"]] 

        ]
        
]);
*/

fillers_a = shuffle([
                        ["chanh", ["nho", "lê"]], 
                        ["thư viện", ["ngân hàng", "rạp chiếu phim"]],
                        ["diều", ["bóng rổ", "xích đu"]], 
                        ["cầu", ["đường hầm", "đường cao tốc"]], 
                        ["trẻ sơ sinh", ["đàn ông", "phụ nữ"]], 
                        ["rau mùi", ["muối", "tiêu"]], 
                        ["ông", ["chị", "cậu"]], 
                        ["nến", ["đuốc", "đèn lồng"]],
                        ["cáo", ["hổ", "sư tử"]], 
                        ["cành cây", ["rễ cây", "thân cây"]], 
                        ["vẹt", ["diều hâu", "sơn ca"]], 
                        ["chồi cây", ["cây con", "cây"]], 
                        ["mũi", ["ngón cái", "ngón tay"]], 
                        ["dưa leo", ["ngô", "khoai tây"]], 
                        ["khăn quàng cổ", ["tất", "mũ len"]], 
                        ["cái xẻng", ["cái cào", "cái cuốc"]],
                        ["giấm", ["dầu", "bơ"]], 
                        ["truyện tranh", ["tạp chí", "báo"]],
                        ["nút áo", ["tay áo", "cổ áo"]],
                        ["nệm", ["ga giường", "chăn"]], 
                        ["trà", ["nước ngọt", "nước chanh"]],
                        ["sói", ["gấu", "báo"]], 
                        ["chim", ["thằn lằn", "cóc"]],
                        ["ngăn kéo", ["kệ", "tủ"]], 
                        ["cổ", ["cằm", "vai"]], 
                        ["sàn nhà", ["thảm", "gạch"]],
                        ["con đỉa", ["bọ chét", "con rận"]],
                        //["spider", ["mosquito", "fly"]],
                        ["bong bóng", ["viên bi", "búp bê"]], 
                        //["dentist", ["tooth", "mouth"]],
                        ["ca sĩ", ["nhà văn", "nhà thơ"]],  
                        ["người máy", ["điện thoại", "máy vi tính"]],
                        ["lưỡi", ["răng", "môi"]], 
                        ["tỏi", ["gừng", "ngò"]], 
                        ["dưa hấu", ["đu đủ", "bưởi"]], 
                        ["tim", ["dạ dày", "phổi"]], 
                        ["san hô", ["cá mập", "cá heo"]], 
                        ["giun", ["kiến", "gián"]],
                        ["bờ biển", ["hải cảng", "cầu tàu"]], 
                        ["nấm", ["bí đỏ", "cà tím"]], 
                        ["bảo tàng", ["sân chơi", "công viên"]], 
                        ["thác nước", ["hang động", "vực sâu"]],
                        ["hoa lan", ["hoa nhài", "hoa sen"]],
                        ["lạc đà", ["tê giác", "khỉ đột"]], 
                        //["soap", ["fragrance", "lotion"]], 
                        ["bắp rang", ["khoai tây chiên", "bánh quy"]],
                        ["điện", ["nhiệt", "ánh nắng"]], 
                        ["máy ảnh", ["đồng hồ", "máy hút bụi"]], 
                        ["đá", ["đất", "thuỷ tinh"]], 
                        ["nạng", ["gậy", "xe lăn"]],
                        //["bone", ["skin", "muscle"]], 
                        ["nhạc sĩ", ["nghệ sĩ", "diễn viên"]], 
                        ["người bán hàng", ["cửa hàng", "chợ"]],
                        ["bạch tuộc", ["sao biển", "sứa"]], 
                        ["tấm khiên", ["đại bác", "giáo"]], 
                        ["nhà vô địch", ["vận động viên", "người nổi tiếng"]], 
                        ["thị trấn", ["làng", "thành phố"]], 
                        ["hồ dán", ["cồn", "xăng"]]
    ])
    
fillers_b = shuffle([
                        ["quạ", ["chim sẻ", "đại bàng"]], 
                        ["công", ["đà điểu", "cú"]],
                        ["cầu thang", ["gác xép", "ban công"]],
                        ["lông vũ", ["mỏ", "móng vuốt"]], 
                        ["mái nhà", ["hiên", "cổng"]], 
                        ["lâu đài", ["ngai vàng", "tháp"]],
                        ["khuỷu tay", ["mắt cá", "đốt ngón tay"]], 
                        ["cô", ["bà", "chị"]], 
                        ["trăng", ["hành tinh", "thiên thạch"]], 
                        ["phù thuỷ", ["tiên", "nhà ảo thuật"]],
                        ["rừng nhiệt đới", ["ốc đảo", "đầm lầy"]], 
                        ["bể cá", ["kênh đào", "đập nước"]], 
                        ["gấu trúc", ["gấu túi", "gấu Bắc cực"]],
                        ["sao chổi", ["khí quyển", "thiên hà"]], 
                        ["cẩm thạch", ["bê tông", "xi măng"]], 
                        ["bắc", ["đông", "tây"]], 
                        ["đài phun nước", ["quãng trường", "tượng"]], 
                        ["sa mạc", ["Bắc cực", "đảo"]],
                        ["bồi bàn", ["đầu bếp", "người pha chế rượu"]], 
                        ["tủ sách", ["lò sưởi", "máy lạnh"]],
                        ["động đất", ["bão", "sóng thần"]],
                        ["khủng long", ["cá sấu", "rắn"]], 
                        ["da thuộc", ["lụa", "nhung"]],
                        ["mắt kính", ["ống nhòm", "kính viễn vọng"]], 
                        ["ống nước", ["cống", "máy bơm"]], 
                        ["hành lang", ["lối vào", "lối ra"]],
                        ["thuốc", ["nhiệt kế", "ống nghe"]], 
                        //["hammock", ["pillow", "clothesline"]], 
                        //["pit", ["trench", "ditch"]], 
                        ["giữa", ["trên", "dưới"]],
                        ["nhân viên", ["quản lý", "giám đốc"]],
                        ["thư", ["ghi chú", "bài báo"]], 
                        ["thô", ["cứng", "nhọn"]], 
                        ["trơn", ["mềm", "nhẹ"]],
                        ["ồn", ["nóng", "sáng"]], 
                        ["bẫy", ["lừa gạt", "nói dối"]], 
                        ["mõm", ["móng", "đuôi"]],
                        ["trong lúc", ["trước", "sau"]], 
                        ["trăm", ["mười", "ngàn"]], 
                        ["tháng sáu", ["tháng hai", "tháng mười"]], 
                        ["đốt sống", ["sọ", "xương sườn"]], 
                        ["khán giả", ["bệnh nhân", "khách hàng"]],
                        ["nhà chọc trời", ["sân vận động", "căn hộ"]], 
                        ["đen", ["trắng", "xanh dương"]], 
                        ["buổi sáng", ["buổi tối", "buổi chiều"]], 
                        ["gió", ["mưa", "mưa đá"]],
                        //["spring", ["winter", "summer"]], 
                        ["hoàng hôn", ["ngày", "đêm"]],
                        ["hình tam giác", ["hình tròn", "ngôi sao"]],
                        ["buồn", ["sợ hãi", "giận"]], 
                        ["vỉa hè", ["ngã tư", "con đường"]], 
                        ["khói", ["sương mù", "hơi nước"]],
                        ["bạc", ["vàng", "sắt"]], 
                        ["cầu vồng", ["đám mây", "mặt trời"]], 
                        ["tháng", ["tuần", "năm"]],
                        ["chiều cao", ["chiều rộng", "chiều sâu"]], 
                        ["thứ tư", ["thứ bảy", "chủ nhật"]], 
                        ["phút", ["giờ", "giây"]], 
                        ["hôm nay", ["ngày mai", "hôm qua"]]
    ])

all_filler_groups = shuffle([fillers_a, fillers_b]);
all_fillers = []
for (var i = 0; i < all_filler_groups.length; i++) {
    for (var j = 0; j < all_filler_groups[i].length; j++) {
        all_fillers.push(all_filler_groups[i][j]);
    }
}

attention_checks = shuffle([
                        ["Chọn đức vua", ["đức vua", "hoàng tử"]], 
                        ["Chọn má", ["má", "trán"]],
                        ["Chọn bữa tối", ["bữa tối", "bữa trưa"]], 
                        ["Chọn sô-cô-la", ["sô-cô-la", "kẹo"]],
                        ["Chọn sân bay", ["sân bay", "hành khách"]], 
                        ["Chọn đầu gối", ["đầu gối", "cổ tay"]],
                        ["Chọn quả địa cầu", ["quả địa cầu", "bản đồ"]],
                        ["Chọn gỗ", ["gỗ", "kim loại"]],
                        ["Chọn vợ", ["vợ", "chồng"]], 
                        ["Chọn họng", ["họng", "hàm"]],
                        ["Chọn văn phòng", ["văn phòng", "hồ sơ"]]
                    ]);