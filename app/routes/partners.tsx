import type { MetaFunction } from "@remix-run/node";
import NavBar from "~/components/NavBar";

export const meta: MetaFunction = () => {
    return [
        { title: "Partners" },
        { name: "description", content: "Explore our partners and collaborations." }
    ];
};

export default function Partners() {
    return (
        <div style={{
            background: "#000",
            minHeight: "100vh",
            color: "#fff"
        }}>
            <NavBar />
        </div>
    );
}