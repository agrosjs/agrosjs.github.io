[@agros/common](../index.md) / RouterModule

# Class: RouterModule

## Table of contents

### Constructors

- [constructor](RouterModule.md#constructor)

### Methods

- [createRouterItems](RouterModule.md#createrouteritems)
- [register](RouterModule.md#register)
- [registerAsync](RouterModule.md#registerasync)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new RouterModule**()

## Methods

### <a id="createrouteritems" name="createrouteritems"></a> createRouterItems

▸ `Static` **createRouterItems**(`context`, `routes?`, `prefixPathname?`): `Promise`<`RouterItem`[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `context` | `Factory` | `undefined` |
| `routes` | `RouteOptionItem`<`any`\>[] | `[]` |
| `prefixPathname` | `string` | `''` |

#### Returns

`Promise`<`RouterItem`[]\>

#### Defined in

[agros-common/src/modules/router.module.ts:58](https://github.com/agrosjs/agros/blob/1121c64/packages/agros-common/src/modules/router.module.ts#L58)

___

### <a id="register" name="register"></a> register

▸ `Static` **register**(`__namedParameters`): `DynamicModule`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`RouterModuleOptions`](../interfaces/RouterModuleOptions.md) |

#### Returns

`DynamicModule`<`any`\>

#### Defined in

[agros-common/src/modules/router.module.ts:24](https://github.com/agrosjs/agros/blob/1121c64/packages/agros-common/src/modules/router.module.ts#L24)

___

### <a id="registerasync" name="registerasync"></a> registerAsync

▸ `Static` **registerAsync**(`__namedParameters`): `DynamicModule`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`RouterModuleAsyncOptions`](../interfaces/RouterModuleAsyncOptions.md) |

#### Returns

`DynamicModule`<`any`\>

#### Defined in

[agros-common/src/modules/router.module.ts:39](https://github.com/agrosjs/agros/blob/1121c64/packages/agros-common/src/modules/router.module.ts#L39)
