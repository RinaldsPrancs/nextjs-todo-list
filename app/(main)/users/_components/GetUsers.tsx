"use server"
import { db } from '@/db';
import { usersTable } from '@/db/schema/users';


export default async function AllUsers() {

    const users = await db.select().from(usersTable);

    if (users.length === 0) {
        return <p className="text-gray-500">No users found.</p>
    }


    return (
        <ul className="space-y-4">
            {users.map((user) => (
                <li key={user.id} className="border rounded-lg p-4 bg-white shadow-sm">
                    <div className="font-semibold dark:text-green-600">{user.name}</div>
                    <div className="text-sm text-gray-600 dark:text-green-600">{user.email}</div>
                    <div className="text-sm dark:text-green-600">Age: {user.age ?? '—'}</div>
                </li>
            ))}
        </ul>
    )

}