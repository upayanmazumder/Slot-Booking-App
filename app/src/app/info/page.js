import Image from "next/image";
import styles from "../page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>Info</h1>
                <p>Welcome to the slot booking app. This application allows you to book slots for various activities seamlessly.</p>
                <section className={styles.section}>
                    <h2>Features</h2>
                    <ul>
                        <li>Easy slot booking</li>
                        <li>Google OAuth2 authentication</li>
                        <li>Responsive design</li>
                    </ul>
                </section>
                <section className={styles.section}>
                    <h2>Links</h2>
                    <ul>
                        <li><a href="https://github.com/upayanmazumder/Slot-Booking-App" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
                        <li><a href="https://slot-booking-app.upayan.dev/" target="_blank" rel="noopener noreferrer">Live Application</a></li>
                    </ul>
                </section>
            </main>
        </div>
    );
}
