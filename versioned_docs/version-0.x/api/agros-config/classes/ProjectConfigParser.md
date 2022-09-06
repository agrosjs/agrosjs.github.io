[@agros/config](../index.md) / ProjectConfigParser

# Class: ProjectConfigParser

## TOC

### Constructors

- [constructor](ProjectConfigParser.md#constructor)

### Properties

- [defaultProjectConfig](ProjectConfigParser.md#defaultprojectconfig)
- [projectConfig](ProjectConfigParser.md#projectconfig)

### Methods

- [getAlias](ProjectConfigParser.md#getalias)
- [getConfig](ProjectConfigParser.md#getconfig)
- [getEntry](ProjectConfigParser.md#getentry)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new ProjectConfigParser**()

#### Defined in

[project-config-parser.ts:45](https://github.com/agrosjs/agros/blob/31bad22/packages/agros-config/src/project-config-parser.ts#L45)

## Properties

### <a id="defaultprojectconfig" name="defaultprojectconfig"></a> defaultProjectConfig

• `Private` **defaultProjectConfig**: [`ProjectConfig`](../interfaces/ProjectConfig.md)

#### Defined in

[project-config-parser.ts:24](https://github.com/agrosjs/agros/blob/31bad22/packages/agros-config/src/project-config-parser.ts#L24)

___

### <a id="projectconfig" name="projectconfig"></a> projectConfig

• `Private` **projectConfig**: [`ProjectConfig`](../interfaces/ProjectConfig.md)

#### Defined in

[project-config-parser.ts:43](https://github.com/agrosjs/agros/blob/31bad22/packages/agros-config/src/project-config-parser.ts#L43)

## Methods

### <a id="getalias" name="getalias"></a> getAlias

▸ **getAlias**(): `Record`<`string`, `string`\>

#### Returns

`Record`<`string`, `string`\>

#### Defined in

[project-config-parser.ts:99](https://github.com/agrosjs/agros/blob/31bad22/packages/agros-config/src/project-config-parser.ts#L99)

___

### <a id="getconfig" name="getconfig"></a> getConfig

▸ **getConfig**<`T`\>(`pathname?`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathname?` | `string` |

#### Returns

`T`

#### Defined in

[project-config-parser.ts:85](https://github.com/agrosjs/agros/blob/31bad22/packages/agros-config/src/project-config-parser.ts#L85)

___

### <a id="getentry" name="getentry"></a> getEntry

▸ **getEntry**(): `string`

#### Returns

`string`

#### Defined in

[project-config-parser.ts:93](https://github.com/agrosjs/agros/blob/31bad22/packages/agros-config/src/project-config-parser.ts#L93)
