# Class: KeywordCxt

[@lotusengine/core](../wiki/@lotusengine.core).[<internal>](../wiki/@lotusengine.core.%3Cinternal%3E).KeywordCxt

## Implements

- [`KeywordErrorCxt`](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt)

## Table of contents

### Constructors

- [constructor](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#constructor)

### Properties

- [$data](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#$data)
- [\_error](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#_error)
- [allErrors](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#allerrors)
- [data](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#data)
- [def](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#def)
- [errsCount](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#errscount)
- [gen](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#gen)
- [it](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#it)
- [keyword](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#keyword)
- [params](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#params)
- [parentSchema](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#parentschema)
- [schema](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#schema)
- [schemaCode](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#schemacode)
- [schemaType](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#schematype)
- [schemaValue](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#schemavalue)

### Methods

- [$dataError](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#$dataerror)
- [block$data](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#block$data)
- [check$data](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#check$data)
- [error](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#error)
- [fail](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#fail)
- [fail$data](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#fail$data)
- [failResult](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#failresult)
- [invalid$data](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#invalid$data)
- [mergeEvaluated](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#mergeevaluated)
- [mergeValidEvaluated](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#mergevalidevaluated)
- [ok](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#ok)
- [pass](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#pass)
- [reset](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#reset)
- [result](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#result)
- [setParams](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#setparams)
- [subschema](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt#subschema)

## Constructors

### constructor

• **new KeywordCxt**(`it`, `def`, `keyword`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `it` | [`SchemaObjCxt`](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaObjCxt) |
| `def` | [`AddedKeywordDefinition`](../wiki/@lotusengine.core.%3Cinternal%3E#addedkeyworddefinition) |
| `keyword` | `string` |

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:23

## Properties

### $data

• `Optional` `Readonly` **$data**: `string` \| ``false``

#### Implementation of

[KeywordErrorCxt](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt).[$data](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt#$data)

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:13

___

### \_error

• `Private` **\_error**: `any`

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:30

___

### allErrors

• `Optional` `Readonly` **allErrors**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:10

___

### data

• `Readonly` **data**: [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)

#### Implementation of

[KeywordErrorCxt](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt).[data](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt#data)

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:12

___

### def

• `Readonly` **def**: [`AddedKeywordDefinition`](../wiki/@lotusengine.core.%3Cinternal%3E#addedkeyworddefinition)

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:22

___

### errsCount

• `Optional` `Readonly` **errsCount**: [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)

#### Implementation of

[KeywordErrorCxt](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt).[errsCount](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt#errscount)

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:19

___

### gen

• `Readonly` **gen**: [`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Implementation of

[KeywordErrorCxt](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt).[gen](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt#gen)

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:9

___

### it

• `Readonly` **it**: [`SchemaObjCxt`](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaObjCxt)

#### Implementation of

[KeywordErrorCxt](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt).[it](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt#it)

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:21

___

### keyword

• `Readonly` **keyword**: `string`

#### Implementation of

[KeywordErrorCxt](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt).[keyword](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt#keyword)

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:11

___

### params

• **params**: [`KeywordCxtParams`](../wiki/@lotusengine.core.%3Cinternal%3E#keywordcxtparams)

#### Implementation of

[KeywordErrorCxt](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt).[params](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt#params)

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:20

___

### parentSchema

• `Readonly` **parentSchema**: [`AnySchemaObject`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschemaobject)

#### Implementation of

[KeywordErrorCxt](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt).[parentSchema](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt#parentschema)

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:18

___

### schema

• **schema**: `any`

#### Implementation of

[KeywordErrorCxt](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt).[schema](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt#schema)

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:14

___

### schemaCode

• `Readonly` **schemaCode**: `number` \| `boolean` \| [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code)

#### Implementation of

[KeywordErrorCxt](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt).[schemaCode](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt#schemacode)

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:16

___

### schemaType

• `Readonly` **schemaType**: (``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"``)[]

#### Implementation of

[KeywordErrorCxt](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt).[schemaType](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt#schematype)

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:17

___

### schemaValue

• `Readonly` **schemaValue**: `number` \| `boolean` \| [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code)

#### Implementation of

[KeywordErrorCxt](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt).[schemaValue](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorCxt#schemavalue)

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:15

## Methods

### $dataError

▸ **$dataError**(): `void`

#### Returns

`void`

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:31

___

### block$data

▸ **block$data**(`valid`, `codeBlock`, `$dataValid?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valid` | [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name) |
| `codeBlock` | () => `void` |
| `$dataValid?` | [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) |

#### Returns

`void`

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:35

___

### check$data

▸ **check$data**(`valid?`, `$dataValid?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valid?` | [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name) |
| `$dataValid?` | [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) |

#### Returns

`void`

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:36

___

### error

▸ **error**(`append?`, `errorParams?`, `errorPaths?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `append?` | `boolean` |
| `errorParams?` | [`KeywordCxtParams`](../wiki/@lotusengine.core.%3Cinternal%3E#keywordcxtparams) |
| `errorPaths?` | [`ErrorPaths`](../wiki/@lotusengine.core.%3Cinternal%3E.ErrorPaths) |

#### Returns

`void`

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:29

___

### fail

▸ **fail**(`condition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition?` | [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) |

#### Returns

`void`

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:27

___

### fail$data

▸ **fail$data**(`condition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) |

#### Returns

`void`

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:28

___

### failResult

▸ **failResult**(`condition`, `successAction?`, `failAction?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) |
| `successAction?` | () => `void` |
| `failAction?` | () => `void` |

#### Returns

`void`

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:25

___

### invalid$data

▸ **invalid$data**(): [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code)

#### Returns

[`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code)

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:37

___

### mergeEvaluated

▸ **mergeEvaluated**(`schemaCxt`, `toName?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaCxt` | [`SchemaCxt`](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt) |
| `toName?` | typeof [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name) |

#### Returns

`void`

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:39

___

### mergeValidEvaluated

▸ **mergeValidEvaluated**(`schemaCxt`, `valid`): `boolean` \| `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaCxt` | [`SchemaCxt`](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt) |
| `valid` | [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name) |

#### Returns

`boolean` \| `void`

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:40

___

### ok

▸ **ok**(`cond`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cond` | `boolean` \| [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) |

#### Returns

`void`

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:33

___

### pass

▸ **pass**(`condition`, `failAction?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) |
| `failAction?` | () => `void` |

#### Returns

`void`

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:26

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:32

___

### result

▸ **result**(`condition`, `successAction?`, `failAction?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) |
| `successAction?` | () => `void` |
| `failAction?` | () => `void` |

#### Returns

`void`

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:24

___

### setParams

▸ **setParams**(`obj`, `assign?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`KeywordCxtParams`](../wiki/@lotusengine.core.%3Cinternal%3E#keywordcxtparams) |
| `assign?` | ``true`` |

#### Returns

`void`

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:34

___

### subschema

▸ **subschema**(`appl`, `valid`): [`SchemaCxt`](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt)

#### Parameters

| Name | Type |
| :------ | :------ |
| `appl` | [`Partial`](../wiki/@lotusengine.core.%3Cinternal%3E#partial)<{ `allErrors`: `boolean` ; `compositeRule`: ``true`` ; `createErrors`: `boolean` ; `data`: [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) ; `dataProp`: `string` \| `number` \| [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) ; `dataPropType`: [`Type`](../wiki/@lotusengine.core.%3Cinternal%3E.Type) ; `dataTypes`: (``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"``)[] ; `definedProperties`: `Set`<`string`\> ; `errSchemaPath`: `string` ; `jtdDiscriminator`: `string` ; `jtdMetadata`: `boolean` ; `keyword`: `string` ; `propertyName`: [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name) ; `schema`: [`AnySchema`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschema) ; `schemaPath`: [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) ; `schemaProp`: `string` \| `number` ; `topSchemaRef`: [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code)  }\> |
| `valid` | [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name) |

#### Returns

[`SchemaCxt`](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt)

#### Defined in

packages/core/node_modules/ajv/dist/compile/validate/index.d.ts:38
