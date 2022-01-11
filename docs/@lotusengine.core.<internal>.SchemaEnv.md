# Class: SchemaEnv

[@lotusengine/core](../wiki/@lotusengine.core).[<internal>](../wiki/@lotusengine.core.%3Cinternal%3E).SchemaEnv

## Implements

- [`SchemaEnvArgs`](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnvArgs)

## Table of contents

### Constructors

- [constructor](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnv#constructor)

### Properties

- [$async](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnv#$async)
- [baseId](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnv#baseid)
- [dynamicAnchors](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnv#dynamicanchors)
- [localRefs](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnv#localrefs)
- [meta](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnv#meta)
- [parse](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnv#parse)
- [parseName](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnv#parsename)
- [refs](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnv#refs)
- [root](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnv#root)
- [schema](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnv#schema)
- [schemaId](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnv#schemaid)
- [schemaPath](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnv#schemapath)
- [serialize](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnv#serialize)
- [serializeName](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnv#serializename)
- [validate](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnv#validate)
- [validateName](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnv#validatename)

## Constructors

### constructor

• **new SchemaEnv**(`env`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `env` | [`SchemaEnvArgs`](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnvArgs) |

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:73

## Properties

### $async

• `Optional` `Readonly` **$async**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:62

___

### baseId

• **baseId**: `string`

#### Implementation of

[SchemaEnvArgs](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnvArgs).[baseId](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnvArgs#baseid)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:58

___

### dynamicAnchors

• `Readonly` **dynamicAnchors**: `Object`

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:64

___

### localRefs

• `Optional` **localRefs**: [`LocalRefs`](../wiki/@lotusengine.core.%3Cinternal%3E#localrefs)

#### Implementation of

[SchemaEnvArgs](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnvArgs).[localRefs](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnvArgs#localrefs)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:60

___

### meta

• `Optional` `Readonly` **meta**: `boolean`

#### Implementation of

[SchemaEnvArgs](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnvArgs).[meta](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnvArgs#meta)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:61

___

### parse

• `Optional` **parse**: (`data`: `string`) => `unknown`

#### Type declaration

▸ (`data`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

##### Returns

`unknown`

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:71

___

### parseName

• `Optional` **parseName**: [`ValueScopeName`](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:72

___

### refs

• `Readonly` **refs**: [`SchemaRefs`](../wiki/@lotusengine.core.%3Cinternal%3E#schemarefs)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:63

___

### root

• `Readonly` **root**: [`SchemaEnv`](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnv)

#### Implementation of

[SchemaEnvArgs](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnvArgs).[root](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnvArgs#root)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:57

___

### schema

• `Readonly` **schema**: [`AnySchema`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschema)

#### Implementation of

[SchemaEnvArgs](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnvArgs).[schema](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnvArgs#schema)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:55

___

### schemaId

• `Optional` `Readonly` **schemaId**: ``"id"`` \| ``"$id"``

#### Implementation of

[SchemaEnvArgs](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnvArgs).[schemaId](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnvArgs#schemaid)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:56

___

### schemaPath

• `Optional` **schemaPath**: `string`

#### Implementation of

[SchemaEnvArgs](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnvArgs).[schemaPath](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnvArgs#schemapath)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:59

___

### serialize

• `Optional` **serialize**: (`data`: `unknown`) => `string`

#### Type declaration

▸ (`data`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

##### Returns

`string`

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:69

___

### serializeName

• `Optional` **serializeName**: [`ValueScopeName`](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:70

___

### validate

• `Optional` **validate**: [`AnyValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E#anyvalidatefunction)<`any`\>

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:67

___

### validateName

• `Optional` **validateName**: [`ValueScopeName`](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:68
