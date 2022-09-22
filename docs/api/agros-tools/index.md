@agros/tools

# @agros/tools

## Table of contents

### Classes

- [ComponentInstance](classes/ComponentInstance.md)
- [ModuleInstance](classes/ModuleInstance.md)

### Interfaces

- [BootstrapConfigItem](interfaces/BootstrapConfigItem.md)
- [BundlessPlatform](interfaces/BundlessPlatform.md)
- [CodeLocation](interfaces/CodeLocation.md)
- [CollectionDescriptor](interfaces/CollectionDescriptor.md)
- [ComponentDecoratorOptions](interfaces/ComponentDecoratorOptions.md)
- [ComponentInstanceMetadata](interfaces/ComponentInstanceMetadata.md)
- [ComponentScript](interfaces/ComponentScript.md)
- [Container](interfaces/Container.md)
- [ContainerForwardedComponentProps](interfaces/ContainerForwardedComponentProps.md)
- [EnsureImportOptions](interfaces/EnsureImportOptions.md)
- [EnsureImportResult](interfaces/EnsureImportResult.md)
- [EntityDescriptor](interfaces/EntityDescriptor.md)
- [EntryTailCodeData](interfaces/EntryTailCodeData.md)
- [Factory](interfaces/Factory.md)
- [FactoryCode](interfaces/FactoryCode.md)
- [GetComponentFactoryCodeData](interfaces/GetComponentFactoryCodeData.md)
- [Interceptor](interfaces/Interceptor.md)
- [ModuleDecoratorOptions](interfaces/ModuleDecoratorOptions.md)
- [ModuleInstanceMetadata](interfaces/ModuleInstanceMetadata.md)
- [ModuleMetadata](interfaces/ModuleMetadata.md)
- [PathDescriptor](interfaces/PathDescriptor.md)
- [Platform](interfaces/Platform.md)
- [PlatformConfig](interfaces/PlatformConfig.md)
- [PlatformFiles](interfaces/PlatformFiles.md)
- [RootContainerProps](interfaces/RootContainerProps.md)
- [RootPointDescriptor](interfaces/RootPointDescriptor.md)
- [RouteOptionItem](interfaces/RouteOptionItem.md)
- [RouteProps](interfaces/RouteProps.md)
- [RouterItem](interfaces/RouterItem.md)
- [ValueProvider](interfaces/ValueProvider.md)

### Type Aliases

- [AddVirtualFile](index.md#addvirtualfile)
- [AsyncModuleClass](index.md#asyncmoduleclass)
- [CollectionMap](index.md#collectionmap)
- [CollectionType](index.md#collectiontype)
- [ComponentMetadata](index.md#componentmetadata)
- [EnsureImportType](index.md#ensureimporttype)
- [Type](index.md#type)
- [UseInterceptorsDecoratorOptions](index.md#useinterceptorsdecoratoroptions)

## Type Aliases

### <a id="addvirtualfile" name="addvirtualfile"></a> AddVirtualFile

Ƭ **AddVirtualFile**: (`pathname`: `string`, `content`: `string`) => `void`

#### Type declaration

▸ (`pathname`, `content`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `pathname` | `string` |
| `content` | `string` |

##### Returns

`void`

#### Defined in

[packages/agros-tools/src/platform.interface.ts:4](https://github.com/agrosjs/agros/blob/a599576/packages/agros-tools/src/platform.interface.ts#L4)

___

### <a id="asyncmoduleclass" name="asyncmoduleclass"></a> AsyncModuleClass

Ƭ **AsyncModuleClass**<`T`\>: [`Type`](index.md#type)<`T`\> \| `Promise`<[`Type`](index.md#type)\> \| [`ValueProvider`](interfaces/ValueProvider.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Defined in

[packages/agros-tools/src/types.ts:46](https://github.com/agrosjs/agros/blob/a599576/packages/agros-tools/src/types.ts#L46)

___

### <a id="collectionmap" name="collectionmap"></a> CollectionMap

Ƭ **CollectionMap**: `Record`<`string`, `string`[]\>

#### Defined in

[packages/agros-tools/src/types.ts:8](https://github.com/agrosjs/agros/blob/a599576/packages/agros-tools/src/types.ts#L8)

___

### <a id="collectiontype" name="collectiontype"></a> CollectionType

Ƭ **CollectionType**: ``"module"`` \| ``"service"`` \| ``"component"`` \| ``"interceptor"``

#### Defined in

[packages/agros-tools/src/types.ts:9](https://github.com/agrosjs/agros/blob/a599576/packages/agros-tools/src/types.ts#L9)

___

### <a id="componentmetadata" name="componentmetadata"></a> ComponentMetadata

Ƭ **ComponentMetadata**: `Omit`<[`ComponentDecoratorOptions`](interfaces/ComponentDecoratorOptions.md), ``"declarations"``\> & { `factory?`: () => `any` ; `uuid`: `string`  }

#### Defined in

[packages/agros-tools/src/types.ts:35](https://github.com/agrosjs/agros/blob/a599576/packages/agros-tools/src/types.ts#L35)

___

### <a id="ensureimporttype" name="ensureimporttype"></a> EnsureImportType

Ƭ **EnsureImportType**: ``"named"`` \| ``"default"`` \| ``"namespace"``

#### Defined in

[packages/agros-tools/src/types.ts:125](https://github.com/agrosjs/agros/blob/a599576/packages/agros-tools/src/types.ts#L125)

___

### <a id="type" name="type"></a> Type

Ƭ **Type**<`T`\>: (...`args`: `any`[]) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Type declaration

• (...`args`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Defined in

[packages/agros-tools/src/types.ts:45](https://github.com/agrosjs/agros/blob/a599576/packages/agros-tools/src/types.ts#L45)

___

### <a id="useinterceptorsdecoratoroptions" name="useinterceptorsdecoratoroptions"></a> UseInterceptorsDecoratorOptions

Ƭ **UseInterceptorsDecoratorOptions**: [`Type`](index.md#type)[]

#### Defined in

[packages/agros-tools/src/types.ts:111](https://github.com/agrosjs/agros/blob/a599576/packages/agros-tools/src/types.ts#L111)
