import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

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

      <Script src="/accordion.js"></Script>
    </div>
  );
}
