# Class: default<TParams, TExtended\>

[@lotusengine/sdk](../wiki/@lotusengine.sdk).[<internal>](../wiki/@lotusengine.sdk.%3Cinternal%3E).default

## Type parameters

| Name | Type |
| :------ | :------ |
| `TParams` | extends [`ActionParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E#actionparameters) = [`ActionParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E#actionparameters) |
| `TExtended` | extends [`ActionContructParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E#actioncontructparameters) = [`ActionContructParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E#actioncontructparameters) |

## Hierarchy

- [`default`](../wiki/@lotusengine.sdk.%3Cinternal%3E.default)

  ↳ **`default`**

  ↳↳ [`EchoAction`](../wiki/@lotusengine.sdk.EchoAction)

  ↳↳ [`RequestAction`](../wiki/@lotusengine.sdk.RequestAction)

  ↳↳ [`StartAction`](../wiki/@lotusengine.sdk.StartAction)

## Table of contents

### Constructors

- [constructor](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#constructor)

### Properties

- [description](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#description)
- [name](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#name)
- [parameters](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#parameters)
- [schema](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#schema)
- [type](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#type)

### Methods

- [generateHash](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#generatehash)
- [getData](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#getdata)
- [getDescription](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#getdescription)
- [getName](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#getname)
- [getParameters](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#getparameters)
- [getType](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#gettype)
- [setDescription](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#setdescription)
- [setName](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#setname)
- [setParameters](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#setparameters)
- [validateData](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#validatedata)

## Constructors

### constructor

• **new default**<`TParams`, `TExtended`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TParams` | extends [`ActionParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E#actionparameters) = [`ActionParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E#actionparameters) |
| `TExtended` | extends [`ActionContructParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E#actioncontructparameters) = [`ActionContructParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E#actioncontructparameters) |

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[constructor](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#constructor)

## Properties

### description

• `Protected` **description**: `undefined` \| `string`

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:15](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/actionComponent.ts#L15)

___

### name

• `Protected` **name**: `string` = `''`

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:14](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/actionComponent.ts#L14)

___

### parameters

• `Protected` **parameters**: `undefined` \| `TExtended`

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:16](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/actionComponent.ts#L16)

___

### schema

• `Abstract` **schema**: `any`

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[schema](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#schema)

#### Defined in

[packages/sdk/src/components/base/baseComponent.ts:6](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/baseComponent.ts#L6)

___

### type

• `Abstract` **type**: ``"decision"`` \| ``"echo"`` \| ``"event"`` \| ``"loop"`` \| ``"merge"`` \| ``"mock"`` \| ``"module"`` \| ``"notify"`` \| ``"query"`` \| ``"referrer"`` \| ``"request"`` \| ``"return"`` \| ``"store"`` \| ``"script"`` \| ``"split"`` \| ``"start"`` \| ``"template"`` \| ``"token"`` \| ``"transform"`` \| ``"wait"``

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:13](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/actionComponent.ts#L13)

## Methods

### generateHash

▸ **generateHash**(): `string`

#### Returns

`string`

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[generateHash](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#generatehash)

#### Defined in

[packages/sdk/src/components/base/baseComponent.ts:9](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/baseComponent.ts#L9)

___

### getData

▸ **getData**(): [`Action`](../wiki/@lotusengine.sdk.%3Cinternal%3E.Action)

#### Returns

[`Action`](../wiki/@lotusengine.sdk.%3Cinternal%3E.Action)

#### Overrides

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[getData](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#getdata)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:20](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/actionComponent.ts#L20)

___

### getDescription

▸ **getDescription**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:49](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/actionComponent.ts#L49)

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:39](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/actionComponent.ts#L39)

___

### getParameters

▸ **getParameters**(): `TParams`

#### Returns

`TParams`

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:59](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/actionComponent.ts#L59)

___

### getType

▸ **getType**(): ``"decision"`` \| ``"echo"`` \| ``"event"`` \| ``"loop"`` \| ``"merge"`` \| ``"mock"`` \| ``"module"`` \| ``"notify"`` \| ``"query"`` \| ``"referrer"`` \| ``"request"`` \| ``"return"`` \| ``"store"`` \| ``"script"`` \| ``"split"`` \| ``"start"`` \| ``"template"`` \| ``"token"`` \| ``"transform"`` \| ``"wait"``

#### Returns

``"decision"`` \| ``"echo"`` \| ``"event"`` \| ``"loop"`` \| ``"merge"`` \| ``"mock"`` \| ``"module"`` \| ``"notify"`` \| ``"query"`` \| ``"referrer"`` \| ``"request"`` \| ``"return"`` \| ``"store"`` \| ``"script"`` \| ``"split"`` \| ``"start"`` \| ``"template"`` \| ``"token"`` \| ``"transform"`` \| ``"wait"``

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:30](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/actionComponent.ts#L30)

___

### setDescription

▸ **setDescription**(`description`): [`default`](../wiki/@lotusengine.sdk.%3Cinternal%3E.default)<`TParams`, `TExtended`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

#### Returns

[`default`](../wiki/@lotusengine.sdk.%3Cinternal%3E.default)<`TParams`, `TExtended`\>

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:44](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/actionComponent.ts#L44)

___

### setName

▸ **setName**(`name`): [`default`](../wiki/@lotusengine.sdk.%3Cinternal%3E.default)<`TParams`, `TExtended`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`default`](../wiki/@lotusengine.sdk.%3Cinternal%3E.default)<`TParams`, `TExtended`\>

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:34](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/actionComponent.ts#L34)

___

### setParameters

▸ **setParameters**(`parameters`): [`default`](../wiki/@lotusengine.sdk.%3Cinternal%3E.default)<`TParams`, `TExtended`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `TExtended` |

#### Returns

[`default`](../wiki/@lotusengine.sdk.%3Cinternal%3E.default)<`TParams`, `TExtended`\>

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:53](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/actionComponent.ts#L53)

___

### validateData

▸ **validateData**<`T`\>(`data`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`T`

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[validateData](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#validatedata)

#### Defined in

[packages/sdk/src/components/base/baseComponent.ts:15](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/baseComponent.ts#L15)
