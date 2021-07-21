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
                        ["teacup", ["glass", "kettle"]], 
                        ["beer", ["juice", "party"]],
                        ["pigeon", ["duck", "nest"]], 
                        ["ball", ["dice", "child"]], 
                        ["boot", ["slipper", "foot"]], 
                        ["hair", ["beard", "comb"]],
                        ["bullet", ["arrow", "gun"]], 
                        ["carrot", ["peas", "rabbit"]], 
                        ["chair", ["stool", "desk"]],
                        ["chalk", ["marker", "blackboard"]], 
                        ["chimney", ["wall", "fire"]],
                        ["squirrel", ["mouse", "acorn"]], 
                        ["crayon", ["paintbrush", "drawing"]], 
                        ["cup", ["saucer", "coffee"]],
                        ["door", ["window", "key"]], 
                        ["piano", ["flute", "song"]], 
                        ["dust", ["ash", "broom"]],
                        ["soccer", ["tennis", "goal"]], 
                        ["kitchen", ["bedroom", "refrigerator"]], 
                        ["knight", ["soldier", "armor"]], 
                        ["gloves", ["shorts", "ski"]], 
                        ["mouth", ["nose", "toothbrush"]],
                        ["movie", ["cartoon", "director"]], 
                        //["needle", ["pin", "sewing machine"]], 
                        ["oyster", ["clam", "pearl"]], 
                        ["mailman", ["firefighter", "package"]], 
                        ["sink", ["bathtub", "soap"]], 
                        ["spider", ["grasshopper", "web"]],
                        ["sword", ["dagger", "pirate"]], 
                        ["tent", ["cabin", "campfire"]], 
                        ["towel", ["handkerchief", "shower"]], 
                        ["train", ["bus", "tracks"]],
                        ["peach", ["plum", "pit"]], 
                        ["trumpet", ["violin", "orchestra"]] 
                     ]);


    // arrays of 2 each
dup_triads_1 = shuffle([
        [ ["airplane", ["ship", "pilot"]], 
            ["car", ["motorcycle", "traffic lights"]], 
             ["seagull", ["bat", "sky"]]
            
        ],
        [ ["sailor", ["pilot", "ship"]], 
            ["airplane", ["helicopter", "sky"]], 
            ["car", ["bicycle", "tire"]],
         ["helmet", ["cap", "motorcycle"]]
            
        ]
        
    ]);
        
dup_triads_2 = shuffle([
        [ ["hammer", ["saw", "nail"]]
        ],
        [ ["saw", ["hammer ", "plank"]]
        ]
    ]);
        
dup_triads_3 = shuffle([
        [ ["apple", ["strawberry", "tree"]], 
            ["cactus", ["bush", "sand"]], 
             ["watering can", ["bucket", "flowers"]]
            
        ],
        [ ["apple", ["orange", "basket"]], 
            ["coconut", ["mango", "tree"]], 
            ["axe", ["scissors", "stump"]],
         ["flower", ["bush", "vase"]]
            
        ]
        
    ]);
        
dup_triads_4 = shuffle([
        [ ["baby", ["adult", "bottle"]], 
            ["bed", ["couch", "pillow"]]
            
        ],
        [ ["crib", ["bed", "baby"]], 
            ["can", ["bottle", "straw"]]
        ]
        
    ]);
        
dup_triads_5 = shuffle([
        [ ["bee", ["ladybug", "garden"]]
            
        ],
        [ ["bee", ["butterfly", "honey"]], 
            ["house", ["hut", "garden"]]
        ]
        
    ]);
    
dup_triads_6 = shuffle([
        [ ["chicken", ["swan", "egg"]], 
            ["grass", ["leaf", "horse"]], 
             ["cow", ["pig", "milk"]], 
            ["monkey", ["donkey", "jungle"]], 
            
        ],
        [ ["cow", ["chicken", "grass"]], 
            ["elephant", ["giraffe", "zoo"]], 
            ["horse", ["donkey", "saddle"]]
            
        ]
        
    ]);
        
dup_triads_7 = shuffle([
        [ ["cake", ["cookie", "birthday"]]
            
        ],
        [ ["pastry", ["cake", "baker"]] 

        ]
        
    ]);
        
dup_triads_8 = shuffle([
        [ ["legs", ["arms", "pants"]]
            
        ],
        [ ["dress", ["pants", "hanger"]] 

        ]
        
    ]);
    
dup_triads_9 = shuffle([
        [ ["bowl", ["plate", "soup"]], 
            ["pot", ["pan", "ladle"]], 
             ["spoon", ["fork", "sugar"]]
            
        ],
        [ ["bread", ["rice", "oven"]], 
            ["pot", ["pan", "stove"]], 
            ["spoon", ["ladle", "bowl"]]
            
        ]
        
    ]);
    
