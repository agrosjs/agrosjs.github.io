[@agros/common](../index.md) / RouterModuleAsyncOptions

# Interface: RouterModuleAsyncOptions

## Table of contents

### Properties

- [imports](RouterModuleAsyncOptions.md#imports)
- [inject](RouterModuleAsyncOptions.md#inject)
- [useFactory](RouterModuleAsyncOptions.md#usefactory)

## Properties

### <a id="imports" name="imports"></a> imports

• **imports**: `AsyncModuleClass`<`any`\>[]

#### Defined in

[agros-common/src/modules/router.module.ts:18](https://github.com/agrosjs/agros/blob/9428958/packages/agros-common/src/modules/router.module.ts#L18)

___

### <a id="inject" name="inject"></a> inject

• **inject**: `Type`<`any`\>[]

#### Defined in

[agros-common/src/modules/router.module.ts:19](https://github.com/agrosjs/agros/blob/9428958/packages/agros-common/src/modules/router.module.ts#L19)

___

### <a id="usefactory" name="usefactory"></a> useFactory

• **useFactory**: (...`args`: `any`[]) => `Promise`<`RouteOptionItem`<`any`\>[]\>

#### Type declaration

▸ (...`args`): `Promise`<`RouteOptionItem`<`any`\>[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`Promise`<`RouteOptionItem`<`any`\>[]\>

#### Defined in

[agros-common/src/modules/router.module.ts:20](https://github.com/agrosjs/agros/blob/9428958/packages/agros-common/src/modules/router.module.ts#L20)
