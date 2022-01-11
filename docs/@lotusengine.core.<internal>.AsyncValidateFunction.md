# Interface: AsyncValidateFunction<T\>

[@lotusengine/core](../wiki/@lotusengine.core).[<internal>](../wiki/@lotusengine.core.%3Cinternal%3E).AsyncValidateFunction

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction)<`T`\>

  ↳ **`AsyncValidateFunction`**

## Callable

### AsyncValidateFunction

▸ **AsyncValidateFunction**(...`args`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [data: any, dataCxt?: DataValidationCxt<string \| number\>] |

#### Returns

`Promise`<`T`\>

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:69

### AsyncValidateFunction

▸ **AsyncValidateFunction**(`data`, `dataCxt?`): data is T

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

- [$async](../wiki/@lotusengine.core.%3Cinternal%3E.AsyncValidateFunction#$async)
- [errors](../wiki/@lotusengine.core.%3Cinternal%3E.AsyncValidateFunction#errors)
- [evaluated](../wiki/@lotusengine.core.%3Cinternal%3E.AsyncValidateFunction#evaluated)
- [schema](../wiki/@lotusengine.core.%3Cinternal%3E.AsyncValidateFunction#schema)
- [schemaEnv](../wiki/@lotusengine.core.%3Cinternal%3E.AsyncValidateFunction#schemaenv)
- [source](../wiki/@lotusengine.core.%3Cinternal%3E.AsyncValidateFunction#source)

## Properties

### $async

• **$async**: ``true``

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:70

___

### errors

• `Optional` **errors**: ``null`` \| [`ErrorObject`](../wiki/@lotusengine.core.%3Cinternal%3E.ErrorObject)<`string`, [`Record`](../wiki/@lotusengine.core.%3Cinternal%3E#record)<`string`, `any`\>, `unknown`\>[]

#### Inherited from

[ValidateFunction](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction).[errors](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction#errors)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:47

___

### evaluated

• `Optional` **evaluated**: [`Evaluated`](../wiki/@lotusengine.core.%3Cinternal%3E.Evaluated)

#### Inherited from

[ValidateFunction](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction).[evaluated](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction#evaluated)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:48

___

### schema

• **schema**: [`AnySchema`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschema)

#### Inherited from

[ValidateFunction](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction).[schema](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction#schema)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:49

___

### schemaEnv

• **schemaEnv**: [`SchemaEnv`](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnv)

#### Inherited from

[ValidateFunction](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction).[schemaEnv](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction#schemaenv)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:50

___

### source

• `Optional` **source**: [`SourceCode`](../wiki/@lotusengine.core.%3Cinternal%3E.SourceCode)

#### Inherited from

[ValidateFunction](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction).[source](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction#source)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:51
