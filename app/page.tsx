import Image from "next/image";
import styles from "./page.module.css";

const introduction =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum placerat aliquam. Morbi a laoreet quam. Nunc dui neque, vulputate ut aliquet eu, mollis a felis. Duis nisl urna, maximus et venenatis nec, facilisis non velit.";

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.stage}>
        <section className={styles.copy} aria-labelledby="homepage-title">
          <p className={styles.welcome}>
            Welcome to<span className={styles.desktopOnly}> the</span>
          </p>
          <h1 className={styles.title} id="homepage-title">
            r/IGCSE
          </h1>
          <p className={styles.subtitle}>Resource Repository</p>
          <p className={styles.description}>{introduction}</p>

          <dl className={styles.stats} aria-label="Repository statistics">
            <div className={styles.stat}>
              <dt>Total Users</dt>
              <dd>50,000+</dd>
            </div>
            <div className={styles.stat}>
              <dt>Published Resources</dt>
              <dd>40+</dd>
            </div>
          </dl>
        </section>

        <Image
          className={styles.desktopCollage}
          src="/home-collage-desktop.png"
          alt="A collection of r/IGCSE study resource covers"
          width={1217}
          height={1074}
          sizes="(min-width: 701px) 64vw, 0px"
          priority
          unoptimized
        />
        <Image
          className={styles.mobileCollage}
          src="/home-collage-mobile.png"
          alt="A collection of r/IGCSE study resource covers"
          width={292}
          height={323}
          sizes="(max-width: 700px) 85vw, 0px"
          priority
          unoptimized
        />
      </div>
    </main>
  );
}
