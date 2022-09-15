---
sidebar_position: 1
---

# 介绍

Agros 是用于构建稳定、干净并且可扩展的 Web 应用程序的框架。它基于 TypeScript 并整合了面向对象编程 (Object Oriented Programming) 和函数式编程 (Functional Programming) 的思想。

## 动机

Web 前端框架 (例如 React.js、Vue.js 等等) 极大程度地帮助了开发者构建快速的响应式 Web 应用程序，因此它们的易用性在短时间内迅速吸引了大量的用户，一部分大型网站甚至开始全量使用它们来构建。以上种种都说明了它们的成功。然而，使用前端框架构建大型 Web 应用程序存在一些架构上的问题，这些问题增加了维护和迭代项目的额外和越来越大的开支，Agros 就是为了解决这些问题而诞生的。

受 [Angular](https://angular.io) 和 [Nest.js](https://nestjs.com/) 的启发，基于多平台支持，Agros 提供开箱即用的体验，帮助开发者创建高可用、高可维护、稳定和低耦合的网络应用。

## 特性

- 易于使用。我们提供了一些极为简单的装饰器和方法来帮助你快速接入 Agros。此外，Agros 对现存的项目的侵入性也是很小的，因此不必费尽心思重构你的代码
- 框架无关。 Agros 是一种可扩展 Web 应用程序结构的运行时，它不包含任何框架相关的方法。Agros 基于平台 (Platform) 技术实现了具体框架的抽象，因此可以通过引入对应的平台以实现对框架的支持。目前我们分别对 React.js 和 Vue.js 实现了完整的支持。Agros目前分别对 React.js、Vue.js 和 Svelte.js 提供全面支持
- 提升效率 Agros 提供了一套命令行工具 (CLI) 来帮助你快速生成 Agros 应用程序的各种模块。此外，Agros 采用约定大于配置的模式，可以快速投入开发而无需过多关注各种配置项。

## 快速开始

### 安装

首先，你可以用 Agros CLI 来搭建项目的脚手架。Agros CLI 可以帮助你轻松地将 Collection (Providers、Components 和 Modules) 生成并配置到你的项目中，这在项目结构扩张时非常有用。

```bash
npm i @agros/cli -g
```

To scaffold the project with the Agros CLI, run the following commands:

```bash
# With Agros CLI
agros generate application
```

Follow the instruction prompted from CLI and it will create a new project in the current directory (or create a new project directory with `--path [value]` specified), and populate the directory with the initial core Agros files and supporting modules, creating a base structure for your project.

Creating a new project with the Agros CLI is recommended for first-time users. But you can still use `@agros/create-app` to alternatively generate the same project files:

```bash
# Globally install package
npm i @agros/create-app
# Generate project
npm create @agros/app
# or
create-agros-app
```

### TypeScript Configuration

In your `tsconfig.json` file in the project root directory, add following options into it:

```json
{
    "compilerOptions": {
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true
    }
}
```

### Run the Project

```bash
npm start
# or
npx agros-app start
```

Agros will start a server binds with `0.0.0.0:3000` after executing this command. If the `3000` port is already in use, it will automatically find a new port available.

### Build the Project

```bash
npm run build
# or
npx agros-app build
```

The default distribution directory is `build`, after executing this command, Agros will generate all the bundled files into it. You can run a HTTP server in it or do any other things you want with them.
