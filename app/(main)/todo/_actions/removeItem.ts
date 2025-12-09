"use server";

import { db } from "@/db";
import { todoTable } from "@/db/schema/todo_table";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function removeItem(id: number) {
  await db.delete(todoTable).where(eq(todoTable.id, id));
  revalidatePath("/todo");
}