import { useState } from "react";
import { Shield, Zap, BarChart2, Sliders, BookOpen, Cpu } from "lucide-react";
import "../styles/Features.css";
import AnimatedBackground from "./AnimatedBackground";

const features = [
  {
    icon: <Shield size={24} />,
    title: "AI Powered Unified Cloud Management",
    description:
      "Manage all your cloud resources across providers in one intelligent platform",
    details:
      "Real-time resource monitoring and management, Intelligent resource allocation and optimization, Automated deployment and configuration, AI-driven performance monitoring and alerting, Smart capacity and scaling recommendations.",
  },
  {
    icon: <Zap size={24} />,
    title: "Pre-built Business Templates",
    description:
      "Industry specific solutions with pre-defined templates for multiple common scenarios",
    details:
      "Templates for E-commerce, Content Management systems, Data analytics environment, Machine Learning infrastructures, DevOps environment, Microservices architectures, etc.",
  },
  {
    icon: <BarChart2 size={24} />,
    title: "Advanced Analytics",
    description: "Data-driven insights at your fingertips",
    details:
      "Custom dashboard creation, Resource utilization reports, Cost allocation reports, Performance metrics, Compliance reports, Usage trending",
  },
  {
    icon: <Sliders size={24} />,
    title: "AI-driven Operations",
    description:
      "Our AI agent monitors and provides optimization recommendations",
    details:
      "Automated resource health monitoring, Predictive maintenance, Performance optimization, Security vulnerability detection, Compliance monitoring, Log Analysis and insights and many more..",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Smart Resource Selection",
    description:
      "AI-suggested resource recommendations analyzing cost and performance",
    details:
      "AI-driven CSP and service recommendations, Workload specific provider suggestions, Region and availability zone optimization, Service compatibility checking, Comparative pricing analysis between different CSP's",
  },
  {
    icon: <Cpu size={24} />,
    title: "Excel-Based Bulk Deployment",
    description: "Deploy resources across multiple CSPs using Excel sheets",
    details:
      "Download a formatted Excel sheet from our tool or edit it directly according to your infrastructure's needs",
  },
];

function FeatureCard({
  icon,
  title,
  description,
  details,
  isHovered,
  onHover,
}) {
  return (
    <div
      className={`feature-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
      <div className="feature-details">
        <p>{details}</p>
      </div>
    </div>
  );
}

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="features" className="features-section">
      <AnimatedBackground />
      <h2 className="features-title">
        Powerful Tools for Smart Cloud Management
      </h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            {...feature}
            isHovered={hoveredIndex === index}
            onHover={(isHovered) => setHoveredIndex(isHovered ? index : null)}
          />
        ))}
      </div>
    </section>
  );
}
