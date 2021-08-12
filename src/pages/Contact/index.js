import Layout from "../../layout";
import styles from "../pagestyles/contact.module.scss";
import emailjs from "emailjs-com";
require("dotenv").config();

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => console.log(result),
        (error) => console.log(error.text)
      );
  };
  return (
    <Layout>
      <h1>Contact Me</h1>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2>Feel Free To Send Me A Message</h2>
          <form className={styles.form} onSubmit={sendEmail}>
            <div className={styles.inputs}>
              <label htmlFor="email">Email</label>
              <input
                name="user_email"
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
            <button className={styles.sendBtn} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className={styles.image}></div>
      </div>
    </Layout>
  );
}

export default Contact;
