# 🧒 SmartKids 快乐学习（SmartKids Learning Hub）

> 一个面向小朋友的数学与英语练习应用 —— **每天进步一点点！**

![React](https://img.shields.io/badge/React-18-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Vite](https://img.shields.io/badge/Vite-5-646CFF)
![Capacitor](https://img.shields.io/badge/Capacitor-6-lightgrey)
![AI Studio](https://img.shields.io/badge/Google%20AI%20Studio-Generated-4285F4)
![GitHub last commit](https://img.shields.io/github/last-commit/hangzhouspark/SmartKids-Learning-Hub)
![GitHub stars](https://img.shields.io/github/stars/hangzhouspark/SmartKids-Learning-Hub)

## ✨ 项目简介

SmartKids Learning Hub（SmartKids 快乐学习）是一款**儿童友好的数学与英语练习应用**，由 Google AI Studio 生成。它把枯燥的练习变成可爱的卡片式小游戏：

- ➕➖ **数学练习**：1000 以内的加减乘除
- 🔤 **单词记忆**：初级英语单词认读与拼写
- 📕 **错题本**：做错的题自动收录，随时复习巩固
- 📊 **学习记录**：查看历史练习进度，支持**导出 CSV** 存档

所有学习数据保存在**设备本地（localStorage）**，无需联网即可使用；应用基于 **Capacitor** 可打包为 Android / iOS 原生应用。

## 🧩 功能一览

| 功能 | 说明 |
| --- | --- |
| 数学练习 | 1000 以内加减乘除随机出题，即时判断对错 |
| 单词记忆 | 初级英语单词练习，趣味记忆 |
| 数学错题本 | 自动收录算错的题目，便于针对性复习 |
| 英语错题本 | 自动收录拼错/写错的单词 |
| 学习记录 | 历史成绩汇总、错题回顾，可导出 CSV |
| 移动端 | Capacitor 打包 Android / iOS 应用 |

## 🛠 技术栈

| 分类 | 技术 |
| --- | --- |
| 前端 | React 18 + TypeScript |
| 构建 | Vite 5 |
| 样式 | Tailwind CSS + 卡通风格自定义样式 |
| 图标 | lucide-react |
| 移动端 | Capacitor 6（Android / iOS） |
| 数据 | localStorage 本地存储 |
| 来源 | Google AI Studio 生成项目 |

## 🚀 本地运行

**环境要求：** Node.js

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev
```

浏览器打开 Vite 输出的地址即可使用。

> 💡 本模板来自 Google AI Studio。如需在 AI Studio 中运行/部署，可在 `.env.local` 中配置 `GEMINI_API_KEY`（当前应用核心功能不依赖网络，可离线使用）。

## 📱 打包移动端（Capacitor）

```bash
# Android（首次需先初始化）
npm run android:init

# 构建 Web 产物并同步到 Android 工程
npm run android:build
```

> iOS 构建需在 macOS + Xcode 环境，Android 需要 Android Studio / SDK。

## 📁 项目结构

```
├── App.tsx                 # 主界面与页面切换
├── components/             # 页面组件
│   ├── MathPractice.tsx    # 数学练习
│   ├── EnglishPractice.tsx # 单词记忆
│   ├── MistakeBook.tsx     # 错题本（数学/英语）
│   ├── Summary.tsx         # 学习记录汇总
│   └── Button.tsx          # 通用按钮
├── services/
│   └── storageService.ts   # 本地存储（历史/错题/导出 CSV）
├── utils/                  # 出题生成器、单词库
├── types.ts                # 类型定义
├── capacitor.config.ts     # Capacitor 配置
└── index.html / vite.config.ts
```

## 🔗 在线体验

在 Google AI Studio 查看并运行：https://ai.studio/apps/drive/1LlVaVWwRX5HSzz3KUGpDdVGCaUOcYWGm