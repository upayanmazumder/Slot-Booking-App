import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Home</h1>
        <p>Welcome to the slot booking app</p>
      </main>
    </div>
  );
}

export const metadata = {
  title: "Slot Booking App - Home",
  description: "A simple slot booking app",
};