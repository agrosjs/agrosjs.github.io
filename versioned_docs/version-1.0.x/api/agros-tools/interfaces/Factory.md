[@agros/tools](../index.md) / Factory

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

• **create**: <T\>(`ModuleClass`: [`Type`](../index.md#type)<`T`\>) => `Promise`<[`ComponentInstance`](../classes/ComponentInstance.md)\>

#### Type declaration

▸ <`T`\>(`ModuleClass`): `Promise`<[`ComponentInstance`](../classes/ComponentInstance.md)\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `ModuleClass` | [`Type`](../index.md#type)<`T`\> |

##### Returns

`Promise`<[`ComponentInstance`](../classes/ComponentInstance.md)\>

#### Defined in

[types.ts:111](https://github.com/agrosjs/agros/blob/2fa30a3/packages/agros-tools/src/types.ts#L111)

___

### <a id="generatedependencymap" name="generatedependencymap"></a> generateDependencyMap

• **generateDependencyMap**: (`componentInstanceOrId`: `string` \| [`ComponentInstance`](../classes/ComponentInstance.md)) => `Map`<[`Type`](../index.md#type)<`any`\>, `any`\>

#### Type declaration

▸ (`componentInstanceOrId`): `Map`<[`Type`](../index.md#type)<`any`\>, `any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `componentInstanceOrId` | `string` \| [`ComponentInstance`](../classes/ComponentInstance.md) |

##### Returns

`Map`<[`Type`](../index.md#type)<`any`\>, `any`\>

#### Defined in

[types.ts:112](https://github.com/agrosjs/agros/blob/2fa30a3/packages/agros-tools/src/types.ts#L112)

___

### <a id="getcomponentinstancemap" name="getcomponentinstancemap"></a> getComponentInstanceMap

• **getComponentInstanceMap**: () => `Map`<[`Type`](../index.md#type)<`any`\>, [`ComponentInstance`](../classes/ComponentInstance.md)\>

#### Type declaration

▸ (): `Map`<[`Type`](../index.md#type)<`any`\>, [`ComponentInstance`](../classes/ComponentInstance.md)\>

##### Returns

`Map`<[`Type`](../index.md#type)<`any`\>, [`ComponentInstance`](../classes/ComponentInstance.md)\>

#### Defined in

[types.ts:115](https://github.com/agrosjs/agros/blob/2fa30a3/packages/agros-tools/src/types.ts#L115)

___

### <a id="getmoduleinstancemap" name="getmoduleinstancemap"></a> getModuleInstanceMap

• **getModuleInstanceMap**: () => `Map`<[`Type`](../index.md#type)<`any`\>, [`ModuleInstance`](../classes/ModuleInstance.md)\>

#### Type declaration

▸ (): `Map`<[`Type`](../index.md#type)<`any`\>, [`ModuleInstance`](../classes/ModuleInstance.md)\>

##### Returns

`Map`<[`Type`](../index.md#type)<`any`\>, [`ModuleInstance`](../classes/ModuleInstance.md)\>

#### Defined in

[types.ts:113](https://github.com/agrosjs/agros/blob/2fa30a3/packages/agros-tools/src/types.ts#L113)

___

### <a id="getrootmoduleinstance" name="getrootmoduleinstance"></a> getRootModuleInstance

• **getRootModuleInstance**: () => [`ModuleInstance`](../classes/ModuleInstance.md)

#### Type declaration

▸ (): [`ModuleInstance`](../classes/ModuleInstance.md)

##### Returns

[`ModuleInstance`](../classes/ModuleInstance.md)

#### Defined in

[types.ts:114](https://github.com/agrosjs/agros/blob/2fa30a3/packages/agros-tools/src/types.ts#L114)
