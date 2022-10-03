[@agros/tools](../index.md) / EntityDescriptor

# Interface: EntityDescriptor

## Hierarchy

- [`CollectionDescriptor`](CollectionDescriptor.md)

  ↳ **`EntityDescriptor`**

  ↳↳ [`RootPointDescriptor`](RootPointDescriptor.md)

## Table of contents

### Properties

- [absolutePath](EntityDescriptor.md#absolutepath)
- [aliasPath](EntityDescriptor.md#aliaspath)
- [collectionType](EntityDescriptor.md#collectiontype)
- [entityName](EntityDescriptor.md#entityname)
- [filename](EntityDescriptor.md#filename)
- [id](EntityDescriptor.md#id)
- [moduleName](EntityDescriptor.md#modulename)
- [modules](EntityDescriptor.md#modules)
- [relativePath](EntityDescriptor.md#relativepath)

### Methods

- [isBlockDevice](EntityDescriptor.md#isblockdevice)
- [isCharacterDevice](EntityDescriptor.md#ischaracterdevice)
- [isDirectory](EntityDescriptor.md#isdirectory)
- [isFIFO](EntityDescriptor.md#isfifo)
- [isFile](EntityDescriptor.md#isfile)
- [isSocket](EntityDescriptor.md#issocket)
- [isSymbolicLink](EntityDescriptor.md#issymboliclink)

## Properties

### <a id="absolutepath" name="absolutepath"></a> absolutePath

• **absolutePath**: `string`

#### Inherited from

[CollectionDescriptor](CollectionDescriptor.md).[absolutePath](CollectionDescriptor.md#absolutepath)

#### Defined in

[packages/agros-tools/src/types.ts:159](https://github.com/agrosjs/agros/blob/b947880/packages/agros-tools/src/types.ts#L159)

___

### <a id="aliaspath" name="aliaspath"></a> aliasPath

• **aliasPath**: `string`

#### Inherited from

[CollectionDescriptor](CollectionDescriptor.md).[aliasPath](CollectionDescriptor.md#aliaspath)

#### Defined in

[packages/agros-tools/src/types.ts:160](https://github.com/agrosjs/agros/blob/b947880/packages/agros-tools/src/types.ts#L160)

___

### <a id="collectiontype" name="collectiontype"></a> collectionType

• **collectionType**: [`CollectionType`](../index.md#collectiontype)

#### Inherited from

[CollectionDescriptor](CollectionDescriptor.md).[collectionType](CollectionDescriptor.md#collectiontype)

#### Defined in

[packages/agros-tools/src/types.ts:165](https://github.com/agrosjs/agros/blob/b947880/packages/agros-tools/src/types.ts#L165)

___

### <a id="entityname" name="entityname"></a> entityName

• **entityName**: `string`

#### Defined in

[packages/agros-tools/src/types.ts:169](https://github.com/agrosjs/agros/blob/b947880/packages/agros-tools/src/types.ts#L169)

___

### <a id="filename" name="filename"></a> filename

• **filename**: `string`

#### Inherited from

[CollectionDescriptor](CollectionDescriptor.md).[filename](CollectionDescriptor.md#filename)

#### Defined in

[packages/agros-tools/src/types.ts:161](https://github.com/agrosjs/agros/blob/b947880/packages/agros-tools/src/types.ts#L161)

___

### <a id="id" name="id"></a> id

• **id**: `string`

#### Inherited from

[CollectionDescriptor](CollectionDescriptor.md).[id](CollectionDescriptor.md#id)

#### Defined in

[packages/agros-tools/src/types.ts:157](https://github.com/agrosjs/agros/blob/b947880/packages/agros-tools/src/types.ts#L157)

___

### <a id="modulename" name="modulename"></a> moduleName

• **moduleName**: `string`

#### Defined in

[packages/agros-tools/src/types.ts:170](https://github.com/agrosjs/agros/blob/b947880/packages/agros-tools/src/types.ts#L170)

___

### <a id="modules" name="modules"></a> modules

• **modules**: [`EntityDescriptor`](EntityDescriptor.md)[]

#### Defined in

[packages/agros-tools/src/types.ts:171](https://github.com/agrosjs/agros/blob/b947880/packages/agros-tools/src/types.ts#L171)

___

### <a id="relativepath" name="relativepath"></a> relativePath

• **relativePath**: `string`

#### Inherited from

[CollectionDescriptor](CollectionDescriptor.md).[relativePath](CollectionDescriptor.md#relativepath)

#### Defined in

[packages/agros-tools/src/types.ts:158](https://github.com/agrosjs/agros/blob/b947880/packages/agros-tools/src/types.ts#L158)

## Methods

### <a id="isblockdevice" name="isblockdevice"></a> isBlockDevice

▸ **isBlockDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CollectionDescriptor](CollectionDescriptor.md).[isBlockDevice](CollectionDescriptor.md#isblockdevice)

#### Defined in

common/temp/node_modules/.pnpm/@types+node@15.14.9/node_modules/@types/node/fs.d.ts:63

___

### <a id="ischaracterdevice" name="ischaracterdevice"></a> isCharacterDevice

▸ **isCharacterDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CollectionDescriptor](CollectionDescriptor.md).[isCharacterDevice](CollectionDescriptor.md#ischaracterdevice)

#### Defined in

common/temp/node_modules/.pnpm/@types+node@15.14.9/node_modules/@types/node/fs.d.ts:64

___

### <a id="isdirectory" name="isdirectory"></a> isDirectory

▸ **isDirectory**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CollectionDescriptor](CollectionDescriptor.md).[isDirectory](CollectionDescriptor.md#isdirectory)

#### Defined in

common/temp/node_modules/.pnpm/@types+node@15.14.9/node_modules/@types/node/fs.d.ts:62

___

### <a id="isfifo" name="isfifo"></a> isFIFO

▸ **isFIFO**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CollectionDescriptor](CollectionDescriptor.md).[isFIFO](CollectionDescriptor.md#isfifo)

#### Defined in

common/temp/node_modules/.pnpm/@types+node@15.14.9/node_modules/@types/node/fs.d.ts:66

___

### <a id="isfile" name="isfile"></a> isFile

▸ **isFile**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CollectionDescriptor](CollectionDescriptor.md).[isFile](CollectionDescriptor.md#isfile)

#### Defined in

common/temp/node_modules/.pnpm/@types+node@15.14.9/node_modules/@types/node/fs.d.ts:61

___

### <a id="issocket" name="issocket"></a> isSocket

▸ **isSocket**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CollectionDescriptor](CollectionDescriptor.md).[isSocket](CollectionDescriptor.md#issocket)

#### Defined in

common/temp/node_modules/.pnpm/@types+node@15.14.9/node_modules/@types/node/fs.d.ts:67

___

### <a id="issymboliclink" name="issymboliclink"></a> isSymbolicLink

▸ **isSymbolicLink**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CollectionDescriptor](CollectionDescriptor.md).[isSymbolicLink](CollectionDescriptor.md#issymboliclink)

#### Defined in

common/temp/node_modules/.pnpm/@types+node@15.14.9/node_modules/@types/node/fs.d.ts:65
