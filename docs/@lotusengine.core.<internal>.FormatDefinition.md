# Interface: FormatDefinition<T\>

[@lotusengine/core](../wiki/@lotusengine.core).[<internal>](../wiki/@lotusengine.core.%3Cinternal%3E).FormatDefinition

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` |

## Table of contents

### Properties

- [async](../wiki/@lotusengine.core.%3Cinternal%3E.FormatDefinition#async)
- [compare](../wiki/@lotusengine.core.%3Cinternal%3E.FormatDefinition#compare)
- [type](../wiki/@lotusengine.core.%3Cinternal%3E.FormatDefinition#type)
- [validate](../wiki/@lotusengine.core.%3Cinternal%3E.FormatDefinition#validate)

## Properties

### async

• `Optional` **async**: ``false``

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:159

___

### compare

• `Optional` **compare**: [`FormatCompare`](../wiki/@lotusengine.core.%3Cinternal%3E#formatcompare)<`T`\>

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:160

___

### type

• `Optional` **type**: `T` extends `string` ? `undefined` \| ``"string"`` : ``"number"``

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:157

___

### validate

• **validate**: [`FormatValidator`](../wiki/@lotusengine.core.%3Cinternal%3E#formatvalidator)<`T`\> \| `T` extends `string` ? `string` \| `RegExp` : `never`

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:158
