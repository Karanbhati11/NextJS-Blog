// components/Navbar.js

import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" legacyBehavior>
          <a>Logo</a>
        </Link>
      </div>
      <div className={styles.navigation}>
        <ul>
          <li>
            <Link href="/tags"legacyBehavior>
              <a>Tags</a>
            </Link>
          </li>
          <li>
            <Link href="/author"legacyBehavior>
              <a>Author</a>
            </Link>
          </li>
          <li>
            <Link href="/contact"legacyBehavior>
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/search"legacyBehavior>
              <a>Search</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
