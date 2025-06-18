import { pgTable, varchar } from 'drizzle-orm/pg-core'
import { createdAt, updatedAt } from '../schemaHelpers'
import { relations } from 'drizzle-orm'
import { UserResumeTable } from './userResume'
import { UserNotificationSettingsTable } from './userNotificationSettings'
import { OrganizationUserSettingsTable } from './organizationUserSettings'

export const UserTable = pgTable('users', {
  id: varchar().primaryKey(),
  name: varchar().notNull(),
  imageUrl: varchar().notNull(),
  email: varchar().notNull().unique(),
  createdAt,
  updatedAt
})

export const userRelations = relations(UserTable, ({ one, many }) => ({
  // We only need to specify the table for the one to one relationships because the key is in the other table i.e. userNotificationSettings or UserResume which quote the userId
  notificationSettings: one(UserNotificationSettingsTable),
  resume: one(UserResumeTable),
  organizationUserSettings: many(OrganizationUserSettingsTable)
}))
