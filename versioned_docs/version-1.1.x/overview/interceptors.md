---
sidebar_position: 5
---

# Interceptors

An interceptor is a class annotated with the `@Injectable()` decorator and implements the `Interceptor` interface. Interceptors can be used to bind extra logic before a component is loaded, for example, check user's permission of getting access to the current component, etc.

:::caution
Interceptor is currently an unstable feature in Agros. Please be careful when use it in production environments.
:::

## Implementation

Suppose we have a component `UserComponent` that is controlled by user access control (UAC), before a user entering this component, an interceptor should be set to check the permission of the user, we can write the logic in `public intercept()` method:

```ts title=user.interceptor.ts
import {
    Injectable,
    Interceptor,
} from '@agros/app';
import axios from 'axios';

@Injectable()
export class UserInterceptor implements Interceptor {
    public async intercept() {
        const { data } = await axios.get('/api/user/permission?entity=UserComponent');

        if (!data) {
            throw new Error('No permission');
        }
    }
}
```

## Dependency Injection

The same as other providers, interceptors can also be injected with dependencies, and at the mean time, interceptors should be put into `providers` array of `@Module()` decorator:

```ts title=user.module.ts
import { Module } from '@agros/app';
import { UserInterceptor } from './user.interceptor';

@Module({
    providers: [
        UserInterceptor,
    ],
})
export class UserModule {}
```

We write a `checkPermission` method in `UserService` to help check permission:

```ts title=user.service.ts
import { Injectable } from '@agros/app';
import axios from 'axios';

@Injectable()
export class UserService {
    public async checkPermission(entity: string) {
        const { data } = await axios.get('/api/user/permission?entity=' + entity);
        return data;
    }
}
```

We can inject it into `UserInterceptor`:

```ts title=user.interceptor.ts
import {
    Injectable,
    Interceptor,
} from '@agros/app';
import { UserService } from './user.service';

@Injectable()
export class UserInterceptor implements Interceptor {
    public construcor(
        private readonly userService: UserService,
    ) {}

    public async intercept() {
        const { data } = await axios.get('/api/user/permission?entity=UserComponent');

        if (!(await this.userService.checkPermission('UserComponent'))) {
            throw new Error('No permission');
        }
    }
}
```

## Context

In general scenes, `public intercept()` accepts multiple arguments, the first of them is context object. It will be defined and passed by the platform which is used by current project. If you want to get access to it and find out what type of object it would be, please go to the documentation of the platform.

## Usage

To apply interceptors to component, the decorator `@UseInterceptors()` should be assined to component declaration class:

```ts title=user.component.ts
import {
    Component,
    UseInterceptors,
} from '@agros/app';
import { UserInterceptor } from './user.interceptor';

@Component({
    // ...
})
@UseInterceptors(UserInterceptor)
export class UserComponent {}
```
