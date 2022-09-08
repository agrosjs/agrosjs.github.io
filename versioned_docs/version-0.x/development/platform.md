---
sidebar_position: 1
---

# Platform

Platforms are responsible for providing plarform-specific support that helps run and build the whole project. In this documentation, we will learn how to implement a platform.

A platform should implement the [`Platform`](/docs/api/agros-platforms/interfaces/Platform) interface, and export the instance of the class as default.

## The Platform Interface

### getDefaultConfig

[Definition](/docs/api/agros-platforms/interfaces/Platform#getdefaultconfig)

`getDefaultConfig` returns an object that would be merged into the project platform configuration, whose key name is `platformConfig.$PACKAGE_NAME`, while `$PACKAGE_NAME` is the package name of current platform.

### getLoaderImports

[Definition](/docs/api/agros-platforms/interfaces/Platform#getloaderimports)

`getLoaderImports` should return an array of dependencies that could be used by `@agros/loader`'s AOP to generate bootstrap code.

The definition of array item can be found [here](/docs/api/agros-utils/interfaces/EnsureImportOptions). In general, there will always be two things that should be in this array: renderer and router.

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
            {
                libName: '@agros/platform-react/lib/react-router-dom',
                identifierName: 'BrowserRouter',
            },
            {
                libName: '@agros/platform-react/lib/react',
                identifierName: 'React',
                type: 'default',
            },
            {
                libName: '@agros/platform-react/lib/react-dom',
                identifierName: 'render',
            },
        ];
    },
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

[Definition](/docs/api/agros-platforms/interfaces/Platform#getdecoratorimports)

`getDecoratorImports` should return an array of dependencies that could be used by `@agros/loader` when transforming `@Component()` decorator. The return value is the same as [`getLoaderImports`](#getLoaderImports).

### getBootstrapCode

[Definition](/docs/api/agros-platforms/interfaces/Platform#getbootstrapcode)

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
        const platformIdentifier = ensuredImportsMap['platform'] || 'platform';
        return `
            const {
                module: Module,
                RouterComponent,
                routerProps,
                container = document.getElementById('root'),
            } = config;
            ${factoryIdentifier}.create(Module).then((routeItems) => {
                const RootContainer = ({
                    Module,
                    routerProps = {},
                    RouterComponent = ${ensuredImportsMap['BrowserRouter'] || 'BrowserRouter'},
                }) => {
                    const elements = ${platformIdentifier}.createRoutes(routeItems);

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
            });
        `;
    },
    // ...
}
```

### getComponentFactoryCode

[Definition](/docs/api/agros-platforms/interfaces/Platform#getcomponentfactorycode)

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
    },
    // ...
}
```

The `() => import('/path/to/file')` is [lazy component](https://reactjs.org/docs/code-splitting.html#import) definition of React.js.

## agros-platform.config.js
