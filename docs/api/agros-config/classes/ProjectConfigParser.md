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

[project-config-parser.ts:48](https://github.com/agrosjs/agros/blob/01b3301/packages/agros-config/src/project-config-parser.ts#L48)

## Properties

### <a id="defaultprojectconfig" name="defaultprojectconfig"></a> defaultProjectConfig

• `Private` **defaultProjectConfig**: [`ProjectConfig`](../interfaces/ProjectConfig.md)

#### Defined in

[project-config-parser.ts:26](https://github.com/agrosjs/agros/blob/01b3301/packages/agros-config/src/project-config-parser.ts#L26)

___

### <a id="projectconfig" name="projectconfig"></a> projectConfig

• `Private` **projectConfig**: [`ProjectConfig`](../interfaces/ProjectConfig.md)

#### Defined in

[project-config-parser.ts:46](https://github.com/agrosjs/agros/blob/01b3301/packages/agros-config/src/project-config-parser.ts#L46)

## Methods

### <a id="getalias" name="getalias"></a> getAlias

▸ **getAlias**(): `Record`<`string`, `string`\>

#### Returns

`Record`<`string`, `string`\>

#### Defined in

[project-config-parser.ts:102](https://github.com/agrosjs/agros/blob/01b3301/packages/agros-config/src/project-config-parser.ts#L102)

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

[project-config-parser.ts:88](https://github.com/agrosjs/agros/blob/01b3301/packages/agros-config/src/project-config-parser.ts#L88)

___

### <a id="getentry" name="getentry"></a> getEntry

▸ **getEntry**(): `string`

#### Returns

`string`

#### Defined in

[project-config-parser.ts:96](https://github.com/agrosjs/agros/blob/01b3301/packages/agros-config/src/project-config-parser.ts#L96)
