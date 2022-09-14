[@agros/config](../index.md) / PlatformConfigParser

# Class: PlatformConfigParser

## Table of contents

### Constructors

- [constructor](PlatformConfigParser.md#constructor)

### Properties

- [platformConfig](PlatformConfigParser.md#platformconfig)
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

[platform-config-parser.ts:21](https://github.com/agrosjs/agros/blob/e4d2f36/packages/agros-config/src/platform-config-parser.ts#L21)

## Properties

### <a id="platformconfig" name="platformconfig"></a> platformConfig

• `Protected` **platformConfig**: `Required`<[`PlatformConfig`](../interfaces/PlatformConfig.md)\>

#### Defined in

[platform-config-parser.ts:16](https://github.com/agrosjs/agros/blob/e4d2f36/packages/agros-config/src/platform-config-parser.ts#L16)

___

### <a id="platformindexfile" name="platformindexfile"></a> platformIndexFile

• `Protected` **platformIndexFile**: `string`

#### Defined in

[platform-config-parser.ts:14](https://github.com/agrosjs/agros/blob/e4d2f36/packages/agros-config/src/platform-config-parser.ts#L14)

___

### <a id="platformname" name="platformname"></a> platformName

• `Protected` `Readonly` **platformName**: `string`

#### Defined in

[platform-config-parser.ts:21](https://github.com/agrosjs/agros/blob/e4d2f36/packages/agros-config/src/platform-config-parser.ts#L21)

___

### <a id="platformrootdir" name="platformrootdir"></a> platformRootDir

• `Protected` **platformRootDir**: `string`

#### Defined in

[platform-config-parser.ts:15](https://github.com/agrosjs/agros/blob/e4d2f36/packages/agros-config/src/platform-config-parser.ts#L15)

## Methods

### <a id="getbundlessplatform" name="getbundlessplatform"></a> getBundlessPlatform

▸ **getBundlessPlatform**(): `BundlessPlatform`

#### Returns

`BundlessPlatform`

#### Defined in

[platform-config-parser.ts:65](https://github.com/agrosjs/agros/blob/e4d2f36/packages/agros-config/src/platform-config-parser.ts#L65)

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

[platform-config-parser.ts:57](https://github.com/agrosjs/agros/blob/e4d2f36/packages/agros-config/src/platform-config-parser.ts#L57)

___

### <a id="getplatformrootdir" name="getplatformrootdir"></a> getPlatformRootDir

▸ **getPlatformRootDir**(): `string`

#### Returns

`string`

#### Defined in

[platform-config-parser.ts:49](https://github.com/agrosjs/agros/blob/e4d2f36/packages/agros-config/src/platform-config-parser.ts#L49)

___

### <a id="getplatformwebpackconfigfactory" name="getplatformwebpackconfigfactory"></a> getPlatformWebpackConfigFactory

▸ **getPlatformWebpackConfigFactory**(): `Function`

#### Returns

`Function`

#### Defined in

[platform-config-parser.ts:53](https://github.com/agrosjs/agros/blob/e4d2f36/packages/agros-config/src/platform-config-parser.ts#L53)
