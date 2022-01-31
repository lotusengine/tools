# Class: LotusError<D\>

[@lotusengine/core](../wiki/@lotusengine.core).LotusError

## Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `unknown` = `any` |

## Hierarchy

- [`Error`](../wiki/@lotusengine.core.%3Cinternal%3E#error)

  ↳ **`LotusError`**

  ↳↳ [`UnknownError`](../wiki/@lotusengine.core.UnknownError)

  ↳↳ [`InvalidDataError`](../wiki/@lotusengine.core.InvalidDataError)

## Implements

- [`ILotusError`](../wiki/@lotusengine.core.%3Cinternal%3E.ILotusError)<`D`\>

## Table of contents

### Constructors

- [constructor](../wiki/@lotusengine.core.LotusError#constructor)

### Properties

- [cause](../wiki/@lotusengine.core.LotusError#cause)
- [code](../wiki/@lotusengine.core.LotusError#code)
- [data](../wiki/@lotusengine.core.LotusError#data)
- [message](../wiki/@lotusengine.core.LotusError#message)
- [name](../wiki/@lotusengine.core.LotusError#name)
- [stack](../wiki/@lotusengine.core.LotusError#stack)
- [type](../wiki/@lotusengine.core.LotusError#type)
- [prepareStackTrace](../wiki/@lotusengine.core.LotusError#preparestacktrace)
- [stackTraceLimit](../wiki/@lotusengine.core.LotusError#stacktracelimit)

### Methods

- [getChainOfCausation](../wiki/@lotusengine.core.LotusError#getchainofcausation)
- [getCode](../wiki/@lotusengine.core.LotusError#getcode)
- [getData](../wiki/@lotusengine.core.LotusError#getdata)
- [getMessage](../wiki/@lotusengine.core.LotusError#getmessage)
- [getName](../wiki/@lotusengine.core.LotusError#getname)
- [getSafeOutput](../wiki/@lotusengine.core.LotusError#getsafeoutput)
- [getTraces](../wiki/@lotusengine.core.LotusError#gettraces)
- [getType](../wiki/@lotusengine.core.LotusError#gettype)
- [toObject](../wiki/@lotusengine.core.LotusError#toobject)
- [toString](../wiki/@lotusengine.core.LotusError#tostring)
- [captureStackTrace](../wiki/@lotusengine.core.LotusError#capturestacktrace)
- [createCauseSummary](../wiki/@lotusengine.core.LotusError#createcausesummary)

## Constructors

### constructor

• **new LotusError**<`D`\>(`type`, `code`, `data`, `message`, `cause?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `unknown` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `code` | `number` |
| `data` | `D` |
| `message` | `string` |
| `cause?` | [`Cause`](../wiki/@lotusengine.core.%3Cinternal%3E#cause) |

#### Overrides

Error.constructor

#### Defined in

[packages/core/src/lib/coreError.ts:7](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/lib/coreError.ts#L7)

## Properties

### cause

• `Optional` **cause**: [`Cause`](../wiki/@lotusengine.core.%3Cinternal%3E#cause)

#### Implementation of

ILotusError.cause

___

### code

• **code**: `number`

#### Implementation of

ILotusError.code

___

### data

• **data**: `D`

#### Implementation of

ILotusError.data

___

### message

• **message**: `string`

#### Implementation of

ILotusError.message

#### Inherited from

Error.message

___

### name

• **name**: `string`

#### Implementation of

ILotusError.name

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: `string`

#### Implementation of

ILotusError.stack

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### type

• **type**: `string`

#### Implementation of

ILotusError.type

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

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### getChainOfCausation

▸ **getChainOfCausation**(): [`Cause`](../wiki/@lotusengine.core.%3Cinternal%3E#cause)[]

#### Returns

[`Cause`](../wiki/@lotusengine.core.%3Cinternal%3E#cause)[]

#### Implementation of

ILotusError.getChainOfCausation

#### Defined in

[packages/core/src/lib/coreError.ts:86](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/lib/coreError.ts#L86)

___

### getCode

▸ **getCode**(): `number`

#### Returns

`number`

#### Implementation of

ILotusError.getCode

#### Defined in

[packages/core/src/lib/coreError.ts:57](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/lib/coreError.ts#L57)

___

### getData

▸ **getData**(): `D`

#### Returns

`D`

#### Implementation of

ILotusError.getData

#### Defined in

[packages/core/src/lib/coreError.ts:53](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/lib/coreError.ts#L53)

___

### getMessage

▸ **getMessage**(): `string`

#### Returns

`string`

#### Implementation of

ILotusError.getMessage

#### Defined in

[packages/core/src/lib/coreError.ts:45](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/lib/coreError.ts#L45)

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Implementation of

ILotusError.getName

#### Defined in

[packages/core/src/lib/coreError.ts:49](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/lib/coreError.ts#L49)

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

#### Implementation of

ILotusError.getSafeOutput

#### Defined in

[packages/core/src/lib/coreError.ts:77](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/lib/coreError.ts#L77)

___

### getTraces

▸ **getTraces**(): `string`[]

#### Returns

`string`[]

#### Implementation of

ILotusError.getTraces

#### Defined in

[packages/core/src/lib/coreError.ts:41](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/lib/coreError.ts#L41)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Implementation of

ILotusError.getType

#### Defined in

[packages/core/src/lib/coreError.ts:61](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/lib/coreError.ts#L61)

___

### toObject

▸ **toObject**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `cause` | `undefined` \| [`CauseSummary`](../wiki/@lotusengine.core.%3Cinternal%3E.CauseSummary) |
| `code` | `number` |
| `data` | `D` |
| `message` | `string` |
| `name` | `string` |
| `stack` | `string`[] |
| `type` | `string` |

#### Implementation of

ILotusError.toObject

#### Defined in

[packages/core/src/lib/coreError.ts:65](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/lib/coreError.ts#L65)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Implementation of

ILotusError.toString

#### Defined in

[packages/core/src/lib/coreError.ts:37](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/lib/coreError.ts#L37)

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

Error.captureStackTrace

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

#### Defined in

[packages/core/src/lib/coreError.ts:18](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/lib/coreError.ts#L18)
