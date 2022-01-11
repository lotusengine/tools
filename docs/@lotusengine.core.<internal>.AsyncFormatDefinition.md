# Interface: AsyncFormatDefinition<T\>

[@lotusengine/core](../wiki/@lotusengine.core).[<internal>](../wiki/@lotusengine.core.%3Cinternal%3E).AsyncFormatDefinition

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` |

## Table of contents

### Properties

- [async](../wiki/@lotusengine.core.%3Cinternal%3E.AsyncFormatDefinition#async)
- [compare](../wiki/@lotusengine.core.%3Cinternal%3E.AsyncFormatDefinition#compare)
- [type](../wiki/@lotusengine.core.%3Cinternal%3E.AsyncFormatDefinition#type)
- [validate](../wiki/@lotusengine.core.%3Cinternal%3E.AsyncFormatDefinition#validate)

## Properties

### async

• **async**: ``true``

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:165

___

### compare

• `Optional` **compare**: [`FormatCompare`](../wiki/@lotusengine.core.%3Cinternal%3E#formatcompare)<`T`\>

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:166

___

### type

• `Optional` **type**: `T` extends `string` ? `undefined` \| ``"string"`` : ``"number"``

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:163

___

### validate

• **validate**: [`AsyncFormatValidator`](../wiki/@lotusengine.core.%3Cinternal%3E#asyncformatvalidator)<`T`\>

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:164
