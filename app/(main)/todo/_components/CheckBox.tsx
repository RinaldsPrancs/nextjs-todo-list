"use client"

import { useActionState } from 'react';
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useTransition, useState } from "react";
import { toggleTodo } from '../_actions/toggleTodo';

export default function CheckBox({ id, initialChecked }:
    {
        id: number;
        initialChecked: boolean;
    }
) {

    const [checked, setChecked] = useState(initialChecked);
    const [isPending, startTransition] = useTransition();

    function handleChange(nextValue: boolean) {
        setChecked(nextValue);

        startTransition(() => {
            toggleTodo(id, nextValue);
        });
    }

    return (
        <div>
            <Checkbox
                id={`todo-${id}`}
                checked={checked}
                onCheckedChange={handleChange}
                disabled={isPending}
            />
        </div>
    )
}