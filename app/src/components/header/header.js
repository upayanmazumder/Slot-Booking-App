import React from 'react';
import Link from 'next/link';
import headerStyles from "./header.module.css";
import { FaBell } from 'react-icons/fa';
import Image from 'next/image';
import Auth from '../auth/auth';

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <ul>
                <li>
                    <a href="#notifications">
                        <FaBell />
                    </a>
                </li>
                <li>
                    <Auth />
                </li>
            </ul>
        </header>
    );
};

export default Header;