[@agros/app](../index.md) / RouterModule

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

[agros-app/src/modules/router.module.ts:44](https://github.com/agrosjs/agros/blob/75f75f3/packages/agros-app/src/modules/router.module.ts#L44)

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

[agros-app/src/modules/router.module.ts:33](https://github.com/agrosjs/agros/blob/75f75f3/packages/agros-app/src/modules/router.module.ts#L33)

___

### <a id="forroot" name="forroot"></a> forRoot

▸ `Static` **forRoot**(`__namedParameters`): `Object`

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

[agros-app/src/modules/router.module.ts:22](https://github.com/agrosjs/agros/blob/75f75f3/packages/agros-app/src/modules/router.module.ts#L22)
