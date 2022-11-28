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

• **new ModuleInstance**(`metadata`, `globalModuleInstances`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | [`ModuleInstanceMetadata`](../interfaces/ModuleInstanceMetadata.md) |
| `globalModuleInstances` | `Set`<[`ModuleInstance`](ModuleInstance.md)\> |

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:27](https://github.com/agrosjs/agros/blob/4eb8f7e/packages/agros-tools/src/module-instance.class.ts#L27)

## Properties

### <a id="importedmoduleinstances" name="importedmoduleinstances"></a> importedModuleInstances

• `Private` **importedModuleInstances**: `Set`<[`ModuleInstance`](ModuleInstance.md)\>

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:21](https://github.com/agrosjs/agros/blob/4eb8f7e/packages/agros-tools/src/module-instance.class.ts#L21)

___

### <a id="metadata" name="metadata"></a> metadata

• `Readonly` **metadata**: [`ModuleInstanceMetadata`](../interfaces/ModuleInstanceMetadata.md)

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:28](https://github.com/agrosjs/agros/blob/4eb8f7e/packages/agros-tools/src/module-instance.class.ts#L28)

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

[packages/agros-tools/src/module-instance.class.ts:43](https://github.com/agrosjs/agros/blob/4eb8f7e/packages/agros-tools/src/module-instance.class.ts#L43)

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

[packages/agros-tools/src/module-instance.class.ts:129](https://github.com/agrosjs/agros/blob/4eb8f7e/packages/agros-tools/src/module-instance.class.ts#L129)

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

[packages/agros-tools/src/module-instance.class.ts:110](https://github.com/agrosjs/agros/blob/4eb8f7e/packages/agros-tools/src/module-instance.class.ts#L110)

___

### <a id="getimportedmoduleinstances" name="getimportedmoduleinstances"></a> getImportedModuleInstances

▸ **getImportedModuleInstances**(): `Set`<[`ModuleInstance`](ModuleInstance.md)\>

#### Returns

`Set`<[`ModuleInstance`](ModuleInstance.md)\>

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:53](https://github.com/agrosjs/agros/blob/4eb8f7e/packages/agros-tools/src/module-instance.class.ts#L53)

___

### <a id="getproviders" name="getproviders"></a> getProviders

▸ **getProviders**(): `Set`<`any`\>

get provider classes recursively from imported modules

#### Returns

`Set`<`any`\>

#### Defined in

[packages/agros-tools/src/module-instance.class.ts:61](https://github.com/agrosjs/agros/blob/4eb8f7e/packages/agros-tools/src/module-instance.class.ts#L61)

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

[packages/agros-tools/src/module-instance.class.ts:118](https://github.com/agrosjs/agros/blob/4eb8f7e/packages/agros-tools/src/module-instance.class.ts#L118)

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

[packages/agros-tools/src/module-instance.class.ts:158](https://github.com/agrosjs/agros/blob/4eb8f7e/packages/agros-tools/src/module-instance.class.ts#L158)
