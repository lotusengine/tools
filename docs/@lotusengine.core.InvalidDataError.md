# Class: InvalidDataError

[@lotusengine/core](../wiki/@lotusengine.core).InvalidDataError

## Hierarchy

- [`LotusError`](../wiki/@lotusengine.core.LotusError)

  ↳ **`InvalidDataError`**

## Table of contents

### Constructors

- [constructor](../wiki/@lotusengine.core.InvalidDataError#constructor)

### Properties

- [cause](../wiki/@lotusengine.core.InvalidDataError#cause)
- [code](../wiki/@lotusengine.core.InvalidDataError#code)
- [data](../wiki/@lotusengine.core.InvalidDataError#data)
- [message](../wiki/@lotusengine.core.InvalidDataError#message)
- [name](../wiki/@lotusengine.core.InvalidDataError#name)
- [stack](../wiki/@lotusengine.core.InvalidDataError#stack)
- [type](../wiki/@lotusengine.core.InvalidDataError#type)
- [prepareStackTrace](../wiki/@lotusengine.core.InvalidDataError#preparestacktrace)
- [stackTraceLimit](../wiki/@lotusengine.core.InvalidDataError#stacktracelimit)

### Methods

- [getChainOfCausation](../wiki/@lotusengine.core.InvalidDataError#getchainofcausation)
- [getCode](../wiki/@lotusengine.core.InvalidDataError#getcode)
- [getData](../wiki/@lotusengine.core.InvalidDataError#getdata)
- [getMessage](../wiki/@lotusengine.core.InvalidDataError#getmessage)
- [getName](../wiki/@lotusengine.core.InvalidDataError#getname)
- [getSafeOutput](../wiki/@lotusengine.core.InvalidDataError#getsafeoutput)
- [getTraces](../wiki/@lotusengine.core.InvalidDataError#gettraces)
- [getType](../wiki/@lotusengine.core.InvalidDataError#gettype)
- [toObject](../wiki/@lotusengine.core.InvalidDataError#toobject)
- [toString](../wiki/@lotusengine.core.InvalidDataError#tostring)
- [captureStackTrace](../wiki/@lotusengine.core.InvalidDataError#capturestacktrace)
- [createCauseSummary](../wiki/@lotusengine.core.InvalidDataError#createcausesummary)

## Constructors

### constructor

• **new InvalidDataError**(`cause?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cause?` | [`Error`](../wiki/@lotusengine.core.%3Cinternal%3E#error) |

#### Overrides

[LotusError](../wiki/@lotusengine.core.LotusError).[constructor](../wiki/@lotusengine.core.LotusError#constructor)

#### Defined in

[packages/core/src/lib/systemErrors.ts:13](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/systemErrors.ts#L13)

## Properties

### cause

• `Optional` **cause**: [`Cause`](../wiki/@lotusengine.core.%3Cinternal%3E#cause)

#### Inherited from

[LotusError](../wiki/@lotusengine.core.LotusError).[cause](../wiki/@lotusengine.core.LotusError#cause)

___

### code

• **code**: `number`

#### Inherited from

[LotusError](../wiki/@lotusengine.core.LotusError).[code](../wiki/@lotusengine.core.LotusError#code)

___

### data

• **data**: `any`

#### Inherited from

[LotusError](../wiki/@lotusengine.core.LotusError).[data](../wiki/@lotusengine.core.LotusError#data)

___

### message

• **message**: `string`

#### Inherited from

[LotusError](../wiki/@lotusengine.core.LotusError).[message](../wiki/@lotusengine.core.LotusError#message)

___

### name

• **name**: `string`

#### Inherited from

[LotusError](../wiki/@lotusengine.core.LotusError).[name](../wiki/@lotusengine.core.LotusError#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[LotusError](../wiki/@lotusengine.core.LotusError).[stack](../wiki/@lotusengine.core.LotusError#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### type

• **type**: `string`

#### Inherited from

[LotusError](../wiki/@lotusengine.core.LotusError).[type](../wiki/@lotusengine.core.LotusError#type)

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: [`Error`](../wiki/@lotusengine.core.%3Cinternal%3E#error), `stackTraces`: [`CallSite`](../wiki/@lotusengine.core.%3Cinternal%3E.CallSite)[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | [`Error`](../wiki/@lotusengine.core.%3Cinternal%3E#error) |
| `stackTraces` | [`CallSite`](../wiki/@lotusengine.core.%3Cinternal%3E.CallSite)[] |

##### Returns

`any`

#### Inherited from

[LotusError](../wiki/@lotusengine.core.LotusError).[prepareStackTrace](../wiki/@lotusengine.core.LotusError#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[LotusError](../wiki/@lotusengine.core.LotusError).[stackTraceLimit](../wiki/@lotusengine.core.LotusError#stacktracelimit)

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### getChainOfCausation

▸ **getChainOfCausation**(): [`Cause`](../wiki/@lotusengine.core.%3Cinternal%3E#cause)[]

#### Returns

[`Cause`](../wiki/@lotusengine.core.%3Cinternal%3E#cause)[]

#### Inherited from

[LotusError](../wiki/@lotusengine.core.LotusError).[getChainOfCausation](../wiki/@lotusengine.core.LotusError#getchainofcausation)

#### Defined in

[packages/core/src/lib/coreError.ts:86](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/coreError.ts#L86)

___

### getCode

▸ **getCode**(): `number`

#### Returns

`number`

#### Inherited from

[LotusError](../wiki/@lotusengine.core.LotusError).[getCode](../wiki/@lotusengine.core.LotusError#getcode)

#### Defined in

[packages/core/src/lib/coreError.ts:57](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/coreError.ts#L57)

___

### getData

▸ **getData**(): `any`

#### Returns

`any`

#### Inherited from

[LotusError](../wiki/@lotusengine.core.LotusError).[getData](../wiki/@lotusengine.core.LotusError#getdata)

#### Defined in

[packages/core/src/lib/coreError.ts:53](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/coreError.ts#L53)

___

### getMessage

▸ **getMessage**(): `string`

#### Returns

`string`

#### Inherited from

[LotusError](../wiki/@lotusengine.core.LotusError).[getMessage](../wiki/@lotusengine.core.LotusError#getmessage)

#### Defined in

[packages/core/src/lib/coreError.ts:45](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/coreError.ts#L45)

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Inherited from

[LotusError](../wiki/@lotusengine.core.LotusError).[getName](../wiki/@lotusengine.core.LotusError#getname)

#### Defined in

[packages/core/src/lib/coreError.ts:49](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/coreError.ts#L49)

___

### getSafeOutput

▸ **getSafeOutput**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `code` | `number` |
| `message` | `string` |
| `name` | `string` |
| `type` | `string` |

#### Inherited from

[LotusError](../wiki/@lotusengine.core.LotusError).[getSafeOutput](../wiki/@lotusengine.core.LotusError#getsafeoutput)

#### Defined in

[packages/core/src/lib/coreError.ts:77](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/coreError.ts#L77)

___

### getTraces

▸ **getTraces**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[LotusError](../wiki/@lotusengine.core.LotusError).[getTraces](../wiki/@lotusengine.core.LotusError#gettraces)

#### Defined in

[packages/core/src/lib/coreError.ts:41](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/coreError.ts#L41)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Inherited from

[LotusError](../wiki/@lotusengine.core.LotusError).[getType](../wiki/@lotusengine.core.LotusError#gettype)

#### Defined in

[packages/core/src/lib/coreError.ts:61](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/coreError.ts#L61)

___

### toObject

▸ **toObject**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `cause` | `undefined` \| [`CauseSummary`](../wiki/@lotusengine.core.%3Cinternal%3E.CauseSummary) |
| `code` | `number` |
| `data` | `any` |
| `message` | `string` |
| `name` | `string` |
| `stack` | `string`[] |
| `type` | `string` |

#### Inherited from

[LotusError](../wiki/@lotusengine.core.LotusError).[toObject](../wiki/@lotusengine.core.LotusError#toobject)

#### Defined in

[packages/core/src/lib/coreError.ts:65](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/coreError.ts#L65)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[LotusError](../wiki/@lotusengine.core.LotusError).[toString](../wiki/@lotusengine.core.LotusError#tostring)

#### Defined in

[packages/core/src/lib/coreError.ts:37](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/coreError.ts#L37)

___

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[LotusError](../wiki/@lotusengine.core.LotusError).[captureStackTrace](../wiki/@lotusengine.core.LotusError#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:4

___

### createCauseSummary

▸ `Static` **createCauseSummary**(`err`): [`CauseSummary`](../wiki/@lotusengine.core.%3Cinternal%3E.CauseSummary)

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | [`Error`](../wiki/@lotusengine.core.%3Cinternal%3E#error) \| [`ILotusError`](../wiki/@lotusengine.core.%3Cinternal%3E.ILotusError)<`any`\> |

#### Returns

[`CauseSummary`](../wiki/@lotusengine.core.%3Cinternal%3E.CauseSummary)

#### Inherited from

[LotusError](../wiki/@lotusengine.core.LotusError).[createCauseSummary](../wiki/@lotusengine.core.LotusError#createcausesummary)

#### Defined in

[packages/core/src/lib/coreError.ts:18](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/coreError.ts#L18)
