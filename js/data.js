/**
 * English Visual Vocabulary Data
 * DK-style categorized vocabulary with bilingual support
 *
 * 10 categories, ~300 words
 *
 * How to add words:
 *   Copy a word object, fill in id/word/phonetic/translation/emoji/examples
 *   id must be unique across all categories
 */

const VOCAB_DATA = {
  categories: [

    // ============================================================
    // 1. 🏡 居家生活 At Home (40 words)
    //    Rooms, furniture, household items
    // ============================================================
    {
      id: "at-home",
      name: "居家生活",
      nameEn: "At Home",
      emoji: "🏡",
      color: "#FF6B6B",
      words: [
        // -- 房间 & 空间 Rooms & Spaces --
        {
          id: "living-room",
          word: "living room",
          phonetic: "/ˈlɪvɪŋ ruːm/",
          translation: "客厅",
          emoji: "🛋️",
          examples: [
            { en: "We watch TV together in the living room every evening.", zh: "我们每天晚上在客厅一起看电视。" },
            { en: "The living room has a large window facing south.", zh: "客厅有一扇朝南的大窗户。" }
          ]
        },
        {
          id: "bedroom",
          word: "bedroom",
          phonetic: "/ˈbedruːm/",
          translation: "卧室",
          emoji: "🛏️",
          examples: [
            { en: "My bedroom is small but cozy.", zh: "我的卧室虽小但很温馨。" }
          ]
        },
        {
          id: "dining-room",
          word: "dining room",
          phonetic: "/ˈdaɪnɪŋ ruːm/",
          translation: "餐厅",
          emoji: "🍽️",
          examples: [
            { en: "We have a round table in the dining room.", zh: "我们餐厅里有一张圆桌。" }
          ]
        },
        {
          id: "study-room",
          word: "study",
          phonetic: "/ˈstʌdi/",
          translation: "书房",
          emoji: "📚",
          examples: [
            { en: "He spends most of his time reading in the study.", zh: "他大部分时间都在书房里看书。" }
          ]
        },
        {
          id: "hallway",
          word: "hallway / corridor",
          phonetic: "/ˈhɔːlweɪ/ /ˈkɒrɪdɔːr/",
          translation: "走廊；玄关",
          emoji: "🚪",
          examples: [
            { en: "Please leave your shoes in the hallway.", zh: "请把鞋子放在玄关。" }
          ]
        },
        {
          id: "balcony",
          word: "balcony",
          phonetic: "/ˈbælkəni/",
          translation: "阳台",
          emoji: "🌿",
          examples: [
            { en: "I like to have coffee on the balcony in the morning.", zh: "我喜欢早上在阳台上喝咖啡。" }
          ]
        },
        {
          id: "garage",
          word: "garage",
          phonetic: "/ˈɡærɑːʒ/",
          translation: "车库",
          emoji: "🚗",
          examples: [
            { en: "We keep the car in the garage at night.", zh: "我们晚上把车停在车库里。" }
          ]
        },
        {
          id: "stairs",
          word: "stairs",
          phonetic: "/steərz/",
          translation: "楼梯",
          emoji: "🪜",
          examples: [
            { en: "Be careful when you go down the stairs.", zh: "下楼梯时要小心。" }
          ]
        },
        // -- 客厅家具 Living Room Furniture --
        {
          id: "sofa",
          word: "sofa / couch",
          phonetic: "/ˈsəʊfə/ /kaʊtʃ/",
          translation: "沙发",
          emoji: "🛋️",
          examples: [
            { en: "I fell asleep on the sofa while watching a movie.", zh: "我看电影时在沙发上睡着了。" }
          ]
        },
        {
          id: "coffee-table",
          word: "coffee table",
          phonetic: "/ˈkɒfi ˌteɪbl/",
          translation: "茶几",
          emoji: "🪑",
          examples: [
            { en: "I put the magazine on the coffee table.", zh: "我把杂志放在茶几上。" }
          ]
        },
        {
          id: "bookshelf",
          word: "bookshelf",
          phonetic: "/ˈbʊkʃelf/",
          translation: "书架",
          emoji: "📚",
          examples: [
            { en: "The bookshelf is filled with novels and textbooks.", zh: "书架上摆满了小说和教科书。" }
          ]
        },
        {
          id: "tv",
          word: "television (TV)",
          phonetic: "/ˈtelɪvɪʒn/",
          translation: "电视机",
          emoji: "📺",
          examples: [
            { en: "We bought a new 65-inch television for the living room.", zh: "我们给客厅买了一台新的65寸电视。" }
          ]
        },
        {
          id: "remote-control",
          word: "remote control",
          phonetic: "/rɪˈməʊt kənˈtrəʊl/",
          translation: "遥控器",
          emoji: "🎮",
          examples: [
            { en: "I can't find the remote control — it's lost in the sofa again!", zh: "我找不到遥控器了——又掉沙发缝里了！" }
          ]
        },
        {
          id: "rug",
          word: "rug / carpet",
          phonetic: "/rʌɡ/ /ˈkɑːrpɪt/",
          translation: "地毯",
          emoji: "🧶",
          examples: [
            { en: "A soft rug in front of the sofa makes the room feel warmer.", zh: "沙发前铺一块软地毯让房间感觉更温暖。" }
          ]
        },
        {
          id: "curtain",
          word: "curtain",
          phonetic: "/ˈkɜːrtn/",
          translation: "窗帘",
          emoji: "🪟",
          examples: [
            { en: "Could you draw the curtains? The sun is too bright.", zh: "你能拉上窗帘吗？太阳太刺眼了。" }
          ]
        },
        {
          id: "lamp",
          word: "lamp",
          phonetic: "/læmp/",
          translation: "灯；台灯",
          emoji: "💡",
          examples: [
            { en: "I turned on the bedside lamp to read a book.", zh: "我打开了床头灯看书。" }
          ]
        },
        {
          id: "armchair",
          word: "armchair",
          phonetic: "/ˈɑːrmtʃeər/",
          translation: "扶手椅",
          emoji: "🪑",
          examples: [
            { en: "Grandpa likes to sit in his armchair and read the newspaper.", zh: "爷爷喜欢坐在他的扶手椅上看报纸。" }
          ]
        },
        // -- 卧室家具 Bedroom --
        {
          id: "bed",
          word: "bed",
          phonetic: "/bed/",
          translation: "床",
          emoji: "🛏️",
          examples: [
            { en: "I need to buy a new mattress for my bed.", zh: "我需要给我的床买一张新床垫。" }
          ]
        },
        {
          id: "wardrobe",
          word: "wardrobe / closet",
          phonetic: "/ˈwɔːrdrəʊb/ /ˈklɒzɪt/",
          translation: "衣柜",
          emoji: "🚪",
          examples: [
            { en: "My wardrobe is so full that I can't fit any more clothes!", zh: "我的衣柜太满了，再也塞不下衣服了！" }
          ]
        },
        {
          id: "bedside-table",
          word: "bedside table",
          phonetic: "/ˈbedsaɪd ˌteɪbl/",
          translation: "床头柜",
          emoji: "🗄️",
          examples: [
            { en: "I keep a glass of water on my bedside table.", zh: "我在床头柜上放了一杯水。" }
          ]
        },
        {
          id: "mirror",
          word: "mirror",
          phonetic: "/ˈmɪrər/",
          translation: "镜子",
          emoji: "🪞",
          examples: [
            { en: "She checked her reflection in the mirror before leaving.", zh: "她离开前照了一下镜子。" }
          ]
        },
        {
          id: "pillow",
          word: "pillow",
          phonetic: "/ˈpɪləʊ/",
          translation: "枕头",
          emoji: "🛏️",
          examples: [
            { en: "I prefer a firm pillow for better neck support.", zh: "我更喜欢硬一点的枕头来支撑颈部。" }
          ]
        },
        {
          id: "blanket",
          word: "blanket",
          phonetic: "/ˈblæŋkɪt/",
          translation: "毯子",
          emoji: "🧶",
          examples: [
            { en: "I wrapped myself in a warm blanket on the cold evening.", zh: "寒冷的晚上我用一条温暖的毯子裹住自己。" }
          ]
        },
        {
          id: "drawer",
          word: "drawer",
          phonetic: "/drɔːr/",
          translation: "抽屉",
          emoji: "🗄️",
          examples: [
            { en: "I keep my socks in the top drawer of the dresser.", zh: "我把袜子放在梳妆台的最上层抽屉里。" }
          ]
        },
        // -- 浴室 Bathroom --
        {
          id: "shower",
          word: "shower",
          phonetic: "/ˈʃaʊər/",
          translation: "淋浴间",
          emoji: "🚿",
          examples: [
            { en: "The water pressure in the shower is amazing!", zh: "淋浴的水压太好了！" }
          ]
        },
        {
          id: "bathtub",
          word: "bathtub",
          phonetic: "/ˈbæθtʌb/",
          translation: "浴缸",
          emoji: "🛁",
          examples: [
            { en: "I love to take a relaxing bath in the bathtub after work.", zh: "我喜欢下班后在浴缸里泡个放松的澡。" }
          ]
        },
        {
          id: "sink",
          word: "sink",
          phonetic: "/sɪŋk/",
          translation: "洗手盆；水槽",
          emoji: "🚰",
          examples: [
            { en: "Don't leave the tap running after you use the sink.", zh: "用完洗手盆后别忘了关水龙头。" }
          ]
        },
        {
          id: "toilet",
          word: "toilet",
          phonetic: "/ˈtɔɪlət/",
          translation: "马桶；厕所",
          emoji: "🚽",
          examples: [
            { en: "The toilet is at the end of the hallway.", zh: "厕所在走廊尽头。" }
          ]
        },
        {
          id: "towel",
          word: "towel",
          phonetic: "/ˈtaʊəl/",
          translation: "毛巾",
          emoji: "🧣",
          examples: [
            { en: "Please hang your wet towel on the rack.", zh: "请把湿毛巾挂在架子上。" }
          ]
        },
        {
          id: "toothbrush",
          word: "toothbrush",
          phonetic: "/ˈtuːθbrʌʃ/",
          translation: "牙刷",
          emoji: "🪥",
          examples: [
            { en: "You should replace your toothbrush every three months.", zh: "你应该每三个月换一次牙刷。" }
          ]
        },
        {
          id: "shampoo",
          word: "shampoo",
          phonetic: "/ʃæmˈpuː/",
          translation: "洗发水",
          emoji: "🧴",
          examples: [
            { en: "I'm running out of shampoo — I need to buy a new bottle.", zh: "我的洗发水快用完了——需要买一瓶新的。" }
          ]
        },
        {
          id: "hairdryer",
          word: "hairdryer",
          phonetic: "/ˈheərˌdraɪər/",
          translation: "吹风机",
          emoji: "💨",
          examples: [
            { en: "I use the hairdryer every morning after I wash my hair.", zh: "我每天早上洗完头都用吹风机。" }
          ]
        },
        // -- 居家动作 Household Actions --
        {
          id: "make-bed-2",
          word: "make the bed",
          phonetic: "/meɪk ðə bed/",
          translation: "整理床铺",
          emoji: "🛏️",
          examples: [
            { en: "My mom always tells me to make the bed after waking up.", zh: "我妈妈总是告诉我起床后要整理床铺。" }
          ]
        },
        {
          id: "fold-laundry-2",
          word: "fold laundry",
          phonetic: "/fəʊld ˈlɔːndri/",
          translation: "叠衣服",
          emoji: "👕",
          examples: [
            { en: "I need to fold the laundry before watching TV.", zh: "我看电视前需要把衣服叠好。" }
          ]
        },
        {
          id: "vacuum-2",
          word: "vacuum",
          phonetic: "/ˈvækjuːm/",
          translation: "吸尘；用吸尘器打扫",
          emoji: "🧹",
          examples: [
            { en: "I vacuum the living room every weekend.", zh: "我每周周末用吸尘器打扫客厅。" }
          ]
        },
        {
          id: "water-plants-2",
          word: "water the plants",
          phonetic: "/ˈwɔːtər ðə plɑːnts/",
          translation: "给植物浇水",
          emoji: "🪴",
          examples: [
            { en: "Don't forget to water the plants while I'm away.", zh: "我不在的时候别忘了给植物浇水。" }
          ]
        },
        {
          id: "take-out-trash-2",
          word: "take out the trash",
          phonetic: "/teɪk aʊt ðə træʃ/",
          translation: "倒垃圾",
          emoji: "🗑️",
          examples: [
            { en: "Could you take out the trash? It's starting to smell.", zh: "你能把垃圾倒了吗？开始有味道了。" }
          ]
        },
        {
          id: "sweep-floor",
          word: "sweep the floor",
          phonetic: "/swiːp ðə flɔːr/",
          translation: "扫地",
          emoji: "🧹",
          examples: [
            { en: "I sweep the floor every day to keep it clean.", zh: "我每天扫地以保持干净。" }
          ]
        },
        {
          id: "mop-floor",
          word: "mop the floor",
          phonetic: "/mɒp ðə flɔːr/",
          translation: "拖地",
          emoji: "🪣",
          examples: [
            { en: "After sweeping, I mop the floor with soapy water.", zh: "扫完地后，我用肥皂水拖地。" }
          ]
        }
      ]
    },

    // ============================================================
    // 2. 🍳 厨房与烹饪 Kitchen & Cooking (30 words)
    //    Kitchen appliances, utensils, cooking verbs
    // ============================================================
    {
      id: "kitchen",
      name: "厨房烹饪",
      nameEn: "Kitchen & Cooking",
      emoji: "🍳",
      color: "#FF8E53",
      words: [
        // -- 厨房空间 & 电器 --
        {
          id: "refrigerator",
          word: "refrigerator / fridge",
          phonetic: "/rɪˈfrɪdʒəreɪtər/ /frɪdʒ/",
          translation: "冰箱",
          emoji: "🧊",
          examples: [
            { en: "We keep vegetables and milk in the refrigerator.", zh: "我们把蔬菜和牛奶放在冰箱里。" }
          ]
        },
        {
          id: "oven",
          word: "oven",
          phonetic: "/ˈʌvn/",
          translation: "烤箱",
          emoji: "🔥",
          examples: [
            { en: "I baked a cake in the oven for my friend's birthday.", zh: "我用烤箱为朋友的生日烤了一个蛋糕。" }
          ]
        },
        {
          id: "microwave",
          word: "microwave",
          phonetic: "/ˈmaɪkrəweɪv/",
          translation: "微波炉",
          emoji: "📦",
          examples: [
            { en: "Just pop it in the microwave for two minutes.", zh: "把它放进微波炉加热两分钟就行。" }
          ]
        },
        {
          id: "stove",
          word: "stove / cooker",
          phonetic: "/stəʊv/ /ˈkʊkər/",
          translation: "灶台；炉具",
          emoji: "🔥",
          examples: [
            { en: "She was cooking soup on the stove when I arrived.", zh: "我到的时候她正在灶台上煮汤。" }
          ]
        },
        {
          id: "kettle",
          word: "kettle",
          phonetic: "/ˈketl/",
          translation: "水壶",
          emoji: "🫖",
          examples: [
            { en: "I boiled some water in the kettle to make tea.", zh: "我用烧水壶烧了些水泡茶。" }
          ]
        },
        {
          id: "toaster",
          word: "toaster",
          phonetic: "/ˈtəʊstər/",
          translation: "烤面包机",
          emoji: "🍞",
          examples: [
            { en: "I put two slices of bread in the toaster for breakfast.", zh: "我把两片面包放进烤面包机当早餐。" }
          ]
        },
        {
          id: "dishwasher",
          word: "dishwasher",
          phonetic: "/ˈdɪʃwɒʃər/",
          translation: "洗碗机",
          emoji: "🍽️",
          examples: [
            { en: "The dishwasher can clean all the dishes in 30 minutes.", zh: "洗碗机能在30分钟内洗完所有碗碟。" }
          ]
        },
        // -- 厨具 & 餐具 --
        {
          id: "knife",
          word: "knife",
          phonetic: "/naɪf/",
          translation: "刀",
          emoji: "🔪",
          examples: [
            { en: "Be careful — this knife is very sharp.", zh: "小心——这把刀很锋利。" }
          ]
        },
        {
          id: "cutting-board",
          word: "cutting board",
          phonetic: "/ˈkʌtɪŋ bɔːrd/",
          translation: "砧板",
          emoji: "🪵",
          examples: [
            { en: "Use the red cutting board for meat and the green one for vegetables.", zh: "用红色砧板切肉，绿色砧板切蔬菜。" }
          ]
        },
        {
          id: "frying-pan",
          word: "frying pan",
          phonetic: "/ˈfraɪɪŋ pæn/",
          translation: "煎锅",
          emoji: "🍳",
          examples: [
            { en: "Heat some oil in the frying pan before adding the eggs.", zh: "在煎锅里倒点油加热，然后再放鸡蛋。" }
          ]
        },
        {
          id: "pot",
          word: "pot",
          phonetic: "/pɒt/",
          translation: "锅；汤锅",
          emoji: "🥘",
          examples: [
            { en: "She put the chicken soup in a large pot and let it simmer.", zh: "她把鸡汤放进大锅里用小火慢炖。" }
          ]
        },
        {
          id: "spatula",
          word: "spatula",
          phonetic: "/ˈspætʃələ/",
          translation: "锅铲",
          emoji: "🥄",
          examples: [
            { en: "Use a spatula to flip the pancake gently.", zh: "用锅铲轻轻翻动煎饼。" }
          ]
        },
        {
          id: "ladle",
          word: "ladle",
          phonetic: "/ˈleɪdl/",
          translation: "汤勺",
          emoji: "🥄",
          examples: [
            { en: "She used a ladle to serve the soup into bowls.", zh: "她用汤勺把汤盛到碗里。" }
          ]
        },
        {
          id: "colander",
          word: "colander",
          phonetic: "/ˈkɒləndər/",
          translation: "沥水篮；漏勺",
          emoji: "🥗",
          examples: [
            { en: "After boiling the pasta, drain it in a colander.", zh: "煮好意面后，用沥水篮把水滤掉。" }
          ]
        },
        {
          id: "peeler",
          word: "peeler",
          phonetic: "/ˈpiːlər/",
          translation: "削皮器",
          emoji: "🥕",
          examples: [
            { en: "Use a peeler to remove the skin from the potatoes.", zh: "用削皮器把土豆的皮削掉。" }
          ]
        },
        // -- 烹饪动作 --
        {
          id: "chop",
          word: "chop",
          phonetic: "/tʃɒp/",
          translation: "切；剁",
          emoji: "🔪",
          examples: [
            { en: "Chop the onions into small pieces.", zh: "把洋葱切成小块。" }
          ]
        },
        {
          id: "boil",
          word: "boil",
          phonetic: "/bɔɪl/",
          translation: "煮；煮沸",
          emoji: "♨️",
          examples: [
            { en: "Boil the eggs for about eight minutes.", zh: "把鸡蛋煮大约八分钟。" }
          ]
        },
        {
          id: "fry",
          word: "fry",
          phonetic: "/fraɪ/",
          translation: "煎；炸；炒",
          emoji: "🍳",
          examples: [
            { en: "I'll fry some vegetables for a quick dinner.", zh: "我炒个蔬菜当快速晚餐。" }
          ]
        },
        {
          id: "steam",
          word: "steam",
          phonetic: "/stiːm/",
          translation: "蒸",
          emoji: "♨️",
          examples: [
            { en: "Steaming is a healthy way to cook fish.", zh: "蒸是烹饪鱼的健康方式。" }
          ]
        },
        {
          id: "bake",
          word: "bake",
          phonetic: "/beɪk/",
          translation: "烤（面包/蛋糕）",
          emoji: "🥖",
          examples: [
            { en: "I love the smell of bread baking in the oven.", zh: "我喜欢面包在烤箱里烘烤的香味。" }
          ]
        },
        {
          id: "stir",
          word: "stir",
          phonetic: "/stɜːr/",
          translation: "搅拌",
          emoji: "🥄",
          examples: [
            { en: "Stir the soup occasionally to prevent it from burning.", zh: "不时搅拌汤，防止烧焦。" }
          ]
        },
        {
          id: "season",
          word: "season",
          phonetic: "/ˈsiːzn/",
          translation: "给……调味",
          emoji: "🧂",
          examples: [
            { en: "Season the chicken with salt and pepper before cooking.", zh: "烹饪前用盐和胡椒给鸡肉调味。" }
          ]
        },
        {
          id: "pour",
          word: "pour",
          phonetic: "/pɔːr/",
          translation: "倒；倾倒",
          emoji: "🥛",
          examples: [
            { en: "Pour the milk into a glass.", zh: "把牛奶倒进杯子里。" }
          ]
        },
        // -- 调味料 --
        {
          id: "salt",
          word: "salt",
          phonetic: "/sɔːlt/",
          translation: "盐",
          emoji: "🧂",
          examples: [
            { en: "Don't put too much salt in the dish.", zh: "别在菜里放太多盐。" }
          ]
        },
        {
          id: "sugar",
          word: "sugar",
          phonetic: "/ˈʃʊɡər/",
          translation: "糖",
          emoji: "🍬",
          examples: [
            { en: "Do you take sugar in your coffee?", zh: "你咖啡里加糖吗？" }
          ]
        },
        {
          id: "soy-sauce",
          word: "soy sauce",
          phonetic: "/sɔɪ sɔːs/",
          translation: "酱油",
          emoji: "🫘",
          examples: [
            { en: "Add a spoonful of soy sauce to the stir-fry.", zh: "在炒菜里加一勺酱油。" }
          ]
        },
        {
          id: "vinegar",
          word: "vinegar",
          phonetic: "/ˈvɪnɪɡər/",
          translation: "醋",
          emoji: "🫙",
          examples: [
            { en: "The salad dressing is made with olive oil and vinegar.", zh: "这个沙拉酱是用橄榄油和醋调制的。" }
          ]
        },
        {
          id: "recipe",
          word: "recipe",
          phonetic: "/ˈresəpi/",
          translation: "食谱；菜谱",
          emoji: "📝",
          examples: [
            { en: "I found a great recipe for chocolate cake online.", zh: "我在网上找到了一个很棒的巧克力蛋糕食谱。" }
          ]
        }
      ]
    },

    // ============================================================
    // 3. 🛒 购物与服装 Shopping & Clothes (30 words)
    // ============================================================
    {
      id: "shopping",
      name: "购物服装",
      nameEn: "Shopping & Clothes",
      emoji: "🛒",
      color: "#FDCB6E",
      words: [
        // -- 服装 --
        {
          id: "shirt",
          word: "shirt",
          phonetic: "/ʃɜːrt/",
          translation: "衬衫",
          emoji: "👔",
          examples: [
            { en: "He wore a white shirt and a red tie to the interview.", zh: "他穿着白衬衫和红领带去面试。" }
          ]
        },
        {
          id: "trousers",
          word: "trousers / pants",
          phonetic: "/ˈtraʊzərz/ /pænts/",
          translation: "裤子",
          emoji: "👖",
          examples: [
            { en: "These trousers are too long — I need to hem them.", zh: "这条裤子太长了——我需要改短。" }
          ]
        },
        {
          id: "jacket",
          word: "jacket",
          phonetic: "/ˈdʒækɪt/",
          translation: "夹克；外套",
          emoji: "🧥",
          examples: [
            { en: "You should bring a jacket — it might get cold tonight.", zh: "你应该带件夹克——今晚可能会变冷。" }
          ]
        },
        {
          id: "dress",
          word: "dress",
          phonetic: "/dres/",
          translation: "连衣裙",
          emoji: "👗",
          examples: [
            { en: "She wore a beautiful red dress to the party.", zh: "她穿了一条漂亮的红裙子去派对。" }
          ]
        },
        {
          id: "skirt",
          word: "skirt",
          phonetic: "/skɜːrt/",
          translation: "裙子",
          emoji: "👗",
          examples: [
            { en: "She bought a plaid skirt from the department store.", zh: "她在百货商店买了一条格子裙。" }
          ]
        },
        {
          id: "sweater",
          word: "sweater",
          phonetic: "/ˈswetər/",
          translation: "毛衣",
          emoji: "🧶",
          examples: [
            { en: "This sweater is made of pure wool.", zh: "这件毛衣是纯羊毛的。" }
          ]
        },
        {
          id: "coat",
          word: "coat",
          phonetic: "/kəʊt/",
          translation: "大衣；外套",
          emoji: "🧥",
          examples: [
            { en: "I need a warm winter coat for the cold weather.", zh: "我需要一件暖和的大衣来抵御寒冷的天气。" }
          ]
        },
        {
          id: "suit",
          word: "suit",
          phonetic: "/suːt/",
          translation: "西装",
          emoji: "🤵",
          examples: [
            { en: "He wears a suit and tie to work every day.", zh: "他每天穿西装打领带去上班。" }
          ]
        },
        {
          id: "shoes",
          word: "shoes",
          phonetic: "/ʃuːz/",
          translation: "鞋子",
          emoji: "👟",
          examples: [
            { en: "These new shoes are very comfortable to walk in.", zh: "这双新鞋穿起来走路很舒服。" }
          ]
        },
        {
          id: "sneakers",
          word: "sneakers / trainers",
          phonetic: "/ˈsniːkərz/ /ˈtreɪnərz/",
          translation: "运动鞋",
          emoji: "👟",
          examples: [
            { en: "I wear sneakers when I go to the gym.", zh: "我去健身房时穿运动鞋。" }
          ]
        },
        {
          id: "socks",
          word: "socks",
          phonetic: "/sɒks/",
          translation: "袜子",
          emoji: "🧦",
          examples: [
            { en: "I need to buy a new pack of socks.", zh: "我需要买一包新袜子。" }
          ]
        },
        {
          id: "hat",
          word: "hat",
          phonetic: "/hæt/",
          translation: "帽子",
          emoji: "🧢",
          examples: [
            { en: "Wear a hat to protect yourself from the sun.", zh: "戴顶帽子防晒。" }
          ]
        },
        {
          id: "belt",
          word: "belt",
          phonetic: "/belt/",
          translation: "皮带",
          emoji: "🪢",
          examples: [
            { en: "This belt doesn't match my shoes.", zh: "这条皮带和我的鞋子不搭。" }
          ]
        },
        {
          id: "underwear",
          word: "underwear",
          phonetic: "/ˈʌndərweər/",
          translation: "内衣",
          emoji: "🩲",
          examples: [
            { en: "It's important to wear clean underwear every day.", zh: "每天穿干净的内衣很重要。" }
          ]
        },
        {
          id: "pajamas",
          word: "pajamas / pyjamas",
          phonetic: "/pəˈdʒɑːməz/",
          translation: "睡衣",
          emoji: "🌙",
          examples: [
            { en: "I changed into my pajamas before going to bed.", zh: "我上床前换上了睡衣。" }
          ]
        },
        // -- 配饰 Accessories --
        {
          id: "watch",
          word: "watch",
          phonetic: "/wɒtʃ/",
          translation: "手表",
          emoji: "⌚",
          examples: [
            { en: "My watch is five minutes fast.", zh: "我的表快了五分钟。" }
          ]
        },
        {
          id: "glasses",
          word: "glasses",
          phonetic: "/ˈɡlɑːsɪz/",
          translation: "眼镜",
          emoji: "👓",
          examples: [
            { en: "I need to clean my glasses — they're dirty.", zh: "我需要擦擦眼镜——脏了。" }
          ]
        },
        {
          id: "bag",
          word: "bag",
          phonetic: "/bæɡ/",
          translation: "包；袋子",
          emoji: "👜",
          examples: [
            { en: "She carries her laptop in a leather bag.", zh: "她把笔记本电脑放在一个皮包里。" }
          ]
        },
        // -- 购物 Shopping --
        {
          id: "shopping-cart",
          word: "shopping cart",
          phonetic: "/ˈʃɒpɪŋ kɑːrt/",
          translation: "购物车",
          emoji: "🛒",
          examples: [
            { en: "I pushed the shopping cart down the aisle.", zh: "我推着购物车沿着过道走。" }
          ]
        },
        {
          id: "basket",
          word: "basket",
          phonetic: "/ˈbɑːskɪt/",
          translation: "购物篮",
          emoji: "🧺",
          examples: [
            { en: "I just need a basket — I'm only buying a few things.", zh: "我只需要一个篮子——我只买几样东西。" }
          ]
        },
        {
          id: "checkout",
          word: "checkout",
          phonetic: "/ˈtʃekaʊt/",
          translation: "收银台；结账",
          emoji: "🛒",
          examples: [
            { en: "Please proceed to the checkout to pay for your items.", zh: "请到收银台付款。" }
          ]
        },
        {
          id: "receipt",
          word: "receipt",
          phonetic: "/rɪˈsiːt/",
          translation: "收据；小票",
          emoji: "🧾",
          examples: [
            { en: "Keep your receipt in case you need to return the item.", zh: "保留好收据，以防需要退货。" }
          ]
        },
        {
          id: "cashier",
          word: "cashier",
          phonetic: "/kæˈʃɪər/",
          translation: "收银员",
          emoji: "💁",
          examples: [
            { en: "The cashier scanned each item at the counter.", zh: "收银员在柜台上扫描了每件商品。" }
          ]
        },
        {
          id: "fitting-room",
          word: "fitting room",
          phonetic: "/ˈfɪtɪŋ ruːm/",
          translation: "试衣间",
          emoji: "🚪",
          examples: [
            { en: "The fitting room is at the back of the store.", zh: "试衣间在商店后面。" }
          ]
        },
        {
          id: "size",
          word: "size",
          phonetic: "/saɪz/",
          translation: "尺码；尺寸",
          emoji: "📏",
          examples: [
            { en: "Do you have this dress in a larger size?", zh: "这条裙子有大一点的尺码吗？" }
          ]
        },
        {
          id: "sale",
          word: "sale / discount",
          phonetic: "/seɪl/ /ˈdɪskaʊnt/",
          translation: "促销；打折",
          emoji: "🏷️",
          examples: [
            { en: "I bought this jacket at a 50% discount during the sale.", zh: "我在促销时以五折买了这件夹克。" }
          ]
        },
        {
          id: "cash",
          word: "cash",
          phonetic: "/kæʃ/",
          translation: "现金",
          emoji: "💵",
          examples: [
            { en: "Sorry, we only accept cash — no credit cards.", zh: "抱歉，我们只收现金——不接受信用卡。" }
          ]
        },
        {
          id: "credit-card",
          word: "credit card",
          phonetic: "/ˈkredɪt kɑːrd/",
          translation: "信用卡",
          emoji: "💳",
          examples: [
            { en: "I'll pay by credit card, please.", zh: "我用信用卡付款。" }
          ]
        },
        {
          id: "refund",
          word: "refund",
          phonetic: "/ˈriːfʌnd/",
          translation: "退款",
          emoji: "💰",
          examples: [
            { en: "I'd like to return this item and get a refund.", zh: "我想退掉这件商品并退款。" }
          ]
        }
      ]
    },

    // ============================================================
    // 4. 🍽️ 餐厅与外出就餐 At the Restaurant (25 words)
    // ============================================================
    {
      id: "restaurant",
      name: "外出就餐",
      nameEn: "Eating Out",
      emoji: "🍽️",
      color: "#4ECDC4",
      words: [
        {
          id: "reservation-r",
          word: "reservation",
          phonetic: "/ˌrezərˈveɪʃn/",
          translation: "预订；预约",
          emoji: "📋",
          examples: [
            { en: "I'd like to make a reservation for two at 7 PM.", zh: "我想预订晚上7点两个人的位置。" }
          ]
        },
        {
          id: "menu-r",
          word: "menu",
          phonetic: "/ˈmenjuː/",
          translation: "菜单",
          emoji: "📜",
          examples: [
            { en: "Could I see the menu, please?", zh: "请给我看一下菜单好吗？" }
          ]
        },
        {
          id: "waiter-r",
          word: "waiter / waitress",
          phonetic: "/ˈweɪtər/ /ˈweɪtrəs/",
          translation: "服务员（男/女）",
          emoji: "💁",
          examples: [
            { en: "The waiter was very friendly and helpful.", zh: "那位服务员非常友好和热心。" }
          ]
        },
        {
          id: "order-r",
          word: "order",
          phonetic: "/ˈɔːrdər/",
          translation: "点餐；下单",
          emoji: "📝",
          examples: [
            { en: "Are you ready to order, sir?", zh: "先生，您准备好点餐了吗？" }
          ]
        },
        {
          id: "appetizer-r",
          word: "appetizer / starter",
          phonetic: "/ˈæpɪtaɪzər/ /ˈstɑːrtər/",
          translation: "开胃菜；前菜",
          emoji: "🥗",
          examples: [
            { en: "We ordered spring rolls as an appetizer.", zh: "我们点了春卷当开胃菜。" }
          ]
        },
        {
          id: "main-course-r",
          word: "main course",
          phonetic: "/meɪn kɔːrs/",
          translation: "主菜",
          emoji: "🍖",
          examples: [
            { en: "What would you like for your main course?", zh: "您主菜想点什么？" }
          ]
        },
        {
          id: "side-dish-r",
          word: "side dish",
          phonetic: "/saɪd dɪʃ/",
          translation: "配菜",
          emoji: "🥦",
          examples: [
            { en: "I'll have the grilled chicken with a side of vegetables.", zh: "我要烤鸡配一份蔬菜。" }
          ]
        },
        {
          id: "dessert-r",
          word: "dessert",
          phonetic: "/dɪˈzɜːrt/",
          translation: "甜点",
          emoji: "🍰",
          examples: [
            { en: "Save some room for dessert — they have great cheesecake!", zh: "留点肚子吃甜点——他们的芝士蛋糕很棒！" }
          ]
        },
        {
          id: "beverage-r",
          word: "beverage",
          phonetic: "/ˈbevərɪdʒ/",
          translation: "饮料",
          emoji: "🥤",
          examples: [
            { en: "What beverages do you have?", zh: "你们有什么饮料？" }
          ]
        },
        {
          id: "recommendation-r",
          word: "recommendation",
          phonetic: "/ˌrekəmenˈdeɪʃn/",
          translation: "推荐",
          emoji: "👍",
          examples: [
            { en: "What would you recommend from the menu?", zh: "你有什么推荐的菜品吗？" }
          ]
        },
        {
          id: "chef-special-r",
          word: "chef's special",
          phonetic: "/ʃefs ˈspeʃl/",
          translation: "主厨推荐",
          emoji: "👨‍🍳",
          examples: [
            { en: "The chef's special today is lobster with garlic butter.", zh: "今日主厨推荐是蒜蓉黄油龙虾。" }
          ]
        },
        {
          id: "well-done-r",
          word: "well-done",
          phonetic: "/ˌwel ˈdʌn/",
          translation: "全熟（牛排）",
          emoji: "🥩",
          examples: [
            { en: "I'd like my steak well-done, please.", zh: "我的牛排要全熟，谢谢。" }
          ]
        },
        {
          id: "bill-r",
          word: "bill / check",
          phonetic: "/bɪl/ /tʃek/",
          translation: "账单",
          emoji: "🧾",
          examples: [
            { en: "Could I have the bill, please?", zh: "请给我账单好吗？" }
          ]
        },
        {
          id: "tip-r",
          word: "tip",
          phonetic: "/tɪp/",
          translation: "小费",
          emoji: "💵",
          examples: [
            { en: "It's customary to leave a 10% tip in this restaurant.", zh: "在这家餐厅给10%的小费是惯例。" }
          ]
        },
        {
          id: "leftovers-r",
          word: "leftovers / doggy bag",
          phonetic: "/ˈleftəʊvərz/ /ˈdɒɡi bæɡ/",
          translation: "剩菜；打包",
          emoji: "📦",
          examples: [
            { en: "Could we get a doggy bag for the leftovers?", zh: "能帮我们把剩菜打包吗？" }
          ]
        },
        {
          id: "allergic-r",
          word: "allergic",
          phonetic: "/əˈlɜːrdʒɪk/",
          translation: "过敏的",
          emoji: "⚠️",
          examples: [
            { en: "I'm allergic to nuts — does this dish contain any?", zh: "我对坚果过敏——这道菜含有坚果吗？" }
          ]
        },
        {
          id: "knife-fork",
          word: "knife and fork",
          phonetic: "/naɪf ənd fɔːrk/",
          translation: "刀叉",
          emoji: "🍴",
          examples: [
            { en: "In Western dining, you hold the fork in your left hand and knife in your right.", zh: "在西餐中，左手拿叉右手拿刀。" }
          ]
        },
        {
          id: "chopsticks",
          word: "chopsticks",
          phonetic: "/ˈtʃɒpstɪks/",
          translation: "筷子",
          emoji: "🥢",
          examples: [
            { en: "Can you use chopsticks?", zh: "你会用筷子吗？" }
          ]
        },
        {
          id: "plate",
          word: "plate",
          phonetic: "/pleɪt/",
          translation: "盘子",
          emoji: "🍽️",
          examples: [
            { en: "The waiter set a clean plate in front of each guest.", zh: "服务员在每个客人面前放了一个干净的盘子。" }
          ]
        },
        {
          id: "cup",
          word: "cup / glass",
          phonetic: "/kʌp/ /ɡlɑːs/",
          translation: "杯子",
          emoji: "🥛",
          examples: [
            { en: "Could I have a glass of water, please?", zh: "请给我一杯水好吗？" }
          ]
        },
        {
          id: "napkin",
          word: "napkin",
          phonetic: "/ˈnæpkɪn/",
          translation: "餐巾",
          emoji: "🧻",
          examples: [
            { en: "He wiped his mouth with a napkin after eating.", zh: "他吃完后用餐巾擦了擦嘴。" }
          ]
        },
        {
          id: "buffet",
          word: "buffet",
          phonetic: "/bəˈfeɪ/",
          translation: "自助餐",
          emoji: "🍱",
          examples: [
            { en: "The hotel serves a buffet breakfast from 6 to 10 AM.", zh: "酒店早上6点到10点提供自助早餐。" }
          ]
        },
        {
          id: "takeaway",
          word: "takeaway / takeout",
          phonetic: "/ˈteɪkəweɪ/ /ˈteɪkaʊt/",
          translation: "外卖",
          emoji: "📦",
          examples: [
            { en: "I'm too tired to cook — let's order takeaway.", zh: "我太累了不想做饭——我们点外卖吧。" }
          ]
        },
        {
          id: "booking-walkin",
          word: "walk in",
          phonetic: "/wɔːk ɪn/",
          translation: "直接进店（无预订）",
          emoji: "🚶",
          examples: [
            { en: "We didn't have a reservation, so we just walked in.", zh: "我们没有预订，就直接进店了。" }
          ]
        },
        {
          id: "service-charge",
          word: "service charge",
          phonetic: "/ˈsɜːrvɪs tʃɑːrdʒ/",
          translation: "服务费",
          emoji: "💳",
          examples: [
            { en: "A 10% service charge is included in the bill.", zh: "账单已包含10%的服务费。" }
          ]
        }
      ]
    },

    // ============================================================
    // 5. 💼 办公室工作 In the Office (25 words)
    // ============================================================
    {
      id: "office",
      name: "办公室工作",
      nameEn: "Office & Work",
      emoji: "💼",
      color: "#845EC2",
      words: [
        {
          id: "desk-o",
          word: "desk",
          phonetic: "/desk/",
          translation: "办公桌",
          emoji: "🪑",
          examples: [
            { en: "My desk is always covered in paperwork.", zh: "我的办公桌上总是堆满了文件。" }
          ]
        },
        {
          id: "computer-o",
          word: "computer",
          phonetic: "/kəmˈpjuːtər/",
          translation: "电脑",
          emoji: "💻",
          examples: [
            { en: "I spend most of the day working on my computer.", zh: "我大部分时间都在电脑前工作。" }
          ]
        },
        {
          id: "keyboard-o",
          word: "keyboard",
          phonetic: "/ˈkiːbɔːrd/",
          translation: "键盘",
          emoji: "⌨️",
          examples: [
            { en: "I need a new keyboard — this one is broken.", zh: "我需要一个新键盘——这个坏了。" }
          ]
        },
        {
          id: "meeting-o",
          word: "meeting",
          phonetic: "/ˈmiːtɪŋ/",
          translation: "会议",
          emoji: "📊",
          examples: [
            { en: "We have a team meeting every Monday morning.", zh: "我们每周一早上开团队会议。" }
          ]
        },
        {
          id: "deadline-o",
          word: "deadline",
          phonetic: "/ˈdedlaɪn/",
          translation: "截止日期",
          emoji: "📅",
          examples: [
            { en: "The deadline for this project is next Friday.", zh: "这个项目的截止日期是下周五。" }
          ]
        },
        {
          id: "colleague-o",
          word: "colleague / coworker",
          phonetic: "/ˈkɒliːɡ/ /ˈkəʊwɜːrkər/",
          translation: "同事",
          emoji: "👥",
          examples: [
            { en: "I work closely with my colleagues on this project.", zh: "我和同事们在这个项目上密切合作。" }
          ]
        },
        {
          id: "manager-o",
          word: "manager / supervisor",
          phonetic: "/ˈmænɪdʒər/ /ˈsuːpərvaɪzər/",
          translation: "经理；主管",
          emoji: "👔",
          examples: [
            { en: "I need to discuss this with my manager first.", zh: "我需要先和经理讨论一下。" }
          ]
        },
        {
          id: "presentation-o",
          word: "presentation",
          phonetic: "/ˌpreznˈteɪʃn/",
          translation: "演示；汇报",
          emoji: "📺",
          examples: [
            { en: "I have to give a presentation at the conference.", zh: "我必须在会议上做一个演示。" }
          ]
        },
        {
          id: "report-o",
          word: "report",
          phonetic: "/rɪˈpɔːrt/",
          translation: "报告",
          emoji: "📄",
          examples: [
            { en: "I need to finish this report by the end of the day.", zh: "我需要在今天结束前完成这份报告。" }
          ]
        },
        {
          id: "email-o",
          word: "email",
          phonetic: "/ˈiːmeɪl/",
          translation: "电子邮件",
          emoji: "📧",
          examples: [
            { en: "I sent you an email with the details this morning.", zh: "我今天早上给你发了一封详细说明的邮件。" }
          ]
        },
        {
          id: "attachment-o",
          word: "attachment",
          phonetic: "/əˈtætʃmənt/",
          translation: "附件",
          emoji: "📎",
          examples: [
            { en: "Please find the document in the attachment.", zh: "文件请见附件。" }
          ]
        },
        {
          id: "brainstorm-o",
          word: "brainstorm",
          phonetic: "/ˈbreɪnstɔːrm/",
          translation: "头脑风暴",
          emoji: "💡",
          examples: [
            { en: "Let's brainstorm some ideas for the new campaign.", zh: "让我们为新的活动头脑风暴一下。" }
          ]
        },
        {
          id: "overtime-o",
          word: "overtime",
          phonetic: "/ˈəʊvərtaɪm/",
          translation: "加班",
          emoji: "🌙",
          examples: [
            { en: "I've been working overtime all week to meet the deadline.", zh: "为了赶上截止日期，我整周都在加班。" }
          ]
        },
        {
          id: "stationery-o",
          word: "stationery",
          phonetic: "/ˈsteɪʃənəri/",
          translation: "文具",
          emoji: "✏️",
          examples: [
            { en: "Could you order some stationery for the office?", zh: "你能为办公室订购一些文具吗？" }
          ]
        },
        {
          id: "printer-o",
          word: "printer",
          phonetic: "/ˈprɪntər/",
          translation: "打印机",
          emoji: "🖨️",
          examples: [
            { en: "The printer is out of paper again.", zh: "打印机又没纸了。" }
          ]
        },
        {
          id: "photocopy-o",
          word: "photocopy / photocopier",
          phonetic: "/ˈfəʊtəkɒpi/ /ˈfəʊtəkɒpiər/",
          translation: "复印；复印机",
          emoji: "📄",
          examples: [
            { en: "Could you make a photocopy of this contract?", zh: "你能复印这份合同吗？" }
          ]
        },
        {
          id: "inbox-o",
          word: "inbox",
          phonetic: "/ˈɪnbɒks/",
          translation: "收件箱",
          emoji: "📥",
          examples: [
            { en: "My inbox is overflowing with emails this morning.", zh: "今天早上我的收件箱里堆满了邮件。" }
          ]
        },
        {
          id: "agenda-o",
          word: "agenda",
          phonetic: "/əˈdʒendə/",
          translation: "议程",
          emoji: "📝",
          examples: [
            { en: "What's the first item on the agenda?", zh: "议程上的第一项是什么？" }
          ]
        },
        {
          id: "feedback-o",
          word: "feedback",
          phonetic: "/ˈfiːdbæk/",
          translation: "反馈；意见",
          emoji: "💬",
          examples: [
            { en: "I'd appreciate your feedback on my presentation.", zh: "我很感谢你对我的演示的反馈意见。" }
          ]
        },
        {
          id: "intern-o",
          word: "intern",
          phonetic: "/ˈɪntɜːrn/",
          translation: "实习生",
          emoji: "🧑‍💻",
          examples: [
            { en: "We have three interns joining our team this summer.", zh: "今年夏天有三个实习生加入我们团队。" }
          ]
        },
        {
          id: "salary-o",
          word: "salary",
          phonetic: "/ˈsæləri/",
          translation: "薪水",
          emoji: "💰",
          examples: [
            { en: "The job offers a competitive salary and benefits.", zh: "这份工作提供有竞争力的薪水和福利。" }
          ]
        },
        {
          id: "promotion-o",
          word: "promotion",
          phonetic: "/prəˈməʊʃn/",
          translation: "升职；晋升",
          emoji: "📈",
          examples: [
            { en: "She got a promotion after working there for two years.", zh: "她在那里工作两年后得到了晋升。" }
          ]
        },
        {
          id: "colleague-quit",
          word: "quit / resign",
          phonetic: "/kwɪt/ /rɪˈzaɪn/",
          translation: "辞职",
          emoji: "🚪",
          examples: [
            { en: "He decided to quit his job and start his own business.", zh: "他决定辞职创业。" }
          ]
        },
        {
          id: "commute-o",
          word: "commute",
          phonetic: "/kəˈmjuːt/",
          translation: "通勤",
          emoji: "🚇",
          examples: [
            { en: "My daily commute takes about 40 minutes by subway.", zh: "我每天坐地铁通勤大约需要40分钟。" }
          ]
        },
        {
          id: "meeting-zoom",
          word: "video call / Zoom",
          phonetic: "/ˈvɪdiəʊ kɔːl/",
          translation: "视频会议",
          emoji: "📹",
          examples: [
            { en: "We have a video call with the overseas team at 3 PM.", zh: "我们下午3点跟海外团队有个视频会议。" }
          ]
        }
      ]
    },

    // ============================================================
    // 6. ✈️ 旅行与交通 Travel & Transport (30 words)
    // ============================================================
    {
      id: "travel",
      name: "旅行交通",
      nameEn: "Travel & Transport",
      emoji: "✈️",
      color: "#45B7D1",
      words: [
        {
          id: "airport-t",
          word: "airport",
          phonetic: "/ˈeərpɔːrt/",
          translation: "机场",
          emoji: "✈️",
          examples: [
            { en: "We arrived at the airport two hours before the flight.", zh: "我们在起飞前两小时到达了机场。" }
          ]
        },
        {
          id: "departure-t",
          word: "departure",
          phonetic: "/dɪˈpɑːrtʃər/",
          translation: "出发；离境",
          emoji: "🛫",
          examples: [
            { en: "The departure time is 8:30 AM from Gate 12.", zh: "起飞时间是早上8点30分，在12号登机口。" }
          ]
        },
        {
          id: "arrival-t",
          word: "arrival",
          phonetic: "/əˈraɪvl/",
          translation: "到达；抵达",
          emoji: "🛬",
          examples: [
            { en: "Our arrival was delayed by two hours due to bad weather.", zh: "由于恶劣天气，我们的到达延误了两小时。" }
          ]
        },
        {
          id: "boarding-pass-t",
          word: "boarding pass",
          phonetic: "/ˈbɔːrdɪŋ pæs/",
          translation: "登机牌",
          emoji: "🎫",
          examples: [
            { en: "Please have your boarding pass ready before boarding.", zh: "登机前请准备好您的登机牌。" }
          ]
        },
        {
          id: "check-in-t",
          word: "check-in",
          phonetic: "/ˈtʃek ɪn/",
          translation: "值机；办理入住",
          emoji: "🏨",
          examples: [
            { en: "We checked in online to save time at the airport.", zh: "我们在网上值机以节省在机场的时间。" }
          ]
        },
        {
          id: "luggage-t",
          word: "luggage / baggage",
          phonetic: "/ˈlʌɡɪdʒ/ /ˈbæɡɪdʒ/",
          translation: "行李",
          emoji: "🧳",
          examples: [
            { en: "How many pieces of luggage are you checking in?", zh: "您要托运多少件行李？" }
          ]
        },
        {
          id: "carry-on-t",
          word: "carry-on",
          phonetic: "/ˈkæri ɒn/",
          translation: "随身行李",
          emoji: "🎒",
          examples: [
            { en: "My carry-on bag fits in the overhead compartment.", zh: "我的随身行李刚好能放进头顶行李架。" }
          ]
        },
        {
          id: "passport-t",
          word: "passport",
          phonetic: "/ˈpɑːspɔːrt/",
          translation: "护照",
          emoji: "🛂",
          examples: [
            { en: "Make sure your passport is valid for at least six more months.", zh: "确保你的护照有效期至少还有六个月。" }
          ]
        },
        {
          id: "customs-t",
          word: "customs",
          phonetic: "/ˈkʌstəmz/",
          translation: "海关",
          emoji: "🛃",
          examples: [
            { en: "Do you have anything to declare at customs?", zh: "你有什么要申报的吗？" }
          ]
        },
        {
          id: "gate-t",
          word: "gate",
          phonetic: "/ɡeɪt/",
          translation: "登机口",
          emoji: "🚪",
          examples: [
            { en: "Please proceed to Gate 23 for boarding.", zh: "请前往23号登机口登机。" }
          ]
        },
        {
          id: "delayed-t",
          word: "delayed",
          phonetic: "/dɪˈleɪd/",
          translation: "延误的",
          emoji: "⏳",
          examples: [
            { en: "The flight has been delayed due to technical issues.", zh: "由于技术问题，航班延误了。" }
          ]
        },
        {
          id: "cancelled-t",
          word: "cancelled",
          phonetic: "/ˈkænsld/",
          translation: "取消的",
          emoji: "❌",
          examples: [
            { en: "All flights were cancelled because of the snowstorm.", zh: "由于暴风雪，所有航班都取消了。" }
          ]
        },
        {
          id: "hotel-t",
          word: "hotel",
          phonetic: "/həʊˈtel/",
          translation: "酒店",
          emoji: "🏨",
          examples: [
            { en: "We stayed at a nice hotel near the city center.", zh: "我们住在市中心附近一家不错的酒店。" }
          ]
        },
        {
          id: "hostel-t",
          word: "hostel",
          phonetic: "/ˈhɒstl/",
          translation: "青年旅舍",
          emoji: "🛏️",
          examples: [
            { en: "Staying at a hostel is a great way to save money while traveling.", zh: "旅行时住青旅是省钱的好方法。" }
          ]
        },
        {
          id: "itinerary-t",
          word: "itinerary",
          phonetic: "/aɪˈtɪnərəri/",
          translation: "行程表",
          emoji: "📋",
          examples: [
            { en: "Let me check our itinerary for tomorrow.", zh: "让我查一下我们明天的行程。" }
          ]
        },
        {
          id: "sightseeing-t",
          word: "sightseeing",
          phonetic: "/ˈsaɪtsiːɪŋ/",
          translation: "观光；游览",
          emoji: "📸",
          examples: [
            { en: "We spent the whole day sightseeing around the city.", zh: "我们花了一整天在城里观光。" }
          ]
        },
        {
          id: "souvenir-t",
          word: "souvenir",
          phonetic: "/ˌsuːvəˈnɪər/",
          translation: "纪念品",
          emoji: "🎁",
          examples: [
            { en: "I bought some souvenirs for my family.", zh: "我给家人买了一些纪念品。" }
          ]
        },
        {
          id: "tour-guide-t",
          word: "tour guide",
          phonetic: "/tʊər ɡaɪd/",
          translation: "导游",
          emoji: "🚩",
          examples: [
            { en: "Our tour guide spoke excellent English.", zh: "我们的导游英语说得非常好。" }
          ]
        },
        {
          id: "currency-t",
          word: "currency exchange",
          phonetic: "/ˈkʌrənsi ɪksˈtʃeɪndʒ/",
          translation: "货币兑换",
          emoji: "💱",
          examples: [
            { en: "Where can I find a currency exchange counter?", zh: "我在哪里可以找到货币兑换柜台？" }
          ]
        },
        {
          id: "jet-lag-t",
          word: "jet lag",
          phonetic: "/ˈdʒet læɡ/",
          translation: "时差反应",
          emoji: "😵",
          examples: [
            { en: "I'm still suffering from jet lag after the long flight.", zh: "长途飞行后我还在倒时差。" }
          ]
        },
        // -- 交通工具 --
        {
          id: "subway",
          word: "subway / metro",
          phonetic: "/ˈsʌbweɪ/ /ˈmetrəʊ/",
          translation: "地铁",
          emoji: "🚇",
          examples: [
            { en: "The subway is the fastest way to get around the city.", zh: "地铁是在城市里出行的最快方式。" }
          ]
        },
        {
          id: "bus-t",
          word: "bus",
          phonetic: "/bʌs/",
          translation: "公交车",
          emoji: "🚌",
          examples: [
            { en: "I take the bus to work every day.", zh: "我每天坐公交车上班。" }
          ]
        },
        {
          id: "taxi-t",
          word: "taxi / cab",
          phonetic: "/ˈtæksi/ /kæb/",
          translation: "出租车",
          emoji: "🚕",
          examples: [
            { en: "Let's take a taxi — it's too far to walk.", zh: "我们打车吧——走路太远了。" }
          ]
        },
        {
          id: "train-t",
          word: "train",
          phonetic: "/treɪn/",
          translation: "火车",
          emoji: "🚄",
          examples: [
            { en: "The high-speed train takes only three hours to get there.", zh: "高铁只需三小时就能到那里。" }
          ]
        },
        {
          id: "ferry-t",
          word: "ferry",
          phonetic: "/ˈferi/",
          translation: "渡轮",
          emoji: "⛴️",
          examples: [
            { en: "We took a ferry from Hong Kong to Macau.", zh: "我们从香港坐渡轮去了澳门。" }
          ]
        },
        {
          id: "bicycle-t",
          word: "bicycle / bike",
          phonetic: "/ˈbaɪsɪkl/ /baɪk/",
          translation: "自行车",
          emoji: "🚲",
          examples: [
            { en: "I ride my bicycle to the park on weekends.", zh: "我周末骑自行车去公园。" }
          ]
        },
        {
          id: "rental-car",
          word: "rental car",
          phonetic: "/ˈrentl kɑːr/",
          translation: "租车",
          emoji: "🚗",
          examples: [
            { en: "We rented a car to drive around the island.", zh: "我们租了一辆车环岛自驾。" }
          ]
        },
        {
          id: "lost-found-t",
          word: "lost and found",
          phonetic: "/lɒst ənd faʊnd/",
          translation: "失物招领处",
          emoji: "🔍",
          examples: [
            { en: "I left my bag on the bus — I need to check lost and found.", zh: "我把包落在公交车上了——我需要去失物招领处问问。" }
          ]
        },
        {
          id: "map-t",
          word: "map",
          phonetic: "/mæp/",
          translation: "地图",
          emoji: "🗺️",
          examples: [
            { en: "I use a map app on my phone to navigate.", zh: "我用手机上的地图应用导航。" }
          ]
        },
        {
          id: "platform-t",
          word: "platform",
          phonetic: "/ˈplætfɔːrm/",
          translation: "站台；月台",
          emoji: "🚉",
          examples: [
            { en: "The train departs from Platform 3.", zh: "火车从3号站台发车。" }
          ]
        }
      ]
    },

    // ============================================================
    // 7. 🌤️ 天气与自然 Weather & Nature (25 words)
    // ============================================================
    {
      id: "weather",
      name: "天气自然",
      nameEn: "Weather & Nature",
      emoji: "🌤️",
      color: "#96CEB4",
      words: [
        {
          id: "sunny-w",
          word: "sunny",
          phonetic: "/ˈsʌni/",
          translation: "晴天的；阳光明媚的",
          emoji: "☀️",
          examples: [
            { en: "It's a beautiful sunny day — let's go to the beach!", zh: "今天阳光明媚——我们去海滩吧！" }
          ]
        },
        {
          id: "cloudy-w",
          word: "cloudy",
          phonetic: "/ˈklaʊdi/",
          translation: "多云的；阴天的",
          emoji: "☁️",
          examples: [
            { en: "The sky is cloudy, but it probably won't rain.", zh: "天空多云，但可能不会下雨。" }
          ]
        },
        {
          id: "rainy-w",
          word: "rainy",
          phonetic: "/ˈreɪni/",
          translation: "下雨的",
          emoji: "🌧️",
          examples: [
            { en: "Don't forget your umbrella — it's rainy today.", zh: "别忘了带伞——今天下雨。" }
          ]
        },
        {
          id: "drizzle-w",
          word: "drizzle",
          phonetic: "/ˈdrɪzl/",
          translation: "毛毛雨",
          emoji: "🌦️",
          examples: [
            { en: "It's just drizzling — we don't need an umbrella.", zh: "只是下点毛毛雨——我们不需要打伞。" }
          ]
        },
        {
          id: "storm-w",
          word: "storm",
          phonetic: "/stɔːrm/",
          translation: "暴风雨",
          emoji: "⛈️",
          examples: [
            { en: "The storm knocked down several trees in the neighborhood.", zh: "暴风雨吹倒了小区里的好几棵树。" }
          ]
        },
        {
          id: "thunder-w",
          word: "thunder",
          phonetic: "/ˈθʌndər/",
          translation: "雷；雷声",
          emoji: "🌩️",
          examples: [
            { en: "The thunder was so loud it woke me up.", zh: "雷声太大了，把我吵醒了。" }
          ]
        },
        {
          id: "lightning-w",
          word: "lightning",
          phonetic: "/ˈlaɪtnɪŋ/",
          translation: "闪电",
          emoji: "⚡",
          examples: [
            { en: "We saw lightning flashing across the sky.", zh: "我们看到闪电划过天空。" }
          ]
        },
        {
          id: "foggy-w",
          word: "foggy",
          phonetic: "/ˈfɒɡi/",
          translation: "有雾的",
          emoji: "🌫️",
          examples: [
            { en: "It's so foggy that I can barely see 10 meters ahead.", zh: "雾太大了，我几乎看不清10米以外。" }
          ]
        },
        {
          id: "humid-w",
          word: "humid",
          phonetic: "/ˈhjuːmɪd/",
          translation: "潮湿的",
          emoji: "💦",
          examples: [
            { en: "Summer in Hong Kong is hot and humid.", zh: "香港的夏天又热又潮湿。" }
          ]
        },
        {
          id: "freezing-w",
          word: "freezing",
          phonetic: "/ˈfriːzɪŋ/",
          translation: "极冷的；冰冻的",
          emoji: "🥶",
          examples: [
            { en: "It's freezing outside — wear a heavy coat!", zh: "外面冷死了——穿件厚外套！" }
          ]
        },
        {
          id: "typhoon-w",
          word: "typhoon",
          phonetic: "/taɪˈfuːn/",
          translation: "台风",
          emoji: "🌀",
          examples: [
            { en: "The typhoon brought heavy rain and strong winds.", zh: "台风带来了暴雨和强风。" }
          ]
        },
        {
          id: "heatwave-w",
          word: "heatwave",
          phonetic: "/ˈhiːtweɪv/",
          translation: "热浪",
          emoji: "🔥",
          examples: [
            { en: "A heatwave is expected to hit the city next week.", zh: "预计下周热浪将袭击这座城市。" }
          ]
        },
        {
          id: "breezy-w",
          word: "breezy",
          phonetic: "/ˈbriːzi/",
          translation: "微风阵阵的",
          emoji: "🌬️",
          examples: [
            { en: "It's a breezy afternoon, perfect for flying a kite.", zh: "这是一个微风习习的下午，非常适合放风筝。" }
          ]
        },
        {
          id: "forecast-w",
          word: "forecast",
          phonetic: "/ˈfɔːrkæst/",
          translation: "天气预报",
          emoji: "📺",
          examples: [
            { en: "The weather forecast says it will rain all weekend.", zh: "天气预报说整个周末都会下雨。" }
          ]
        },
        {
          id: "temperature-w",
          word: "temperature",
          phonetic: "/ˈtemprətʃər/",
          translation: "温度；气温",
          emoji: "🌡️",
          examples: [
            { en: "The temperature today is around 30 degrees Celsius.", zh: "今天的气温大约30摄氏度。" }
          ]
        },
        {
          id: "spring-w",
          word: "spring",
          phonetic: "/sprɪŋ/",
          translation: "春天",
          emoji: "🌸",
          examples: [
            { en: "Spring is my favorite season — the flowers are blooming.", zh: "春天是我最喜欢的季节——花都开了。" }
          ]
        },
        {
          id: "summer-w",
          word: "summer",
          phonetic: "/ˈsʌmər/",
          translation: "夏天",
          emoji: "🏖️",
          examples: [
            { en: "We go swimming a lot during summer.", zh: "夏天我们经常去游泳。" }
          ]
        },
        {
          id: "autumn-w",
          word: "autumn / fall",
          phonetic: "/ˈɔːtəm/ /fɔːl/",
          translation: "秋天",
          emoji: "🍂",
          examples: [
            { en: "The leaves turn red and gold in autumn.", zh: "秋天树叶变成了红色和金色。" }
          ]
        },
        {
          id: "winter-w",
          word: "winter",
          phonetic: "/ˈwɪntər/",
          translation: "冬天",
          emoji: "❄️",
          examples: [
            { en: "It snows a lot in winter in this region.", zh: "这个地区冬天经常下雪。" }
          ]
        },
        // -- 自然环境 --
        {
          id: "mountain",
          word: "mountain",
          phonetic: "/ˈmaʊntn/",
          translation: "山；山脉",
          emoji: "⛰️",
          examples: [
            { en: "We hiked up the mountain and enjoyed the amazing view.", zh: "我们徒步上山，欣赏了壮观的景色。" }
          ]
        },
        {
          id: "river",
          word: "river",
          phonetic: "/ˈrɪvər/",
          translation: "河流",
          emoji: "🏞️",
          examples: [
            { en: "The river flows through the center of the city.", zh: "这条河流经市中心。" }
          ]
        },
        {
          id: "ocean",
          word: "ocean / sea",
          phonetic: "/ˈəʊʃn/ /siː/",
          translation: "海洋；大海",
          emoji: "🌊",
          examples: [
            { en: "I love watching the sunset over the ocean.", zh: "我喜欢看日落在海面上。" }
          ]
        },
        {
          id: "forest",
          word: "forest",
          phonetic: "/ˈfɒrɪst/",
          translation: "森林",
          emoji: "🌲",
          examples: [
            { en: "We went for a walk in the forest and saw many birds.", zh: "我们去森林里散步，看到了很多鸟。" }
          ]
        },
        {
          id: "rainbow",
          word: "rainbow",
          phonetic: "/ˈreɪnbəʊ/",
          translation: "彩虹",
          emoji: "🌈",
          examples: [
            { en: "After the rain, a beautiful rainbow appeared in the sky.", zh: "雨后在天空中出现了一道美丽的彩虹。" }
          ]
        }
      ]
    },

    // ============================================================
    // 8. 🏥 健康与医疗 Health & Medical (25 words)
    // ============================================================
    {
      id: "health",
      name: "健康医疗",
      nameEn: "Health & Medical",
      emoji: "🏥",
      color: "#E17055",
      words: [
        // -- 身体 --
        {
          id: "head-h",
          word: "head",
          phonetic: "/hed/",
          translation: "头；头部",
          emoji: "😵",
          examples: [
            { en: "I have a pain in my head — I think it's a headache.", zh: "我头很痛——可能是头痛。" }
          ]
        },
        {
          id: "throat-h",
          word: "throat",
          phonetic: "/θrəʊt/",
          translation: "喉咙",
          emoji: "🫁",
          examples: [
            { en: "My throat hurts when I swallow.", zh: "我吞咽时喉咙痛。" }
          ]
        },
        {
          id: "stomach-h",
          word: "stomach",
          phonetic: "/ˈstʌmək/",
          translation: "胃；肚子",
          emoji: "🤰",
          examples: [
            { en: "I ate too much and now my stomach hurts.", zh: "我吃太多了，现在肚子疼。" }
          ]
        },
        {
          id: "back-h",
          word: "back",
          phonetic: "/bæk/",
          translation: "背；背部",
          emoji: "🧍",
          examples: [
            { en: "My back aches from sitting at the desk all day.", zh: "在办公桌前坐了一整天，我的背很酸。" }
          ]
        },
        {
          id: "shoulder-h",
          word: "shoulder",
          phonetic: "/ˈʃəʊldər/",
          translation: "肩膀",
          emoji: "💪",
          examples: [
            { en: "He injured his shoulder while playing tennis.", zh: "他打网球时伤了肩膀。" }
          ]
        },
        {
          id: "knee-h",
          word: "knee",
          phonetic: "/niː/",
          translation: "膝盖",
          emoji: "🦵",
          examples: [
            { en: "My knee has been hurting since I went jogging yesterday.", zh: "从昨天慢跑后我的膝盖就一直疼。" }
          ]
        },
        // -- 症状 --
        {
          id: "fever-h",
          word: "fever",
          phonetic: "/ˈfiːvər/",
          translation: "发烧",
          emoji: "🤒",
          examples: [
            { en: "She has a high fever — we should take her to the doctor.", zh: "她发高烧了——我们该带她去看医生。" }
          ]
        },
        {
          id: "cough-h",
          word: "cough",
          phonetic: "/kɒf/",
          translation: "咳嗽",
          emoji: "🤧",
          examples: [
            { en: "I've had a bad cough for three days now.", zh: "我已经咳嗽三天了。" }
          ]
        },
        {
          id: "headache-h",
          word: "headache",
          phonetic: "/ˈhedeɪk/",
          translation: "头痛",
          emoji: "😣",
          examples: [
            { en: "I have a terrible headache — I need to lie down.", zh: "我头痛得很厉害——我需要躺下。" }
          ]
        },
        {
          id: "cold-h",
          word: "cold (have a cold)",
          phonetic: "/kəʊld/",
          translation: "感冒",
          emoji: "🤧",
          examples: [
            { en: "I think I'm catching a cold — my nose is running.", zh: "我觉得我要感冒了——开始流鼻涕了。" }
          ]
        },
        {
          id: "sore-throat",
          word: "sore throat",
          phonetic: "/sɔːr θrəʊt/",
          translation: "喉咙痛",
          emoji: "🥵",
          examples: [
            { en: "Drink some warm tea with honey for your sore throat.", zh: "喝点加蜂蜜的热茶来缓解喉咙痛。" }
          ]
        },
        {
          id: "stomachache-h",
          word: "stomachache",
          phonetic: "/ˈstʌməkeɪk/",
          translation: "肚子痛",
          emoji: "🤢",
          examples: [
            { en: "I got a stomachache after eating that street food.", zh: "吃了那个路边摊后我肚子疼。" }
          ]
        },
        // -- 看医生 --
        {
          id: "doctor-h",
          word: "doctor / physician",
          phonetic: "/ˈdɒktər/ /fɪˈzɪʃn/",
          translation: "医生",
          emoji: "🧑‍⚕️",
          examples: [
            { en: "You should see a doctor if the pain doesn't go away.", zh: "如果疼痛还不消失的话，你应该去看医生。" }
          ]
        },
        {
          id: "nurse-h",
          word: "nurse",
          phonetic: "/nɜːrs/",
          translation: "护士",
          emoji: "👩‍⚕️",
          examples: [
            { en: "The nurse took my temperature and blood pressure.", zh: "护士量了我的体温和血压。" }
          ]
        },
        {
          id: "prescription-h",
          word: "prescription",
          phonetic: "/prɪˈskrɪpʃn/",
          translation: "处方；药方",
          emoji: "📋",
          examples: [
            { en: "The doctor gave me a prescription for some antibiotics.", zh: "医生给我开了一些抗生素的处方。" }
          ]
        },
        {
          id: "medicine-h",
          word: "medicine",
          phonetic: "/ˈmedɪsn/",
          translation: "药；药物",
          emoji: "💊",
          examples: [
            { en: "Take this medicine three times a day after meals.", zh: "每日三次，饭后服用。" }
          ]
        },
        {
          id: "pill-h",
          word: "pill / tablet",
          phonetic: "/pɪl/ /ˈtæblət/",
          translation: "药片",
          emoji: "💊",
          examples: [
            { en: "The doctor told me to take one pill every morning.", zh: "医生告诉我每天早上吃一片药。" }
          ]
        },
        {
          id: "thermometer-h",
          word: "thermometer",
          phonetic: "/θərˈmɒmɪtər/",
          translation: "体温计",
          emoji: "🌡️",
          examples: [
            { en: "The thermometer shows 38.5 degrees — you have a fever.", zh: "体温计显示38.5度——你发烧了。" }
          ]
        },
        {
          id: "bandage-h",
          word: "bandage",
          phonetic: "/ˈbændɪdʒ/",
          translation: "绷带",
          emoji: "🩹",
          examples: [
            { en: "The nurse put a bandage on my wound.", zh: "护士在我的伤口上缠了绷带。" }
          ]
        },
        {
          id: "appointment-h",
          word: "appointment",
          phonetic: "/əˈpɔɪntmənt/",
          translation: "预约（看诊）",
          emoji: "📅",
          examples: [
            { en: "I made an appointment with the dentist for next Monday.", zh: "我预约了下周一去看牙医。" }
          ]
        },
        {
          id: "surgery-h",
          word: "surgery",
          phonetic: "/ˈsɜːrdʒəri/",
          translation: "手术",
          emoji: "🏥",
          examples: [
            { en: "He needs surgery on his injured knee.", zh: "他受伤的膝盖需要动手术。" }
          ]
        },
        {
          id: "checkup-h",
          word: "checkup",
          phonetic: "/ˈtʃekʌp/",
          translation: "体检",
          emoji: "🩺",
          examples: [
            { en: "I go for a health checkup once a year.", zh: "我每年做一次健康体检。" }
          ]
        },
        {
          id: "vaccine-h",
          word: "vaccine / vaccination",
          phonetic: "/ˈvæksiːn/ /ˌvæksɪˈneɪʃn/",
          translation: "疫苗；接种",
          emoji: "💉",
          examples: [
            { en: "Have you had your flu vaccine this year?", zh: "你今年接种了流感疫苗吗？" }
          ]
        },
        {
          id: "ambulance-h",
          word: "ambulance",
          phonetic: "/ˈæmbjələns/",
          translation: "救护车",
          emoji: "🚑",
          examples: [
            { en: "Someone call an ambulance — there's been an accident!", zh: "快叫救护车——出事故了！" }
          ]
        },
        {
          id: "pharmacy-h",
          word: "pharmacy / drugstore",
          phonetic: "/ˈfɑːrməsi/ /ˈdrʌɡstɔːr/",
          translation: "药房",
          emoji: "💊",
          examples: [
            { en: "You can buy this medicine at any pharmacy.", zh: "你可以在任何药房买到这种药。" }
          ]
        }
      ]
    },

    // ============================================================
    // 9. 🏃 运动与休闲 Sports & Hobbies (25 words)
    // ============================================================
    {
      id: "sports",
      name: "运动休闲",
      nameEn: "Sports & Hobbies",
      emoji: "🏃",
      color: "#00B894",
      words: [
        // -- 运动 --
        {
          id: "football-s",
          word: "football / soccer",
          phonetic: "/ˈfʊtbɔːl/ /ˈsɒkər/",
          translation: "足球",
          emoji: "⚽",
          examples: [
            { en: "He plays football with his friends every Saturday.", zh: "他每周六跟朋友们踢足球。" }
          ]
        },
        {
          id: "basketball-s",
          word: "basketball",
          phonetic: "/ˈbɑːskɪtbɔːl/",
          translation: "篮球",
          emoji: "🏀",
          examples: [
            { en: "The basketball court is behind the school building.", zh: "篮球场在学校大楼后面。" }
          ]
        },
        {
          id: "swimming-s",
          word: "swimming",
          phonetic: "/ˈswɪmɪŋ/",
          translation: "游泳",
          emoji: "🏊",
          examples: [
            { en: "Swimming is a great full-body workout.", zh: "游泳是一种很好的全身运动。" }
          ]
        },
        {
          id: "running-s",
          word: "running / jogging",
          phonetic: "/ˈrʌnɪŋ/ /ˈdʒɒɡɪŋ/",
          translation: "跑步；慢跑",
          emoji: "🏃",
          examples: [
            { en: "I go jogging in the park every morning before work.", zh: "我每天早上上班前在公园慢跑。" }
          ]
        },
        {
          id: "cycling-s",
          word: "cycling",
          phonetic: "/ˈsaɪklɪŋ/",
          translation: "骑自行车",
          emoji: "🚴",
          examples: [
            { en: "Cycling is a great way to explore the countryside.", zh: "骑自行车是探索乡村的好方式。" }
          ]
        },
        {
          id: "tennis-s",
          word: "tennis",
          phonetic: "/ˈtenɪs/",
          translation: "网球",
          emoji: "🎾",
          examples: [
            { en: "We play tennis at the sports center every Sunday.", zh: "我们每周日去体育中心打网球。" }
          ]
        },
        {
          id: "yoga-s",
          word: "yoga",
          phonetic: "/ˈjəʊɡə/",
          translation: "瑜伽",
          emoji: "🧘",
          examples: [
            { en: "I do yoga for 20 minutes every morning to stretch.", zh: "我每天早上做20分钟瑜伽来伸展身体。" }
          ]
        },
        {
          id: "gym-s",
          word: "gym",
          phonetic: "/dʒɪm/",
          translation: "健身房",
          emoji: "🏋️",
          examples: [
            { en: "I go to the gym three times a week to stay fit.", zh: "我每周去健身房三次来保持健康。" }
          ]
        },
        {
          id: "hiking-s",
          word: "hiking",
          phonetic: "/ˈhaɪkɪŋ/",
          translation: "徒步；远足",
          emoji: "🥾",
          examples: [
            { en: "We went hiking in the mountains over the weekend.", zh: "我们周末去山里徒步了。" }
          ]
        },
        {
          id: "badminton-s",
          word: "badminton",
          phonetic: "/ˈbædmɪntən/",
          translation: "羽毛球",
          emoji: "🏸",
          examples: [
            { en: "Badminton is very popular in Asia.", zh: "羽毛球在亚洲非常流行。" }
          ]
        },
        // -- 休闲爱好 --
        {
          id: "reading-hobby",
          word: "reading",
          phonetic: "/ˈriːdɪŋ/",
          translation: "阅读",
          emoji: "📖",
          examples: [
            { en: "I enjoy reading novels in my free time.", zh: "我闲暇时喜欢看小说。" }
          ]
        },
        {
          id: "photography-hobby",
          word: "photography",
          phonetic: "/fəˈtɒɡrəfi/",
          translation: "摄影",
          emoji: "📸",
          examples: [
            { en: "Photography is my hobby — I love capturing beautiful moments.", zh: "摄影是我的爱好——我喜欢捕捉美丽的瞬间。" }
          ]
        },
        {
          id: "gardening-hobby",
          word: "gardening",
          phonetic: "/ˈɡɑːrdnɪŋ/",
          translation: "园艺",
          emoji: "🌻",
          examples: [
            { en: "My grandmother spends a lot of time gardening.", zh: "我祖母花很多时间做园艺。" }
          ]
        },
        {
          id: "cooking-hobby",
          word: "cooking",
          phonetic: "/ˈkʊkɪŋ/",
          translation: "烹饪",
          emoji: "👨‍🍳",
          examples: [
            { en: "I'm learning cooking from online videos.", zh: "我正在通过网上视频学习烹饪。" }
          ]
        },
        {
          id: "gaming-hobby",
          word: "gaming",
          phonetic: "/ˈɡeɪmɪŋ/",
          translation: "玩游戏",
          emoji: "🎮",
          examples: [
            { en: "He spends his weekends gaming with friends online.", zh: "他周末和朋友们在线玩游戏。" }
          ]
        },
        {
          id: "music-hobby",
          word: "music",
          phonetic: "/ˈmjuːzɪk/",
          translation: "音乐",
          emoji: "🎵",
          examples: [
            { en: "Listening to music helps me relax after a long day.", zh: "听音乐帮助我在漫长的一天后放松。" }
          ]
        },
        {
          id: "instrument",
          word: "musical instrument",
          phonetic: "/ˈmjuːzɪkl ˈɪnstrəmənt/",
          translation: "乐器",
          emoji: "🎹",
          examples: [
            { en: "She plays three musical instruments — piano, guitar, and violin.", zh: "她会弹奏三种乐器——钢琴、吉他和小提琴。" }
          ]
        },
        {
          id: "painting-hobby",
          word: "painting / drawing",
          phonetic: "/ˈpeɪntɪŋ/ /ˈdrɔːɪŋ/",
          translation: "绘画",
          emoji: "🎨",
          examples: [
            { en: "She took up painting as a way to express her creativity.", zh: "她开始画画作为一种表达创意的方式。" }
          ]
        },
        // -- 相关词汇 --
        {
          id: "team-s",
          word: "team",
          phonetic: "/tiːm/",
          translation: "队伍；团队",
          emoji: "👥",
          examples: [
            { en: "Our team won the championship this year!", zh: "我们队今年赢得了冠军！" }
          ]
        },
        {
          id: "coach-s",
          word: "coach",
          phonetic: "/kəʊtʃ/",
          translation: "教练",
          emoji: "🧑‍🏫",
          examples: [
            { en: "The coach taught us some new techniques.", zh: "教练教了我们一些新技巧。" }
          ]
        },
        {
          id: "competition-s",
          word: "competition / match",
          phonetic: "/ˌkɒmpəˈtɪʃn/ /mætʃ/",
          translation: "比赛",
          emoji: "🏆",
          examples: [
            { en: "There's a basketball competition between the two schools.", zh: "两所学校之间有一场篮球比赛。" }
          ]
        },
        {
          id: "winner-s",
          word: "winner / champion",
          phonetic: "/ˈwɪnər/ /ˈtʃæmpiən/",
          translation: "获胜者；冠军",
          emoji: "🥇",
          examples: [
            { en: "She was the winner of the 100-meter race.", zh: "她是100米赛跑的获胜者。" }
          ]
        },
        {
          id: "loser-s",
          word: "loser",
          phonetic: "/ˈluːzər/",
          translation: "失败者",
          emoji: "😞",
          examples: [
            { en: "He's a good loser — he always congratulates the winner.", zh: "他是个输得起的人——他总会祝贺获胜者。" }
          ]
        },
        {
          id: "exercise-s",
          word: "exercise / workout",
          phonetic: "/ˈeksərsaɪz/ /ˈwɜːrkaʊt/",
          translation: "锻炼；运动",
          emoji: "💪",
          examples: [
            { en: "Regular exercise is important for staying healthy.", zh: "规律锻炼对保持健康很重要。" }
          ]
        },
        {
          id: "stretch-s",
          word: "stretch",
          phonetic: "/stretʃ/",
          translation: "拉伸",
          emoji: "🤸",
          examples: [
            { en: "Remember to stretch before and after exercise.", zh: "运动前后记得拉伸。" }
          ]
        }
      ]
    },

    // ============================================================
    // 10. 📚 学校与教育 School & Education (25 words)
    // ============================================================
    {
      id: "school",
      name: "学习教育",
      nameEn: "School & Education",
      emoji: "📚",
      color: "#6C5CE7",
      words: [
        // -- 学校 --
        {
          id: "classroom-sc",
          word: "classroom",
          phonetic: "/ˈklɑːsruːm/",
          translation: "教室",
          emoji: "🏫",
          examples: [
            { en: "There are 30 desks in the classroom.", zh: "教室里有30张书桌。" }
          ]
        },
        {
          id: "teacher-sc",
          word: "teacher",
          phonetic: "/ˈtiːtʃər/",
          translation: "老师",
          emoji: "👩‍🏫",
          examples: [
            { en: "Our English teacher is very patient and explains everything clearly.", zh: "我们的英语老师非常有耐心，讲解得很清楚。" }
          ]
        },
        {
          id: "student-sc",
          word: "student",
          phonetic: "/ˈstjuːdnt/",
          translation: "学生",
          emoji: "🧑‍🎓",
          examples: [
            { en: "She is a hardworking student who always does her homework.", zh: "她是个勤奋的学生，总是完成作业。" }
          ]
        },
        {
          id: "classmate-sc",
          word: "classmate",
          phonetic: "/ˈklɑːsmeɪt/",
          translation: "同学",
          emoji: "👥",
          examples: [
            { en: "I met my old classmates at the reunion.", zh: "我在同学聚会上遇到了老同学。" }
          ]
        },
        {
          id: "homework-sc",
          word: "homework / assignment",
          phonetic: "/ˈhəʊmwɜːrk/ /əˈsaɪnmənt/",
          translation: "作业",
          emoji: "📝",
          examples: [
            { en: "I have a lot of homework to do this weekend.", zh: "这周末我有很多作业要做。" }
          ]
        },
        {
          id: "exam-sc",
          word: "exam / test",
          phonetic: "/ɪɡˈzæm/ /test/",
          translation: "考试",
          emoji: "📄",
          examples: [
            { en: "The final exam is next week — I need to study hard.", zh: "期末考试在下周——我需要努力学习。" }
          ]
        },
        {
          id: "grade-sc",
          word: "grade / score",
          phonetic: "/ɡreɪd/ /skɔːr/",
          translation: "成绩；分数",
          emoji: "⭐",
          examples: [
            { en: "She got good grades in all her subjects this semester.", zh: "她这学期所有科目都取得了好成绩。" }
          ]
        },
        {
          id: "diploma-sc",
          word: "diploma / degree",
          phonetic: "/dɪˈpləʊmə/ /dɪˈɡriː/",
          translation: "文凭；学位",
          emoji: "🎓",
          examples: [
            { en: "He received his university degree in computer science.", zh: "他获得了计算机科学的大学学位。" }
          ]
        },
        // -- 科目 --
        {
          id: "math-sc",
          word: "math / mathematics",
          phonetic: "/mæθ/ /ˌmæθəˈmætɪks/",
          translation: "数学",
          emoji: "🔢",
          examples: [
            { en: "Math has always been my favorite subject.", zh: "数学一直是我最喜欢的科目。" }
          ]
        },
        {
          id: "english-sc",
          word: "English",
          phonetic: "/ˈɪŋɡlɪʃ/",
          translation: "英语",
          emoji: "🔤",
          examples: [
            { en: "I practice my English by watching movies and reading books.", zh: "我通过看电影和看书来练习英语。" }
          ]
        },
        {
          id: "science-sc",
          word: "science",
          phonetic: "/ˈsaɪəns/",
          translation: "科学",
          emoji: "🔬",
          examples: [
            { en: "We did an interesting experiment in science class today.", zh: "我们今天在科学课上做了一个有趣的实验。" }
          ]
        },
        {
          id: "history-sc",
          word: "history",
          phonetic: "/ˈhɪstri/",
          translation: "历史",
          emoji: "📜",
          examples: [
            { en: "I find learning about world history fascinating.", zh: "我觉得学习世界历史很有趣。" }
          ]
        },
        {
          id: "geography-sc",
          word: "geography",
          phonetic: "/dʒiˈɒɡrəfi/",
          translation: "地理",
          emoji: "🌍",
          examples: [
            { en: "In geography class, we learned about different countries.", zh: "在地理课上，我们学习了不同的国家。" }
          ]
        },
        {
          id: "art-sc",
          word: "art",
          phonetic: "/ɑːrt/",
          translation: "美术；艺术",
          emoji: "🎨",
          examples: [
            { en: "She is very talented at art — her paintings are beautiful.", zh: "她很有艺术天赋——她的画很漂亮。" }
          ]
        },
        // -- 学习动作 --
        {
          id: "study-sc",
          word: "study",
          phonetic: "/ˈstʌdi/",
          translation: "学习；研究",
          emoji: "📖",
          examples: [
            { en: "I need to study for the exam this weekend.", zh: "我这周末需要为考试而学习。" }
          ]
        },
        {
          id: "memorize-sc",
          word: "memorize",
          phonetic: "/ˈmeməraɪz/",
          translation: "记住；背诵",
          emoji: "🧠",
          examples: [
            { en: "I need to memorize these vocabulary words by Friday.", zh: "我需要在周五前记住这些词汇。" }
          ]
        },
        {
          id: "understand-sc",
          word: "understand",
          phonetic: "/ˌʌndərˈstænd/",
          translation: "理解；明白",
          emoji: "💡",
          examples: [
            { en: "Do you understand the grammar rule I just explained?", zh: "你理解我刚才讲解的语法规则了吗？" }
          ]
        },
        {
          id: "review-sc",
          word: "review / revise",
          phonetic: "/rɪˈvjuː/ /rɪˈvaɪz/",
          translation: "复习",
          emoji: "🔄",
          examples: [
            { en: "Let's review what we learned in today's lesson.", zh: "我们来复习一下今天课堂上所学的内容。" }
          ]
        },
        {
          id: "concentrate-sc",
          word: "concentrate / focus",
          phonetic: "/ˈkɒnsntreɪt/ /ˈfəʊkəs/",
          translation: "集中注意力",
          emoji: "🎯",
          examples: [
            { en: "I can't concentrate when there's too much noise.", zh: "太吵的时候我无法集中注意力。" }
          ]
        },
        // -- 学校设施 --
        {
          id: "library-sc",
          word: "library",
          phonetic: "/ˈlaɪbrəri/",
          translation: "图书馆",
          emoji: "📚",
          examples: [
            { en: "I spent the afternoon studying at the library.", zh: "我下午在图书馆学习。" }
          ]
        },
        {
          id: "playground-sc",
          word: "playground",
          phonetic: "/ˈpleɪɡraʊnd/",
          translation: "操场",
          emoji: "🏃",
          examples: [
            { en: "The children are playing on the playground.", zh: "孩子们在操场上玩耍。" }
          ]
        },
        {
          id: "campus-sc",
          word: "campus",
          phonetic: "/ˈkæmpəs/",
          translation: "校园",
          emoji: "🏛️",
          examples: [
            { en: "The university campus is very beautiful in autumn.", zh: "秋天的大学校园非常美丽。" }
          ]
        },
        {
          id: "dormitory-sc",
          word: "dormitory / dorm",
          phonetic: "/ˈdɔːrmətri/ /dɔːrm/",
          translation: "宿舍",
          emoji: "🛏️",
          examples: [
            { en: "I lived in a dormitory during my first year of university.", zh: "大学第一年我住在宿舍。" }
          ]
        },
        {
          id: "scholarship-sc",
          word: "scholarship",
          phonetic: "/ˈskɒlərʃɪp/",
          translation: "奖学金",
          emoji: "🏆",
          examples: [
            { en: "She won a scholarship to study abroad.", zh: "她获得了出国留学的奖学金。" }
          ]
        },
        {
          id: "graduation-sc",
          word: "graduation",
          phonetic: "/ˌɡrædʒuˈeɪʃn/",
          translation: "毕业",
          emoji: "🎓",
          examples: [
            { en: "Graduation day was one of the happiest days of my life.", zh: "毕业那天是我人生中最开心的日子之一。" }
          ]
        }
      ]
    }
  ]
};
