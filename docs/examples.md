---
sidebar_position: 4
---

# Examples

## @agros/example

`@agros/example` is a built-in example package in Agros' code repo which offers two demos with two platforms of React.js and Vue.js. You can find the code [here](https://github.com/agrosjs/agros/tree/master/packages/agros-example).

To run the example, you should do the following things:

Clone the Agros code repo:

```bash
git clone git@github.com:agrosjs/agros.git
```

Install PNPM and Rush globally:

```bash
npm i pnpm @microsoft/rushstack -g
```

Install dependencies:

```bash
# Install project dependencies
npm i
# Install packages dependencies
rush install
```

Start the example project

```bash
# Start React.js demo
pnpm --filter @agros/example run start:react
# Start Vue.js demo
pnpm --filter @agros/example run start:vue
```

## Starter Template

`@agros/create-app` also offers a starter template with `@agros/platform-react`. Follow this [documentation](/docs/overview/first-steps#initialization) and you can get a starter template to easily start a example demo.
