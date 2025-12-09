
import { Suspense } from 'react';
import AllUsers from './_components/GetUsers';
import OnlineUsers from './_components/GetOnlineUsers';

export default async function UsersPage() {

    return (
        <div>
            <h1>
                This is the users page!
            </h1>
            <h2>Database users:</h2>
            <Suspense fallback="Loading..">
                <AllUsers />
            </Suspense>
            <h2>Fetched online users:</h2>

            <Suspense fallback="Loading..">
                <OnlineUsers />
            </Suspense>

        </div>

    )

}