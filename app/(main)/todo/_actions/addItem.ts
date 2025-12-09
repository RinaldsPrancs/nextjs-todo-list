"use server";

import { db } from "@/db";
import { todoTable } from "@/db/schema/todo_table";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function addItem(
    previousState: { error?: string } | undefined,
    formData: FormData) {

    const session = await auth()
    const userId = Number(session?.user.id);
    const content = formData.get("content") as string;

    if (!content || content.trim().length === 0) {
        return { error: "Todo cannot be empty" }
    }

        await db.insert(todoTable).values({
            content,
            userId 
        });

    revalidatePath("/todo");
}