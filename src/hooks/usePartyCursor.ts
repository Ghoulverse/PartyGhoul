import { useRef, useEffect, useCallback, useState } from 'react';

interface CursorState {
  x: number;
  y: number;
  isMoving: boolean;
  velocity: number;
  beatPulse: number; // 0-1 sine wave synced to BPM
}

export function usePartyCursor(bpm = 128): CursorState {
  const TRAIL_OFFSET = 80;

  const [state, setState] = useState<CursorState>({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 - 80 : 0,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 - 80 : 0,
    isMoving: false,
    velocity: 0,
    beatPulse: 0,
  });

  const targetRef = useRef({ x: state.x, y: state.y });
  const currentRef = useRef({ x: state.x, y: state.y });
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastMoveTime = useRef(Date.now());
  const rafRef = useRef<number>(0);
  const beatStartRef = useRef(Date.now());

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const size = window.innerWidth < 768 ? 90 : 140;
    targetRef.current = {
      x: Math.max(10, Math.min(window.innerWidth - size - 10, e.clientX - size / 2 + TRAIL_OFFSET)),
      y: Math.max(10, Math.min(window.innerHeight - size - 10, e.clientY - size / 2 + TRAIL_OFFSET)),
    };
    lastMoveTime.current = Date.now();
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    const size = window.innerWidth < 768 ? 90 : 140;
    targetRef.current = {
      x: Math.max(10, Math.min(window.innerWidth - size - 10, touch.clientX - size / 2 + TRAIL_OFFSET)),
      y: Math.max(10, Math.min(window.innerHeight - size - 10, touch.clientY - size / 2 + TRAIL_OFFSET)),
    };
    lastMoveTime.current = Date.now();
  }, []);

  useEffect(() => {
    const spring = 0.07;
    const friction = 0.82;
    const beatInterval = 60000 / bpm;

    const animate = () => {
      const dx = (targetRef.current.x + TRAIL_OFFSET) - currentRef.current.x;
      const dy = (targetRef.current.y + TRAIL_OFFSET) - currentRef.current.y;

      velocityRef.current.x = (velocityRef.current.x + dx * spring) * friction;
      velocityRef.current.y = (velocityRef.current.y + dy * spring) * friction;

      currentRef.current.x += velocityRef.current.x;
      currentRef.current.y += velocityRef.current.y;

      const speed = Math.sqrt(
        velocityRef.current.x ** 2 + velocityRef.current.y ** 2
      );

      const timeSinceMove = Date.now() - lastMoveTime.current;
      const isMoving = timeSinceMove < 150 || speed > 0.5;

      // BPM pulse: sine wave synced to beat
      const elapsed = Date.now() - beatStartRef.current;
      const beatPhase = (elapsed % beatInterval) / beatInterval;
      const beatPulse = Math.sin(beatPhase * Math.PI * 2) * 0.5 + 0.5;

      setState({
        x: currentRef.current.x,
        y: currentRef.current.y,
        isMoving,
        velocity: speed,
        beatPulse,
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleMouseMove, handleTouchMove, bpm]);

  return state;
}
