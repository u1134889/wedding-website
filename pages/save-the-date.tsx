import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function SaveTheDate() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Save the Date</title>
        <meta name="description" content="Save the date for Sitjar-Rogosienski wedding 2024" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Sitjar-Rogosienski Wedding 2024
        </h1>

        <h3>When</h3>
        <p>May 4th, 2024</p>

        <h3>Where</h3>
        <p><a href="https://goo.gl/maps/UbcXZnsv7RJ9Gjsc9" target="_blank" rel="noopener noreferrer">South Shore Pavilion, Milwaukee, WI</a></p>

        
      </main>
    </div>
  );
}