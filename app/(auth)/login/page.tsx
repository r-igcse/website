import { LuMail } from "react-icons/lu";
import { signIn } from "@/lib/auth";
import Button from "@/components/ui/Button";

export default function Login() {
	return (
		<div className="flex flex-col items-center justify-center h-screen w-screen">
			<h2>Welcome Back</h2>
			<div className="space-y-8 pt-4 w-102">
				<form className="flex flex-col gap-3 w-full">
					<Button type="submit"
							className="bg-white text-primary-foreground"
							size="lg"
					>
						Log in with Google
					</Button>

					<Button type="submit"
							className="bg-discord text-white"
							size="lg"
							formAction={async () => {
								"use server";
								console.log("signing in with discord");
								await signIn("discord", {redirectTo: "/"});
							}}
					>
						Log in with Discord
					</Button>
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
					<Button type="submit" size="lg" className="gap-2">
						<LuMail className="size-6"/>
						Magic Link
					</Button>
				</form>
			</div>
		</div>
	);
}
