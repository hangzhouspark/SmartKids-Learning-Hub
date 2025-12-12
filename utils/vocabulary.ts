import { Word } from '../types';

// Helper to create words quickly
const createWord = (id: number, en: string, zh: string): Word => ({
  id: `w_${id}`, en, zh
});

// A comprehensive list of ~500 primary school level English words
// Categories: Animals, Food, School, Home, Nature, Body, Clothing, People, Verbs, Adjectives, etc.
export const VOCABULARY_DB: Word[] = [
  // Animals
  createWord(1, 'dog', '狗'), createWord(2, 'cat', '猫'), createWord(3, 'elephant', '大象'), createWord(4, 'lion', '狮子'),
  createWord(5, 'tiger', '老虎'), createWord(6, 'monkey', '猴子'), createWord(7, 'panda', '熊猫'), createWord(8, 'zebra', '斑马'),
  createWord(9, 'giraffe', '长颈鹿'), createWord(10, 'rabbit', '兔子'), createWord(11, 'mouse', '老鼠'), createWord(12, 'horse', '马'),
  createWord(13, 'cow', '奶牛'), createWord(14, 'pig', '猪'), createWord(15, 'sheep', '绵羊'), createWord(16, 'goat', '山羊'),
  createWord(17, 'chicken', '鸡'), createWord(18, 'duck', '鸭子'), createWord(19, 'goose', '鹅'), createWord(20, 'bird', '鸟'),
  createWord(21, 'snake', '蛇'), createWord(22, 'fish', '鱼'), createWord(23, 'shark', '鲨鱼'), createWord(24, 'whale', '鲸鱼'),
  createWord(25, 'dolphin', '海豚'), createWord(26, 'bear', '熊'), createWord(27, 'wolf', '狼'), createWord(28, 'fox', '狐狸'),
  createWord(29, 'deer', '鹿'), createWord(30, 'kangaroo', '袋鼠'), createWord(31, 'koala', '考拉'), createWord(32, 'bat', '蝙蝠'),
  createWord(33, 'ant', '蚂蚁'), createWord(34, 'bee', '蜜蜂'), createWord(35, 'butterfly', '蝴蝶'), createWord(36, 'spider', '蜘蛛'),
  createWord(37, 'frog', '青蛙'), createWord(38, 'turtle', '乌龟'), createWord(39, 'crocodile', '鳄鱼'), createWord(40, 'penguin', '企鹅'),
  createWord(41, 'owl', '猫头鹰'), createWord(42, 'eagle', '老鹰'), createWord(43, 'parrot', '鹦鹉'), createWord(44, 'swan', '天鹅'),
  createWord(45, 'dragon', '龙'), createWord(46, 'dinosaur', '恐龙'), createWord(47, 'camel', '骆驼'), createWord(48, 'hippo', '河马'),
  createWord(49, 'rhino', '犀牛'), createWord(50, 'squirrel', '松鼠'),

  // Food & Drinks
  createWord(51, 'apple', '苹果'), createWord(52, 'banana', '香蕉'), createWord(53, 'orange', '橙子'), createWord(54, 'grape', '葡萄'),
  createWord(55, 'pear', '梨'), createWord(56, 'peach', '桃子'), createWord(57, 'watermelon', '西瓜'), createWord(58, 'strawberry', '草莓'),
  createWord(59, 'lemon', '柠檬'), createWord(60, 'pineapple', '菠萝'), createWord(61, 'mango', '芒果'), createWord(62, 'cherry', '樱桃'),
  createWord(63, 'bread', '面包'), createWord(64, 'rice', '米饭'), createWord(65, 'noodle', '面条'), createWord(66, 'egg', '鸡蛋'),
  createWord(67, 'milk', '牛奶'), createWord(68, 'water', '水'), createWord(69, 'juice', '果汁'), createWord(70, 'tea', '茶'),
  createWord(71, 'coffee', '咖啡'), createWord(72, 'cake', '蛋糕'), createWord(73, 'cookie', '饼干'), createWord(74, 'candy', '糖果'),
  createWord(75, 'chocolate', '巧克力'), createWord(76, 'ice cream', '冰淇淋'), createWord(77, 'hamburger', '汉堡包'), createWord(78, 'hot dog', '热狗'),
  createWord(79, 'sandwich', '三明治'), createWord(80, 'pizza', '披萨'), createWord(81, 'fries', '薯条'), createWord(82, 'meat', '肉'),
  createWord(83, 'chicken', '鸡肉'), createWord(84, 'beef', '牛肉'), createWord(85, 'pork', '猪肉'), createWord(86, 'fish', '鱼肉'),
  createWord(87, 'vegetable', '蔬菜'), createWord(88, 'tomato', '西红柿'), createWord(89, 'potato', '土豆'), createWord(90, 'carrot', '胡萝卜'),
  createWord(91, 'onion', '洋葱'), createWord(92, 'bean', '豆子'), createWord(93, 'corn', '玉米'), createWord(94, 'soup', '汤'),
  createWord(95, 'salad', '沙拉'), createWord(96, 'cheese', '奶酪'), createWord(97, 'butter', '黄油'), createWord(98, 'salt', '盐'),
  createWord(99, 'sugar', '糖'), createWord(100, 'dumpling', '饺子'),

  // School & Stationery
  createWord(101, 'school', '学校'), createWord(102, 'classroom', '教室'), createWord(103, 'library', '图书馆'), createWord(104, 'playground', '操场'),
  createWord(105, 'teacher', '老师'), createWord(106, 'student', '学生'), createWord(107, 'classmate', '同学'), createWord(108, 'desk', '书桌'),
  createWord(109, 'chair', '椅子'), createWord(110, 'blackboard', '黑板'), createWord(111, 'book', '书'), createWord(112, 'notebook', '笔记本'),
  createWord(113, 'pencil', '铅笔'), createWord(114, 'pen', '钢笔'), createWord(115, 'ruler', '尺子'), createWord(116, 'eraser', '橡皮'),
  createWord(117, 'bag', '书包'), createWord(118, 'crayon', '蜡笔'), createWord(119, 'paper', '纸'), createWord(120, 'map', '地图'),
  createWord(121, 'picture', '图片'), createWord(122, 'computer', '电脑'), createWord(123, 'homework', '作业'), createWord(124, 'exam', '考试'),
  createWord(125, 'lesson', '课'), createWord(126, 'music', '音乐'), createWord(127, 'art', '美术'), createWord(128, 'math', '数学'),
  createWord(129, 'english', '英语'), createWord(130, 'science', '科学'), createWord(131, 'history', '历史'), createWord(132, 'sport', '体育'),
  createWord(133, 'pencil case', '笔袋'), createWord(134, 'scissors', '剪刀'), createWord(135, 'glue', '胶水'), createWord(136, 'clock', '时钟'),
  createWord(137, 'door', '门'), createWord(138, 'window', '窗户'), createWord(139, 'floor', '地板'), createWord(140, 'wall', '墙'),

  // Body & Health
  createWord(141, 'body', '身体'), createWord(142, 'head', '头'), createWord(143, 'hair', '头发'), createWord(144, 'face', '脸'),
  createWord(145, 'eye', '眼睛'), createWord(146, 'ear', '耳朵'), createWord(147, 'nose', '鼻子'), createWord(148, 'mouth', '嘴巴'),
  createWord(149, 'tooth', '牙齿'), createWord(150, 'tongue', '舌头'), createWord(151, 'neck', '脖子'), createWord(152, 'shoulder', '肩膀'),
  createWord(153, 'arm', '胳膊'), createWord(154, 'hand', '手'), createWord(155, 'finger', '手指'), createWord(156, 'leg', '腿'),
  createWord(157, 'knee', '膝盖'), createWord(158, 'foot', '脚'), createWord(159, 'toe', '脚趾'), createWord(160, 'stomach', '胃'),
  createWord(161, 'back', '背'), createWord(162, 'heart', '心'), createWord(163, 'smile', '微笑'), createWord(164, 'cry', '哭'),
  createWord(165, 'sick', '生病的'), createWord(166, 'healthy', '健康的'), createWord(167, 'strong', '强壮的'), createWord(168, 'fat', '胖的'),
  createWord(169, 'thin', '瘦的'), createWord(170, 'tall', '高的'),

  // Family & People
  createWord(171, 'family', '家庭'), createWord(172, 'father', '父亲'), createWord(173, 'dad', '爸爸'), createWord(174, 'mother', '母亲'),
  createWord(175, 'mom', '妈妈'), createWord(176, 'parents', '父母'), createWord(177, 'grandfather', '祖父'), createWord(178, 'grandmother', '祖母'),
  createWord(179, 'brother', '兄弟'), createWord(180, 'sister', '姐妹'), createWord(181, 'uncle', '叔叔/舅舅'), createWord(182, 'aunt', '阿姨/姑姑'),
  createWord(183, 'cousin', '堂(表)兄弟姐妹'), createWord(184, 'son', '儿子'), createWord(185, 'daughter', '女儿'), createWord(186, 'baby', '婴儿'),
  createWord(187, 'boy', '男孩'), createWord(188, 'girl', '女孩'), createWord(189, 'man', '男人'), createWord(190, 'woman', '女人'),
  createWord(191, 'friend', '朋友'), createWord(192, 'people', '人'), createWord(193, 'doctor', '医生'), createWord(194, 'nurse', '护士'),
  createWord(195, 'police', '警察'), createWord(196, 'driver', '司机'), createWord(197, 'farmer', '农民'), createWord(198, 'cook', '厨师'),
  createWord(199, 'king', '国王'), createWord(200, 'queen', '女王'),

  // Nature & Weather
  createWord(201, 'nature', '自然'), createWord(202, 'sky', '天空'), createWord(203, 'sun', '太阳'), createWord(204, 'moon', '月亮'),
  createWord(205, 'star', '星星'), createWord(206, 'cloud', '云'), createWord(207, 'rain', '雨'), createWord(208, 'snow', '雪'),
  createWord(209, 'wind', '风'), createWord(210, 'rainbow', '彩虹'), createWord(211, 'tree', '树'), createWord(212, 'flower', '花'),
  createWord(213, 'grass', '草'), createWord(214, 'river', '河'), createWord(215, 'lake', '湖'), createWord(216, 'sea', '海'),
  createWord(217, 'mountain', '山'), createWord(218, 'forest', '森林'), createWord(219, 'park', '公园'), createWord(220, 'garden', '花园'),
  createWord(221, 'weather', '天气'), createWord(222, 'hot', '热的'), createWord(223, 'cold', '冷的'), createWord(224, 'warm', '温暖的'),
  createWord(225, 'cool', '凉爽的'), createWord(226, 'sunny', '晴朗的'), createWord(227, 'cloudy', '多云的'), createWord(228, 'rainy', '下雨的'),
  createWord(229, 'snowy', '下雪的'), createWord(230, 'windy', '有风的'),

  // Home & Daily Life
  createWord(231, 'home', '家'), createWord(232, 'house', '房子'), createWord(233, 'room', '房间'), createWord(234, 'bedroom', '卧室'),
  createWord(235, 'kitchen', '厨房'), createWord(236, 'bathroom', '浴室'), createWord(237, 'living room', '客厅'), createWord(238, 'bed', '床'),
  createWord(239, 'sofa', '沙发'), createWord(240, 'table', '桌子'), createWord(241, 'lamp', '台灯'), createWord(242, 'phone', '电话'),
  createWord(243, 'tv', '电视'), createWord(244, 'fridge', '冰箱'), createWord(245, 'key', '钥匙'), createWord(246, 'box', '盒子'),
  createWord(247, 'clock', '钟'), createWord(248, 'watch', '手表'), createWord(249, 'glass', '玻璃杯'), createWord(250, 'cup', '杯子'),
  createWord(251, 'plate', '盘子'), createWord(252, 'spoon', '勺子'), createWord(253, 'fork', '叉子'), createWord(254, 'knife', '刀'),
  createWord(255, 'chopsticks', '筷子'), createWord(256, 'bowl', '碗'), createWord(257, 'toothbrush', '牙刷'), createWord(258, 'soap', '肥皂'),
  createWord(259, 'towel', '毛巾'), createWord(260, 'umbrella', '雨伞'),

  // Clothing
  createWord(261, 'clothes', '衣服'), createWord(262, 'shirt', '衬衫'), createWord(263, 't-shirt', 'T恤'), createWord(264, 'dress', '连衣裙'),
  createWord(265, 'skirt', '短裙'), createWord(266, 'pants', '裤子'), createWord(267, 'jeans', '牛仔裤'), createWord(268, 'shorts', '短裤'),
  createWord(269, 'shoes', '鞋子'), createWord(270, 'socks', '袜子'), createWord(271, 'hat', '帽子'), createWord(272, 'coat', '外套'),
  createWord(273, 'jacket', '夹克'), createWord(274, 'sweater', '毛衣'), createWord(275, 'scarf', '围巾'), createWord(276, 'gloves', '手套'),
  createWord(277, 'boots', '靴子'), createWord(278, 'glasses', '眼镜'), createWord(279, 'bag', '包'), createWord(280, 'cap', '鸭舌帽'),

  // Transport & City
  createWord(281, 'car', '汽车'), createWord(282, 'bus', '公交车'), createWord(283, 'bike', '自行车'), createWord(284, 'train', '火车'),
  createWord(285, 'plane', '飞机'), createWord(286, 'ship', '船'), createWord(287, 'boat', '小船'), createWord(288, 'taxi', '出租车'),
  createWord(289, 'subway', '地铁'), createWord(290, 'truck', '卡车'), createWord(291, 'city', '城市'), createWord(292, 'street', '街道'),
  createWord(293, 'road', '路'), createWord(294, 'shop', '商店'), createWord(295, 'supermarket', '超市'), createWord(296, 'zoo', '动物园'),
  createWord(297, 'hospital', '医院'), createWord(298, 'restaurant', '餐厅'), createWord(299, 'bank', '银行'), createWord(300, 'hotel', '酒店'),

  // Verbs (Actions)
  createWord(301, 'run', '跑'), createWord(302, 'jump', '跳'), createWord(303, 'walk', '走'), createWord(304, 'swim', '游泳'),
  createWord(305, 'fly', '飞'), createWord(306, 'eat', '吃'), createWord(307, 'drink', '喝'), createWord(308, 'sleep', '睡觉'),
  createWord(309, 'wake', '醒'), createWord(310, 'sit', '坐'), createWord(311, 'stand', '站'), createWord(312, 'read', '读'),
  createWord(313, 'write', '写'), createWord(314, 'draw', '画'), createWord(315, 'sing', '唱'), createWord(316, 'dance', '跳舞'),
  createWord(317, 'play', '玩'), createWord(318, 'watch', '看'), createWord(319, 'listen', '听'), createWord(320, 'speak', '说'),
  createWord(321, 'talk', '谈话'), createWord(322, 'ask', '问'), createWord(323, 'answer', '回答'), createWord(324, 'think', '想'),
  createWord(325, 'know', '知道'), createWord(326, 'learn', '学习'), createWord(327, 'teach', '教'), createWord(328, 'buy', '买'),
  createWord(329, 'sell', '卖'), createWord(330, 'open', '打开'), createWord(331, 'close', '关闭'), createWord(332, 'come', '来'),
  createWord(333, 'go', '去'), createWord(334, 'stop', '停'), createWord(335, 'wait', '等'), createWord(336, 'help', '帮助'),
  createWord(337, 'love', '爱'), createWord(338, 'like', '喜欢'), createWord(339, 'hate', '讨厌'), createWord(340, 'want', '想要'),
  createWord(341, 'need', '需要'), createWord(342, 'give', '给'), createWord(343, 'take', '拿'), createWord(344, 'make', '制作'),
  createWord(345, 'cook', '做饭'), createWord(346, 'wash', '洗'), createWord(347, 'clean', '打扫'), createWord(348, 'work', '工作'),
  createWord(349, 'drive', '开车'), createWord(350, 'ride', '骑'),

  // Adjectives
  createWord(351, 'big', '大的'), createWord(352, 'small', '小的'), createWord(353, 'long', '长的'), createWord(354, 'short', '短的/矮的'),
  createWord(355, 'good', '好的'), createWord(356, 'bad', '坏的'), createWord(357, 'happy', '快乐的'), createWord(358, 'sad', '伤心的'),
  createWord(359, 'angry', '生气的'), createWord(360, 'tired', '累的'), createWord(361, 'hungry', '饿的'), createWord(362, 'thirsty', '渴的'),
  createWord(363, 'fast', '快的'), createWord(364, 'slow', '慢的'), createWord(365, 'new', '新的'), createWord(366, 'old', '旧的/老的'),
  createWord(367, 'young', '年轻的'), createWord(368, 'beautiful', '美丽的'), createWord(369, 'ugly', '丑的'), createWord(370, 'cute', '可爱的'),
  createWord(371, 'clean', '干净的'), createWord(372, 'dirty', '脏的'), createWord(373, 'easy', '容易的'), createWord(374, 'hard', '困难的/硬的'),
  createWord(375, 'soft', '软的'), createWord(376, 'loud', '大声的'), createWord(377, 'quiet', '安静的'), createWord(378, 'rich', '富有的'),
  createWord(379, 'poor', '贫穷的'), createWord(380, 'expensive', '昂贵的'), createWord(381, 'cheap', '便宜的'), createWord(382, 'full', '满的/饱的'),
  createWord(383, 'empty', '空的'), createWord(384, 'dark', '黑暗的'), createWord(385, 'bright', '明亮的'), createWord(386, 'heavy', '重的'),
  createWord(387, 'light', '轻的'), createWord(388, 'high', '高的'), createWord(389, 'low', '低的'), createWord(390, 'busy', '忙的'),

  // Colors & Numbers & Others
  createWord(391, 'red', '红色'), createWord(392, 'blue', '蓝色'), createWord(393, 'yellow', '黄色'), createWord(394, 'green', '绿色'),
  createWord(395, 'orange', '橙色'), createWord(396, 'purple', '紫色'), createWord(397, 'pink', '粉色'), createWord(398, 'brown', '棕色'),
  createWord(399, 'black', '黑色'), createWord(400, 'white', '白色'), createWord(401, 'gray', '灰色'), createWord(402, 'gold', '金色'),
  createWord(403, 'one', '一'), createWord(404, 'two', '二'), createWord(405, 'three', '三'), createWord(406, 'four', '四'),
  createWord(407, 'five', '五'), createWord(408, 'six', '六'), createWord(409, 'seven', '七'), createWord(410, 'eight', '八'),
  createWord(411, 'nine', '九'), createWord(412, 'ten', '十'), createWord(413, 'eleven', '十一'), createWord(414, 'twelve', '十二'),
  createWord(415, 'twenty', '二十'), createWord(416, 'thirty', '三十'), createWord(417, 'hundred', '百'), createWord(418, 'thousand', '千'),
  createWord(419, 'morning', '早上'), createWord(420, 'afternoon', '下午'), createWord(421, 'evening', '晚上'), createWord(422, 'night', '夜晚'),
  createWord(423, 'today', '今天'), createWord(424, 'tomorrow', '明天'), createWord(425, 'yesterday', '昨天'), createWord(426, 'year', '年'),
  createWord(427, 'month', '月'), createWord(428, 'week', '周'), createWord(429, 'day', '天'), createWord(430, 'time', '时间'),
  createWord(431, 'hello', '你好'), createWord(432, 'bye', '再见'), createWord(433, 'please', '请'), createWord(434, 'sorry', '对不起'),
  createWord(435, 'yes', '是'), createWord(436, 'no', '不'), createWord(437, 'who', '谁'), createWord(438, 'what', '什么'),
  createWord(439, 'where', '哪里'), createWord(440, 'when', '什么时候'), createWord(441, 'why', '为什么'), createWord(442, 'how', '怎样'),
  createWord(443, 'ball', '球'), createWord(444, 'doll', '洋娃娃'), createWord(445, 'kite', '风筝'), createWord(446, 'robot', '机器人'),
  createWord(447, 'balloon', '气球'), createWord(448, 'gift', '礼物'), createWord(449, 'party', '派对'), createWord(450, 'game', '游戏'),
];
