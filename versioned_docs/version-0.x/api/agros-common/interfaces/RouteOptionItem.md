[@agros/common](../index.md) / RouteOptionItem

# Interface: RouteOptionItem<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- `Omit`<[`RouteProps`](RouteProps.md), ``"element"`` \| ``"children"``\>

  ↳ **`RouteOptionItem`**

## Table of contents

### Properties

- [caseSensitive](RouteOptionItem.md#casesensitive)
- [children](RouteOptionItem.md#children)
- [index](RouteOptionItem.md#index)
- [path](RouteOptionItem.md#path)
- [useComponentClass](RouteOptionItem.md#usecomponentclass)
- [useModuleClass](RouteOptionItem.md#usemoduleclass)

## Properties

### <a id="casesensitive" name="casesensitive"></a> caseSensitive

• `Optional` **caseSensitive**: `boolean`

#### Inherited from

Omit.caseSensitive

#### Defined in

[packages/agros-common/src/types.ts:55](https://github.com/agrosjs/agros/blob/462a64e/packages/agros-common/src/types.ts#L55)

___

### <a id="children" name="children"></a> children

• `Optional` **children**: [`RouteOptionItem`](RouteOptionItem.md)<`T`\>[]

#### Defined in

[packages/agros-common/src/types.ts:65](https://github.com/agrosjs/agros/blob/462a64e/packages/agros-common/src/types.ts#L65)

___

### <a id="index" name="index"></a> index

• `Optional` **index**: `boolean`

#### Inherited from

Omit.index

#### Defined in

[packages/agros-common/src/types.ts:58](https://github.com/agrosjs/agros/blob/462a64e/packages/agros-common/src/types.ts#L58)

___

### <a id="path" name="path"></a> path

• `Optional` **path**: `string`

#### Inherited from

Omit.path

#### Defined in

[packages/agros-common/src/types.ts:59](https://github.com/agrosjs/agros/blob/462a64e/packages/agros-common/src/types.ts#L59)

___

### <a id="usecomponentclass" name="usecomponentclass"></a> useComponentClass

• `Optional` **useComponentClass**: [`Type`](../index.md#type)<`any`\>

#### Defined in

[packages/agros-common/src/types.ts:64](https://github.com/agrosjs/agros/blob/462a64e/packages/agros-common/src/types.ts#L64)

___

### <a id="usemoduleclass" name="usemoduleclass"></a> useModuleClass

• `Optional` **useModuleClass**: [`AsyncModuleClass`](../index.md#asyncmoduleclass)<`any`\>

#### Defined in

[packages/agros-common/src/types.ts:63](https://github.com/agrosjs/agros/blob/462a64e/packages/agros-common/src/types.ts#L63)
