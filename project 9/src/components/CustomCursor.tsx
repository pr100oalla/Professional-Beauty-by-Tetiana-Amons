import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const cursorProps = useSpring({
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    scale: isHovering ? 1.5 : 1,
    config: { mass: 1, tension: 280, friction: 60 },
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX - 10, y: e.clientY - 10 });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, input, textarea, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <animated.div
      className="custom-cursor"
      style={{
        ...cursorProps,
        display: 'block',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}