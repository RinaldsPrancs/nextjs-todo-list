import { boolean, int, timestamp, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { usersTable } from './users';

export const todoTable = mysqlTable('todo_list', {
  id: int("id").autoincrement().primaryKey(),
  content: varchar({ length: 255 }).notNull(),
  checked: boolean().notNull().default(false),
  createdAt: timestamp("created_at").defaultNow(),
  userId: int("user_id").references(()=>usersTable.id)
});

