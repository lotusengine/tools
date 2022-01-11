# Interface: StartActionParameters

[@lotusengine/types](../wiki/@lotusengine.types).StartActionParameters

## Table of contents

### Properties

- [next](../wiki/@lotusengine.types.StartActionParameters#next)
- [triggers](../wiki/@lotusengine.types.StartActionParameters#triggers)

## Properties

### next

• `Optional` **next**: `string`

#### Defined in

[packages/types/src/types/action.ts:300](https://github.com/lotusengine/sdk/blob/f1f5297/packages/types/src/types/action.ts#L300)

___

### triggers

• `Optional` **triggers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event?` | [`Partial`](../wiki/@lotusengine.types.%3Cinternal%3E#partial)<[`Record`](../wiki/@lotusengine.types.%3Cinternal%3E#record)<[`PublicEvent`](../wiki/@lotusengine.types#publicevent), `unknown`\>\> |
| `schedule?` | [`StartActionScheduleTriggerParameters`](../wiki/@lotusengine.types.StartActionScheduleTriggerParameters) |
| `webhook?` | [`StartActionWebhookTriggerParameters`](../wiki/@lotusengine.types.StartActionWebhookTriggerParameters) |

#### Defined in

[packages/types/src/types/action.ts:295](https://github.com/lotusengine/sdk/blob/f1f5297/packages/types/src/types/action.ts#L295)
