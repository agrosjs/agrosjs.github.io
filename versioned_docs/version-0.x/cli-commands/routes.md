---
sidebar_position: 2
---

# agros routes

Manage routes in Agros projects.

```
Usage: agros routes|r [options] [command]

Manage project routes

Options:
  -h, --help                display help for command

Commands:
  add|a [options] <target>  Add a route with a module class or a component class
  help [command]            display help for command
```

:::tip
For more details about routes in Agros, please read [this documentation](/docs/overview/application#routes).
:::

## agros routes add

```
Usage: agros routes add|a [options] <target>

Add a route with a module class or a component class

Arguments:
  target                            Target module's pathname or identifier

Options:
  --export                          Export source class from target module (default: false)
  -p, --path [pathname]             The pathname to the route (preset: "")
  -C, --use-component [identifier]  Source component's pathname or identifier (preset: "")
  -M, --use-module [identifier]     Source module's pathname or identifier (preset: "")
  -h, --help                        display help for command
```

Add routes by CLI, a target module's pathname, `--path` and one of `--use-component` or `--use-module` must be specified. By executing this command, a route or a group of routes will be added to the target module.

Suppose we have a module named `FooModule` at `src/modules/foo/foo.module.ts`:

```ts title=src/modules/foo/foo.modules.ts
import { Module } from '@agros/app';

@Module()
export class FooModule {}
```

And a component named `FooComponent` at `src/modules/foo/foo.component.ts`, if we want to add a route with pathname `foo`, we should execute the following command:

```
agros routes add ./src/modules/foo/foo.module.ts --path foo --use-component ./src/modules/foo/foo.component.ts
```

Then the content of `FooModule` will be:

```ts title=src/modules/foo/foo.module.ts
import { Module } from '@agros/app';
import { FooComponent } from '@modules/foo/foo.component';

@Module({
    components: [FooComponent],
    routes: [
        {
            path: 'foo',
            useComponentClass: FooComponent,
        },
    ],
})
export class FooModule {}
```

### --export

This flag controls the source class should be exported or not. By default it is set to be `false`. If the flag be specified, it will export **component classes** from target module when using the `--use-component` flag:

```ts title=src/modules/foo/foo.module.ts
import { Module } from '@agros/app';
import { FooComponent } from '@modules/foo/foo.component';

@Module({
    components: [FooComponent],
    routes: [
        {
            path: 'foo',
            useComponentClass: FooComponent,
        },
    ],
    // highlight-next-line
    exports: [FooComponent],
})
export class FooModule {}
```

### --path, -p [pathname]

A pathname without leading slash.

### --use-component, -C [identifier]

Use a component class to define a route, a pathname to the component declaration file must be specified as value.

### --use-module, -M [identifier]

Use a module class to define a route, a pathname to the module declaration file must be specified as value.
