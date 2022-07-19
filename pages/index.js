import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NOZE</title>
        <link
          rel="icon"
          type="image/svg"
          href="https://getnoze.com/wp-content/themes/noze/noze/assets/img/favicon.svg"
        />
      </Head>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by NOZE
        </a>
      </footer>
    </div>
  );
}
