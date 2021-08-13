import { useState } from "react";
import Layout from "../../layout";
import styles from "../pagestyles/contact.module.scss";
import emailjs from "emailjs-com";
require("dotenv").config();

function Contact() {
  const [status, setStatus] = useState({
    code: 0,
    message: "",
  });
  const [formData, setFormData] = useState({
    user_email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ ...status, message: "Sending Message", code: 100 });
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) =>
          setStatus({ ...status, code: result.status, message: result.text }),
        (error) =>
          setStatus({ ...status, code: error.status, message: error.text })
      )
      .then(() => {
        setFormData({
          user_email: "",
          message: "",
        });
      });
  };
  return (
    <Layout>
      <h1>Contact Me</h1>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={status.code !== 0 ? styles.loadingState : styles.off}>
            <button
              className={styles.closeBtn}
              onClick={() => setStatus({ ...status, code: 0 })}
            >
              Close
            </button>
            <p>
              {status.code === 200
                ? "Thank you for your Message"
                : status.message}
            </p>
            <div
              className={status.code === 200 ? styles.complete : styles.off}
            ></div>
            <div
              className={status.code === 100 ? styles.loader : styles.off}
            ></div>
          </div>
          <h2>Feel Free To Send Me A Message</h2>
          <form className={styles.form} onSubmit={sendEmail}>
            <div className={styles.inputs}>
              <label htmlFor="email">Email</label>
              <input
                name="user_email"
                type="email"
                required
                onChange={handleChange}
                value={formData.user_email}
                disabled={status.code === 100}
                placeholder="mail@example.com"
              />
            </div>
            <div className={styles.inputs}>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                onChange={handleChange}
                value={formData.message}
                disabled={status.code === 100}
              ></textarea>
            </div>
            <button
              className={styles.sendBtn}
              type="submit"
              disabled={status.code === 100}
            >
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
