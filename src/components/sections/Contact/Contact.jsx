import "./Contact.css";
import { useState } from "react";
import axios from "axios";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      await axios.post(
        "http://localhost:5000/api/contact/send",
        form
      );

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        message: ""
      });

      setTimeout(() => {
        setSuccess(false);
      }, 4000);

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Message sending failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <section className="contact" id="contact">

      <div className="contact-left">

        <p className="contact-tag">
          CONTACT
        </p>

        <h2>
          Let's Work Together
        </h2>

        <span>
          Have a project idea or opportunity?
          Feel free to contact me.
        </span>

        <div className="contact-info">

          <h3>Email</h3>

          <a href="mailto:vmohanapiriyanpiriyan@gmail.com">
            vmohanapiriyanpiriyan@gmail.com
          </a>

          <h3>Location</h3>

          <p>
            Sri Lanka
          </p>

        </div>

      </div>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          disabled={loading}
        >

          {
            loading
            ? "Sending..."
            : "Send Message"
          }

        </button>

        {

        success && (

        <div className="success-box">

        Thanks for contacting me 🚀
        I'll get back to you soon.

        </div>

        )

        }

      </form>

    </section>

  );

}