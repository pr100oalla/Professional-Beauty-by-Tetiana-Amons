import { useSpring } from 'react-spring';
import { useScroll } from 'react-use';

export function useParallax(strength = 100) {
  const [{ offset }, setOffset] = useSpring(() => ({ offset: 0 }));
  const { y } = useScroll(typeof window !== 'undefined' ? window : null);

  React.useEffect(() => {
    setOffset({ offset: (y * strength) / window.innerHeight });
  }, [y, strength, setOffset]);

  return offset;
}