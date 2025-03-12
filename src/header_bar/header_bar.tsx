"use client";

import { Typography } from "@mui/material";
import styles from "./styles.module.css";
import Image from "next/image";

export default function Header_Bar() {
  return (
    <header className={styles.headerMain}>
      <h1 className={`${styles.nameText} text-3xl pixelated`}>Kan Yi Xin</h1>
      <div className={styles.lazybackpackerLinkContainer}>
        <Typography variant='h6' className={styles.lazybackpackerText}>The Lazy Backpacker</Typography>
        <Image
          src='/lazy-backpack-logo.png'
          alt='lazy backpack'
          width={50}
          height={50}
        />
      </div>
    </header>
  );
}
