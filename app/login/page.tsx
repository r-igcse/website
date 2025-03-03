"use client";

import { useState } from "react";

export default function Login() {
	const [email, setEmail] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen w-screen">
			<h2>Welcome Back</h2>
			<div className="flex flex-col items-center justify-center gap-3 pt-4 w-102">
				<button
					type="button"
					className="w-full py-4 bg-white rounded-lg text-black text-xl hover:cursor-pointer"
				>
					Log in with Google
				</button>
				<button
					type="button"
					className="w-full py-4 bg-discord rounded-lg text-white text-xl hover:cursor-pointer"
				>
					Log in with Discord
				</button>
				<input
					className="border-2 border-white rounded-lg w-full h-14 mt-5 px-3 focus:outline-none"
					type="text"
					placeholder="example@xyz.com"
					value={email}
					onChange={handleChange}
				/>

				<button
					type="button"
					className="w-full py-4 bg-destructive rounded-lg text-white text-xl hover:cursor-pointer"
				>
					Log in with Discord
				</button>
			</div>
		</div>
	);
}
