# Interface: SchemaValidateFunction

[@lotusengine/core](../wiki/@lotusengine.core).[<internal>](../wiki/@lotusengine.core.%3Cinternal%3E).SchemaValidateFunction

## Callable

### SchemaValidateFunction

▸ **SchemaValidateFunction**(`schema`, `data`, `parentSchema?`, `dataCxt?`): `boolean` \| `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `any` |
| `data` | `any` |
| `parentSchema?` | [`AnySchemaObject`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschemaobject) |
| `dataCxt?` | [`DataValidationCxt`](../wiki/@lotusengine.core.%3Cinternal%3E.DataValidationCxt)<`string` \| `number`\> |

#### Returns

`boolean` \| `Promise`<`any`\>

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:111

## Table of contents

### Properties

- [errors](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaValidateFunction#errors)

## Properties

### errors

• `Optional` **errors**: [`Partial`](../wiki/@lotusengine.core.%3Cinternal%3E#partial)<[`ErrorObject`](../wiki/@lotusengine.core.%3Cinternal%3E.ErrorObject)<`string`, [`Record`](../wiki/@lotusengine.core.%3Cinternal%3E#record)<`string`, `any`\>, `unknown`\>\>[]

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:112
