"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useActionState } from "react";
import { addItem } from "../_actions/addItem";
export default function AddNewItem(
) {

    const [state, formAction, isPending] = useActionState(addItem, undefined);

    return (
        <div>
            <form className="flex w-full max-w-md mx-auto">
                <Input
                    name="content"
                    placeholder="Todo..."
                    className="flex-1 rounded-r-none"
                />
                <Button
                    formAction={formAction}
                    disabled={isPending}
                    className="rounded-l-none"
                >
                    {isPending ? "Adding…" : "+"}
                </Button>
               
            </form>
            <div className="flex text-red-500 dark:text-red-800 items-center justify-center">{state?.error }</div>
        </div>
    )
}