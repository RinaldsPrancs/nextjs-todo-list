"use client"
import { Button } from "@/components/ui/button"
import { removeItem } from "../_actions/removeItem";
export default function RemoveButton({ id }: { id: number }) {

    return (
        <div>
            <Button variant="destructive" onClick={() => {removeItem(id)}}>-</Button>
        </div>
    )
}