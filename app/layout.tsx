import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import './globals.css';
import {auth, signOut} from "@/lib/auth";
import Link from "next/link";

const dmSans = DM_Sans({
	variable: "--font-dm-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "r/IGCSE Resource Repository",
	description: "The official r/IGCSE Resource Repository",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth();


	return (
		<html lang="en">
			<body className={`${dmSans.variable} antialiased`}>
				<nav className="fixed top-0 left-0 h-16 w-full bg-background border-b-border border-b-1 px-5 inline-flex justify-between place-items-center">
					<div>
						<Link href="/">
							<h1 className="text-3xl text-red-400 select-none">
								r/IGCSE
							</h1>
						</Link>
					</div>
					{
						session ? (
							<div className="flex gap-2">
								<p>{session.user?.email}</p>
								<form action={async () => {
									"use server"
									await signOut()
								}}>
									<button className="cursor-pointer">
										Logout
									</button>
								</form>
							</div>
						) : (
							<div>
								<Link href="/login">
									Login
								</Link>
							</div>
						)
					}

				</nav>
				{children}
			</body>
		</html>
	);
}
