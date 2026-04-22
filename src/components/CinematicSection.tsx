import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface CinematicSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  parallaxIntensity?: number;
}

const CinematicSection = ({
  children,
  className = "",
  id,
  parallaxIntensity = 30,
}: CinematicSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [parallaxIntensity, -parallaxIntensity]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.97, 1, 1, 0.97]);

  return (
    <div ref={ref} id={id} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y, opacity, scale }}>
        {children}
      </motion.div>
    </div>
  );
};

export default CinematicSection;
