[@agros/config](../index.md) / ProjectConfig

# Interface: ProjectConfig

## Table of contents

### Properties

- [alias](ProjectConfig.md#alias)
- [baseDir](ProjectConfig.md#basedir)
- [collection](ProjectConfig.md#collection)
- [configWebpack](ProjectConfig.md#configwebpack)
- [configWebpackDevServer](ProjectConfig.md#configwebpackdevserver)
- [entry](ProjectConfig.md#entry)
- [modulesDir](ProjectConfig.md#modulesdir)
- [npmClient](ProjectConfig.md#npmclient)
- [platform](ProjectConfig.md#platform)
- [useCollection](ProjectConfig.md#usecollection)

## Properties

### <a id="alias" name="alias"></a> alias

• `Optional` **alias**: [`AliasMap`](../index.md#aliasmap)

#### Defined in

[project-config-parser.ts:16](https://github.com/agrosjs/agros/blob/462a64e/packages/agros-config/src/project-config-parser.ts#L16)

___

### <a id="basedir" name="basedir"></a> baseDir

• `Optional` **baseDir**: `string`

#### Defined in

[project-config-parser.ts:18](https://github.com/agrosjs/agros/blob/462a64e/packages/agros-config/src/project-config-parser.ts#L18)

___

### <a id="collection" name="collection"></a> collection

• `Optional` **collection**: [`CollectionMap`](../index.md#collectionmap)

#### Defined in

[project-config-parser.ts:19](https://github.com/agrosjs/agros/blob/462a64e/packages/agros-config/src/project-config-parser.ts#L19)

___

### <a id="configwebpack" name="configwebpack"></a> configWebpack

• `Optional` **configWebpack**: (`config`: `Configuration`) => `Configuration`

#### Type declaration

▸ (`config`): `Configuration`

##### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Configuration` |

##### Returns

`Configuration`

#### Defined in

[project-config-parser.ts:21](https://github.com/agrosjs/agros/blob/462a64e/packages/agros-config/src/project-config-parser.ts#L21)

___

### <a id="configwebpackdevserver" name="configwebpackdevserver"></a> configWebpackDevServer

• `Optional` **configWebpackDevServer**: (`devServerConfig`: `Record`<`string`, `any`\>) => `Record`<`string`, `any`\>

#### Type declaration

▸ (`devServerConfig`): `Record`<`string`, `any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `devServerConfig` | `Record`<`string`, `any`\> |

##### Returns

`Record`<`string`, `any`\>

#### Defined in

[project-config-parser.ts:22](https://github.com/agrosjs/agros/blob/462a64e/packages/agros-config/src/project-config-parser.ts#L22)

___

### <a id="entry" name="entry"></a> entry

• `Optional` **entry**: `string`

#### Defined in

[project-config-parser.ts:17](https://github.com/agrosjs/agros/blob/462a64e/packages/agros-config/src/project-config-parser.ts#L17)

___

### <a id="modulesdir" name="modulesdir"></a> modulesDir

• `Optional` **modulesDir**: `string`

#### Defined in

[project-config-parser.ts:20](https://github.com/agrosjs/agros/blob/462a64e/packages/agros-config/src/project-config-parser.ts#L20)

___

### <a id="npmclient" name="npmclient"></a> npmClient

• `Optional` **npmClient**: `string`

#### Defined in

[project-config-parser.ts:15](https://github.com/agrosjs/agros/blob/462a64e/packages/agros-config/src/project-config-parser.ts#L15)

___

### <a id="platform" name="platform"></a> platform

• `Optional` **platform**: `string`

#### Defined in

[project-config-parser.ts:13](https://github.com/agrosjs/agros/blob/462a64e/packages/agros-config/src/project-config-parser.ts#L13)

___

### <a id="usecollection" name="usecollection"></a> useCollection

• `Optional` **useCollection**: `string`

#### Defined in

[project-config-parser.ts:14](https://github.com/agrosjs/agros/blob/462a64e/packages/agros-config/src/project-config-parser.ts#L14)
