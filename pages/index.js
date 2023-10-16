import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import Logo from "../public/logos/logo.svg";
import SideLogo from "../public/logos/H-icon-dark.svg";

export default function Home() {
  return (
    <>
      <div className={styles.side_logo}>
        <Image layout="fill" src={SideLogo} alt="Hacktoberfest 2023" />
      </div>
      <div className={styles.container}>
        <Head>
          <title>Hacktoberfest 2023</title>
          <meta
            name="description"
            content="Hacktoberfest Pakistan by KhattakDev"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.logo}>
            <Image layout="fill" src={Logo} alt="Hacktoberfest 2023" />
          </div>
          <p className={styles.hero_desc}>
            Your Gateway to the Open Source Community
          </p>

          <p className={styles.desc}>
            Hacktoberfest, in its 8th year, is a month-long celebration of open
            source software run by DigitalOcean. During the month of October, we
            invite you to join open-source software enthusiasts, beginners, and
            the developer community by contributing to open-source projects. You
            can do this in a variety of ways.
          </p>

          <Link href="/contributors" passHref>
            <button className={[styles.button, styles.center].join(" ")}>
              Contributors list
            </button>
          </Link>
        </main>
      </div>
    </>
  );
}
