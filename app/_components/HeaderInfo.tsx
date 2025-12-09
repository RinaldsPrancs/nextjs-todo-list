import LoginButton from "./LoginButton";
import LogoutButton from "./LogOutButton";
import { auth } from "@/lib/auth";

export default async function HeaderInfo() {
    const session = await auth();

    return (
        <div>
            {session ? <LogoutButton /> : <LoginButton />}
        </div>
    )
}