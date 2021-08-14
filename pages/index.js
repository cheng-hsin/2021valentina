import TransitionsModal from '../components/Modal';
import Card from '../components/Card';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>ティナ大好き!</title>
      </Head>
      <TransitionsModal></TransitionsModal>
      <Card></Card>
      <footer className={styles.footer}>2021 Powered by 梁梁😻</footer>
    </>
  );
}
