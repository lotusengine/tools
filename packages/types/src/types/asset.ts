import { ISO8601DateTime, UUID } from './common'

export type AssetModel = {
  id: UUID
  serviceId: UUID
  createdAt?: ISO8601DateTime
  updatedAt?: ISO8601DateTime
  label?: string
  type?: string
  size?: number
  path?: string
}
