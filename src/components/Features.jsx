"use client";

import { motion } from "framer-motion";
import { Bot, LineChart, Cog, Zap, Shield, Brain } from "lucide-react";
import "../styles/Features.css";
import AnimatedBackground from "./AnimatedBackground";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Solutions",
    description:
      "Harness the power of AI to transform your business processes.",
    gradient: "from-violet-600 to-indigo-600",
    shadowColor: "violet-500",
  },
  {
    icon: LineChart,
    title: "Advanced Analytics",
    description: "Gain deep insights with our cutting-edge analytical tools.",
    gradient: "from-emerald-600 to-teal-600",
    shadowColor: "emerald-500",
  },
  {
    icon: Cog,
    title: "Automated Workflows",
    description: "Streamline operations with intelligent automation and ML.",
    gradient: "from-pink-600 to-rose-600",
    shadowColor: "pink-500",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description:
      "Process and analyze data in real-time for immediate insights.",
    gradient: "from-amber-500 to-orange-600",
    shadowColor: "amber-500",
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "State-of-the-art measures to protect your valuable data.",
    gradient: "from-blue-600 to-cyan-600",
    shadowColor: "blue-500",
  },
  {
    icon: Brain,
    title: "Smart Learning",
    description: "Adaptive systems that learn from your business patterns.",
    gradient: "from-purple-600 to-fuchsia-600",
    shadowColor: "purple-500",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  gradient,
  shadowColor,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`feature-card ${gradient}`}
    >
      <div className="feature-card-content">
        <div className={`feature-icon ${gradient} shadow-${shadowColor}`}>
          <Icon className="icon" />
        </div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section className="features-section">
      <AnimatedBackground />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="features-header"
        >
          <h2 className="features-title">Our Features</h2>
          <p className="features-subtitle">
            Discover the powerful features that make our platform stand out
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      <div className="background-effects">
        <div className="bg-effect bg-effect-1" />
        <div className="bg-effect bg-effect-2" />
      </div>
    </section>
  );
}
