---
sidebar_position: 0
---

# agros generate

Generate files to project from specified collection. With the default official collection `@agros/collections`, its help information is printed as following content:

```
Usage: agros generate|g [options] [command]

Generate Agros.js collections

Options:
  -h, --help                                    display help for command

Commands:
  application|a [options]
  component|c [options] <name> [module-name]
  interceptor|i [options] <name> [module-name]
  module|m [options] <name>
  service|s [options] <name> [module-name]
  help [command]                                display help for command
```

## Sub Commands

`@agros/collections` provides 5 collection: `application`, `component`, `interceptor`, `module` and `service`, so the `agros generate` command can take these 5 collections as its sub commands. We can now dive into them to get more information about them.

### agros generate application

Generate the whole application with default template using `@agros/platform-react`. It's based on `@agros/create-app`, so it equals to `npm create @agros/app`.

```
Usage: agros generate application|a [options]

Options:
  -p, --path [value]          Target path of the project (default: "")
  -S, --skip-install [value]  Skip dependencies installation (default: false)
  -h, --help                  display help for command
```

:::caution
This command is dangerous because it will modify cwd directory.
:::

#### --path, -p

The target pathname to generate project files, default value is the current cwd, which should be `process.cwd()`.

#### --skip-install, -S

If this flag is set to `true`, the generator will not automatically install dependencies after generating the project.

### agros generate module

Generate module file and automatically import and update root module.

```
Usage: agros generate module|m [options] <name>

Arguments:
  name                                 The name of the module

Options:
   --global                            Set this module as a global module (default: false)
   --async                             Set this module as a async module (default: false)
   --skip-declare-collections          Skip declaring existed collections (services & components) (default: false)
   --skip-export-declared-collections  Skip exporting the collections declared before (default: false)
  -h, --help                           display help for command
```

The argument `name` must be specified to define module name. The module's class name would be named as **start case** with `name`'s value. Here is a example of `agros generate module`:

Suppose we want to generate a module named `FooModule`, we should execute the following command:

```bash
agros generate module foo
```

It will generate the module file content into `src/modules/foo/foo.module.ts`:

```ts title=src/modules/foo/foo.module.ts
import { Module } from '@agros/app';

@Module()
export class FooModule {}
```

Root module will be automatically updated:

```ts title=src/app.module.ts
import { Module } from '@agros/app';
import { AppComponent } from '@/app.component';
import { AppService } from '@/app.service';
import { AppInterceptor } from '@/app.interceptor';
// highlight-next-line
import { FooModule } from '@modules/foo/foo.module';

@Module({
    providers: [
        AppInterceptor,
        AppService,
    ],
    components: [AppComponent],
    routes: [
        {
            path: '',
            useComponentClass: AppComponent,
        },
    ],
    exports: [
        AppComponent,
        AppInterceptor,
        AppService,
    ],
    // highlight-next-line
    imports: [FooModule],
})
export class AppModule {}
```

#### --global

