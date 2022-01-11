# Interface: ValidateFunction<T\>

[@lotusengine/core](../wiki/@lotusengine.core).[<internal>](../wiki/@lotusengine.core.%3Cinternal%3E).ValidateFunction

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- **`ValidateFunction`**

  ↳ [`AsyncValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E.AsyncValidateFunction)

## Callable

### ValidateFunction

▸ **ValidateFunction**(`data`, `dataCxt?`): data is T

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `dataCxt?` | [`DataValidationCxt`](../wiki/@lotusengine.core.%3Cinternal%3E.DataValidationCxt)<`string` \| `number`\> |

#### Returns

data is T

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:46

## Table of contents

### Properties

- [errors](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction#errors)
- [evaluated](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction#evaluated)
- [schema](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction#schema)
- [schemaEnv](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction#schemaenv)
- [source](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction#source)

## Properties

### errors

• `Optional` **errors**: ``null`` \| [`ErrorObject`](../wiki/@lotusengine.core.%3Cinternal%3E.ErrorObject)<`string`, [`Record`](../wiki/@lotusengine.core.%3Cinternal%3E#record)<`string`, `any`\>, `unknown`\>[]

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:47

___

### evaluated

• `Optional` **evaluated**: [`Evaluated`](../wiki/@lotusengine.core.%3Cinternal%3E.Evaluated)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:48

___

### schema

• **schema**: [`AnySchema`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschema)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:49

___

### schemaEnv

• **schemaEnv**: [`SchemaEnv`](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnv)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:50

___

### source

• `Optional` **source**: [`SourceCode`](../wiki/@lotusengine.core.%3Cinternal%3E.SourceCode)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:51
