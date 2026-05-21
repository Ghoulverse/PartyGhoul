import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Twitter, Instagram, Youtube, ArrowRight, Gamepad2,
  Ghost, ExternalLink, Wine, Sparkles, Music, Zap, Ticket,
  Briefcase, Building2,
} from 'lucide-react';
import { config } from '@/data/ghoul.config';
import PartyMascot from '@/components/PartyMascot';
import PartyParticles from '@/components/PartyParticles';
import EcosystemMap from '@/components/EcosystemMap';
import MarketStats from '@/components/MarketStats';
import IPBadge from '@/components/IPBadge';
import RoadmapTimeline from '@/components/RoadmapTimeline';
import InvestorCTA from '@/components/InvestorCTA';

gsap.registerPlugin(ScrollTrigger);

const GHOULVERSE_LINK = config.crossLinks.find((g) => g.id === 'ghoulverse');
const OTHER_GHOULS = config.crossLinks.filter((g) => g.id !== 'ghoulverse');

const PRODUCT_ICONS = [Wine, Sparkles, Music, Zap, Ticket];
const TABS = [
  { key: 'core' as const, label: 'CORE' },
  { key: 'pro' as const, label: 'PRO' },
  { key: 'tool' as const, label: 'TOOLS' },
  { key: 'refill' as const, label: 'REFILLS' },
  { key: 'limited' as const, label: 'LIMITED' },
];

