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

## Sub Commands

`@agros/collections` provides 4 collections: `component`, `interceptor`, `module` and `service`, so the `agros update` command can take these 4 collections as its sub commands. We can now dive into them to get more information about them.

### agros update module

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

#### --from [value]

The pathname of source entity. It must be specified when executing this command.

#### --skip-export

When updating `component` and other injectable entities into a module entity, Agros will add them into `exports` field of `@module()` decorator. If this flag is set to be `true`, the entities will not be exported.

#### --async-module

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

### agros update component

### agros update service

### agros update interceptor
