---
sidebar_position: 3
---

# Providers

Providers are the most important and fundamental concept in Agros. Almost any class can be treated as a provider by Agros: services, components, interceptors and tool libraries, etc. Agros makes it possible to establish various relationships between different provider objects by **injecting dependencies**.

![providers](/img/providers.png)

As you can see in the image above, each provider can depend on another provider by passing parameters with the provider class as a type annotation in the constructor. With the Agros runtime, these type annotation-based provider parameters will be instantiated and made available when the web application starts.

## Services

Service 是一种典型的 Provider，它经常被用于编写模块中的所有业务逻辑以及工具方法，例如我们建议在 Services 中编写 XHR请求、排序计算、处理用户输入和输出等逻辑。
