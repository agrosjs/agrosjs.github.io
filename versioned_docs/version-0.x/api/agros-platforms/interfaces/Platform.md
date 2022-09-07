[@agros/platforms](../index.md) / Platform

# Interface: Platform

## Table of contents

### Properties

- [createRoutes](Platform.md#createroutes)
- [generateComponent](Platform.md#generatecomponent)
- [getBootstrapCode](Platform.md#getbootstrapcode)
- [getComponentFactoryCode](Platform.md#getcomponentfactorycode)
- [getDecoratorImports](Platform.md#getdecoratorimports)
- [getDefaultConfig](Platform.md#getdefaultconfig)
- [getLoaderImports](Platform.md#getloaderimports)

## Properties

### <a id="createroutes" name="createroutes"></a> createRoutes

• **createRoutes**: (`routerItems`: `RouterItem`[], `level?`: `number`) => `any`

#### Type declaration

▸ (`routerItems`, `level?`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `routerItems` | `RouterItem`[] |
| `level?` | `number` |

##### Returns

`any`

#### Defined in

[platform.interface.ts:19](https://github.com/agrosjs/agros/blob/64c5bfe/packages/agros-platforms/src/platform.interface.ts#L19)

___

### <a id="generatecomponent" name="generatecomponent"></a> generateComponent

• **generateComponent**: <T\>(`componentInstance`: `ComponentInstance`, `component`: `any`) => `Promise`<`T`\>

#### Type declaration

▸ <`T`\>(`componentInstance`, `component`): `Promise`<`T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `componentInstance` | `ComponentInstance` |
| `component` | `any` |

##### Returns

`Promise`<`T`\>

#### Defined in

[platform.interface.ts:18](https://github.com/agrosjs/agros/blob/64c5bfe/packages/agros-platforms/src/platform.interface.ts#L18)

___

### <a id="getbootstrapcode" name="getbootstrapcode"></a> getBootstrapCode

• **getBootstrapCode**: (`ensuredImportsMap`: `Record`<`string`, `string`\>, `addVirtualFile`: [`AddVirtualFile`](../index.md#addvirtualfile)) => `string`

#### Type declaration

▸ (`ensuredImportsMap`, `addVirtualFile`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ensuredImportsMap` | `Record`<`string`, `string`\> |
| `addVirtualFile` | [`AddVirtualFile`](../index.md#addvirtualfile) |

##### Returns

`string`

#### Defined in

[platform.interface.ts:11](https://github.com/agrosjs/agros/blob/64c5bfe/packages/agros-platforms/src/platform.interface.ts#L11)

___

### <a id="getcomponentfactorycode" name="getcomponentfactorycode"></a> getComponentFactoryCode

• **getComponentFactoryCode**: (`ensuredImportsMap`: `Record`<`string`, `string`\>, `filePath`: `string`, `componentIdentifierName`: `string`, `lazy`: `boolean`) => `string`

#### Type declaration

▸ (`ensuredImportsMap`, `filePath`, `componentIdentifierName`, `lazy`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ensuredImportsMap` | `Record`<`string`, `string`\> |
| `filePath` | `string` |
| `componentIdentifierName` | `string` |
| `lazy` | `boolean` |

##### Returns

`string`

#### Defined in

[platform.interface.ts:12](https://github.com/agrosjs/agros/blob/64c5bfe/packages/agros-platforms/src/platform.interface.ts#L12)

___

### <a id="getdecoratorimports" name="getdecoratorimports"></a> getDecoratorImports

• **getDecoratorImports**: () => `Omit`<`EnsureImportOptions`, ``"statements"``\>[]

#### Type declaration

▸ (): `Omit`<`EnsureImportOptions`, ``"statements"``\>[]

##### Returns

`Omit`<`EnsureImportOptions`, ``"statements"``\>[]

#### Defined in

[platform.interface.ts:9](https://github.com/agrosjs/agros/blob/64c5bfe/packages/agros-platforms/src/platform.interface.ts#L9)

___

### <a id="getdefaultconfig" name="getdefaultconfig"></a> getDefaultConfig

• **getDefaultConfig**: () => `Record`<`string`, `any`\>

#### Type declaration

▸ (): `Record`<`string`, `any`\>

##### Returns

`Record`<`string`, `any`\>

#### Defined in

[platform.interface.ts:10](https://github.com/agrosjs/agros/blob/64c5bfe/packages/agros-platforms/src/platform.interface.ts#L10)

___

### <a id="getloaderimports" name="getloaderimports"></a> getLoaderImports

• **getLoaderImports**: () => `Omit`<`EnsureImportOptions`, ``"statements"``\>[]

#### Type declaration

▸ (): `Omit`<`EnsureImportOptions`, ``"statements"``\>[]

##### Returns

`Omit`<`EnsureImportOptions`, ``"statements"``\>[]

#### Defined in

[platform.interface.ts:8](https://github.com/agrosjs/agros/blob/64c5bfe/packages/agros-platforms/src/platform.interface.ts#L8)
