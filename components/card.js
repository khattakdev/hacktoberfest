import Image from "next/image";
import styles from "../styles/Card.module.css";

export default function Card({ contributor } = props) {
  return (
    <div className={styles.profile_card}>
      <div className={styles.profile_picture}>
        <Image
          alt="KhattakDev"
          src={contributor.picture}
          height="150"
          width="150"
        />
      </div>
      <h3 className={styles.profile_card_name}>{contributor.name}</h3>
      <p className={styles.profile_card_title}>{contributor.title}</p>
      <ul className={styles.profile_card_links}>
        <li>
          <a href={contributor.facebook} target="_blank" rel="noreferrer">
            <Image
              alt="Facebook"
              src="/logos/facebook.svg"
              height="30"
              width="30"
            />
          </a>
        </li>
        <li>
          <a href={contributor.github} target="_blank" rel="noreferrer">
            <Image
              alt="GitHub"
              src="/logos/github.svg"
              height="30"
              width="30"
            />
          </a>
        </li>
        <li>
          <a href={contributor.linkedin} target="_blank" rel="noreferrer">
            <Image
              alt="LinkedIn"
              src="/logos/linkedin.svg"
              height="30"
              width="30"
            />
          </a>
        </li>
        <li>
          <a href={contributor.twitter} target="_blank" rel="noreferrer">
            <Image
              alt="Twitter"
              src="/logos/twitter.svg"
              height="30"
              width="30"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

{
  /* */
}
