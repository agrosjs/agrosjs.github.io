[@agros/common](../index.md) / AbstractCollection

# Class: AbstractCollection

## Table of contents

### Constructors

- [constructor](AbstractCollection.md#constructor)

### Properties

- [entities](AbstractCollection.md#entities)
- [projectConfig](AbstractCollection.md#projectconfig)

### Methods

- [generate](AbstractCollection.md#generate)
- [getEntityDescriptor](AbstractCollection.md#getentitydescriptor)
- [modulesPath](AbstractCollection.md#modulespath)
- [projectPath](AbstractCollection.md#projectpath)
- [srcPath](AbstractCollection.md#srcpath)
- [updateEntities](AbstractCollection.md#updateentities)
- [writeBinaryFile](AbstractCollection.md#writebinaryfile)
- [writeFile](AbstractCollection.md#writefile)
- [writeTemplateFile](AbstractCollection.md#writetemplatefile)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new AbstractCollection**()

#### Defined in

[packages/agros-common/src/collection.ts:40](https://github.com/agrosjs/agros/blob/e4d2f36/packages/agros-common/src/collection.ts#L40)

## Properties

### <a id="entities" name="entities"></a> entities

• `Protected` **entities**: [`EntityDescriptor`](../interfaces/EntityDescriptor.md)[] = `[]`

#### Defined in

[packages/agros-common/src/collection.ts:38](https://github.com/agrosjs/agros/blob/e4d2f36/packages/agros-common/src/collection.ts#L38)

___

### <a id="projectconfig" name="projectconfig"></a> projectConfig

• `Protected` `Readonly` **projectConfig**: `ProjectConfigParser`

#### Defined in

[packages/agros-common/src/collection.ts:37](https://github.com/agrosjs/agros/blob/e4d2f36/packages/agros-common/src/collection.ts#L37)

## Methods

### <a id="generate" name="generate"></a> generate

▸ `Abstract` **generate**(`props`): `Promise`<[`CollectionGenerateResult`](../interfaces/CollectionGenerateResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`Promise`<[`CollectionGenerateResult`](../interfaces/CollectionGenerateResult.md)\>

#### Defined in

[packages/agros-common/src/collection.ts:142](https://github.com/agrosjs/agros/blob/e4d2f36/packages/agros-common/src/collection.ts#L142)

___

### <a id="getentitydescriptor" name="getentitydescriptor"></a> getEntityDescriptor

▸ `Protected` **getEntityDescriptor**(`pathname`): [`EntityDescriptor`](../interfaces/EntityDescriptor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathname` | `string` |

#### Returns

[`EntityDescriptor`](../interfaces/EntityDescriptor.md)

#### Defined in

[packages/agros-common/src/collection.ts:119](https://github.com/agrosjs/agros/blob/e4d2f36/packages/agros-common/src/collection.ts#L119)

___

### <a id="modulespath" name="modulespath"></a> modulesPath

▸ `Protected` **modulesPath**(`pathname?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathname?` | `string` |

#### Returns

`string`

#### Defined in

[packages/agros-common/src/collection.ts:65](https://github.com/agrosjs/agros/blob/e4d2f36/packages/agros-common/src/collection.ts#L65)

___

### <a id="projectpath" name="projectpath"></a> projectPath

▸ `Protected` **projectPath**(`pathname?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathname?` | `string` |

#### Returns

`string`

#### Defined in

[packages/agros-common/src/collection.ts:49](https://github.com/agrosjs/agros/blob/e4d2f36/packages/agros-common/src/collection.ts#L49)

___

### <a id="srcpath" name="srcpath"></a> srcPath

▸ `Protected` **srcPath**(`pathname?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathname?` | `string` |

#### Returns

`string`

#### Defined in

[packages/agros-common/src/collection.ts:57](https://github.com/agrosjs/agros/blob/e4d2f36/packages/agros-common/src/collection.ts#L57)

___

### <a id="updateentities" name="updateentities"></a> updateEntities

▸ `Protected` **updateEntities**(): `void`

#### Returns

`void`

#### Defined in

[packages/agros-common/src/collection.ts:45](https://github.com/agrosjs/agros/blob/e4d2f36/packages/agros-common/src/collection.ts#L45)

___

### <a id="writebinaryfile" name="writebinaryfile"></a> writeBinaryFile

▸ `Private` **writeBinaryFile**(`pathname`, `buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathname` | `string` |
| `buffer` | `Buffer` |

#### Returns

`void`

#### Defined in

[packages/agros-common/src/collection.ts:128](https://github.com/agrosjs/agros/blob/e4d2f36/packages/agros-common/src/collection.ts#L128)

___

### <a id="writefile" name="writefile"></a> writeFile

▸ `Protected` **writeFile**(`pathname`, `content`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathname` | `string` |
| `content` | `string` |
| `options` | [`CollectionWriteFileOptions`](../interfaces/CollectionWriteFileOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/agros-common/src/collection.ts:73](https://github.com/agrosjs/agros/blob/e4d2f36/packages/agros-common/src/collection.ts#L73)

___

### <a id="writetemplatefile" name="writetemplatefile"></a> writeTemplateFile

▸ `Protected` **writeTemplateFile**(`source`, `target`, `props?`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `target` | `string` |
| `props` | `Record`<`string`, `any`\> |
| `options` | [`CollectionWriteFileOptions`](../interfaces/CollectionWriteFileOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/agros-common/src/collection.ts:97](https://github.com/agrosjs/agros/blob/e4d2f36/packages/agros-common/src/collection.ts#L97)
