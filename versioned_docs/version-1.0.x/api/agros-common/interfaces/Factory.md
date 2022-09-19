[@agros/common](../index.md) / Factory

# Interface: Factory

## Table of contents

### Properties

- [create](Factory.md#create)
- [generateDependencyMap](Factory.md#generatedependencymap)
- [getComponentInstanceMap](Factory.md#getcomponentinstancemap)
- [getModuleInstanceMap](Factory.md#getmoduleinstancemap)
- [getRootModuleInstance](Factory.md#getrootmoduleinstance)

## Properties

### <a id="create" name="create"></a> create

• **create**: <T\>(`ModuleClass`: [`Type`](../index.md#type)<`T`\>) => `Promise`<`ComponentInstance`\>

#### Type declaration

▸ <`T`\>(`ModuleClass`): `Promise`<`ComponentInstance`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `ModuleClass` | [`Type`](../index.md#type)<`T`\> |

##### Returns

`Promise`<`ComponentInstance`\>

#### Defined in

[packages/agros-common/src/types.ts:120](https://github.com/agrosjs/agros/blob/308fc0e/packages/agros-common/src/types.ts#L120)

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

[packages/agros-common/src/types.ts:121](https://github.com/agrosjs/agros/blob/308fc0e/packages/agros-common/src/types.ts#L121)

___

### <a id="getcomponentinstancemap" name="getcomponentinstancemap"></a> getComponentInstanceMap

• **getComponentInstanceMap**: () => `Map`<[`Type`](../index.md#type)<`any`\>, `ComponentInstance`\>

#### Type declaration

▸ (): `Map`<[`Type`](../index.md#type)<`any`\>, `ComponentInstance`\>

##### Returns

`Map`<[`Type`](../index.md#type)<`any`\>, `ComponentInstance`\>

#### Defined in

[packages/agros-common/src/types.ts:124](https://github.com/agrosjs/agros/blob/308fc0e/packages/agros-common/src/types.ts#L124)

___

### <a id="getmoduleinstancemap" name="getmoduleinstancemap"></a> getModuleInstanceMap

• **getModuleInstanceMap**: () => `Map`<[`Type`](../index.md#type)<`any`\>, `ModuleInstance`\>

#### Type declaration

▸ (): `Map`<[`Type`](../index.md#type)<`any`\>, `ModuleInstance`\>

##### Returns

`Map`<[`Type`](../index.md#type)<`any`\>, `ModuleInstance`\>

#### Defined in

[packages/agros-common/src/types.ts:122](https://github.com/agrosjs/agros/blob/308fc0e/packages/agros-common/src/types.ts#L122)

___

### <a id="getrootmoduleinstance" name="getrootmoduleinstance"></a> getRootModuleInstance

• **getRootModuleInstance**: () => `ModuleInstance`

#### Type declaration

▸ (): `ModuleInstance`

##### Returns

`ModuleInstance`

#### Defined in

[packages/agros-common/src/types.ts:123](https://github.com/agrosjs/agros/blob/308fc0e/packages/agros-common/src/types.ts#L123)
