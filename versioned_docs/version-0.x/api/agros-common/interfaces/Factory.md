[@agros/common](../index.md) / Factory

# Interface: Factory

## Table of contents

### Properties

- [create](Factory.md#create)
- [generateDependencyMap](Factory.md#generatedependencymap)

## Properties

### <a id="create" name="create"></a> create

• **create**: <T\>(`ModuleClass`: [`Type`](../index.md#type)<`T`\>) => `Promise`<[`RouterItem`](RouterItem.md)[]\>

#### Type declaration

▸ <`T`\>(`ModuleClass`): `Promise`<[`RouterItem`](RouterItem.md)[]\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `ModuleClass` | [`Type`](../index.md#type)<`T`\> |

##### Returns

`Promise`<[`RouterItem`](RouterItem.md)[]\>

#### Defined in

[packages/agros-common/src/types.ts:115](https://github.com/agrosjs/agros/blob/64c5bfe/packages/agros-common/src/types.ts#L115)

___

### <a id="generatedependencymap" name="generatedependencymap"></a> generateDependencyMap

• **generateDependencyMap**: (`componentInstanceOrId`: `string` \| `ComponentInstance`) => `Map`<[`Type`](../index.md#type)<`any`\>, `any`\>

#### Type declaration

▸ (`componentInstanceOrId`): `Map`<[`Type`](../index.md#type)<`any`\>, `any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `componentInstanceOrId` | `string` \| `ComponentInstance` |

##### Returns

`Map`<[`Type`](../index.md#type)<`any`\>, `any`\>

#### Defined in

[packages/agros-common/src/types.ts:116](https://github.com/agrosjs/agros/blob/64c5bfe/packages/agros-common/src/types.ts#L116)
