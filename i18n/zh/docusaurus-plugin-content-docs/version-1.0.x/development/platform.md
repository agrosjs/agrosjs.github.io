---
sidebar_position: 1
---

# Platform

Platforms are responsible for providing plarform-specific support that helps run and build the whole project. In this documentation, we will learn how to implement a platform.

A platform should implement the [`Platform`](../api/agros-tools/interfaces/Platform) interface, and export the instance of the class as default.

## The `Platform` Interface

### getDefaultConfig

[Definition](../api/agros-tools/interfaces/Platform#getdefaultconfig)

`getDefaultConfig` returns an object that would be merged into the project platform configuration, whose key name is `platformConfig.$PACKAGE_NAME`, while `$PACKAGE_NAME` is the package name of current platform.

### getLoaderImports

[Definition](../api/agros-tools/interfaces/Platform#getloaderimports)

`getLoaderImports` should return an array of dependencies that could be used by `@agros/loader`'s AOP to generate bootstrap code.

The definition of array item can be found [here](../api/agros-utils/interfaces/EnsureImportOptions). In general, there will always be two things that should be in this array: renderer and router.

For example, in `@agros/platform-react`, we should import `react` (which is exported from `@agros/platform-react/lib/react`) and `react-router-dom` (which is exported from `@agros/platform-react/lib/react-router-dom`), then the `getLoaderImports`' value will be:

```ts
import { Platform as IPlatform } from '@agros/platforms';
class Platform implements IPlatform {
    // ...
    public getLoaderImports() {
        return [
            {
                libName: '@agros/platform-react/lib/react-router-dom',
                identifierName: 'Routes',
            },
            {
                libName: '@agros/platform-react/lib/react-router-dom',
                identifierName: 'Route',
            },
            // ...
        ];
    }
    // ...
}
```

:::tip
The import declarations of `react-router-dom` can also be:

```ts
{
    libName: '@agros/platform-react/lib/react-router-dom',
    identifierName: 'ReactRouter',
    type: 'default',
}
```
:::

The value of `type` field can be `default`, `named` or `namespace`. If `default` is specified, Agros will add a declaration like `import Foo from '/path/to/foo'`, if `named` is specified, it will add `import { Foo } from '/path/to/foo'`, and `import * as Foo from '/path/to/foo'` with `namespace`.

### getDecoratorImports

[Definition](../api/agros-tools/interfaces/Platform#getdecoratorimports)

`getDecoratorImports` should return an array of dependencies that could be used by `@agros/loader` when transforming `@Component()` decorator. The return value is the same as [`getLoaderImports`](#getLoaderImports).

### getBootstrapCode

[Definition](../api/agros-tools/interfaces/Platform#getbootstrapcode)

`getBootstrapCode` should return a string value that defines the body of the entry function. It passes a value named `config` from **string literal** of code, which points to the default-exported object from the entry file of the project (usually `src/index.ts`).

The method passes `importsMap` and `addVirtualFile` as its parameters.

The `importMap` is an object whose key and value are all `string`. The keys of `importMap` are the `identifierName` from `getLoaderImports`, and the values of it are the imported identifier name. For example, the `importMap` of `getBootstrapCode` from `@agros/platform-react` should be:

```ts
{
    React: 'Agros$$React',
    Routes: 'Agros$$Routes',
    // ...
}
```

You won't care about what the true identifier names are, just use `importMap[$KEY]` to get them in code.

`addVirtualFile` is a function that can help add some file into virtual filesystem which can be read by `@agros/loader`.

In general, the string of code should contain the code of render function. For example, in `@agros/platform-react`, the code should be:

```ts
import { Platform as IPlatform } from '@agros/platforms';
class Platform implements IPlatform {
    // ...
    public getBootstrapCode(ensuredImportsMap: Record<string, string>): string {
        const reactIdentifier = ensuredImportsMap['React'] || 'React';
        const factoryIdentifier = ensuredImportsMap['factory'] || 'factory';
        return `
            const {
                module: Module,
                RouterComponent,
                routerProps,
                container = document.getElementById('root'),
            } = config;
            ${factoryIdentifier}.create(Module).then((componentInstance) => {
                const rootModuleInstance = ${factoryIdentifier}.getRootModuleInstance();
                const rootRoutes = rootModuleInstance.getProviderValue(${ensuredImportsMap['ROUTES_ROOT']});
                ${ensuredImportsMap['RouterModule']}.createRouterItems(${factoryIdentifier}, rootRoutes).then((routes) => {
                    if (routes && Array.isArray(routes) && routes.length > 0) {
                        const RootContainer = ({
                            Module,
                            routerProps = {},
                            RouterComponent = ${ensuredImportsMap['BrowserRouter'] || 'BrowserRouter'},
                        }) => {
                            const elements = ${ensuredImportsMap['createRoutes']}(routes);
                            return ${reactIdentifier}.createElement(
                                RouterComponent,
                                routerProps,
                                ${reactIdentifier}.createElement(${ensuredImportsMap['Routes'] || 'Routes'}, {}, elements),
                            );
                        };
                        ${ensuredImportsMap['render'] || 'render'}(
                            ${reactIdentifier}.createElement(RootContainer, {
                                Module,
                                RouterComponent,
                                routerProps,
                            }),
                            container,
                        );
                    } else {
                        ${ensuredImportsMap['render'] || 'render'}(
                            ${reactIdentifier}.createElement(componentInstance.getComponent()),
                            container,
                        );
                    }
                });
            });
        `;
    }
    // ...
}
```

:::info
This code requires a `createRoutes` which can be invoked by `ensuredImportsMap['createRoutes']`, the following code is its content:

```ts title=./create-routes.ts
import { RouterItem } from '@agros/common/lib/types';
import {
    createElement,
} from 'react';
import { Route } from 'react-router-dom';

export const createRoutes = (routerItems: RouterItem[], level = 0) => {
    return routerItems.map((routerItem, index) => {
        const {
            componentInstance,
            children,
            ...routeProps
        } = routerItem;
        const Component = componentInstance.getComponent();
        const { elementProps = {} } = componentInstance.metadata;

        return createElement(
            Route,
            {
                key: `level${level}_${index}`,
                ...routeProps,
                ...(
                    Component
                        ? {
                            element: createElement(Component, elementProps),
                        }
                        : {}
                ),
            },
            (Array.isArray(children) && children.length > 0) ? createRoutes(children, level + 1) : [],
        );
    });
};
```
:::

### getComponentFactoryCode

[Definition](../api/agros-tools/interfaces/Platform#getcomponentfactorycode)

`getComponentFactoryCode` should return a string that contains the code content of a full factory function.

The method passes the following parameters:

- `importsMap`: same as the `importsMap` passed to [`getBootstrapCode`](#getBootstrapCode), the key-value pairs are from the definition of [`getDecoratorImports`](#getDecoratorImports)
- `filePath`: the relative pathname (with component declaration file) of component file defined in the `file` field of `@Component()`
- `identifierName`: the identifier of dynamically imported component file by `@agros/loader`, defined as `const ${identifierName} = import('filePath');`
- `lazy`: a boolean value indicates whether the component is lazy or not

The return value of this method should be a full declaration of factory function, in general, the factory function is a single function returns platform-specified import of components. For example, in `@agros/platform-react`, the factory code is:

```ts
import { Platform as IPlatform } from '@agros/platforms';
class Platform implements IPlatform {
    // ...
    public getComponentFactoryCode(
        map: Record<string, string>,
        filePath: string,
        componentIdentifierName: string,
        lazy = false,
    ) {
        return `() => ${lazy ? `() => import('${filePath}')` : componentIdentifierName};`;
    }
    // ...
}
```

The `() => import('/path/to/file')` is [lazy component](https://reactjs.org/docs/code-splitting.html#import) definition of React.js.

### generateComponent

`generateComponent` passes `componentInstance` and `component` as parameters, which means the instance of current component declaration and the imported component description file.

In general, it is optional and you can do nothing with it or simply not declare this method in a platform object since before this method being invoked by the factory, the `component` is already set into component instance by `ComponentInstance.prototype.setComponent()` method, this method provide a way to modify the component in `componentInstance`. For example, in `@agros/platform-react`, we can inject interceptor executions into it:

```ts
import { Platform as IPlatform } from '@agros/platforms';
class Platform implements IPlatform {
    // ...
    public async generateComponent<T = any>(componentInstance: ComponentInstance, component: any): Promise<T> {
        /**
         * set component directly so that it can prevent unlimited creating tasks
         */
        componentInstance.setComponent((props: any) => {
            const {
                interceptorsFallback = null,
                suspenseFallback = null,
            } = componentInstance.metadata;
            const [interceptorEnd, setInterceptorEnd] = useState<boolean>(false);

            useAsyncEffect(async () => {
                try {
                    if (Array.isArray(componentInstance.metadata.interceptorInstances)) {
                        for (const interceptorInstance of componentInstance.metadata.interceptorInstances) {
                            await interceptorInstance.intercept({
                                props,
                            });
                        }
                    }
                } finally {
                    setInterceptorEnd(true);
                }
            }, []);

            return interceptorEnd
                ? createElement(
                    Suspense,
                    {
                        fallback: suspenseFallback,
                    },
                    createElement(component, props),
                )
                : interceptorsFallback;
        });

        return component;
    }
    // ...
}
```

## The `BundlessPlatform` Interface

`BundlessPlatform` is only designed to be used by Node.js environment since the methods in it contain some imports that cannot be recognized by Webpack. That is why the interface called `BundlessPlatform`. The following sections will introduce the methods in this interface.

### getComponentScript

`getComponentScript` passes the component description file content as parameter and returns an object with type of [`ComponentScript`](../api/agros-utils/interfaces/ComponentScript), which has two fields: `content` and `location`.

:::tip Why and when should Agros need this method from platform?
When Agros loader loads the component description files whoes code are not totally pure JavaScript or TypeScript, like [Vue SFC](https://vuejs.org/guide/scaling-up/sfc.html) files, [Svelte](https://svelte.dev/docs#component-format) files, etc.

Agros will need this method to extract JavaScript or TypeScript code content and the indexes of where it starts and ends, and return them to Agros loader. That is why Agros loader need this method from platform. By the way, other platforms with pure JavaScript or TypeScript frameworks may not provide this method.
:::

For example, in `@agros/platform-vue`, the definition of this method is:

```ts
import { BundlessPlatform as IBundlessPlatform } from '@agros/utils/lib/types';
import { parse } from 'vue/compiler-sfc';

class BundlessPlatform implements IBundlessPlatform {
    // ...
    public getComponentScript(source: string) {
        const ast = parse(source);
        const content = ast?.descriptor?.script?.content;
        const start = ast?.descriptor?.script?.loc?.start?.offset;
        const end = ast?.descriptor?.script?.loc?.end.offset;

        if (typeof start !== 'number' || typeof end !== 'number') {
            return {
                content,
            };
        }

        return {
            content,
            location: {
                start,
                end,
            },
        };
    }
    // ...
}
```

## agros-platform.config.js

`agros-platform.config.js` is the configuration file of platform. This configuration file should export a function which passes a default Webpack configuration object from `@agros/app` by `module.exports`.

In this file, you are allowed to modify some configuration with the parameter configuration object to add some loaders, plugins and any other things.

For example, in `@agros/platform-vue`, the content of `agros-platform.config.js` is:

```ts
const { defineBuilderConfig } = require('@agros/common/lib/builder-config');
const {
    addBabelPreset,
    addBabelPlugin,
} = require('@agros/utils/lib/customizers');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = defineBuilderConfig((config) => {
    addBabelPreset(require.resolve('@babel/preset-env'))(config);
    addBabelPreset(require.resolve('@vue/babel-preset-app'))(config);
    addBabelPlugin(require.resolve('@babel/plugin-transform-typescript'))(config);
    addBabelPlugin(require.resolve('@babel/plugin-transform-runtime'))(config);
    addBabelPlugin(require.resolve('@babel/plugin-transform-parameters'))(config);

    config.module?.rules?.unshift({
        test: /\.vue$/,
        use: [
            {
                loader: require.resolve('./lib/loaders/vue-loader.js'),
                options: {
                    loaders: {
                        js: require.resolve('awesome-typescript-loader'),
                    },
                },
            },
        ],
    });

    let resourceRule = config.module.rules.find((rule) => rule?.type === 'asset/resource');

    if (!resourceRule) {
        resourceRule = config.module.rules.find((rule) => !!rule.oneOf)?.oneOf?.find((rule) => {
            return rule?.type === 'asset/resource';
        });
    }

    if (resourceRule) {
        resourceRule?.exclude?.push(/\.vue$/);
    }

    config.plugins?.push(new VueLoaderPlugin());
    config.module.rules = config.module?.rules?.map((rule) => {
        if (
            typeof rule.use === 'string' && (
                rule.use.indexOf('@agros/loader') !== -1 ||
                /packages\/agros-loader/.test(rule.use)
            )
        ) {
            return {
                ...rule,
                test: /\.(js|jsx|ts|tsx|vue)$/,
            };
        }
        return rule;
    });

    return config;
});
```

## package.json

Agros preserves a field named `agrosPlatform` to manage other key-value configurations. In the following documentation, we will introduce these fields.

### agrosPlatform.bundless

The relative pathname of `BundlessPlatform` file. For example, in `@agros/platform-vue`, the compiled `BundlessPlatform` file is located in `lib/bundless-platform.js` this part of `package.json` is:

```json
{
    "agrosPlatform": {
        "bundless": "./lib/bundless-platform.js"
    }
}
```
