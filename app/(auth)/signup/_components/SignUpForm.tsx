"use client"

import { useActionState } from "react"
import signup from "./signup"

export default function SignupForm() {

    const [state, formAction, pending] = useActionState(signup, undefined);

    return (

        <form
            action={formAction}
            className="flex flex-col gap-4 w-full max-w-sm p-6 
               bg-white dark:bg-neutral-900 
               border border-gray-200 dark:border-neutral-700
               rounded-xl shadow-sm"
        >
            <h1 className="text-2xl font-semibold text-center text-gray-900 dark:text-gray-100">
                Sign Up
            </h1>

            <div className="flex flex-col gap-1">
                <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                    Name
                </label>
                <input
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="border border-gray-300 dark:border-neutral-700
                   bg-white dark:bg-neutral-800
                   text-gray-900 dark:text-gray-100
                   rounded-md px-3 py-2"
                    required
                />
            </div>

            <div className="flex flex-col gap-1">
                <label
                    htmlFor="age"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                    Age
                </label>
                <input
                    id="age"
                    name="age"
                    placeholder="Age"
                    className="border border-gray-300 dark:border-neutral-700
                   bg-white dark:bg-neutral-800
                   text-gray-900 dark:text-gray-100
                   rounded-md px-3 py-2"
                    required
                />
            </div>

            <div className="flex flex-col gap-1">
                <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 dark:border-neutral-700
                   bg-white dark:bg-neutral-800
                   text-gray-900 dark:text-gray-100
                   rounded-md px-3 py-2"
                    required
                />
            </div>

            <div className="flex flex-col gap-1">
                <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                    Password
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="border border-gray-300 dark:border-neutral-700
                   bg-white dark:bg-neutral-800
                   text-gray-900 dark:text-gray-100
                   rounded-md px-3 py-2"
                    required
                />
            </div>

            <button
                disabled={pending}
                type="submit"
                className="w-full py-2 rounded-md 
                 bg-black text-white 
                 dark:bg-white dark:text-black
                 disabled:opacity-50"
            >
                {pending ? "Signing up..." : "Sign Up"}
            </button>

            {state?.error && (
                <p className="text-red-500 dark:text-red-400 text-sm text-center">
                    {state.error}
                </p>
            )}
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <a
                    href="/login"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                    Log in
                </a>
            </p>
        </form>

    )
}