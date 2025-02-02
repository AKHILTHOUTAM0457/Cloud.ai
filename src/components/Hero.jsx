///import HolographicEffect from "./HolographicEffect";
import "../styles/Hero.css";
import AnimatedBackground from "./AnimatedBackground";

const Hero = () => {
  return (
    <section className="hero">
      <AnimatedBackground />
      <div className="hero-content">
        <h1 className="hero-title">Welcome to CloudAI</h1>
        <p className="hero-subtitle">
          Experience the future of AI-powered solutions
        </p>
      </div>
    </section>
  );
};

export default Hero;
