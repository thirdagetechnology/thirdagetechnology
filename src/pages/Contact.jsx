import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import styles from "./Contact.module.css";
import LargeLogo from "../assets/LargeLogo.png";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const cleanPhone = (value) => value.replace(/\D/g, "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const digits = cleanPhone(form.phone);

    if (digits.length !== 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!form.name || !form.email || !form.message) {
      setError("All fields are required.");
      return;
    }

    const phoneNumber = Number(digits);
    setLoading(true);

    const { error } = await supabase.from("ContactTable").insert([
      {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: phoneNumber,
        message: form.message.trim(),
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      setError("Error sending message. Please try again later.");
    } else {
      setSubmitted(true); // ✅ trigger thank-you overlay
    }
  };

  return (
    <main className={styles.contactPage}>
      <section className={styles.contactContainer}>
        <div className={styles.formSection}>
          {!submitted ? (
            <>
              <h1>Contact Us</h1>

              <form className={styles.form} onSubmit={handleSubmit}>
                <label>
                  Name
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Phone
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Your Phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Message
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </label>

                <button type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>

              {error && <p className={styles.errorMsg}>{error}</p>}
            </>
          ) : (
            // ✅ Thank-you overlay
            <div className={styles.thankYouContainer}>
              <h2>Thank You!</h2>
              <p>We’ll get back to you as soon as possible.</p>
            </div>
          )}
        </div>

        <div className={styles.logoSection}>
          <img
            src={LargeLogo}
            alt="Third Age Technology Logo"
            className={styles.logo}
          />
          <h2>THIRD AGE TECHNOLOGY</h2>
          <p className={styles.subtitle}>Support for Seniors</p>
          <div className={styles.infoSection}>
            <div>
              <h3>Call Us</h3>
              <a href="tel:8049216853">(804) 921-6853</a>
            </div>
            <div>
              <h3>Email Us</h3>
              <p>
                <a href="mailto:jordan.dooms@thirdagetechnology.net">
                  jordan.dooms@thirdagetechnology.net
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
