import { db } from "@/db/index";
import { usersTable } from "@/db/schema/users";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";

export async function authorizeUser(
  credentials: Record<"email" | "password", string> | undefined
) {
  const email = credentials?.email;
  const password = credentials?.password;

  if (!email || !password) return null;

  const user = await db
    .select({
      id: usersTable.id,
      email: usersTable.email,
      password: usersTable.password,
      name: usersTable.name,
    })
    .from(usersTable)
    .where(eq(usersTable.email, email.toLowerCase().trim()))
    .limit(1)
    .then(rows => rows[0] ?? null);

  if (!user) return null;

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return null;

  // IMPORTANT: NextAuth requires id: string
  return {
    id: String(user.id),
    email: user.email,
    name: user.name,
  };
}
