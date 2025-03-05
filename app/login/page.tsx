import { LuMail } from "react-icons/lu";
import { signIn } from "@/lib/auth";

export default function Login() {
	return (
		<div className="flex flex-col items-center justify-center h-screen w-screen">
			<h2>Welcome Back</h2>
			<div className="space-y-8 pt-4 w-102">
				<form className="flex flex-col gap-3 w-full">
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
							console.log("signing in with discord");
							await signIn("discord", {redirectTo: "/"});
						}}
					>
						Log in with Discord
					</button>
				</form>

				<form className="flex flex-col gap-3 w-full" action={async (formData) => {
					"use server";
					// change from resend to whatever later
					await signIn("resend", formData, {redirectTo: "/"});
				}}>
					<input
						className="border-2 border-white rounded-lg w-full h-14 px-3 focus:outline-none"
						type="text"
						placeholder="example@xyz.com"
						required
						name="email"
					/>
					<button
						type="submit"
						className="w-full py-4 bg-destructive rounded-lg text-white text-xl hover:cursor-pointer inline-flex gap-4 justify-center items-center"
					>
						<LuMail className="size-6"/>
						Magic Link
					</button>
				</form>
			</div>
		</div>
	);
}
