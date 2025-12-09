
type User = {
    id: number;
    name: string;
    username: string;
    email: string;
};


export default async function OnlineUsers() {

    const onlineUsersRaw = await fetch('https://jsonplaceholder.typicode.com/users', { next: { tags: ['users'] } })

    const onlineUsers = (await onlineUsersRaw.json()) as User[];

    return (
        <div>
            <ul>
                {onlineUsers.map((user) => (
                    <li key={user.id} className="border rounded-lg p-4 bg-white shadow-sm">
                        <div className="font-semibold dark:text-green-600">{user.name}</div>
                        <div className="text-sm text-gray-600 dark:text-green-600">{user.email}</div>
                        <div className="text-sm dark:text-green-600">Username: {user.username ?? '—'}</div>
                    </li>
                ))}
            </ul>
        </div>
    )

}