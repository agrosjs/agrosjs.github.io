[@agros/tools](../index.md) / ComponentInstance

# Class: ComponentInstance

## Table of contents

### Constructors

- [constructor](ComponentInstance.md#constructor)

### Properties

- [Component](ComponentInstance.md#component)
- [metadata](ComponentInstance.md#metadata)

### Methods

- [getComponent](ComponentInstance.md#getcomponent)
- [setComponent](ComponentInstance.md#setcomponent)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new ComponentInstance**(`metadata`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | [`ComponentInstanceMetadata`](../interfaces/ComponentInstanceMetadata.md) |

#### Defined in

[packages/agros-tools/src/component-instance.class.ts:19](https://github.com/agrosjs/agros/blob/4f8a29b/packages/agros-tools/src/component-instance.class.ts#L19)

## Properties

### <a id="component" name="component"></a> Component

• `Private` **Component**: `any`

**`Property`**

React component for current component instance

#### Defined in

[packages/agros-tools/src/component-instance.class.ts:13](https://github.com/agrosjs/agros/blob/4f8a29b/packages/agros-tools/src/component-instance.class.ts#L13)

___

### <a id="metadata" name="metadata"></a> metadata

• `Readonly` **metadata**: [`ComponentInstanceMetadata`](../interfaces/ComponentInstanceMetadata.md)

#### Defined in

[packages/agros-tools/src/component-instance.class.ts:20](https://github.com/agrosjs/agros/blob/4f8a29b/packages/agros-tools/src/component-instance.class.ts#L20)

## Methods

### <a id="getcomponent" name="getcomponent"></a> getComponent

▸ **getComponent**<`T`\>(): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Returns

`T`

#### Defined in

[packages/agros-tools/src/component-instance.class.ts:27](https://github.com/agrosjs/agros/blob/4f8a29b/packages/agros-tools/src/component-instance.class.ts#L27)

___

### <a id="setcomponent" name="setcomponent"></a> setComponent

▸ **setComponent**(`Component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Component` | `any` |

#### Returns

`void`

#### Defined in

[packages/agros-tools/src/component-instance.class.ts:23](https://github.com/agrosjs/agros/blob/4f8a29b/packages/agros-tools/src/component-instance.class.ts#L23)
