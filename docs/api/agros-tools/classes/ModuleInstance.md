[@agros/tools](../index.md) / ModuleInstance

# Class: ModuleInstance

## Table of contents

### Constructors

- [constructor](ModuleInstance.md#constructor)

### Properties

- [importedModuleInstances](ModuleInstance.md#importedmoduleinstances)
- [metadata](ModuleInstance.md#metadata)

### Methods

- [addImportedModuleInstance](ModuleInstance.md#addimportedmoduleinstance)
- [generateBaseProviderValue](ModuleInstance.md#generatebaseprovidervalue)
- [getBaseProvider](ModuleInstance.md#getbaseprovider)
- [getImportedModuleInstances](ModuleInstance.md#getimportedmoduleinstances)
- [getProviders](ModuleInstance.md#getproviders)
- [hasDependedProviderClass](ModuleInstance.md#hasdependedproviderclass)
- [setBaseProviderWithValue](ModuleInstance.md#setbaseproviderwithvalue)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new ModuleInstance**(`metadata`, `globalModuleInstances`, `HostModuleClass`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | [`ModuleInstanceMetadata`](../interfaces/ModuleInstanceMetadata.md) |
| `globalModuleInstances` | `Set`<[`ModuleInstance`](ModuleInstance.md)\> |
| `HostModuleClass` | [`Type`](../index.md#type)<`any`\> |

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:30](https://github.com/agrosjs/agros/blob/01a8caa/packages/agros-tools/src/module-instance.class.ts#L30)

## Properties

### <a id="importedmoduleinstances" name="importedmoduleinstances"></a> importedModuleInstances

• `Private` **importedModuleInstances**: `Set`<[`ModuleInstance`](ModuleInstance.md)\>

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:24](https://github.com/agrosjs/agros/blob/01a8caa/packages/agros-tools/src/module-instance.class.ts#L24)

___

### <a id="metadata" name="metadata"></a> metadata

• `Readonly` **metadata**: [`ModuleInstanceMetadata`](../interfaces/ModuleInstanceMetadata.md)

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:31](https://github.com/agrosjs/agros/blob/01a8caa/packages/agros-tools/src/module-instance.class.ts#L31)

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

[packages/agros-tools/src/module-instance.class.ts:47](https://github.com/agrosjs/agros/blob/01a8caa/packages/agros-tools/src/module-instance.class.ts#L47)

___

### <a id="generatebaseprovidervalue" name="generatebaseprovidervalue"></a> generateBaseProviderValue

▸ **generateBaseProviderValue**(`provider`, `createProviderInstance?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`BaseProvider`](../index.md#baseprovider) |
| `createProviderInstance?` | (`Class`: [`Type`](../index.md#type)<`any`\>) => `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:120](https://github.com/agrosjs/agros/blob/01a8caa/packages/agros-tools/src/module-instance.class.ts#L120)

___

### <a id="getbaseprovider" name="getbaseprovider"></a> getBaseProvider

▸ **getBaseProvider**(`providerKey`): [`BaseProviderWithValue`](../index.md#baseproviderwithvalue)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerKey` | [`ProviderToken`](../index.md#providertoken) |

#### Returns

[`BaseProviderWithValue`](../index.md#baseproviderwithvalue)<`any`\>

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:101](https://github.com/agrosjs/agros/blob/01a8caa/packages/agros-tools/src/module-instance.class.ts#L101)

___

### <a id="getimportedmoduleinstances" name="getimportedmoduleinstances"></a> getImportedModuleInstances

▸ **getImportedModuleInstances**(): `Set`<[`ModuleInstance`](ModuleInstance.md)\>

#### Returns

`Set`<[`ModuleInstance`](ModuleInstance.md)\>

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:57](https://github.com/agrosjs/agros/blob/01a8caa/packages/agros-tools/src/module-instance.class.ts#L57)

___

### <a id="getproviders" name="getproviders"></a> getProviders

▸ **getProviders**(): `Set`<`any`\>

get provider classes recursively from imported modules

#### Returns

`Set`<`any`\>

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:65](https://github.com/agrosjs/agros/blob/01a8caa/packages/agros-tools/src/module-instance.class.ts#L65)

___

### <a id="hasdependedproviderclass" name="hasdependedproviderclass"></a> hasDependedProviderClass

▸ **hasDependedProviderClass**(`providerKey`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerKey` | [`Type`](../index.md#type)<`any`\> \| [`ProviderToken`](../index.md#providertoken) |

#### Returns

`boolean`

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:109](https://github.com/agrosjs/agros/blob/01a8caa/packages/agros-tools/src/module-instance.class.ts#L109)

___

### <a id="setbaseproviderwithvalue" name="setbaseproviderwithvalue"></a> setBaseProviderWithValue

▸ **setBaseProviderWithValue**(`providerToken`, `baseProviderWithValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerToken` | [`ProviderToken`](../index.md#providertoken) |
| `baseProviderWithValue` | [`BaseProviderWithValue`](../index.md#baseproviderwithvalue)<`any`\> |

#### Returns

`void`

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:149](https://github.com/agrosjs/agros/blob/01a8caa/packages/agros-tools/src/module-instance.class.ts#L149)
