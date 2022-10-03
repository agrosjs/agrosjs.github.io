[@agros/tools](../index.md) / RouteOptionItem

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

[packages/agros-tools/src/types.ts:52](https://github.com/agrosjs/agros/blob/e06f80b/packages/agros-tools/src/types.ts#L52)

___

### <a id="children" name="children"></a> children

• `Optional` **children**: [`RouteOptionItem`](RouteOptionItem.md)<`T`\>[]

#### Defined in

[packages/agros-tools/src/types.ts:62](https://github.com/agrosjs/agros/blob/e06f80b/packages/agros-tools/src/types.ts#L62)

___

### <a id="index" name="index"></a> index

• `Optional` **index**: `boolean`

#### Inherited from

Omit.index

#### Defined in

[packages/agros-tools/src/types.ts:55](https://github.com/agrosjs/agros/blob/e06f80b/packages/agros-tools/src/types.ts#L55)

___

### <a id="path" name="path"></a> path

• `Optional` **path**: `string`

#### Inherited from

Omit.path

#### Defined in

[packages/agros-tools/src/types.ts:56](https://github.com/agrosjs/agros/blob/e06f80b/packages/agros-tools/src/types.ts#L56)

___

### <a id="usecomponentclass" name="usecomponentclass"></a> useComponentClass

• `Optional` **useComponentClass**: [`Type`](../index.md#type)<`any`\>

#### Defined in

[packages/agros-tools/src/types.ts:61](https://github.com/agrosjs/agros/blob/e06f80b/packages/agros-tools/src/types.ts#L61)

___

### <a id="usemoduleclass" name="usemoduleclass"></a> useModuleClass

• `Optional` **useModuleClass**: [`AsyncModuleClass`](../index.md#asyncmoduleclass)<`any`\>

#### Defined in

[packages/agros-tools/src/types.ts:60](https://github.com/agrosjs/agros/blob/e06f80b/packages/agros-tools/src/types.ts#L60)
