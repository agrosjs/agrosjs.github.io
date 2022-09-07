[@agros/config](../index.md) / CLIConfigParser

# Class: CLIConfigParser

## Table of contents

### Constructors

- [constructor](CLIConfigParser.md#constructor)

### Properties

- [cliConfig](CLIConfigParser.md#cliconfig)
- [configFilePath](CLIConfigParser.md#configfilepath)
- [defaultCLIConfig](CLIConfigParser.md#defaultcliconfig)

### Methods

- [getConfig](CLIConfigParser.md#getconfig)
- [reloadUserConfig](CLIConfigParser.md#reloaduserconfig)
- [setConfig](CLIConfigParser.md#setconfig)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new CLIConfigParser**()

#### Defined in

[cli-config-parser.ts:17](https://github.com/agrosjs/agros/blob/64c5bfe/packages/agros-config/src/cli-config-parser.ts#L17)

## Properties

### <a id="cliconfig" name="cliconfig"></a> cliConfig

• `Private` **cliConfig**: [`CLIConfig`](../interfaces/CLIConfig.md)

#### Defined in

[cli-config-parser.ts:15](https://github.com/agrosjs/agros/blob/64c5bfe/packages/agros-config/src/cli-config-parser.ts#L15)

___

### <a id="configfilepath" name="configfilepath"></a> configFilePath

• `Private` `Readonly` **configFilePath**: `string`

#### Defined in

[cli-config-parser.ts:11](https://github.com/agrosjs/agros/blob/64c5bfe/packages/agros-config/src/cli-config-parser.ts#L11)

___

### <a id="defaultcliconfig" name="defaultcliconfig"></a> defaultCLIConfig

• `Private` **defaultCLIConfig**: [`CLIConfig`](../interfaces/CLIConfig.md)

#### Defined in

[cli-config-parser.ts:12](https://github.com/agrosjs/agros/blob/64c5bfe/packages/agros-config/src/cli-config-parser.ts#L12)

## Methods

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

[cli-config-parser.ts:42](https://github.com/agrosjs/agros/blob/64c5bfe/packages/agros-config/src/cli-config-parser.ts#L42)

___

### <a id="reloaduserconfig" name="reloaduserconfig"></a> reloadUserConfig

▸ `Private` **reloadUserConfig**(): `void`

#### Returns

`void`

#### Defined in

[cli-config-parser.ts:50](https://github.com/agrosjs/agros/blob/64c5bfe/packages/agros-config/src/cli-config-parser.ts#L50)

___

### <a id="setconfig" name="setconfig"></a> setConfig

▸ **setConfig**(`pathname`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathname` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[cli-config-parser.ts:21](https://github.com/agrosjs/agros/blob/64c5bfe/packages/agros-config/src/cli-config-parser.ts#L21)
