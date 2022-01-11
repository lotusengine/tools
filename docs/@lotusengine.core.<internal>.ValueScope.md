# Class: ValueScope

[@lotusengine/core](../wiki/@lotusengine.core).[<internal>](../wiki/@lotusengine.core.%3Cinternal%3E).ValueScope

## Hierarchy

- [`Scope`](../wiki/@lotusengine.core.%3Cinternal%3E.Scope)

  ↳ **`ValueScope`**

## Table of contents

### Constructors

- [constructor](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScope#constructor)

### Properties

- [\_names](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScope#_names)
- [\_parent](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScope#_parent)
- [\_prefixes](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScope#_prefixes)
- [\_reduceValues](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScope#_reducevalues)
- [\_scope](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScope#_scope)
- [\_values](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScope#_values)
- [opts](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScope#opts)

### Methods

- [\_newName](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScope#_newname)
- [get](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScope#get)
- [getValue](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScope#getvalue)
- [name](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScope#name)
- [scopeCode](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScope#scopecode)
- [scopeRefs](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScope#scoperefs)
- [toName](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScope#toname)
- [value](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScope#value)

## Constructors

### constructor

• **new ValueScope**(`opts`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ValueScopeOptions`](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeOptions) |

#### Overrides

[Scope](../wiki/@lotusengine.core.%3Cinternal%3E.Scope).[constructor](../wiki/@lotusengine.core.%3Cinternal%3E.Scope#constructor)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:70

## Properties

### \_names

• `Protected` `Readonly` **\_names**: `Object`

#### Inherited from

[Scope](../wiki/@lotusengine.core.%3Cinternal%3E.Scope).[_names](../wiki/@lotusengine.core.%3Cinternal%3E.Scope#_names)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:41

___

### \_parent

• `Protected` `Optional` `Readonly` **\_parent**: [`Scope`](../wiki/@lotusengine.core.%3Cinternal%3E.Scope)

#### Inherited from

[Scope](../wiki/@lotusengine.core.%3Cinternal%3E.Scope).[_parent](../wiki/@lotusengine.core.%3Cinternal%3E.Scope#_parent)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:45

___

### \_prefixes

• `Protected` `Optional` `Readonly` **\_prefixes**: `Set`<`string`\>

#### Inherited from

[Scope](../wiki/@lotusengine.core.%3Cinternal%3E.Scope).[_prefixes](../wiki/@lotusengine.core.%3Cinternal%3E.Scope#_prefixes)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:44

___

### \_reduceValues

• `Private` **\_reduceValues**: `any`

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:77

___

### \_scope

• `Protected` `Readonly` **\_scope**: [`ScopeStore`](../wiki/@lotusengine.core.%3Cinternal%3E#scopestore)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:68

___

### \_values

• `Protected` `Readonly` **\_values**: [`ScopeValues`](../wiki/@lotusengine.core.%3Cinternal%3E#scopevalues)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:67

___

### opts

• `Readonly` **opts**: [`VSOptions`](../wiki/@lotusengine.core.%3Cinternal%3E.VSOptions)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:69

## Methods

### \_newName

▸ `Protected` **_newName**(`prefix`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |

#### Returns

`string`

#### Inherited from

[Scope](../wiki/@lotusengine.core.%3Cinternal%3E.Scope).[_newName](../wiki/@lotusengine.core.%3Cinternal%3E.Scope#_newname)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:49

___

### get

▸ **get**(): [`ScopeStore`](../wiki/@lotusengine.core.%3Cinternal%3E#scopestore)

#### Returns

[`ScopeStore`](../wiki/@lotusengine.core.%3Cinternal%3E#scopestore)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:71

___

### getValue

▸ **getValue**(`prefix`, `keyOrRef`): `undefined` \| [`ValueScopeName`](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `keyOrRef` | `unknown` |

#### Returns

`undefined` \| [`ValueScopeName`](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:74

___

### name

▸ **name**(`prefix`): [`ValueScopeName`](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |

#### Returns

[`ValueScopeName`](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName)

#### Overrides

[Scope](../wiki/@lotusengine.core.%3Cinternal%3E.Scope).[name](../wiki/@lotusengine.core.%3Cinternal%3E.Scope#name)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:72

___

### scopeCode

▸ **scopeCode**(`values?`, `usedValues?`, `getCode?`): [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code)

#### Parameters

| Name | Type |
| :------ | :------ |
| `values?` | [`ScopeValues`](../wiki/@lotusengine.core.%3Cinternal%3E#scopevalues) \| [`ScopeValueSets`](../wiki/@lotusengine.core.%3Cinternal%3E#scopevaluesets) |
| `usedValues?` | [`UsedScopeValues`](../wiki/@lotusengine.core.%3Cinternal%3E#usedscopevalues) |
| `getCode?` | (`n`: [`ValueScopeName`](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName)) => `undefined` \| [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code) |

#### Returns

[`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:76

___

### scopeRefs

▸ **scopeRefs**(`scopeName`, `values?`): [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scopeName` | [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name) |
| `values?` | [`ScopeValues`](../wiki/@lotusengine.core.%3Cinternal%3E#scopevalues) \| [`ScopeValueSets`](../wiki/@lotusengine.core.%3Cinternal%3E#scopevaluesets) |

#### Returns

[`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:75

___

### toName

▸ **toName**(`nameOrPrefix`): [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrPrefix` | `string` \| [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name) |

#### Returns

[`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)

#### Inherited from

[Scope](../wiki/@lotusengine.core.%3Cinternal%3E.Scope).[toName](../wiki/@lotusengine.core.%3Cinternal%3E.Scope#toname)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:47

___

### value

▸ **value**(`nameOrPrefix`, `value`): [`ValueScopeName`](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrPrefix` | `string` \| [`ValueScopeName`](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName) |
| `value` | [`NameValue`](../wiki/@lotusengine.core.%3Cinternal%3E.NameValue) |

#### Returns

[`ValueScopeName`](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:73
