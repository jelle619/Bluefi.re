import React, { useState } from 'react';
import Link from 'next/link'
import styles from "./layout.module.css"
import { MdMenu } from 'react-icons/md';

export default function Layout({ children }) {

  const [navigationVisibility, setNavigationVisibility] = useState(false);

  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <span style={{cursor: "pointer"}} onClick={() => setNavigationVisibility(!navigationVisibility)}>Menu</span>
        <span>Bluefi.re</span>
        <div className={styles.dropdown}>
          <span>More</span>
          <div className={styles["dropdown--content"]}>
            <Link href="/contact">Contact</Link>
            <Link href="/legal">Legal</Link>
            <Link href="/">GitHub</Link>
          </div>
        </div>
      </div>
      <div className={[styles.navigation, navigationVisibility ? styles["navigation--visible"] : styles["navigation--invisible"]].join(' ')}>
        <nav>
          <ul>
            <li><Link onClick={() => setNavigationVisibility(false)} href="/">Home</Link></li>
            <li><Link onClick={() => setNavigationVisibility(false)} href="/posts">Posts</Link></li>
            <li><Link onClick={() => setNavigationVisibility(false)} href="/postage">Postage</Link></li>
            <li>Travel</li>
            <ul>
              <li><Link onClick={() => setNavigationVisibility(false)} href="/travel/countries">Countries</Link></li>
              <li><Link onClick={() => setNavigationVisibility(false)} href="/travel/places">Places</Link></li>
              <li><Link onClick={() => setNavigationVisibility(false)} href="/travel/geocaching">Geocaching</Link></li>
            </ul>
            <li>Art</li>
            <ul>
              <li><Link onClick={() => setNavigationVisibility(false)} href="/art/commissions">Commissions</Link></li>
              <li><Link onClick={() => setNavigationVisibility(false)} href="/art/personal">Personal</Link></li>
            </ul>
            <li>Hoard</li>
            <ul>
              <li><Link onClick={() => setNavigationVisibility(false)} href="/hoard/movies">Movies</Link></li>
              <li><Link onClick={() => setNavigationVisibility(false)} href="/hoard/games">Games</Link></li>
              <li><Link onClick={() => setNavigationVisibility(false)} href="/hoard/books">Books</Link></li>
            </ul>
          </ul>
        </nav>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}