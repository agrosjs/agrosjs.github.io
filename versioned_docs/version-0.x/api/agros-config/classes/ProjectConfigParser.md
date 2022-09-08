[@agros/config](../index.md) / ProjectConfigParser

# Class: ProjectConfigParser

## Table of contents

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

[project-config-parser.ts:46](https://github.com/agrosjs/agros/blob/785aac3/packages/agros-config/src/project-config-parser.ts#L46)

## Properties

### <a id="defaultprojectconfig" name="defaultprojectconfig"></a> defaultProjectConfig

• `Private` **defaultProjectConfig**: [`ProjectConfig`](../interfaces/ProjectConfig.md)

#### Defined in

[project-config-parser.ts:25](https://github.com/agrosjs/agros/blob/785aac3/packages/agros-config/src/project-config-parser.ts#L25)

___

### <a id="projectconfig" name="projectconfig"></a> projectConfig

• `Private` **projectConfig**: [`ProjectConfig`](../interfaces/ProjectConfig.md)

#### Defined in

[project-config-parser.ts:44](https://github.com/agrosjs/agros/blob/785aac3/packages/agros-config/src/project-config-parser.ts#L44)

## Methods

### <a id="getalias" name="getalias"></a> getAlias

▸ **getAlias**(): `Record`<`string`, `string`\>

#### Returns

`Record`<`string`, `string`\>

#### Defined in

[project-config-parser.ts:98](https://github.com/agrosjs/agros/blob/785aac3/packages/agros-config/src/project-config-parser.ts#L98)

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

[project-config-parser.ts:84](https://github.com/agrosjs/agros/blob/785aac3/packages/agros-config/src/project-config-parser.ts#L84)

___

### <a id="getentry" name="getentry"></a> getEntry

▸ **getEntry**(): `string`

#### Returns

`string`

#### Defined in

[project-config-parser.ts:92](https://github.com/agrosjs/agros/blob/785aac3/packages/agros-config/src/project-config-parser.ts#L92)
