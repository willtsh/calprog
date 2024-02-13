'use client';
import React from 'react';
import './navbar.css';

function Navbar () {
    return (
        <nav>
            <div>
                <ul className="tabs">
                    <li><a href="./Home">Vertical Push</a></li>
                    <li><a href="./Home">Vertical Pull</a></li>
                    <li><a href="./Home">Horizontal Push</a></li>
                    <li><a href="./Home">Horizontal Pull</a></li>
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