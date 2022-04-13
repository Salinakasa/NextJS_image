import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to
          <br />
          <a href="https://nextjs.org/docs/api-reference/next/image">
            Next.js Image Component!
          </a>
        </h1>
        <div className="mainimg">
          <Image src="/image1.jpg" width={600} height={400} alt="image1" />
        </div>
        <div className="mainimg">
          <img src="/image1.jpg" alt="image2" width="600" />
        </div>
      </main>
    </div>
  );
}
