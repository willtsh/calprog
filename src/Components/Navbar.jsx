'use client';
import React from 'react';
import './navbar.css';
import { useRouter } from "next/navigation";

function Navbar () {
    const router = useRouter();
    return (
        <nav>
            <div>
                <ul className="tabs">
                    <li><a href="/Home">Home</a></li>
                    <li><button type="button" onClick={() => router.push('/vpush')}>Vertical Push</button></li>
                    <li><button type="button" onClick={() => router.push('/vpull')}>Vertical Pull</button></li>
                    <li><button type="button" onClick={() => router.push('/hpush')}>Horizontal Push</button></li>
                    <li><button type="button" onClick={() => router.push('/hpull')}>Horizontal Pull</button></li>
                </ul>
            </div>
            <div>
                <ul className="acc_options">
                    <li>Log in</li>
                    <li>Sign out</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;