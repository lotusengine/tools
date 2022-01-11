# Class: Scope

[@lotusengine/core](../wiki/@lotusengine.core).[<internal>](../wiki/@lotusengine.core.%3Cinternal%3E).Scope

## Hierarchy

- **`Scope`**

  ↳ [`ValueScope`](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScope)

## Table of contents

### Constructors

- [constructor](../wiki/@lotusengine.core.%3Cinternal%3E.Scope#constructor)

### Properties

- [\_nameGroup](../wiki/@lotusengine.core.%3Cinternal%3E.Scope#_namegroup)
- [\_names](../wiki/@lotusengine.core.%3Cinternal%3E.Scope#_names)
- [\_parent](../wiki/@lotusengine.core.%3Cinternal%3E.Scope#_parent)
- [\_prefixes](../wiki/@lotusengine.core.%3Cinternal%3E.Scope#_prefixes)

### Methods

- [\_newName](../wiki/@lotusengine.core.%3Cinternal%3E.Scope#_newname)
- [name](../wiki/@lotusengine.core.%3Cinternal%3E.Scope#name)
- [toName](../wiki/@lotusengine.core.%3Cinternal%3E.Scope#toname)

## Constructors

### constructor

• **new Scope**(`__namedParameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters?` | [`ScopeOptions`](../wiki/@lotusengine.core.%3Cinternal%3E.ScopeOptions) |

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:46

## Properties

### \_nameGroup

• `Private` **\_nameGroup**: `any`

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:50

___

### \_names

• `Protected` `Readonly` **\_names**: `Object`

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:41

___

### \_parent

• `Protected` `Optional` `Readonly` **\_parent**: [`Scope`](../wiki/@lotusengine.core.%3Cinternal%3E.Scope)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:45

___

### \_prefixes

• `Protected` `Optional` `Readonly` **\_prefixes**: `Set`<`string`\>

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:44

## Methods

### \_newName

▸ `Protected` **_newName**(`prefix`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |

#### Returns

`string`

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:49

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

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:48

___

### toName

▸ **toName**(`nameOrPrefix`): [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrPrefix` | `string` \| [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name) |

#### Returns

[`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:47
