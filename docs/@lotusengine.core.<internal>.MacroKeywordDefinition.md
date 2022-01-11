# Interface: MacroKeywordDefinition

[@lotusengine/core](../wiki/@lotusengine.core).[<internal>](../wiki/@lotusengine.core.%3Cinternal%3E).MacroKeywordDefinition

## Hierarchy

- [`FuncKeywordDefinition`](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition)

  ↳ **`MacroKeywordDefinition`**

## Table of contents

### Properties

- [$data](../wiki/@lotusengine.core.%3Cinternal%3E.MacroKeywordDefinition#$data)
- [$dataError](../wiki/@lotusengine.core.%3Cinternal%3E.MacroKeywordDefinition#$dataerror)
- [allowUndefined](../wiki/@lotusengine.core.%3Cinternal%3E.MacroKeywordDefinition#allowundefined)
- [async](../wiki/@lotusengine.core.%3Cinternal%3E.MacroKeywordDefinition#async)
- [before](../wiki/@lotusengine.core.%3Cinternal%3E.MacroKeywordDefinition#before)
- [compile](../wiki/@lotusengine.core.%3Cinternal%3E.MacroKeywordDefinition#compile)
- [dependencies](../wiki/@lotusengine.core.%3Cinternal%3E.MacroKeywordDefinition#dependencies)
- [error](../wiki/@lotusengine.core.%3Cinternal%3E.MacroKeywordDefinition#error)
- [errors](../wiki/@lotusengine.core.%3Cinternal%3E.MacroKeywordDefinition#errors)
- [implements](../wiki/@lotusengine.core.%3Cinternal%3E.MacroKeywordDefinition#implements)
- [keyword](../wiki/@lotusengine.core.%3Cinternal%3E.MacroKeywordDefinition#keyword)
- [macro](../wiki/@lotusengine.core.%3Cinternal%3E.MacroKeywordDefinition#macro)
- [metaSchema](../wiki/@lotusengine.core.%3Cinternal%3E.MacroKeywordDefinition#metaschema)
- [modifying](../wiki/@lotusengine.core.%3Cinternal%3E.MacroKeywordDefinition#modifying)
- [post](../wiki/@lotusengine.core.%3Cinternal%3E.MacroKeywordDefinition#post)
- [schema](../wiki/@lotusengine.core.%3Cinternal%3E.MacroKeywordDefinition#schema)
- [schemaType](../wiki/@lotusengine.core.%3Cinternal%3E.MacroKeywordDefinition#schematype)
- [type](../wiki/@lotusengine.core.%3Cinternal%3E.MacroKeywordDefinition#type)
- [valid](../wiki/@lotusengine.core.%3Cinternal%3E.MacroKeywordDefinition#valid)
- [validate](../wiki/@lotusengine.core.%3Cinternal%3E.MacroKeywordDefinition#validate)
- [validateSchema](../wiki/@lotusengine.core.%3Cinternal%3E.MacroKeywordDefinition#validateschema)

## Properties

### $data

• `Optional` **$data**: `boolean`

#### Inherited from

[FuncKeywordDefinition](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition).[$data](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#$data)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:90

___

### $dataError

• `Optional` **$dataError**: [`KeywordErrorDefinition`](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorDefinition)

#### Inherited from

[FuncKeywordDefinition](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition).[$dataError](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#$dataerror)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:98

___

### allowUndefined

• `Optional` **allowUndefined**: `boolean`

#### Inherited from

[FuncKeywordDefinition](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition).[allowUndefined](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#allowundefined)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:89

___

### async

• `Optional` **async**: `boolean`

#### Inherited from

[FuncKeywordDefinition](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition).[async](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#async)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:119

___

### before

• `Optional` **before**: `string`

#### Inherited from

[FuncKeywordDefinition](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition).[before](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#before)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:92

___

### compile

• `Optional` **compile**: [`CompileKeywordFunc`](../wiki/@lotusengine.core.%3Cinternal%3E#compilekeywordfunc)

#### Inherited from

[FuncKeywordDefinition](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition).[compile](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#compile)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:116

___

### dependencies

• `Optional` **dependencies**: `string`[]

#### Inherited from

[FuncKeywordDefinition](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition).[dependencies](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#dependencies)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:96

___

### error

• `Optional` **error**: [`KeywordErrorDefinition`](../wiki/@lotusengine.core.%3Cinternal%3E.KeywordErrorDefinition)

#### Inherited from

[FuncKeywordDefinition](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition).[error](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#error)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:97

___

### errors

• `Optional` **errors**: `boolean` \| ``"full"``

#### Inherited from

[FuncKeywordDefinition](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition).[errors](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#errors)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:121

___

### implements

• `Optional` **implements**: `string`[]

#### Inherited from

[FuncKeywordDefinition](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition).[implements](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#implements)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:91

___

### keyword

• **keyword**: `string` \| `string`[]

#### Inherited from

[FuncKeywordDefinition](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition).[keyword](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#keyword)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:86

___

### macro

• **macro**: [`MacroKeywordFunc`](../wiki/@lotusengine.core.%3Cinternal%3E#macrokeywordfunc)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:124

___

### metaSchema

• `Optional` **metaSchema**: [`AnySchemaObject`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschemaobject)

#### Inherited from

[FuncKeywordDefinition](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition).[metaSchema](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#metaschema)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:94

___

### modifying

• `Optional` **modifying**: `boolean`

#### Inherited from

[FuncKeywordDefinition](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition).[modifying](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#modifying)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:118

___

### post

• `Optional` **post**: `boolean`

#### Inherited from

[FuncKeywordDefinition](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition).[post](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#post)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:93

___

### schema

• `Optional` **schema**: `boolean`

#### Inherited from

[FuncKeywordDefinition](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition).[schema](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#schema)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:117

___

### schemaType

• `Optional` **schemaType**: ``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"`` \| (``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"``)[]

#### Inherited from

[FuncKeywordDefinition](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition).[schemaType](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#schematype)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:88

___

### type

• `Optional` **type**: ``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"`` \| (``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"``)[]

#### Inherited from

[FuncKeywordDefinition](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition).[type](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#type)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:87

___

### valid

• `Optional` **valid**: `boolean`

#### Inherited from

[FuncKeywordDefinition](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition).[valid](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#valid)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:120

___

### validate

• `Optional` **validate**: [`SchemaValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaValidateFunction) \| [`DataValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E.DataValidateFunction)

#### Inherited from

[FuncKeywordDefinition](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition).[validate](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#validate)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:115

___

### validateSchema

• `Optional` **validateSchema**: [`AnyValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E#anyvalidatefunction)<`any`\>

#### Inherited from

[FuncKeywordDefinition](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition).[validateSchema](../wiki/@lotusengine.core.%3Cinternal%3E.FuncKeywordDefinition#validateschema)

#### Defined in

packages/core/node_modules/ajv/dist/types/index.d.ts:95
