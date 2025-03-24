import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from '@use-gesture/react';
import { useScroll } from 'react-use';

interface ParallaxSectionProps {
  children: React.ReactNode;
  backgroundUrl?: string;
  className?: string;
  strength?: number;
}

export default function ParallaxSection({ 
  children, 
  backgroundUrl, 
  className = '',
  strength = 50 
}: ParallaxSectionProps) {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const { y } = useScroll(typeof window !== 'undefined' ? window : null);

  const bind = useGesture({
    onMove: ({ xy: [px, py] }) => {
      set({ xy: [px - window.innerWidth / 2, py - window.innerHeight / 2] });
    }
  });

  const parallaxStyle = useSpring({
    transform: `translate3d(0,${(y * strength) / window.innerHeight}px,0)`,
  });

  return (
    <div className={`relative overflow-hidden ${className}`} {...bind()}>
      {backgroundUrl && (
        <animated.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundUrl})`,
            transform: xy.to((x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`),
          }}
        />
      )}
      <animated.div
        style={parallaxStyle}
        className="relative z-10"
      >
        {children}
      </animated.div>
    </div>
  );
}