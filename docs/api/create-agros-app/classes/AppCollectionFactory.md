[@agros/create-app](../index.md) / AppCollectionFactory

# Class: AppCollectionFactory

## Hierarchy

- `AbstractGeneratorFactory`

  ↳ **`AppCollectionFactory`**

## Implements

- `AbstractGeneratorFactory`

## Table of contents

### Constructors

- [constructor](AppCollectionFactory.md#constructor)

### Properties

- [entities](AppCollectionFactory.md#entities)
- [licenseList](AppCollectionFactory.md#licenselist)
- [licenseUtils](AppCollectionFactory.md#licenseutils)
- [npmClient](AppCollectionFactory.md#npmclient)
- [projectConfig](AppCollectionFactory.md#projectconfig)

### Methods

- [generate](AppCollectionFactory.md#generate)
- [getEntityDescriptor](AppCollectionFactory.md#getentitydescriptor)
- [modulesPath](AppCollectionFactory.md#modulespath)
- [projectPath](AppCollectionFactory.md#projectpath)
- [srcPath](AppCollectionFactory.md#srcpath)
- [updateEntities](AppCollectionFactory.md#updateentities)
- [writeFile](AppCollectionFactory.md#writefile)
- [writeTemplateFile](AppCollectionFactory.md#writetemplatefile)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new AppCollectionFactory**()

#### Inherited from

AbstractGeneratorFactory.constructor

#### Defined in

agros-tools/lib/collection.d.ts:20

## Properties

### <a id="entities" name="entities"></a> entities

• `Protected` **entities**: `EntityDescriptor`[]

#### Implementation of

AbstractGeneratorFactory.entities

#### Inherited from

AbstractGeneratorFactory.entities

#### Defined in

agros-tools/lib/collection.d.ts:19

___

### <a id="licenselist" name="licenselist"></a> licenseList

• `Private` **licenseList**: { `name`: `string` ; `value`: `string` = key }[]

#### Defined in

[create-agros-app/src/app.factory.ts:27](https://github.com/agrosjs/agros/blob/e5e3da1/packages/create-agros-app/src/app.factory.ts#L27)

___

### <a id="licenseutils" name="licenseutils"></a> licenseUtils

• `Private` **licenseUtils**: `LicenseUtils`

#### Defined in

[create-agros-app/src/app.factory.ts:26](https://github.com/agrosjs/agros/blob/e5e3da1/packages/create-agros-app/src/app.factory.ts#L26)

___

### <a id="npmclient" name="npmclient"></a> npmClient

• `Private` **npmClient**: `string`

#### Defined in

[create-agros-app/src/app.factory.ts:28](https://github.com/agrosjs/agros/blob/e5e3da1/packages/create-agros-app/src/app.factory.ts#L28)

___

### <a id="projectconfig" name="projectconfig"></a> projectConfig

• `Protected` `Readonly` **projectConfig**: `ProjectConfigParser`

#### Implementation of

AbstractGeneratorFactory.projectConfig

#### Inherited from

AbstractGeneratorFactory.projectConfig

#### Defined in

agros-tools/lib/collection.d.ts:18

## Methods

### <a id="generate" name="generate"></a> generate

▸ **generate**(`__namedParameters`): `Promise`<`CollectionFactoryResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`AppCollectionOptions`](../interfaces/AppCollectionOptions.md) |

#### Returns

`Promise`<`CollectionFactoryResult`\>

#### Implementation of

AbstractGeneratorFactory.generate

#### Overrides

AbstractGeneratorFactory.generate

#### Defined in

[create-agros-app/src/app.factory.ts:32](https://github.com/agrosjs/agros/blob/e5e3da1/packages/create-agros-app/src/app.factory.ts#L32)

___

### <a id="getentitydescriptor" name="getentitydescriptor"></a> getEntityDescriptor

▸ `Protected` **getEntityDescriptor**(`pathname`): `EntityDescriptor`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathname` | `string` |

#### Returns

`EntityDescriptor`

#### Implementation of

AbstractGeneratorFactory.getEntityDescriptor

#### Inherited from

AbstractGeneratorFactory.getEntityDescriptor

#### Defined in

agros-tools/lib/collection.d.ts:27

___

### <a id="modulespath" name="modulespath"></a> modulesPath

▸ `Protected` **modulesPath**(`pathname?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathname?` | `string` |

#### Returns

`string`

#### Implementation of

AbstractGeneratorFactory.modulesPath

#### Inherited from

AbstractGeneratorFactory.modulesPath

#### Defined in

agros-tools/lib/collection.d.ts:24

___

### <a id="projectpath" name="projectpath"></a> projectPath

▸ `Protected` **projectPath**(`pathname?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathname?` | `string` |

#### Returns

`string`

#### Implementation of

AbstractGeneratorFactory.projectPath

#### Inherited from

AbstractGeneratorFactory.projectPath

#### Defined in

agros-tools/lib/collection.d.ts:22

___

### <a id="srcpath" name="srcpath"></a> srcPath

▸ `Protected` **srcPath**(`pathname?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathname?` | `string` |

#### Returns

`string`

#### Implementation of

AbstractGeneratorFactory.srcPath

#### Inherited from

AbstractGeneratorFactory.srcPath

#### Defined in

agros-tools/lib/collection.d.ts:23

___

### <a id="updateentities" name="updateentities"></a> updateEntities

▸ `Protected` **updateEntities**(): `void`

#### Returns

`void`

#### Implementation of

AbstractGeneratorFactory.updateEntities

#### Inherited from

AbstractGeneratorFactory.updateEntities

#### Defined in

agros-tools/lib/collection.d.ts:21

___

### <a id="writefile" name="writefile"></a> writeFile

▸ `Protected` **writeFile**(`pathname`, `content`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathname` | `string` |
| `content` | `string` |
| `options?` | `CollectionWriteFileOptions` |

#### Returns

`Promise`<`void`\>

#### Implementation of

AbstractGeneratorFactory.writeFile

#### Inherited from

AbstractGeneratorFactory.writeFile

#### Defined in

agros-tools/lib/collection.d.ts:25

___

### <a id="writetemplatefile" name="writetemplatefile"></a> writeTemplateFile

▸ `Protected` **writeTemplateFile**(`source`, `target`, `props?`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `target` | `string` |
| `props?` | `Record`<`string`, `any`\> |
| `options?` | `CollectionWriteFileOptions` |

#### Returns

`Promise`<`void`\>

#### Implementation of

AbstractGeneratorFactory.writeTemplateFile

#### Inherited from

AbstractGeneratorFactory.writeTemplateFile

#### Defined in

agros-tools/lib/collection.d.ts:26