function GlitchText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={`glitch-text relative inline-block ${className || ''}`} data-text={text}>
      {text}
    </span>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'core' | 'pro' | 'tool' | 'refill' | 'limited'>('core');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scienceRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const lineupRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const ecosystemRef = useRef<HTMLDivElement>(null);
  const marketRef = useRef<HTMLDivElement>(null);
  const ipRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from('.hero-title span', {
        y: 100,
        opacity: 0,
        rotateX: -90,
        duration: 1.2,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        delay: 0.3,
      });

      gsap.from('.hero-sub', {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.8,
      });

      // Strobe effect on LIVE badges
      gsap.to('.live-badge', {
        opacity: 0.3,
        duration: 0.4,
        repeat: -1,
        yoyo: true,
        ease: 'steps(2)',
      });

      // Scroll reveals
      [statsRef, ecosystemRef, scienceRef, productRef, lineupRef, gameRef, marketRef, ipRef, roadmapRef, portfolioRef, ctaRef].forEach((ref) => {
        if (ref.current) {
          gsap.from(ref.current.querySelectorAll('.reveal'), {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
          });
        }
      });
    });
    return () => ctx.revert();
  }, []);

  const filtered = config.products.filter((p) => p.category === activeTab);

  return (
    <div className="relative font-inter min-h-screen overflow-x-hidden" style={{ background: '#050510' }}>
      {/* Neon grid background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,0,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,240,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          perspective: '1000px',
        }}
      />

      {/* Mouse-following glow */}
      <div
        className="fixed pointer-events-none z-0 opacity-30 transition-all duration-300"
        style={{
          left: mousePos.x - 200,
          top: mousePos.y - 200,
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(255,0,255,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Scan lines */}
      <div className="scanlines pointer-events-none fixed inset-0 z-50 opacity-[0.03]" />
      <PartyParticles />

      {/* ===== NAV ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-3 px-4 md:px-8 border-b"
        style={{ borderColor: 'rgba(255,0,255,0.15)', background: 'rgba(5,5,16,0.85)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border-2 border-[#ff00ff] flex items-center justify-center animate-pulse"
              style={{ boxShadow: '0 0 15px rgba(255,0,255,0.4), inset 0 0 10px rgba(255,0,255,0.2)' }}>
              <span className="text-sm">{config.icon}</span>
            </div>
            <span className="font-bungee text-sm tracking-[0.3em] text-[#ff00ff]"
              style={{ textShadow: '0 0 10px rgba(255,0,255,0.6)' }}>
              {config.name}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="live-badge hidden md:flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#00ff00]"
              style={{ textShadow: '0 0 8px rgba(0,255,0,0.6)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff00]" />
              LIVE
            </span>
            <a href={GHOULVERSE_LINK?.domain || '#'} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#94a3b8] hover:text-[#00f0ff] transition-colors">
              GHOULVERSE <ExternalLink className="w-3 h-3" />
            </a>
            <a href="#ecosystem"
              className="hidden md:flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#94a3b8] hover:text-[#ff00ff] transition-colors">
              <Briefcase className="w-3 h-3" /> Investors
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full opacity-10 blur-[100px]"
            style={{ background: 'conic-gradient(from 0deg, #ff00ff, #00f0ff, #ffff00, #ff00ff)' }} />
        </div>

        <div className="relative z-10 pt-20">
          <div className="hero-sub mb-6 flex flex-col items-center gap-3">
            <a href="https://www.ghoulverse.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-bold tracking-[0.4em] uppercase border-2 border-[#f59e0b]/40 text-[#f59e0b] hover:border-[#f59e0b] hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all">
              <Building2 className="w-3 h-3" />
              House of GHOUL
            </a>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-bold tracking-[0.4em] uppercase border-2 border-[#ff00ff]/40 text-[#ff00ff]"
              style={{ boxShadow: '0 0 20px rgba(255,0,255,0.2), inset 0 0 10px rgba(255,0,255,0.1)' }}>
              <span className="w-2 h-2 bg-[#ff00ff] animate-pulse" />
              The Aftermath Specialist
            </span>
          </div>

          <h1 className="hero-title font-bungee leading-[0.85] mb-8" style={{ perspective: '1000px' }}>
            <span className="block text-[12vw] md:text-[10rem] lg:text-[14rem] text-[#ff00ff]"
              style={{ textShadow: '0 0 30px rgba(255,0,255,0.5), 0 0 80px rgba(255,0,255,0.3)' }}>
              <GlitchText text="PARTY" />
            </span>
            <span className="block text-[12vw] md:text-[10rem] lg:text-[14rem] text-[#00f0ff] -mt-4 md:-mt-8"
              style={{ textShadow: '0 0 30px rgba(0,240,255,0.5), 0 0 80px rgba(0,240,255,0.3)' }}>
              <GlitchText text="GHOUL" />
            </span>
          </h1>

          <p className="hero-sub text-[#94a3b8] text-lg md:text-xl max-w-lg mx-auto mb-10 leading-relaxed">
            When the music stops and the lights come up, <span className="text-[#ff00ff] font-bold">the real party begins.</span>
          </p>

          <div className="hero-sub flex items-center justify-center gap-4 mb-8">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto">
              <PartyMascot />
            </div>
          </div>
          <div className="hero-sub flex items-center justify-center gap-4">
            <a href="#products" className="group inline-flex items-center gap-3 px-8 py-4 font-bungee text-sm tracking-wider uppercase text-[#0a0a1a] transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #ff00ff, #ff0080)', boxShadow: '0 0 30px rgba(255,0,255,0.4)' }}>
              ENTER THE AFTERMATH
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #ff00ff, #00f0ff, transparent)' }} />
      </section>

      {/* ===== STATS ===== */}
      <section ref={statsRef} className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { label: 'PARTIES CLEANED', value: '∞', color: '#ff00ff', sub: 'And counting' },
              { label: 'STAINS LEFT', value: '0', color: '#00f0ff', sub: 'Absolutely none' },
              { label: 'GLOW UP RATE', value: '100%', color: '#ffff00', sub: 'Every single time' },
              { label: 'HOUSE OF GHOUL', value: '6', color: '#f59e0b', sub: 'Live brands' },
            ].map((stat, i) => (
              <div key={i} className="reveal relative p-8 md:p-12 text-center group"
                style={{
                  border: `2px solid ${stat.color}20`,
                  background: 'rgba(5,5,16,0.6)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = stat.color;
                  e.currentTarget.style.boxShadow = `0 0 40px ${stat.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${stat.color}20`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="font-bungee text-5xl md:text-7xl mb-2 transition-all group-hover:scale-110"
                  style={{ color: stat.color, textShadow: `0 0 20px ${stat.color}40` }}>
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-[10px] text-[#94a3b8]/60 tracking-wider">
                  {stat.sub}
                </div>
                <div className="absolute top-3 right-3 text-[8px] font-bold tracking-wider uppercase px-1.5 py-0.5 border"
                  style={{ color: stat.color, borderColor: `${stat.color}40` }}>
                  VERIFIED
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ECOSYSTEM ===== */}
      <section ref={ecosystemRef} id="ecosystem" className="relative py-24 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-12">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#00f0ff] mb-4 block">
              The Portfolio
            </span>
            <h2 className="font-bungee text-4xl md:text-6xl text-white mb-4"
              style={{ textShadow: '0 0 20px rgba(255,255,255,0.1)' }}>
              THE ECOSYSTEM
            </h2>
            <p className="text-[#94a3b8] max-w-lg mx-auto">
              6 independent brands. 54 products. 1 universe. 1 game. Built on shared IP.
            </p>
          </div>
          <div className="reveal">
            <EcosystemMap />
          </div>
        </div>
      </section>

      {/* ===== SCIENCE ===== */}
      <section ref={scienceRef} className="relative py-24 md:py-40 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="reveal mb-16 text-center">
            <span className="inline-block text-[10px] font-bold tracking-[0.4em] uppercase text-[#ff00ff] mb-4 px-3 py-1 border border-[#ff00ff]/30">
              Proprietary Tech
            </span>
            <h2 className="font-bungee text-4xl md:text-6xl text-white mb-4"
              style={{ textShadow: '0 0 20px rgba(255,255,255,0.1)' }}>
              THE SCIENCE
            </h2>
            <p className="text-[#ff00ff] text-xl md:text-2xl font-bungee">
              {config.science.subtitle}
            </p>
          </div>

          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 border-2 border-[#ff00ff]/20" style={{ background: 'rgba(5,5,16,0.8)' }}>
              <p className="text-[#94a3b8] leading-relaxed">
                {config.science.description}
              </p>
            </div>
            <div className="p-8 border-2 border-[#00f0ff]/20" style={{ background: 'rgba(5,5,16,0.8)' }}>
              <p className="text-[#94a3b8]/70 text-sm leading-relaxed">
                {config.science.adaptation}
              </p>
            </div>
          </div>

          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-3">
            {config.science.stats.map((stat, i) => (
              <div key={i} className="p-6 text-center border-2 group transition-all hover:border-[#ff00ff]"
                style={{ borderColor: '#ff00ff20', background: 'rgba(5,5,16,0.8)' }}>
                <div className="font-bungee text-2xl md:text-3xl text-[#ff00ff] mb-1"
                  style={{ textShadow: '0 0 10px rgba(255,0,255,0.3)' }}>
                  {stat.value}
                </div>
                <div className="text-[#94a3b8] text-[10px] tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IP PORTFOLIO ===== */}
      <section ref={ipRef} id="ip" className="relative">
        <div className="reveal">
          <IPBadge />
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section ref={productRef} id="products" className="relative py-24 md:py-40 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-12 text-center">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#ff00ff] mb-4 block">
              Product Architecture
            </span>
            <h2 className="font-bungee text-4xl md:text-6xl text-white mb-4"
              style={{ textShadow: '0 0 20px rgba(255,255,255,0.1)' }}>
              THE ARSENAL
            </h2>
            <p className="text-[#94a3b8] max-w-md mx-auto">
              Five lines. Nine formulations. Total aftermath annihilation.
            </p>
          </div>

          {/* Tabs */}
          <div className="reveal flex flex-wrap justify-center gap-2 mb-10">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.key;
              const count = config.products.filter((p) => p.category === tab.key).length;
              return (
                <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                  className="px-5 py-2.5 text-xs font-bold tracking-wider uppercase transition-all min-h-11"
                  style={{
                    background: isActive ? '#ff00ff' : 'transparent',
                    color: isActive ? '#050510' : '#94a3b8',
                    border: isActive ? '2px solid #ff00ff' : '2px solid #ff00ff30',
                    boxShadow: isActive ? '0 0 20px rgba(255,0,255,0.4)' : 'none',
                  }}>
                  {tab.label} <span className="opacity-50">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((product, i) => {
              const Icon = PRODUCT_ICONS[i % PRODUCT_ICONS.length];
              const colors = ['#ff00ff', '#00f0ff', '#ffff00', '#ff0080', '#00ff88'];
              const color = colors[i % colors.length];

              return (
                <div key={i} className="reveal group relative p-6 transition-all duration-300 hover:-translate-y-2"
                  style={{
                    background: 'rgba(5,5,16,0.9)',
                    border: `2px solid ${color}25`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.boxShadow = `0 0 30px ${color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${color}25`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Perforated edges */}
                  <div className="absolute -left-1.5 top-4 bottom-4 w-3 flex flex-col justify-between">
                    {Array.from({ length: 8 }).map((_, j) => (
                      <div key={j} className="w-3 h-2 rounded-full" style={{ background: '#050510' }} />
                    ))}
                  </div>
                  <div className="absolute -right-1.5 top-4 bottom-4 w-3 flex flex-col justify-between">
                    {Array.from({ length: 8 }).map((_, j) => (
                      <div key={j} className="w-3 h-2 rounded-full" style={{ background: '#050510' }} />
                    ))}
                  </div>

                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 border-2 flex items-center justify-center"
                      style={{ borderColor: `${color}40`, boxShadow: `inset 0 0 10px ${color}10` }}>
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <span className="text-[9px] font-bold tracking-[0.3em] uppercase px-2 py-1"
                      style={{ color, border: `1px solid ${color}40` }}>
                      {product.category}
                    </span>
                  </div>

                  <h3 className="font-bungee text-base text-white mb-1 tracking-wide break-words">
                    {product.name.toUpperCase()}
                  </h3>
                  <p className="text-[#ff00ff] text-xs font-bold mb-3">{product.tagline}</p>
                  <p className="text-[#94a3b8] text-xs leading-relaxed mb-4">{product.description}</p>

                  {product.heroIngredient && (
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-[9px] tracking-wider uppercase text-[#94a3b8]/50">Powered by</span>
                      <span className="text-[10px] font-bold" style={{ color }}>{product.heroIngredient}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.features.map((feat, fi) => (
                      <span key={fi} className="text-[9px] px-2 py-1 border"
                        style={{ color: '#94a3b8', borderColor: `${color}30` }}>
                        {feat}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: `${color}15` }}>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#94a3b8]/50">{product.volume}</span>
                    <span className="text-sm font-bold font-bungee" style={{ color }}>{product.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== MARKET & TRACTION ===== */}
      <section ref={marketRef} id="market" className="relative">
        <div className="reveal">
          <MarketStats />
        </div>
      </section>

      {/* ===== ROADMAP ===== */}
      <section ref={roadmapRef} id="roadmap" className="relative">
        <div className="reveal">
          <RoadmapTimeline />
        </div>
      </section>

      {/* ===== LINEUP ===== */}
      <section ref={lineupRef} className="relative py-24 md:py-40 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#00f0ff] mb-4 block">
              Festival Lineup
            </span>
            <h2 className="font-bungee text-4xl md:text-6xl text-white mb-4"
              style={{ textShadow: '0 0 20px rgba(0,240,255,0.2)' }}>
              THE GHOULVERSE
            </h2>
            <p className="text-[#94a3b8] max-w-lg mx-auto">
              Eight legendary acts. One epic universe.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {OTHER_GHOULS.map((g) => (
              <a key={g.id}
                href={g.live ? g.domain : `https://www.ghoulverse.com/ghouls/${g.id}/`}
                target="_blank" rel="noopener noreferrer"
                className="reveal group relative p-5 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                style={{
                  background: 'rgba(5,5,16,0.8)',
                  border: `2px solid ${g.color}20`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = g.color;
                  e.currentTarget.style.boxShadow = `0 0 30px ${g.color}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${g.color}20`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ filter: `drop-shadow(0 0 12px ${g.color}50)` }}>
                  {g.icon}
                </div>
                <h3 className="font-bungee text-xs text-white tracking-wider">{g.name}</h3>
                <p className="text-[#94a3b8]/50 text-[10px] uppercase tracking-wider mt-1">{g.realm}</p>
                {!g.live && (
                  <span className="text-[9px] text-[#94a3b8]/30 uppercase tracking-wider block mt-1">TBA</span>
                )}
              </a>
            ))}
          </div>

          <div className="reveal text-center">
            <a href={GHOULVERSE_LINK?.domain || '#'} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 font-bungee text-sm tracking-wider uppercase text-[#0a0a1a] transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #ff00ff, #00f0ff)', boxShadow: '0 0 30px rgba(255,0,255,0.3)' }}>
              ENTER THE GHOULVERSE <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== GAME ===== */}
      <section ref={gameRef} className="relative py-24 md:py-40 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="reveal relative p-10 md:p-16 text-center overflow-hidden"
            style={{ border: '2px solid #ff00ff40', background: 'linear-gradient(135deg, rgba(255,0,255,0.08), rgba(0,240,255,0.08))' }}>
            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#ff00ff]" />
            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#00f0ff]" />
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#00f0ff]" />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#ff00ff]" />

            <Gamepad2 className="w-14 h-14 text-[#ff00ff] mx-auto mb-6" style={{ filter: 'drop-shadow(0 0 15px rgba(255,0,255,0.5))' }} />
            <h2 className="font-bungee text-4xl md:text-6xl text-white mb-4">PLAY GHOULVERSE</h2>
            <p className="text-[#94a3b8] max-w-lg mx-auto mb-8">
              Pilot {config.name} through the Void. Battle bacteria, unlock all 8 ghouls, claim the leaderboard.
            </p>
            <a href={config.gameUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 font-bungee text-sm tracking-wider uppercase text-[#0a0a1a] transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #ff00ff, #ff0080)', boxShadow: '0 0 30px rgba(255,0,255,0.4)' }}>
              <Gamepad2 className="w-5 h-5" /> PLAY NOW
            </a>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO ===== */}
      <section ref={portfolioRef} className="relative py-16 px-4 border-t" style={{ borderColor: 'rgba(255,0,255,0.1)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-8">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#94a3b8]/40 mb-2 block">The House of GHOUL</span>
            <h3 className="font-bungee text-2xl text-white">THE PORTFOLIO</h3>
          </div>
          <div className="reveal grid grid-cols-4 md:grid-cols-8 gap-2">
            {config.crossLinks.map((g) => {
              const isActive = g.id === config.id;
              return (
                <a key={g.id}
                  href={g.live ? g.domain : `https://www.ghoulverse.com/ghouls/${g.id}/`}
                  target="_blank" rel="noopener noreferrer"
                  className="group text-center p-3 transition-all duration-300"
                  style={{
                    background: isActive ? `${g.color}20` : 'rgba(5,5,16,0.6)',
                    border: isActive ? `2px solid ${g.color}` : '2px solid transparent',
                  }}
                  onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.borderColor = `${g.color}40`; } }}
                  onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.borderColor = 'transparent'; } }}
                >
                  <div className="text-2xl group-hover:scale-110 transition-transform">{g.icon}</div>
                  <p className="text-[9px] font-bold tracking-wider uppercase text-white mt-1">{g.name.replace(' GHOUL', '')}</p>
                  {isActive && <span className="text-[8px] mt-0.5 inline-block" style={{ color: g.color }}>{config.products.length} Products</span>}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== INVESTOR CTA ===== */}
      <InvestorCTA />

      {/* ===== CTA / FOOTER ===== */}
      <section ref={ctaRef} className="relative py-24 md:py-40 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="reveal mb-8">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#ff00ff] mb-4 block">Stay in the Loop</span>
            <h2 className="font-bungee text-4xl md:text-5xl text-white mb-4">{config.cta.headline}</h2>
            <p className="text-[#94a3b8]">{config.cta.subheadline}</p>
          </div>

          <div className="reveal flex flex-col sm:flex-row gap-3 mb-16">
            <input type="email" placeholder={config.cta.placeholderText}
              className="flex-1 px-5 py-4 text-sm text-white placeholder:text-[#94a3b8]/40 outline-none bg-transparent border-2 transition-all focus:border-[#ff00ff]"
              style={{ borderColor: 'rgba(255,0,255,0.3)' }} />
            <button className="px-8 py-4 font-bungee text-sm tracking-wider uppercase text-[#0a0a1a] transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #ff00ff, #00f0ff)', boxShadow: '0 0 20px rgba(255,0,255,0.3)' }}>
              {config.cta.buttonText}
            </button>
          </div>

          <div className="reveal flex items-center justify-center gap-3 mb-10">
            {[Twitter, Instagram, Youtube].map((Icon, i) => {
              const colors = ['#ff00ff', '#00f0ff', '#ffff00'];
              return (
                <a key={i} href="#" className="w-12 h-12 flex items-center justify-center transition-all hover:scale-110 border-2"
                  style={{ borderColor: `${colors[i]}30`, background: 'rgba(5,5,16,0.8)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = colors[i]; e.currentTarget.style.boxShadow = `0 0 15px ${colors[i]}40`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${colors[i]}30`; e.currentTarget.style.boxShadow = 'none'; }}>
                  <Icon className="w-4 h-4" style={{ color: colors[i] }} />
                </a>
              );
            })}
          </div>

          <div className="reveal mb-8 flex flex-wrap items-center justify-center gap-4 text-xs">
            <a href={GHOULVERSE_LINK?.domain || '#'} target="_blank" rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-[#ff00ff] transition-colors flex items-center gap-1 tracking-wider py-2 px-3 min-h-11">
              <Ghost className="w-3 h-3" /> Explore GHOULVERSE
            </a>
            <span className="text-[#94a3b8]/20">|</span>
            <a href={config.gameUrl} target="_blank" rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-[#00f0ff] transition-colors flex items-center gap-1 tracking-wider py-2 px-3 min-h-11">
              <Gamepad2 className="w-3 h-3" /> Play GHOULVERSE
            </a>
            <span className="text-[#94a3b8]/20">|</span>
            <a href="#ecosystem"
              className="text-[#94a3b8] hover:text-[#f59e0b] transition-colors flex items-center gap-1 tracking-wider py-2 px-3 min-h-11">
              <Briefcase className="w-3 h-3" /> Investors
            </a>
          </div>

          <p className="reveal text-[#94a3b8]/20 text-xs tracking-wider">
            &copy; 2025 <span className="font-bungee text-[#ff00ff]/40">{config.name}</span> — Part of the{' '}
            <a href={GHOULVERSE_LINK?.domain || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff00ff] transition-colors">GHOULVERSE</a>
          </p>
        </div>
      </section>
    </div>
  );
}
