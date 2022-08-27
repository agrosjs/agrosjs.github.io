---
sidebar_position: 2
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

    public async getAll(): Promise<User[]> {
        const { data } = await axios.get('/users');
        return data;
    }
}
```

:::tip
To create a service using the CLI, simply execute the `agros generate service user` command.
:::
