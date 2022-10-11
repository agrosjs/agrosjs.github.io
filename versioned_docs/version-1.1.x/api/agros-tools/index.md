@agros/tools

# @agros/tools

## Table of contents

### Classes

- [ComponentInstance](classes/ComponentInstance.md)
- [ModuleInstance](classes/ModuleInstance.md)

### Interfaces

- [AddImportedEntityToModuleOptions](interfaces/AddImportedEntityToModuleOptions.md)
- [AddImportedServiceToServiceOptions](interfaces/AddImportedServiceToServiceOptions.md)
- [AddRouteToModuleOptions](interfaces/AddRouteToModuleOptions.md)
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
- [UpdateItem](interfaces/UpdateItem.md)
- [ValueProvider](interfaces/ValueProvider.md)

### Type Aliases

- [AddVirtualFile](index.md#addvirtualfile)
- [AsyncModuleClass](index.md#asyncmoduleclass)
- [CollectionMap](index.md#collectionmap)
- [CollectionType](index.md#collectiontype)
- [ComponentMetadata](index.md#componentmetadata)
- [EnsureImportType](index.md#ensureimporttype)
- [Type](index.md#type)
- [Updater](index.md#updater)
- [UpdaterWithChecker](index.md#updaterwithchecker)
- [UseInterceptorsDecoratorOptions](index.md#useinterceptorsdecoratoroptions)

## Type Aliases

### <a id="addvirtualfile" name="addvirtualfile"></a> AddVirtualFile

Ƭ **AddVirtualFile**: (`pathname`: `string`, `content`: `string`) => `string`

#### Type declaration

▸ (`pathname`, `content`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `pathname` | `string` |
| `content` | `string` |

##### Returns

`string`

#### Defined in

[packages/agros-tools/src/platform.interface.ts:4](https://github.com/agrosjs/agros/blob/944f7d0/packages/agros-tools/src/platform.interface.ts#L4)

___

### <a id="asyncmoduleclass" name="asyncmoduleclass"></a> AsyncModuleClass

Ƭ **AsyncModuleClass**<`T`\>: [`Type`](index.md#type)<`T`\> \| `Promise`<[`Type`](index.md#type)\> \| [`ValueProvider`](interfaces/ValueProvider.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Defined in

[packages/agros-tools/src/types.ts:49](https://github.com/agrosjs/agros/blob/944f7d0/packages/agros-tools/src/types.ts#L49)

___

### <a id="collectionmap" name="collectionmap"></a> CollectionMap

Ƭ **CollectionMap**: `Record`<`string`, `string`[]\>

#### Defined in

[packages/agros-tools/src/types.ts:11](https://github.com/agrosjs/agros/blob/944f7d0/packages/agros-tools/src/types.ts#L11)

___

### <a id="collectiontype" name="collectiontype"></a> CollectionType

Ƭ **CollectionType**: ``"module"`` \| ``"service"`` \| ``"component"`` \| ``"interceptor"``

#### Defined in

[packages/agros-tools/src/types.ts:12](https://github.com/agrosjs/agros/blob/944f7d0/packages/agros-tools/src/types.ts#L12)

___

### <a id="componentmetadata" name="componentmetadata"></a> ComponentMetadata

Ƭ **ComponentMetadata**: `Omit`<[`ComponentDecoratorOptions`](interfaces/ComponentDecoratorOptions.md), ``"declarations"``\> & { `factory?`: () => `any` ; `uuid`: `string`  }

#### Defined in

[packages/agros-tools/src/types.ts:38](https://github.com/agrosjs/agros/blob/944f7d0/packages/agros-tools/src/types.ts#L38)

___

### <a id="ensureimporttype" name="ensureimporttype"></a> EnsureImportType

Ƭ **EnsureImportType**: ``"named"`` \| ``"default"`` \| ``"namespace"``

#### Defined in

[packages/agros-tools/src/types.ts:128](https://github.com/agrosjs/agros/blob/944f7d0/packages/agros-tools/src/types.ts#L128)

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

[packages/agros-tools/src/types.ts:48](https://github.com/agrosjs/agros/blob/944f7d0/packages/agros-tools/src/types.ts#L48)

___

### <a id="updater" name="updater"></a> Updater

Ƭ **Updater**<`T`\>: (`data`: { `classImportItem`: `ClassImportItem`<`t.ClassDeclaration`\> ; `initialResult`: [`UpdateItem`](interfaces/UpdateItem.md)[] ; `options?`: `T` ; `sourceDescriptor`: [`EntityDescriptor`](interfaces/EntityDescriptor.md) ; `targetAST`: `ParseResult`<`t.File`\> ; `targetDescriptor`: [`EntityDescriptor`](interfaces/EntityDescriptor.md)  }) => `Promise`<[`UpdateItem`](interfaces/UpdateItem.md)[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`data`): `Promise`<[`UpdateItem`](interfaces/UpdateItem.md)[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.classImportItem` | `ClassImportItem`<`t.ClassDeclaration`\> |
| `data.initialResult` | [`UpdateItem`](interfaces/UpdateItem.md)[] |
| `data.options?` | `T` |
| `data.sourceDescriptor` | [`EntityDescriptor`](interfaces/EntityDescriptor.md) |
| `data.targetAST` | `ParseResult`<`t.File`\> |
| `data.targetDescriptor` | [`EntityDescriptor`](interfaces/EntityDescriptor.md) |

##### Returns

`Promise`<[`UpdateItem`](interfaces/UpdateItem.md)[]\>

#### Defined in

[packages/agros-tools/src/types.ts:187](https://github.com/agrosjs/agros/blob/944f7d0/packages/agros-tools/src/types.ts#L187)

___

### <a id="updaterwithchecker" name="updaterwithchecker"></a> UpdaterWithChecker

Ƭ **UpdaterWithChecker**<`T`\>: (`sourceDescriptor`: [`EntityDescriptor`](interfaces/EntityDescriptor.md), `targetDescriptor`: [`EntityDescriptor`](interfaces/EntityDescriptor.md), `options?`: `T`) => `Promise`<[`UpdateItem`](interfaces/UpdateItem.md)[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Type declaration

▸ (`sourceDescriptor`, `targetDescriptor`, `options?`): `Promise`<[`UpdateItem`](interfaces/UpdateItem.md)[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `sourceDescriptor` | [`EntityDescriptor`](interfaces/EntityDescriptor.md) |
| `targetDescriptor` | [`EntityDescriptor`](interfaces/EntityDescriptor.md) |
| `options?` | `T` |

##### Returns

`Promise`<[`UpdateItem`](interfaces/UpdateItem.md)[]\>

#### Defined in

[packages/agros-tools/src/types.ts:196](https://github.com/agrosjs/agros/blob/944f7d0/packages/agros-tools/src/types.ts#L196)

___

### <a id="useinterceptorsdecoratoroptions" name="useinterceptorsdecoratoroptions"></a> UseInterceptorsDecoratorOptions

Ƭ **UseInterceptorsDecoratorOptions**: [`Type`](index.md#type)[]

#### Defined in

[packages/agros-tools/src/types.ts:114](https://github.com/agrosjs/agros/blob/944f7d0/packages/agros-tools/src/types.ts#L114)
