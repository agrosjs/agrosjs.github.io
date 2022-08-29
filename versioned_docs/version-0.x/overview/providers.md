---
sidebar_position: 3
---

# Providers

Providers are the most important and fundamental concept in Agros. Almost any class can be treated as a provider by Agros: services, components, interceptors and tool libraries, etc. Agros makes it possible to establish various relationships between different provider objects by **injecting dependencies**.

![providers](/img/providers.png)

As you can see in the image above, each provider can depend on another provider by passing parameters with the provider class as a type annotation in the constructor. With the Agros runtime, these type annotation-based provider parameters will be instantiated and made available when the web application starts.

## Services

Service is a typical provider that is often used to write all the business logic and utilities in a module. For example, we recommend writing [XHR requests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest), sorting calculations, processing user input and output, and other logic in services.

Let's start by creating a simple `UserService`. This service will be responsible for data storage and retrieval of users, so it's good to be defined as a provider.

```ts title=user.service.ts
import { Injectable } from '@agros/app';
import { User } from './user.interface';
import axios from 'axios';

@Injectable()
export class UserService {
    public async create(user: User) {
        await axios.post('/user', user);
    }

    public async find(uid: string): Promise<User> {
        const { data } = await axios.get('/user?uid=' + uid);
        return data;
    }

    public async findAll(): Promise<User[]> {
        const { data } = await axios.get('/users');
        return data;
    }
}
```

:::tip
To create a service using the CLI, simply execute the `agros generate service user` command.
:::

The `UserService` above is a normal class with `create`, `find` and `findAll` methods. The only difference between it and other classes is that it uses the `@Injectable()` decorator. The `@Injectable()` decorator attaches metadata, which declares that `UserService` is a class that can be managed by the Agros [IoC](https://en.wikipedia.org/wiki/Inversion_of_control) container. The code below is the content of the `User` interface corresponding with `UserService`:

```ts title=user.interface.ts
export interface User {
    uid: string;
    name: string;
    email: string;
    picture: string;
    createdAt: Date;
    updatedAt: Date;
}
```

At this time, there is a class to manage users, we can use it in the `UserComponent`, which provides a component declaration of UI component for the web application to manage users:

```ts title=user.component.ts
import { Component } from '@agros/app';
// highlight-next-line
import { UserService } from './user.service';

@Component({
    file: './User',
    // highlight-start
    declarations: [
        UserService,
    ],
    // highlight-end
})
export class UserComponent {}
```

The `UserService` is injected through the `declarations` in the `@Component()` decorator. In the component description file, you can get the service through `getContainer` function:

```ts title=User.tsx
import { getContainer } from '@agros/app';
// highlight-next-line
import { UserService } from './user.service';

export default () => {
    // highlight-start
    const container = getContainer();
    const userService = container.get<UserService>(UserService);
    // highlight-end

    // You can do something with the instance of UserService here ...
    userService.find('UID').then(() => {
        // ...
    });

    return (
        // ...
    );
};
```

## Dependency Injection

The same as [Nest](https://nestjs.com) and [Angular](https://angular.io), Agros provides a system of dependency injection based on IoC container. If you are not familiar with it, we recommend you reading [this article](https://angular.io/guide/dependency-injection) from Angular's official documentation.

In Agros apps, based on TypeScript's IoC capabilities, it's extremely easy to manage dependencies because they are resolved just by type. In the example below, Agros will resolve the `userService` by creating and returning an instance of `UserService` (or, in the normal case of a singleton, returning the existing instance if it has already been requested elsewhere). This dependency is resolved and passed to your controller's constructor (or assigned to the indicated property):

```ts
public constructor(private userService: UserService) {}
```

## Registration

After defining a provider, we should declare it in the corresponding module file to register it:

```ts title=user.module.ts
import { Module } from '@agros/app';
import { UserService } from './user.service';

@Module({
    // highlight-start
    providers: [
        UserService,
    ],
    // highlight-end
})
export class UserModule {}
```

:::tip
The Agros CLI will automatically add these lines to corresponding module file when adding a new provider using `agros generate` command.
:::
