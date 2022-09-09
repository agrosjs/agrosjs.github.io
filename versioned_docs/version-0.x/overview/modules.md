---
sidebar_position: 4
---

# Modules

A module is a class annotated with a `@Module()` decorator. The `@Module()` decorator provides metadata with providers, components, imported modules and exported providers and component, which could be made use of to organize an Agros application.

![modules](/img/modules.png)

When an Agros application is to be initialized, one and only one module, called the **root module**, must be provided as the entry module for the application built by Agros.

Let's continue with the examples written before, now we should create a module called `UserModule`:

```ts title=user.module.ts
import { Module } from '@agros/app';

@Module()
export class UserModule {}
```

## Shared Modules

### Exports

In Agros, any normal module is shared module, which means it can be reused by other modules and its **exported** providers and components can also be accessed from other modules .Here is an example of using imports and exports to share providers between modules:

```
.
└── src/
    └── modules/
        ├── user/
        │   ├── user.module.ts
        │   └── user.service.ts
        └── profile/
            ├── profile.module.ts
            └── profile.service.ts
```

`user.service.ts` is a provider declared in the `UserModule`, which is declared and exported by the `UserModule`:

:::info
You can find the content of `UserService` [here](/docs/overview/providers#services).
:::

```ts title=user.module.ts
import { Module } from '@agros/app';
import { UserService } from './user.service';

@Module({
    providers: [
        UserService,
    ],
    // highlight-start
    exports: [
        UserService,
    ],
    // highlight-end
})
export class UserModule {}
```

:::tip
`UserService` must be **exported** from `UserModule` that it can be imported by other modules.
:::

### Imports

Now, the `ProfileService` in the `ProfileModule` wants to have access to the `getCurrentUser` method in the `UserService`, so the `FooModule` must be imported via the `imports` option in `bar.module.ts`:

```ts title=profile.module.ts
import { Module } from '@agros/app';
import { ProfileService } from './profile.service';
// highlight-next-line
import { UserModule } from '../user/user.module';

@Module({
    imports: [
        UserModule,
    ],
    // highlight-start
    providers: [
        ProfileService,
    ],
    // highlight-end
})
export class ProfileModule {}
```

Next, the `ProfileService` in `profile.service.ts` can pass the `UserService` as a type annotation with one parameter into the constructor:

```ts title=profile.service.ts
import { Injectable } from '@agros/app';
import { UserService } from '../user/user.service';

@Injectable()
export class ProfileService {
    // highlight-start
    public constructor(
        private readonly userService: UserService,
    ) {}
    // highlight-end

    public async getProfile() {
        // highlight-next-line
        const currentUser = await this.userServuce.getCurrentUser();
        return currentUser;
    }
}
```

:::tip
Notice the use of the `private` syntax. This shorthand allows us to both declare and initialize the `userService`'s member immediately in the same location.
:::

## Global Modules

If you have to import the same set of modules everywhere, it can be very boring. So when you want to provide a set of providers which should be available everywhere out-of-the-box (e.g., utilities, etc.), make the module global with the `@Global()` decorator:

```ts title=utils.module.ts
import {
    Global,
    Module,
} from '@agros/app';

@Global()
@Module(/* metadata */)
export class UtilsModule {}
```

Once the `UtilsModule` has been imported into the root module, any other module can access its exported providers without having to explicitly import it.

## Asynchoronous Modules

Agros support importing modules as a dynamic promise by [`import()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) declaration:

```ts title=app.module.ts
import { Module } from '@agros/app';
import { AppComponent } from '@/app.component';
import { AppService } from '@/app.service';
import { AppInterceptor } from '@/app.interceptor';
import { FooModule } from '@modules/foo/foo.module';

// highlight-next-line
const BazModule = import('@modules/baz/baz.module').then(({ BazModule }) => BazModule);

@Module({
    providers: [
        AppInterceptor,
        AppService,
    ],
    components: [AppComponent],
    exports: [
        AppComponent,
        AppInterceptor,
        AppService,
    ],
    imports: [
        FooModule,
        BazModule,
    ],
})
export class AppModule {}
```

According to [Webpack's behavior](https://webpack.js.org/guides/code-splitting/#dynamic-imports) to `import()`, it will be dynamically loaded and splitted into a standalone bundle by Webpack.
