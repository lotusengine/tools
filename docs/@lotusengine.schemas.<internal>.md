# Namespace: <internal\>

[@lotusengine/schemas](../wiki/@lotusengine.schemas).<internal>

## Table of contents

### Interfaces

- [ArraySchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema)
- [BaseSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema)
- [BooleanSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.BooleanSchema)
- [DependenciesOptions](../wiki/@lotusengine.schemas.%3Cinternal%3E.DependenciesOptions)
- [DependentRequiredOptions](../wiki/@lotusengine.schemas.%3Cinternal%3E.DependentRequiredOptions)
- [DependentSchemaOptions](../wiki/@lotusengine.schemas.%3Cinternal%3E.DependentSchemaOptions)
- [IntegerSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.IntegerSchema)
- [NullSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.NullSchema)
- [NumberSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.NumberSchema)
- [ObjectSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.ObjectSchema)
- [PatternPropertiesOptions](../wiki/@lotusengine.schemas.%3Cinternal%3E.PatternPropertiesOptions)
- [StringSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.StringSchema)

### Type aliases

- [JSONSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E#jsonschema)
- [Pick](../wiki/@lotusengine.schemas.%3Cinternal%3E#pick)

## Type aliases

### JSONSchema

Ƭ **JSONSchema**: [`ObjectSchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E.ObjectSchema) \| [`StringSchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E.StringSchema) \| [`NumberSchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E.NumberSchema) \| [`ArraySchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema) \| [`IntegerSchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E.IntegerSchema) \| [`BooleanSchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E.BooleanSchema) \| [`NullSchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E.NullSchema) \| [`ExtendedSchema`](../wiki/@lotusengine.schemas#extendedschema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:55

___

### Pick

Ƭ **Pick**<`T`, `K`\>: { [P in K]: T[P] }

From T, pick a set of properties whose keys are in the union K

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1492
