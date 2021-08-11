import Layout from "../../layout";
import styles from "../pagestyles/home.module.scss";
function HomePage() {
  return (
    <Layout>
      <section className={styles.landing}>
        <div className={styles.highlightImage}></div>
        <div className={styles.highlightText}>
          <h1>
            Hey, I'm Billy Patrick and I love building websites that drive
            impact.
          </h1>
          <button className={styles.buttonMain}>Let's Talk {">"}</button>
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.image}>
          <div className={styles.myself}></div>
        </div>
        <div className={styles.aboutText}>
          <div className={styles.line}></div>
          <h2>About Me</h2>
          <p>
            I am a web developer and being a web developer, I strive in making
            better web expericences for people and creating more accessible.
            Feel free to send me an email if you believe we could work together.
            I am also passionate about anything Tech related and a huge fan of
            good music and basketball, you could reach out to me if you want to
            have a chat on these.
          </p>
          <button className={styles.buttonSecondary}>View Portfolio</button>
          <div className={styles.line}></div>
        </div>
      </section>
      <section className={styles.outro}>
        <h1>Interested In Working Together?</h1>
        <div className={styles.line}></div>
        <button className={styles.buttonMain}>Contact Me</button>
      </section>
    </Layout>
  );
}

export default HomePage;
