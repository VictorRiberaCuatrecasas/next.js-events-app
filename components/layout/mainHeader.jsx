import Link from "next/link";
import styles from "./mainHeader.module.css";

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse all Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
