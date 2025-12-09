"use server"

import { db } from '@/db/index';
import { usersTable } from '@/db/schema/users';
import { eq } from 'drizzle-orm';
import { signIn } from "@/lib/auth";
import bcrypt from 'bcrypt';

export default async function signup(previousState: unknown, formData: FormData) {

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const ageRaw = formData.get('age') as string;
    const passwordRaw = formData.get('password') as string;

    const password = await bcrypt.hash(passwordRaw, 10);

    const age = ageRaw ? parseInt(ageRaw, 10) : null;

    if (!name || !email || !age) {
        return { error: "All fields are required" }
    }

    const existingUser = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.email, email))
        .limit(1);

    if (existingUser.length > 0) {
        return { error: "User already exists" }
    }

    await db.insert(usersTable).values({
        name,
        email,
        age,
        password
    });

    await signIn("credentials", {
        email,
        password: passwordRaw,
        redirectTo: "/todo",
    });

}