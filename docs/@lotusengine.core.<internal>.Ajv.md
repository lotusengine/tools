# Class: Ajv

[@lotusengine/core](../wiki/@lotusengine.core).[<internal>](../wiki/@lotusengine.core.%3Cinternal%3E).Ajv

## Hierarchy

- [`default`](../wiki/@lotusengine.core.%3Cinternal%3E.default)

  ↳ **`Ajv`**

## Table of contents

### Constructors

- [constructor](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#constructor)

### Properties

- [RULES](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#rules)
- [\_compilations](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#_compilations)
- [errors](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#errors)
- [formats](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#formats)
- [logger](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#logger)
- [opts](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#opts)
- [refs](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#refs)
- [schemas](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#schemas)
- [scope](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#scope)
- [MissingRefError](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#missingreferror)
- [ValidationError](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#validationerror)

### Methods

- [$dataMetaSchema](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#$datametaschema)
- [\_addDefaultMetaSchema](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#_adddefaultmetaschema)
- [\_addSchema](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#_addschema)
- [\_addVocabularies](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#_addvocabularies)
- [addFormat](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#addformat)
- [addKeyword](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#addkeyword)
- [addMetaSchema](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#addmetaschema)
- [addSchema](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#addschema)
- [addVocabulary](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#addvocabulary)
- [compile](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#compile)
- [compileAsync](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#compileasync)
- [defaultMeta](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#defaultmeta)
- [errorsText](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#errorstext)
- [getKeyword](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#getkeyword)
- [getSchema](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#getschema)
- [removeKeyword](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#removekeyword)
- [removeSchema](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#removeschema)
- [validate](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#validate)
- [validateSchema](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv#validateschema)

## Constructors

### constructor

• **new Ajv**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`Options`](../wiki/@lotusengine.core.%3Cinternal%3E#options) |

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[constructor](../wiki/@lotusengine.core.%3Cinternal%3E.default#constructor)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:123

## Properties

### RULES

• `Readonly` **RULES**: [`ValidationRules`](../wiki/@lotusengine.core.%3Cinternal%3E.ValidationRules)

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[RULES](../wiki/@lotusengine.core.%3Cinternal%3E.default#rules)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:116

___

### \_compilations

• `Readonly` **\_compilations**: `Set`<[`SchemaEnv`](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnv)\>

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[_compilations](../wiki/@lotusengine.core.%3Cinternal%3E.default#_compilations)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:117

___

### errors

• `Optional` **errors**: ``null`` \| [`ErrorObject`](../wiki/@lotusengine.core.%3Cinternal%3E.ErrorObject)<`string`, [`Record`](../wiki/@lotusengine.core.%3Cinternal%3E#record)<`string`, `any`\>, `unknown`\>[]

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[errors](../wiki/@lotusengine.core.%3Cinternal%3E.default#errors)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:104

___

### formats

• `Readonly` **formats**: `Object`

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[formats](../wiki/@lotusengine.core.%3Cinternal%3E.default#formats)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:113

___

### logger

• **logger**: [`Logger`](../wiki/@lotusengine.core.%3Cinternal%3E.Logger)

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[logger](../wiki/@lotusengine.core.%3Cinternal%3E.default#logger)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:105

___

### opts

• **opts**: [`InstanceOptions`](../wiki/@lotusengine.core.%3Cinternal%3E#instanceoptions)

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[opts](../wiki/@lotusengine.core.%3Cinternal%3E.default#opts)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:103

___

### refs

• `Readonly` **refs**: `Object`

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[refs](../wiki/@lotusengine.core.%3Cinternal%3E.default#refs)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:110

___

### schemas

• `Readonly` **schemas**: `Object`

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[schemas](../wiki/@lotusengine.core.%3Cinternal%3E.default#schemas)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:107

___

### scope

• `Readonly` **scope**: [`ValueScope`](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScope)

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[scope](../wiki/@lotusengine.core.%3Cinternal%3E.default#scope)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:106

___

### MissingRefError

▪ `Static` **MissingRefError**: typeof [`default`](../wiki/@lotusengine.core.%3Cinternal%3E.default)

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[MissingRefError](../wiki/@lotusengine.core.%3Cinternal%3E.default#missingreferror)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:122

___

### ValidationError

▪ `Static` **ValidationError**: typeof [`default`](../wiki/@lotusengine.core.%3Cinternal%3E.default)

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[ValidationError](../wiki/@lotusengine.core.%3Cinternal%3E.default#validationerror)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:121

## Methods

### $dataMetaSchema

▸ **$dataMetaSchema**(`metaSchema`, `keywordsJsonPointers`): [`AnySchemaObject`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschemaobject)

#### Parameters

| Name | Type |
| :------ | :------ |
| `metaSchema` | [`AnySchemaObject`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschemaobject) |
| `keywordsJsonPointers` | `string`[] |

#### Returns

[`AnySchemaObject`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschemaobject)

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[$dataMetaSchema](../wiki/@lotusengine.core.%3Cinternal%3E.default#$datametaschema)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:159

___

### \_addDefaultMetaSchema

▸ **_addDefaultMetaSchema**(): `void`

#### Returns

`void`

#### Overrides

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[_addDefaultMetaSchema](../wiki/@lotusengine.core.%3Cinternal%3E.default#_adddefaultmetaschema)

#### Defined in

packages/core/node_modules/ajv/dist/ajv.d.ts:5

___

### \_addSchema

▸ **_addSchema**(`schema`, `meta?`, `baseId?`, `validateSchema?`, `addSchema?`): [`SchemaEnv`](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnv)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AnySchema`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschema) |
| `meta?` | `boolean` |
| `baseId?` | `string` |
| `validateSchema?` | `boolean` \| ``"log"`` |
| `addSchema?` | `boolean` |

#### Returns

[`SchemaEnv`](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnv)

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[_addSchema](../wiki/@lotusengine.core.%3Cinternal%3E.default#_addschema)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:161

___

### \_addVocabularies

▸ **_addVocabularies**(): `void`

#### Returns

`void`

#### Overrides

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[_addVocabularies](../wiki/@lotusengine.core.%3Cinternal%3E.default#_addvocabularies)

#### Defined in

packages/core/node_modules/ajv/dist/ajv.d.ts:4

___

### addFormat

▸ **addFormat**(`name`, `format`): [`default`](../wiki/@lotusengine.core.%3Cinternal%3E.default)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `format` | [`Format`](../wiki/@lotusengine.core.%3Cinternal%3E#format) |

#### Returns

[`default`](../wiki/@lotusengine.core.%3Cinternal%3E.default)

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[addFormat](../wiki/@lotusengine.core.%3Cinternal%3E.default#addformat)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:156

___

### addKeyword

▸ **addKeyword**(`kwdOrDef`, `def?`): [`default`](../wiki/@lotusengine.core.%3Cinternal%3E.default)

#### Parameters

| Name | Type |
| :------ | :------ |
| `kwdOrDef` | `string` \| [`KeywordDefinition`](../wiki/@lotusengine.core.%3Cinternal%3E#keyworddefinition) |
| `def?` | [`KeywordDefinition`](../wiki/@lotusengine.core.%3Cinternal%3E#keyworddefinition) |

#### Returns

[`default`](../wiki/@lotusengine.core.%3Cinternal%3E.default)

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[addKeyword](../wiki/@lotusengine.core.%3Cinternal%3E.default#addkeyword)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:153

___

### addMetaSchema

▸ **addMetaSchema**(`schema`, `key?`, `_validateSchema?`): [`default`](../wiki/@lotusengine.core.%3Cinternal%3E.default)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AnySchemaObject`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschemaobject) |
| `key?` | `string` |
| `_validateSchema?` | `boolean` \| ``"log"`` |

#### Returns

[`default`](../wiki/@lotusengine.core.%3Cinternal%3E.default)

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[addMetaSchema](../wiki/@lotusengine.core.%3Cinternal%3E.default#addmetaschema)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:147

___

### addSchema

▸ **addSchema**(`schema`, `key?`, `_meta?`, `_validateSchema?`): [`default`](../wiki/@lotusengine.core.%3Cinternal%3E.default)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AnySchema`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschema) \| [`AnySchema`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschema)[] |
| `key?` | `string` |
| `_meta?` | `boolean` |
| `_validateSchema?` | `boolean` \| ``"log"`` |

#### Returns

[`default`](../wiki/@lotusengine.core.%3Cinternal%3E.default)

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[addSchema](../wiki/@lotusengine.core.%3Cinternal%3E.default#addschema)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:143

___

### addVocabulary

▸ **addVocabulary**(`definitions`): [`default`](../wiki/@lotusengine.core.%3Cinternal%3E.default)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definitions` | [`Vocabulary`](../wiki/@lotusengine.core.%3Cinternal%3E#vocabulary) |

#### Returns

[`default`](../wiki/@lotusengine.core.%3Cinternal%3E.default)

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[addVocabulary](../wiki/@lotusengine.core.%3Cinternal%3E.default#addvocabulary)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:152

___

### compile

▸ **compile**<`T`\>(`schema`, `_meta?`): [`ValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`Schema`](../wiki/@lotusengine.core.%3Cinternal%3E#schema) \| [`UncheckedJSONSchemaType`](../wiki/@lotusengine.core.%3Cinternal%3E#uncheckedjsonschematype)<`T`, ``false``\> |
| `_meta?` | `boolean` |

#### Returns

[`ValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction)<`T`\>

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[compile](../wiki/@lotusengine.core.%3Cinternal%3E.default#compile)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:134

▸ **compile**<`T`\>(`schema`, `_meta?`): [`ValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`JTDSchemaType`](../wiki/@lotusengine.core.%3Cinternal%3E#jtdschematype)<`T`, [`Record`](../wiki/@lotusengine.core.%3Cinternal%3E#record)<`string`, `never`\>\> |
| `_meta?` | `boolean` |

#### Returns

[`ValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction)<`T`\>

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[compile](../wiki/@lotusengine.core.%3Cinternal%3E.default#compile)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:135

▸ **compile**<`N`, `T`\>(`schema`, `_meta?`): [`ValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction)<[`JTDDataType`](../wiki/@lotusengine.core.%3Cinternal%3E#jtddatatype)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `never` |
| `T` | extends [`SomeJTDSchemaType`](../wiki/@lotusengine.core.%3Cinternal%3E#somejtdschematype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `T` |
| `_meta?` | `boolean` |

#### Returns

[`ValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction)<[`JTDDataType`](../wiki/@lotusengine.core.%3Cinternal%3E#jtddatatype)<`T`\>\>

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[compile](../wiki/@lotusengine.core.%3Cinternal%3E.default#compile)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:136

▸ **compile**<`T`\>(`schema`, `_meta?`): [`AsyncValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E.AsyncValidateFunction)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AsyncSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.AsyncSchema) |
| `_meta?` | `boolean` |

#### Returns

[`AsyncValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E.AsyncValidateFunction)<`T`\>

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[compile](../wiki/@lotusengine.core.%3Cinternal%3E.default#compile)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:137

▸ **compile**<`T`\>(`schema`, `_meta?`): [`AnyValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E#anyvalidatefunction)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AnySchema`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschema) |
| `_meta?` | `boolean` |

#### Returns

[`AnyValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E#anyvalidatefunction)<`T`\>

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[compile](../wiki/@lotusengine.core.%3Cinternal%3E.default#compile)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:138

___

### compileAsync

▸ **compileAsync**<`T`\>(`schema`, `_meta?`): `Promise`<[`ValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`SchemaObject`](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaObject) \| [`UncheckedJSONSchemaType`](../wiki/@lotusengine.core.%3Cinternal%3E#uncheckedjsonschematype)<`T`, ``false``\> |
| `_meta?` | `boolean` |

#### Returns

`Promise`<[`ValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction)<`T`\>\>

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[compileAsync](../wiki/@lotusengine.core.%3Cinternal%3E.default#compileasync)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:139

▸ **compileAsync**<`T`\>(`schema`, `_meta?`): `Promise`<[`ValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`JTDSchemaType`](../wiki/@lotusengine.core.%3Cinternal%3E#jtdschematype)<`T`, [`Record`](../wiki/@lotusengine.core.%3Cinternal%3E#record)<`string`, `never`\>\> |
| `_meta?` | `boolean` |

#### Returns

`Promise`<[`ValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E.ValidateFunction)<`T`\>\>

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[compileAsync](../wiki/@lotusengine.core.%3Cinternal%3E.default#compileasync)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:140

▸ **compileAsync**<`T`\>(`schema`, `meta?`): `Promise`<[`AsyncValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E.AsyncValidateFunction)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AsyncSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.AsyncSchema) |
| `meta?` | `boolean` |

#### Returns

`Promise`<[`AsyncValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E.AsyncValidateFunction)<`T`\>\>

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[compileAsync](../wiki/@lotusengine.core.%3Cinternal%3E.default#compileasync)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:141

▸ **compileAsync**<`T`\>(`schema`, `meta?`): `Promise`<[`AnyValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E#anyvalidatefunction)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AnySchemaObject`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschemaobject) |
| `meta?` | `boolean` |

#### Returns

`Promise`<[`AnyValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E#anyvalidatefunction)<`T`\>\>

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[compileAsync](../wiki/@lotusengine.core.%3Cinternal%3E.default#compileasync)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:142

___

### defaultMeta

▸ **defaultMeta**(): `undefined` \| `string` \| [`AnySchemaObject`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschemaobject)

#### Returns

`undefined` \| `string` \| [`AnySchemaObject`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschemaobject)

#### Overrides

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[defaultMeta](../wiki/@lotusengine.core.%3Cinternal%3E.default#defaultmeta)

#### Defined in

packages/core/node_modules/ajv/dist/ajv.d.ts:6

___

### errorsText

▸ **errorsText**(`errors?`, `__namedParameters?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `errors?` | ``null`` \| [`ErrorObject`](../wiki/@lotusengine.core.%3Cinternal%3E.ErrorObject)<`string`, [`Record`](../wiki/@lotusengine.core.%3Cinternal%3E#record)<`string`, `any`\>, `unknown`\>[] |
| `__namedParameters?` | [`ErrorsTextOptions`](../wiki/@lotusengine.core.%3Cinternal%3E.ErrorsTextOptions) |

#### Returns

`string`

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[errorsText](../wiki/@lotusengine.core.%3Cinternal%3E.default#errorstext)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:157

___

### getKeyword

▸ **getKeyword**(`keyword`): `boolean` \| [`AddedKeywordDefinition`](../wiki/@lotusengine.core.%3Cinternal%3E#addedkeyworddefinition)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyword` | `string` |

#### Returns

`boolean` \| [`AddedKeywordDefinition`](../wiki/@lotusengine.core.%3Cinternal%3E#addedkeyworddefinition)

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[getKeyword](../wiki/@lotusengine.core.%3Cinternal%3E.default#getkeyword)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:154

___

### getSchema

▸ **getSchema**<`T`\>(`keyRef`): `undefined` \| [`AnyValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E#anyvalidatefunction)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyRef` | `string` |

#### Returns

`undefined` \| [`AnyValidateFunction`](../wiki/@lotusengine.core.%3Cinternal%3E#anyvalidatefunction)<`T`\>

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[getSchema](../wiki/@lotusengine.core.%3Cinternal%3E.default#getschema)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:150

___

### removeKeyword

▸ **removeKeyword**(`keyword`): [`default`](../wiki/@lotusengine.core.%3Cinternal%3E.default)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyword` | `string` |

#### Returns

[`default`](../wiki/@lotusengine.core.%3Cinternal%3E.default)

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[removeKeyword](../wiki/@lotusengine.core.%3Cinternal%3E.default#removekeyword)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:155

___

### removeSchema

▸ **removeSchema**(`schemaKeyRef?`): [`default`](../wiki/@lotusengine.core.%3Cinternal%3E.default)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaKeyRef?` | `string` \| `RegExp` \| [`AnySchema`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschema) |

#### Returns

[`default`](../wiki/@lotusengine.core.%3Cinternal%3E.default)

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[removeSchema](../wiki/@lotusengine.core.%3Cinternal%3E.default#removeschema)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:151

___

### validate

▸ **validate**(`schema`, `data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `string` \| [`Schema`](../wiki/@lotusengine.core.%3Cinternal%3E#schema) |
| `data` | `unknown` |

#### Returns

`boolean`

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[validate](../wiki/@lotusengine.core.%3Cinternal%3E.default#validate)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:127

▸ **validate**(`schemaKeyRef`, `data`): `boolean` \| `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaKeyRef` | `string` \| [`AnySchema`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschema) |
| `data` | `unknown` |

#### Returns

`boolean` \| `Promise`<`unknown`\>

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[validate](../wiki/@lotusengine.core.%3Cinternal%3E.default#validate)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:128

▸ **validate**<`T`\>(`schema`, `data`): data is T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `string` \| [`Schema`](../wiki/@lotusengine.core.%3Cinternal%3E#schema) \| [`UncheckedJSONSchemaType`](../wiki/@lotusengine.core.%3Cinternal%3E#uncheckedjsonschematype)<`T`, ``false``\> |
| `data` | `unknown` |

#### Returns

data is T

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[validate](../wiki/@lotusengine.core.%3Cinternal%3E.default#validate)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:129

▸ **validate**<`T`\>(`schema`, `data`): data is T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`JTDSchemaType`](../wiki/@lotusengine.core.%3Cinternal%3E#jtdschematype)<`T`, [`Record`](../wiki/@lotusengine.core.%3Cinternal%3E#record)<`string`, `never`\>\> |
| `data` | `unknown` |

#### Returns

data is T

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[validate](../wiki/@lotusengine.core.%3Cinternal%3E.default#validate)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:130

▸ **validate**<`N`, `T`\>(`schema`, `data`): data is JTDDataType<T\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `never` |
| `T` | extends [`SomeJTDSchemaType`](../wiki/@lotusengine.core.%3Cinternal%3E#somejtdschematype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `T` |
| `data` | `unknown` |

#### Returns

data is JTDDataType<T\>

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[validate](../wiki/@lotusengine.core.%3Cinternal%3E.default#validate)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:131

▸ **validate**<`T`\>(`schema`, `data`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AsyncSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.AsyncSchema) |
| `data` | `unknown` |

#### Returns

`Promise`<`T`\>

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[validate](../wiki/@lotusengine.core.%3Cinternal%3E.default#validate)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:132

▸ **validate**<`T`\>(`schemaKeyRef`, `data`): data is T \| Promise<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaKeyRef` | `string` \| [`AnySchema`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschema) |
| `data` | `unknown` |

#### Returns

data is T \| Promise<T\>

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[validate](../wiki/@lotusengine.core.%3Cinternal%3E.default#validate)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:133

___

### validateSchema

▸ **validateSchema**(`schema`, `throwOrLogError?`): `boolean` \| `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AnySchema`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschema) |
| `throwOrLogError?` | `boolean` |

#### Returns

`boolean` \| `Promise`<`unknown`\>

#### Inherited from

[default](../wiki/@lotusengine.core.%3Cinternal%3E.default).[validateSchema](../wiki/@lotusengine.core.%3Cinternal%3E.default#validateschema)

#### Defined in

packages/core/node_modules/ajv/dist/core.d.ts:149
