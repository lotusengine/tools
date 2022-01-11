# Interface: StartActionParameters

[@lotusengine/stacker](../wiki/@lotusengine.stacker).[<internal>](../wiki/@lotusengine.stacker.%3Cinternal%3E).StartActionParameters

## Table of contents

### Properties

- [next](../wiki/@lotusengine.stacker.%3Cinternal%3E.StartActionParameters#next)
- [triggers](../wiki/@lotusengine.stacker.%3Cinternal%3E.StartActionParameters#triggers)

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
| `event?` | [`Partial`](../wiki/@lotusengine.stacker.%3Cinternal%3E#partial)<[`Record`](../wiki/@lotusengine.stacker.%3Cinternal%3E#record)<[`PublicEvent`](../wiki/@lotusengine.stacker.%3Cinternal%3E#publicevent), `unknown`\>\> |
| `schedule?` | [`StartActionScheduleTriggerParameters`](../wiki/@lotusengine.stacker.%3Cinternal%3E.StartActionScheduleTriggerParameters) |
| `webhook?` | [`StartActionWebhookTriggerParameters`](../wiki/@lotusengine.stacker.%3Cinternal%3E.StartActionWebhookTriggerParameters) |

#### Defined in

[packages/types/src/types/action.ts:295](https://github.com/lotusengine/sdk/blob/f1f5297/packages/types/src/types/action.ts#L295)
