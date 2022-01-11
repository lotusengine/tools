# Class: StartAction

[@lotusengine/sdk](../wiki/@lotusengine.sdk).StartAction

## Hierarchy

- [`default`](../wiki/@lotusengine.sdk.%3Cinternal%3E.default)<[`StartActionParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E.StartActionParameters), [`StartContructParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E.StartContructParameters)\>

  ↳ **`StartAction`**

## Table of contents

### Constructors

- [constructor](../wiki/@lotusengine.sdk.StartAction#constructor)

### Properties

- [description](../wiki/@lotusengine.sdk.StartAction#description)
- [name](../wiki/@lotusengine.sdk.StartAction#name)
- [parameters](../wiki/@lotusengine.sdk.StartAction#parameters)
- [schema](../wiki/@lotusengine.sdk.StartAction#schema)
- [type](../wiki/@lotusengine.sdk.StartAction#type)

### Methods

- [generateHash](../wiki/@lotusengine.sdk.StartAction#generatehash)
- [getData](../wiki/@lotusengine.sdk.StartAction#getdata)
- [getDescription](../wiki/@lotusengine.sdk.StartAction#getdescription)
- [getName](../wiki/@lotusengine.sdk.StartAction#getname)
- [getParameters](../wiki/@lotusengine.sdk.StartAction#getparameters)
- [getType](../wiki/@lotusengine.sdk.StartAction#gettype)
- [setDescription](../wiki/@lotusengine.sdk.StartAction#setdescription)
- [setName](../wiki/@lotusengine.sdk.StartAction#setname)
- [setParameters](../wiki/@lotusengine.sdk.StartAction#setparameters)
- [validateData](../wiki/@lotusengine.sdk.StartAction#validatedata)

## Constructors

### constructor

• **new StartAction**()

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

• `Protected` **parameters**: `undefined` \| [`StartContructParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E.StartContructParameters)

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[parameters](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#parameters)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:16](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/base/actionComponent.ts#L16)

___

### schema

• **schema**: [`ExtendedSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E#extendedschema) = `startActionSchema`

#### Overrides

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[schema](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#schema)

#### Defined in

[packages/sdk/src/components/actions/startActionComponent.ts:16](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/actions/startActionComponent.ts#L16)

___

### type

• **type**: ``"decision"`` \| ``"echo"`` \| ``"event"`` \| ``"loop"`` \| ``"merge"`` \| ``"mock"`` \| ``"module"`` \| ``"notify"`` \| ``"query"`` \| ``"referrer"`` \| ``"request"`` \| ``"return"`` \| ``"store"`` \| ``"script"`` \| ``"split"`` \| ``"start"`` \| ``"template"`` \| ``"token"`` \| ``"transform"`` \| ``"wait"`` = `ActionType.START`

#### Overrides

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[type](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#type)

#### Defined in

[packages/sdk/src/components/actions/startActionComponent.ts:14](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/actions/startActionComponent.ts#L14)

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

▸ **getParameters**(): [`StartActionParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E.StartActionParameters)

#### Returns

[`StartActionParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E.StartActionParameters)

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

▸ **setDescription**(`description`): [`StartAction`](../wiki/@lotusengine.sdk.StartAction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

#### Returns

[`StartAction`](../wiki/@lotusengine.sdk.StartAction)

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[setDescription](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#setdescription)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:44](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/base/actionComponent.ts#L44)

___

### setName

▸ **setName**(`name`): [`StartAction`](../wiki/@lotusengine.sdk.StartAction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`StartAction`](../wiki/@lotusengine.sdk.StartAction)

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[setName](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#setname)

#### Defined in

[packages/sdk/src/components/base/actionComponent.ts:34](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/base/actionComponent.ts#L34)

___

### setParameters

▸ **setParameters**(`parameters`): [`StartAction`](../wiki/@lotusengine.sdk.StartAction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`StartContructParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E.StartContructParameters) |

#### Returns

[`StartAction`](../wiki/@lotusengine.sdk.StartAction)

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
