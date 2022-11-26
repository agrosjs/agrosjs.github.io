[@agros/tools](../index.md) / CollectionDescriptor

# Interface: CollectionDescriptor

## Hierarchy

- [`PathDescriptor`](PathDescriptor.md)

  ↳ **`CollectionDescriptor`**

  ↳↳ [`EntityDescriptor`](EntityDescriptor.md)

## Table of contents

### Properties

- [absolutePath](CollectionDescriptor.md#absolutepath)
- [aliasPath](CollectionDescriptor.md#aliaspath)
- [collectionType](CollectionDescriptor.md#collectiontype)
- [filename](CollectionDescriptor.md#filename)
- [id](CollectionDescriptor.md#id)
- [relativePath](CollectionDescriptor.md#relativepath)

### Methods

- [isBlockDevice](CollectionDescriptor.md#isblockdevice)
- [isCharacterDevice](CollectionDescriptor.md#ischaracterdevice)
- [isDirectory](CollectionDescriptor.md#isdirectory)
- [isFIFO](CollectionDescriptor.md#isfifo)
- [isFile](CollectionDescriptor.md#isfile)
- [isSocket](CollectionDescriptor.md#issocket)
- [isSymbolicLink](CollectionDescriptor.md#issymboliclink)

## Properties

### <a id="absolutepath" name="absolutepath"></a> absolutePath

• **absolutePath**: `string`

#### Inherited from

[PathDescriptor](PathDescriptor.md).[absolutePath](PathDescriptor.md#absolutepath)

#### Defined in

[packages/agros-tools/src/types.ts:201](https://github.com/agrosjs/agros/blob/a6e22e9/packages/agros-tools/src/types.ts#L201)

___

### <a id="aliaspath" name="aliaspath"></a> aliasPath

• **aliasPath**: `string`

#### Inherited from

[PathDescriptor](PathDescriptor.md).[aliasPath](PathDescriptor.md#aliaspath)

#### Defined in

[packages/agros-tools/src/types.ts:202](https://github.com/agrosjs/agros/blob/a6e22e9/packages/agros-tools/src/types.ts#L202)

___

### <a id="collectiontype" name="collectiontype"></a> collectionType

• **collectionType**: [`CollectionType`](../index.md#collectiontype)

#### Defined in

[packages/agros-tools/src/types.ts:207](https://github.com/agrosjs/agros/blob/a6e22e9/packages/agros-tools/src/types.ts#L207)

___

### <a id="filename" name="filename"></a> filename

• **filename**: `string`

#### Inherited from

[PathDescriptor](PathDescriptor.md).[filename](PathDescriptor.md#filename)

#### Defined in

[packages/agros-tools/src/types.ts:203](https://github.com/agrosjs/agros/blob/a6e22e9/packages/agros-tools/src/types.ts#L203)

___

### <a id="id" name="id"></a> id

• **id**: `string`

#### Inherited from

[PathDescriptor](PathDescriptor.md).[id](PathDescriptor.md#id)

#### Defined in

[packages/agros-tools/src/types.ts:199](https://github.com/agrosjs/agros/blob/a6e22e9/packages/agros-tools/src/types.ts#L199)

___

### <a id="relativepath" name="relativepath"></a> relativePath

• **relativePath**: `string`

#### Inherited from

[PathDescriptor](PathDescriptor.md).[relativePath](PathDescriptor.md#relativepath)

#### Defined in

[packages/agros-tools/src/types.ts:200](https://github.com/agrosjs/agros/blob/a6e22e9/packages/agros-tools/src/types.ts#L200)

## Methods

### <a id="isblockdevice" name="isblockdevice"></a> isBlockDevice

▸ **isBlockDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[PathDescriptor](PathDescriptor.md).[isBlockDevice](PathDescriptor.md#isblockdevice)

#### Defined in

common/temp/node_modules/.pnpm/@types+node@15.14.9/node_modules/@types/node/fs.d.ts:63

___

### <a id="ischaracterdevice" name="ischaracterdevice"></a> isCharacterDevice

▸ **isCharacterDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[PathDescriptor](PathDescriptor.md).[isCharacterDevice](PathDescriptor.md#ischaracterdevice)

#### Defined in

common/temp/node_modules/.pnpm/@types+node@15.14.9/node_modules/@types/node/fs.d.ts:64

___

### <a id="isdirectory" name="isdirectory"></a> isDirectory

▸ **isDirectory**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[PathDescriptor](PathDescriptor.md).[isDirectory](PathDescriptor.md#isdirectory)

#### Defined in

common/temp/node_modules/.pnpm/@types+node@15.14.9/node_modules/@types/node/fs.d.ts:62

___

### <a id="isfifo" name="isfifo"></a> isFIFO

▸ **isFIFO**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[PathDescriptor](PathDescriptor.md).[isFIFO](PathDescriptor.md#isfifo)

#### Defined in

common/temp/node_modules/.pnpm/@types+node@15.14.9/node_modules/@types/node/fs.d.ts:66

___

### <a id="isfile" name="isfile"></a> isFile

▸ **isFile**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[PathDescriptor](PathDescriptor.md).[isFile](PathDescriptor.md#isfile)

#### Defined in

common/temp/node_modules/.pnpm/@types+node@15.14.9/node_modules/@types/node/fs.d.ts:61

___

### <a id="issocket" name="issocket"></a> isSocket

▸ **isSocket**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[PathDescriptor](PathDescriptor.md).[isSocket](PathDescriptor.md#issocket)

#### Defined in

common/temp/node_modules/.pnpm/@types+node@15.14.9/node_modules/@types/node/fs.d.ts:67

___

### <a id="issymboliclink" name="issymboliclink"></a> isSymbolicLink

▸ **isSymbolicLink**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[PathDescriptor](PathDescriptor.md).[isSymbolicLink](PathDescriptor.md#issymboliclink)

#### Defined in

common/temp/node_modules/.pnpm/@types+node@15.14.9/node_modules/@types/node/fs.d.ts:65
