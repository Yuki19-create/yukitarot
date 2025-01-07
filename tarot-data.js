const MAJOR_ARCANA = [
    {
        id: 0,
        name: '愚者',
        image: '0.jpg',
        uprightMeaning: '新的开始、冒险、自发性、纯真、自由',
        reversedMeaning: '鲁莽、冒失、危险的行为、不负责任'
    },
    {
        id: 1,
        name: '魔术师',
        image: '1.jpg',
        uprightMeaning: '创造力、技能、意志力、自信、机遇',
        reversedMeaning: '技能未开发、自我怀疑、机会错失'
    },
    {
        id: 2,
        name: '女祭司',
        image: '2.jpg',
        uprightMeaning: '直觉、神秘、内在知识、智慧、洞察力',
        reversedMeaning: '直觉受阻、表面判断、隐藏的真相'
    },
    {
        id: 3,
        name: '女皇',
        image: '3.jpg',
        uprightMeaning: '丰饶、创造力、母性、爱、自然',
        reversedMeaning: '创造力受阻、依赖、过度保护'
    },
    {
        id: 4,
        name: '皇帝',
        image: '4.jpg',
        uprightMeaning: '权威、领导力、控制、稳定、父性',
        reversedMeaning: '控制欲、专制、固执、无力感'
    },
    {
        id: 5,
        name: '教皇',
        image: '5.jpg',
        uprightMeaning: '传统、信仰、教育、精神指引',
        reversedMeaning: '叛逆、非传统、不信任权威'
    },
    {
        id: 6,
        name: '恋人',
        image: '6.jpg',
        uprightMeaning: '爱情、和谐、关系、价值观、选择',
        reversedMeaning: '不和谐、价值观冲突、错误的选择'
    },
    {
        id: 7,
        name: '战车',
        image: '7.jpg',
        uprightMeaning: '胜利、意志力、决心、自控',
        reversedMeaning: '失控、阻碍、缺乏方向'
    },
    {
        id: 8,
        name: '力量',
        image: '8.jpg',
        uprightMeaning: '勇气、力量、说服力、影响力',
        reversedMeaning: '自我怀疑、软弱、缺乏信心'
    },
    {
        id: 9,
        name: '隐士',
        image: '9.jpg',
        uprightMeaning: '内省、寻找指引、智慧、孤独',
        reversedMeaning: '孤立、退缩、迷失方向'
    },
    {
        id: 10,
        name: '命运之轮',
        image: '10.jpg',
        uprightMeaning: '命运、转折点、机会、变化',
        reversedMeaning: '厄运、阻碍、不利变化'
    },
    {
        id: 11,
        name: '正义',
        image: '11.jpg',
        uprightMeaning: '正义、真理、诚实、因果',
        reversedMeaning: '不公、不诚实、失衡'
    },
    {
        id: 12,
        name: '倒吊人',
        image: '12.jpg',
        uprightMeaning: '牺牲、洞察、放下、暂停',
        reversedMeaning: '拖延、抗拒、无用功'
    },
    {
        id: 13,
        name: '死神',
        image: '13.jpg',
        uprightMeaning: '结束、转变、蜕变、新生',
        reversedMeaning: '停滞、抗拒改变、无法放下'
    },
    {
        id: 14,
        name: '节制',
        image: '14.jpg',
        uprightMeaning: '平衡、节制、耐心、调和',
        reversedMeaning: '失衡、过度、缺乏耐心'
    },
    {
        id: 15,
        name: '恶魔',
        image: '15.jpg',
        uprightMeaning: '束缚、欲望、执着、物质主义',
        reversedMeaning: '释放、觉醒、摆脱束缚'
    },
    {
        id: 16,
        name: '高塔',
        image: '16.jpg',
        uprightMeaning: '突变、崩塌、启示、解放',
        reversedMeaning: '避免灾难、渐进改变'
    },
    {
        id: 17,
        name: '星星',
        image: '17.jpg',
        uprightMeaning: '希望、启发、宁静、引导',
        reversedMeaning: '失望、丧失信心、迷失方向'
    },
    {
        id: 18,
        name: '月亮',
        image: '18.jpg',
        uprightMeaning: '直觉、梦境、幻想、潜意识',
        reversedMeaning: '恐惧、焦虑、误解'
    },
    {
        id: 19,
        name: '太阳',
        image: '19.jpg',
        uprightMeaning: '快乐、活力、成功、真理',
        reversedMeaning: '暂时的快乐、过度乐观'
    },
    {
        id: 20,
        name: '审判',
        image: '20.jpg',
        uprightMeaning: '重生、觉醒、改变、决定',
        reversedMeaning: '拖延、犹豫、自我怀疑'
    },
    {
        id: 21,
        name: '世界',
        image: '21.jpg',
        uprightMeaning: '完成、圆满、整合、成就',
        reversedMeaning: '未完成、停滞、拖延'
    }
];

