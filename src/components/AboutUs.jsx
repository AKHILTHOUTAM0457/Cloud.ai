import AnimatedBackground from "./AnimatedBackground";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      <AnimatedBackground />
      <h2>About US</h2>
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
      <div className="glowing-orb" style={{ top: "30%", left: "5%" }}></div>
      <div className="glowing-orb" style={{ bottom: "20%", right: "5%" }}></div>
    </section>
  );
};

export default AboutUs;
