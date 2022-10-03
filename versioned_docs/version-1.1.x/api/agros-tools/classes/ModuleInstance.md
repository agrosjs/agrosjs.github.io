[@agros/tools](../index.md) / ModuleInstance

# Class: ModuleInstance

## Table of contents

### Constructors

- [constructor](ModuleInstance.md#constructor)

### Properties

- [importedModuleInstances](ModuleInstance.md#importedmoduleinstances)
- [metadata](ModuleInstance.md#metadata)
- [valueProviderMap](ModuleInstance.md#valueprovidermap)

### Methods

- [addImportedModuleInstance](ModuleInstance.md#addimportedmoduleinstance)
- [generateProviderValues](ModuleInstance.md#generateprovidervalues)
- [getImportedModuleInstances](ModuleInstance.md#getimportedmoduleinstances)
- [getProviderClasses](ModuleInstance.md#getproviderclasses)
- [getProviderValue](ModuleInstance.md#getprovidervalue)
- [hasDependedProviderClass](ModuleInstance.md#hasdependedproviderclass)
- [setValueProviderItem](ModuleInstance.md#setvalueprovideritem)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new ModuleInstance**(`metadata`, `globalModuleInstances`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | [`ModuleInstanceMetadata`](../interfaces/ModuleInstanceMetadata.md) |
| `globalModuleInstances` | `Set`<[`ModuleInstance`](ModuleInstance.md)\> |

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:19](https://github.com/agrosjs/agros/blob/1a9901d/packages/agros-tools/src/module-instance.class.ts#L19)

## Properties

### <a id="importedmoduleinstances" name="importedmoduleinstances"></a> importedModuleInstances

• `Private` **importedModuleInstances**: `Set`<[`ModuleInstance`](ModuleInstance.md)\>

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:12](https://github.com/agrosjs/agros/blob/1a9901d/packages/agros-tools/src/module-instance.class.ts#L12)

___

### <a id="metadata" name="metadata"></a> metadata

• `Readonly` **metadata**: [`ModuleInstanceMetadata`](../interfaces/ModuleInstanceMetadata.md)

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:20](https://github.com/agrosjs/agros/blob/1a9901d/packages/agros-tools/src/module-instance.class.ts#L20)

___

### <a id="valueprovidermap" name="valueprovidermap"></a> valueProviderMap

• `Private` **valueProviderMap**: `Map`<`string`, `any`\>

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:13](https://github.com/agrosjs/agros/blob/1a9901d/packages/agros-tools/src/module-instance.class.ts#L13)

## Methods

### <a id="addimportedmoduleinstance" name="addimportedmoduleinstance"></a> addImportedModuleInstance

▸ **addImportedModuleInstance**(`moduleInstance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleInstance` | [`ModuleInstance`](ModuleInstance.md) |

#### Returns

`void`

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:24](https://github.com/agrosjs/agros/blob/1a9901d/packages/agros-tools/src/module-instance.class.ts#L24)

___

### <a id="generateprovidervalues" name="generateprovidervalues"></a> generateProviderValues

▸ **generateProviderValues**(`context`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`Factory`](../interfaces/Factory.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:72](https://github.com/agrosjs/agros/blob/1a9901d/packages/agros-tools/src/module-instance.class.ts#L72)

___

### <a id="getimportedmoduleinstances" name="getimportedmoduleinstances"></a> getImportedModuleInstances

▸ **getImportedModuleInstances**(): `Set`<[`ModuleInstance`](ModuleInstance.md)\>

#### Returns

`Set`<[`ModuleInstance`](ModuleInstance.md)\>

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:34](https://github.com/agrosjs/agros/blob/1a9901d/packages/agros-tools/src/module-instance.class.ts#L34)

___

### <a id="getproviderclasses" name="getproviderclasses"></a> getProviderClasses

▸ **getProviderClasses**(): `Set`<[`Type`](../index.md#type)<`any`\>\>

get provider classes recursively from imported modules

#### Returns

`Set`<[`Type`](../index.md#type)<`any`\>\>

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:42](https://github.com/agrosjs/agros/blob/1a9901d/packages/agros-tools/src/module-instance.class.ts#L42)

___

### <a id="getprovidervalue" name="getprovidervalue"></a> getProviderValue

▸ **getProviderValue**<`T`\>(`key`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`T`

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:80](https://github.com/agrosjs/agros/blob/1a9901d/packages/agros-tools/src/module-instance.class.ts#L80)

___

### <a id="hasdependedproviderclass" name="hasdependedproviderclass"></a> hasDependedProviderClass

▸ **hasDependedProviderClass**(`ProviderClass`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ProviderClass` | [`Type`](../index.md#type)<`any`\> |

#### Returns

`boolean`

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:64](https://github.com/agrosjs/agros/blob/1a9901d/packages/agros-tools/src/module-instance.class.ts#L64)

___

### <a id="setvalueprovideritem" name="setvalueprovideritem"></a> setValueProviderItem

▸ **setValueProviderItem**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:68](https://github.com/agrosjs/agros/blob/1a9901d/packages/agros-tools/src/module-instance.class.ts#L68)
