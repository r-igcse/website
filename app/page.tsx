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

        <div
          className={styles.collage}
          role="img"
          aria-label="A collection of r/IGCSE study resource covers"
        />
      </div>
    </main>
  );
}
