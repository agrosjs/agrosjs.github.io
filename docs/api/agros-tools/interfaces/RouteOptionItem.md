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

[packages/agros-tools/src/types.ts:73](https://github.com/agrosjs/agros/blob/9428958/packages/agros-tools/src/types.ts#L73)

___

### <a id="children" name="children"></a> children

• `Optional` **children**: [`RouteOptionItem`](RouteOptionItem.md)<`T`\>[]

#### Defined in

[packages/agros-tools/src/types.ts:83](https://github.com/agrosjs/agros/blob/9428958/packages/agros-tools/src/types.ts#L83)

___

### <a id="index" name="index"></a> index

• `Optional` **index**: `boolean`

#### Inherited from

Omit.index

#### Defined in

[packages/agros-tools/src/types.ts:76](https://github.com/agrosjs/agros/blob/9428958/packages/agros-tools/src/types.ts#L76)

___

### <a id="path" name="path"></a> path

• `Optional` **path**: `string`

#### Inherited from

Omit.path

#### Defined in

[packages/agros-tools/src/types.ts:77](https://github.com/agrosjs/agros/blob/9428958/packages/agros-tools/src/types.ts#L77)

___

### <a id="usecomponentclass" name="usecomponentclass"></a> useComponentClass

• `Optional` **useComponentClass**: [`Type`](../index.md#type)<`any`\>

#### Defined in

[packages/agros-tools/src/types.ts:82](https://github.com/agrosjs/agros/blob/9428958/packages/agros-tools/src/types.ts#L82)

___

### <a id="usemoduleclass" name="usemoduleclass"></a> useModuleClass

• `Optional` **useModuleClass**: [`AsyncModuleClass`](../index.md#asyncmoduleclass)<`any`\>

#### Defined in

[packages/agros-tools/src/types.ts:81](https://github.com/agrosjs/agros/blob/9428958/packages/agros-tools/src/types.ts#L81)
