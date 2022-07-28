---
sidebar_position: 1
---

# First Steps

In this set of documentations, we will describe and document the core fundamentals of Agros. To get familiar with the essential building blocks of Agros applications, we'll build a basic application with features that cover the most scenes for you to bootstrap from Agros.

## Prerequisites

✅ Use TypeScript to write project<br />
✅ [Node.js](https://nodejs.org) v16.0.0 or later<br />
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
This command will generate the project's files in the directory where the command is executed, so if a file or directory or anything else exists in the current directory, it will throw an error and terminate execution

Of course, you can also select another directory by means of `--path [value]`, and when this directory does not exist, Agros CLI will create it automatically.
:::

Here are the initial files in the project:

```
.
|----LICENSE
|----README.md
|----public
| |----favicon.ico
| |----index.html
| |----logo512.png
| |----manifest.json
| |----robots.txt
| |----logo192.png
|----.gitignore
|----package.json
|----.eslintrc.js
|----tsconfig.json
|----.eslintignore
|----src
| |----App.tsx
| |----app.module.ts
| |----app.component.ts
| |----reportWebVitals.ts
| |----app.component.css
| |----index.ts
| |----react-app-env.d.ts
```

Here's a brief overview of the important files in `src` directory:

| Filename | Description |
| --- | --- |
| `App.tsx` | React Component for entry |
|单元格|单元格|
