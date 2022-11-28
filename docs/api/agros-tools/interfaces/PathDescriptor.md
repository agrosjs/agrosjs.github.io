[@agros/tools](../index.md) / PathDescriptor

# Interface: PathDescriptor

## Hierarchy

- `Omit`<`Dirent`, ``"name"``\>

  ↳ **`PathDescriptor`**

  ↳↳ [`CollectionDescriptor`](CollectionDescriptor.md)

## Table of contents

### Properties

- [absolutePath](PathDescriptor.md#absolutepath)
- [aliasPath](PathDescriptor.md#aliaspath)
- [filename](PathDescriptor.md#filename)
- [id](PathDescriptor.md#id)
- [relativePath](PathDescriptor.md#relativepath)

### Methods

- [isBlockDevice](PathDescriptor.md#isblockdevice)
- [isCharacterDevice](PathDescriptor.md#ischaracterdevice)
- [isDirectory](PathDescriptor.md#isdirectory)
- [isFIFO](PathDescriptor.md#isfifo)
- [isFile](PathDescriptor.md#isfile)
- [isSocket](PathDescriptor.md#issocket)
- [isSymbolicLink](PathDescriptor.md#issymboliclink)

## Properties

### <a id="absolutepath" name="absolutepath"></a> absolutePath

• **absolutePath**: `string`

#### Defined in

[packages/agros-tools/src/types.ts:202](https://github.com/agrosjs/agros/blob/2842a8d/packages/agros-tools/src/types.ts#L202)

___

### <a id="aliaspath" name="aliaspath"></a> aliasPath

• **aliasPath**: `string`

#### Defined in

[packages/agros-tools/src/types.ts:203](https://github.com/agrosjs/agros/blob/2842a8d/packages/agros-tools/src/types.ts#L203)

___

### <a id="filename" name="filename"></a> filename

• **filename**: `string`

#### Defined in

[packages/agros-tools/src/types.ts:204](https://github.com/agrosjs/agros/blob/2842a8d/packages/agros-tools/src/types.ts#L204)

___

### <a id="id" name="id"></a> id

• **id**: `string`

#### Defined in

[packages/agros-tools/src/types.ts:200](https://github.com/agrosjs/agros/blob/2842a8d/packages/agros-tools/src/types.ts#L200)

___

### <a id="relativepath" name="relativepath"></a> relativePath

• **relativePath**: `string`

#### Defined in

[packages/agros-tools/src/types.ts:201](https://github.com/agrosjs/agros/blob/2842a8d/packages/agros-tools/src/types.ts#L201)

## Methods

### <a id="isblockdevice" name="isblockdevice"></a> isBlockDevice

▸ **isBlockDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Omit.isBlockDevice

#### Defined in

common/temp/node_modules/.pnpm/@types+node@15.14.9/node_modules/@types/node/fs.d.ts:63

___

### <a id="ischaracterdevice" name="ischaracterdevice"></a> isCharacterDevice

▸ **isCharacterDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Omit.isCharacterDevice

#### Defined in

common/temp/node_modules/.pnpm/@types+node@15.14.9/node_modules/@types/node/fs.d.ts:64

___

### <a id="isdirectory" name="isdirectory"></a> isDirectory

▸ **isDirectory**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Omit.isDirectory

#### Defined in

common/temp/node_modules/.pnpm/@types+node@15.14.9/node_modules/@types/node/fs.d.ts:62

___

### <a id="isfifo" name="isfifo"></a> isFIFO

▸ **isFIFO**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Omit.isFIFO

#### Defined in

common/temp/node_modules/.pnpm/@types+node@15.14.9/node_modules/@types/node/fs.d.ts:66

___

### <a id="isfile" name="isfile"></a> isFile

▸ **isFile**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Omit.isFile

#### Defined in

common/temp/node_modules/.pnpm/@types+node@15.14.9/node_modules/@types/node/fs.d.ts:61

___

### <a id="issocket" name="issocket"></a> isSocket

▸ **isSocket**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Omit.isSocket

#### Defined in

common/temp/node_modules/.pnpm/@types+node@15.14.9/node_modules/@types/node/fs.d.ts:67

___

### <a id="issymboliclink" name="issymboliclink"></a> isSymbolicLink

▸ **isSymbolicLink**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Omit.isSymbolicLink

#### Defined in

common/temp/node_modules/.pnpm/@types+node@15.14.9/node_modules/@types/node/fs.d.ts:65
