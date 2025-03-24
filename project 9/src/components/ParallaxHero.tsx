import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from '@use-gesture/react';
import { useParallax } from '../hooks/useParallax';

interface ParallaxHeroProps {
  children: React.ReactNode;
  backgroundUrl: string;
}

export default function ParallaxHero({ children, backgroundUrl }: ParallaxHeroProps) {
  const parallaxOffset = useParallax(50);
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));

  const bind = useGesture({
    onMove: ({ xy: [px, py] }) => {
      set({ xy: [px - window.innerWidth / 2, py - window.innerHeight / 2] });
    }
  });

  return (
    <div className="relative h-[600px] overflow-hidden" {...bind()}>
      <animated.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
          transform: xy.to((x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`),
        }}
      />
      <animated.div
        className="absolute inset-0 bg-dark-900/30 backdrop-blur-[2px]"
        style={{
          transform: parallaxOffset.to(o => `translate3d(0,${o}px,0)`),
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/20 to-dark-900" />
      <div className="relative h-full">{children}</div>
    </div>
  );
}