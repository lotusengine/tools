# Interface: FuncKeywordDefinition

[@lotusengine/core](../wiki/@lotusengine.core).[<internal>](../wiki/@lotusengine.core.%3Cinternal%3E).FuncKeywordDefinition

## Hierarchy

- [`_KeywordDef`](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef)

  ↳ **`FuncKeywordDefinition`**

  ↳↳ [`MacroKeywordDefinition`](../wiki/@lotusengine.core.%3Cinternal%3E.MacroKeywordDefinition)

## Table of contents

### Properties

- [$data](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#$data)
- [$dataError](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#$dataerror)
- [allowUndefined](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#allowundefined)
- [async](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#async)
- [before](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#before)
- [compile](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#compile)
- [dependencies](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#dependencies)
- [error](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#error)
- [errors](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#errors)
- [implements](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#implements)
- [keyword](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#keyword)
- [metaSchema](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#metaschema)
- [modifying](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#modifying)
- [post](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#post)
- [schema](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#schema)
- [schemaType](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#schematype)
- [type](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#type)
- [valid](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#valid)
- [validate](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#validate)
- [validateSchema](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#validateschema)

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

### async

• `Optional` **async**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:119

___

### before

• `Optional` **before**: `string`

#### Inherited from

[_KeywordDef](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef).[before](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef#before)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:92

___

### compile

• `Optional` **compile**: [`CompileKeywordFunc`](../wiki/@lotusengine.core.%3Cinternal%3E#compilekeywordfunc)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:116

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

### errors

• `Optional` **errors**: `boolean` \| ``"full"``

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:121

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

### modifying

• `Optional` **modifying**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:118

___

### post

• `Optional` **post**: `boolean`

#### Inherited from

[_KeywordDef](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef).[post](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef#post)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:93

___

### schema

• `Optional` **schema**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:117

___

### schemaType

• `Optional` **schemaType**: ``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"`` \| (``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"``)[]

#### Inherited from

[_KeywordDef](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef).[schemaType](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef#schematype)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:88

___

### type

• `Optional` **type**: ``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"`` \| (``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"``)[]

#### Inherited from

[_KeywordDef](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef).[type](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef#type)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:87

___

### valid

• `Optional` **valid**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:120

___

### validate

• `Optional` **validate**: [`SchemaValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaValidateFunction) \| [`DataValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E.DataValidateFunction)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:115

___

### validateSchema

• `Optional` **validateSchema**: [`AnyValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E#anyvalidatefunction)<`any`\>

#### Inherited from

[_KeywordDef](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef).[validateSchema](../wiki/@lotusengine.core.%3Cinternal%3E._KeywordDef#validateschema)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:95
