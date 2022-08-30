---
sidebar_position: 7
---

# Application

## Routes

Now we start this section by the following project structure:

```
.
└── src/
    └── modules/
        ├── foo/
        │   ├── foo.module.ts
        │   ├── foo.service.ts
        │   ├── foo.component.ts
        │   └── Foo.tsx
        └── bar/
            ├── bar.module.ts
            └── bar.service.ts
```

You should add `routes` option to `@Module()` decorator:

```ts title=src/modules/foo/foo.module.ts
import { Module } from '@agros/app';
import { FooComponent } from './foo.component';
import { FooService } from './foo.service';

@Module({
    components: [
        FooComponent,
    ],
    providers: [
        FooService,
    ],
    exports: [
        FooService,
    ],
    routes: [
        // highlight-start
        {
            path: 'foo',
            useComponentClass: FooComponent,
        },
        // highlight-end
    ],
})
export class FooModule {}
```

Agros will parse the route config and get a path of `/foo` who renders `Foo.tsx`.

You can also use a module class to configure the routes by passing `useModuleClass` option. Now the project looks like this:

```
.
└── src/
    └── modules/
        ├── foo/
        │   ├── foo.module.ts
        │   ├── foo.service.ts
        │   ├── foo.component.ts
        │   └── Foo.tsx
        ├── bar/
        │   ├── bar.module.ts
        │   └── bar.service.ts
        └── baz/
            ├── baz.module.ts
            ├── baz.service.ts
            ├── baz-child.component.ts
            ├── BazChild.tsx
            ├── baz.component.ts
            └── Baz.tsx
```

The `baz.module.ts`'s definition looks like this:

```ts title=src/modules/baz/baz.module.ts
import { Module } from '@agros/app';
import { BazComponent } from './baz.component';
import { BazChildComponent } from './baz-child.component';
import { BazService } from './baz.service';

@Module({
    components: [
        BazComponent,
        BazChildComponent,
    ],
    providers: [
        BazService,
    ],
    exports: [
        BazComponent,
        BazChildComponent,
        BazService,
    ],
    routes: [
        {
            path: 'baz',
            useComponentClass: BazComponent,
            // highlight-start
            children: [
                {
                    path: 'child',
                    useComponentClass: BazChildComponent,
                },
            ],
            // highlight-end
        },
    ],
})
export class BazModule {}
```

and the `foo.module.ts`'s content:

```ts title=src/modules/foo/foo.module.ts
import { Module } from '@agros/app';
import { BazModule } from '../baz/baz.module';
import { FooComponent } from './foo.component';
import { FooService } from './foo.service';

@Module({
    imports: [
        BazModule,
    ],
    components: [
        FooComponent,
    ],
    providers: [
        FooService,
    ],
    exports: [
        FooService,
    ],
    routes: [
        {
            path: 'foo',
            useComponentClass: FooComponent,
            children: [
                {
                    // highlight-next-line
                    useModuleClass: BazModule,
                },
            ],
        },
    ],
})
export class FooModule {}
```

Agros will parse it into `/foo`, `/foo/baz` and `/foo/baz/child` routes.

## Platforms

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
