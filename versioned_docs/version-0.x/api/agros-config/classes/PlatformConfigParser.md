[@agros/config](../index.md) / PlatformConfigParser

# Class: PlatformConfigParser

## Table of contents

### Constructors

- [constructor](PlatformConfigParser.md#constructor)

### Properties

- [platformIndexFile](PlatformConfigParser.md#platformindexfile)
- [platformName](PlatformConfigParser.md#platformname)
- [platformRootDir](PlatformConfigParser.md#platformrootdir)

### Methods

- [getBundlessPlatform](PlatformConfigParser.md#getbundlessplatform)
- [getPlatform](PlatformConfigParser.md#getplatform)
- [getPlatformRootDir](PlatformConfigParser.md#getplatformrootdir)
- [getPlatformWebpackConfigFactory](PlatformConfigParser.md#getplatformwebpackconfigfactory)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new PlatformConfigParser**(`platformName`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `platformName` | `string` |

#### Defined in

[platform-config-parser.ts:11](https://github.com/agrosjs/agros/blob/524cff1/packages/agros-config/src/platform-config-parser.ts#L11)

## Properties

### <a id="platformindexfile" name="platformindexfile"></a> platformIndexFile

• `Protected` **platformIndexFile**: `string`

#### Defined in

[platform-config-parser.ts:8](https://github.com/agrosjs/agros/blob/524cff1/packages/agros-config/src/platform-config-parser.ts#L8)

___

### <a id="platformname" name="platformname"></a> platformName

• `Protected` `Readonly` **platformName**: `string`

#### Defined in

[platform-config-parser.ts:11](https://github.com/agrosjs/agros/blob/524cff1/packages/agros-config/src/platform-config-parser.ts#L11)

___

### <a id="platformrootdir" name="platformrootdir"></a> platformRootDir

• `Protected` **platformRootDir**: `string`

#### Defined in

[platform-config-parser.ts:9](https://github.com/agrosjs/agros/blob/524cff1/packages/agros-config/src/platform-config-parser.ts#L9)

## Methods

### <a id="getbundlessplatform" name="getbundlessplatform"></a> getBundlessPlatform

▸ **getBundlessPlatform**(): `BundlessPlatform`

#### Returns

`BundlessPlatform`

#### Defined in

[platform-config-parser.ts:56](https://github.com/agrosjs/agros/blob/524cff1/packages/agros-config/src/platform-config-parser.ts#L56)

___

### <a id="getplatform" name="getplatform"></a> getPlatform

▸ **getPlatform**<`T`\>(): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`T`

#### Defined in

[platform-config-parser.ts:48](https://github.com/agrosjs/agros/blob/524cff1/packages/agros-config/src/platform-config-parser.ts#L48)

___

### <a id="getplatformrootdir" name="getplatformrootdir"></a> getPlatformRootDir

▸ **getPlatformRootDir**(): `string`

#### Returns

`string`

#### Defined in

[platform-config-parser.ts:36](https://github.com/agrosjs/agros/blob/524cff1/packages/agros-config/src/platform-config-parser.ts#L36)

___

### <a id="getplatformwebpackconfigfactory" name="getplatformwebpackconfigfactory"></a> getPlatformWebpackConfigFactory

▸ **getPlatformWebpackConfigFactory**(): `Function`

#### Returns

`Function`

#### Defined in

[platform-config-parser.ts:40](https://github.com/agrosjs/agros/blob/524cff1/packages/agros-config/src/platform-config-parser.ts#L40)
