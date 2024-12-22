import React from 'react';
import Link from 'next/link';
import headerStyles from "./header.module.css";
import { FaBell } from 'react-icons/fa';
import Image from 'next/image';
import SignIn from '../auth/signin';

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <SignIn />
            <ul>
                <li>
                    <a href="#notifications">
                        <FaBell />
                    </a>
                </li>
                <li>
                    <a href="#profile">
                        <Image src="/media/unknown-person.svg" alt="User" width={50} height={50} />
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Header;