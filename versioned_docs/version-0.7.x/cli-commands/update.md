---
sidebar_position: 1
---

# agros update

Update project code with a source collection entity and a tar get collection entity. For example, import a service to another service and inject the source service class as an annotated dependency.

With the default official collection `@agros/collections`, its help information is printed as following content:

```
Usage: agros update|u [options] [command]

Update an Agros.js collections with another collection

Options:
  -h, --help                        display help for command

Commands:
  component|c [options] <target>
  interceptor|i [options] <target>
  module|m [options] <target>
  service|s [options] <target>
  help [command]                    display help for command
```

## Update Map

In an Agros project, you can use `update` sub-command from CLI to add entity classes to another entity class. However, there are several scenarios that are unable to be permitted, they are listed in the table below. The column are source entities when the row are target entities.

||`module`|`component`|`service`|`interceptor`|
|---|---|---|---|---|
|`module`|✅|✅|✅|✅|
|`component`|❎|✅|✅|✳️|
|`service`|❎|❎|✅|❎|
|`interceptor`|❎|❎|✅|✳️|

:::info
"✳️" means that it is currently not supported by Agros project and CLI, but it will be probably be supported in the future.
:::

`@agros/collections` provides 4 collections: `component`, `interceptor`, `module` and `service`, so the `agros update` command can take these 4 collections as its sub commands. We can now dive into them to get more information about them.

## agros update module

Add source entity to a proper field in `@Module()` decorator of target module entity, and export it.

```
Usage: agros update module|m [options] <target>

Arguments:
  target           Target entity pathname or identifier

Options:
  --from [value]   Source entity pathname or identifier (preset: "")
   --skip-export   Prevent exporting the collection from this module (default: false)
   --async-module  If the collection is a module, use this flag will asynchronously import this collection (default: false)
  -h, --help       display help for command
```

Suppose we have a source service file `src/modules/foo/foo.service.ts` which exports a class named `FooService`, and a target module file `src/modules/bar/bar.module.ts` with the following content:

```ts title=src/modules/bar/bar.module.ts
import { Module } from '@agros/app';

@Module()
export class BarModule {}
```

We can declare `FooService` to `BarModule` and declare it in `providers` and `exports` fields:

```
agros update module ./src/modules/bar/bar.module.ts --from ./src/modules/foo/foo.service.ts
```

Then the content of `BarModule` file will be:

```ts
import { Module } from '@agros/app';
// highlight-next-line
import { BarService } from '@modules/bar/bar.service';

@Module({
    // highlight-start
    providers: [
        BarService,
    ],
    exports: [
        BarService,
    ],
    // highlight-end
})
export class FooModule {}
```

In the same way, we can update `module`, `component` and other entities to a module.

### --from [value]

The pathname of source entity. It must be specified when executing this command.

### --skip-export

When updating `component` and other injectable entities into a module entity, Agros will add them into `exports` field of `@Module()` decorator. If this flag is set to be `true`, the entities will not be exported.

### --async-module

When updating a module entity into another module entity, if this flag is set to be `true`,  the import declaration in root module will be like:

```ts title=src/modules/bar/bar.module.ts
import { Module } from '@agros/app';
// highlight-next-line
const FooModule = import('@modules/foo/foo.module').then(({ FooModule }) => FooModule);

@Module({
    // ...
    // highlight-next-line
    imports: [FooModule],
})
export class BarModule {}
```

## agros update component

Add source entity to `declarations` field of `@Component()` decorator.

```
Usage: agros update component|c [options] <target>

Arguments:
  target          Target entity pathname or identifier

Options:
  --from [value]  Source entity pathname or identifier (preset: "")
  -h, --help      display help for command
```

### --from [value]

The pathname of source entity. It must be specified when executing this command.

Suppose we have a component declaration named `FooComponent` at `src/modules/foo/foo.components` with description file at `src/modules/foo/Foo.tsx`:

```ts title=src/modules/foo/foo.component.ts
import { Component } from '@agros/app';

@Component({
    file: './Foo',
})
export class FooComponent {}
```

If we have a service named `FooService` at `src/modules/foo/foo.service.ts` and we hope add it into `FooComponent`, we should execute the following command:

```
agros update ./src/modules/foo/foo.component.ts --from ./src/modules/foo/foo.service.ts
```

The `FooComponent` will be:

```ts title=src/modules/foo/foo.component.ts
import { Component } from '@agros/app';
// highlight-next-line
import { FooService } from '@modules/foo/foo.service';

@Component({
    file: './Foo',
    // highlight-start
    declarations: [
        FooService,
    ],
    // highlight-end
})
export class FooComponent {}
```

## agros update service

Add source entity to the constructor of a service class.

```
Usage: agros update service|s [options] <target>

Arguments:
  target                   Target entity pathname or identifier

Options:
  --from [value]           Source entity pathname or identifier (preset: "")
  --accessibility [value]  The accessibility of the service in target service's constructor (default: "private")
   --skip-readonly         Prevent read-only parameter property (default: false)
  -h, --help               display help for command
```

Suppose we have a `FooService` at `src/modules/foo/foo.service.ts`:

```ts title=src/modules/foo/foo.service.ts
import { Injectable } from '@agros/app';

@Injectable()
export class FooService {}
```

If we hope add `BarService` at `src/modules/bar/bar.service`, we should execute the following command:

```
agros update service ./src/modules/foo/foo.service.ts --from ./src/modules/bar/bar.service.ts
```

Then the content of `FooService` will be like:

```ts title=src/modules/foo/foo.service.ts
import { Injectable } from '@agros/app';
// highlight-next-line
import { BarService } from '@modules/bar/bar.service';

@Injectable()
export class FooService {
    // highlight-next-line
    public constructor(private readonly barService: BarService) {}
}
```

### --from [value]

The pathname of source entity. It must be specified when executing this command.

### --accessibility [value]

The accessibility of constructor property, default is `private` and supports other two values: `protected` and `public`. For example, if we set the value of this flag as `protected`, the updated content of `FooService` will be:

```ts
public constructor(protected readonly barService: BarService) {}
```

### --skip-readonly

By default, each updated constructor property will be set `readonly` operator to avoid being modified by user, if we do not want to have the operator, we should set this flag to be `true`, and the updated content of `FooService` will be:

```ts
public constructor(private barService: BarService) {}
```

## agros update interceptor

:::info
The content about command `agros update interceptor` is the same as `agros update service`.
:::
