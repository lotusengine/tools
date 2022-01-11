# Class: default

[@lotusengine/core](../wiki/@lotusengine.core).[<internal>](../wiki/@lotusengine.core.%3Cinternal%3E).default

## Hierarchy

- [`Error`](../wiki/@lotusengine.core.%3Cinternal%3E#error)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](../wiki/@lotusengine.core.%3Cinternal%3E.default#constructor)

### Properties

- [message](../wiki/@lotusengine.core.%3Cinternal%3E.default#message)
- [missingRef](../wiki/@lotusengine.core.%3Cinternal%3E.default#missingref)
- [missingSchema](../wiki/@lotusengine.core.%3Cinternal%3E.default#missingschema)
- [name](../wiki/@lotusengine.core.%3Cinternal%3E.default#name)
- [stack](../wiki/@lotusengine.core.%3Cinternal%3E.default#stack)
- [prepareStackTrace](../wiki/@lotusengine.core.%3Cinternal%3E.default#preparestacktrace)
- [stackTraceLimit](../wiki/@lotusengine.core.%3Cinternal%3E.default#stacktracelimit)

### Methods

- [captureStackTrace](../wiki/@lotusengine.core.%3Cinternal%3E.default#capturestacktrace)

## Constructors

### constructor

• **new default**(`baseId`, `ref`, `msg?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseId` | `string` |
| `ref` | `string` |
| `msg?` | `string` |

#### Overrides

Error.constructor

#### Defined in

packages/core/node_modules/ajv/dist/compile/ref_error.d.ts:4

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### missingRef

• `Readonly` **missingRef**: `string`

#### Defined in

packages/core/node_modules/ajv/dist/compile/ref_error.d.ts:2

___

### missingSchema

• `Readonly` **missingSchema**: `string`

#### Defined in

packages/core/node_modules/ajv/dist/compile/ref_error.d.ts:3

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

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
