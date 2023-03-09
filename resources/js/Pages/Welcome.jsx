import React from "react";
import Layout from "@/Layouts/Layout";
import Tile from "@/Components/Tile";

export default function Welcome() {
    return (
        <Layout>
            <div className="flex justify-center items-center">
                <div className="text-6xl py-16 font-bold title">
                    Discover the TRIL stack
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex-1 max-w-6xl grid grid-cols-4 gap-8">
                    <Tile title="Tailwind"/>
                    <Tile title="React"/>
                    <Tile title="Inertia"/>
                    <Tile title="Laravel"/>
                </div>
            </div>
        </Layout>
    );
}
