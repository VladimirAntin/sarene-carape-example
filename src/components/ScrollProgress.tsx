'use client';
import {useScroll, motion} from 'framer-motion';

export default function ScrollProgress() {
  const {scrollYProgress} = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: '0%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: 'linear-gradient(to right, #e91e63, #ff6b35, #ffd600, #00c853, #2979ff, #9c27b0)',
        zIndex: 100,
      }}
    />
  );
}
