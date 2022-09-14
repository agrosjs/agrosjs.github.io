[@agros/platforms](../index.md) / Platform

# Interface: Platform

## Table of contents

### Properties

- [generateComponent](Platform.md#generatecomponent)
- [getBootstrapCode](Platform.md#getbootstrapcode)
- [getComponentFactoryCode](Platform.md#getcomponentfactorycode)
- [getDecoratorImports](Platform.md#getdecoratorimports)
- [getDefaultConfig](Platform.md#getdefaultconfig)
- [getEntryTailCode](Platform.md#getentrytailcode)
- [getLoaderImports](Platform.md#getloaderimports)

## Properties

### <a id="generatecomponent" name="generatecomponent"></a> generateComponent

• `Optional` **generateComponent**: <T\>(`componentInstance`: `ComponentInstance`, `component`: `any`) => `Promise`<`T`\>

#### Type declaration

▸ <`T`\>(`componentInstance`, `component`): `Promise`<`T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `componentInstance` | `ComponentInstance` |
| `component` | `any` |

##### Returns

`Promise`<`T`\>

#### Defined in

[platform.interface.ts:32](https://github.com/agrosjs/agros/blob/e90e8df/packages/agros-platforms/src/platform.interface.ts#L32)

___

### <a id="getbootstrapcode" name="getbootstrapcode"></a> getBootstrapCode

• **getBootstrapCode**: (`ensuredImportsMap`: `Record`<`string`, `string`\>, `addVirtualFile`: [`AddVirtualFile`](../index.md#addvirtualfile)) => `string`

#### Type declaration

▸ (`ensuredImportsMap`, `addVirtualFile`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ensuredImportsMap` | `Record`<`string`, `string`\> |
| `addVirtualFile` | [`AddVirtualFile`](../index.md#addvirtualfile) |

##### Returns

`string`

#### Defined in

[platform.interface.ts:29](https://github.com/agrosjs/agros/blob/e90e8df/packages/agros-platforms/src/platform.interface.ts#L29)

___

### <a id="getcomponentfactorycode" name="getcomponentfactorycode"></a> getComponentFactoryCode

• **getComponentFactoryCode**: (`data`: [`GetComponentFactoryCodeData`](GetComponentFactoryCodeData.md)) => `string` \| [`FactoryCode`](FactoryCode.md)

#### Type declaration

▸ (`data`): `string` \| [`FactoryCode`](FactoryCode.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`GetComponentFactoryCodeData`](GetComponentFactoryCodeData.md) |

##### Returns

`string` \| [`FactoryCode`](FactoryCode.md)

#### Defined in

[platform.interface.ts:30](https://github.com/agrosjs/agros/blob/e90e8df/packages/agros-platforms/src/platform.interface.ts#L30)

___

### <a id="getdecoratorimports" name="getdecoratorimports"></a> getDecoratorImports

• **getDecoratorImports**: () => `Omit`<`EnsureImportOptions`, ``"statements"``\>[]

#### Type declaration

▸ (): `Omit`<`EnsureImportOptions`, ``"statements"``\>[]

##### Returns

`Omit`<`EnsureImportOptions`, ``"statements"``\>[]

#### Defined in

[platform.interface.ts:28](https://github.com/agrosjs/agros/blob/e90e8df/packages/agros-platforms/src/platform.interface.ts#L28)

___

### <a id="getdefaultconfig" name="getdefaultconfig"></a> getDefaultConfig

• `Optional` **getDefaultConfig**: () => `Record`<`string`, `any`\>

#### Type declaration

▸ (): `Record`<`string`, `any`\>

##### Returns

`Record`<`string`, `any`\>

#### Defined in

[platform.interface.ts:31](https://github.com/agrosjs/agros/blob/e90e8df/packages/agros-platforms/src/platform.interface.ts#L31)

___

### <a id="getentrytailcode" name="getentrytailcode"></a> getEntryTailCode

• `Optional` **getEntryTailCode**: (`data`: [`EntryTailCodeData`](EntryTailCodeData.md)) => `string`[]

#### Type declaration

▸ (`data`): `string`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`EntryTailCodeData`](EntryTailCodeData.md) |

##### Returns

`string`[]

#### Defined in

[platform.interface.ts:33](https://github.com/agrosjs/agros/blob/e90e8df/packages/agros-platforms/src/platform.interface.ts#L33)

___

### <a id="getloaderimports" name="getloaderimports"></a> getLoaderImports

• **getLoaderImports**: () => `Omit`<`EnsureImportOptions`, ``"statements"``\>[]

#### Type declaration

▸ (): `Omit`<`EnsureImportOptions`, ``"statements"``\>[]

##### Returns

`Omit`<`EnsureImportOptions`, ``"statements"``\>[]

#### Defined in

[platform.interface.ts:27](https://github.com/agrosjs/agros/blob/e90e8df/packages/agros-platforms/src/platform.interface.ts#L27)
