"use server";

import { db } from "@/db";
import { todoTable } from "@/db/schema/todo_table";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function toggleTodo(id: number, checked: boolean) {
  await db
    .update(todoTable)
    .set({ checked })
    .where(eq(todoTable.id, id));


    revalidatePath("/todo");
}