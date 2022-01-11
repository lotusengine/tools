# Class: CodeGen

[@lotusengine/core](../wiki/@lotusengine.core).[<internal>](../wiki/@lotusengine.core.%3Cinternal%3E).CodeGen

## Table of contents

### Constructors

- [constructor](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#constructor)

### Properties

- [\_blockNode](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#_blocknode)
- [\_blockStarts](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#_blockstarts)
- [\_constants](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#_constants)
- [\_def](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#_def)
- [\_elseNode](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#_elsenode)
- [\_endBlockNode](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#_endblocknode)
- [\_extScope](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#_extscope)
- [\_for](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#_for)
- [\_leafNode](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#_leafnode)
- [\_nodes](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#_nodes)
- [\_scope](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#_scope)
- [\_values](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#_values)
- [opts](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#opts)

### Accessors

- [\_currNode](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#_currnode)
- [\_root](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#_root)

### Methods

- [add](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#add)
- [assign](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#assign)
- [block](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#block)
- [break](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#break)
- [code](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#code)
- [const](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#const)
- [else](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#else)
- [elseIf](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#elseif)
- [endBlock](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#endblock)
- [endFor](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#endfor)
- [endFunc](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#endfunc)
- [endIf](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#endif)
- [for](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#for)
- [forIn](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#forin)
- [forOf](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#forof)
- [forRange](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#forrange)
- [func](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#func)
- [getScopeValue](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#getscopevalue)
- [if](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#if)
- [label](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#label)
- [let](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#let)
- [name](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#name)
- [object](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#object)
- [optimize](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#optimize)
- [return](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#return)
- [scopeCode](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#scopecode)
- [scopeName](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#scopename)
- [scopeRefs](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#scoperefs)
- [scopeValue](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#scopevalue)
- [throw](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#throw)
- [toString](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#tostring)
- [try](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#try)
- [var](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen#var)

## Constructors

### constructor

• **new CodeGen**(`extScope`, `opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extScope` | [`ValueScope`](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScope) |
| `opts?` | [`CodeGenOptions`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGenOptions) |

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:33

## Properties

### \_blockNode

• `Private` **\_blockNode**: `any`

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:70

___

### \_blockStarts

• `Private` `Readonly` **\_blockStarts**: `any`

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:30

___

### \_constants

• `Private` `Readonly` **\_constants**: `any`

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:31

___

### \_def

• `Private` **\_def**: `any`

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:41

___

### \_elseNode

• `Private` **\_elseNode**: `any`

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:72

___

### \_endBlockNode

• `Private` **\_endBlockNode**: `any`

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:71

___

### \_extScope

• `Readonly` **\_extScope**: [`ValueScope`](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScope)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:27

___

### \_for

• `Private` **\_for**: `any`

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:53

___

### \_leafNode

• `Private` **\_leafNode**: `any`

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:69

___

### \_nodes

• `Private` `Readonly` **\_nodes**: `any`

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:29

___

### \_scope

• `Readonly` **\_scope**: [`Scope`](../wiki/@lotusengine.core.%3Cinternal%3E.Scope)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:26

___

### \_values

• `Readonly` **\_values**: [`ScopeValueSets`](../wiki/@lotusengine.core.%3Cinternal%3E#scopevaluesets)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:28

___

### opts

• `Private` `Readonly` **opts**: `any`

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:32

## Accessors

### \_currNode

• `Private` `get` **_currNode**(): `any`

#### Returns

`any`

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:74

• `Private` `set` **_currNode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:75

___

### \_root

• `Private` `get` **_root**(): `any`

#### Returns

`any`

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:73

## Methods

### add

▸ **add**(`lhs`, `rhs`): [`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lhs` | [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) |
| `rhs` | [`SafeExpr`](../wiki/@lotusengine.core.%3Cinternal%3E#safeexpr) |

#### Returns

[`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:46

___

### assign

▸ **assign**(`lhs`, `rhs`, `sideEffects?`): [`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lhs` | [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) |
| `rhs` | [`SafeExpr`](../wiki/@lotusengine.core.%3Cinternal%3E#safeexpr) |
| `sideEffects?` | `boolean` |

#### Returns

[`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:45

___

### block

▸ **block**(`body?`, `nodeCount?`): [`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | [`Block`](../wiki/@lotusengine.core.%3Cinternal%3E#block) |
| `nodeCount?` | `number` |

#### Returns

[`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:64

___

### break

▸ **break**(`label?`): [`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Parameters

| Name | Type |
| :------ | :------ |
| `label?` | [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) |

#### Returns

[`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:60

___

### code

▸ **code**(`c`): [`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | ``null`` \| `number` \| `boolean` \| [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name) \| [`_Code`](../wiki/@lotusengine.core.%3Cinternal%3E._Code) \| () => `void` |

#### Returns

[`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:47

___

### const

▸ **const**(`nameOrPrefix`, `rhs`, `_constant?`): [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrPrefix` | `string` \| [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name) |
| `rhs` | [`SafeExpr`](../wiki/@lotusengine.core.%3Cinternal%3E#safeexpr) |
| `_constant?` | `boolean` |

#### Returns

[`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:42

___

### else

▸ **else**(): [`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Returns

[`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:51

___

### elseIf

▸ **elseIf**(`condition`): [`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `boolean` \| [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) |

#### Returns

[`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:50

___

### endBlock

▸ **endBlock**(`nodeCount?`): [`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeCount?` | `number` |

#### Returns

[`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:65

___

### endFor

▸ **endFor**(): [`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Returns

[`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:58

___

### endFunc

▸ **endFunc**(): [`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Returns

[`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:67

___

### endIf

▸ **endIf**(): [`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Returns

[`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:52

___

### for

▸ **for**(`iteration`, `forBody?`): [`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteration` | [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) |
| `forBody?` | [`Block`](../wiki/@lotusengine.core.%3Cinternal%3E#block) |

#### Returns

[`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:54

___

### forIn

▸ **forIn**(`nameOrPrefix`, `obj`, `forBody`, `varKind?`): [`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrPrefix` | `string` \| [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name) |
| `obj` | [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) |
| `forBody` | (`item`: [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)) => `void` |
| `varKind?` | [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) |

#### Returns

[`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:57

___

### forOf

▸ **forOf**(`nameOrPrefix`, `iterable`, `forBody`, `varKind?`): [`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrPrefix` | `string` \| [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name) |
| `iterable` | [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) |
| `forBody` | (`item`: [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)) => `void` |
| `varKind?` | [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) |

#### Returns

[`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:56

___

### forRange

▸ **forRange**(`nameOrPrefix`, `from`, `to`, `forBody`, `varKind?`): [`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrPrefix` | `string` \| [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name) |
| `from` | [`SafeExpr`](../wiki/@lotusengine.core.%3Cinternal%3E#safeexpr) |
| `to` | [`SafeExpr`](../wiki/@lotusengine.core.%3Cinternal%3E#safeexpr) |
| `forBody` | (`index`: [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)) => `void` |
| `varKind?` | [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) |

#### Returns

[`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:55

___

### func

▸ **func**(`name`, `args?`, `async?`, `funcBody?`): [`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name) |
| `args?` | [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) |
| `async?` | `boolean` |
| `funcBody?` | [`Block`](../wiki/@lotusengine.core.%3Cinternal%3E#block) |

#### Returns

[`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:66

___

### getScopeValue

▸ **getScopeValue**(`prefix`, `keyOrRef`): `undefined` \| [`ValueScopeName`](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `keyOrRef` | `unknown` |

#### Returns

`undefined` \| [`ValueScopeName`](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:38

___

### if

▸ **if**(`condition`, `thenBody?`, `elseBody?`): [`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `boolean` \| [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) |
| `thenBody?` | [`Block`](../wiki/@lotusengine.core.%3Cinternal%3E#block) |
| `elseBody?` | [`Block`](../wiki/@lotusengine.core.%3Cinternal%3E#block) |

#### Returns

[`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:49

___

### label

▸ **label**(`label`): [`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name) |

#### Returns

[`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:59

___

### let

▸ **let**(`nameOrPrefix`, `rhs?`, `_constant?`): [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrPrefix` | `string` \| [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name) |
| `rhs?` | [`SafeExpr`](../wiki/@lotusengine.core.%3Cinternal%3E#safeexpr) |
| `_constant?` | `boolean` |

#### Returns

[`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:43

___

### name

▸ **name**(`prefix`): [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |

#### Returns

[`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:35

___

### object

▸ **object**(...`keyValues`): [`_Code`](../wiki/@lotusengine.core.%3Cinternal%3E._Code)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...keyValues` | [`string` \| [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name), `string` \| [`SafeExpr`](../wiki/@lotusengine.core.%3Cinternal%3E#safeexpr)][] |

#### Returns

[`_Code`](../wiki/@lotusengine.core.%3Cinternal%3E._Code)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:48

___

### optimize

▸ **optimize**(`n?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n?` | `number` |

#### Returns

`void`

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:68

___

### return

▸ **return**(`value`): [`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| `number` \| `boolean` \| [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name) \| [`_Code`](../wiki/@lotusengine.core.%3Cinternal%3E._Code) \| () => `void` |

#### Returns

[`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:61

___

### scopeCode

▸ **scopeCode**(): [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code)

#### Returns

[`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:40

___

### scopeName

▸ **scopeName**(`prefix`): [`ValueScopeName`](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |

#### Returns

[`ValueScopeName`](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:36

___

### scopeRefs

▸ **scopeRefs**(`scopeName`): [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopeName` | [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name) |

#### Returns

[`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:39

___

### scopeValue

▸ **scopeValue**(`prefixOrName`, `value`): [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefixOrName` | `string` \| [`ValueScopeName`](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName) |
| `value` | [`NameValue`](../wiki/@lotusengine.core.%3Cinternal%3E.NameValue) |

#### Returns

[`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:37

___

### throw

▸ **throw**(`error`): [`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) |

#### Returns

[`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:63

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:34

___

### try

▸ **try**(`tryBody`, `catchCode?`, `finallyCode?`): [`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tryBody` | [`Block`](../wiki/@lotusengine.core.%3Cinternal%3E#block) |
| `catchCode?` | (`e`: [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)) => `void` |
| `finallyCode?` | [`Block`](../wiki/@lotusengine.core.%3Cinternal%3E#block) |

#### Returns

[`CodeGen`](../wiki/@lotusengine.core.%3Cinternal%3E.CodeGen)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:62

___

### var

▸ **var**(`nameOrPrefix`, `rhs?`, `_constant?`): [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrPrefix` | `string` \| [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name) |
| `rhs?` | [`SafeExpr`](../wiki/@lotusengine.core.%3Cinternal%3E#safeexpr) |
| `_constant?` | `boolean` |

#### Returns

[`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/index.d.ts:44
