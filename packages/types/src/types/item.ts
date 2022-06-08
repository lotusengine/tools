import { ISO8601DateTime, UUID } from './common'

export type ItemData = unknown

export type ItemModel = {
  id: UUID
  collectionId: UUID
  createdAt?: ISO8601DateTime
  updatedAt?: ISO8601DateTime
  data: ItemData
}
