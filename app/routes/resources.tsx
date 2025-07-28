import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Resources" },
        { name: "description", content: "Explore our resources and materials." }
    ];
};

export default function Resources() {
    return (
        <div style={{
            background: "#000",
            minHeight: "100vh",
            color: "#fff"
        }}>
        </div>
    );
}