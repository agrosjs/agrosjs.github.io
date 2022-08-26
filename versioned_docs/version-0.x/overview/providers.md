---
sidebar_position: 2
---

# Providers

Providers are the most important and fundamental concept in Agros. Almost any class can be treated as a provider by Agros: services, components, interceptors and tool libraries, etc. Agros makes it possible to establish various relationships between different provider objects by **injecting dependencies**.

![providers](/img/providers.png)

As you can see in the image above, each provider can depend on another provider by passing parameters with the provider class as a type annotation in the constructor. With the Agros runtime, these type annotation-based provider parameters will be instantiated and made available when the web application starts.
