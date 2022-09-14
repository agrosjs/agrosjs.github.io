@agros/utils

# @agros/utils

## Table of contents

### Interfaces

- [BundlessPlatform](interfaces/BundlessPlatform.md)
- [CodeLocation](interfaces/CodeLocation.md)
- [ComponentScript](interfaces/ComponentScript.md)
- [EnsureImportOptions](interfaces/EnsureImportOptions.md)
- [EnsureImportResult](interfaces/EnsureImportResult.md)
- [RequireFromStringOptions](interfaces/RequireFromStringOptions.md)

### Type Aliases

- [EnsureImportType](index.md#ensureimporttype)

### Functions

- [ensureImport](index.md#ensureimport)
- [parseAST](index.md#parseast)
- [permanentlyReadJson](index.md#permanentlyreadjson)
- [requireFromString](index.md#requirefromstring)
- [requireModule](index.md#requiremodule)

## Type Aliases

### <a id="ensureimporttype" name="ensureimporttype"></a> EnsureImportType

Ƭ **EnsureImportType**: ``"named"`` \| ``"default"`` \| ``"namespace"``

#### Defined in

[ensure-import.ts:8](https://github.com/agrosjs/agros/blob/f31aa82/packages/agros-utils/src/ensure-import.ts#L8)

## Functions

### <a id="ensureimport" name="ensureimport"></a> ensureImport

▸ **ensureImport**(`options`): [`EnsureImportResult`](interfaces/EnsureImportResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`EnsureImportOptions`](interfaces/EnsureImportOptions.md) |

#### Returns

[`EnsureImportResult`](interfaces/EnsureImportResult.md)

#### Defined in

[ensure-import.ts:22](https://github.com/agrosjs/agros/blob/f31aa82/packages/agros-utils/src/ensure-import.ts#L22)

___

### <a id="parseast" name="parseast"></a> parseAST

▸ **parseAST**(`source`): `ParseResult`<`File`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |

#### Returns

`ParseResult`<`File`\>

#### Defined in

[parse-ast.ts:7](https://github.com/agrosjs/agros/blob/f31aa82/packages/agros-utils/src/parse-ast.ts#L7)

___

### <a id="permanentlyreadjson" name="permanentlyreadjson"></a> permanentlyReadJson

▸ **permanentlyReadJson**(`pathname?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathname?` | `string` |

#### Returns

`any`

#### Defined in

[permanently-read-json.ts:4](https://github.com/agrosjs/agros/blob/f31aa82/packages/agros-utils/src/permanently-read-json.ts#L4)

___

### <a id="requirefromstring" name="requirefromstring"></a> requireFromString

▸ **requireFromString**(`code`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `options?` | [`RequireFromStringOptions`](interfaces/RequireFromStringOptions.md) |

#### Returns

`any`

#### Defined in

[require-from-string.ts:17](https://github.com/agrosjs/agros/blob/f31aa82/packages/agros-utils/src/require-from-string.ts#L17)

▸ **requireFromString**(`code`, `filename?`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `filename?` | `string` |
| `options?` | [`RequireFromStringOptions`](interfaces/RequireFromStringOptions.md) |

#### Returns

`any`

#### Defined in

[require-from-string.ts:18](https://github.com/agrosjs/agros/blob/f31aa82/packages/agros-utils/src/require-from-string.ts#L18)

___

### <a id="requiremodule" name="requiremodule"></a> requireModule

▸ **requireModule**(`filename`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |

#### Returns

`any`

#### Defined in

[require-module.ts:5](https://github.com/agrosjs/agros/blob/f31aa82/packages/agros-utils/src/require-module.ts#L5)
