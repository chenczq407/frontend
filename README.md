# Sport Snack Frontend

## Overview / 项目简介

This repository contains the frontend for the student-side Sport Snack mini-program prototype. The current runtime target is `uni-app + Vue 3 + TypeScript`, and the primary build target is WeChat Mini Program.

这个仓库是 Sport Snack 学生端小程序原型的前端代码库。当前运行时基于 `uni-app + Vue 3 + TypeScript`，主要构建目标是微信小程序。

## Tech Stack / 技术栈

- `uni-app`
- `Vue 3`
- `TypeScript`
- `Vitest`
- `UnoCSS`
- `pnpm`

## Prerequisites / 环境准备

Before you start, install the following tools:

开始之前，请先准备以下工具：

- `Node.js`
- `pnpm`

## Install Dependencies / 安装依赖

```bash
pnpm install
```

## Start Development / 本地开发

Start the WeChat Mini Program target:

启动微信小程序目标：

```bash
pnpm dev
```

The default `dev` script runs:

默认的 `dev` 脚本执行的是：

```bash
uni -p mp-weixin
```

You can also run the same target explicitly:

你也可以显式运行同一个目标：

```bash
pnpm dev:mp-weixin
```

## Run Tests / 运行测试

```bash
pnpm test
```

This runs:

对应脚本为：

```bash
vitest run
```

## Build / 构建

Build the WeChat Mini Program bundle:

构建微信小程序产物：

```bash
pnpm build
```

The current build output is:

当前构建输出目录为：

```text
dist/build/mp-weixin
```

## Key Files / 关键文件

- `package.json`: project scripts and dependencies / 项目脚本与依赖
- `src/main.ts`: uni-app runtime entry / uni-app 运行时入口
- `src/App.vue`: root app shell / 根应用壳层
- `src/manifest.json`: mini-program manifest / 小程序清单配置
- `src/pages.json`: page routing and navigation titles / 页面路由与导航标题
- `src/uni-app/pages/**`: mini-program page implementations / 小程序页面实现
- `src/tests/**`: test suite / 测试目录

## Common Commands / 常用命令

```bash
pnpm install
pnpm dev
pnpm test
pnpm build
```
