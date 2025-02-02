import AnimatedBackground from "./AnimatedBackground";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <AnimatedBackground />
      <div className="grid-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to CloudAI</h1>
        <div className="hero-description">
          <h2 className="hero-subtitle">
            Revolutionizing Cloud Management with AI
          </h2>
          <p>
            Born from the vision of simplifying complex cloud infrastructure
            management, we are a team of cloud architects, AI specialists, and
            DevOps engineers passionate about making multi-cloud management
            accessible and efficient for businesses of all sizes.
          </p>
          <h3 className="hero-highlight">Our Mission</h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
