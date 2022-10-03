@agros/common

# @agros/common

## Table of contents

### Classes

- [RouterModule](classes/RouterModule.md)

### Interfaces

- [Interceptor](interfaces/Interceptor.md)
- [RouterModuleRootOptions](interfaces/RouterModuleRootOptions.md)

### Type Aliases

- [RouterModuleFeatureOptions](index.md#routermodulefeatureoptions)

### Variables

- [DI\_DEPS\_SYMBOL](index.md#di_deps_symbol)
- [DI\_GLOBAL\_MODULE\_SYMBOL](index.md#di_global_module_symbol)
- [DI\_METADATA\_COMPONENT\_SYMBOL](index.md#di_metadata_component_symbol)
- [DI\_METADATA\_MODULE\_SYMBOL](index.md#di_metadata_module_symbol)
- [DI\_METADATA\_USE\_INTERCEPTORS\_SYMBOL](index.md#di_metadata_use_interceptors_symbol)
- [ROUTES\_FEATURE](index.md#routes_feature)
- [ROUTES\_ROOT](index.md#routes_root)

### Functions

- [Component](index.md#component)
- [Global](index.md#global)
- [Injectable](index.md#injectable)
- [Module](index.md#module)
- [UseInterceptors](index.md#useinterceptors)

## Type Aliases

### <a id="routermodulefeatureoptions" name="routermodulefeatureoptions"></a> RouterModuleFeatureOptions

Ƭ **RouterModuleFeatureOptions**: [`RouterModuleRootOptions`](interfaces/RouterModuleRootOptions.md)

#### Defined in

[agros-common/src/modules/router.module.ts:19](https://github.com/agrosjs/agros/blob/76cd863/packages/agros-common/src/modules/router.module.ts#L19)

## Variables

### <a id="di_deps_symbol" name="di_deps_symbol"></a> DI\_DEPS\_SYMBOL

• `Const` **DI\_DEPS\_SYMBOL**: typeof [`DI_DEPS_SYMBOL`](index.md#di_deps_symbol)

#### Defined in

[agros-common/src/constants.ts:1](https://github.com/agrosjs/agros/blob/76cd863/packages/agros-common/src/constants.ts#L1)

___

### <a id="di_global_module_symbol" name="di_global_module_symbol"></a> DI\_GLOBAL\_MODULE\_SYMBOL

• `Const` **DI\_GLOBAL\_MODULE\_SYMBOL**: typeof [`DI_GLOBAL_MODULE_SYMBOL`](index.md#di_global_module_symbol)

#### Defined in

[agros-common/src/constants.ts:2](https://github.com/agrosjs/agros/blob/76cd863/packages/agros-common/src/constants.ts#L2)

___

### <a id="di_metadata_component_symbol" name="di_metadata_component_symbol"></a> DI\_METADATA\_COMPONENT\_SYMBOL

• `Const` **DI\_METADATA\_COMPONENT\_SYMBOL**: typeof [`DI_METADATA_COMPONENT_SYMBOL`](index.md#di_metadata_component_symbol)

#### Defined in

[agros-common/src/constants.ts:5](https://github.com/agrosjs/agros/blob/76cd863/packages/agros-common/src/constants.ts#L5)

___

### <a id="di_metadata_module_symbol" name="di_metadata_module_symbol"></a> DI\_METADATA\_MODULE\_SYMBOL

• `Const` **DI\_METADATA\_MODULE\_SYMBOL**: typeof [`DI_METADATA_MODULE_SYMBOL`](index.md#di_metadata_module_symbol)

#### Defined in

[agros-common/src/constants.ts:4](https://github.com/agrosjs/agros/blob/76cd863/packages/agros-common/src/constants.ts#L4)

___

### <a id="di_metadata_use_interceptors_symbol" name="di_metadata_use_interceptors_symbol"></a> DI\_METADATA\_USE\_INTERCEPTORS\_SYMBOL

• `Const` **DI\_METADATA\_USE\_INTERCEPTORS\_SYMBOL**: typeof [`DI_METADATA_USE_INTERCEPTORS_SYMBOL`](index.md#di_metadata_use_interceptors_symbol)

#### Defined in

[agros-common/src/constants.ts:6](https://github.com/agrosjs/agros/blob/76cd863/packages/agros-common/src/constants.ts#L6)

___

### <a id="routes_feature" name="routes_feature"></a> ROUTES\_FEATURE

• `Const` **ROUTES\_FEATURE**: ``"agros:internal:routes:feature"``

#### Defined in

[agros-common/src/constants.ts:9](https://github.com/agrosjs/agros/blob/76cd863/packages/agros-common/src/constants.ts#L9)

___

### <a id="routes_root" name="routes_root"></a> ROUTES\_ROOT

• `Const` **ROUTES\_ROOT**: ``"agros:internal:routes:root"``

#### Defined in

[agros-common/src/constants.ts:8](https://github.com/agrosjs/agros/blob/76cd863/packages/agros-common/src/constants.ts#L8)

## Functions

### <a id="component" name="component"></a> Component

▸ **Component**(`options?`): `ClassDecorator`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ComponentDecoratorOptions`<`any`\> |

#### Returns

`ClassDecorator`

#### Defined in

[agros-common/src/decorators/component.decorator.ts:8](https://github.com/agrosjs/agros/blob/76cd863/packages/agros-common/src/decorators/component.decorator.ts#L8)

___

### <a id="global" name="global"></a> Global

▸ **Global**(): `ClassDecorator`

#### Returns

`ClassDecorator`

#### Defined in

[agros-common/src/decorators/global.decorator.ts:4](https://github.com/agrosjs/agros/blob/76cd863/packages/agros-common/src/decorators/global.decorator.ts#L4)

___

### <a id="injectable" name="injectable"></a> Injectable

▸ **Injectable**(): `ClassDecorator`

#### Returns

`ClassDecorator`

#### Defined in

[agros-common/src/decorators/injectable.decorator.ts:4](https://github.com/agrosjs/agros/blob/76cd863/packages/agros-common/src/decorators/injectable.decorator.ts#L4)

___

### <a id="module" name="module"></a> Module

▸ **Module**(`options?`): `ClassDecorator`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ModuleDecoratorOptions` |

#### Returns

`ClassDecorator`

#### Defined in

[agros-common/src/decorators/module.decorator.ts:8](https://github.com/agrosjs/agros/blob/76cd863/packages/agros-common/src/decorators/module.decorator.ts#L8)

___

### <a id="useinterceptors" name="useinterceptors"></a> UseInterceptors

▸ **UseInterceptors**(...`interceptors`): `ClassDecorator`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...interceptors` | `UseInterceptorsDecoratorOptions` |

#### Returns

`ClassDecorator`

#### Defined in

[agros-common/src/decorators/use-interceptors.decorator.ts:5](https://github.com/agrosjs/agros/blob/76cd863/packages/agros-common/src/decorators/use-interceptors.decorator.ts#L5)
