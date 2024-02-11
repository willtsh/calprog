'use client';
import React from 'react';
import './navbar.css';

function Navbar () {
    return (
        <nav>
            <div>
                <ul className="tabs">
                    <li><a>Vertical Push</a></li>
                    <li><a>Vertical Pull</a></li>
                    <li><a>Horizontal Push</a></li>
                    <li><a>Horizontal Pull</a></li>
                </ul>
            </div>
            <div id="account_options">

            </div>
        </nav>
    )
}

export default Navbar;