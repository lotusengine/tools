import { ActionResponseStatus } from "./action";
import { UUID, ISO8601DateTime } from "./common";

export type LogModel = {
  id: UUID
  processId: UUID
  workflowId: UUID
  triggeredAt: ISO8601DateTime
  status: ActionResponseStatus
  name: string
  type: string
  result: unknown
}


export type LogType = {
  id: UUID
  processId: UUID
  workflowId: UUID
  triggeredAt: ISO8601DateTime
  status: ActionResponseStatus
  name: string
  type: string
  result: string
}
