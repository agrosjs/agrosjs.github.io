[@agros/tools](../index.md) / DynamicModule

# Interface: DynamicModule<T\>

Interface defining a Dynamic Module.

**`Public Api`**

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- [`ModuleDecoratorOptions`](ModuleDecoratorOptions.md)

  ↳ **`DynamicModule`**

## Table of contents

### Properties

- [components](DynamicModule.md#components)
- [exports](DynamicModule.md#exports)
- [global](DynamicModule.md#global)
- [imports](DynamicModule.md#imports)
- [module](DynamicModule.md#module)
- [providers](DynamicModule.md#providers)

## Properties

### <a id="components" name="components"></a> components

• `Optional` **components**: [`Type`](../index.md#type)<`any`\>[]

#### Inherited from

[ModuleDecoratorOptions](ModuleDecoratorOptions.md).[components](ModuleDecoratorOptions.md#components)

#### Defined in

[packages/agros-tools/src/types.ts:109](https://github.com/agrosjs/agros/blob/1121c64/packages/agros-tools/src/types.ts#L109)

___

### <a id="exports" name="exports"></a> exports

• `Optional` **exports**: [`Type`](../index.md#type)<`any`\>[]

#### Inherited from

[ModuleDecoratorOptions](ModuleDecoratorOptions.md).[exports](ModuleDecoratorOptions.md#exports)

#### Defined in

[packages/agros-tools/src/types.ts:110](https://github.com/agrosjs/agros/blob/1121c64/packages/agros-tools/src/types.ts#L110)

___

### <a id="global" name="global"></a> global

• `Optional` **global**: `boolean`

When "true", makes a module global-scoped.

Once imported into any module, a global-scoped module will be visible
in all modules. Thereafter, modules that wish to inject a service exported
from a global module do not need to import the provider module.

**`Default`**

false

#### Defined in

[packages/agros-tools/src/types.ts:138](https://github.com/agrosjs/agros/blob/1121c64/packages/agros-tools/src/types.ts#L138)

___

### <a id="imports" name="imports"></a> imports

• `Optional` **imports**: [`AsyncModuleClass`](../index.md#asyncmoduleclass)<`any`\>[]

#### Inherited from

[ModuleDecoratorOptions](ModuleDecoratorOptions.md).[imports](ModuleDecoratorOptions.md#imports)

#### Defined in

[packages/agros-tools/src/types.ts:107](https://github.com/agrosjs/agros/blob/1121c64/packages/agros-tools/src/types.ts#L107)

___

### <a id="module" name="module"></a> module

• **module**: [`Type`](../index.md#type)<`T`\>

A module reference

#### Defined in

[packages/agros-tools/src/types.ts:128](https://github.com/agrosjs/agros/blob/1121c64/packages/agros-tools/src/types.ts#L128)

___

### <a id="providers" name="providers"></a> providers

• `Optional` **providers**: [`Provider`](../index.md#provider)<`any`\>[]

#### Inherited from

[ModuleDecoratorOptions](ModuleDecoratorOptions.md).[providers](ModuleDecoratorOptions.md#providers)

#### Defined in

[packages/agros-tools/src/types.ts:108](https://github.com/agrosjs/agros/blob/1121c64/packages/agros-tools/src/types.ts#L108)
