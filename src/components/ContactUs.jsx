"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import AnimatedBackground from "./AnimatedBackground";
import "../styles/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_0btaugo",
        "template_sfouxjg",
        formData,
        "RHFejrdihhY_u48ok"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact-us" id="contact">
      <AnimatedBackground />
      <h2>
        Contact Us
        <span className="glowing-line"></span>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
      {status && <p className="status-message">{status}</p>}
      <div className="glowing-orb" style={{ top: "10%", right: "10%" }}></div>
      <div className="glowing-orb" style={{ bottom: "10%", left: "10%" }}></div>
    </section>
  );
};

export default ContactUs;
