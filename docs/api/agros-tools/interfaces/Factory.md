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

[packages/agros-tools/src/types.ts:159](https://github.com/agrosjs/agros/blob/a6e22e9/packages/agros-tools/src/types.ts#L159)

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

[packages/agros-tools/src/types.ts:160](https://github.com/agrosjs/agros/blob/a6e22e9/packages/agros-tools/src/types.ts#L160)

___

### <a id="getcomponentinstancemap" name="getcomponentinstancemap"></a> getComponentInstanceMap

• **getComponentInstanceMap**: () => `Map`<[`Type`](../index.md#type)<`any`\>, [`ComponentInstance`](../classes/ComponentInstance.md)\>

#### Type declaration

▸ (): `Map`<[`Type`](../index.md#type)<`any`\>, [`ComponentInstance`](../classes/ComponentInstance.md)\>

##### Returns

`Map`<[`Type`](../index.md#type)<`any`\>, [`ComponentInstance`](../classes/ComponentInstance.md)\>

#### Defined in

[packages/agros-tools/src/types.ts:163](https://github.com/agrosjs/agros/blob/a6e22e9/packages/agros-tools/src/types.ts#L163)

___

### <a id="getmoduleinstancemap" name="getmoduleinstancemap"></a> getModuleInstanceMap

• **getModuleInstanceMap**: () => `Map`<[`Type`](../index.md#type)<`any`\>, [`ModuleInstance`](../classes/ModuleInstance.md)\>

#### Type declaration

▸ (): `Map`<[`Type`](../index.md#type)<`any`\>, [`ModuleInstance`](../classes/ModuleInstance.md)\>

##### Returns

`Map`<[`Type`](../index.md#type)<`any`\>, [`ModuleInstance`](../classes/ModuleInstance.md)\>

#### Defined in

[packages/agros-tools/src/types.ts:161](https://github.com/agrosjs/agros/blob/a6e22e9/packages/agros-tools/src/types.ts#L161)

___

### <a id="getrootmoduleinstance" name="getrootmoduleinstance"></a> getRootModuleInstance

• **getRootModuleInstance**: () => [`ModuleInstance`](../classes/ModuleInstance.md)

#### Type declaration

▸ (): [`ModuleInstance`](../classes/ModuleInstance.md)

##### Returns

[`ModuleInstance`](../classes/ModuleInstance.md)

#### Defined in

[packages/agros-tools/src/types.ts:162](https://github.com/agrosjs/agros/blob/a6e22e9/packages/agros-tools/src/types.ts#L162)
