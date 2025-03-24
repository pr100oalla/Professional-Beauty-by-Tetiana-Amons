import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  
  const props = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,20px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    reset: true,
    key: location.pathname,
  });

  return (
    <animated.div style={props}>
      {children}
    </animated.div>
  );
}