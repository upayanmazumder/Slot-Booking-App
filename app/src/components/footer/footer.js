import React from 'react';
import footerStyles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            Slot Booking App | <a href="https://github.com/upayanmazumder/Slot-Booking-App">Github Repository</a> | <a href="https://upayan.dev">Portfolio</a>
        </footer>
    );
};

export default Footer;