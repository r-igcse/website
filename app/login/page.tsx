import { LuMail } from "react-icons/lu";
import { signIn } from "@/utils/auth";

export default function Login() {
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
					type="submit"
					className="w-full py-4 bg-discord rounded-lg text-white text-xl hover:cursor-pointer"
					formAction={async () => {
						"use server";
						await signIn("discord");
					}}
				>
					Log in with Discord
				</button>

				<input
					className="border-2 border-white rounded-lg w-full h-14 mt-5 px-3 focus:outline-none"
					type="text"
					placeholder="example@xyz.com"
					name="email"
				/>
				<button
					type="submit"
					className="w-full py-4 bg-destructive rounded-lg text-white text-xl hover:cursor-pointer inline-flex gap-4 justify-center items-center"
					formAction={async (formData) => {
						"use server";
						// change from mailgun to whatever later
						await signIn("resend", formData);
					}}
				>
					<LuMail className="size-6" />
					Magic Link
				</button>
			</div>
		</div>
	);
}
