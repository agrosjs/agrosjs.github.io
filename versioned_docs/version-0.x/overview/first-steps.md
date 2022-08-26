---
sidebar_position: 1
---

# First Steps

In this set of documentations, we will describe and document the core fundamentals of Agros. To get familiar with the essential modules of Agros applications, we'll build a basic application with features that cover the most scenes for you to get started with Agros.

## Prerequisites

✅ Use TypeScript to write project<br />
✅ [Node.js](https://nodejs.org) v16.14.0 or later<br />
✳️ A computer with 4 GB RAM

:::tip
Item with "✅" means it is a "it must to" requirement while "✳️" means "it's better to".
:::

## Initialization

Initializing a project requires preparing the NPM and installing the Agros CLI. You can run the following command in your operating system to initialize a new Agros project:

```bash
npm i @agros/cli -g
agros generate application
```

:::tip
This command will generate the project's files in the directory where the command is executed, so if a file or directory or anything else exists in the current directory, it will throw an error and terminate execution.

Of course, you can also select another directory by means of `--path [value]`, and when this directory does not exist, Agros CLI will create it automatically.
:::

Here are the initial files in the project:

```
.
├── LICENSE
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── app.component.css
│   ├── app.component.ts
│   ├── app.interceptor.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── App.tsx
│   └── index.ts
└── tsconfig.json
```

Here's a brief overview of the important files in `src` directory:

| Filename | Description |
| --- | --- |
| `app.component.ts` | The component declaration file |
| `app.interceptor.ts` | The interceptor declaration file |
| `app.module.ts` | The root-point module |
| `App.tsx` | The component file for React platform |
| `index.ts` | The entry point for the whole project |

## Change Platform

By default, Agros starter boilerplate uses `@agros/platform-react` as its default platform, which means you can write React code in the starter project without changing platform.

If you want to change a platform, for example, switch from React to Vue, you can make it by following commands:

1. Uninstall `@agros/platform-react`:

```bash
npm uninstall @agros/platfrom-react -S
```

2. Install official Vue platform `@agros/platform-vue`:

```bash
npm i @agros/platform-vue -S
```

3. Add a new file named `agros.config.js` into project directory, and write the following lines:

```js
module.exports = {
    platform: '@agros/platform-vue',
};
```

4. Remove React TSX files and add Vue files

:::tip
You can find all official platforms at [here](https://www.npmjs.com/search?q=%40agros%2Fplatform-).
:::
