# Class: RequestAction

[@lotusengine/sdk](../wiki/@lotusengine.sdk).RequestAction

## Hierarchy

- [`default`](../wiki/@lotusengine.sdk.%3Cinternal%3E.default)<[`RequestActionParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E.RequestActionParameters), [`RequestContructParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E.RequestContructParameters)\>

  ↳ **`RequestAction`**

## Table of contents

### Constructors

- [constructor](../wiki/@lotusengine.sdk.RequestAction#constructor)

### Properties

- [description](../wiki/@lotusengine.sdk.RequestAction#description)
- [name](../wiki/@lotusengine.sdk.RequestAction#name)
- [parameters](../wiki/@lotusengine.sdk.RequestAction#parameters)
- [schema](../wiki/@lotusengine.sdk.RequestAction#schema)
- [type](../wiki/@lotusengine.sdk.RequestAction#type)

### Methods

- [generateHash](../wiki/@lotusengine.sdk.RequestAction#generatehash)
- [getData](../wiki/@lotusengine.sdk.RequestAction#getdata)
- [getDescription](../wiki/@lotusengine.sdk.RequestAction#getdescription)
- [getName](../wiki/@lotusengine.sdk.RequestAction#getname)
- [getParameters](../wiki/@lotusengine.sdk.RequestAction#getparameters)
- [getType](../wiki/@lotusengine.sdk.RequestAction#gettype)
- [setDescription](../wiki/@lotusengine.sdk.RequestAction#setdescription)
- [setName](../wiki/@lotusengine.sdk.RequestAction#setname)
- [setParameters](../wiki/@lotusengine.sdk.RequestAction#setparameters)
- [validateData](../wiki/@lotusengine.sdk.RequestAction#validatedata)

## Constructors

### constructor

• **new RequestAction**()

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[constructor](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#constructor)

## Properties

### description

• `Protected` **description**: `undefined` \| `string`

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[description](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#description)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:15](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/actionComponent.ts#L15)

___

### name

• `Protected` **name**: `string` = `''`

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[name](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#name)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:14](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/actionComponent.ts#L14)

___

### parameters

• `Protected` **parameters**: `undefined` \| [`RequestContructParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E.RequestContructParameters)

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[parameters](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#parameters)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:16](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/actionComponent.ts#L16)

___

### schema

• **schema**: [`ExtendedSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E#extendedschema) = `requestActionSchema`

#### Overrides

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[schema](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#schema)

#### Defined in

[packages/sdk/src/components/actions/requestActionComponent.ts:16](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/actions/requestActionComponent.ts#L16)

___

### type

• **type**: ``"decision"`` \| ``"echo"`` \| ``"event"`` \| ``"loop"`` \| ``"merge"`` \| ``"mock"`` \| ``"module"`` \| ``"notify"`` \| ``"query"`` \| ``"referrer"`` \| ``"request"`` \| ``"return"`` \| ``"store"`` \| ``"script"`` \| ``"split"`` \| ``"start"`` \| ``"template"`` \| ``"token"`` \| ``"transform"`` \| ``"wait"`` = `ActionType.REQUEST`

#### Overrides

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[type](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#type)

#### Defined in

[packages/sdk/src/components/actions/requestActionComponent.ts:14](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/actions/requestActionComponent.ts#L14)

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

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[getData](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#getdata)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:20](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/actionComponent.ts#L20)

___

### getDescription

▸ **getDescription**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[getDescription](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#getdescription)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:49](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/actionComponent.ts#L49)

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[getName](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#getname)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:39](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/actionComponent.ts#L39)

___

### getParameters

▸ **getParameters**(): [`RequestActionParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E.RequestActionParameters)

#### Returns

[`RequestActionParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E.RequestActionParameters)

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[getParameters](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#getparameters)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:59](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/actionComponent.ts#L59)

___

### getType

▸ **getType**(): ``"decision"`` \| ``"echo"`` \| ``"event"`` \| ``"loop"`` \| ``"merge"`` \| ``"mock"`` \| ``"module"`` \| ``"notify"`` \| ``"query"`` \| ``"referrer"`` \| ``"request"`` \| ``"return"`` \| ``"store"`` \| ``"script"`` \| ``"split"`` \| ``"start"`` \| ``"template"`` \| ``"token"`` \| ``"transform"`` \| ``"wait"``

#### Returns

``"decision"`` \| ``"echo"`` \| ``"event"`` \| ``"loop"`` \| ``"merge"`` \| ``"mock"`` \| ``"module"`` \| ``"notify"`` \| ``"query"`` \| ``"referrer"`` \| ``"request"`` \| ``"return"`` \| ``"store"`` \| ``"script"`` \| ``"split"`` \| ``"start"`` \| ``"template"`` \| ``"token"`` \| ``"transform"`` \| ``"wait"``

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[getType](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#gettype)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:30](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/actionComponent.ts#L30)

___

### setDescription

▸ **setDescription**(`description`): [`RequestAction`](../wiki/@lotusengine.sdk.RequestAction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

#### Returns

[`RequestAction`](../wiki/@lotusengine.sdk.RequestAction)

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[setDescription](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#setdescription)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:44](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/actionComponent.ts#L44)

___

### setName

▸ **setName**(`name`): [`RequestAction`](../wiki/@lotusengine.sdk.RequestAction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`RequestAction`](../wiki/@lotusengine.sdk.RequestAction)

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[setName](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#setname)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:34](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/actionComponent.ts#L34)

___

### setParameters

▸ **setParameters**(`parameters`): [`RequestAction`](../wiki/@lotusengine.sdk.RequestAction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`RequestContructParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E.RequestContructParameters) |

#### Returns

[`RequestAction`](../wiki/@lotusengine.sdk.RequestAction)

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[setParameters](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#setparameters)

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
