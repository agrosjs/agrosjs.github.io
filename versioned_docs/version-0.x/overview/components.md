---
sidebar_position: 2
---

# Components

Components are considered as the carrier of a page in Agros apps. They control the lazy loading, fallbacks and other options that are not supported by the component.

![components](/img/components.png)

A component must be consist of two parts:

- component description
- component declaration

Now we will learn what they are and how to define a component properly.

## Component Description

Component descriptions are written in the same format as framework-specific components, for example, on Agros' React platform, component description files are written in [JSX](https://reactjs.org/docs/introducing-jsx.html#gatsby-focus-wrapper), and on the Vue platform, you can write component descriptions using the [single-file component](https://vuejs.org/guide/scaling-up/sfc.html) (known as SFC).

Here we write a `User` component description using the two frameworks above.

Component description with React:

```tsx title=User.tsx
import React from '@agros/platform-react/lib/react';

export default ({
    name,
    avatar: pictureUrl,
    email,
    motto,
}) => {
    return (
        <div className="user-card">
            <img className="avatar" src={pictureUrl} />
            <div className="info-wrapper">
                <h1>{name}</h1>
                <h2>{email}</h2>
                <h6>{motto}</h6>
            </div>
        </div>
    );
} as React.FC;
```

Component description with Vue SFC:

```html title=User.vue
<template>
    <div class="user-card">
        <img class="avatar" :src="pictureUrl" />
        <div class="info-wrapper">
            <h1>{{name}}</h1>
            <h2>{{email}}</h2>
            <h6>{{motto}}</h6>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: [
        'name',
        'email',
        'motto',
        'avatar',
    ],
}
</script>
```

:::info
In the subsequent documentation, we use React as our default platform, unless we encounter platform-specific content.
:::

## Component Declaration

**Component declaration is also a type of provider**. Like normal providers, any provider (including component declaration) can be injected into a component declaration as a dependency, but a component declaration cannot be injected into other types of providers as a dependency.

Let's start by creating a simple `UserComponent`. This component declaration will use `User.tsx` as its description mentioned above:

```ts title=user.component.ts
import { Component } from '@agros/app';

@Component({
    file: './User',
})
export class UserComponent {}
```

:::tip
To create a service using the CLI, simply execute the `agros generate component user` command.
:::

### Dependency Imports

Agros provides an option in its `@Component()` decorator called `declarations`, which is an array of provider classes that you can pass in to complete the imports of providers.

Now we extract a card for describing user's basic information, like avatar, name, email and motto because the card will be used by not only `UserComponent`, but other components. So we create a `UserCard.tsx` file:

```tsx title=UserCard.tsx
import React from '@agros/platform-react/lib/react';

export default ({
    name,
    avatar: pictureUrl,
    email,
    motto,
}) => {
    return (
        <div className="user-card">
            <img className="avatar" src={pictureUrl} />
            <div className="info-wrapper">
                <h1>{name}</h1>
                <h2>{email}</h2>
                <h6>{motto}</h6>
            </div>
        </div>
    );
} as React.FC;
```

Then we should write a component declaration file to describe this component:

```ts title=user-card.component.ts
import { Component } from '@agros/app';

@Component({
    file: './UserCard',
})
export class UserCardComponent {}
```

We can now refactor our code in `User.tsx` and `user.component.ts`, import `UserCard` into `User` component:

```ts title=user.component.ts
import { Component } from '@agros/app';
// highlight-next-line
import { UserCardComponent } from './user-card.component.ts';

@Component({
    file: './User',
    declarations: [
        // highlight-start
        // Add `UserCardComponent` into `declarations`
        UserCardComponent,
        // highlight-end
    ],
})
export class UserComponent {}
```

In the component description file, you can get the service through `getContainer` function:

```tsx title=User.tsx
import React from '@agros/platform-react/lib/react';
import { getContainer } from '@agros/app';
// highlight-next-line
import UserCardComponent from './user-card.component';

export default (props) => {
    // highlight-start
    const UserCard = getContainer<React.FC>(UserCardComponent);
    // highlight-end
    return (
        <div>
            <p>Information of current user:</p>
            <UserCard {...props} />
        </div>
    );
} as React.FC;
```

:::tip
Other types of providers will also be able to be imported as the same way, see [this](/docs/overview/providers#services) for more information.
:::

### Lazy Loading

You can turn a component description into a dynamic component by setting `lazy` option in `@Component()` decorator to `true`. Agros provides fallbacks when `lazy` option in `@Component()` decorator is set to be `true`:

```tsx title=user.component.tsx
import { Component } from '@agros/app';

@Component({
    file: './User',
    // highlight-start
    lazy: true,
    suspenseFallback: <div>loading...</div>
    // highlight-end
})
export class UserCardComponent {}
```

Here is a demo GIF of lazy loading:

![lazy-loading](/img/component-lazy-load.gif)

### Styles

### Registration
