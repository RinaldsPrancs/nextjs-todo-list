import { Suspense } from "react";
import TodoList from "./_components/todoList";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
export default async function TodoPage() {

    const session = await auth();

    if (!session) {
        redirect("/login");
    }
    
    return (
        <div className="flex flex-col items-center min-h-screen space-y-8 p-8">

            <div className="w-full text-center">
                <h1 className="font-sans text-8xl">TODO List</h1>
            </div>

            <Suspense fallback="loading...">
                <TodoList userId={session.user.id} />
            </Suspense>
        </div>

    )
}