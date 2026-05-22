import { useEffect, useRef, useState, useCallback } from 'react';
import { usePartyCursor } from '@/hooks/usePartyCursor';

interface ConfettiPiece {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotSpeed: number;
  size: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
}

interface TrailSegment {
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
}

interface MiniPartyGhoul {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  scale: number;
  rotation: number;
  rotSpeed: number;
  glowColor: string;
}

const NEON_COLORS = ['#ff00ff', '#00f0ff', '#ffff00', '#ff0080', '#00ff88', '#ff6600'];
const SPEECH_LINES = [
  "LET'S GOOO!",
  "WOOOO!",
  "PARTY TIME!",
  "TURN IT UP!",
  "RAVE ON!",
  "NEVER STOP!",
];

export function PartyGhostSVG({ expression, beatPulse, isHovered }: {
  expression: number;
  beatPulse: number;
  isHovered: boolean;
}) {
  const scale = 1 + beatPulse * 0.05;
  const glowIntensity = isHovered ? 0.8 + beatPulse * 0.2 : 0.4 + beatPulse * 0.3;

  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      style={{
        filter: `drop-shadow(0 0 ${15 + beatPulse * 10}px rgba(255,0,255,${glowIntensity})) drop-shadow(0 0 ${30 + beatPulse * 20}px rgba(0,240,255,${glowIntensity * 0.6}))`,
        transform: `scale(${scale})`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <defs>
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff00ff" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#a855f7" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.8" />
        </linearGradient>
        <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="40%" stopColor="#00f0ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="rageGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="30%" stopColor="#ff0000" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ff00ff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ghost body */}
      <path
        d="M100 15 C140 15 170 45 170 85 C170 110 165 130 160 145 C158 152 152 148 148 155 C144 162 138 158 134 165 C130 172 124 168 120 175 C116 182 110 178 106 185 C102 192 96 188 92 195 C88 188 82 192 78 185 C74 178 68 182 64 175 C60 168 54 172 50 165 C46 158 40 162 38 155 C33 140 30 115 30 85 C30 45 60 15 100 15Z"
        fill="url(#bodyGrad)"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1.5"
      />

      {/* Party hat */}
      <g transform="translate(70, 8) rotate(-15)">
        <polygon points="15,0 0,35 30,35" fill="#ff00ff" stroke="#fff" strokeWidth="1" />
        <polygon points="15,0 8,18 22,18" fill="#00f0ff" opacity="0.6" />
        <circle cx="15" cy="2" r="3" fill="#ffff00" />
        {/* Pom pom */}
        <circle cx="15" cy="-2" r="5" fill="#ffff00" opacity="0.9" />
        <circle cx="12" cy="-4" r="2" fill="#ff00ff" />
        <circle cx="18" cy="-3" r="2" fill="#00f0ff" />
      </g>

      {expression === 0 && (
        <>
          {/* Chill - Sunglasses */}
          <rect x="55" y="70" width="32" height="18" rx="4" fill="#111" stroke="#ff00ff" strokeWidth="1.5" />
          <rect x="113" y="70" width="32" height="18" rx="4" fill="#111" stroke="#ff00ff" strokeWidth="1.5" />
          <line x1="87" y1="79" x2="113" y2="79" stroke="#ff00ff" strokeWidth="2" />
          {/* Reflections on glasses */}
          <rect x="60" y="73" width="8" height="3" rx="1" fill="#00f0ff" opacity="0.6" />
          <rect x="118" y="73" width="8" height="3" rx="1" fill="#00f0ff" opacity="0.6" />
          {/* Smirk */}
          <path d="M85 110 Q100 118 115 108" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          {/* Glow stick */}
          <rect x="160" y="100" width="6" height="45" rx="3" fill="#00ff88" transform="rotate(20 163 122)" opacity="0.9">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="0.5s" repeatCount="indefinite" />
          </rect>
          <rect x="160" y="100" width="6" height="45" rx="3" fill="none" stroke="#00ff88" strokeWidth="3" transform="rotate(20 163 122)" opacity="0.4" />
        </>
      )}

      {expression === 1 && (
        <>
          {/* Hype - Wide excited eyes */}
          <ellipse cx="72" cy="78" rx="16" ry="20" fill="#fff" />
          <ellipse cx="128" cy="78" rx="16" ry="20" fill="#fff" />
          <circle cx="72" cy="78" r="10" fill="#00f0ff" />
          <circle cx="128" cy="78" r="10" fill="#00f0ff" />
          <circle cx="75" cy="74" r="4" fill="#fff" />
          <circle cx="131" cy="74" r="4" fill="#fff" />
          {/* Big open mouth */}
          <ellipse cx="100" cy="118" rx="18" ry="22" fill="#220044" stroke="#ff00ff" strokeWidth="2" />
          <path d="M88 130 Q100 138 112 130" fill="#ff00ff" opacity="0.5" />
          {/* Hands up */}
          <circle cx="35" cy="95" r="12" fill="url(#bodyGrad)" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <circle cx="165" cy="95" r="12" fill="url(#bodyGrad)" stroke="#fff" strokeWidth="1" opacity="0.8" />
          {/* Glow sticks in hands */}
          <rect x="25" y="75" width="5" height="35" rx="2" fill="#ff00ff" transform="rotate(-30 27 92)" />
          <rect x="170" y="75" width="5" height="35" rx="2" fill="#00f0ff" transform="rotate(30 172 92)" />
        </>
      )}

      {expression === 2 && (
        <>
          {/* Rage - Strobe eyes */}
          <circle cx="72" cy="78" r="18" fill="url(#rageGlow)">
            <animate attributeName="opacity" values="1;0.3;1;0.5;1" dur="0.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="128" cy="78" r="18" fill="url(#rageGlow)">
            <animate attributeName="opacity" values="0.3;1;0.5;1;0.3" dur="0.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="72" cy="78" r="8" fill="#fff" opacity="0.9" />
          <circle cx="128" cy="78" r="8" fill="#fff" opacity="0.9" />
          {/* Screaming mouth */}
          <ellipse cx="100" cy="120" rx="20" ry="26" fill="#330000" stroke="#ff0000" strokeWidth="2" />
          <path d="M85 108 L90 118 L95 108 L100 118 L105 108 L110 118 L115 108" fill="none" stroke="#ff4444" strokeWidth="1.5" />
          <path d="M88 138 Q100 142 112 138" fill="#ff0000" opacity="0.6" />
          {/* Vein */}
          <path d="M50 55 L60 65" stroke="#ff4444" strokeWidth="1.5" opacity="0.7" />
          <path d="M145 50 L135 62" stroke="#ff4444" strokeWidth="1.5" opacity="0.7" />
          {/* Rage aura rings */}
          <circle cx="100" cy="100" r="95" fill="none" stroke="#ff00ff" strokeWidth="1" opacity={0.2 + beatPulse * 0.3}>
            <animate attributeName="r" values="90;100;90" dur="0.3s" repeatCount="indefinite" />
          </circle>
        </>
      )}

      {/* Body glow pulse */}
      <ellipse cx="100" cy="100" rx="85" ry="85" fill="none" stroke="#ff00ff" strokeWidth="0.5" opacity={beatPulse * 0.15} />
    </svg>
  );
}

export default function PartyMascot() {
  const { x, y, isMoving, velocity, beatPulse } = usePartyCursor(128);
  const [_expression, setExpression] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [speechBubble, setSpeechBubble] = useState('');
  const [raveMode, setRaveMode] = useState(false);

  const confettiRef = useRef<ConfettiPiece[]>([]);
  const trailRef = useRef<TrailSegment[]>([]);
  const miniGhoulsRef = useRef<MiniPartyGhoul[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const clickCountRef = useRef(0);
  const typedRef = useRef('');
  const posHistoryRef = useRef<{ x: number; y: number }[]>([]);

  const mascotSize = typeof window !== 'undefined' && window.innerWidth < 768 ? 90 : 140;

  // Confetti burst
  const spawnConfetti = useCallback((cx: number, cy: number, count = 40) => {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = Math.random() * 8 + 3;
      confettiRef.current.push({
        x: cx + mascotSize / 2,
        y: cy + mascotSize / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 3,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 20,
        size: Math.random() * 6 + 3,
        color: NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)],
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 80 + 60,
      });
    }
  }, [mascotSize]);

  const handleClick = useCallback(() => {
    clickCountRef.current = (clickCountRef.current + 1) % 3;
    const newExpr = clickCountRef.current;
    setExpression(newExpr);
    spawnConfetti(x, y, newExpr === 2 ? 80 : 40);

    const line = SPEECH_LINES[newExpr] || SPEECH_LINES[0];
    setSpeechBubble(line);
    setTimeout(() => setSpeechBubble(''), 2000);

    if (newExpr === 2) {
      document.body.classList.add('strobe-mode');
      setTimeout(() => document.body.classList.remove('strobe-mode'), 2000);
    }
  }, [x, y, spawnConfetti]);

  const handleDoubleClick = useCallback(() => {
    if (miniGhoulsRef.current.length >= 6) return;
    const colors = ['#ff00ff', '#00f0ff', '#ffff00'];
    for (let i = 0; i < 3; i++) {
      miniGhoulsRef.current.push({
        x: x + mascotSize / 2 + (Math.random() - 0.5) * 60,
        y: y + mascotSize,
        vx: (Math.random() - 0.5) * 4,
        vy: -Math.random() * 4 - 2,
        opacity: 1,
        scale: 0.3 + Math.random() * 0.3,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 15,
        glowColor: colors[Math.floor(Math.random() * colors.length)],
      });
    }
  }, [x, y, mascotSize]);

  // Easter egg: type "rave"
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        spawnConfetti(x, y, 20);
        return;
      }
      typedRef.current += e.key.toLowerCase();
      if (typedRef.current.length > 10) typedRef.current = typedRef.current.slice(-10);

      if (typedRef.current.includes('rave')) {
        typedRef.current = '';
        setExpression(2);
        setRaveMode(true);
        setSpeechBubble('RAVE MODE ACTIVATED!');
        document.body.classList.add('rave-mode');
        spawnConfetti(x, y, 120);
        setTimeout(() => {
          setExpression(0);
          setRaveMode(false);
          setSpeechBubble('');
          document.body.classList.remove('rave-mode');
          clickCountRef.current = 0;
        }, 4000);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [x, y, spawnConfetti]);

  // Position history for trail
  useEffect(() => {
    posHistoryRef.current.push({ x, y });
    if (posHistoryRef.current.length > 20) posHistoryRef.current.shift();
  }, [x, y]);

  // Main animation loop
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

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Glow stick trail
      if (isMoving && velocity > 1.5) {
        const cx = x + mascotSize / 2;
        const cy = y + mascotSize / 2;
        trailRef.current.push({
          x: cx,
          y: cy,
          size: 4 + beatPulse * 3,
          color: NEON_COLORS[Math.floor(Date.now() / 200) % NEON_COLORS.length],
          opacity: 0.9,
        });
      }

      trailRef.current = trailRef.current.filter((seg) => {
        seg.opacity -= 0.015;
        seg.size *= 0.98;
        if (seg.opacity <= 0) return false;

        ctx.beginPath();
        ctx.arc(seg.x, seg.y, seg.size, 0, Math.PI * 2);
        ctx.fillStyle = seg.color;
        ctx.globalAlpha = seg.opacity;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(seg.x, seg.y, seg.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = seg.color;
        ctx.globalAlpha = seg.opacity * 0.08;
        ctx.fill();

        return true;
      });

      // Confetti
      confettiRef.current = confettiRef.current.filter((c) => {
        c.x += c.vx;
        c.y += c.vy;
        c.vy += 0.15;
        c.vx *= 0.99;
        c.rotation += c.rotSpeed;
        c.life++;
        const lifeRatio = c.life / c.maxLife;
        c.opacity = Math.max(0, 1 - lifeRatio);

        if (c.opacity <= 0) return false;

        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate((c.rotation * Math.PI) / 180);
        ctx.globalAlpha = c.opacity;
        ctx.fillStyle = c.color;
        ctx.fillRect(-c.size / 2, -c.size / 4, c.size, c.size / 2);
        ctx.restore();

        return true;
      });

      // Mini party ghouls
      miniGhoulsRef.current = miniGhoulsRef.current.filter((mg) => {
        mg.x += mg.vx;
        mg.y += mg.vy;
        mg.vy -= 0.015;
        mg.vx *= 0.995;
        mg.opacity -= 0.003;
        mg.rotation += mg.rotSpeed;
        mg.scale += 0.001;

        if (mg.opacity <= 0) return false;

        ctx.save();
        ctx.globalAlpha = mg.opacity;
        ctx.translate(mg.x, mg.y);
        ctx.rotate((mg.rotation * Math.PI) / 180);
        ctx.scale(mg.scale, mg.scale);

        // Mini ghost body
        ctx.beginPath();
        ctx.arc(0, -10, 20, Math.PI, 0);
        ctx.bezierCurveTo(20, 10, 15, 30, 10, 25);
        ctx.bezierCurveTo(5, 32, 0, 28, -5, 30);
        ctx.bezierCurveTo(-10, 32, -15, 28, -20, 25);
        ctx.bezierCurveTo(-25, 20, -20, 10, -20, -10);
        ctx.fillStyle = mg.glowColor;
        ctx.fill();

        // Mini glow stick
        ctx.save();
        ctx.translate(18, 5);
        ctx.rotate(0.5);
        ctx.fillStyle = '#ffff00';
        ctx.fillRect(-2, -12, 4, 24);
        ctx.restore();

        // Mini sunglasses
        ctx.fillStyle = '#111';
        ctx.fillRect(-12, -18, 10, 6);
        ctx.fillRect(2, -18, 10, 6);

        ctx.restore();
        return true;
      });

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [x, y, isMoving, velocity, beatPulse, mascotSize]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 9996 }}
      />

      {/* Rave overlay */}
      {raveMode && (
        <div
          className="fixed inset-0 pointer-events-none z-[9995]"
          style={{
            background: `radial-gradient(circle at ${x + mascotSize / 2}px ${y + mascotSize / 2}px, rgba(255,0,255,0.15) 0%, transparent 60%)`,
            animation: 'rave-pulse 0.15s ease-in-out infinite',
          }}
        />
      )}

      <div
        className="fixed pointer-events-none"
        style={{
          left: x,
          top: y,
          zIndex: 9997,
          width: mascotSize,
          height: mascotSize,
        }}
      >
        {speechBubble && (
          <div
            className="absolute -top-16 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg whitespace-nowrap font-bungee text-sm pointer-events-none"
            style={{
              background: 'rgba(10, 10, 26, 0.95)',
              border: '2px solid #ff00ff',
              color: '#00f0ff',
              textShadow: '0 0 10px rgba(0,240,255,0.8), 0 0 20px rgba(255,0,255,0.5)',
              boxShadow: '0 0 20px rgba(255,0,255,0.4), 0 0 40px rgba(0,240,255,0.2)',
              animation: 'bounce-subtle 0.4s ease-in-out infinite',
              zIndex: 9999,
            }}
          >
            {speechBubble}
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: '8px solid #ff00ff',
              }}
            />
          </div>
        )}

        <div
          className="relative pointer-events-auto cursor-pointer"
          style={{
            width: mascotSize,
            height: mascotSize,
            animation: !isMoving ? `ghost-bob 2.5s ease-in-out infinite, ghost-sway 3.5s ease-in-out infinite` : undefined,
          }}
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src="/ghoul_mascot.png"
            alt="PARTY GHOUL"
            className="w-full h-full object-contain"
            draggable={false}
            style={{
              filter: isHovered
                ? 'brightness(1.15) drop-shadow(0 0 20px rgba(255,0,255,0.5)) drop-shadow(0 0 40px rgba(0,240,255,0.3))'
                : undefined,
              transition: 'filter 0.3s ease',
            }}
          />
        </div>
      </div>
    </>
  );
}
