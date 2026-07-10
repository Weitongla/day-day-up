/**
 * English Visual Vocabulary Data
 * DK-style categorized vocabulary with bilingual support
 *
 * Based on Word By Word Picture Dictionary + Longman Communication 3000
 * 17 scenarios, 550+ words
 *
 * How to add words:
 *   Copy a word object, fill in id/word/phonetic/translation/emoji/examples
 *   id must be unique across all categories
 */

const VOCAB_DATA = {
  categories:
[
  {
    "id": "at-home",
    "name": "居家生活",
    "nameEn": "At Home",
    "emoji": "🏡",
    "color": "#FF6B6B",
    "words": [
      {
        "id": "house",
        "word": "house",
        "phonetic": "/haʊs/",
        "translation": "房子；独栋房屋",
        "emoji": "🏠",
        "examples": [
          {
            "en": "They live in a three-bedroom house with a garden.",
            "zh": "他们住在一栋带花园的三居室房子里。"
          }
        ]
      },
      {
        "id": "apartment",
        "word": "apartment / flat",
        "phonetic": "/əˈpɑːrtmənt/ /flæt/",
        "translation": "公寓",
        "emoji": "🏢",
        "examples": [
          {
            "en": "Our apartment is on the 15th floor.",
            "zh": "我们的公寓在15楼。"
          }
        ]
      },
      {
        "id": "living-room",
        "word": "living room",
        "phonetic": "/ˈlɪvɪŋ ruːm/",
        "translation": "客厅",
        "emoji": "🛋️",
        "examples": [
          {
            "en": "We watch TV in the living room every evening.",
            "zh": "我们每天晚上在客厅看电视。"
          }
        ]
      },
      {
        "id": "bedroom",
        "word": "bedroom",
        "phonetic": "/ˈbedruːm/",
        "translation": "卧室",
        "emoji": "🛏️",
        "examples": [
          {
            "en": "My bedroom is small but cozy.",
            "zh": "我的卧室虽小但很温馨。"
          }
        ]
      },
      {
        "id": "dining-room",
        "word": "dining room",
        "phonetic": "/ˈdaɪnɪŋ ruːm/",
        "translation": "餐厅",
        "emoji": "🍽️",
        "examples": [
          {
            "en": "We have a round table in the dining room.",
            "zh": "我们餐厅里有一张圆桌。"
          }
        ]
      },
      {
        "id": "study-room",
        "word": "study",
        "phonetic": "/ˈstʌdi/",
        "translation": "书房",
        "emoji": "📚",
        "examples": [
          {
            "en": "He spends most of his time in the study.",
            "zh": "他大部分时间都在书房里。"
          }
        ]
      },
      {
        "id": "hallway",
        "word": "hallway / corridor",
        "phonetic": "/ˈhɔːlweɪ/ /ˈkɒrɪdɔːr/",
        "translation": "走廊；玄关",
        "emoji": "🚪",
        "examples": [
          {
            "en": "Leave your shoes in the hallway.",
            "zh": "请把鞋子放在玄关。"
          }
        ]
      },
      {
        "id": "balcony",
        "word": "balcony",
        "phonetic": "/ˈbælkəni/",
        "translation": "阳台",
        "emoji": "🌿",
        "examples": [
          {
            "en": "I like to have coffee on the balcony.",
            "zh": "我喜欢在阳台上喝咖啡。"
          }
        ]
      },
      {
        "id": "garage",
        "word": "garage",
        "phonetic": "/ˈɡærɑːʒ/",
        "translation": "车库",
        "emoji": "🚗",
        "examples": [
          {
            "en": "We keep the car in the garage at night.",
            "zh": "我们晚上把车停在车库里。"
          }
        ]
      },
      {
        "id": "sofa",
        "word": "sofa / couch",
        "phonetic": "/ˈsəʊfə/ /kaʊtʃ/",
        "translation": "沙发",
        "emoji": "🛋️",
        "examples": [
          {
            "en": "I fell asleep on the sofa watching a movie.",
            "zh": "我看电影时在沙发上睡着了。"
          }
        ]
      },
      {
        "id": "coffee-table",
        "word": "coffee table",
        "phonetic": "/ˈkɒfi ˌteɪbl/",
        "translation": "茶几",
        "emoji": "🪑",
        "examples": [
          {
            "en": "I put the magazine on the coffee table.",
            "zh": "我把杂志放在茶几上。"
          }
        ]
      },
      {
        "id": "bookshelf",
        "word": "bookshelf",
        "phonetic": "/ˈbʊkʃelf/",
        "translation": "书架",
        "emoji": "📚",
        "examples": [
          {
            "en": "The bookshelf is filled with novels.",
            "zh": "书架上摆满了小说。"
          }
        ]
      },
      {
        "id": "tv",
        "word": "television (TV)",
        "phonetic": "/ˈtelɪvɪʒn/",
        "translation": "电视机",
        "emoji": "📺",
        "examples": [
          {
            "en": "We bought a new 65-inch television.",
            "zh": "我们买了一台新电视。"
          }
        ]
      },
      {
        "id": "curtain",
        "word": "curtain",
        "phonetic": "/ˈkɜːrtn/",
        "translation": "窗帘",
        "emoji": "🪟",
        "examples": [
          {
            "en": "Could you draw the curtains?",
            "zh": "你能拉上窗帘吗？"
          }
        ]
      },
      {
        "id": "lamp",
        "word": "lamp",
        "phonetic": "/læmp/",
        "translation": "灯；台灯",
        "emoji": "💡",
        "examples": [
          {
            "en": "I turned on the bedside lamp to read.",
            "zh": "我打开了床头灯看书。"
          }
        ]
      },
      {
        "id": "bed",
        "word": "bed",
        "phonetic": "/bed/",
        "translation": "床",
        "emoji": "🛏️",
        "examples": [
          {
            "en": "I need to buy a new mattress for my bed.",
            "zh": "我需要给床换一张新床垫。"
          }
        ]
      },
      {
        "id": "wardrobe",
        "word": "wardrobe / closet",
        "phonetic": "/ˈwɔːrdrəʊb/ /ˈklɒzɪt/",
        "translation": "衣柜",
        "emoji": "🚪",
        "examples": [
          {
            "en": "My wardrobe is full of clothes.",
            "zh": "我的衣柜塞满了衣服。"
          }
        ]
      },
      {
        "id": "pillow",
        "word": "pillow",
        "phonetic": "/ˈpɪləʊ/",
        "translation": "枕头",
        "emoji": "🛏️",
        "examples": [
          {
            "en": "I prefer a firm pillow for neck support.",
            "zh": "我喜欢硬一点的枕头。"
          }
        ]
      },
      {
        "id": "shower",
        "word": "shower",
        "phonetic": "/ˈʃaʊər/",
        "translation": "淋浴间",
        "emoji": "🚿",
        "examples": [
          {
            "en": "The water pressure in the shower is great!",
            "zh": "淋浴水压太好了！"
          }
        ]
      },
      {
        "id": "bathtub",
        "word": "bathtub",
        "phonetic": "/ˈbæθtʌb/",
        "translation": "浴缸",
        "emoji": "🛁",
        "examples": [
          {
            "en": "I love to soak in the bathtub after work.",
            "zh": "我喜欢下班后泡澡。"
          }
        ]
      },
      {
        "id": "sink",
        "word": "sink",
        "phonetic": "/sɪŋk/",
        "translation": "洗手盆；水槽",
        "emoji": "🚰",
        "examples": [
          {
            "en": "Don't leave the tap running.",
            "zh": "用完别忘了关水龙头。"
          }
        ]
      },
      {
        "id": "toilet",
        "word": "toilet",
        "phonetic": "/ˈtɔɪlət/",
        "translation": "马桶；厕所",
        "emoji": "🚽",
        "examples": [
          {
            "en": "The toilet is at the end of the hallway.",
            "zh": "厕所在走廊尽头。"
          }
        ]
      },
      {
        "id": "towel",
        "word": "towel",
        "phonetic": "/ˈtaʊəl/",
        "translation": "毛巾",
        "emoji": "🧣",
        "examples": [
          {
            "en": "Please hang your wet towel on the rack.",
            "zh": "请把湿毛巾挂起来。"
          }
        ]
      },
      {
        "id": "hammer",
        "word": "hammer",
        "phonetic": "/ˈhæmər/",
        "translation": "锤子",
        "emoji": "🔨",
        "examples": [
          {
            "en": "Use a hammer to drive the nail into the wall.",
            "zh": "用锤子把钉子钉进墙里。"
          }
        ]
      },
      {
        "id": "screwdriver",
        "word": "screwdriver",
        "phonetic": "/ˈskruːdraɪvər/",
        "translation": "螺丝刀",
        "emoji": "🪛",
        "examples": [
          {
            "en": "I need a screwdriver to fix this handle.",
            "zh": "我需要螺丝刀来修把手。"
          }
        ]
      },
      {
        "id": "ladder",
        "word": "ladder",
        "phonetic": "/ˈlædər/",
        "translation": "梯子",
        "emoji": "🪜",
        "examples": [
          {
            "en": "He used a ladder to change the light bulb.",
            "zh": "他用梯子换灯泡。"
          }
        ]
      },
      {
        "id": "garden",
        "word": "garden",
        "phonetic": "/ˈɡɑːrdn/",
        "translation": "花园",
        "emoji": "🌻",
        "examples": [
          {
            "en": "She grows roses in her garden.",
            "zh": "她在花园里种玫瑰。"
          }
        ]
      },
      {
        "id": "fence",
        "word": "fence",
        "phonetic": "/fens/",
        "translation": "篱笆；围栏",
        "emoji": "🪵",
        "examples": [
          {
            "en": "The white fence surrounds the garden.",
            "zh": "白色的篱笆围着花园。"
          }
        ]
      },
      {
        "id": "attic",
        "word": "attic",
        "phonetic": "/ˈætɪk/",
        "translation": "阁楼",
        "emoji": "🏠",
        "examples": [
          {
            "en": "We store old furniture in the attic.",
            "zh": "我们把旧家具放在阁楼里。"
          }
        ]
      },
      {
        "id": "basement",
        "word": "basement",
        "phonetic": "/ˈbeɪsmənt/",
        "translation": "地下室",
        "emoji": "🏠",
        "examples": [
          {
            "en": "The basement has a washing machine.",
            "zh": "地下室有洗衣机。"
          }
        ]
      },
      {
        "id": "doorbell",
        "word": "doorbell",
        "phonetic": "/ˈdɔːrbel/",
        "translation": "门铃",
        "emoji": "🔔",
        "examples": [
          {
            "en": "Someone is ringing the doorbell.",
            "zh": "有人在按门铃。"
          }
        ]
      },
      {
        "id": "key",
        "word": "key",
        "phonetic": "/kiː/",
        "translation": "钥匙",
        "emoji": "🔑",
        "examples": [
          {
            "en": "I can't find my house keys!",
            "zh": "我找不到家门钥匙了！"
          }
        ]
      },
      {
        "id": "window",
        "word": "window",
        "phonetic": "/ˈwɪndəʊ/",
        "translation": "窗户",
        "emoji": "🪟",
        "examples": [
          {
            "en": "Open the window for fresh air.",
            "zh": "打开窗户透透气。"
          }
        ]
      },
      {
        "id": "door",
        "word": "door",
        "phonetic": "/dɔːr/",
        "translation": "门",
        "emoji": "🚪",
        "examples": [
          {
            "en": "Please close the door.",
            "zh": "请关门。"
          }
        ]
      },
      {
        "id": "air-conditioner",
        "word": "air conditioner",
        "phonetic": "/eər kənˈdɪʃənər/",
        "translation": "空调",
        "emoji": "❄️",
        "examples": [
          {
            "en": "Turn on the air conditioner — it's too hot.",
            "zh": "打开空调——太热了。"
          }
        ]
      },
      {
        "id": "light-bulb",
        "word": "light bulb",
        "phonetic": "/laɪt bʌlb/",
        "translation": "灯泡",
        "emoji": "💡",
        "examples": [
          {
            "en": "The light bulb burned out.",
            "zh": "灯泡烧坏了。"
          }
        ]
      },
      {
        "id": "vase",
        "word": "vase",
        "phonetic": "/vɑːz/",
        "translation": "花瓶",
        "emoji": "🏺",
        "examples": [
          {
            "en": "She put fresh flowers in the vase.",
            "zh": "她把鲜花插在花瓶里。"
          }
        ]
      },
      {
        "id": "alarm-clock-h",
        "word": "alarm clock",
        "phonetic": "/əˈlɑːm klɒk/",
        "translation": "闹钟",
        "emoji": "⏰",
        "examples": [
          {
            "en": "I set my alarm clock for 7 AM.",
            "zh": "我把闹钟设到早上7点。"
          }
        ]
      },
      {
        "id": "lock",
        "word": "lock",
        "phonetic": "/lɒk/",
        "translation": "锁",
        "emoji": "🔒",
        "examples": [
          {
            "en": "Don't forget to lock the door.",
            "zh": "别忘了锁门。"
          }
        ]
      }
    ]
  },
  {
    "id": "family",
    "name": "家人外貌",
    "nameEn": "Family & People",
    "emoji": "👨‍👩‍👧‍👦",
    "color": "#E17055",
    "words": [
      {
        "id": "father",
        "word": "father / dad",
        "phonetic": "/ˈfɑːðər/ /dæd/",
        "translation": "父亲；爸爸",
        "emoji": "👨",
        "examples": [
          {
            "en": "My father works as an engineer.",
            "zh": "我父亲是一名工程师。"
          }
        ]
      },
      {
        "id": "mother",
        "word": "mother / mom",
        "phonetic": "/ˈmʌðər/ /mɒm/",
        "translation": "母亲；妈妈",
        "emoji": "👩",
        "examples": [
          {
            "en": "My mother is a wonderful cook.",
            "zh": "我妈妈做饭很好吃。"
          }
        ]
      },
      {
        "id": "husband",
        "word": "husband",
        "phonetic": "/ˈhʌzbənd/",
        "translation": "丈夫",
        "emoji": "🤵",
        "examples": [
          {
            "en": "Her husband is a doctor.",
            "zh": "她的丈夫是医生。"
          }
        ]
      },
      {
        "id": "wife",
        "word": "wife",
        "phonetic": "/waɪf/",
        "translation": "妻子",
        "emoji": "👰",
        "examples": [
          {
            "en": "His wife works at a bank.",
            "zh": "他的妻子在银行工作。"
          }
        ]
      },
      {
        "id": "son",
        "word": "son",
        "phonetic": "/sʌn/",
        "translation": "儿子",
        "emoji": "👦",
        "examples": [
          {
            "en": "Their son is ten years old.",
            "zh": "他们的儿子十岁了。"
          }
        ]
      },
      {
        "id": "daughter",
        "word": "daughter",
        "phonetic": "/ˈdɔːtər/",
        "translation": "女儿",
        "emoji": "👧",
        "examples": [
          {
            "en": "My daughter just started kindergarten.",
            "zh": "我女儿刚上幼儿园。"
          }
        ]
      },
      {
        "id": "brother",
        "word": "brother",
        "phonetic": "/ˈbrʌðər/",
        "translation": "兄弟",
        "emoji": "👨‍👦",
        "examples": [
          {
            "en": "My older brother is in college.",
            "zh": "我哥哥在上大学。"
          }
        ]
      },
      {
        "id": "sister",
        "word": "sister",
        "phonetic": "/ˈsɪstər/",
        "translation": "姐妹",
        "emoji": "👩‍👧",
        "examples": [
          {
            "en": "My younger sister loves to draw.",
            "zh": "我妹妹喜欢画画。"
          }
        ]
      },
      {
        "id": "grandfather",
        "word": "grandfather",
        "phonetic": "/ˈɡrænfɑːðər/",
        "translation": "祖父；爷爷",
        "emoji": "👴",
        "examples": [
          {
            "en": "My grandfather tells the best stories.",
            "zh": "我爷爷讲故事最好。"
          }
        ]
      },
      {
        "id": "grandmother",
        "word": "grandmother",
        "phonetic": "/ˈɡrænmʌðər/",
        "translation": "祖母；奶奶",
        "emoji": "👵",
        "examples": [
          {
            "en": "My grandmother knits sweaters for us.",
            "zh": "奶奶给我们织毛衣。"
          }
        ]
      },
      {
        "id": "uncle",
        "word": "uncle",
        "phonetic": "/ˈʌŋkl/",
        "translation": "叔叔；舅舅",
        "emoji": "🧑",
        "examples": [
          {
            "en": "My uncle lives in the US.",
            "zh": "我叔叔住在美国。"
          }
        ]
      },
      {
        "id": "aunt",
        "word": "aunt",
        "phonetic": "/ɑːnt/",
        "translation": "阿姨；姑姑",
        "emoji": "👩",
        "examples": [
          {
            "en": "My aunt brought me a gift from Japan.",
            "zh": "我阿姨从日本带了礼物。"
          }
        ]
      },
      {
        "id": "tall",
        "word": "tall",
        "phonetic": "/tɔːl/",
        "translation": "高的",
        "emoji": "🧍",
        "examples": [
          {
            "en": "He is tall and thin.",
            "zh": "他又高又瘦。"
          }
        ]
      },
      {
        "id": "short-desc",
        "word": "short",
        "phonetic": "/ʃɔːrt/",
        "translation": "矮的",
        "emoji": "🧍",
        "examples": [
          {
            "en": "She is short but athletic.",
            "zh": "她个子不高但很擅长运动。"
          }
        ]
      },
      {
        "id": "young",
        "word": "young",
        "phonetic": "/jʌŋ/",
        "translation": "年轻的",
        "emoji": "🧑",
        "examples": [
          {
            "en": "She looks young for her age.",
            "zh": "她看起来比实际年龄年轻。"
          }
        ]
      },
      {
        "id": "elderly",
        "word": "elderly",
        "phonetic": "/ˈeldərli/",
        "translation": "年长的",
        "emoji": "👴",
        "examples": [
          {
            "en": "An elderly couple lives next door.",
            "zh": "隔壁住着一对老夫妇。"
          }
        ]
      },
      {
        "id": "blonde",
        "word": "blonde",
        "phonetic": "/blɒnd/",
        "translation": "金发的",
        "emoji": "👱",
        "examples": [
          {
            "en": "She has long blonde hair.",
            "zh": "她有一头金色长发。"
          }
        ]
      },
      {
        "id": "curly",
        "word": "curly",
        "phonetic": "/ˈkɜːrli/",
        "translation": "卷曲的",
        "emoji": "🧑‍🦱",
        "examples": [
          {
            "en": "He has short curly hair.",
            "zh": "他有一头短卷发。"
          }
        ]
      },
      {
        "id": "beard",
        "word": "beard",
        "phonetic": "/bɪrd/",
        "translation": "胡须",
        "emoji": "🧔",
        "examples": [
          {
            "en": "He grew a beard during winter.",
            "zh": "他冬天留了胡子。"
          }
        ]
      },
      {
        "id": "cousin",
        "word": "cousin",
        "phonetic": "/ˈkʌzn/",
        "translation": "堂/表兄弟姐妹",
        "emoji": "👫",
        "examples": [
          {
            "en": "My cousin is coming to visit.",
            "zh": "我的表姐来看我们。"
          }
        ]
      },
      {
        "id": "nephew",
        "word": "nephew",
        "phonetic": "/ˈnefjuː/",
        "translation": "侄子；外甥",
        "emoji": "👦",
        "examples": [
          {
            "en": "My nephew just turned five.",
            "zh": "我侄子刚满五岁。"
          }
        ]
      },
      {
        "id": "niece",
        "word": "niece",
        "phonetic": "/niːs/",
        "translation": "侄女；外甥女",
        "emoji": "👧",
        "examples": [
          {
            "en": "My niece loves to dance.",
            "zh": "我侄女喜欢跳舞。"
          }
        ]
      },
      {
        "id": "parent",
        "word": "parent",
        "phonetic": "/ˈpeərənt/",
        "translation": "父母",
        "emoji": "👪",
        "examples": [
          {
            "en": "My parents live in a small town.",
            "zh": "我父母住在一个小镇上。"
          }
        ]
      },
      {
        "id": "relative",
        "word": "relative",
        "phonetic": "/ˈrelətɪv/",
        "translation": "亲戚",
        "emoji": "👨‍👩‍👧‍👧",
        "examples": [
          {
            "en": "All my relatives are coming.",
            "zh": "我所有的亲戚都会来。"
          }
        ]
      },
      {
        "id": "twin",
        "word": "twin",
        "phonetic": "/twɪn/",
        "translation": "双胞胎",
        "emoji": "👯",
        "examples": [
          {
            "en": "They are identical twins.",
            "zh": "他们是同卵双胞胎。"
          }
        ]
      },
      {
        "id": "only-child",
        "word": "only child",
        "phonetic": "/ˈəʊnli tʃaɪld/",
        "translation": "独生子女",
        "emoji": "🧑",
        "examples": [
          {
            "en": "I'm an only child.",
            "zh": "我是独生子。"
          }
        ]
      }
    ]
  },
  {
    "id": "food",
    "name": "食物食材",
    "nameEn": "Food & Groceries",
    "emoji": "🥩",
    "color": "#FF8E53",
    "words": [
      {
        "id": "apple",
        "word": "apple",
        "phonetic": "/ˈæpl/",
        "translation": "苹果",
        "emoji": "🍎",
        "examples": [
          {
            "en": "An apple a day keeps the doctor away.",
            "zh": "一天一苹果，医生远离我。"
          }
        ]
      },
      {
        "id": "banana",
        "word": "banana",
        "phonetic": "/bəˈnænə/",
        "translation": "香蕉",
        "emoji": "🍌",
        "examples": [
          {
            "en": "Bananas are rich in potassium.",
            "zh": "香蕉富含钾。"
          }
        ]
      },
      {
        "id": "orange",
        "word": "orange",
        "phonetic": "/ˈɒrɪndʒ/",
        "translation": "橙子",
        "emoji": "🍊",
        "examples": [
          {
            "en": "I drink fresh orange juice every morning.",
            "zh": "我每天早上喝鲜榨橙汁。"
          }
        ]
      },
      {
        "id": "grape",
        "word": "grape",
        "phonetic": "/ɡreɪp/",
        "translation": "葡萄",
        "emoji": "🍇",
        "examples": [
          {
            "en": "These grapes are sweet and juicy.",
            "zh": "这些葡萄又甜又多汁。"
          }
        ]
      },
      {
        "id": "strawberry",
        "word": "strawberry",
        "phonetic": "/ˈstrɔːbəri/",
        "translation": "草莓",
        "emoji": "🍓",
        "examples": [
          {
            "en": "She loves strawberry ice cream.",
            "zh": "她喜欢草莓冰淇淋。"
          }
        ]
      },
      {
        "id": "watermelon",
        "word": "watermelon",
        "phonetic": "/ˈwɔːtərmelən/",
        "translation": "西瓜",
        "emoji": "🍉",
        "examples": [
          {
            "en": "We eat watermelon on hot summer days.",
            "zh": "夏天我们吃西瓜。"
          }
        ]
      },
      {
        "id": "carrot",
        "word": "carrot",
        "phonetic": "/ˈkærət/",
        "translation": "胡萝卜",
        "emoji": "🥕",
        "examples": [
          {
            "en": "Carrots are good for your eyesight.",
            "zh": "胡萝卜对视力好。"
          }
        ]
      },
      {
        "id": "broccoli",
        "word": "broccoli",
        "phonetic": "/ˈbrɒkəli/",
        "translation": "西兰花",
        "emoji": "🥦",
        "examples": [
          {
            "en": "Broccoli is a nutritious vegetable.",
            "zh": "西兰花很有营养。"
          }
        ]
      },
      {
        "id": "tomato",
        "word": "tomato",
        "phonetic": "/təˈmɑːtəʊ/",
        "translation": "番茄",
        "emoji": "🍅",
        "examples": [
          {
            "en": "Fresh tomatoes make the best pasta sauce.",
            "zh": "新鲜番茄做的意面酱最好吃。"
          }
        ]
      },
      {
        "id": "potato",
        "word": "potato",
        "phonetic": "/pəˈteɪtəʊ/",
        "translation": "土豆",
        "emoji": "🥔",
        "examples": [
          {
            "en": "I like baked potatoes with sour cream.",
            "zh": "我喜欢配酸奶油烤土豆。"
          }
        ]
      },
      {
        "id": "onion",
        "word": "onion",
        "phonetic": "/ˈʌnjən/",
        "translation": "洋葱",
        "emoji": "🧅",
        "examples": [
          {
            "en": "Chopping onions makes me cry.",
            "zh": "切洋葱让我流泪。"
          }
        ]
      },
      {
        "id": "lettuce",
        "word": "lettuce",
        "phonetic": "/ˈletɪs/",
        "translation": "生菜",
        "emoji": "🥬",
        "examples": [
          {
            "en": "I'll have a salad with lettuce and tomatoes.",
            "zh": "我要一份生菜番茄沙拉。"
          }
        ]
      },
      {
        "id": "meat-chicken",
        "word": "chicken",
        "phonetic": "/ˈtʃɪkɪn/",
        "translation": "鸡肉",
        "emoji": "🍗",
        "examples": [
          {
            "en": "We're having roasted chicken for dinner.",
            "zh": "我们晚餐吃烤鸡。"
          }
        ]
      },
      {
        "id": "beef",
        "word": "beef",
        "phonetic": "/biːf/",
        "translation": "牛肉",
        "emoji": "🥩",
        "examples": [
          {
            "en": "She cooked beef stew for the family.",
            "zh": "她给家人做了炖牛肉。"
          }
        ]
      },
      {
        "id": "pork",
        "word": "pork",
        "phonetic": "/pɔːrk/",
        "translation": "猪肉",
        "emoji": "🥓",
        "examples": [
          {
            "en": "Pork chops are on sale at the supermarket.",
            "zh": "超市猪排在打折。"
          }
        ]
      },
      {
        "id": "fish-food",
        "word": "fish",
        "phonetic": "/fɪʃ/",
        "translation": "鱼",
        "emoji": "🐟",
        "examples": [
          {
            "en": "I prefer steamed fish to fried fish.",
            "zh": "比起炸鱼我更喜欢蒸鱼。"
          }
        ]
      },
      {
        "id": "shrimp",
        "word": "shrimp",
        "phonetic": "/ʃrɪmp/",
        "translation": "虾",
        "emoji": "🦐",
        "examples": [
          {
            "en": "Shrimp is my favorite seafood.",
            "zh": "虾是我最喜欢的海鲜。"
          }
        ]
      },
      {
        "id": "milk",
        "word": "milk",
        "phonetic": "/mɪlk/",
        "translation": "牛奶",
        "emoji": "🥛",
        "examples": [
          {
            "en": "I drink a glass of milk before bed.",
            "zh": "我睡前喝一杯牛奶。"
          }
        ]
      },
      {
        "id": "cheese",
        "word": "cheese",
        "phonetic": "/tʃiːz/",
        "translation": "奶酪",
        "emoji": "🧀",
        "examples": [
          {
            "en": "Swiss cheese has many holes.",
            "zh": "瑞士奶酪有很多孔。"
          }
        ]
      },
      {
        "id": "egg",
        "word": "egg",
        "phonetic": "/eɡ/",
        "translation": "鸡蛋",
        "emoji": "🥚",
        "examples": [
          {
            "en": "I'll have two boiled eggs for breakfast.",
            "zh": "我早餐吃两个煮鸡蛋。"
          }
        ]
      },
      {
        "id": "bread",
        "word": "bread",
        "phonetic": "/bred/",
        "translation": "面包",
        "emoji": "🍞",
        "examples": [
          {
            "en": "Fresh bread from the bakery smells wonderful.",
            "zh": "面包店的新鲜面包很香。"
          }
        ]
      },
      {
        "id": "rice",
        "word": "rice",
        "phonetic": "/raɪs/",
        "translation": "米饭",
        "emoji": "🍚",
        "examples": [
          {
            "en": "We eat rice with almost every meal.",
            "zh": "我们几乎每餐都吃米饭。"
          }
        ]
      },
      {
        "id": "noodle",
        "word": "noodle",
        "phonetic": "/ˈnuːdl/",
        "translation": "面条",
        "emoji": "🍜",
        "examples": [
          {
            "en": "I had a bowl of noodles for lunch.",
            "zh": "我午餐吃了一碗面。"
          }
        ]
      },
      {
        "id": "lemon",
        "word": "lemon",
        "phonetic": "/ˈlemən/",
        "translation": "柠檬",
        "emoji": "🍋",
        "examples": [
          {
            "en": "Squeeze lemon juice over the fish.",
            "zh": "在鱼上挤点柠檬汁。"
          }
        ]
      },
      {
        "id": "avocado",
        "word": "avocado",
        "phonetic": "/ˌævəˈkɑːdəʊ/",
        "translation": "牛油果",
        "emoji": "🥑",
        "examples": [
          {
            "en": "I love avocado toast.",
            "zh": "我喜欢牛油果吐司。"
          }
        ]
      },
      {
        "id": "mushroom",
        "word": "mushroom",
        "phonetic": "/ˈmʌʃruːm/",
        "translation": "蘑菇",
        "emoji": "🍄",
        "examples": [
          {
            "en": "I ordered a mushroom pizza.",
            "zh": "我点了蘑菇披萨。"
          }
        ]
      },
      {
        "id": "garlic",
        "word": "garlic",
        "phonetic": "/ˈɡɑːrlɪk/",
        "translation": "大蒜",
        "emoji": "🧄",
        "examples": [
          {
            "en": "Garlic adds flavor to dishes.",
            "zh": "大蒜给菜肴增添风味。"
          }
        ]
      },
      {
        "id": "butter",
        "word": "butter",
        "phonetic": "/ˈbʌtər/",
        "translation": "黄油",
        "emoji": "🧈",
        "examples": [
          {
            "en": "Spread butter on the toast.",
            "zh": "在吐司上抹黄油。"
          }
        ]
      },
      {
        "id": "cake",
        "word": "cake",
        "phonetic": "/keɪk/",
        "translation": "蛋糕",
        "emoji": "🎂",
        "examples": [
          {
            "en": "She baked a chocolate cake.",
            "zh": "她烤了一个巧克力蛋糕。"
          }
        ]
      },
      {
        "id": "cookie",
        "word": "cookie / biscuit",
        "phonetic": "/ˈkʊki/ /ˈbɪskɪt/",
        "translation": "饼干",
        "emoji": "🍪",
        "examples": [
          {
            "en": "I had cookies with my tea.",
            "zh": "我喝茶时吃了饼干。"
          }
        ]
      },
      {
        "id": "juice",
        "word": "juice",
        "phonetic": "/dʒuːs/",
        "translation": "果汁",
        "emoji": "🧃",
        "examples": [
          {
            "en": "I'd like a glass of orange juice.",
            "zh": "我要一杯橙汁。"
          }
        ]
      },
      {
        "id": "ham",
        "word": "ham",
        "phonetic": "/hæm/",
        "translation": "火腿",
        "emoji": "🥩",
        "examples": [
          {
            "en": "I'll have a ham sandwich.",
            "zh": "我要一个火腿三明治。"
          }
        ]
      },
      {
        "id": "sausage",
        "word": "sausage",
        "phonetic": "/ˈsɒsɪdʒ/",
        "translation": "香肠",
        "emoji": "🌭",
        "examples": [
          {
            "en": "We had sausages for breakfast.",
            "zh": "我们早餐吃了香肠。"
          }
        ]
      },
      {
        "id": "tofu",
        "word": "tofu",
        "phonetic": "/ˈtəʊfuː/",
        "translation": "豆腐",
        "emoji": "🫘",
        "examples": [
          {
            "en": "Tofu is a good source of protein.",
            "zh": "豆腐是很好的蛋白质来源。"
          }
        ]
      },
      {
        "id": "ginger",
        "word": "ginger",
        "phonetic": "/ˈdʒɪndʒər/",
        "translation": "姜",
        "emoji": "🫚",
        "examples": [
          {
            "en": "Ginger tea is good for a sore throat.",
            "zh": "姜茶对喉咙痛有好处。"
          }
        ]
      }
    ]
  },
  {
    "id": "kitchen",
    "name": "厨房烹饪",
    "nameEn": "Kitchen & Cooking",
    "emoji": "🍳",
    "color": "#FDCB6E",
    "words": [
      {
        "id": "fridge",
        "word": "refrigerator / fridge",
        "phonetic": "/rɪˈfrɪdʒəreɪtər/ /frɪdʒ/",
        "translation": "冰箱",
        "emoji": "🧊",
        "examples": [
          {
            "en": "We keep milk in the refrigerator.",
            "zh": "我们把牛奶放在冰箱里。"
          }
        ]
      },
      {
        "id": "oven",
        "word": "oven",
        "phonetic": "/ˈʌvn/",
        "translation": "烤箱",
        "emoji": "🔥",
        "examples": [
          {
            "en": "I baked a cake in the oven.",
            "zh": "我用烤箱烤了蛋糕。"
          }
        ]
      },
      {
        "id": "microwave",
        "word": "microwave",
        "phonetic": "/ˈmaɪkrəweɪv/",
        "translation": "微波炉",
        "emoji": "📦",
        "examples": [
          {
            "en": "Pop it in the microwave for two minutes.",
            "zh": "放进微波炉加热两分钟。"
          }
        ]
      },
      {
        "id": "stove",
        "word": "stove / cooker",
        "phonetic": "/stəʊv/ /ˈkʊkər/",
        "translation": "灶台；炉具",
        "emoji": "🔥",
        "examples": [
          {
            "en": "She was cooking soup on the stove.",
            "zh": "她在灶台上煮汤。"
          }
        ]
      },
      {
        "id": "kettle",
        "word": "kettle",
        "phonetic": "/ˈketl/",
        "translation": "水壶",
        "emoji": "🫖",
        "examples": [
          {
            "en": "I boiled water in the kettle to make tea.",
            "zh": "我用烧水壶烧水泡茶。"
          }
        ]
      },
      {
        "id": "knife",
        "word": "knife",
        "phonetic": "/naɪf/",
        "translation": "刀",
        "emoji": "🔪",
        "examples": [
          {
            "en": "Be careful — this knife is very sharp.",
            "zh": "小心——这把刀很锋利。"
          }
        ]
      },
      {
        "id": "cutting-board",
        "word": "cutting board",
        "phonetic": "/ˈkʌtɪŋ bɔːrd/",
        "translation": "砧板",
        "emoji": "🪵",
        "examples": [
          {
            "en": "Use the red cutting board for meat.",
            "zh": "用红色砧板切肉。"
          }
        ]
      },
      {
        "id": "frying-pan",
        "word": "frying pan",
        "phonetic": "/ˈfraɪɪŋ pæn/",
        "translation": "煎锅",
        "emoji": "🍳",
        "examples": [
          {
            "en": "Heat oil in the frying pan before adding eggs.",
            "zh": "煎锅里倒油加热再放鸡蛋。"
          }
        ]
      },
      {
        "id": "pot",
        "word": "pot",
        "phonetic": "/pɒt/",
        "translation": "锅",
        "emoji": "🥘",
        "examples": [
          {
            "en": "She put the soup in a large pot.",
            "zh": "她把汤放进大锅里。"
          }
        ]
      },
      {
        "id": "spatula",
        "word": "spatula",
        "phonetic": "/ˈspætʃələ/",
        "translation": "锅铲",
        "emoji": "🥄",
        "examples": [
          {
            "en": "Use a spatula to flip the pancake.",
            "zh": "用锅铲翻动煎饼。"
          }
        ]
      },
      {
        "id": "chop",
        "word": "chop",
        "phonetic": "/tʃɒp/",
        "translation": "切；剁",
        "emoji": "🔪",
        "examples": [
          {
            "en": "Chop the onions into small pieces.",
            "zh": "把洋葱切成小块。"
          }
        ]
      },
      {
        "id": "boil",
        "word": "boil",
        "phonetic": "/bɔɪl/",
        "translation": "煮",
        "emoji": "♨️",
        "examples": [
          {
            "en": "Boil the eggs for eight minutes.",
            "zh": "把鸡蛋煮八分钟。"
          }
        ]
      },
      {
        "id": "fry",
        "word": "fry",
        "phonetic": "/fraɪ/",
        "translation": "煎；炒",
        "emoji": "🍳",
        "examples": [
          {
            "en": "I'll fry some vegetables for dinner.",
            "zh": "我炒个蔬菜当晚餐。"
          }
        ]
      },
      {
        "id": "steam",
        "word": "steam",
        "phonetic": "/stiːm/",
        "translation": "蒸",
        "emoji": "♨️",
        "examples": [
          {
            "en": "Steaming is a healthy way to cook fish.",
            "zh": "蒸鱼是一种健康的烹饪方式。"
          }
        ]
      },
      {
        "id": "bake",
        "word": "bake",
        "phonetic": "/beɪk/",
        "translation": "烤",
        "emoji": "🥖",
        "examples": [
          {
            "en": "I love the smell of bread baking.",
            "zh": "我喜欢烤面包的香味。"
          }
        ]
      },
      {
        "id": "stir",
        "word": "stir",
        "phonetic": "/stɜːr/",
        "translation": "搅拌",
        "emoji": "🥄",
        "examples": [
          {
            "en": "Stir the soup to prevent burning.",
            "zh": "搅拌汤防止烧焦。"
          }
        ]
      },
      {
        "id": "salt",
        "word": "salt",
        "phonetic": "/sɔːlt/",
        "translation": "盐",
        "emoji": "🧂",
        "examples": [
          {
            "en": "Don't put too much salt in the dish.",
            "zh": "别放太多盐。"
          }
        ]
      },
      {
        "id": "sugar",
        "word": "sugar",
        "phonetic": "/ˈʃʊɡər/",
        "translation": "糖",
        "emoji": "🍬",
        "examples": [
          {
            "en": "Do you take sugar in your coffee?",
            "zh": "你咖啡里加糖吗？"
          }
        ]
      },
      {
        "id": "soy-sauce",
        "word": "soy sauce",
        "phonetic": "/sɔɪ sɔːs/",
        "translation": "酱油",
        "emoji": "🫘",
        "examples": [
          {
            "en": "Add a spoonful of soy sauce to the stir-fry.",
            "zh": "加一勺酱油到炒菜里。"
          }
        ]
      },
      {
        "id": "vinegar",
        "word": "vinegar",
        "phonetic": "/ˈvɪnɪɡər/",
        "translation": "醋",
        "emoji": "🫙",
        "examples": [
          {
            "en": "The dressing is made with oil and vinegar.",
            "zh": "沙拉酱用油和醋调制。"
          }
        ]
      },
      {
        "id": "recipe",
        "word": "recipe",
        "phonetic": "/ˈresəpi/",
        "translation": "食谱；菜谱",
        "emoji": "📝",
        "examples": [
          {
            "en": "I found a great chocolate cake recipe online.",
            "zh": "我找到了一个很棒巧克力蛋糕食谱。"
          }
        ]
      },
      {
        "id": "grater",
        "word": "grater",
        "phonetic": "/ˈɡreɪtər/",
        "translation": "刨丝器",
        "emoji": "🥕",
        "examples": [
          {
            "en": "Use a grater to shred cheese.",
            "zh": "用刨丝器把奶酪刨成丝。"
          }
        ]
      },
      {
        "id": "rolling-pin",
        "word": "rolling pin",
        "phonetic": "/ˈrəʊlɪŋ pɪn/",
        "translation": "擀面杖",
        "emoji": "🥖",
        "examples": [
          {
            "en": "She used a rolling pin to flatten dough.",
            "zh": "她用擀面杖擀面团。"
          }
        ]
      },
      {
        "id": "mixing-bowl",
        "word": "mixing bowl",
        "phonetic": "/ˈmɪksɪŋ bəʊl/",
        "translation": "搅拌碗",
        "emoji": "🥣",
        "examples": [
          {
            "en": "Mix the flour and eggs in a bowl.",
            "zh": "在碗里搅拌面粉和鸡蛋。"
          }
        ]
      },
      {
        "id": "freezer",
        "word": "freezer",
        "phonetic": "/ˈfriːzər/",
        "translation": "冷冻室",
        "emoji": "🧊",
        "examples": [
          {
            "en": "We keep frozen vegetables in the freezer.",
            "zh": "我们把冷冻蔬菜放在冰柜里。"
          }
        ]
      },
      {
        "id": "can-opener",
        "word": "can opener",
        "phonetic": "/kæn ˈəʊpənər/",
        "translation": "开罐器",
        "emoji": "🥫",
        "examples": [
          {
            "en": "I need a can opener for this soup.",
            "zh": "我需要开罐器打开这罐汤。"
          }
        ]
      },
      {
        "id": "dish-soap",
        "word": "dish soap",
        "phonetic": "/dɪʃ səʊp/",
        "translation": "洗洁精",
        "emoji": "🧴",
        "examples": [
          {
            "en": "Add some dish soap to the water.",
            "zh": "在水里加洗洁精。"
          }
        ]
      },
      {
        "id": "peel",
        "word": "peel",
        "phonetic": "/piːl/",
        "translation": "削皮",
        "emoji": "🥕",
        "examples": [
          {
            "en": "Peel the potatoes before boiling.",
            "zh": "煮土豆前先削皮。"
          }
        ]
      },
      {
        "id": "pour",
        "word": "pour",
        "phonetic": "/pɔːr/",
        "translation": "倒；倾倒",
        "emoji": "🥛",
        "examples": [
          {
            "en": "Pour the milk into a glass.",
            "zh": "把牛奶倒进杯子里。"
          }
        ]
      },
      {
        "id": "mix",
        "word": "mix",
        "phonetic": "/mɪks/",
        "translation": "混合",
        "emoji": "🥄",
        "examples": [
          {
            "en": "Mix the ingredients together.",
            "zh": "把所有配料混合。"
          }
        ]
      },
      {
        "id": "measuring-cup",
        "word": "measuring cup",
        "phonetic": "/ˈmeʒərɪŋ kʌp/",
        "translation": "量杯",
        "emoji": "🥛",
        "examples": [
          {
            "en": "Use a measuring cup for the flour.",
            "zh": "用量杯量面粉。"
          }
        ]
      },
      {
        "id": "dishwasher",
        "word": "dishwasher",
        "phonetic": "/ˈdɪʃwɒʃər/",
        "translation": "洗碗机",
        "emoji": "🍽️",
        "examples": [
          {
            "en": "The dishwasher cleans everything in 30 min.",
            "zh": "洗碗机30分钟洗完。"
          }
        ]
      }
    ]
  },
  {
    "id": "restaurant",
    "name": "外出就餐",
    "nameEn": "Eating Out",
    "emoji": "🍽️",
    "color": "#4ECDC4",
    "words": [
      {
        "id": "reservation",
        "word": "reservation",
        "phonetic": "/ˌrezərˈveɪʃn/",
        "translation": "预订；预约",
        "emoji": "📋",
        "examples": [
          {
            "en": "I'd like to make a reservation for two at 7 PM.",
            "zh": "我想预订晚上7点两个人的位置。"
          }
        ]
      },
      {
        "id": "menu",
        "word": "menu",
        "phonetic": "/ˈmenjuː/",
        "translation": "菜单",
        "emoji": "📜",
        "examples": [
          {
            "en": "Could I see the menu, please?",
            "zh": "请给我看一下菜单。"
          }
        ]
      },
      {
        "id": "waiter",
        "word": "waiter / waitress",
        "phonetic": "/ˈweɪtər/ /ˈweɪtrəs/",
        "translation": "服务员",
        "emoji": "💁",
        "examples": [
          {
            "en": "The waiter was very friendly.",
            "zh": "服务员很友好。"
          }
        ]
      },
      {
        "id": "order",
        "word": "order",
        "phonetic": "/ˈɔːrdər/",
        "translation": "点餐；下单",
        "emoji": "📝",
        "examples": [
          {
            "en": "Are you ready to order?",
            "zh": "您准备好点餐了吗？"
          }
        ]
      },
      {
        "id": "appetizer",
        "word": "appetizer / starter",
        "phonetic": "/ˈæpɪtaɪzər/ /ˈstɑːrtər/",
        "translation": "开胃菜",
        "emoji": "🥗",
        "examples": [
          {
            "en": "We ordered spring rolls as an appetizer.",
            "zh": "我们点了春卷当开胃菜。"
          }
        ]
      },
      {
        "id": "main-course",
        "word": "main course",
        "phonetic": "/meɪn kɔːrs/",
        "translation": "主菜",
        "emoji": "🍖",
        "examples": [
          {
            "en": "What would you like for your main course?",
            "zh": "您主菜想点什么？"
          }
        ]
      },
      {
        "id": "dessert",
        "word": "dessert",
        "phonetic": "/dɪˈzɜːrt/",
        "translation": "甜点",
        "emoji": "🍰",
        "examples": [
          {
            "en": "Their cheesecake is great for dessert.",
            "zh": "他们的芝士蛋糕很适合做甜点。"
          }
        ]
      },
      {
        "id": "beverage",
        "word": "beverage",
        "phonetic": "/ˈbevərɪdʒ/",
        "translation": "饮料",
        "emoji": "🥤",
        "examples": [
          {
            "en": "What beverages do you have?",
            "zh": "你们有什么饮料？"
          }
        ]
      },
      {
        "id": "bill",
        "word": "bill / check",
        "phonetic": "/bɪl/ /tʃek/",
        "translation": "账单",
        "emoji": "🧾",
        "examples": [
          {
            "en": "Could I have the bill, please?",
            "zh": "请给我账单。"
          }
        ]
      },
      {
        "id": "tip",
        "word": "tip",
        "phonetic": "/tɪp/",
        "translation": "小费",
        "emoji": "💵",
        "examples": [
          {
            "en": "It's customary to leave a 10% tip.",
            "zh": "给10%小费是惯例。"
          }
        ]
      },
      {
        "id": "leftovers",
        "word": "leftovers / doggy bag",
        "phonetic": "/ˈleftəʊvərz/ /ˈdɒɡi bæɡ/",
        "translation": "剩菜；打包",
        "emoji": "📦",
        "examples": [
          {
            "en": "Could we get a doggy bag for the leftovers?",
            "zh": "能帮我们把剩菜打包吗？"
          }
        ]
      },
      {
        "id": "chopsticks",
        "word": "chopsticks",
        "phonetic": "/ˈtʃɒpstɪks/",
        "translation": "筷子",
        "emoji": "🥢",
        "examples": [
          {
            "en": "Can you use chopsticks?",
            "zh": "你会用筷子吗？"
          }
        ]
      },
      {
        "id": "plate",
        "word": "plate",
        "phonetic": "/pleɪt/",
        "translation": "盘子",
        "emoji": "🍽️",
        "examples": [
          {
            "en": "The waiter set a clean plate in front of us.",
            "zh": "服务员放了干净的盘子。"
          }
        ]
      },
      {
        "id": "buffet",
        "word": "buffet",
        "phonetic": "/bəˈfeɪ/",
        "translation": "自助餐",
        "emoji": "🍱",
        "examples": [
          {
            "en": "The hotel serves a buffet breakfast.",
            "zh": "酒店提供自助早餐。"
          }
        ]
      },
      {
        "id": "takeaway",
        "word": "takeaway / takeout",
        "phonetic": "/ˈteɪkəweɪ/ /ˈteɪkaʊt/",
        "translation": "外卖",
        "emoji": "📦",
        "examples": [
          {
            "en": "Let's order takeaway tonight.",
            "zh": "我们今晚点外卖吧。"
          }
        ]
      },
      {
        "id": "bowl",
        "word": "bowl",
        "phonetic": "/bəʊl/",
        "translation": "碗",
        "emoji": "🥣",
        "examples": [
          {
            "en": "She served soup in a bowl.",
            "zh": "她把汤盛在碗里。"
          }
        ]
      },
      {
        "id": "glass",
        "word": "glass",
        "phonetic": "/ɡlɑːs/",
        "translation": "玻璃杯",
        "emoji": "🥛",
        "examples": [
          {
            "en": "May I have a glass of water?",
            "zh": "请给我一杯水好吗？"
          }
        ]
      },
      {
        "id": "spicy",
        "word": "spicy",
        "phonetic": "/ˈspaɪsi/",
        "translation": "辣的",
        "emoji": "🌶️",
        "examples": [
          {
            "en": "This dish is too spicy for me.",
            "zh": "这道菜太辣了。"
          }
        ]
      },
      {
        "id": "vegan",
        "word": "vegan / vegetarian",
        "phonetic": "/ˈviːɡən/ /ˌvedʒəˈteəriən/",
        "translation": "纯素/素食",
        "emoji": "🥬",
        "examples": [
          {
            "en": "Do you have vegetarian options?",
            "zh": "你们有素食选择吗？"
          }
        ]
      },
      {
        "id": "table-for-two",
        "word": "a table for two",
        "phonetic": "/ə ˈteɪbl fɔːr tuː/",
        "translation": "两人桌",
        "emoji": "🪑",
        "examples": [
          {
            "en": "We'd like a table for two.",
            "zh": "我们要一张两人桌。"
          }
        ]
      },
      {
        "id": "toast",
        "word": "toast",
        "phonetic": "/təʊst/",
        "translation": "敬酒",
        "emoji": "🥂",
        "examples": [
          {
            "en": "Let's make a toast!",
            "zh": "让我们干杯！"
          }
        ]
      },
      {
        "id": "allergic",
        "word": "allergic",
        "phonetic": "/əˈlɜːrdʒɪk/",
        "translation": "过敏的",
        "emoji": "⚠️",
        "examples": [
          {
            "en": "I'm allergic to nuts.",
            "zh": "我对坚果过敏。"
          }
        ]
      }
    ]
  },
  {
    "id": "shopping",
    "name": "购物服装",
    "nameEn": "Shopping & Clothes",
    "emoji": "🛒",
    "color": "#FDCB6E",
    "words": [
      {
        "id": "shirt",
        "word": "shirt",
        "phonetic": "/ʃɜːrt/",
        "translation": "衬衫",
        "emoji": "👔",
        "examples": [
          {
            "en": "He wore a white shirt and a red tie.",
            "zh": "他穿着白衬衫和红领带。"
          }
        ]
      },
      {
        "id": "trousers",
        "word": "trousers / pants",
        "phonetic": "/ˈtraʊzərz/ /pænts/",
        "translation": "裤子",
        "emoji": "👖",
        "examples": [
          {
            "en": "These trousers are too long for me.",
            "zh": "这条裤子太长了。"
          }
        ]
      },
      {
        "id": "jacket",
        "word": "jacket",
        "phonetic": "/ˈdʒækɪt/",
        "translation": "夹克",
        "emoji": "🧥",
        "examples": [
          {
            "en": "You should bring a jacket — it might get cold.",
            "zh": "带件夹克——可能会冷。"
          }
        ]
      },
      {
        "id": "dress",
        "word": "dress",
        "phonetic": "/dres/",
        "translation": "连衣裙",
        "emoji": "👗",
        "examples": [
          {
            "en": "She wore a beautiful red dress to the party.",
            "zh": "她穿了一条红裙子去派对。"
          }
        ]
      },
      {
        "id": "skirt",
        "word": "skirt",
        "phonetic": "/skɜːrt/",
        "translation": "裙子",
        "emoji": "👗",
        "examples": [
          {
            "en": "She bought a plaid skirt from the store.",
            "zh": "她在商店买了一条格子裙。"
          }
        ]
      },
      {
        "id": "sweater",
        "word": "sweater",
        "phonetic": "/ˈswetər/",
        "translation": "毛衣",
        "emoji": "🧶",
        "examples": [
          {
            "en": "This sweater is made of pure wool.",
            "zh": "这件毛衣是纯羊毛的。"
          }
        ]
      },
      {
        "id": "coat",
        "word": "coat",
        "phonetic": "/kəʊt/",
        "translation": "大衣",
        "emoji": "🧥",
        "examples": [
          {
            "en": "I need a warm winter coat.",
            "zh": "我需要一件暖和的大衣。"
          }
        ]
      },
      {
        "id": "suit",
        "word": "suit",
        "phonetic": "/suːt/",
        "translation": "西装",
        "emoji": "🤵",
        "examples": [
          {
            "en": "He wears a suit and tie to work every day.",
            "zh": "他每天穿西装上班。"
          }
        ]
      },
      {
        "id": "shoes",
        "word": "shoes",
        "phonetic": "/ʃuːz/",
        "translation": "鞋子",
        "emoji": "👟",
        "examples": [
          {
            "en": "These new shoes are very comfortable.",
            "zh": "这双新鞋很舒服。"
          }
        ]
      },
      {
        "id": "socks",
        "word": "socks",
        "phonetic": "/sɒks/",
        "translation": "袜子",
        "emoji": "🧦",
        "examples": [
          {
            "en": "I need to buy a new pack of socks.",
            "zh": "我需要买包新袜子。"
          }
        ]
      },
      {
        "id": "hat",
        "word": "hat",
        "phonetic": "/hæt/",
        "translation": "帽子",
        "emoji": "🧢",
        "examples": [
          {
            "en": "Wear a hat to protect yourself from the sun.",
            "zh": "戴帽子防晒。"
          }
        ]
      },
      {
        "id": "belt",
        "word": "belt",
        "phonetic": "/belt/",
        "translation": "皮带",
        "emoji": "🪢",
        "examples": [
          {
            "en": "This belt doesn't match my shoes.",
            "zh": "这条皮带和鞋子不搭。"
          }
        ]
      },
      {
        "id": "watch-acc",
        "word": "watch",
        "phonetic": "/wɒtʃ/",
        "translation": "手表",
        "emoji": "⌚",
        "examples": [
          {
            "en": "My watch is five minutes fast.",
            "zh": "我的表快了五分钟。"
          }
        ]
      },
      {
        "id": "glasses",
        "word": "glasses",
        "phonetic": "/ˈɡlɑːsɪz/",
        "translation": "眼镜",
        "emoji": "👓",
        "examples": [
          {
            "en": "I need to clean my glasses.",
            "zh": "我需要擦擦眼镜。"
          }
        ]
      },
      {
        "id": "earrings",
        "word": "earrings",
        "phonetic": "/ˈɪərɪŋz/",
        "translation": "耳环",
        "emoji": "💎",
        "examples": [
          {
            "en": "She wore diamond earrings to the party.",
            "zh": "她戴着钻石耳环去派对。"
          }
        ]
      },
      {
        "id": "necklace",
        "word": "necklace",
        "phonetic": "/ˈnekləs/",
        "translation": "项链",
        "emoji": "📿",
        "examples": [
          {
            "en": "This necklace was a gift from my grandmother.",
            "zh": "这条项链是奶奶送的礼物。"
          }
        ]
      },
      {
        "id": "shopping-cart",
        "word": "shopping cart",
        "phonetic": "/ˈʃɒpɪŋ kɑːrt/",
        "translation": "购物车",
        "emoji": "🛒",
        "examples": [
          {
            "en": "I pushed the shopping cart down the aisle.",
            "zh": "我推着购物车沿过道走。"
          }
        ]
      },
      {
        "id": "checkout",
        "word": "checkout",
        "phonetic": "/ˈtʃekaʊt/",
        "translation": "收银台",
        "emoji": "🛒",
        "examples": [
          {
            "en": "Please proceed to the checkout.",
            "zh": "请到收银台付款。"
          }
        ]
      },
      {
        "id": "receipt",
        "word": "receipt",
        "phonetic": "/rɪˈsiːt/",
        "translation": "收据",
        "emoji": "🧾",
        "examples": [
          {
            "en": "Keep your receipt in case you need to return it.",
            "zh": "保留收据以防退货。"
          }
        ]
      },
      {
        "id": "fitting-room",
        "word": "fitting room",
        "phonetic": "/ˈfɪtɪŋ ruːm/",
        "translation": "试衣间",
        "emoji": "🚪",
        "examples": [
          {
            "en": "The fitting room is at the back.",
            "zh": "试衣间在后面。"
          }
        ]
      },
      {
        "id": "size",
        "word": "size",
        "phonetic": "/saɪz/",
        "translation": "尺码",
        "emoji": "📏",
        "examples": [
          {
            "en": "Do you have this in a larger size?",
            "zh": "有大一点的尺码吗？"
          }
        ]
      },
      {
        "id": "sale",
        "word": "sale / discount",
        "phonetic": "/seɪl/ /ˈdɪskaʊnt/",
        "translation": "促销；打折",
        "emoji": "🏷️",
        "examples": [
          {
            "en": "I bought this at 50% off during the sale.",
            "zh": "我五折买了这个。"
          }
        ]
      },
      {
        "id": "refund",
        "word": "refund",
        "phonetic": "/ˈriːfʌnd/",
        "translation": "退款",
        "emoji": "💰",
        "examples": [
          {
            "en": "I'd like to return this and get a refund.",
            "zh": "我想退货退款。"
          }
        ]
      },
      {
        "id": "laundry",
        "word": "laundry",
        "phonetic": "/ˈlɔːndri/",
        "translation": "洗衣",
        "emoji": "🧺",
        "examples": [
          {
            "en": "I need to do my laundry this weekend.",
            "zh": "我这周末要洗衣服。"
          }
        ]
      },
      {
        "id": "bargain",
        "word": "bargain",
        "phonetic": "/ˈbɑːrɡən/",
        "translation": "便宜货",
        "emoji": "💲",
        "examples": [
          {
            "en": "This was a real bargain!",
            "zh": "这真是个便宜货！"
          }
        ]
      },
      {
        "id": "return",
        "word": "return",
        "phonetic": "/rɪˈtɜːrn/",
        "translation": "退货",
        "emoji": "🔄",
        "examples": [
          {
            "en": "I'd like to return this shirt.",
            "zh": "我想退这件衬衫。"
          }
        ]
      },
      {
        "id": "exchange",
        "word": "exchange",
        "phonetic": "/ɪksˈtʃeɪndʒ/",
        "translation": "换货",
        "emoji": "🔄",
        "examples": [
          {
            "en": "Can I exchange this for a larger size?",
            "zh": "能换大一号的吗？"
          }
        ]
      },
      {
        "id": "price-tag",
        "word": "price tag",
        "phonetic": "/praɪs tæɡ/",
        "translation": "价格标签",
        "emoji": "🏷️",
        "examples": [
          {
            "en": "The price tag says $29.99.",
            "zh": "价格标签上写着29.99美元。"
          }
        ]
      },
      {
        "id": "cash-register",
        "word": "cash register",
        "phonetic": "/kæʃ ˈredʒɪstər/",
        "translation": "收银机",
        "emoji": "🖥️",
        "examples": [
          {
            "en": "The cashier rang up the items.",
            "zh": "收银员扫描了商品。"
          }
        ]
      },
      {
        "id": "iron",
        "word": "iron",
        "phonetic": "/ˈaɪərn/",
        "translation": "熨斗",
        "emoji": "🧴",
        "examples": [
          {
            "en": "I need to iron my shirt.",
            "zh": "我需要熨衬衫。"
          }
        ]
      },
      {
        "id": "washing-machine",
        "word": "washing machine",
        "phonetic": "/ˈwɒʃɪŋ məʃiːn/",
        "translation": "洗衣机",
        "emoji": "🧺",
        "examples": [
          {
            "en": "Put the clothes in the washing machine.",
            "zh": "把衣服放进洗衣机。"
          }
        ]
      }
    ]
  },
  {
    "id": "office",
    "name": "职场工作",
    "nameEn": "Office & Work",
    "emoji": "💼",
    "color": "#845EC2",
    "words": [
      {
        "id": "doctor-occ",
        "word": "doctor",
        "phonetic": "/ˈdɒktər/",
        "translation": "医生",
        "emoji": "🧑‍⚕️",
        "examples": [
          {
            "en": "The doctor works at the city hospital.",
            "zh": "这位医生在市医院工作。"
          }
        ]
      },
      {
        "id": "teacher-occ",
        "word": "teacher",
        "phonetic": "/ˈtiːtʃər/",
        "translation": "老师",
        "emoji": "👩‍🏫",
        "examples": [
          {
            "en": "She has been a teacher for twenty years.",
            "zh": "她做了二十年老师。"
          }
        ]
      },
      {
        "id": "engineer",
        "word": "engineer",
        "phonetic": "/ˌendʒɪˈnɪər/",
        "translation": "工程师",
        "emoji": "🧑‍💻",
        "examples": [
          {
            "en": "He works as a software engineer.",
            "zh": "他是软件工程师。"
          }
        ]
      },
      {
        "id": "nurse-occ",
        "word": "nurse",
        "phonetic": "/nɜːrs/",
        "translation": "护士",
        "emoji": "👩‍⚕️",
        "examples": [
          {
            "en": "The nurse took my temperature.",
            "zh": "护士量了体温。"
          }
        ]
      },
      {
        "id": "lawyer",
        "word": "lawyer",
        "phonetic": "/ˈlɔːjər/",
        "translation": "律师",
        "emoji": "⚖️",
        "examples": [
          {
            "en": "The lawyer presented evidence in court.",
            "zh": "律师在法庭上出示证据。"
          }
        ]
      },
      {
        "id": "accountant",
        "word": "accountant",
        "phonetic": "/əˈkaʊntənt/",
        "translation": "会计",
        "emoji": "🧮",
        "examples": [
          {
            "en": "The accountant prepares tax returns.",
            "zh": "会计负责报税。"
          }
        ]
      },
      {
        "id": "manager",
        "word": "manager",
        "phonetic": "/ˈmænɪdʒər/",
        "translation": "经理；主管",
        "emoji": "👔",
        "examples": [
          {
            "en": "I need to discuss this with my manager.",
            "zh": "我需要和经理讨论。"
          }
        ]
      },
      {
        "id": "desk",
        "word": "desk",
        "phonetic": "/desk/",
        "translation": "办公桌",
        "emoji": "🪑",
        "examples": [
          {
            "en": "My desk is covered in paperwork.",
            "zh": "办公桌上堆满了文件。"
          }
        ]
      },
      {
        "id": "computer",
        "word": "computer",
        "phonetic": "/kəmˈpjuːtər/",
        "translation": "电脑",
        "emoji": "💻",
        "examples": [
          {
            "en": "I spend most of the day at my computer.",
            "zh": "我大部分时间在电脑前。"
          }
        ]
      },
      {
        "id": "printer",
        "word": "printer",
        "phonetic": "/ˈprɪntər/",
        "translation": "打印机",
        "emoji": "🖨️",
        "examples": [
          {
            "en": "The printer is out of paper again.",
            "zh": "打印机又没纸了。"
          }
        ]
      },
      {
        "id": "meeting",
        "word": "meeting",
        "phonetic": "/ˈmiːtɪŋ/",
        "translation": "会议",
        "emoji": "📊",
        "examples": [
          {
            "en": "We have a team meeting every Monday.",
            "zh": "每周一开团队会议。"
          }
        ]
      },
      {
        "id": "deadline",
        "word": "deadline",
        "phonetic": "/ˈdedlaɪn/",
        "translation": "截止日期",
        "emoji": "📅",
        "examples": [
          {
            "en": "The deadline is next Friday.",
            "zh": "截止日期是下周五。"
          }
        ]
      },
      {
        "id": "presentation",
        "word": "presentation",
        "phonetic": "/ˌpreznˈteɪʃn/",
        "translation": "演示；汇报",
        "emoji": "📺",
        "examples": [
          {
            "en": "I have to give a presentation at the conference.",
            "zh": "我必须在会议上做演示。"
          }
        ]
      },
      {
        "id": "report",
        "word": "report",
        "phonetic": "/rɪˈpɔːrt/",
        "translation": "报告",
        "emoji": "📄",
        "examples": [
          {
            "en": "I need to finish this report by today.",
            "zh": "我今天要完成报告。"
          }
        ]
      },
      {
        "id": "email",
        "word": "email",
        "phonetic": "/ˈiːmeɪl/",
        "translation": "电子邮件",
        "emoji": "📧",
        "examples": [
          {
            "en": "I sent you an email this morning.",
            "zh": "我今天早上发了邮件。"
          }
        ]
      },
      {
        "id": "salary",
        "word": "salary",
        "phonetic": "/ˈsæləri/",
        "translation": "薪水",
        "emoji": "💰",
        "examples": [
          {
            "en": "The job offers a competitive salary.",
            "zh": "这份工作薪水有竞争力。"
          }
        ]
      },
      {
        "id": "promotion",
        "word": "promotion",
        "phonetic": "/prəˈməʊʃn/",
        "translation": "升职",
        "emoji": "📈",
        "examples": [
          {
            "en": "She got a promotion after two years.",
            "zh": "她两年后升职了。"
          }
        ]
      },
      {
        "id": "overtime",
        "word": "overtime",
        "phonetic": "/ˈəʊvərtaɪm/",
        "translation": "加班",
        "emoji": "🌙",
        "examples": [
          {
            "en": "I've been working overtime all week.",
            "zh": "我整周都在加班。"
          }
        ]
      },
      {
        "id": "commute",
        "word": "commute",
        "phonetic": "/kəˈmjuːt/",
        "translation": "通勤",
        "emoji": "🚇",
        "examples": [
          {
            "en": "My commute takes about 40 minutes.",
            "zh": "通勤大约40分钟。"
          }
        ]
      },
      {
        "id": "colleague",
        "word": "colleague / coworker",
        "phonetic": "/ˈkɒliːɡ/ /ˈkəʊwɜːrkər/",
        "translation": "同事",
        "emoji": "👥",
        "examples": [
          {
            "en": "I work closely with my colleagues.",
            "zh": "我和同事们密切合作。"
          }
        ]
      },
      {
        "id": "boss",
        "word": "boss",
        "phonetic": "/bɒs/",
        "translation": "老板",
        "emoji": "🧑‍💼",
        "examples": [
          {
            "en": "My boss is very understanding.",
            "zh": "我的老板很通情达理。"
          }
        ]
      },
      {
        "id": "raise",
        "word": "pay raise",
        "phonetic": "/peɪ reɪz/",
        "translation": "加薪",
        "emoji": "📈",
        "examples": [
          {
            "en": "She asked for a pay raise.",
            "zh": "她要求加薪。"
          }
        ]
      },
      {
        "id": "interview",
        "word": "job interview",
        "phonetic": "/dʒɒb ˈɪntərvjuː/",
        "translation": "面试",
        "emoji": "🤝",
        "examples": [
          {
            "en": "I have a job interview tomorrow.",
            "zh": "我明天有面试。"
          }
        ]
      },
      {
        "id": "resume",
        "word": "resume / CV",
        "phonetic": "/rɪˈzjuːm/ /ˌsiː ˈviː/",
        "translation": "简历",
        "emoji": "📄",
        "examples": [
          {
            "en": "Please send your resume.",
            "zh": "请发送简历。"
          }
        ]
      },
      {
        "id": "quit",
        "word": "quit / resign",
        "phonetic": "/kwɪt/ /rɪˈzaɪn/",
        "translation": "辞职",
        "emoji": "🚪",
        "examples": [
          {
            "en": "He quit his job.",
            "zh": "他辞职了。"
          }
        ]
      },
      {
        "id": "stationery",
        "word": "stationery",
        "phonetic": "/ˈsteɪʃənəri/",
        "translation": "文具",
        "emoji": "✏️",
        "examples": [
          {
            "en": "Order some stationery for the office.",
            "zh": "为办公室订购文具。"
          }
        ]
      },
      {
        "id": "photocopy",
        "word": "photocopy",
        "phonetic": "/ˈfəʊtəkɒpi/",
        "translation": "复印",
        "emoji": "📄",
        "examples": [
          {
            "en": "Make a photocopy of this document.",
            "zh": "复印这份文件。"
          }
        ]
      },
      {
        "id": "agenda",
        "word": "agenda",
        "phonetic": "/əˈdʒendə/",
        "translation": "议程",
        "emoji": "📝",
        "examples": [
          {
            "en": "What's on the agenda?",
            "zh": "议程上有什么？"
          }
        ]
      },
      {
        "id": "feedback",
        "word": "feedback",
        "phonetic": "/ˈfiːdbæk/",
        "translation": "反馈",
        "emoji": "💬",
        "examples": [
          {
            "en": "I appreciate your feedback.",
            "zh": "感谢你的反馈。"
          }
        ]
      }
    ]
  },
  {
    "id": "community",
    "name": "社区城市",
    "nameEn": "Community & City",
    "emoji": "🏙️",
    "color": "#00B894",
    "words": [
      {
        "id": "park",
        "word": "park",
        "phonetic": "/pɑːrk/",
        "translation": "公园",
        "emoji": "🌳",
        "examples": [
          {
            "en": "We go for a walk in the park every evening.",
            "zh": "我们每晚去公园散步。"
          }
        ]
      },
      {
        "id": "bank",
        "word": "bank",
        "phonetic": "/bæŋk/",
        "translation": "银行",
        "emoji": "🏦",
        "examples": [
          {
            "en": "I need to go to the bank to deposit money.",
            "zh": "我需要去银行存钱。"
          }
        ]
      },
      {
        "id": "post-office",
        "word": "post office",
        "phonetic": "/pəʊst ˈɒfɪs/",
        "translation": "邮局",
        "emoji": "🏣",
        "examples": [
          {
            "en": "I sent a package at the post office.",
            "zh": "我在邮局寄了包裹。"
          }
        ]
      },
      {
        "id": "library-comm",
        "word": "library",
        "phonetic": "/ˈlaɪbrəri/",
        "translation": "图书馆",
        "emoji": "📚",
        "examples": [
          {
            "en": "I borrowed three books from the library.",
            "zh": "我从图书馆借了三本书。"
          }
        ]
      },
      {
        "id": "museum",
        "word": "museum",
        "phonetic": "/mjuˈziːəm/",
        "translation": "博物馆",
        "emoji": "🏛️",
        "examples": [
          {
            "en": "The museum has a wonderful art collection.",
            "zh": "博物馆有很棒的艺术收藏。"
          }
        ]
      },
      {
        "id": "hospital",
        "word": "hospital",
        "phonetic": "/ˈhɒspɪtl/",
        "translation": "医院",
        "emoji": "🏥",
        "examples": [
          {
            "en": "She was taken to the hospital by ambulance.",
            "zh": "她被救护车送到医院。"
          }
        ]
      },
      {
        "id": "pharmacy",
        "word": "pharmacy / drugstore",
        "phonetic": "/ˈfɑːrməsi/ /ˈdrʌɡstɔːr/",
        "translation": "药房",
        "emoji": "💊",
        "examples": [
          {
            "en": "You can buy medicine at the pharmacy.",
            "zh": "你可以在药房买药。"
          }
        ]
      },
      {
        "id": "supermarket",
        "word": "supermarket",
        "phonetic": "/ˈsuːpərmɑːrkɪt/",
        "translation": "超市",
        "emoji": "🛒",
        "examples": [
          {
            "en": "I do my grocery shopping at the supermarket.",
            "zh": "我去超市买日用品。"
          }
        ]
      },
      {
        "id": "gym-comm",
        "word": "gym",
        "phonetic": "/dʒɪm/",
        "translation": "健身房",
        "emoji": "🏋️",
        "examples": [
          {
            "en": "I go to the gym three times a week.",
            "zh": "我每周去健身房三次。"
          }
        ]
      },
      {
        "id": "bus-stop",
        "word": "bus stop",
        "phonetic": "/bʌs stɒp/",
        "translation": "公交车站",
        "emoji": "🚏",
        "examples": [
          {
            "en": "Wait for the bus at the bus stop.",
            "zh": "在公交站等车。"
          }
        ]
      },
      {
        "id": "crosswalk",
        "word": "crosswalk",
        "phonetic": "/ˈkrɒswɔːk/",
        "translation": "人行横道",
        "emoji": "🚶",
        "examples": [
          {
            "en": "Always cross at the crosswalk.",
            "zh": "过马路走人行横道。"
          }
        ]
      },
      {
        "id": "traffic-light",
        "word": "traffic light",
        "phonetic": "/ˈtræfɪk laɪt/",
        "translation": "红绿灯",
        "emoji": "🚦",
        "examples": [
          {
            "en": "Stop when the light is red.",
            "zh": "红灯时停下来。"
          }
        ]
      },
      {
        "id": "neighbor",
        "word": "neighbor",
        "phonetic": "/ˈneɪbər/",
        "translation": "邻居",
        "emoji": "🧑‍🤝‍🧑",
        "examples": [
          {
            "en": "Our neighbors are very friendly.",
            "zh": "我们的邻居很友好。"
          }
        ]
      },
      {
        "id": "downtown",
        "word": "downtown",
        "phonetic": "/ˌdaʊnˈtaʊn/",
        "translation": "市中心",
        "emoji": "🏙️",
        "examples": [
          {
            "en": "Downtown is busy and crowded.",
            "zh": "市中心繁忙而拥挤。"
          }
        ]
      },
      {
        "id": "square",
        "word": "square / plaza",
        "phonetic": "/skweər/ /ˈplɑːzə/",
        "translation": "广场",
        "emoji": "🏛️",
        "examples": [
          {
            "en": "There's a fountain in the square.",
            "zh": "广场上有一个喷泉。"
          }
        ]
      },
      {
        "id": "stadium",
        "word": "stadium",
        "phonetic": "/ˈsteɪdiəm/",
        "translation": "体育场",
        "emoji": "🏟️",
        "examples": [
          {
            "en": "The concert was at the stadium.",
            "zh": "音乐会在体育场举行。"
          }
        ]
      },
      {
        "id": "cafe",
        "word": "cafe / coffee shop",
        "phonetic": "/ˈkæfeɪ/ /ˈkɒfi ʃɒp/",
        "translation": "咖啡馆",
        "emoji": "☕",
        "examples": [
          {
            "en": "Let's meet at the coffee shop.",
            "zh": "我们在咖啡馆见面吧。"
          }
        ]
      },
      {
        "id": "parking-lot",
        "word": "parking lot",
        "phonetic": "/ˈpɑːrkɪŋ lɒt/",
        "translation": "停车场",
        "emoji": "🅿️",
        "examples": [
          {
            "en": "I parked in the parking lot.",
            "zh": "我把车停在停车场。"
          }
        ]
      },
      {
        "id": "barber",
        "word": "barber shop",
        "phonetic": "/ˈbɑːrbər ʃɒp/",
        "translation": "理发店",
        "emoji": "💈",
        "examples": [
          {
            "en": "I need a haircut at the barber shop.",
            "zh": "我需要去理发店剪头发。"
          }
        ]
      },
      {
        "id": "fire-station",
        "word": "fire station",
        "phonetic": "/ˈfaɪər ˈsteɪʃn/",
        "translation": "消防站",
        "emoji": "🚒",
        "examples": [
          {
            "en": "The fire station is around the corner.",
            "zh": "消防站就在拐角处。"
          }
        ]
      },
      {
        "id": "school-comm",
        "word": "school",
        "phonetic": "/skuːl/",
        "translation": "学校",
        "emoji": "🏫",
        "examples": [
          {
            "en": "The school is near my home.",
            "zh": "学校在我家附近。"
          }
        ]
      },
      {
        "id": "restaurant-comm",
        "word": "restaurant",
        "phonetic": "/ˈrestrɒnt/",
        "translation": "餐厅",
        "emoji": "🍽️",
        "examples": [
          {
            "en": "There's a new Italian restaurant.",
            "zh": "新开了一家意大利餐厅。"
          }
        ]
      }
    ]
  },
  {
    "id": "services",
    "name": "公共服务",
    "nameEn": "Services & Emergencies",
    "emoji": "🏦",
    "color": "#636E72",
    "words": [
      {
        "id": "police-officer",
        "word": "police officer",
        "phonetic": "/pəˈliːs ˈɒfɪsər/",
        "translation": "警察",
        "emoji": "👮",
        "examples": [
          {
            "en": "The police officer directed traffic.",
            "zh": "警察在指挥交通。"
          }
        ]
      },
      {
        "id": "firefighter",
        "word": "firefighter",
        "phonetic": "/ˈfaɪərfaɪtər/",
        "translation": "消防员",
        "emoji": "👨‍🚒",
        "examples": [
          {
            "en": "The firefighters put out the fire.",
            "zh": "消防员扑灭了火。"
          }
        ]
      },
      {
        "id": "ambulance",
        "word": "ambulance",
        "phonetic": "/ˈæmbjələns/",
        "translation": "救护车",
        "emoji": "🚑",
        "examples": [
          {
            "en": "Someone call an ambulance!",
            "zh": "快叫救护车！"
          }
        ]
      },
      {
        "id": "emergency",
        "word": "emergency",
        "phonetic": "/ɪˈmɜːrdʒənsi/",
        "translation": "紧急情况",
        "emoji": "🆘",
        "examples": [
          {
            "en": "In case of emergency, dial 911.",
            "zh": "紧急情况拨打911。"
          }
        ]
      },
      {
        "id": "crime",
        "word": "crime",
        "phonetic": "/kraɪm/",
        "translation": "犯罪",
        "emoji": "🚨",
        "examples": [
          {
            "en": "The crime rate has decreased.",
            "zh": "犯罪率下降了。"
          }
        ]
      },
      {
        "id": "law",
        "word": "law",
        "phonetic": "/lɔː/",
        "translation": "法律",
        "emoji": "⚖️",
        "examples": [
          {
            "en": "It is against the law to steal.",
            "zh": "偷窃是违法的。"
          }
        ]
      },
      {
        "id": "court",
        "word": "court",
        "phonetic": "/kɔːrt/",
        "translation": "法庭",
        "emoji": "⚖️",
        "examples": [
          {
            "en": "The case will be heard in court.",
            "zh": "这个案子将开庭审理。"
          }
        ]
      },
      {
        "id": "stamp",
        "word": "stamp",
        "phonetic": "/stæmp/",
        "translation": "邮票",
        "emoji": "📮",
        "examples": [
          {
            "en": "I need a stamp for this postcard.",
            "zh": "我需要一张邮票。"
          }
        ]
      },
      {
        "id": "package",
        "word": "package / parcel",
        "phonetic": "/ˈpækɪdʒ/ /ˈpɑːrsl/",
        "translation": "包裹",
        "emoji": "📦",
        "examples": [
          {
            "en": "I received a package from my sister.",
            "zh": "我收到了姐姐的包裹。"
          }
        ]
      },
      {
        "id": "police-car",
        "word": "police car",
        "phonetic": "/pəˈliːs kɑːr/",
        "translation": "警车",
        "emoji": "🚔",
        "examples": [
          {
            "en": "The police car chased the thief.",
            "zh": "警车追捕小偷。"
          }
        ]
      },
      {
        "id": "insurance",
        "word": "insurance",
        "phonetic": "/ɪnˈʃʊərəns/",
        "translation": "保险",
        "emoji": "🛡️",
        "examples": [
          {
            "en": "You should have health insurance.",
            "zh": "你应该有健康保险。"
          }
        ]
      },
      {
        "id": "mailbox",
        "word": "mailbox",
        "phonetic": "/ˈmeɪlbɒks/",
        "translation": "邮箱",
        "emoji": "📮",
        "examples": [
          {
            "en": "I dropped the letter in the mailbox.",
            "zh": "我把信投进了邮箱。"
          }
        ]
      },
      {
        "id": "delivery",
        "word": "delivery",
        "phonetic": "/dɪˈlɪvəri/",
        "translation": "投递",
        "emoji": "📬",
        "examples": [
          {
            "en": "The delivery takes 3 days.",
            "zh": "投递需要3天。"
          }
        ]
      }
    ]
  },
  {
    "id": "health",
    "name": "健康医疗",
    "nameEn": "Health & Medical",
    "emoji": "🏥",
    "color": "#D63031",
    "words": [
      {
        "id": "head",
        "word": "head",
        "phonetic": "/hed/",
        "translation": "头",
        "emoji": "😵",
        "examples": [
          {
            "en": "I have a pain in my head.",
            "zh": "我头痛。"
          }
        ]
      },
      {
        "id": "throat",
        "word": "throat",
        "phonetic": "/θrəʊt/",
        "translation": "喉咙",
        "emoji": "🫁",
        "examples": [
          {
            "en": "My throat hurts when I swallow.",
            "zh": "吞咽时喉咙痛。"
          }
        ]
      },
      {
        "id": "stomach",
        "word": "stomach",
        "phonetic": "/ˈstʌmək/",
        "translation": "胃；肚子",
        "emoji": "🤰",
        "examples": [
          {
            "en": "I ate too much and my stomach hurts.",
            "zh": "吃太多肚子疼。"
          }
        ]
      },
      {
        "id": "back-body",
        "word": "back",
        "phonetic": "/bæk/",
        "translation": "背",
        "emoji": "🧍",
        "examples": [
          {
            "en": "My back aches from sitting all day.",
            "zh": "坐一天背很酸。"
          }
        ]
      },
      {
        "id": "shoulder",
        "word": "shoulder",
        "phonetic": "/ˈʃəʊldər/",
        "translation": "肩膀",
        "emoji": "💪",
        "examples": [
          {
            "en": "He injured his shoulder playing tennis.",
            "zh": "他打网球伤了肩膀。"
          }
        ]
      },
      {
        "id": "knee",
        "word": "knee",
        "phonetic": "/niː/",
        "translation": "膝盖",
        "emoji": "🦵",
        "examples": [
          {
            "en": "My knee hurts when I run.",
            "zh": "跑步时膝盖疼。"
          }
        ]
      },
      {
        "id": "fever",
        "word": "fever",
        "phonetic": "/ˈfiːvər/",
        "translation": "发烧",
        "emoji": "🤒",
        "examples": [
          {
            "en": "She has a high fever.",
            "zh": "她发高烧了。"
          }
        ]
      },
      {
        "id": "cough",
        "word": "cough",
        "phonetic": "/kɒf/",
        "translation": "咳嗽",
        "emoji": "🤧",
        "examples": [
          {
            "en": "I've had a bad cough for three days.",
            "zh": "我咳嗽三天了。"
          }
        ]
      },
      {
        "id": "headache",
        "word": "headache",
        "phonetic": "/ˈhedeɪk/",
        "translation": "头痛",
        "emoji": "😣",
        "examples": [
          {
            "en": "I have a terrible headache.",
            "zh": "我头痛得厉害。"
          }
        ]
      },
      {
        "id": "cold-flu",
        "word": "cold (flu)",
        "phonetic": "/kəʊld/ /fluː/",
        "translation": "感冒；流感",
        "emoji": "🤧",
        "examples": [
          {
            "en": "I think I'm catching a cold.",
            "zh": "我觉得要感冒了。"
          }
        ]
      },
      {
        "id": "sore-throat",
        "word": "sore throat",
        "phonetic": "/sɔːr θrəʊt/",
        "translation": "喉咙痛",
        "emoji": "🥵",
        "examples": [
          {
            "en": "Drink tea with honey for your sore throat.",
            "zh": "喝蜂蜜茶缓解喉咙痛。"
          }
        ]
      },
      {
        "id": "stomachache",
        "word": "stomachache",
        "phonetic": "/ˈstʌməkeɪk/",
        "translation": "肚子痛",
        "emoji": "🤢",
        "examples": [
          {
            "en": "I got a stomachache after eating street food.",
            "zh": "吃了路边摊肚子疼。"
          }
        ]
      },
      {
        "id": "prescription",
        "word": "prescription",
        "phonetic": "/prɪˈskrɪpʃn/",
        "translation": "处方",
        "emoji": "📋",
        "examples": [
          {
            "en": "The doctor gave me a prescription.",
            "zh": "医生开了处方。"
          }
        ]
      },
      {
        "id": "medicine",
        "word": "medicine",
        "phonetic": "/ˈmedɪsn/",
        "translation": "药；药物",
        "emoji": "💊",
        "examples": [
          {
            "en": "Take this medicine three times a day.",
            "zh": "每日三次服药。"
          }
        ]
      },
      {
        "id": "vaccine",
        "word": "vaccine",
        "phonetic": "/ˈvæksiːn/",
        "translation": "疫苗",
        "emoji": "💉",
        "examples": [
          {
            "en": "Have you had your flu vaccine?",
            "zh": "你打了流感疫苗吗？"
          }
        ]
      },
      {
        "id": "soap",
        "word": "soap",
        "phonetic": "/səʊp/",
        "translation": "肥皂",
        "emoji": "🧼",
        "examples": [
          {
            "en": "Wash your hands with soap and water.",
            "zh": "用肥皂和水洗手。"
          }
        ]
      },
      {
        "id": "shampoo",
        "word": "shampoo",
        "phonetic": "/ʃæmˈpuː/",
        "translation": "洗发水",
        "emoji": "🧴",
        "examples": [
          {
            "en": "I'm running out of shampoo.",
            "zh": "洗发水快用完了。"
          }
        ]
      },
      {
        "id": "toothpaste",
        "word": "toothpaste",
        "phonetic": "/ˈtuːθpeɪst/",
        "translation": "牙膏",
        "emoji": "🧴",
        "examples": [
          {
            "en": "Squeeze toothpaste onto your toothbrush.",
            "zh": "把牙膏挤到牙刷上。"
          }
        ]
      },
      {
        "id": "patient-h",
        "word": "patient",
        "phonetic": "/ˈpeɪʃnt/",
        "translation": "病人",
        "emoji": "🧑‍⚕️",
        "examples": [
          {
            "en": "The patient is recovering well.",
            "zh": "病人恢复得很好。"
          }
        ]
      },
      {
        "id": "sunscreen",
        "word": "sunscreen",
        "phonetic": "/ˈsʌnskriːn/",
        "translation": "防晒霜",
        "emoji": "🧴",
        "examples": [
          {
            "en": "Apply sunscreen before going to the beach.",
            "zh": "去海滩前涂防晒霜。"
          }
        ]
      },
      {
        "id": "tissue",
        "word": "tissue",
        "phonetic": "/ˈtɪʃuː/",
        "translation": "纸巾",
        "emoji": "🧻",
        "examples": [
          {
            "en": "Can you pass me a tissue?",
            "zh": "能递我一张纸巾吗？"
          }
        ]
      },
      {
        "id": "sneeze",
        "word": "sneeze",
        "phonetic": "/sniːz/",
        "translation": "打喷嚏",
        "emoji": "🤧",
        "examples": [
          {
            "en": "Cover your mouth when you sneeze.",
            "zh": "打喷嚏时捂住嘴。"
          }
        ]
      },
      {
        "id": "ankle",
        "word": "ankle",
        "phonetic": "/ˈæŋkl/",
        "translation": "脚踝",
        "emoji": "🦶",
        "examples": [
          {
            "en": "I twisted my ankle while running.",
            "zh": "我跑步时扭了脚踝。"
          }
        ]
      },
      {
        "id": "wrist",
        "word": "wrist",
        "phonetic": "/rɪst/",
        "translation": "手腕",
        "emoji": "✋",
        "examples": [
          {
            "en": "My wrist hurts from typing.",
            "zh": "打字太多手腕疼。"
          }
        ]
      },
      {
        "id": "allergy",
        "word": "allergy",
        "phonetic": "/ˈælərdʒi/",
        "translation": "过敏",
        "emoji": "🤧",
        "examples": [
          {
            "en": "I have an allergy to peanuts.",
            "zh": "我对花生过敏。"
          }
        ]
      },
      {
        "id": "dentist",
        "word": "dentist",
        "phonetic": "/ˈdentɪst/",
        "translation": "牙医",
        "emoji": "🦷",
        "examples": [
          {
            "en": "I have an appointment with the dentist.",
            "zh": "我约了牙医。"
          }
        ]
      }
    ]
  },
  {
    "id": "school",
    "name": "学习教育",
    "nameEn": "School & Education",
    "emoji": "📚",
    "color": "#6C5CE7",
    "words": [
      {
        "id": "kindergarten",
        "word": "kindergarten",
        "phonetic": "/ˈkɪndərɡɑːrtn/",
        "translation": "幼儿园",
        "emoji": "🧒",
        "examples": [
          {
            "en": "My son started kindergarten this year.",
            "zh": "我儿子今年上幼儿园。"
          }
        ]
      },
      {
        "id": "elementary-school",
        "word": "elementary school",
        "phonetic": "/ˌelɪˈmentri skuːl/",
        "translation": "小学",
        "emoji": "🏫",
        "examples": [
          {
            "en": "She goes to the local elementary school.",
            "zh": "她就读于本地小学。"
          }
        ]
      },
      {
        "id": "high-school",
        "word": "high school",
        "phonetic": "/haɪ skuːl/",
        "translation": "中学；高中",
        "emoji": "🏫",
        "examples": [
          {
            "en": "He is a high school student.",
            "zh": "他是一名高中生。"
          }
        ]
      },
      {
        "id": "university",
        "word": "university / college",
        "phonetic": "/ˌjuːnɪˈvɜːrsəti/ /ˈkɒlɪdʒ/",
        "translation": "大学",
        "emoji": "🎓",
        "examples": [
          {
            "en": "She is studying at the university.",
            "zh": "她在大学读书。"
          }
        ]
      },
      {
        "id": "classroom",
        "word": "classroom",
        "phonetic": "/ˈklɑːsruːm/",
        "translation": "教室",
        "emoji": "🏫",
        "examples": [
          {
            "en": "There are 30 desks in the classroom.",
            "zh": "教室里有30张书桌。"
          }
        ]
      },
      {
        "id": "homework",
        "word": "homework / assignment",
        "phonetic": "/ˈhəʊmwɜːrk/ /əˈsaɪnmənt/",
        "translation": "作业",
        "emoji": "📝",
        "examples": [
          {
            "en": "I have a lot of homework to do.",
            "zh": "我有很多作业。"
          }
        ]
      },
      {
        "id": "exam",
        "word": "exam / test",
        "phonetic": "/ɪɡˈzæm/ /test/",
        "translation": "考试",
        "emoji": "📄",
        "examples": [
          {
            "en": "The final exam is next week.",
            "zh": "期末考试下周。"
          }
        ]
      },
      {
        "id": "grade",
        "word": "grade / score",
        "phonetic": "/ɡreɪd/ /skɔːr/",
        "translation": "成绩",
        "emoji": "⭐",
        "examples": [
          {
            "en": "She got good grades this semester.",
            "zh": "她这学期成绩好。"
          }
        ]
      },
      {
        "id": "math",
        "word": "math / mathematics",
        "phonetic": "/mæθ/ /ˌmæθəˈmætɪks/",
        "translation": "数学",
        "emoji": "🔢",
        "examples": [
          {
            "en": "Math is my favorite subject.",
            "zh": "数学是我最喜欢的科目。"
          }
        ]
      },
      {
        "id": "english",
        "word": "English",
        "phonetic": "/ˈɪŋɡlɪʃ/",
        "translation": "英语",
        "emoji": "🔤",
        "examples": [
          {
            "en": "I practice English by watching movies.",
            "zh": "我看电影练英语。"
          }
        ]
      },
      {
        "id": "science",
        "word": "science",
        "phonetic": "/ˈsaɪəns/",
        "translation": "科学",
        "emoji": "🔬",
        "examples": [
          {
            "en": "We did an experiment in science class.",
            "zh": "科学课上做了实验。"
          }
        ]
      },
      {
        "id": "history",
        "word": "history",
        "phonetic": "/ˈhɪstri/",
        "translation": "历史",
        "emoji": "📜",
        "examples": [
          {
            "en": "I find history fascinating.",
            "zh": "我觉得历史很有趣。"
          }
        ]
      },
      {
        "id": "study-v",
        "word": "study",
        "phonetic": "/ˈstʌdi/",
        "translation": "学习",
        "emoji": "📖",
        "examples": [
          {
            "en": "I need to study for the exam.",
            "zh": "我需要为考试学习。"
          }
        ]
      },
      {
        "id": "memorize",
        "word": "memorize",
        "phonetic": "/ˈmeməraɪz/",
        "translation": "记住；背诵",
        "emoji": "🧠",
        "examples": [
          {
            "en": "I need to memorize these words.",
            "zh": "我需要记住这些词。"
          }
        ]
      },
      {
        "id": "scholarship",
        "word": "scholarship",
        "phonetic": "/ˈskɒlərʃɪp/",
        "translation": "奖学金",
        "emoji": "🏆",
        "examples": [
          {
            "en": "She won a scholarship to study abroad.",
            "zh": "她获得了出国奖学金。"
          }
        ]
      },
      {
        "id": "graduation",
        "word": "graduation",
        "phonetic": "/ˌɡrædʒuˈeɪʃn/",
        "translation": "毕业",
        "emoji": "🎓",
        "examples": [
          {
            "en": "Graduation day was the happiest day.",
            "zh": "毕业那天最开心。"
          }
        ]
      },
      {
        "id": "backpack",
        "word": "backpack",
        "phonetic": "/ˈbækpæk/",
        "translation": "书包",
        "emoji": "🎒",
        "examples": [
          {
            "en": "Don't forget your backpack.",
            "zh": "别忘了背书包。"
          }
        ]
      },
      {
        "id": "physics",
        "word": "physics",
        "phonetic": "/ˈfɪzɪks/",
        "translation": "物理",
        "emoji": "⚛️",
        "examples": [
          {
            "en": "I study physics and chemistry.",
            "zh": "我学物理和化学。"
          }
        ]
      },
      {
        "id": "chemistry",
        "word": "chemistry",
        "phonetic": "/ˈkemɪstri/",
        "translation": "化学",
        "emoji": "🧪",
        "examples": [
          {
            "en": "We did a chemistry experiment.",
            "zh": "我们做了化学实验。"
          }
        ]
      },
      {
        "id": "principal",
        "word": "principal",
        "phonetic": "/ˈprɪnsəpl/",
        "translation": "校长",
        "emoji": "🧑‍🏫",
        "examples": [
          {
            "en": "The principal gave a speech.",
            "zh": "校长发表了讲话。"
          }
        ]
      },
      {
        "id": "playground",
        "word": "playground",
        "phonetic": "/ˈpleɪɡraʊnd/",
        "translation": "操场",
        "emoji": "🏃",
        "examples": [
          {
            "en": "Children are playing on the playground.",
            "zh": "孩子们在操场上玩耍。"
          }
        ]
      },
      {
        "id": "dormitory",
        "word": "dormitory / dorm",
        "phonetic": "/ˈdɔːrmətri/ /dɔːrm/",
        "translation": "宿舍",
        "emoji": "🛏️",
        "examples": [
          {
            "en": "I lived in a dormitory in my first year.",
            "zh": "大学第一年我住宿舍。"
          }
        ]
      },
      {
        "id": "tuition",
        "word": "tuition",
        "phonetic": "/tjuˈɪʃn/",
        "translation": "学费",
        "emoji": "💰",
        "examples": [
          {
            "en": "Tuition fees have gone up.",
            "zh": "学费涨了。"
          }
        ]
      }
    ]
  },
  {
    "id": "sports",
    "name": "运动休闲",
    "nameEn": "Sports & Hobbies",
    "emoji": "🏃",
    "color": "#00B894",
    "words": [
      {
        "id": "football",
        "word": "football / soccer",
        "phonetic": "/ˈfʊtbɔːl/ /ˈsɒkər/",
        "translation": "足球",
        "emoji": "⚽",
        "examples": [
          {
            "en": "He plays football every Saturday.",
            "zh": "他每周六踢足球。"
          }
        ]
      },
      {
        "id": "basketball",
        "word": "basketball",
        "phonetic": "/ˈbɑːskɪtbɔːl/",
        "translation": "篮球",
        "emoji": "🏀",
        "examples": [
          {
            "en": "The basketball court is behind the school.",
            "zh": "篮球场在学校后面。"
          }
        ]
      },
      {
        "id": "swimming",
        "word": "swimming",
        "phonetic": "/ˈswɪmɪŋ/",
        "translation": "游泳",
        "emoji": "🏊",
        "examples": [
          {
            "en": "Swimming is a great workout.",
            "zh": "游泳是很好的运动。"
          }
        ]
      },
      {
        "id": "running",
        "word": "running / jogging",
        "phonetic": "/ˈrʌnɪŋ/ /ˈdʒɒɡɪŋ/",
        "translation": "跑步；慢跑",
        "emoji": "🏃",
        "examples": [
          {
            "en": "I go jogging every morning.",
            "zh": "我每天早上慢跑。"
          }
        ]
      },
      {
        "id": "cycling",
        "word": "cycling",
        "phonetic": "/ˈsaɪklɪŋ/",
        "translation": "骑自行车",
        "emoji": "🚴",
        "examples": [
          {
            "en": "Cycling is great for the countryside.",
            "zh": "骑车适合探索乡村。"
          }
        ]
      },
      {
        "id": "tennis",
        "word": "tennis",
        "phonetic": "/ˈtenɪs/",
        "translation": "网球",
        "emoji": "🎾",
        "examples": [
          {
            "en": "We play tennis every Sunday.",
            "zh": "我们每周日打网球。"
          }
        ]
      },
      {
        "id": "yoga",
        "word": "yoga",
        "phonetic": "/ˈjəʊɡə/",
        "translation": "瑜伽",
        "emoji": "🧘",
        "examples": [
          {
            "en": "I do yoga for 20 minutes every morning.",
            "zh": "我每天做20分钟瑜伽。"
          }
        ]
      },
      {
        "id": "hiking",
        "word": "hiking",
        "phonetic": "/ˈhaɪkɪŋ/",
        "translation": "徒步",
        "emoji": "🥾",
        "examples": [
          {
            "en": "We went hiking in the mountains.",
            "zh": "我们去山里徒步了。"
          }
        ]
      },
      {
        "id": "badminton",
        "word": "badminton",
        "phonetic": "/ˈbædmɪntən/",
        "translation": "羽毛球",
        "emoji": "🏸",
        "examples": [
          {
            "en": "Badminton is very popular in Asia.",
            "zh": "羽毛球在亚洲很流行。"
          }
        ]
      },
      {
        "id": "reading",
        "word": "reading",
        "phonetic": "/ˈriːdɪŋ/",
        "translation": "阅读",
        "emoji": "📖",
        "examples": [
          {
            "en": "I enjoy reading novels in my free time.",
            "zh": "我喜欢空闲时看小说。"
          }
        ]
      },
      {
        "id": "photography",
        "word": "photography",
        "phonetic": "/fəˈtɒɡrəfi/",
        "translation": "摄影",
        "emoji": "📸",
        "examples": [
          {
            "en": "Photography is my hobby.",
            "zh": "摄影是我的爱好。"
          }
        ]
      },
      {
        "id": "gardening",
        "word": "gardening",
        "phonetic": "/ˈɡɑːrdnɪŋ/",
        "translation": "园艺",
        "emoji": "🌻",
        "examples": [
          {
            "en": "My grandmother loves gardening.",
            "zh": "我祖母喜欢园艺。"
          }
        ]
      },
      {
        "id": "cooking",
        "word": "cooking",
        "phonetic": "/ˈkʊkɪŋ/",
        "translation": "烹饪",
        "emoji": "👨‍🍳",
        "examples": [
          {
            "en": "I'm learning cooking from online videos.",
            "zh": "我通过视频学烹饪。"
          }
        ]
      },
      {
        "id": "gaming",
        "word": "gaming",
        "phonetic": "/ˈɡeɪmɪŋ/",
        "translation": "玩游戏",
        "emoji": "🎮",
        "examples": [
          {
            "en": "He spends weekends gaming online.",
            "zh": "他周末在线玩游戏。"
          }
        ]
      },
      {
        "id": "music",
        "word": "music",
        "phonetic": "/ˈmjuːzɪk/",
        "translation": "音乐",
        "emoji": "🎵",
        "examples": [
          {
            "en": "Listening to music helps me relax.",
            "zh": "听音乐帮我放松。"
          }
        ]
      },
      {
        "id": "stretch",
        "word": "stretch",
        "phonetic": "/stretʃ/",
        "translation": "拉伸",
        "emoji": "🤸",
        "examples": [
          {
            "en": "Remember to stretch before exercise.",
            "zh": "运动前记得拉伸。"
          }
        ]
      },
      {
        "id": "competition",
        "word": "competition / match",
        "phonetic": "/ˌkɒmpəˈtɪʃn/ /mætʃ/",
        "translation": "比赛",
        "emoji": "🏆",
        "examples": [
          {
            "en": "There's a basketball competition this weekend.",
            "zh": "这周末有篮球比赛。"
          }
        ]
      },
      {
        "id": "medal",
        "word": "medal",
        "phonetic": "/ˈmedl/",
        "translation": "奖牌",
        "emoji": "🥇",
        "examples": [
          {
            "en": "She won a gold medal.",
            "zh": "她赢得了金牌。"
          }
        ]
      },
      {
        "id": "coach",
        "word": "coach",
        "phonetic": "/kəʊtʃ/",
        "translation": "教练",
        "emoji": "🧑‍🏫",
        "examples": [
          {
            "en": "The coach taught us new techniques.",
            "zh": "教练教了我们新技巧。"
          }
        ]
      },
      {
        "id": "team",
        "word": "team",
        "phonetic": "/tiːm/",
        "translation": "队伍",
        "emoji": "👥",
        "examples": [
          {
            "en": "Our team won the championship!",
            "zh": "我们队赢得了冠军！"
          }
        ]
      },
      {
        "id": "camping",
        "word": "camping",
        "phonetic": "/ˈkæmpɪŋ/",
        "translation": "露营",
        "emoji": "🏕️",
        "examples": [
          {
            "en": "We went camping by the lake.",
            "zh": "我们去湖边露营了。"
          }
        ]
      },
      {
        "id": "exercise",
        "word": "exercise / workout",
        "phonetic": "/ˈeksərsaɪz/",
        "translation": "锻炼",
        "emoji": "💪",
        "examples": [
          {
            "en": "Regular exercise is important.",
            "zh": "规律锻炼很重要。"
          }
        ]
      }
    ]
  },
  {
    "id": "travel",
    "name": "旅行交通",
    "nameEn": "Travel & Transport",
    "emoji": "✈️",
    "color": "#45B7D1",
    "words": [
      {
        "id": "airport",
        "word": "airport",
        "phonetic": "/ˈeərpɔːrt/",
        "translation": "机场",
        "emoji": "✈️",
        "examples": [
          {
            "en": "We arrived two hours before the flight.",
            "zh": "我们在起飞前两小时到达机场。"
          }
        ]
      },
      {
        "id": "departure",
        "word": "departure",
        "phonetic": "/dɪˈpɑːrtʃər/",
        "translation": "出发",
        "emoji": "🛫",
        "examples": [
          {
            "en": "The departure time is 8:30 AM.",
            "zh": "起飞时间是早上8:30。"
          }
        ]
      },
      {
        "id": "arrival",
        "word": "arrival",
        "phonetic": "/əˈraɪvl/",
        "translation": "到达",
        "emoji": "🛬",
        "examples": [
          {
            "en": "Our arrival was delayed by two hours.",
            "zh": "我们的到达延误了两小时。"
          }
        ]
      },
      {
        "id": "boarding-pass",
        "word": "boarding pass",
        "phonetic": "/ˈbɔːrdɪŋ pæs/",
        "translation": "登机牌",
        "emoji": "🎫",
        "examples": [
          {
            "en": "Please have your boarding pass ready.",
            "zh": "请准备好登机牌。"
          }
        ]
      },
      {
        "id": "luggage",
        "word": "luggage / baggage",
        "phonetic": "/ˈlʌɡɪdʒ/ /ˈbæɡɪdʒ/",
        "translation": "行李",
        "emoji": "🧳",
        "examples": [
          {
            "en": "How many pieces of luggage?",
            "zh": "您要托运多少件行李？"
          }
        ]
      },
      {
        "id": "passport",
        "word": "passport",
        "phonetic": "/ˈpɑːspɔːrt/",
        "translation": "护照",
        "emoji": "🛂",
        "examples": [
          {
            "en": "Make sure your passport is valid.",
            "zh": "确保护照有效。"
          }
        ]
      },
      {
        "id": "sightseeing",
        "word": "sightseeing",
        "phonetic": "/ˈsaɪtsiːɪŋ/",
        "translation": "观光",
        "emoji": "📸",
        "examples": [
          {
            "en": "We spent the whole day sightseeing.",
            "zh": "我们花了一整天观光。"
          }
        ]
      },
      {
        "id": "souvenir",
        "word": "souvenir",
        "phonetic": "/ˌsuːvəˈnɪər/",
        "translation": "纪念品",
        "emoji": "🎁",
        "examples": [
          {
            "en": "I bought souvenirs for my family.",
            "zh": "我给家人买了纪念品。"
          }
        ]
      },
      {
        "id": "hotel",
        "word": "hotel",
        "phonetic": "/həʊˈtel/",
        "translation": "酒店",
        "emoji": "🏨",
        "examples": [
          {
            "en": "We stayed at a nice hotel.",
            "zh": "我们住了一家不错的酒店。"
          }
        ]
      },
      {
        "id": "subway",
        "word": "subway / metro",
        "phonetic": "/ˈsʌbweɪ/ /ˈmetrəʊ/",
        "translation": "地铁",
        "emoji": "🚇",
        "examples": [
          {
            "en": "The subway is the fastest way.",
            "zh": "地铁是最快的方式。"
          }
        ]
      },
      {
        "id": "taxi",
        "word": "taxi / cab",
        "phonetic": "/ˈtæksi/ /kæb/",
        "translation": "出租车",
        "emoji": "🚕",
        "examples": [
          {
            "en": "Let's take a taxi — it's too far.",
            "zh": "我们打车吧。"
          }
        ]
      },
      {
        "id": "train",
        "word": "train",
        "phonetic": "/treɪn/",
        "translation": "火车",
        "emoji": "🚄",
        "examples": [
          {
            "en": "The high-speed train takes three hours.",
            "zh": "高铁只要三小时。"
          }
        ]
      },
      {
        "id": "ferry",
        "word": "ferry",
        "phonetic": "/ˈferi/",
        "translation": "渡轮",
        "emoji": "⛴️",
        "examples": [
          {
            "en": "We took a ferry to Macau.",
            "zh": "我们坐渡轮去了澳门。"
          }
        ]
      },
      {
        "id": "bicycle",
        "word": "bicycle / bike",
        "phonetic": "/ˈbaɪsɪkl/ /baɪk/",
        "translation": "自行车",
        "emoji": "🚲",
        "examples": [
          {
            "en": "I ride my bike to the park.",
            "zh": "我骑自行车去公园。"
          }
        ]
      },
      {
        "id": "guide",
        "word": "tour guide",
        "phonetic": "/tʊər ɡaɪd/",
        "translation": "导游",
        "emoji": "🚩",
        "examples": [
          {
            "en": "The tour guide showed us around.",
            "zh": "导游带我们游览。"
          }
        ]
      },
      {
        "id": "jet-lag",
        "word": "jet lag",
        "phonetic": "/ˈdʒet læɡ/",
        "translation": "时差反应",
        "emoji": "😵",
        "examples": [
          {
            "en": "I'm still suffering from jet lag.",
            "zh": "我还在倒时差。"
          }
        ]
      },
      {
        "id": "lost-found",
        "word": "lost and found",
        "phonetic": "/lɒst ənd faʊnd/",
        "translation": "失物招领",
        "emoji": "🔍",
        "examples": [
          {
            "en": "Check the lost and found.",
            "zh": "去失物招领处问问。"
          }
        ]
      },
      {
        "id": "rental-car",
        "word": "rental car",
        "phonetic": "/ˈrentl kɑːr/",
        "translation": "租车",
        "emoji": "🚗",
        "examples": [
          {
            "en": "We rented a car to drive around.",
            "zh": "我们租了车自驾。"
          }
        ]
      },
      {
        "id": "hostel",
        "word": "hostel",
        "phonetic": "/ˈhɒstl/",
        "translation": "青年旅舍",
        "emoji": "🛏️",
        "examples": [
          {
            "en": "Staying at a hostel saves money.",
            "zh": "住青旅省钱。"
          }
        ]
      },
      {
        "id": "map",
        "word": "map",
        "phonetic": "/mæp/",
        "translation": "地图",
        "emoji": "🗺️",
        "examples": [
          {
            "en": "I use a map app on my phone.",
            "zh": "我用手机地图。"
          }
        ]
      },
      {
        "id": "duty-free",
        "word": "duty-free",
        "phonetic": "/ˌdjuːti ˈfriː/",
        "translation": "免税",
        "emoji": "🛍️",
        "examples": [
          {
            "en": "I bought perfume at duty-free.",
            "zh": "我在免税店买了香水。"
          }
        ]
      },
      {
        "id": "one-way",
        "word": "one-way ticket",
        "phonetic": "/wʌn weɪ ˈtɪkɪt/",
        "translation": "单程票",
        "emoji": "🎫",
        "examples": [
          {
            "en": "A one-way ticket to London.",
            "zh": "一张去伦敦的单程票。"
          }
        ]
      },
      {
        "id": "round-trip",
        "word": "round-trip ticket",
        "phonetic": "/raʊnd trɪp ˈtɪkɪt/",
        "translation": "往返票",
        "emoji": "🎫",
        "examples": [
          {
            "en": "A round-trip is cheaper.",
            "zh": "往返票更便宜。"
          }
        ]
      }
    ]
  },
  {
    "id": "weather",
    "name": "天气自然",
    "nameEn": "Weather & Nature",
    "emoji": "🌤️",
    "color": "#96CEB4",
    "words": [
      {
        "id": "sunny",
        "word": "sunny",
        "phonetic": "/ˈsʌni/",
        "translation": "晴天的",
        "emoji": "☀️",
        "examples": [
          {
            "en": "It's a beautiful sunny day!",
            "zh": "今天阳光明媚！"
          }
        ]
      },
      {
        "id": "cloudy",
        "word": "cloudy",
        "phonetic": "/ˈklaʊdi/",
        "translation": "多云的",
        "emoji": "☁️",
        "examples": [
          {
            "en": "The sky is cloudy but it won't rain.",
            "zh": "天阴但不会下雨。"
          }
        ]
      },
      {
        "id": "rainy",
        "word": "rainy",
        "phonetic": "/ˈreɪni/",
        "translation": "下雨的",
        "emoji": "🌧️",
        "examples": [
          {
            "en": "Don't forget your umbrella.",
            "zh": "别忘了带伞。"
          }
        ]
      },
      {
        "id": "storm",
        "word": "storm",
        "phonetic": "/stɔːrm/",
        "translation": "暴风雨",
        "emoji": "⛈️",
        "examples": [
          {
            "en": "The storm knocked down trees.",
            "zh": "暴风雨吹倒了树。"
          }
        ]
      },
      {
        "id": "typhoon",
        "word": "typhoon",
        "phonetic": "/taɪˈfuːn/",
        "translation": "台风",
        "emoji": "🌀",
        "examples": [
          {
            "en": "The typhoon brought heavy rain.",
            "zh": "台风带来了暴雨。"
          }
        ]
      },
      {
        "id": "forecast",
        "word": "forecast",
        "phonetic": "/ˈfɔːrkæst/",
        "translation": "天气预报",
        "emoji": "📺",
        "examples": [
          {
            "en": "The forecast says it will rain.",
            "zh": "天气预报说会下雨。"
          }
        ]
      },
      {
        "id": "temperature",
        "word": "temperature",
        "phonetic": "/ˈtemprətʃər/",
        "translation": "温度",
        "emoji": "🌡️",
        "examples": [
          {
            "en": "The temperature is 30 degrees.",
            "zh": "温度30度。"
          }
        ]
      },
      {
        "id": "spring",
        "word": "spring",
        "phonetic": "/sprɪŋ/",
        "translation": "春天",
        "emoji": "🌸",
        "examples": [
          {
            "en": "Spring is when flowers bloom.",
            "zh": "春天花都开了。"
          }
        ]
      },
      {
        "id": "summer",
        "word": "summer",
        "phonetic": "/ˈsʌmər/",
        "translation": "夏天",
        "emoji": "🏖️",
        "examples": [
          {
            "en": "We go swimming in summer.",
            "zh": "夏天我们去游泳。"
          }
        ]
      },
      {
        "id": "autumn",
        "word": "autumn / fall",
        "phonetic": "/ˈɔːtəm/ /fɔːl/",
        "translation": "秋天",
        "emoji": "🍂",
        "examples": [
          {
            "en": "Leaves turn gold in autumn.",
            "zh": "秋天树叶变成金色。"
          }
        ]
      },
      {
        "id": "winter",
        "word": "winter",
        "phonetic": "/ˈwɪntər/",
        "translation": "冬天",
        "emoji": "❄️",
        "examples": [
          {
            "en": "It snows a lot in winter.",
            "zh": "冬天经常下雪。"
          }
        ]
      },
      {
        "id": "mountain",
        "word": "mountain",
        "phonetic": "/ˈmaʊntn/",
        "translation": "山",
        "emoji": "⛰️",
        "examples": [
          {
            "en": "We hiked up the mountain.",
            "zh": "我们徒步上了山。"
          }
        ]
      },
      {
        "id": "river",
        "word": "river",
        "phonetic": "/ˈrɪvər/",
        "translation": "河流",
        "emoji": "🏞️",
        "examples": [
          {
            "en": "The river flows through the city.",
            "zh": "河流经市区。"
          }
        ]
      },
      {
        "id": "ocean",
        "word": "ocean / sea",
        "phonetic": "/ˈəʊʃn/ /siː/",
        "translation": "海洋",
        "emoji": "🌊",
        "examples": [
          {
            "en": "I love watching the sunset over the ocean.",
            "zh": "我喜欢看海上日落。"
          }
        ]
      },
      {
        "id": "forest",
        "word": "forest",
        "phonetic": "/ˈfɒrɪst/",
        "translation": "森林",
        "emoji": "🌲",
        "examples": [
          {
            "en": "We saw many birds in the forest.",
            "zh": "我们在森林里看到很多鸟。"
          }
        ]
      },
      {
        "id": "dog",
        "word": "dog",
        "phonetic": "/dɒɡ/",
        "translation": "狗",
        "emoji": "🐕",
        "examples": [
          {
            "en": "My dog greets me at the door every day.",
            "zh": "我的狗每天在门口迎接我。"
          }
        ]
      },
      {
        "id": "cat",
        "word": "cat",
        "phonetic": "/kæt/",
        "translation": "猫",
        "emoji": "🐈",
        "examples": [
          {
            "en": "The cat is sleeping on the sofa.",
            "zh": "猫在沙发上睡觉。"
          }
        ]
      },
      {
        "id": "bird",
        "word": "bird",
        "phonetic": "/bɜːrd/",
        "translation": "鸟",
        "emoji": "🐦",
        "examples": [
          {
            "en": "Birds are singing in the trees.",
            "zh": "鸟儿在树上唱歌。"
          }
        ]
      },
      {
        "id": "horse",
        "word": "horse",
        "phonetic": "/hɔːrs/",
        "translation": "马",
        "emoji": "🐎",
        "examples": [
          {
            "en": "She loves riding horses.",
            "zh": "她喜欢骑马。"
          }
        ]
      },
      {
        "id": "cow",
        "word": "cow",
        "phonetic": "/kaʊ/",
        "translation": "牛",
        "emoji": "🐄",
        "examples": [
          {
            "en": "The cows are grazing in the field.",
            "zh": "牛在草地上吃草。"
          }
        ]
      },
      {
        "id": "drizzle",
        "word": "drizzle",
        "phonetic": "/ˈdrɪzl/",
        "translation": "毛毛雨",
        "emoji": "🌦️",
        "examples": [
          {
            "en": "It's just drizzling.",
            "zh": "只是下毛毛雨。"
          }
        ]
      },
      {
        "id": "heatwave",
        "word": "heatwave",
        "phonetic": "/ˈhiːtweɪv/",
        "translation": "热浪",
        "emoji": "🔥",
        "examples": [
          {
            "en": "A heatwave is hitting the city.",
            "zh": "热浪袭击城市。"
          }
        ]
      },
      {
        "id": "sheep",
        "word": "sheep",
        "phonetic": "/ʃiːp/",
        "translation": "羊",
        "emoji": "🐑",
        "examples": [
          {
            "en": "There are sheep on the farm.",
            "zh": "农场里有很多羊。"
          }
        ]
      },
      {
        "id": "duck",
        "word": "duck",
        "phonetic": "/dʌk/",
        "translation": "鸭子",
        "emoji": "🦆",
        "examples": [
          {
            "en": "Ducks are swimming in the pond.",
            "zh": "鸭子在池塘里游泳。"
          }
        ]
      },
      {
        "id": "butterfly",
        "word": "butterfly",
        "phonetic": "/ˈbʌtərflaɪ/",
        "translation": "蝴蝶",
        "emoji": "🦋",
        "examples": [
          {
            "en": "A butterfly landed on the flower.",
            "zh": "蝴蝶落在花上。"
          }
        ]
      },
      {
        "id": "pet",
        "word": "pet",
        "phonetic": "/pet/",
        "translation": "宠物",
        "emoji": "🐾",
        "examples": [
          {
            "en": "Do you have any pets?",
            "zh": "你有宠物吗？"
          }
        ]
      },
      {
        "id": "rabbit",
        "word": "rabbit",
        "phonetic": "/ˈræbɪt/",
        "translation": "兔子",
        "emoji": "🐇",
        "examples": [
          {
            "en": "My daughter has a pet rabbit.",
            "zh": "我女儿养了一只兔子。"
          }
        ]
      },
      {
        "id": "pig",
        "word": "pig",
        "phonetic": "/pɪɡ/",
        "translation": "猪",
        "emoji": "🐖",
        "examples": [
          {
            "en": "The pigs are in the barn.",
            "zh": "猪在谷仓里。"
          }
        ]
      },
      {
        "id": "foggy",
        "word": "foggy",
        "phonetic": "/ˈfɒɡi/",
        "translation": "有雾的",
        "emoji": "🌫️",
        "examples": [
          {
            "en": "It's so foggy today.",
            "zh": "今天雾很大。"
          }
        ]
      },
      {
        "id": "snow",
        "word": "snow",
        "phonetic": "/snəʊ/",
        "translation": "雪",
        "emoji": "❄️",
        "examples": [
          {
            "en": "It snowed heavily last night.",
            "zh": "昨晚下了大雪。"
          }
        ]
      }
    ]
  },
  {
    "id": "entertainment",
    "name": "娱乐文化",
    "nameEn": "Entertainment & Culture",
    "emoji": "🎭",
    "color": "#E17055",
    "words": [
      {
        "id": "movie",
        "word": "movie / film",
        "phonetic": "/ˈmuːvi/ /fɪlm/",
        "translation": "电影",
        "emoji": "🎬",
        "examples": [
          {
            "en": "Let's watch a movie tonight.",
            "zh": "我们今晚看电影吧。"
          }
        ]
      },
      {
        "id": "theater",
        "word": "theater / cinema",
        "phonetic": "/ˈθɪətər/ /ˈsɪnəmə/",
        "translation": "剧院；电影院",
        "emoji": "🎭",
        "examples": [
          {
            "en": "We went to the theater to see a play.",
            "zh": "我们去剧院看戏。"
          }
        ]
      },
      {
        "id": "concert",
        "word": "concert",
        "phonetic": "/ˈkɒnsərt/",
        "translation": "音乐会",
        "emoji": "🎵",
        "examples": [
          {
            "en": "We went to a rock concert.",
            "zh": "我们去了一场摇滚音乐会。"
          }
        ]
      },
      {
        "id": "ticket",
        "word": "ticket",
        "phonetic": "/ˈtɪkɪt/",
        "translation": "票",
        "emoji": "🎫",
        "examples": [
          {
            "en": "I bought two tickets for the show.",
            "zh": "我买了两张演出票。"
          }
        ]
      },
      {
        "id": "actor",
        "word": "actor / actress",
        "phonetic": "/ˈæktər/ /ˈæktrəs/",
        "translation": "演员",
        "emoji": "🎭",
        "examples": [
          {
            "en": "The actor gave an amazing performance.",
            "zh": "演员表演很精彩。"
          }
        ]
      },
      {
        "id": "audience",
        "word": "audience",
        "phonetic": "/ˈɔːdiəns/",
        "translation": "观众",
        "emoji": "👥",
        "examples": [
          {
            "en": "The audience clapped loudly.",
            "zh": "观众热烈鼓掌。"
          }
        ]
      },
      {
        "id": "piano",
        "word": "piano",
        "phonetic": "/piˈænəʊ/",
        "translation": "钢琴",
        "emoji": "🎹",
        "examples": [
          {
            "en": "She has played piano since she was six.",
            "zh": "她从六岁弹钢琴。"
          }
        ]
      },
      {
        "id": "guitar",
        "word": "guitar",
        "phonetic": "/ɡɪˈtɑːr/",
        "translation": "吉他",
        "emoji": "🎸",
        "examples": [
          {
            "en": "He plays guitar in a band.",
            "zh": "他在乐队弹吉他。"
          }
        ]
      },
      {
        "id": "violin",
        "word": "violin",
        "phonetic": "/ˌvaɪəˈlɪn/",
        "translation": "小提琴",
        "emoji": "🎻",
        "examples": [
          {
            "en": "The violinist played beautifully.",
            "zh": "小提琴手演奏得很美。"
          }
        ]
      },
      {
        "id": "karaoke",
        "word": "karaoke",
        "phonetic": "/ˌkæriˈəʊki/",
        "translation": "卡拉OK",
        "emoji": "🎤",
        "examples": [
          {
            "en": "We sang karaoke all night.",
            "zh": "我们唱K唱了一整晚。"
          }
        ]
      },
      {
        "id": "board-game",
        "word": "board game",
        "phonetic": "/bɔːrd ɡeɪm/",
        "translation": "桌游",
        "emoji": "🎲",
        "examples": [
          {
            "en": "We play board games on family night.",
            "zh": "家庭之夜玩桌游。"
          }
        ]
      },
      {
        "id": "comedy",
        "word": "comedy",
        "phonetic": "/ˈkɒmədi/",
        "translation": "喜剧",
        "emoji": "😂",
        "examples": [
          {
            "en": "I love watching comedy movies.",
            "zh": "我喜欢看喜剧电影。"
          }
        ]
      },
      {
        "id": "horror",
        "word": "horror film",
        "phonetic": "/ˈhɒrər fɪlm/",
        "translation": "恐怖片",
        "emoji": "👻",
        "examples": [
          {
            "en": "I'm scared of horror films.",
            "zh": "我不敢看恐怖片。"
          }
        ]
      },
      {
        "id": "magic",
        "word": "magic show",
        "phonetic": "/ˈmædʒɪk ʃəʊ/",
        "translation": "魔术",
        "emoji": "🎩",
        "examples": [
          {
            "en": "The magician performed amazing tricks.",
            "zh": "魔术师表演了精彩的魔术。"
          }
        ]
      },
      {
        "id": "festival",
        "word": "festival",
        "phonetic": "/ˈfestɪvl/",
        "translation": "节庆",
        "emoji": "🎉",
        "examples": [
          {
            "en": "There's a music festival this weekend.",
            "zh": "这周末有音乐节。"
          }
        ]
      },
      {
        "id": "circus",
        "word": "circus",
        "phonetic": "/ˈsɜːrkəs/",
        "translation": "马戏团",
        "emoji": "🎪",
        "examples": [
          {
            "en": "The kids loved the circus.",
            "zh": "孩子们喜欢马戏表演。"
          }
        ]
      },
      {
        "id": "orchestra",
        "word": "orchestra",
        "phonetic": "/ˈɔːrkɪstrə/",
        "translation": "管弦乐队",
        "emoji": "🎻",
        "examples": [
          {
            "en": "The orchestra played Beethoven.",
            "zh": "管弦乐队演奏了贝多芬。"
          }
        ]
      },
      {
        "id": "sing",
        "word": "sing",
        "phonetic": "/sɪŋ/",
        "translation": "唱歌",
        "emoji": "🎤",
        "examples": [
          {
            "en": "He sings in the school choir.",
            "zh": "他在学校合唱团唱歌。"
          }
        ]
      },
      {
        "id": "dance",
        "word": "dance",
        "phonetic": "/dɑːns/",
        "translation": "舞蹈",
        "emoji": "💃",
        "examples": [
          {
            "en": "She loves to dance.",
            "zh": "她喜欢跳舞。"
          }
        ]
      },
      {
        "id": "pop-music",
        "word": "pop music",
        "phonetic": "/pɒp ˈmjuːzɪk/",
        "translation": "流行音乐",
        "emoji": "🎶",
        "examples": [
          {
            "en": "I listen to pop music.",
            "zh": "我听流行音乐。"
          }
        ]
      },
      {
        "id": "classical",
        "word": "classical music",
        "phonetic": "/ˈklæsɪkl ˈmjuːzɪk/",
        "translation": "古典音乐",
        "emoji": "🎵",
        "examples": [
          {
            "en": "Classical music helps me relax.",
            "zh": "古典音乐帮我放松。"
          }
        ]
      }
    ]
  },
  {
    "id": "feelings",
    "name": "情感描述",
    "nameEn": "Feelings & Emotions",
    "emoji": "😊",
    "color": "#FDCB6E",
    "words": [
      {
        "id": "happy",
        "word": "happy",
        "phonetic": "/ˈhæpi/",
        "translation": "快乐的；高兴的",
        "emoji": "😊",
        "examples": [
          {
            "en": "I'm so happy to see you!",
            "zh": "见到你我好开心！"
          }
        ]
      },
      {
        "id": "sad",
        "word": "sad",
        "phonetic": "/sæd/",
        "translation": "难过的",
        "emoji": "😢",
        "examples": [
          {
            "en": "She felt sad when her friend moved away.",
            "zh": "朋友搬走后她很难过。"
          }
        ]
      },
      {
        "id": "angry",
        "word": "angry",
        "phonetic": "/ˈæŋɡri/",
        "translation": "生气的",
        "emoji": "😠",
        "examples": [
          {
            "en": "He was angry about the delay.",
            "zh": "他对延误很生气。"
          }
        ]
      },
      {
        "id": "tired",
        "word": "tired",
        "phonetic": "/ˈtaɪərd/",
        "translation": "疲倦的",
        "emoji": "😴",
        "examples": [
          {
            "en": "I'm tired after working all day.",
            "zh": "工作一天我好累。"
          }
        ]
      },
      {
        "id": "hungry",
        "word": "hungry",
        "phonetic": "/ˈhʌŋɡri/",
        "translation": "饿的",
        "emoji": "🍽️",
        "examples": [
          {
            "en": "I'm hungry — let's eat.",
            "zh": "我饿了——吃点东西吧。"
          }
        ]
      },
      {
        "id": "excited",
        "word": "excited",
        "phonetic": "/ɪkˈsaɪtɪd/",
        "translation": "兴奋的",
        "emoji": "🤩",
        "examples": [
          {
            "en": "The kids are excited about the trip.",
            "zh": "孩子们对旅行很兴奋。"
          }
        ]
      },
      {
        "id": "nervous",
        "word": "nervous",
        "phonetic": "/ˈnɜːrvəs/",
        "translation": "紧张的",
        "emoji": "😰",
        "examples": [
          {
            "en": "I feel nervous before exams.",
            "zh": "考试前我会紧张。"
          }
        ]
      },
      {
        "id": "scared",
        "word": "scared / afraid",
        "phonetic": "/skeərd/ /əˈfreɪd/",
        "translation": "害怕的",
        "emoji": "😨",
        "examples": [
          {
            "en": "She is scared of spiders.",
            "zh": "她害怕蜘蛛。"
          }
        ]
      },
      {
        "id": "surprised",
        "word": "surprised",
        "phonetic": "/sərˈpraɪzd/",
        "translation": "惊讶的",
        "emoji": "😲",
        "examples": [
          {
            "en": "I was surprised to see her there.",
            "zh": "在那里看到她我很惊讶。"
          }
        ]
      },
      {
        "id": "bored",
        "word": "bored",
        "phonetic": "/bɔːrd/",
        "translation": "无聊的",
        "emoji": "😐",
        "examples": [
          {
            "en": "I'm bored — nothing to do.",
            "zh": "好无聊——没事做。"
          }
        ]
      },
      {
        "id": "proud",
        "word": "proud",
        "phonetic": "/praʊd/",
        "translation": "自豪的",
        "emoji": "😌",
        "examples": [
          {
            "en": "Her parents are proud of her.",
            "zh": "父母为她自豪。"
          }
        ]
      },
      {
        "id": "lonely",
        "word": "lonely",
        "phonetic": "/ˈləʊnli/",
        "translation": "孤独的",
        "emoji": "😔",
        "examples": [
          {
            "en": "He felt lonely in a new city.",
            "zh": "在新城市他感到孤独。"
          }
        ]
      },
      {
        "id": "worried",
        "word": "worried",
        "phonetic": "/ˈwʌrid/",
        "translation": "担心的",
        "emoji": "😟",
        "examples": [
          {
            "en": "I'm worried about the exam.",
            "zh": "我担心考试。"
          }
        ]
      },
      {
        "id": "calm",
        "word": "calm",
        "phonetic": "/kɑːm/",
        "translation": "平静的",
        "emoji": "😌",
        "examples": [
          {
            "en": "Stay calm and take deep breaths.",
            "zh": "保持冷静深呼吸。"
          }
        ]
      },
      {
        "id": "friendly",
        "word": "friendly",
        "phonetic": "/ˈfrendli/",
        "translation": "友好的",
        "emoji": "🤝",
        "examples": [
          {
            "en": "The people here are very friendly.",
            "zh": "这里的人很友好。"
          }
        ]
      },
      {
        "id": "kind",
        "word": "kind",
        "phonetic": "/kaɪnd/",
        "translation": "善良的",
        "emoji": "😇",
        "examples": [
          {
            "en": "It was kind of you to help.",
            "zh": "你帮我真是太好了。"
          }
        ]
      },
      {
        "id": "grateful",
        "word": "grateful",
        "phonetic": "/ˈɡreɪtfl/",
        "translation": "感激的",
        "emoji": "🙏",
        "examples": [
          {
            "en": "I'm grateful for your help.",
            "zh": "我很感激你的帮助。"
          }
        ]
      },
      {
        "id": "jealous",
        "word": "jealous",
        "phonetic": "/ˈdʒeləs/",
        "translation": "嫉妒的",
        "emoji": "😒",
        "examples": [
          {
            "en": "He was jealous of his brother's success.",
            "zh": "他嫉妒弟弟的成功。"
          }
        ]
      },
      {
        "id": "embarrassed",
        "word": "embarrassed",
        "phonetic": "/ɪmˈbærəst/",
        "translation": "尴尬的",
        "emoji": "😳",
        "examples": [
          {
            "en": "I was so embarrassed!",
            "zh": "我好尴尬！"
          }
        ]
      },
      {
        "id": "curious",
        "word": "curious",
        "phonetic": "/ˈkjʊəriəs/",
        "translation": "好奇的",
        "emoji": "🤔",
        "examples": [
          {
            "en": "Children are curious about everything.",
            "zh": "孩子们对一切充满好奇。"
          }
        ]
      },
      {
        "id": "confident",
        "word": "confident",
        "phonetic": "/ˈkɒnfɪdənt/",
        "translation": "自信的",
        "emoji": "💪",
        "examples": [
          {
            "en": "She feels confident about the exam.",
            "zh": "她自信能通过考试。"
          }
        ]
      },
      {
        "id": "disappointed",
        "word": "disappointed",
        "phonetic": "/ˌdɪsəˈpɔɪntɪd/",
        "translation": "失望的",
        "emoji": "😞",
        "examples": [
          {
            "en": "She was disappointed with the results.",
            "zh": "她对结果很失望。"
          }
        ]
      },
      {
        "id": "brave",
        "word": "brave",
        "phonetic": "/breɪv/",
        "translation": "勇敢的",
        "emoji": "🦸",
        "examples": [
          {
            "en": "It was brave of you to speak up.",
            "zh": "你发言很勇敢。"
          }
        ]
      },
      {
        "id": "polite",
        "word": "polite",
        "phonetic": "/pəˈlaɪt/",
        "translation": "有礼貌的",
        "emoji": "🙇",
        "examples": [
          {
            "en": "It's important to be polite.",
            "zh": "有礼貌很重要。"
          }
        ]
      },
      {
        "id": "shy",
        "word": "shy",
        "phonetic": "/ʃaɪ/",
        "translation": "害羞的",
        "emoji": "😶",
        "examples": [
          {
            "en": "She is shy with new people.",
            "zh": "她在陌生人面前害羞。"
          }
        ]
      },
      {
        "id": "honest",
        "word": "honest",
        "phonetic": "/ˈɒnɪst/",
        "translation": "诚实的",
        "emoji": "🤥",
        "examples": [
          {
            "en": "You should be honest.",
            "zh": "你应该诚实。"
          }
        ]
      }
    ]
  },
  {
    "id": "numbers",
    "name": "数字时间",
    "nameEn": "Numbers, Time & Money",
    "emoji": "🔢",
    "color": "#636E72",
    "words": [
      {
        "id": "time",
        "word": "time",
        "phonetic": "/taɪm/",
        "translation": "时间",
        "emoji": "⏰",
        "examples": [
          {
            "en": "What time is it?",
            "zh": "几点了？"
          }
        ]
      },
      {
        "id": "hour",
        "word": "hour",
        "phonetic": "/ˈaʊər/",
        "translation": "小时",
        "emoji": "🕐",
        "examples": [
          {
            "en": "The movie lasts two hours.",
            "zh": "电影两小时。"
          }
        ]
      },
      {
        "id": "minute",
        "word": "minute",
        "phonetic": "/ˈmɪnɪt/",
        "translation": "分钟",
        "emoji": "⏱️",
        "examples": [
          {
            "en": "I'll be back in 10 minutes.",
            "zh": "我十分钟后回来。"
          }
        ]
      },
      {
        "id": "today",
        "word": "today",
        "phonetic": "/təˈdeɪ/",
        "translation": "今天",
        "emoji": "📅",
        "examples": [
          {
            "en": "What are you doing today?",
            "zh": "你今天做什么？"
          }
        ]
      },
      {
        "id": "tomorrow",
        "word": "tomorrow",
        "phonetic": "/təˈmɒrəʊ/",
        "translation": "明天",
        "emoji": "📅",
        "examples": [
          {
            "en": "See you tomorrow!",
            "zh": "明天见！"
          }
        ]
      },
      {
        "id": "yesterday",
        "word": "yesterday",
        "phonetic": "/ˈjestərdeɪ/",
        "translation": "昨天",
        "emoji": "📅",
        "examples": [
          {
            "en": "I went to the gym yesterday.",
            "zh": "我昨天去了健身房。"
          }
        ]
      },
      {
        "id": "week",
        "word": "week",
        "phonetic": "/wiːk/",
        "translation": "周；星期",
        "emoji": "📅",
        "examples": [
          {
            "en": "There are seven days in a week.",
            "zh": "一周有七天。"
          }
        ]
      },
      {
        "id": "month",
        "word": "month",
        "phonetic": "/mʌnθ/",
        "translation": "月",
        "emoji": "📅",
        "examples": [
          {
            "en": "His birthday is next month.",
            "zh": "他的生日在下个月。"
          }
        ]
      },
      {
        "id": "year",
        "word": "year",
        "phonetic": "/jɪər/",
        "translation": "年",
        "emoji": "📅",
        "examples": [
          {
            "en": "I've worked here for five years.",
            "zh": "我在这里工作五年了。"
          }
        ]
      },
      {
        "id": "money",
        "word": "money",
        "phonetic": "/ˈmʌni/",
        "translation": "钱",
        "emoji": "💰",
        "examples": [
          {
            "en": "I need to exchange some money.",
            "zh": "我需要换钱。"
          }
        ]
      },
      {
        "id": "price",
        "word": "price / cost",
        "phonetic": "/praɪs/ /kɒst/",
        "translation": "价格；费用",
        "emoji": "🏷️",
        "examples": [
          {
            "en": "The price of gas has gone up.",
            "zh": "油价涨了。"
          }
        ]
      },
      {
        "id": "cheap",
        "word": "cheap",
        "phonetic": "/tʃiːp/",
        "translation": "便宜的",
        "emoji": "💲",
        "examples": [
          {
            "en": "This shirt was very cheap.",
            "zh": "这件衬衫很便宜。"
          }
        ]
      },
      {
        "id": "expensive",
        "word": "expensive",
        "phonetic": "/ɪkˈspensɪv/",
        "translation": "昂贵的",
        "emoji": "💎",
        "examples": [
          {
            "en": "The hotel was too expensive.",
            "zh": "酒店太贵了。"
          }
        ]
      },
      {
        "id": "free",
        "word": "free",
        "phonetic": "/friː/",
        "translation": "免费的；空闲的",
        "emoji": "🆓",
        "examples": [
          {
            "en": "The museum is free on Sundays.",
            "zh": "博物馆周日免费。"
          }
        ]
      },
      {
        "id": "morning",
        "word": "morning",
        "phonetic": "/ˈmɔːrnɪŋ/",
        "translation": "早上",
        "emoji": "🌅",
        "examples": [
          {
            "en": "I always exercise in the morning.",
            "zh": "我总是在早上锻炼。"
          }
        ]
      },
      {
        "id": "afternoon",
        "word": "afternoon",
        "phonetic": "/ˌæftərˈnuːn/",
        "translation": "下午",
        "emoji": "☀️",
        "examples": [
          {
            "en": "We met in the afternoon.",
            "zh": "我们下午见面了。"
          }
        ]
      },
      {
        "id": "evening",
        "word": "evening",
        "phonetic": "/ˈiːvnɪŋ/",
        "translation": "傍晚；晚上",
        "emoji": "🌆",
        "examples": [
          {
            "en": "We had dinner together in the evening.",
            "zh": "我们晚上一起吃了晚餐。"
          }
        ]
      },
      {
        "id": "night",
        "word": "night",
        "phonetic": "/naɪt/",
        "translation": "夜晚",
        "emoji": "🌙",
        "examples": [
          {
            "en": "I can't sleep well at night.",
            "zh": "我晚上睡不好。"
          }
        ]
      },
      {
        "id": "birthday",
        "word": "birthday",
        "phonetic": "/ˈbɜːrθdeɪ/",
        "translation": "生日",
        "emoji": "🎂",
        "examples": [
          {
            "en": "Happy birthday!",
            "zh": "生日快乐！"
          }
        ]
      },
      {
        "id": "holiday",
        "word": "holiday / vacation",
        "phonetic": "/ˈhɒlədeɪ/ /vəˈkeɪʃn/",
        "translation": "假期",
        "emoji": "🏖️",
        "examples": [
          {
            "en": "We're going to Japan for vacation.",
            "zh": "我们要去日本度假。"
          }
        ]
      },
      {
        "id": "first",
        "word": "first",
        "phonetic": "/fɜːrst/",
        "translation": "第一",
        "emoji": "🥇",
        "examples": [
          {
            "en": "She came first in the race.",
            "zh": "她跑了第一。"
          }
        ]
      },
      {
        "id": "second",
        "word": "second",
        "phonetic": "/ˈsekənd/",
        "translation": "第二",
        "emoji": "🥈",
        "examples": [
          {
            "en": "February is the second month.",
            "zh": "二月是第二个月。"
          }
        ]
      },
      {
        "id": "early",
        "word": "early",
        "phonetic": "/ˈɜːrli/",
        "translation": "早的",
        "emoji": "🌅",
        "examples": [
          {
            "en": "I arrived early for the meeting.",
            "zh": "我提前到了会议。"
          }
        ]
      },
      {
        "id": "late",
        "word": "late",
        "phonetic": "/leɪt/",
        "translation": "晚的",
        "emoji": "🌙",
        "examples": [
          {
            "en": "Don't be late!",
            "zh": "别迟到！"
          }
        ]
      }
    ]
  }
]



};
