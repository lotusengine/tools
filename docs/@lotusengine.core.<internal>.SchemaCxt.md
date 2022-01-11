# Interface: SchemaCxt

[@lotusengine/core](../wiki/@lotusengine.core).[<internal>](../wiki/@lotusengine.core.%3Cinternal%3E).SchemaCxt

## Hierarchy

- **`SchemaCxt`**

  ↳ [`SchemaObjCxt`](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaObjCxt)

## Table of contents

### Properties

- [ValidationError](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#validationerror)
- [allErrors](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#allerrors)
- [baseId](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#baseid)
- [compositeRule](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#compositerule)
- [createErrors](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#createerrors)
- [data](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#data)
- [dataLevel](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#datalevel)
- [dataNames](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#datanames)
- [dataPathArr](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#datapatharr)
- [dataTypes](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#datatypes)
- [definedProperties](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#definedproperties)
- [errSchemaPath](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#errschemapath)
- [errorPath](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#errorpath)
- [evaluated](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#evaluated)
- [gen](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#gen)
- [items](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#items)
- [jtdDiscriminator](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#jtddiscriminator)
- [jtdMetadata](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#jtdmetadata)
- [opts](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#opts)
- [parentData](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#parentdata)
- [parentDataProperty](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#parentdataproperty)
- [propertyName](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#propertyname)
- [props](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#props)
- [rootId](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#rootid)
- [schema](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#schema)
- [schemaEnv](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#schemaenv)
- [schemaPath](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#schemapath)
- [self](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#self)
- [topSchemaRef](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#topschemaref)
- [validateName](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaCxt#validatename)

## Properties

### ValidationError

• `Optional` `Readonly` **ValidationError**: [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:24

___

### allErrors

• `Optional` `Readonly` **allErrors**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:12

___

### baseId

• **baseId**: `string`

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:28

___

### compositeRule

• `Optional` `Readonly` **compositeRule**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:33

___

### createErrors

• `Optional` `Readonly` **createErrors**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:38

___

### data

• `Readonly` **data**: [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:13

___

### dataLevel

• `Readonly` **dataLevel**: `number`

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:18

___

### dataNames

• `Readonly` **dataNames**: [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)[]

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:16

___

### dataPathArr

• `Readonly` **dataPathArr**: (`number` \| [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code))[]

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:17

___

### dataTypes

• **dataTypes**: (``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"`` \| ``"integer"`` \| ``"array"`` \| ``"null"``)[]

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:19

___

### definedProperties

• **definedProperties**: `Set`<`string`\>

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:20

___

### errSchemaPath

• `Readonly` **errSchemaPath**: `string`

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:30

___

### errorPath

• `Readonly` **errorPath**: [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:31

___

### evaluated

• `Optional` **evaluated**: [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:23

___

### gen

• `Readonly` **gen**: [`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:11

___

### items

• `Optional` **items**: [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name) \| [`EvaluatedItems`](../wiki/@lotusengine.core.%3Cinternal%3E#evaluateditems)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:35

___

### jtdDiscriminator

• `Optional` **jtdDiscriminator**: `string`

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:36

___

### jtdMetadata

• `Optional` **jtdMetadata**: `boolean`

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:37

___

### opts

• `Readonly` **opts**: [`InstanceOptions`](../wiki/@lotusengine.core.%3Cinternal%3E#instanceoptions)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:39

___

### parentData

• `Readonly` **parentData**: [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:14

___

### parentDataProperty

• `Readonly` **parentDataProperty**: `number` \| [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:15

___

### propertyName

• `Optional` `Readonly` **propertyName**: [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:32

___

### props

• `Optional` **props**: [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name) \| [`EvaluatedProperties`](../wiki/@lotusengine.core.%3Cinternal%3E#evaluatedproperties)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:34

___

### rootId

• `Readonly` **rootId**: `string`

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:27

___

### schema

• `Readonly` **schema**: [`AnySchema`](../wiki/@lotusengine.core.%3Cinternal%3E#anyschema)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:25

___

### schemaEnv

• `Readonly` **schemaEnv**: [`SchemaEnv`](../wiki/@lotusengine.core.%3Cinternal%3E.SchemaEnv)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:26

___

### schemaPath

• `Readonly` **schemaPath**: [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:29

___

### self

• `Readonly` **self**: [`default`](../wiki/@lotusengine.core.%3Cinternal%3E.default)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:40

___

### topSchemaRef

• `Readonly` **topSchemaRef**: [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:21

___

### validateName

• `Readonly` **validateName**: [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)

#### Defined in

packages/core/node_modules/ajv/dist/compile/index.d.ts:22
