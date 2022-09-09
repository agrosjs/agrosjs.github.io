# RouterModule

Agros provides an official built-in router module, you can import it by:

```ts
import { RouterModule } from '@agros/app';
```

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

## Feature Modules

To declare a route in a feature module, we should add `RouterModule.forFeature()` to `imports` field of `@Module()` decorator:

```ts title=src/modules/foo/foo.module.ts
import {
    Module,
    // highlight-next-line
    RouterModule,
} from '@agros/app';
import { FooComponent } from './foo.component';
import { FooService } from './foo.service';

@Module({
    imports: [
        // highlight-start
        RouterModule.forFeature({
            routes: [
                {
                    path: 'foo',
                    useComponentClass: FooComponent,
                },
            ],
        }),
        // highlight-end
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
})
export class FooModule {}
```

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
import {
    Module,
    RouterModule,
} from '@agros/app';
import { BazComponent } from './baz.component';
import { BazChildComponent } from './baz-child.component';
import { BazService } from './baz.service';

@Module({
    imports: [
        RouterModule.forFeature({
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
        }),
    ],
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
})
export class BazModule {}
```

and the `foo.module.ts`'s content:

```ts title=src/modules/foo/foo.module.ts
import {
    Module,
    RouterModule,
} from '@agros/app';
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

## Root Module

The declaration of routes in root module is similar to feature modules, to declare a route in root module, we should add `RouterModule.forRoot()` to `imports` field of `@Module()` decorator:

```ts title=src/app.module.ts
import {
    Module,
    RouterModule,
} from '@agros/app';
import { BarModule } from '../bar/bar.module';
import { FooModule } from '../foo/foo.module';

@Module({
    imports: [
        BarModule,
        FooModule,
        // highlight-next-line
        RouterModule.forRoot({
            routes: [
                {
                    path: 'foo',
                    useComponentClass: FooModule,
                },
                {
                    path: 'bar',
                    useComponentClass: BarModule,
                },
            ],
        }),
    ],
})
export class AppModule {}
```
