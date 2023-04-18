import React, { useState } from 'react';
import Link from 'next/link'
import styles from "./layout.module.css"

import { MdMenu, MdHome, MdFeed, MdMail, MdPublic, MdPinDrop, MdBorderColor, MdRateReview, MdMovie, MdGamepad, MdBook } from 'react-icons/md';
import { RiTreasureMapFill } from 'react-icons/ri';

export default function Layout({ children }) {

  const [navigationVisibility, setNavigationVisibility] = useState(false);

  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <span className={styles["header__item"]} style={{cursor: "pointer"}} onClick={() => setNavigationVisibility(!navigationVisibility)}>Menu</span>
        <span className={styles["header__item"]}>Bluefi.re</span>
        <div className={`${styles["header__item"]} ${styles.dropdown}`}>
          <span>More</span>
          <div className={styles["dropdown__content"]}>
            <Link href="/contact">Contact</Link>
            <Link href="/legal">Legal</Link>
            <Link target="_blank" href="https://github.com/jelle619/bluefi.re">GitHub</Link>
          </div>
        </div>
      </div>
      <div className={[styles.navigation, navigationVisibility ? styles["navigation--visible"] : styles["navigation--invisible"]].join(' ')}>
        <nav>
          <ul className={styles["navigation__list"]}>
            <li><MdHome/> <Link onClick={() => setNavigationVisibility(false)} href="/">Home</Link></li>
            <li><MdFeed/> <Link onClick={() => setNavigationVisibility(false)} href="/posts">Posts</Link></li>
            <li><MdMail/> <Link onClick={() => setNavigationVisibility(false)} href="/postage">Postage</Link></li>
            <li>Travel</li>
            <ul>
              <li><MdPublic/> <Link onClick={() => setNavigationVisibility(false)} href="/travel/countries">Countries</Link></li>
              <li><MdPinDrop/> <Link onClick={() => setNavigationVisibility(false)} href="/travel/places">Places</Link></li>
              <li><RiTreasureMapFill/> <Link onClick={() => setNavigationVisibility(false)} href="/travel/geocaching">Geocaching</Link></li>
            </ul>
            <li>Art</li>
            <ul>
              <li><MdRateReview/> <Link onClick={() => setNavigationVisibility(false)} href="/art/commissions">Commissions</Link></li>
              <li><MdBorderColor/> <Link onClick={() => setNavigationVisibility(false)} href="/art/personal">Personal</Link></li>
            </ul>
            <li>Hoard</li>
            <ul>
              <li><MdMovie/> <Link onClick={() => setNavigationVisibility(false)} href="/hoard/movies">Movies</Link></li>
              <li><MdGamepad/> <Link onClick={() => setNavigationVisibility(false)} href="/hoard/games">Games</Link></li>
              <li><MdBook/> <Link onClick={() => setNavigationVisibility(false)} href="/hoard/books">Books</Link></li>
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