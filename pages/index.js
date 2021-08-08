import TransitionsModal from '../components/Modal';
import Card from '../components/Card';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <TransitionsModal></TransitionsModal>
      <Card></Card>
      <footer className={styles.footer}>
          Powered by 梁梁💗
      </footer>
    </>
  );
}
