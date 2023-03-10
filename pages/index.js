import { SignOutButton } from "@clerk/nextjs";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Protected routes demo</title>
      </Head>

      <main className={styles.main}>
        <SignOutButton />
        <div className={styles.grid}>
          <Link href="/posts" className={styles.card}>
            <h2>Visit posts page &rarr;</h2>
            <p>Get started by visiting the posts page</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