dup_triads_10 = shuffle([
        [ ["dog", ["cat", "leash"]]       
        ],
        [ ["dog", ["cat", "bone"]]
        ]
        
    ]);
    
dup_triads_11 = shuffle([
        [ ["lake", ["stream", "fish"]], 
            ["ocean", ["river", "whale"]], 
            ["chain", ["rope", "lock"]]
        ],
        [ ["ocean", ["stream", "boat"]],
            ["net", ["rope", "fish"]]
        ]
        
    ]);
    
dup_triads_12 = shuffle([
        [ ["coat", ["sweatshirt", "umbrella"]]
            
        ],
        [ ["jacket", ["sweater", "winter"]] 

        ]
        
    ]);
    
dup_triads_13 = shuffle([
        [ ["onion", ["tomato", "farmer"]], 
            ["sheep", ["goat", "wool"]]
        ],
        [ ["farmer", ["butcher", "tractor"]], 
            ["goat", ["deer", "field"]], 
            ["onion", ["peppers", "frying pan"]]
        ]
        
    ]);
    
dup_triads_14 = shuffle([
        [ ["crown", ["hat", "queen"]]
            
        ],
        [ ["hat", ["crown", "head"]] 

        ]
        
    ]);
    
dup_triads_15 = shuffle([
        [ ["teacher", ["policeman", "desk"]], 
            ["doctor", ["engineer", "hospital"]]
        ],
        [ ["lamp", ["flashlight", "desk"]], 
            ["policeman", ["teacher", "jail"]]
        ]
        
    ]);
    
dup_triads_16 = shuffle([
        [ ["frog", ["turtle", "pond"]]
            
        ],
        [ ["lilypad", ["rose", "pond"]] 

        ]
        
    ]);
    
dup_triads_17 = shuffle([
        [ ["ring", ["necklace", "hand"]], 
            ["pencil", ["pen", "eraser"]]
        ],
        [ ["hand", ["foot", "bracelet"]], 
            ["notepad", ["book", "backpack"]], 
            ["pen", ["pencil", "paper"]]
        ]
        
    ]);
    
dup_triads_18 = shuffle([
        [ ["school", ["church", "student"]]
            
        ],
        [ ["university", ["school", "professor"]] 

        ]
        
    ]);
    
