import { useState } from "react";
import "./home.css";
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    try {
      const res = await fetch("https://floor-web-react-frontend.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent! Thank you.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Error sending message.");
      }
    } catch (err) {
      setStatus("Network error.");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-container">
          <label> Name:</label>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <label>Email:</label>
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="textarea-container">
          <label>Msg : </label>{" "}
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows="4"
          />
        </div>

        <button type="submit">Send</button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
}
