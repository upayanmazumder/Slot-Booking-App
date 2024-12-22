import React from 'react';
import sidebarStyles from "./sidebar.module.css";

const Sidebar = () => {
    return (
        <div className={sidebarStyles.sidebar}>
            <ul>
                <a href="/" ><img src="/media/sidebar/home.svg"></img></a>
                <a href="/info"><img src="/media/sidebar/notices.svg"></img></a>
                <a href="/mentors"><img src="/media/sidebar/mentors.svg"></img></a>
                <a href="/slot-booking"><img src="/media/sidebar/book-slot.svg"></img></a>
            </ul>
        </div >
    );
};

export default Sidebar;