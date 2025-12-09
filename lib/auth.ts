import NextAuth,{ type DefaultSession } from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { authorizeUser } from "@/app/api/auth/authorizeUser"; // path stays same


declare module "next-auth" {
  interface Session {
    user: {
      id: string;  // Add user ID here
    } & DefaultSession["user"];
  }
}

export const {
  handlers,  // for route handlers (replaces GET/POST in the API route)
  auth,      // server-side session retrieval
  signIn,    // server-side sign-in
  signOut,   // server-side sign-out
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: authorizeUser,
    }),
  ],

  pages: {
    signIn: "/login",
    signOut: "/auth/signout",
    error: "/auth/error",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id; // attach ID to JWT
      }
      return token;
    },
    session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id, // attach ID to session
        },
      };
    },
  },
});
