# Namespace: <internal\>

[@lotusengine/types](../wiki/@lotusengine.types).<internal>

## Table of contents

### Interfaces

- [Dict](../wiki/@lotusengine.types.%3Cinternal%3E.Dict)

### Type aliases

- [Partial](../wiki/@lotusengine.types.%3Cinternal%3E#partial)
- [Record](../wiki/@lotusengine.types.%3Cinternal%3E#record)

## Type aliases

### Partial

Ƭ **Partial**<`T`\>: { [P in keyof T]?: T[P] }

Make all properties in T optional

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1471

___

### Record

Ƭ **Record**<`K`, `T`\>: { [P in K]: T }

Construct a type with a set of properties K of type T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `any` |
| `T` | `T` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1499
