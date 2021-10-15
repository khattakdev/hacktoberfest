import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Logo from "../public/logo.svg";
import SideLogo from "../public/H-icon-dark.svg";
import Card from "../components/card";

export default function Home() {
  return (
    <>
      <div className={styles.side_logo}>
        <Image layout="fill" src={SideLogo} alt="Hacktoberfest 2021" />
      </div>
      <div className={styles.container}>
        <Head>
          <title>Hacktoberfest 2021</title>
          <meta
            name="description"
            content="Hacktoberfest Pakistan by KhattakDev"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.logo}>
            <Image layout="fill" src={Logo} alt="Hacktoberfest 2021" />
          </div>

          <p className={styles.hero_desc}>Contributors list</p>

          <div className="profile_cards">
            <Card />
          </div>
        </main>
      </div>
    </>
  );
}
