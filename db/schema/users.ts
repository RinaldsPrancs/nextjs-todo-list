import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
export const usersTable = mysqlTable('users', {
  id: int("id").autoincrement().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  age: int().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
});

