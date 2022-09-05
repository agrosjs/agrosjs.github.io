---
sidebar_position: 0
---

# agros.config.js

`agros.config.js` is the official file for configuration of Agros project. It contains several configuration items, includes `platform`, `alias`, collection configuration and so on.

## platform

- Type: `string`
- Default: `@agros/platform-react`

The **full** package name of the [platform](/docs/overview/application#platforms) which the project currently uses. Default is `@agros/platform-react`.

:::caution
Before switching a platform to another platform, you must install the new platform's NPM package first.
:::

## npmClient

- Type: `string`
- Default: `npm`

The NPM client for current project. The value of this configuration item must be a CLI command name.

## baseDir

- Type: `string`
- Default: `src`

The directory of code for current project. It is a relative path to the root directory of project. For example, if a project's root directory is `/path/to/project`, `baseDir` is `src`, the code directory would be `/path/to/project/src`.

## modulesDir

- Type: `string`
- Default: `modules`

The directory of modules for current project. It is a relative path to the code directory of project. For example, if a project's code directory is `/path/to/project/src`, `modulesDir` is `modules`, the code directory would be `/path/to/project/src/modules`.

:::tip
The directory maybe not include root module.
:::

## entry

- Type: `string`
- Default: `index.ts`

The entry file pathname relative to `baseDir`. Its absolute pathname will be set to Webpack configuration.

## alias

- Type: `Object`
- Default:

```json
{
    "@/*": "*",
    "@modules/*": "modules/*"
}
```

Tha alias map of current project. It is the same as [TSConfig Paths](https://www.typescriptlang.org/tsconfig#paths) and will be set to [`alias`](https://webpack.js.org/configuration/resolve/#resolvealias) field of Webpack configuration.

The values of the map are relative to `baseDir`.

## collection

- Type: `Object`
- Default:

```json
{
    "module": ["*.module.ts", "*.module.tsx"],
    "service": ["*.service.ts"],
    "component": ["*.component.ts", "*.component.tsx"],
    "interceptor": ["*.interceptor.ts"],
}
```

The pathname glob patterns map for collection types. The files who match those values will be recognized to the corresponding collection type. In general, this field should always be set to default value.

## configWebpack

- Type: `Function`
- Default: `(config) => config`

A modifier function to modify Webpack config from `@agros/app`. It passes a `config` object that points to the default Webpack config.

## configWebpackDevServer

- Type: `Function`
- Default: `(config) => config`

A modifier function to modify Webpack Dev Server config from `@agros/app`. It passes a `config` object that points to the default Webpack Dev Server config.
