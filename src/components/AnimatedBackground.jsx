import { useSpring, animated } from "@react-spring/web";
import "../styles/AnimatedBackground.css";

const AnimatedBackground = () => {
  const props = useSpring({
    from: { backgroundPosition: "0% 50%" },
    to: { backgroundPosition: "100% 50%" },
    config: { duration: 20000 },
    loop: true,
  });

  return <animated.div className="animated-background" style={props} />;
};

export default AnimatedBackground;
