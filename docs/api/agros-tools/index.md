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
- [ComponentDecoratorOptions](interfaces/ComponentDecoratorOptions.md)
- [ComponentInstanceMetadata](interfaces/ComponentInstanceMetadata.md)
- [ComponentScript](interfaces/ComponentScript.md)
- [Container](interfaces/Container.md)
- [ContainerForwardedComponentProps](interfaces/ContainerForwardedComponentProps.md)
- [EntryTailCodeData](interfaces/EntryTailCodeData.md)
- [Factory](interfaces/Factory.md)
- [FactoryCode](interfaces/FactoryCode.md)
- [GetComponentFactoryCodeData](interfaces/GetComponentFactoryCodeData.md)
- [Interceptor](interfaces/Interceptor.md)
- [ModuleDecoratorOptions](interfaces/ModuleDecoratorOptions.md)
- [ModuleInstanceMetadata](interfaces/ModuleInstanceMetadata.md)
- [ModuleMetadata](interfaces/ModuleMetadata.md)
- [Platform](interfaces/Platform.md)
- [RootContainerProps](interfaces/RootContainerProps.md)
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

[platform.interface.ts:4](https://github.com/agrosjs/agros/blob/2fa30a3/packages/agros-tools/src/platform.interface.ts#L4)

___

### <a id="asyncmoduleclass" name="asyncmoduleclass"></a> AsyncModuleClass

Ƭ **AsyncModuleClass**<`T`\>: [`Type`](index.md#type)<`T`\> \| `Promise`<[`Type`](index.md#type)\> \| [`ValueProvider`](interfaces/ValueProvider.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Defined in

[types.ts:43](https://github.com/agrosjs/agros/blob/2fa30a3/packages/agros-tools/src/types.ts#L43)

___

### <a id="collectionmap" name="collectionmap"></a> CollectionMap

Ƭ **CollectionMap**: `Record`<`string`, `string`[]\>

#### Defined in

[types.ts:5](https://github.com/agrosjs/agros/blob/2fa30a3/packages/agros-tools/src/types.ts#L5)

___

### <a id="collectiontype" name="collectiontype"></a> CollectionType

Ƭ **CollectionType**: ``"module"`` \| ``"service"`` \| ``"component"`` \| ``"interceptor"``

#### Defined in

[types.ts:6](https://github.com/agrosjs/agros/blob/2fa30a3/packages/agros-tools/src/types.ts#L6)

___

### <a id="componentmetadata" name="componentmetadata"></a> ComponentMetadata

Ƭ **ComponentMetadata**: `Omit`<[`ComponentDecoratorOptions`](interfaces/ComponentDecoratorOptions.md), ``"declarations"``\> & { `factory?`: () => `any` ; `uuid`: `string`  }

#### Defined in

[types.ts:32](https://github.com/agrosjs/agros/blob/2fa30a3/packages/agros-tools/src/types.ts#L32)

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

[types.ts:42](https://github.com/agrosjs/agros/blob/2fa30a3/packages/agros-tools/src/types.ts#L42)

___

### <a id="useinterceptorsdecoratoroptions" name="useinterceptorsdecoratoroptions"></a> UseInterceptorsDecoratorOptions

Ƭ **UseInterceptorsDecoratorOptions**: [`Type`](index.md#type)[]

#### Defined in

[types.ts:108](https://github.com/agrosjs/agros/blob/2fa30a3/packages/agros-tools/src/types.ts#L108)
