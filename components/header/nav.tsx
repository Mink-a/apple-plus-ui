"use client";

import Link from "next/link";
import styles from "../../styles/nav.module.scss";

import React from "react";

const navLinks = [
  { text: "Store" },
  { text: "Mac" },
  { text: "iPad" },
  { text: "iPhone" },
  { text: "Watch" },
  { text: "AirPods" },
  { text: "TV & Home" },
  { text: "Only on apple" },
  { text: "Accessories" },
  { text: "Support" },
];

const Navbar = () => {
  return (
    <>
      <nav className={styles["large-nav"]}>
        <ul>
          <li>
            <Link href='/' className={styles["apple-icon"]} />
          </li>

          {navLinks.map((navLink, index) => (
            <li key={index}>
              <Link href='/'>
                <span>{navLink.text}</span>
              </Link>
            </li>
          ))}

          <li>
            <Link href='/' className={styles["search-icon"]} />
          </li>

          <li>
            <Link href='/' className={styles["bag-icon"]} />
          </li>
        </ul>
      </nav>

      <nav className={styles["sticky-nav"]}>
        <div>
          <Link href='/'>Apple TV+</Link>

          <button>Stream now</button>
        </div>
      </nav>

      {/* <div className={styles["new-content"]}>
        <p>
          MLS Season Pass. Stream every Major League Soccer match. Coming soon.*
          <Link href='/'> Notify me</Link>
        </p>
      </div> */}
    </>
  );
};

export default Navbar;

// export default function Nav() {
//   return (
//     <nav className={styles.nav}>
//       <div className={styles.navItems}>
//         <div className={`${styles.brand}`}>
//           <Link href={"/"}>Apple TV+</Link>
//         </div>
//         <div className={styles.navItem}>
//           <Link href={"/"}>Stream now</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }
