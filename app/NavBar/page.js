'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/app/Button/page';
import DropDown from '@/app/DropDown/page';
import '@/app/NavBar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <div className="nav-left">
                <Link href="/" className="title">
                    Autonomous Lawnmower
                </Link>
                <Link href="/">
                    Home
                </Link>
            </div>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                {/* Add menu icon or button here */}
            </div>
            <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
                <DropDown />
                <div className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
                    <Button />
                </div>
            </ul>
            {/* Mobile nav */}
            <ul
                className={`
                    md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
                    duration-500 ${menuOpen ? "left-0" : "left-[-100%]"}
                `}
            >
                <li>
                    <Link href="/" className="py-7 px-3 inline-block">
                        Home
                    </Link>
                </li>
                <DropDown />
                <div className="py-5">
                    <Button />
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
