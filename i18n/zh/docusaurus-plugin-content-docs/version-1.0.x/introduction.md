---
sidebar_position: 1
---

# 介绍

Agros 是用于构建稳定、干净并且可扩展的 Web 应用程序的框架。它基于 TypeScript 并整合了面向对象编程 (Object Oriented Programming) 和函数式编程 (Functional Programming) 的思想。

## 动机

Web front-end frameworks (such as React.js, Vue.js and so on) has greatly helped developers build fast and responsive web applications, while its simplicity has also allowed it to accumulate a large number of users in a short period of time, and some large websites have started to be built entirely using them. All of this speaks volumes about the success of them. However, there are a number of architectural problems with building large web applications using front-end frameworks that add up to additional and increasingly large expenses for maintaining and iterating on the project, and Agros was created to solve these problems.

Web 前端框架 (例如 React.js、Vue.js 等等) 极大程度地帮助了开发者构建快速的响应式 Web 应用程序，因此它们的易用性在短时间内迅速吸引了大量的用户，一部分大型网站甚至开始全量使用它们来构建。以上种种都说明了它们的成功。然而，

Inspired by [Angular](https://angular.io) and [Nest.js](https://nestjs.com/) and based on multiple platforms support, Agros provides an out-of-the-box experience to help developers create highly available, highly maintainable, stable, and low-coupling web applications.

## 特性

- Easy to Use. Agros provides some extremely simple decorators and methods to help you get started with Agros quickly, and Agros is minimally invasive to existing projects, so there's no need to go through the trouble of refactoring your code
- Framework Unrelated. Agros is a runtime for extensible web application architectures that does not contain any framework-related methods. Agros implements framework-specific abstractions based on platform technologies, so framework support can be implemented by introducing the corresponding platform. Agros currently has full support for React.js and Vue.js respectively
- Empower Efficiency. Agros provides a set of command line tools to help you quickly generate various modules of Agros applications. In addition, Agros uses a convention-over-configuration model, which allows you to quickly jump into development without having to pay too much attention to various configuration items

## 快速开始

### 安装

To get started, you can either scaffold the project with the Agros CLI. The Agros CLI helps you easily make and configure collections (providers, components and modules) into your projects, which is useful when the structure project is increasing:

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
