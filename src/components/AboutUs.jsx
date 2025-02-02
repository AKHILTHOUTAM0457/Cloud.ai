"use client";

import AnimatedBackground from "./AnimatedBackground";
import { Target, Lightbulb } from "lucide-react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      <AnimatedBackground />
      <h2 className="title-with-line">About US</h2>

      <div className="about-content">
        <p>
          <span className="highlight">
            CloudAI is at the forefront of artificial intelligence innovation.
          </span>{" "}
          We specialize in developing cutting-edge AI solutions that transform
          businesses and drive growth.
        </p>
        <p>
          Our team of expert data scientists and engineers are committed to
          pushing the boundaries of what is possible with AI, delivering{" "}
          <span className="highlight">
            tailored solutions for diverse industries
          </span>
          .
        </p>
        <p>
          At CloudAI, we believe in the power of AI to solve complex problems,
          automate processes, and unlock new opportunities.{" "}
          <span className="highlight">
            Our mission is to make AI accessible and beneficial for businesses
            of all sizes.
          </span>
        </p>
      </div>

      <div className="values-section">
        <h3>Our Core Values</h3>
        <div className="values-grid">
          <div className="value-item">
            <h4>Innovation First</h4>
            <p>
              We continuously push the boundaries of what is possible with Al
              and cloud technology.
            </p>
          </div>
          <div className="value-item">
            <h4>Customer Success</h4>
            <p>
              Your success is our success. We are committed to delivering
              exceptional value.
            </p>
          </div>
          <div className="value-item">
            <h4>Transparency</h4>
            <p>
              Clear communication and honest insights drive our relationships.
            </p>
          </div>
          <div className="value-item">
            <h4>Excellence</h4>
            <p>
              We strive for excellence in every aspect of our platform and
              service.
            </p>
          </div>
        </div>
      </div>

      <div className="mission-vision-section">
        <div className="mission-vision-item">
          <Target className="icon" size={32} />
          <h3>Our Mission</h3>
          <p>
            To empower organizations with intelligent cloud management solutions
            that maximize efficiency, reduce costs, and accelerate innovation
            through Al-driven automation and insights.
          </p>
        </div>
        <div className="mission-vision-item">
          <Lightbulb className="icon" size={32} />
          <h3>Our Vision</h3>
          <p>
            To become the global standard for intelligent cloud resource
            management, where Al-driven decisions and automated operations
            define the future of cloud infrastructure.
          </p>
        </div>
      </div>

      <div className="glowing-orb" style={{ top: "30%", left: "5%" }}></div>
      <div className="glowing-orb" style={{ bottom: "20%", right: "5%" }}></div>
    </section>
  );
};

export default AboutUs;
