import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          src="/oklogo.png"
          alt="Amplify Logo"
          width={150}
          height={150}
          priority
        />
        Ok, Bet Me
      </div>
    </main>
  );
}
