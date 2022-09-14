[@agros/logger](../index.md) / Logger

# Class: Logger

## Table of contents

### Constructors

- [constructor](Logger.md#constructor)

### Methods

- [error](Logger.md#error)
- [info](Logger.md#info)
- [loadingLog](Logger.md#loadinglog)
- [spinLog](Logger.md#spinlog)
- [success](Logger.md#success)
- [updateLog](Logger.md#updatelog)
- [warning](Logger.md#warning)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new Logger**()

## Methods

### <a id="error" name="error"></a> error

▸ **error**(`message`, `error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `error?` | `Error` |

#### Returns

`void`

#### Defined in

[index.ts:22](https://github.com/agrosjs/agros/blob/f7aa4e9/packages/agros-logger/src/index.ts#L22)

___

### <a id="info" name="info"></a> info

▸ **info**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[index.ts:10](https://github.com/agrosjs/agros/blob/f7aa4e9/packages/agros-logger/src/index.ts#L10)

___

### <a id="loadinglog" name="loadinglog"></a> loadingLog

▸ **loadingLog**(`message`): (`status`: ``"success"`` \| ``"warning"`` \| ``"error"``, `endText`: `string`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`fn`

▸ (`status`, `endText?`): `void`

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `status` | ``"success"`` \| ``"warning"`` \| ``"error"`` | `undefined` |
| `endText` | `string` | `message` |

##### Returns

`void`

#### Defined in

[index.ts:30](https://github.com/agrosjs/agros/blob/f7aa4e9/packages/agros-logger/src/index.ts#L30)

___

### <a id="spinlog" name="spinlog"></a> spinLog

▸ `Private` **spinLog**(`spinner`, `message`): `Timeout`

#### Parameters

| Name | Type |
| :------ | :------ |
| `spinner` | `Spinner` |
| `message` | `any` |

#### Returns

`Timeout`

#### Defined in

[index.ts:68](https://github.com/agrosjs/agros/blob/f7aa4e9/packages/agros-logger/src/index.ts#L68)

___

### <a id="success" name="success"></a> success

▸ **success**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[index.ts:18](https://github.com/agrosjs/agros/blob/f7aa4e9/packages/agros-logger/src/index.ts#L18)

___

### <a id="updatelog" name="updatelog"></a> updateLog

▸ `Private` **updateLog**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[index.ts:58](https://github.com/agrosjs/agros/blob/f7aa4e9/packages/agros-logger/src/index.ts#L58)

___

### <a id="warning" name="warning"></a> warning

▸ **warning**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[index.ts:14](https://github.com/agrosjs/agros/blob/f7aa4e9/packages/agros-logger/src/index.ts#L14)
