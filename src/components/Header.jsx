import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        <div className="logo">
          <span className="cloudai-title">CloudAI</span>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/#features">Features</Link>
            </li>
            <li>
              <Link to="/#about">About Us</Link>
            </li>
            <li>
              <Link to="/#contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="glowing-line"></div>
    </header>
  );
};

export default Header;
