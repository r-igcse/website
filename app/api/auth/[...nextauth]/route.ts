import { handlers } from "@/utils/auth";

export const { GET, POST } = handlers;

export const config = {
  runtime: "nodejs", // Forces Next.js to run this in a Node.js environment
};
