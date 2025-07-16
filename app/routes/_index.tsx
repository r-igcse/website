import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "r/IGCSE Resource Repository" },
    { name: "description", content: "A comprehensive resource repository for IGCSE students." },
  ];
};

export default function Index() {
  return (
    <div className="h-screen w-screen bg-black" />
  );
}