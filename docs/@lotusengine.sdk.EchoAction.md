# Class: EchoAction

[@lotusengine/sdk](../wiki/@lotusengine.sdk).EchoAction

## Hierarchy

- [`default`](../wiki/@lotusengine.sdk.%3Cinternal%3E.default)<[`EchoActionParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E.EchoActionParameters), [`EchoContructParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E.EchoContructParameters)\>

  ↳ **`EchoAction`**

## Table of contents

### Constructors

- [constructor](../wiki/@lotusengine.sdk.EchoAction#constructor)

### Properties

- [description](../wiki/@lotusengine.sdk.EchoAction#description)
- [name](../wiki/@lotusengine.sdk.EchoAction#name)
- [parameters](../wiki/@lotusengine.sdk.EchoAction#parameters)
- [schema](../wiki/@lotusengine.sdk.EchoAction#schema)
- [type](../wiki/@lotusengine.sdk.EchoAction#type)

### Methods

- [generateHash](../wiki/@lotusengine.sdk.EchoAction#generatehash)
- [getData](../wiki/@lotusengine.sdk.EchoAction#getdata)
- [getDescription](../wiki/@lotusengine.sdk.EchoAction#getdescription)
- [getName](../wiki/@lotusengine.sdk.EchoAction#getname)
- [getParameters](../wiki/@lotusengine.sdk.EchoAction#getparameters)
- [getType](../wiki/@lotusengine.sdk.EchoAction#gettype)
- [setDescription](../wiki/@lotusengine.sdk.EchoAction#setdescription)
- [setName](../wiki/@lotusengine.sdk.EchoAction#setname)
- [setParameters](../wiki/@lotusengine.sdk.EchoAction#setparameters)
- [validateData](../wiki/@lotusengine.sdk.EchoAction#validatedata)

## Constructors

### constructor

• **new EchoAction**()

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[constructor](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#constructor)

## Properties

### description

• `Protected` **description**: `undefined` \| `string`

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[description](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#description)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:15](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/base/actionComponent.ts#L15)

___

### name

• `Protected` **name**: `string` = `''`

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[name](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#name)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:14](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/base/actionComponent.ts#L14)

___

### parameters

• `Protected` **parameters**: `undefined` \| [`EchoContructParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E.EchoContructParameters)

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[parameters](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#parameters)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:16](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/base/actionComponent.ts#L16)

___

### schema

• **schema**: [`ExtendedSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E#extendedschema) = `echoActionSchema`

#### Overrides

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[schema](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#schema)

#### Defined in

[packages/sdk/src/components/actions/echoActionComponent.ts:16](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/actions/echoActionComponent.ts#L16)

___

### type

• **type**: ``"decision"`` \| ``"echo"`` \| ``"event"`` \| ``"loop"`` \| ``"merge"`` \| ``"mock"`` \| ``"module"`` \| ``"notify"`` \| ``"query"`` \| ``"referrer"`` \| ``"request"`` \| ``"return"`` \| ``"store"`` \| ``"script"`` \| ``"split"`` \| ``"start"`` \| ``"template"`` \| ``"token"`` \| ``"transform"`` \| ``"wait"`` = `ActionType.ECHO`

#### Overrides

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[type](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#type)

#### Defined in

[packages/sdk/src/components/actions/echoActionComponent.ts:14](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/actions/echoActionComponent.ts#L14)

## Methods

### generateHash

▸ **generateHash**(): `string`

#### Returns

`string`

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[generateHash](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#generatehash)

#### Defined in

[packages/sdk/src/components/base/baseComponent.ts:9](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/base/baseComponent.ts#L9)

___

### getData

▸ **getData**(): [`Action`](../wiki/@lotusengine.sdk.%3Cinternal%3E.Action)

#### Returns

[`Action`](../wiki/@lotusengine.sdk.%3Cinternal%3E.Action)

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[getData](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#getdata)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:20](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/base/actionComponent.ts#L20)

___

### getDescription

▸ **getDescription**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[getDescription](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#getdescription)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:49](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/base/actionComponent.ts#L49)

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[getName](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#getname)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:39](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/base/actionComponent.ts#L39)

___

### getParameters

▸ **getParameters**(): [`EchoActionParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E.EchoActionParameters)

#### Returns

[`EchoActionParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E.EchoActionParameters)

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[getParameters](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#getparameters)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:59](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/base/actionComponent.ts#L59)

___

### getType

▸ **getType**(): ``"decision"`` \| ``"echo"`` \| ``"event"`` \| ``"loop"`` \| ``"merge"`` \| ``"mock"`` \| ``"module"`` \| ``"notify"`` \| ``"query"`` \| ``"referrer"`` \| ``"request"`` \| ``"return"`` \| ``"store"`` \| ``"script"`` \| ``"split"`` \| ``"start"`` \| ``"template"`` \| ``"token"`` \| ``"transform"`` \| ``"wait"``

#### Returns

``"decision"`` \| ``"echo"`` \| ``"event"`` \| ``"loop"`` \| ``"merge"`` \| ``"mock"`` \| ``"module"`` \| ``"notify"`` \| ``"query"`` \| ``"referrer"`` \| ``"request"`` \| ``"return"`` \| ``"store"`` \| ``"script"`` \| ``"split"`` \| ``"start"`` \| ``"template"`` \| ``"token"`` \| ``"transform"`` \| ``"wait"``

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[getType](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#gettype)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:30](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/base/actionComponent.ts#L30)

___

### setDescription

▸ **setDescription**(`description`): [`EchoAction`](../wiki/@lotusengine.sdk.EchoAction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

#### Returns

[`EchoAction`](../wiki/@lotusengine.sdk.EchoAction)

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[setDescription](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#setdescription)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:44](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/base/actionComponent.ts#L44)

___

### setName

▸ **setName**(`name`): [`EchoAction`](../wiki/@lotusengine.sdk.EchoAction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`EchoAction`](../wiki/@lotusengine.sdk.EchoAction)

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[setName](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#setname)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:34](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/base/actionComponent.ts#L34)

___

### setParameters

▸ **setParameters**(`parameters`): [`EchoAction`](../wiki/@lotusengine.sdk.EchoAction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`EchoContructParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E.EchoContructParameters) |

#### Returns

[`EchoAction`](../wiki/@lotusengine.sdk.EchoAction)

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[setParameters](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#setparameters)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:53](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/base/actionComponent.ts#L53)

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

[packages/sdk/src/components/base/baseComponent.ts:15](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/base/baseComponent.ts#L15)
