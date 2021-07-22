import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <nav className={styles.headerContainer}>
      <Link className={styles.link} to="/">Home Page</Link>
      <Link className={styles.link} to="/upload">Upload Page</Link>
      <Link className={styles.link} to="/users">Users Page</Link>
    </nav>
  );
}
