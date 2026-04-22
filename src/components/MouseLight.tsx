import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const MouseLight = () => {
  const [enabled, setEnabled] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine) and (hover: hover)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncEnabled = () => {
      setEnabled(mediaQuery.matches && !reducedMotionQuery.matches);
    };

    syncEnabled();

    mediaQuery.addEventListener("change", syncEnabled);
    reducedMotionQuery.addEventListener("change", syncEnabled);

    return () => {
      mediaQuery.removeEventListener("change", syncEnabled);
      reducedMotionQuery.removeEventListener("change", syncEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30"
      style={{
        background: `radial-gradient(1000px circle at ${x}px ${y}px, rgba(212, 175, 55, 0.015), transparent 80%)`,
      }}
    />
  );
};

export default MouseLight;
