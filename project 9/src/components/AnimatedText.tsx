import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

interface AnimatedTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedText({ children, delay = 0, className = '' }: AnimatedTextProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { 
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0px)' : 'translateY(20px)',
    },
    delay: delay * 1000,
    config: { mass: 1, tension: 280, friction: 60 },
  });

  return (
    <animated.div ref={ref} style={props} className={className}>
      {children}
    </animated.div>
  );
}