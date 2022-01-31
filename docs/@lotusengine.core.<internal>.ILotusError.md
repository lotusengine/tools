# Class: ILotusError<D\>

[@lotusengine/core](../wiki/@lotusengine.core).[<internal>](../wiki/@lotusengine.core.%3Cinternal%3E).ILotusError

## Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `any` = `any` |

## Hierarchy

- [`Error`](../wiki/@lotusengine.core.%3Cinternal%3E#error)

  ↳ **`ILotusError`**

## Implements

- [`GenericErrorShape`](../wiki/@lotusengine.core.%3Cinternal%3E.GenericErrorShape)<`D`\>

## Implemented by

- [`LotusError`](../wiki/@lotusengine.core.LotusError)

## Table of contents

### Constructors

- [constructor](../wiki/@lotusengine.core.%3Cinternal%3E.ILotusError#constructor)

### Properties

- [cause](../wiki/@lotusengine.core.%3Cinternal%3E.ILotusError#cause)
- [code](../wiki/@lotusengine.core.%3Cinternal%3E.ILotusError#code)
- [data](../wiki/@lotusengine.core.%3Cinternal%3E.ILotusError#data)
- [message](../wiki/@lotusengine.core.%3Cinternal%3E.ILotusError#message)
- [name](../wiki/@lotusengine.core.%3Cinternal%3E.ILotusError#name)
- [stack](../wiki/@lotusengine.core.%3Cinternal%3E.ILotusError#stack)
- [type](../wiki/@lotusengine.core.%3Cinternal%3E.ILotusError#type)
- [prepareStackTrace](../wiki/@lotusengine.core.%3Cinternal%3E.ILotusError#preparestacktrace)
- [stackTraceLimit](../wiki/@lotusengine.core.%3Cinternal%3E.ILotusError#stacktracelimit)

### Methods

- [getChainOfCausation](../wiki/@lotusengine.core.%3Cinternal%3E.ILotusError#getchainofcausation)
- [getCode](../wiki/@lotusengine.core.%3Cinternal%3E.ILotusError#getcode)
- [getData](../wiki/@lotusengine.core.%3Cinternal%3E.ILotusError#getdata)
- [getMessage](../wiki/@lotusengine.core.%3Cinternal%3E.ILotusError#getmessage)
- [getName](../wiki/@lotusengine.core.%3Cinternal%3E.ILotusError#getname)
- [getSafeOutput](../wiki/@lotusengine.core.%3Cinternal%3E.ILotusError#getsafeoutput)
- [getTraces](../wiki/@lotusengine.core.%3Cinternal%3E.ILotusError#gettraces)
- [getType](../wiki/@lotusengine.core.%3Cinternal%3E.ILotusError#gettype)
- [toObject](../wiki/@lotusengine.core.%3Cinternal%3E.ILotusError#toobject)
- [toString](../wiki/@lotusengine.core.%3Cinternal%3E.ILotusError#tostring)
- [captureStackTrace](../wiki/@lotusengine.core.%3Cinternal%3E.ILotusError#capturestacktrace)

## Constructors

### constructor

• **new ILotusError**<`D`\>(`type`, `code`, `data`, `message`, `cause?`)

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

[packages/core/src/types/error.ts:24](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/types/error.ts#L24)

## Properties

### cause

• `Optional` **cause**: [`Cause`](../wiki/@lotusengine.core.%3Cinternal%3E#cause)

#### Defined in

[packages/core/src/types/error.ts:23](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/types/error.ts#L23)

___

### code

• **code**: `number`

#### Defined in

[packages/core/src/types/error.ts:20](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/types/error.ts#L20)

___

### data

• **data**: `D`

#### Implementation of

[GenericErrorShape](../wiki/@lotusengine.core.%3Cinternal%3E.GenericErrorShape).[data](../wiki/@lotusengine.core.%3Cinternal%3E.GenericErrorShape#data)

#### Defined in

[packages/core/src/types/error.ts:21](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/types/error.ts#L21)

___

### message

• **message**: `string`

#### Implementation of

[GenericErrorShape](../wiki/@lotusengine.core.%3Cinternal%3E.GenericErrorShape).[message](../wiki/@lotusengine.core.%3Cinternal%3E.GenericErrorShape#message)

#### Overrides

Error.message

#### Defined in

[packages/core/src/types/error.ts:22](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/types/error.ts#L22)

___

### name

• **name**: `string`

#### Implementation of

[GenericErrorShape](../wiki/@lotusengine.core.%3Cinternal%3E.GenericErrorShape).[name](../wiki/@lotusengine.core.%3Cinternal%3E.GenericErrorShape#name)

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: `string`

#### Implementation of

[GenericErrorShape](../wiki/@lotusengine.core.%3Cinternal%3E.GenericErrorShape).[stack](../wiki/@lotusengine.core.%3Cinternal%3E.GenericErrorShape#stack)

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### type

• **type**: `string`

#### Defined in

[packages/core/src/types/error.ts:19](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/types/error.ts#L19)

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

▸ **getChainOfCausation**(): `any`[]

#### Returns

`any`[]

#### Defined in

[packages/core/src/types/error.ts:54](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/types/error.ts#L54)

___

### getCode

▸ **getCode**(): `number`

#### Returns

`number`

#### Defined in

[packages/core/src/types/error.ts:34](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/types/error.ts#L34)

___

### getData

▸ **getData**(): `D`

#### Returns

`D`

#### Defined in

[packages/core/src/types/error.ts:37](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/types/error.ts#L37)

___

### getMessage

▸ **getMessage**(): `string`

#### Returns

`string`

#### Defined in

[packages/core/src/types/error.ts:36](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/types/error.ts#L36)

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Defined in

[packages/core/src/types/error.ts:33](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/types/error.ts#L33)

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

#### Defined in

[packages/core/src/types/error.ts:48](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/types/error.ts#L48)

___

### getTraces

▸ **getTraces**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/core/src/types/error.ts:32](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/types/error.ts#L32)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Defined in

[packages/core/src/types/error.ts:35](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/types/error.ts#L35)

___

### toObject

▸ **toObject**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `cause` | `undefined` \| [`CauseSummary`](../wiki/@lotusengine.core.%3Cinternal%3E.CauseSummary) |
| `code` | `number` |
| `data` | `unknown` |
| `message` | `string` |
| `name` | `string` |
| `stack` | `string`[] |
| `type` | `string` |

#### Defined in

[packages/core/src/types/error.ts:38](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/types/error.ts#L38)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/core/src/types/error.ts:31](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/core/src/types/error.ts#L31)

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
