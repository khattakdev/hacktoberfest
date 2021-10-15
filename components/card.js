import Image from "next/image";
import styles from "../styles/Card.module.css";

export default function Card() {
  return (
    <div className={styles.profile_card}>
      <div className={styles.profile_picture}>
        <Image
          alt="KhattakDev"
          src="/khattakdev.jpg"
          height="150"
          width="150"
        />
      </div>
      <h3 className={styles.profile_card_name}>Arsalan Khattak</h3>
      <p className={styles.profile_card_title}>Developer Advocate</p>
      <ul className={styles.profile_card_links}>
        <li>
          <a
            href="https://github.com/khattakdev"
            target="_blank"
            rel="noreferrer"
          >
            <Image alt="Facebook" src="/facebook.svg" height="30" width="30" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/khattakdev"
            target="_blank"
            rel="noreferrer"
          >
            <Image alt="GitHub" src="/github.svg" height="30" width="30" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/khattakdev"
            target="_blank"
            rel="noreferrer"
          >
            <Image alt="LinkedIn" src="/linkedin.svg" height="30" width="30" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/khattakdev"
            target="_blank"
            rel="noreferrer"
          >
            <Image alt="Twitter" src="/twitter.svg" height="30" width="30" />
          </a>
        </li>
      </ul>
    </div>
  );
}

{
  /* */
}
