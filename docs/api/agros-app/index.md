@agros/app

# @agros/app

## Table of contents

### Classes

- [RouterModule](classes/RouterModule.md)

### Interfaces

- [Interceptor](interfaces/Interceptor.md)
- [RouterModuleRootOptions](interfaces/RouterModuleRootOptions.md)

### Type Aliases

- [RouterModuleFeatureOptions](index.md#routermodulefeatureoptions)

### Functions

- [Component](index.md#component)
- [Global](index.md#global)
- [Injectable](index.md#injectable)
- [Module](index.md#module)
- [UseInterceptors](index.md#useinterceptors)
- [getContainer](index.md#getcontainer)

## Type Aliases

### <a id="routermodulefeatureoptions" name="routermodulefeatureoptions"></a> RouterModuleFeatureOptions

Ƭ **RouterModuleFeatureOptions**: [`RouterModuleRootOptions`](interfaces/RouterModuleRootOptions.md)

#### Defined in

[agros-app/src/modules/router.module.ts:19](https://github.com/agrosjs/agros/blob/f7aa4e9/packages/agros-app/src/modules/router.module.ts#L19)

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

[agros-app/src/decorators/component.decorator.ts:7](https://github.com/agrosjs/agros/blob/f7aa4e9/packages/agros-app/src/decorators/component.decorator.ts#L7)

___

### <a id="global" name="global"></a> Global

▸ **Global**(): `ClassDecorator`

#### Returns

`ClassDecorator`

#### Defined in

[agros-app/src/decorators/global.decorator.ts:3](https://github.com/agrosjs/agros/blob/f7aa4e9/packages/agros-app/src/decorators/global.decorator.ts#L3)

___

### <a id="injectable" name="injectable"></a> Injectable

▸ **Injectable**(): `ClassDecorator`

#### Returns

`ClassDecorator`

#### Defined in

[agros-app/src/decorators/injectable.decorator.ts:3](https://github.com/agrosjs/agros/blob/f7aa4e9/packages/agros-app/src/decorators/injectable.decorator.ts#L3)

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

[agros-app/src/decorators/module.decorator.ts:7](https://github.com/agrosjs/agros/blob/f7aa4e9/packages/agros-app/src/decorators/module.decorator.ts#L7)

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

[agros-app/src/decorators/use-interceptors.decorator.ts:4](https://github.com/agrosjs/agros/blob/f7aa4e9/packages/agros-app/src/decorators/use-interceptors.decorator.ts#L4)

___

### <a id="getcontainer" name="getcontainer"></a> getContainer

▸ **getContainer**(`map?`): `Object`

get container dependencies

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Map`<`Type`<`any`\>, `any`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `get` | <T\>(`Class`: `Type`<`any`\>) => `T` |

#### Defined in

[agros-app/src/get-container.ts:9](https://github.com/agrosjs/agros/blob/f7aa4e9/packages/agros-app/src/get-container.ts#L9)
