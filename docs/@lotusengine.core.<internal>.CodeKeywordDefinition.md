# Interface: CodeKeywordDefinition

[@lotusengine/core](../wiki/@lotusengine.core).[<internal>](../wiki/@lotusengine.core.%3Cinternal%3E).CodeKeywordDefinition

## Hierarchy

- [`_KeywordDef`](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef)

  ↳ **`CodeKeywordDefinition`**

## Table of contents

### Properties

- [$data](../wiki/@lotusengine.core.%3Cinternal%3E.CodeKeywordDefinition#$data)
- [$dataError](../wiki/@lotusengine.core.%3Cinternal%3E.CodeKeywordDefinition#$dataerror)
- [allowUndefined](../wiki/@lotusengine.core.%3Cinternal%3E.CodeKeywordDefinition#allowundefined)
- [before](../wiki/@lotusengine.core.%3Cinternal%3E.CodeKeywordDefinition#before)
- [dependencies](../wiki/@lotusengine.core.%3Cinternal%3E.CodeKeywordDefinition#dependencies)
- [error](../wiki/@lotusengine.core.%3Cinternal%3E.CodeKeywordDefinition#error)
- [implements](../wiki/@lotusengine.core.%3Cinternal%3E.CodeKeywordDefinition#implements)
- [keyword](../wiki/@lotusengine.core.%3Cinternal%3E.CodeKeywordDefinition#keyword)
- [metaSchema](../wiki/@lotusengine.core.%3Cinternal%3E.CodeKeywordDefinition#metaschema)
- [post](../wiki/@lotusengine.core.%3Cinternal%3E.CodeKeywordDefinition#post)
- [schemaType](../wiki/@lotusengine.core.%3Cinternal%3E.CodeKeywordDefinition#schematype)
- [trackErrors](../wiki/@lotusengine.core.%3Cinternal%3E.CodeKeywordDefinition#trackerrors)
- [type](../wiki/@lotusengine.core.%3Cinternal%3E.CodeKeywordDefinition#type)
- [validateSchema](../wiki/@lotusengine.core.%3Cinternal%3E.CodeKeywordDefinition#validateschema)

### Methods

- [code](../wiki/@lotusengine.core.%3Cinternal%3E.CodeKeywordDefinition#code)

## Properties

### $data

• `Optional` **$data**: `boolean`

#### Inherited from

[_KeywordDef](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef).[$data](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef#$data)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:90

___

### $dataError

• `Optional` **$dataError**: [`KeywordErrorDefinition`](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorDefinition)

#### Inherited from

[_KeywordDef](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef).[$dataError](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef#$dataerror)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:98

___

### allowUndefined

• `Optional` **allowUndefined**: `boolean`

#### Inherited from

[_KeywordDef](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef).[allowUndefined](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef#allowundefined)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:89

___

### before

• `Optional` **before**: `string`

#### Inherited from

[_KeywordDef](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef).[before](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef#before)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:92

___

### dependencies

• `Optional` **dependencies**: `string`[]

#### Inherited from

[_KeywordDef](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef).[dependencies](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef#dependencies)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:96

___

### error

• `Optional` **error**: [`KeywordErrorDefinition`](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorDefinition)

#### Inherited from

[_KeywordDef](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef).[error](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef#error)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:97

___

### implements

• `Optional` **implements**: `string`[]

#### Inherited from

[_KeywordDef](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef).[implements](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef#implements)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:91

___

### keyword

• **keyword**: `string` \| `string`[]

#### Inherited from

[_KeywordDef](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef).[keyword](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef#keyword)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:86

___

### metaSchema

• `Optional` **metaSchema**: [`AnySchemaObject`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschemaobject)

#### Inherited from

[_KeywordDef](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef).[metaSchema](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef#metaschema)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:94

___

### post

• `Optional` **post**: `boolean`

#### Inherited from

[_KeywordDef](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef).[post](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef#post)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:93

___

### schemaType

• `Optional` **schemaType**: ``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"`` \| (``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"``)[]

#### Inherited from

[_KeywordDef](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef).[schemaType](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef#schematype)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:88

___

### trackErrors

• `Optional` **trackErrors**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:102

___

### type

• `Optional` **type**: ``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"`` \| (``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"``)[]

#### Inherited from

[_KeywordDef](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef).[type](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef#type)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:87

___

### validateSchema

• `Optional` **validateSchema**: [`AnyValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E#anyvalidatefunction)<`any`\>

#### Inherited from

[_KeywordDef](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef).[validateSchema](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef#validateschema)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:95

## Methods

### code

▸ **code**(`cxt`, `ruleType?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cxt` | [`KeywordCxt`](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordCxt) |
| `ruleType?` | `string` |

#### Returns

`void`

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:101
