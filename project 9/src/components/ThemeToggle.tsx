import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';
import { useSpring, animated } from 'react-spring';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useDarkMode();

  const properties = {
    dark: {
      r: 9,
      transform: 'rotate(40deg)',
      cx: 12,
      cy: 4,
      opacity: 0
    },
    light: {
      r: 5,
      transform: 'rotate(90deg)',
      cx: 30,
      cy: 0,
      opacity: 1
    },
    springConfig: { mass: 4, tension: 250, friction: 35 }
  };

  const { r, transform, cx, cy, opacity } = useSpring({
    to: isDark ? properties.dark : properties.light,
    config: properties.springConfig
  });

  return (
    <animated.button
      onClick={() => setIsDark(!isDark)}
      className={`p-2 rounded-full transition-colors ${
        isDark ? 'bg-dark-800 text-gold-400' : 'bg-gold-100 text-gold-600'
      }`}
      style={{
        transform: transform.to(t => `scale(1) ${t}`),
      }}
    >
      {isDark ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </animated.button>
  );
}