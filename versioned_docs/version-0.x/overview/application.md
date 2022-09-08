---
sidebar_position: 7
---

# Application

## Platforms

Agros supports many frameworks. Now we have already supported React.js and Vue.js with SFC officially, and we are still have Svelte and Solid.js in progress. Agros made it by the technology called **platform**. An Agros platform provides the following things:

- component generator: a function that can be invoked by Agros factory to generate framework-specific component with component declaration instance
- routes creator: a function that can be invoked by Agros factory to generate framework-specific routes config with `routes` option in `@Module()` decorator
- component decorator transformer: transform `file` option in `@Component()` decorator with import declarations that will be invoked by component generator to generate components

and so on to help Agros factory build and run the application.

By default, Agros provides two platforms mentioned above:

- [`@agros/platform-react`](https://npmjs.org/package/@agros/platform-react): Official platform for React.js
- [`@agros/platform-vue`](https://npmjs.org/package/@agros/platform-vue): Official platform for Vue.js

To use a platform, for example, use official Vue.js platform, run the following command in the root directory of your Agros project:

```bash
npm i @agros/platform-vue -S
```

and add the following code into `agros.config.js`:

```js title=agros.config.js
module.exports = {
    platform: '@agros/platform-vue',
};
```

## Entry Point

By default, Agros uses `src/index.ts` as the entry of an application. Agros build scripts takes an object default exported from this file:

- `module`: the root module class, be used of constructing the whole application dependencies graph
- `container`: a `HTMLElement` node that indicate where the application should be mounted, the default value is `document.getElementById('root')`
- `RouterComponent`: a router component by platform

The code below is an example of entry point file:

```ts title=src/index.ts
import { HashRouter } from '@agros/platform-react/lib/react-router-dom';
import { AppModule } from './app.module';

export default {
    module: AppModule,
    container: document.getElementById('root'),
    RouterComponent: HashRouter,
};
```
