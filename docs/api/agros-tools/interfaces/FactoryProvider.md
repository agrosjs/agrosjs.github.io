[@agros/tools](../index.md) / FactoryProvider

# Interface: FactoryProvider<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Table of contents

### Properties

- [inject](FactoryProvider.md#inject)
- [provide](FactoryProvider.md#provide)
- [useFactory](FactoryProvider.md#usefactory)

## Properties

### <a id="inject" name="inject"></a> inject

• `Optional` **inject**: [`Type`](../index.md#type)<`any`\>[]

#### Defined in

[packages/agros-tools/src/types.ts:55](https://github.com/agrosjs/agros/blob/8fba5a5/packages/agros-tools/src/types.ts#L55)

___

### <a id="provide" name="provide"></a> provide

• **provide**: [`ProviderToken`](../index.md#providertoken)

#### Defined in

[packages/agros-tools/src/types.ts:50](https://github.com/agrosjs/agros/blob/8fba5a5/packages/agros-tools/src/types.ts#L50)

___

### <a id="usefactory" name="usefactory"></a> useFactory

• **useFactory**: (...`args`: `any`[]) => `T` \| `Promise`<`T`\>

#### Type declaration

▸ (...`args`): `T` \| `Promise`<`T`\>

Factory function that returns an instance of the provider to be injected.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`T` \| `Promise`<`T`\>

#### Defined in

[packages/agros-tools/src/types.ts:54](https://github.com/agrosjs/agros/blob/8fba5a5/packages/agros-tools/src/types.ts#L54)