dup_triads_19 = shuffle([
        [ ["snow", ["ice", "mountain"]],
        ],
        [ ["mountain", ["cliff", "ice"]],
            ["penguin", ["goose", "snow"]]

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
                        ["lemon", ["grape", "pear"]], 
                        ["library", ["bank", "cinema"]],
                        ["kite", ["basketball", "swing"]], 
                        ["bridge", ["tunnel", "highway"]], 
                        ["infant", ["man", "woman"]], 
                        ["coriander", ["salt", "pepper"]], 
                        ["grandfather", ["sister", "uncle"]], 
                        ["candle", ["torch", "lantern"]],
                        ["fox", ["tiger", "lion"]], 
                        ["branch", ["root", "stem"]], 
                        ["parrot", ["hawk", "songbird"]], 
                        ["sprout", ["seedling", "plant"]], 
                        ["nose", ["thumb", "finger"]], 
                        ["cucumber", ["corn", "potato"]], 
                        ["scarf", ["socks", "beanie"]], 
                        ["shovel", ["rake", "hoe"]],
                        ["vinegar", ["oil", "butter"]], 
                        ["comics", ["magazine", "newspaper"]],
                        ["button", ["sleeve", "collar"]],
                        ["mattress", ["sheet", "blanket"]], 
                        ["tea", ["soda", "lemonade"]],
                        ["wolf", ["bear", "leopard"]], 
                        ["bird", ["lizard", "toad"]],
                        ["drawer", ["shelf", "cabinet"]], 
                        ["neck", ["chin", "shoulders"]], 
                        ["floor", ["rug", "tile"]],
                        ["leech", ["flea", "louse"]],
                        //["spider", ["mosquito", "fly"]],
                        ["balloon", ["marbles", "doll"]], 
                        //["dentist", ["tooth", "mouth"]],
                        ["singer", ["writer", "poet"]],  
                        ["robot", ["phone", "computer"]],
                        ["tongue", ["teeth", "lips"]], 
                        ["garlic", ["ginger", "cilantro"]], 
                        ["watermelon", ["papaya", "grapefruit"]], 
                        ["heart", ["stomach", "lungs"]], 
                        ["coral", ["shark", "dolphin"]], 
                        ["worm", ["ant", "cockroach"]],
                        ["coast", ["harbor", "pier"]], 
                        ["mushroom", ["pumpkin", "eggplant"]], 
                        ["museum", ["playground", "park"]], 
                        ["waterfall", ["cave", "chasm"]],
                        ["orchid", ["jasmine", "lotus"]],
                        ["camel", ["rhinoceros", "gorilla"]], 
                        //["soap", ["fragrance", "lotion"]], 
                        ["popcorn", ["chips", "crackers"]],
                        ["electricity", ["heat", "sunlight"]], 
                        ["camera", ["clock", "vacuum"]], 
                        ["rock", ["soil", "crystal"]], 
                        ["crutch", ["cane", "wheelchair"]],
                        //["bone", ["skin", "muscle"]], 
                        ["musician", ["artist", "actor"]], 
                        ["seller", ["shop", "market"]],
                        ["octopus", ["starfish", "jellyfish"]], 
                        ["shield", ["canon", "spear"]], 
                        ["champion", ["athlete", "celebrity"]], 
                        ["town", ["village", "city"]], 
                        ["glue", ["alcohol", "gasoline"]]
    ])
    
fillers_b = shuffle([
                        ["crow", ["sparrow", "eagle"]], 
                        ["peacock", ["ostrich", "owl"]],
                        ["stairs", ["attic", "balcony"]],
                        ["feather", ["beak", "talons"]], 
                        ["roof", ["patio", "gate"]], 
                        ["castle", ["throne", "tower"]],
                        ["elbow", ["ankle", "knuckle"]], 
                        ["aunt", ["grandmother", "sister"]], 
                        ["moon", ["planet", "asteroid"]], 
                        ["witch", ["fairy", "magician"]],
                        ["rainforest", ["oasis", "swamp"]], 
                        ["aquarium", ["canal", "dam"]], 
                        ["panda", ["koala", "polar bear"]],
                        ["comet", ["atmosphere", "galaxy"]], 
                        ["marble", ["concrete", "cement"]], 
                        ["north", ["east", "west"]], 
                        ["fountain", ["square", "statue"]], 
                        ["desert", ["arctic", "island"]],
                        ["waiter", ["cook", "bartender"]], 
                        ["bookcase", ["fireplace", "air conditioner"]],
                        ["earthquake", ["hurricane", "tsunami"]],
                        ["dinosaur", ["crocodile", "snake"]], 
                        ["leather", ["silk", "velvet"]],
                        ["glasses", ["binoculars", "telescope"]], 
                        ["pipe", ["sewer", "pump"]], 
                        ["corridor", ["entrance", "exit"]],
                        ["medicine", ["thermometer", "stethoscope"]], 
                        //["hammock", ["pillow", "clothesline"]], 
                        //["pit", ["trench", "ditch"]], 
                        ["middle", ["top", "bottom"]],
                        ["employee", ["manager", "executive"]],
                        ["letter", ["note", "article"]], 
                        ["rough", ["hard", "sharp"]], 
                        ["smooth", ["soft", "light"]],
                        ["loud", ["hot", "bright"]], 
                        ["trap", ["trick", "lie"]], 
                        ["muzzle", ["claw", "tail"]],
                        ["during", ["before", "after"]], 
                        ["hundred", ["ten", "thousand"]], 
                        ["June", ["February", "October"]], 
                        ["vertebra", ["skull", "rib"]], 
                        ["audience", ["patient", "customer"]],
                        ["skyscraper", ["stadium", "apartment"]], 
                        ["black", ["white", "blue"]], 
                        ["morning", ["evening", "afternoon"]], 
                        ["wind", ["rain", "sleet"]],
                        //["spring", ["winter", "summer"]], 
                        ["sunset", ["day", "night"]],
                        ["triangle", ["circle", "star"]],
                        ["sad", ["afraid", "angry"]], 
                        ["sidewalk", ["intersection", "road"]], 
                        ["smoke", ["fog", "steam"]],
                        ["silver", ["gold", "iron"]], 
                        ["rainbow", ["cloud", "sun"]], 
                        ["month", ["week", "year"]],
                        ["height", ["width", "depth"]], 
                        ["wednesday", ["saturday", "sunday"]], 
                        ["minute", ["hour", "second"]], 
                        ["today", ["tomorrow", "yesterday"]]
    ])

all_filler_groups = shuffle([fillers_a, fillers_b]);
all_fillers = []
for (var i = 0; i < all_filler_groups.length; i++) {
    for (var j = 0; j < all_filler_groups[i].length; j++) {
        all_fillers.push(all_filler_groups[i][j]);
    }
}

attention_checks = shuffle([
                        ["Choose king", ["king", "prince"]], 
                        ["Choose cheek", ["cheek", "forehead"]],
                        ["Choose dinner", ["dinner", "lunch"]], 
                        ["Choose chocolate", ["chocolate", "candy"]],
                        ["Choose airport", ["airport", "passenger"]], 
                        ["Choose knee", ["knee", "wrist"]],
                        ["Choose globe", ["globe", "map"]],
                        ["Choose wood", ["wood", "metal"]],
                        ["Choose wife", ["wife", "husband"]], 
                        ["Choose throat", ["throat", "jaw"]],
                        ["Choose office", ["office", "file"]]
                    ]);