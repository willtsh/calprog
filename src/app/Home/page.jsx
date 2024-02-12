'use client';
import "./home.css";
import Navbar from "../../Components/Navbar";
import ResourceBar from "../../Components/ResourceBar";

export default function Page() {
    return (
        <div className="container_home">
            <Navbar />
            <ResourceBar />
        </div>
    )
}