---
sidebar_position: 5
---

# Dynamic Modules

The Modules chapter covers the basics of Agros modules, and includes a brief introduction to dynamic modules. This chapter expands on the subject of dynamic modules. Upon completion, you should have a good grasp of what they are and how and when to use them.

## Introduction

Most application code examples in the **Overview** section of the documentation make use of regular, or static, modules. Modules define groups of components like **providers** and **components** that fit together as a modular part of an overall application. For example, providers defined in a module are visible to other members of the module without the need to export them. When a provider needs to be visible outside of a module, it is first exported from its host module, and then imported into its consuming module.

## Use Cases

With static module binding, there's no opportunity for the consuming module to influence how providers from the host module are configured. Why does this matter? Consider the case where we have a general purpose module that needs to behave differently in different use cases. This is analogous to the concept of a "plugin" in many systems, where a generic facility requires some configuration before it can be used by a consumer.

A good example with Agros is a configuration module. Many applications find it useful to externalize configuration details by using a configuration module. This makes it easy to dynamically change the application settings in different deployments: e.g., a development database for developers, a staging database for the staging/testing environment, etc. By delegating the management of configuration parameters to a configuration module, the application source code remains independent of configuration parameters.

The challenge is that the configuration module itself, since it's generic (similar to a "plugin"), needs to be customized by its consuming module. This is where dynamic modules come into play. Using dynamic module features, we can make our configuration module dynamic so that the consuming module can use an API to control how the configuration module is customized at the time it is imported.

In other words, dynamic modules provide an API for importing one module into another, and customizing the properties and behavior of that module when it is imported, as opposed to using the static bindings we've seen so far.

## Example

First, we'll define a `AppModule` as the root module of an application.

```typescript title=src/app.module.ts
import { Module } from '@agros/common';

@Module()
export class AppModule {}
```
