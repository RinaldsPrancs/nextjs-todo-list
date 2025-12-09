// src/actions/addUser.ts
'use server';

import { db } from '@/db/index';
import { usersTable } from '@/db/schema/users';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


export async function addUser(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const ageRaw = formData.get('age') as string;

    const age = ageRaw ? parseInt(ageRaw, 10) : null;

    if (!name || !email || !age) {
        throw new Error('All fields are required');
    }

    // Optional: check if email already exists
    const existingUser = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.email, email))
        .limit(1);

    if (existingUser.length > 0) {
        throw new Error('Email already taken');
    }

    const password ="12345678"

    await db.insert(usersTable).values({
        name,
        email,
        age,
        password
    });

    revalidatePath('/users');
    redirect('/users');



}