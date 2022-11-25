[@agros/common](../index.md) / RouterModule

# Class: RouterModule

## Table of contents

### Constructors

- [constructor](RouterModule.md#constructor)

### Methods

- [createRouterItems](RouterModule.md#createrouteritems)
- [forFeature](RouterModule.md#forfeature)
- [forRoot](RouterModule.md#forroot)

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

[agros-common/src/modules/router.module.ts:57](https://github.com/agrosjs/agros/blob/f5a170d/packages/agros-common/src/modules/router.module.ts#L57)

___

### <a id="forfeature" name="forfeature"></a> forFeature

▸ `Static` **forFeature**(`__namedParameters`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`RouterModuleRootOptions`](../interfaces/RouterModuleRootOptions.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `provide` | `string` |
| `useValue` | () => `Promise`<`RouteOptionItem`<`any`\>[]\> |

#### Defined in

[agros-common/src/modules/router.module.ts:46](https://github.com/agrosjs/agros/blob/f5a170d/packages/agros-common/src/modules/router.module.ts#L46)

___

### <a id="forroot" name="forroot"></a> forRoot

▸ `Static` **forRoot**(`__namedParameters`): `DynamicModule`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`RouterModuleRootOptions`](../interfaces/RouterModuleRootOptions.md) |

#### Returns

`DynamicModule`<`any`\>

#### Defined in

[agros-common/src/modules/router.module.ts:29](https://github.com/agrosjs/agros/blob/f5a170d/packages/agros-common/src/modules/router.module.ts#L29)
