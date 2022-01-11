# Interface: CurrentOptions

[@lotusengine/core](../wiki/@lotusengine.core).[<internal>](../wiki/@lotusengine.core.%3Cinternal%3E).CurrentOptions

## Table of contents

### Properties

- [$comment](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#$comment)
- [$data](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#$data)
- [addUsedSchema](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#addusedschema)
- [allErrors](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#allerrors)
- [allowDate](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#allowdate)
- [allowMatchingProperties](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#allowmatchingproperties)
- [allowUnionTypes](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#allowuniontypes)
- [code](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#code)
- [coerceTypes](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#coercetypes)
- [defaultMeta](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#defaultmeta)
- [discriminator](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#discriminator)
- [dynamicRef](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#dynamicref)
- [formats](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#formats)
- [inlineRefs](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#inlinerefs)
- [int32range](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#int32range)
- [jtd](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#jtd)
- [keywords](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#keywords)
- [logger](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#logger)
- [loopEnum](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#loopenum)
- [loopRequired](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#looprequired)
- [messages](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#messages)
- [meta](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#meta)
- [multipleOfPrecision](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#multipleofprecision)
- [next](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#next)
- [ownProperties](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#ownproperties)
- [parseDate](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#parsedate)
- [passContext](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#passcontext)
- [removeAdditional](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#removeadditional)
- [schemaId](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#schemaid)
- [schemas](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#schemas)
- [strict](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#strict)
- [strictNumbers](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#strictnumbers)
- [strictRequired](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#strictrequired)
- [strictSchema](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#strictschema)
- [strictTuples](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#stricttuples)
- [strictTypes](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#stricttypes)
- [timestamp](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#timestamp)
- [unevaluated](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#unevaluated)
- [unicodeRegExp](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#unicoderegexp)
- [useDefaults](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#usedefaults)
- [validateFormats](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#validateformats)
- [validateSchema](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#validateschema)
- [verbose](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#verbose)

### Methods

- [loadSchema](../wiki/@lotusengine.core.%3Cinternal%3E.CurrentOptions#loadschema)

## Properties

### $comment

• `Optional` **$comment**: ``true`` \| (`comment`: `string`, `schemaPath?`: `string`, `rootSchema?`: [`AnySchemaObject`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschemaobject)) => `unknown`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:40

___

### $data

• `Optional` **$data**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:32

___

### addUsedSchema

• `Optional` **addUsedSchema**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:61

___

### allErrors

• `Optional` **allErrors**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:33

___

### allowDate

• `Optional` **allowDate**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:39

___

### allowMatchingProperties

• `Optional` **allowMatchingProperties**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:29

___

### allowUnionTypes

• `Optional` **allowUnionTypes**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:30

___

### code

• `Optional` **code**: [`CodeOptions`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeOptions)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:70

___

### coerceTypes

• `Optional` **coerceTypes**: `boolean` \| ``"array"``

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:52

___

### defaultMeta

• `Optional` **defaultMeta**: `string` \| [`AnySchemaObject`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschemaobject)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:59

___

### discriminator

• `Optional` **discriminator**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:35

___

### dynamicRef

• `Optional` **dynamicRef**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:55

___

### formats

• `Optional` **formats**: `Object`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:41

___

### inlineRefs

• `Optional` **inlineRefs**: `number` \| `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:62

___

### int32range

• `Optional` **int32range**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:68

___

### jtd

• `Optional` **jtd**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:57

___

### keywords

• `Optional` **keywords**: [`Vocabulary`](../wiki/@lotusengine.core.%3Cinternal%3E#vocabulary)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:44

___

### logger

• `Optional` **logger**: ``false`` \| [`Logger`](../wiki/@lotusengine.core.%3Cinternal%3E.Logger)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:48

___

### loopEnum

• `Optional` **loopEnum**: `number`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:65

___

### loopRequired

• `Optional` **loopRequired**: `number`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:64

___

### messages

• `Optional` **messages**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:69

___

### meta

• `Optional` **meta**: `boolean` \| [`SchemaObject`](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaObject)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:58

___

### multipleOfPrecision

• `Optional` **multipleOfPrecision**: `number`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:67

___

### next

• `Optional` **next**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:53

___

### ownProperties

• `Optional` **ownProperties**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:66

___

### parseDate

• `Optional` **parseDate**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:38

___

### passContext

• `Optional` **passContext**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:63

___

### removeAdditional

• `Optional` **removeAdditional**: `boolean` \| ``"all"`` \| ``"failing"``

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:50

___

### schemaId

• `Optional` **schemaId**: ``"id"`` \| ``"$id"``

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:56

___

### schemas

• `Optional` **schemas**: [`AnySchema`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschema)[] \| {}

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:45

___

### strict

• `Optional` **strict**: `boolean` \| ``"log"``

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:23

___

### strictNumbers

• `Optional` **strictNumbers**: `boolean` \| ``"log"``

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:25

___

### strictRequired

• `Optional` **strictRequired**: `boolean` \| ``"log"``

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:28

___

### strictSchema

• `Optional` **strictSchema**: `boolean` \| ``"log"``

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:24

___

### strictTuples

• `Optional` **strictTuples**: `boolean` \| ``"log"``

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:27

___

### strictTypes

• `Optional` **strictTypes**: `boolean` \| ``"log"``

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:26

___

### timestamp

• `Optional` **timestamp**: ``"string"`` \| ``"date"``

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:37

___

### unevaluated

• `Optional` **unevaluated**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:54

___

### unicodeRegExp

• `Optional` **unicodeRegExp**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:36

___

### useDefaults

• `Optional` **useDefaults**: `boolean` \| ``"empty"``

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:51

___

### validateFormats

• `Optional` **validateFormats**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:31

___

### validateSchema

• `Optional` **validateSchema**: `boolean` \| ``"log"``

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:60

___

### verbose

• `Optional` **verbose**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:34

## Methods

### loadSchema

▸ `Optional` **loadSchema**(`uri`): `Promise`<[`AnySchemaObject`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschemaobject)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |

#### Returns

`Promise`<[`AnySchemaObject`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschemaobject)\>

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:49
