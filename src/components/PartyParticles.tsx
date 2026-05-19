import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
  type: 'confetti' | 'glowstick' | 'sparkle';
  rotation: number;
  rotSpeed: number;
}

export default function PartyParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const neonColors = ['#ff00ff', '#00f0ff', '#ffff00', '#ff0080', '#00ff88'];

    const createParticle = (): Particle => {
      const typeRoll = Math.random();
      let type: Particle['type'];
      if (typeRoll < 0.5) type = 'confetti';
      else if (typeRoll < 0.8) type = 'sparkle';
      else type = 'glowstick';

      return {
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 50,
        size: type === 'glowstick' ? Math.random() * 3 + 2 : Math.random() * 4 + 1,
        speedY: -(Math.random() * 0.8 + 0.3),
        speedX: (Math.random() - 0.5) * 0.8,
        opacity: Math.random() * 0.4 + 0.1,
        color: neonColors[Math.floor(Math.random() * neonColors.length)],
        life: 0,
        maxLife: Math.random() * 800 + 400,
        type,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 3,
      };
    };

    for (let i = 0; i < 60; i++) {
      const p = createParticle();
      p.y = Math.random() * canvas.height;
      p.life = Math.random() * p.maxLife;
      particlesRef.current.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.life++;
        p.rotation += p.rotSpeed;

        const lifeRatio = p.life / p.maxLife;
        const fadeIn = Math.min(lifeRatio * 8, 1);
        const fadeOut = lifeRatio > 0.85 ? (1 - lifeRatio) / 0.15 : 1;
        const currentOpacity = p.opacity * fadeIn * fadeOut;

        ctx.save();
        ctx.globalAlpha = currentOpacity;

        if (p.type === 'confetti') {
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size, -p.size * 0.3, p.size * 2, p.size * 0.6);
        } else if (p.type === 'glowstick') {
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 10;
          ctx.fillRect(-1.5, -p.size * 3, 3, p.size * 6);
          ctx.shadowBlur = 0;
        } else {
          // sparkle
          ctx.fillStyle = p.color;
          ctx.beginPath();
          const spikes = 4;
          for (let s = 0; s < spikes * 2; s++) {
            const r = s % 2 === 0 ? p.size * 2 : p.size * 0.5;
            const angle = (Math.PI * s) / spikes;
            const sx = p.x + Math.cos(angle) * r;
            const sy = p.y + Math.sin(angle) * r;
            if (s === 0) ctx.moveTo(sx, sy);
            else ctx.lineTo(sx, sy);
          }
          ctx.closePath();
          ctx.fill();
        }

        ctx.restore();

        if (p.life >= p.maxLife || p.y < -20) {
          particlesRef.current[i] = createParticle();
        }
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
