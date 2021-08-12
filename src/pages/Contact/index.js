import Layout from "../../layout";
import styles from "../pagestyles/contact.module.scss";
function Contact() {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2>Feel Free To Send Me A Message</h2>
          <form className={styles.form}>
            <div className={styles.inputs}>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                required
                placeholder="mail@example.com"
              />
            </div>
            <div className={styles.inputs}>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
              ></textarea>
            </div>
            <button className={styles.sendBtn}>Send</button>
          </form>
        </div>
        <div className={styles.image}></div>
      </div>
    </Layout>
  );
}

export default Contact;
