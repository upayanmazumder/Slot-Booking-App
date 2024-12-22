"use client"

import React from 'react';
import styles from "../page.module.css";
import SlotSelector from '../../components/slot-selector/slot-selector';

const MentorsPage = () => {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <SlotSelector />
            </main>
        </div>
    );
};

export default MentorsPage;