// 小阿尔卡纳牌
const MINOR_ARCANA = {
    wands: [
        { name: '权杖王牌', uprightMeaning: '创造力的开始、灵感、潜力', reversedMeaning: '创意受阻、错失机会' },
        { name: '权杖二', uprightMeaning: '规划、决定、发现', reversedMeaning: '犹豫不决、拖延' },
        { name: '权杖三', uprightMeaning: '探索、冒险、扩展', reversedMeaning: '延迟、分散注意力' },
        { name: '权杖四', uprightMeaning: '稳定、休息、庆祝', reversedMeaning: '不安、缺乏休息' },
        { name: '权杖五', uprightMeaning: '竞争、冲突、挑战', reversedMeaning: '避免冲突、内部斗争' },
        { name: '权杖六', uprightMeaning: '胜利、进展、认可', reversedMeaning: '骄傲、延迟的成功' },
        { name: '权杖七', uprightMeaning: '优势、竞争、勇气', reversedMeaning: '犹豫、失去优势' },
        { name: '权杖八', uprightMeaning: '行动、变化、进展', reversedMeaning: '延迟、分散注意力' },
        { name: '权杖九', uprightMeaning: '力量、准备、坚持', reversedMeaning: '障碍、延迟、健康问题' },
        { name: '权杖十', uprightMeaning: '负担、责任、压力', reversedMeaning: '负担的解脱、放下' },
        { name: '权杖侍从', uprightMeaning: '探索、热情、发现', reversedMeaning: '缺乏方向、过度热情' },
        { name: '权杖骑士', uprightMeaning: '行动、冒险、热情', reversedMeaning: '鲁莽、延迟、挫折' },
        { name: '权杖皇后', uprightMeaning: '热情、魅力、自信', reversedMeaning: '要求过高、脾气暴躁' },
        { name: '权杖国王', uprightMeaning: '创造力、领导力、魅力', reversedMeaning: '专制、鲁莽、急躁' }
    ],
    cups: [
        { name: '圣杯王牌', uprightMeaning: '情感的开始、直觉、爱', reversedMeaning: '情感受阻、不安' },
        { name: '圣杯二', uprightMeaning: '合作、伙伴关系、吸引', reversedMeaning: '不和谐、失衡' },
        { name: '圣杯三', uprightMeaning: '庆祝、友谊、社交', reversedMeaning: '过度放纵、孤独' },
        { name: '圣杯四', uprightMeaning: '沉思、倦怠、不满', reversedMeaning: '新的目标、行动' },
        { name: '圣杯五', uprightMeaning: '失望、遗憾、悲伤', reversedMeaning: '新希望、接受' },
        { name: '圣杯六', uprightMeaning: '怀旧、回忆、重聚', reversedMeaning: '停滞于过去、拒绝改变' },
        { name: '圣杯七', uprightMeaning: '选择、幻想、考虑', reversedMeaning: '现实、清醒' },
        { name: '圣杯八', uprightMeaning: '离开、寻找、改变', reversedMeaning: '恐惧改变、停滞' },
        { name: '圣杯九', uprightMeaning: '满足、幸福、成功', reversedMeaning: '物质主义、表面满足' },
        { name: '圣杯十', uprightMeaning: '完满、和谐、幸福', reversedMeaning: '破碎的关系、不和谐' },
        { name: '圣杯侍从', uprightMeaning: '创意、灵感、好消息', reversedMeaning: '阻碍的消息、幻想' },
        { name: '圣杯骑士', uprightMeaning: '浪漫、魅力、提议', reversedMeaning: '欺骗、虚假的承诺' },
        { name: '圣杯皇后', uprightMeaning: '同情心、关爱、支持', reversedMeaning: '情感依赖、不安全感' },
        { name: '圣杯国王', uprightMeaning: '同理心、平衡、外交', reversedMeaning: '情感操纵、不诚实' }
    ],
    swords: [
        { name: '宝剑王牌', uprightMeaning: '清晰、真理、突破', reversedMeaning: '混乱、暴力' },
        { name: '宝剑二', uprightMeaning: '决定、平衡、和平', reversedMeaning: '紧张、欺骗' },
        { name: '宝剑三', uprightMeaning: '心痛、悲伤、失落', reversedMeaning: '恢复、宽恕' },
        { name: '宝剑四', uprightMeaning: '休息、恢复、沉思', reversedMeaning: '焦虑、不安' },
        { name: '宝剑五', uprightMeaning: '冲突、失败、竞争', reversedMeaning: '和解、停战' },
        { name: '宝剑六', uprightMeaning: '过渡、改变、旅程', reversedMeaning: '阻碍、混乱' },
        { name: '宝剑七', uprightMeaning: '欺骗、策略、秘密', reversedMeaning: '揭露、坦白' },
        { name: '宝剑八', uprightMeaning: '限制、困境、无助', reversedMeaning: '自由、新视角' },
        { name: '宝剑九', uprightMeaning: '焦虑、恐惧、噩梦', reversedMeaning: '希望、释放' },
        { name: '宝剑十', uprightMeaning: '结束、失败、痛苦', reversedMeaning: '恢复、重生' },
        { name: '宝剑侍从', uprightMeaning: '新想法、好奇心、学习', reversedMeaning: '分心、延迟' },
        { name: '宝剑骑士', uprightMeaning: '行动、勇气、变化', reversedMeaning: '鲁莽、攻击性' },
        { name: '宝剑皇后', uprightMeaning: '独立、诚实、清晰', reversedMeaning: '冷酷、苛刻' },
        { name: '宝剑国王', uprightMeaning: '智慧、权威、真理', reversedMeaning: '滥用权力、残酷' }
    ],
    pentacles: [
        { name: '钱币王牌', uprightMeaning: '机会、繁荣、富足', reversedMeaning: '错失机会、物质损失' },
        { name: '钱币二', uprightMeaning: '平衡、适应、灵活', reversedMeaning: '失衡、混乱' },
        { name: '钱币三', uprightMeaning: '技能、工作、合作', reversedMeaning: '低质量、懒惰' },
        { name: '钱币四', uprightMeaning: '安全、保守、控制', reversedMeaning: '贪婪、不安全感' },
        { name: '钱币五', uprightMeaning: '困难、贫困、孤立', reversedMeaning: '恢复、帮助' },
        { name: '钱币六', uprightMeaning: '慷慨、礼物、繁荣', reversedMeaning: '自私、债务' },
        { name: '钱币七', uprightMeaning: '发展、评估、收获', reversedMeaning: '工作不足、失败' },
        { name: '钱币八', uprightMeaning: '技能、勤奋、细节', reversedMeaning: '完美主义、工作狂' },
        { name: '钱币九', uprightMeaning: '独立、享受、奢华', reversedMeaning: '物质主义、孤独' },
        { name: '钱币十', uprightMeaning: '财富、安全、传统', reversedMeaning: '失去财富、家庭问题' },
        { name: '钱币侍从', uprightMeaning: '机会、学习、实践', reversedMeaning: '缺乏进展、浪费' },
        { name: '钱币骑士', uprightMeaning: '工作、责任、常规', reversedMeaning: '懒惰、停滞' },
        { name: '钱币皇后', uprightMeaning: '富足、实用、安全', reversedMeaning: '依赖、不安全' },
        { name: '钱币国王', uprightMeaning: '富有、实践、成功', reversedMeaning: '贪婪、腐败' }
    ]
};

// 合并所有牌
const ALL_CARDS = [
    ...MAJOR_ARCANA,
    ...Object.values(MINOR_ARCANA).flat().map((card, index) => ({
        id: 22 + index,
        ...card,
        image: `${22 + index}.jpg`
    }))
];

const POSITIONS = {
    SINGLE: '当前指引',
    PAST: '过去',
    PRESENT: '现在',
    FUTURE: '未来'
};
