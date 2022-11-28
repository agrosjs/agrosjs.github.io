[@agros/common](../index.md) / RouterModule

# Class: RouterModule

## Table of contents

### Constructors

- [constructor](RouterModule.md#constructor)

### Methods

- [createRouterItems](RouterModule.md#createrouteritems)
- [register](RouterModule.md#register)

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

[agros-common/src/modules/router.module.ts:35](https://github.com/agrosjs/agros/blob/01a8caa/packages/agros-common/src/modules/router.module.ts#L35)

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

[agros-common/src/modules/router.module.ts:20](https://github.com/agrosjs/agros/blob/01a8caa/packages/agros-common/src/modules/router.module.ts#L20)
