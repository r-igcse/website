import NextAuth from "next-auth";
import PostgresAdapter from "@auth/pg-adapter";
import Discord from "next-auth/providers/discord";
import { Pool } from "@neondatabase/serverless";

export const runtime = "nodejs";

const pool = new Pool({
connectionString: process.env.DATABASE_URL, // Use single connection string for Neon
ssl: true,
});

export const { handlers, signIn, signOut, auth } = NextAuth({
adapter: PostgresAdapter(pool),
providers: [Discord],
});
