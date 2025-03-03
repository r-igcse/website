import NextAuth from "next-auth"
import PostgresAdapter from "@auth/pg-adapter"
import Discord from "next-auth/providers/discord"
import { Pool } from "pg"

export const runtime = "nodejs"

const pool = new Pool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PostgresAdapter(pool),
    providers: [Discord],
})