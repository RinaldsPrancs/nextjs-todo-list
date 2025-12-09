"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email") as string;
    const password = form.get("password") as string;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      window.location.href = "/todo";
    }
  }

  return (
    <div className="flex flex-1 items-center justify-center bg-gray-50 dark:bg-black">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-sm p-6 
               bg-white dark:bg-neutral-900
               border border-gray-200 dark:border-neutral-700
               rounded-xl shadow-sm"
      >
        <h1 className="text-2xl font-semibold text-center text-gray-900 dark:text-gray-100">
          Login
        </h1>

        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="dark:bg-neutral-800 dark:text-gray-100 dark:border-neutral-700"
        />

        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="dark:bg-neutral-800 dark:text-gray-100 dark:border-neutral-700"
        />

        <Button
          type="submit"
          className="w-full bg-black text-white dark:bg-white dark:text-black"
        >
          Login
        </Button>

        {error && (
          <p className="text-red-500 dark:text-red-400 text-sm text-center">
            {error}
          </p>
        )}
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Sign up
          </a>
        </p>
      </form>
    </div>

  );
}
