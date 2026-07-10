---
name: english-vocab
description: 当用户说"英语"、"学英语"、"背单词"、"词汇"、"English"、"vocabulary"、"单词"时触发，打开英语视觉词汇学习 App
allowed-tools: Read, Glob
argument-hint: [open | add-word <category> <word> | list-categories]
---

# 📖 English Visual Vocabulary - 英语视觉词汇 App

DK 风格的场景分类视觉词汇学习工具。**275 个核心词汇**，按 **10 个生活场景**细分，支持音频播放、搜索、收藏、暗色模式。

## 启动方式

**直接双击文件打开：**
```
C:\Users\weito\.claude\skills\english-vocab\index.html
```

在浏览器中打开即可使用，无需服务器、无需安装任何依赖。

## 文件结构

```
english-vocab/
├── SKILL.md              # 本文件 - Skill 定义
├── index.html            # 主入口（双击打开）
├── css/
│   └── style.css         # DK 风格样式（响应式 + 暗色模式）
├── js/
│   ├── data.js           # 词汇数据（275词/10场景，可编辑扩展）
│   └── app.js            # 应用逻辑（路由、搜索、收藏、TTS）
└── assets/
    └── images/           # （预留）后续替换为真实配图
```

## 功能说明

| 功能 | 操作 |
|------|------|
| 🏠 **场景分类** | 首页 10 个场景卡片，点击进入 |
| 🔍 **搜索** | 顶部搜索框，中英文实时过滤 |
| 🔊 **语音播放** | 点击「听单词」或「听例句」按钮，浏览器 TTS 朗读 |
| 💝 **收藏** | 点击 🤍 收藏单词，在收藏页集中复习 |
| 🌙 **暗色模式** | 点击右上角 🌙/☀️ 切换 |
| 📱 **响应式** | 手机/平板/桌面均可使用 |

## 10 个场景

| Emoji | 场景 | 词汇数 | 内容 |
|-------|------|--------|------|
| 🏡 | **居家生活** At Home | 39 | 房间空间、客厅/卧室/浴室家具物品、居家动作 |
| 🍳 | **厨房烹饪** Kitchen & Cooking | 28 | 厨具电器、烹饪动作、调味料 |
| 🛒 | **购物服装** Shopping & Clothes | 29 | 服饰鞋帽、配饰、购物结账、退换货 |
| 🍽️ | **外出就餐** Eating Out | 25 | 预订点餐、菜品、餐具、结账打包 |
| 💼 | **办公室工作** Office & Work | 25 | 办公用品、会议、电邮、职场 |
| ✈️ | **旅行交通** Travel & Transport | 30 | 机场、酒店、交通方式、观光 |
| 🌤️ | **天气自然** Weather & Nature | 24 | 天气、四季、自然环境 |
| 🏥 | **健康医疗** Health & Medical | 25 | 身体部位、症状、看病吃药 |
| 🏃 | **运动休闲** Sports & Hobbies | 25 | 各类运动、休闲爱好、比赛 |
| 📚 | **学习教育** School & Education | 25 | 科目、学校设施、学习动作 |

## 扩展词汇

编辑 `js/data.js` 文件，按以下格式添加新词汇：

```javascript
{
  id: "new-word-id",          // 唯一标识
  word: "new word",           // 英文
  phonetic: "/njuː wɜːrd/",  // 音标
  translation: "新单词",      // 中文释义
  emoji: "🌟",                // 表情符号占位图
  examples: [
    { en: "Example sentence.", zh: "例句翻译。" }
  ]
}
```

## 替换配图

1. 将图片放入 `assets/images/` 目录
2. 修改 `data.js` 中对应单词的 `emoji` 字段为图片路径（如 `"assets/images/alarm-clock.png"`）
3. 代码会自动检测并使用 `<img>` 标签替换 emoji 显示

## 技术说明

- **纯静态网页**：HTML + CSS + JavaScript，零依赖
- **语音引擎**：Web Speech API (TTS)，浏览器自带，无需联网
- **数据存储**：LocalStorage（收藏记录）
- **数据格式**：JSON，方便编辑和扩展