Generate a [global module](/docs/overview/modules#global-modules).

#### --async

Asynchoronously import this module in root module, if the flag is set to be `true`, the import declaration in root module will be like:

```ts title=src/app.module.ts
import { Module } from '@agros/app';
// highlight-next-line
const FooModule = import('@modules/foo/foo.module').then(({ FooModule }) => FooModule);

@Module({
    // ...
    // highlight-next-line
    imports: [FooModule],
})
export class AppModule {}
```

#### --skip-declare-collections

Suppose we have a directory `src/modules/bar`, and there are not a file named `src/modules/bar/bar.module.ts`, but have a service file `src/modules/bar/bar.service.ts`,that is, no module file in the directory -- it is legal of course. In this case, when we execute `agros generate module bar`, it will automatically declare `BarService` from `bar.service.ts` as its provider:

```ts title=src/modules/bar/bar.module.ts
import { Module } from '@agros/app';
// highlight-next-line
import { BarService } from '@modules/bar/bar.service';

@Module({
    // highlight-start
    providers: [
        BarService,
    ],
    // highlight-end
    // ...
})
export class BarModule {}
```

If the flag is set to be `true`, the new-generated module file will not declare any providers and components anymore.

#### --skip-export-declared-collections

In the case mentioned above, a new-generated will also export existing providers and components by default. If this flag is set to be `true`, the new-generated module file will not export any providers and components anymore.

### agros generate component

Generate component declaration file into a module and update the `components` field of `@Module()` decorator in the corresponding module file.

```
Usage: agros generate component|c [options] <name> [module-name]

Arguments:
  name             The name of the component
  module-name      The name of module who manages this component (default: "$context$name")

Options:
   --lazy          Lazy-load component (default: false)
   --skip-export   Skip exporting this component from module (default: false)
  -h, --help       display help for command
```

The argument `name` must be specified when the `module-name` argument can take the value from `name` as its default value. The component's class name would be named as **start case** with `name`'s value. Here is a example of `agros generate component`:

Suppose we have a project initialized by `agros generate application`, which contains a module named `FooModule`, we can now generate a component named `FooComponent` by executing this command:

```bash
agros generate component foo
```

It will generate `src/modules/foo/foo.component.ts` as component declaration file and `src/modules/foo/Foo.tsx` as component description file:

```ts title=src/modules/foo/foo.component.ts
import { Component } from '@agros/app';

@Component({
    file: '@modules/foo/Foo',
})
export class FooComponent {}
```

:::info
`@modules/*` is a default path alias in Agros application which points to `src/modules/*`.
:::

In the meantime, `src/modules/foo/foo.module.ts` will be automatically updated to import `FooComponent` and declare it:

```ts title=src/modules/foo/foo.module.ts
import { Module } from '@agros/app';
// highlight-next-line
import { FooComponent } from '@modules/foo/foo.component';

@Module({
    // highlight-start
    components: [FooComponent],
    exports: [FooComponent],
    // highlight-end
})
export class FooModule {}
```

#### --lazy

Import component description as a lazy-load component. The component declaration file will be:

```ts title=src/modules/foo/foo.component.ts
import { Component } from '@agros/app';

@Component({
    file: '@modules/foo/Foo',
    // highlight-next-line
    lazy: true,
})
export class FooComponent {}
```

#### --skip-export

If this flat is set to be `true`, the component declaration will not be exported from its corresponding module:

```ts title=src/modules/foo/foo.module.ts
import { Module } from '@agros/app';
import { FooComponent } from '@modules/foo/foo.component';

@Module({
    components: [FooComponent],
    // highlight-start
    exports: [],
    // highlight-end
})
export class FooModule {}
```

### agros generate interceptor

Generate interceptor file into a module and update the `providers` field of `@Module()` decorator in the corresponding module file.

```
Usage: agros generate interceptor|i [options] <name> [module-name]

Arguments:
  name            The name of the interceptor
  module-name     The name of module who manages this interceptor (default: "$context$name")

Options:
   --skip-export  Skip exporting this interceptor from module (default: false)
  -h, --help      display help for command
```

The argument `name` must be specified when the `module-name` argument can take the value from `name` as its default value. The interceptor's class name would be named as **start case** with `name`'s value. Here is a example of `agros generate interceptor`:

We can now generate a interceptor named `FooInterceptor` by executing this command:

```bash
agros generate interceptor foo
```

It will generate `src/modules/foo/foo.interceptor.ts`:

```ts title=src/modules/foo/foo.interceptor.ts
import {
    Injectable,
    Interceptor,
} from '@agros/app';

@Injectable()
export class FooInterceptor implements Interceptor {
    public intercept(props, context): any {
        return;
    }
}
```

In the meantime, `src/modules/foo/foo.module.ts` will be automatically updated to import `FooInterceptor` and declare it:

```ts title=src/modules/foo/foo.module.ts
import { Module } from '@agros/app';
import { FooComponent } from '@modules/foo/foo.component';
// highlight-next-line
import { FooInterceptor } from '@modules/foo/foo.interceptor';

@Module({
    components: [FooComponent],
    exports: [
        FooComponent,
        // highlight-next-line
        FooInterceptor,
    ],
    providers: [FooInterceptor],
})
export class FooModule {}
```

#### --skip-export

If this flat is set to be `true`, the interceptor will not be exported from its corresponding module.

### agros generate service

Generate service file into a module and update the `providers` field of `@Module()` decorator in the corresponding module file.

```
Usage: agros generate service|s [options] <name> [module-name]

Arguments:
  name            The name of the service
  module-name     The name of module who manages this service (default: "$context$name")

Options:
   --skip-export  Skip exporting this service from module (default: false)
  -h, --help      display help for command
```

The argument `name` must be specified when the `module-name` argument can take the value from `name` as its default value. The service's class name would be named as **start case** with `name`'s value. Here is a example of `agros generate service`:

We can now generate a service named `FooService` by executing this command:

```bash
agros generate service foo
```

It will generate `src/modules/foo/foo.service.ts`:

```ts title=src/modules/foo/foo.service.ts
import { Injectable } from '@agros/app';

@Injectable()
export class FooService {}
```

In the meantime, `src/modules/foo/foo.module.ts` will be automatically updated to import `FooService` and declare it:

```ts title=src/modules/foo/foo.module.ts
import { Module } from '@agros/app';
import { FooComponent } from '@modules/foo/foo.component';
import { FooInterceptor } from '@modules/foo/foo.interceptor';
// highlight-next-line
import { FooService } from '@modules/foo/foo.service';

@Module({
    components: [FooComponent],
    exports: [
        FooComponent,
        FooInterceptor,
        // highlight-next-line
        FooService,
    ],
    providers: [
        FooInterceptor,
        // highlight-next-line
        FooService,
    ],
})
export class FooModule {}
```

#### --skip-export

If this flat is set to be `true`, the service will not be exported from its corresponding module.
