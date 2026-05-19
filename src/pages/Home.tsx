import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Twitter, Instagram, Youtube, ArrowRight, Gamepad2,
  Ghost, ExternalLink, Wine, Sparkles, Music, Zap, Ticket,
} from 'lucide-react';
import { config } from '@/data/ghoul.config';

gsap.registerPlugin(ScrollTrigger);

const OTHER_GHOULS = config.crossLinks.filter((g) => g.id !== 'ghoulverse');
const GHOULVERSE_LINK = config.crossLinks.find((g) => g.id === 'ghoulverse');

const PRODUCT_ICONS = [Wine, Sparkles, Music, Zap, Ticket];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aftermathRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const lineupRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroTextRef.current) {
        gsap.from(heroTextRef.current.children, {
          x: -60,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power4.out',
          delay: 0.3,
        });
      }

      const sections = [aftermathRef, productRef, lineupRef, gameRef, ctaRef];
      sections.forEach((ref) => {
        if (ref.current) {
          gsap.from(ref.current.querySelectorAll('.reveal'), {
            y: 40,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative font-inter">
      {/* Scan lines overlay */}
      <div className="scanlines" />

      {/* ===== NAV ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-[#ff00ff] flex items-center justify-center"
              style={{ boxShadow: '0 0 10px rgba(255,0,255,0.5)' }}>
              <span className="text-sm">{config.icon}</span>
            </div>
            <span className="font-bungee text-sm md:text-base tracking-widest text-[#ff00ff]"
              style={{ textShadow: '0 0 10px rgba(255,0,255,0.6)' }}>
              {config.name}
            </span>
          </div>
          <a
            href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#94a3b8] hover:text-[#00f0ff] transition-colors"
          >
            Enter the GHOULVERSE
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] flex items-center px-4 md:px-8 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div ref={heroTextRef} className="z-10 pt-20 md:pt-0">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-[0.3em] uppercase border border-[#ff00ff]/40 text-[#ff00ff] bg-[#ff00ff]/5">
                The Aftermath Specialist
              </span>
            </div>

            <h1 className="font-bungee text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tight mb-6"
              style={{
                color: '#ff00ff',
                textShadow: '0 0 20px rgba(255,0,255,0.5), 0 0 60px rgba(255,0,255,0.3), 0 0 100px rgba(0,240,255,0.2)',
              }}>
              PARTY
              <br />
              <span style={{
                color: '#00f0ff',
                textShadow: '0 0 20px rgba(0,240,255,0.5), 0 0 60px rgba(0,240,255,0.3), 0 0 100px rgba(255,0,255,0.2)',
              }}>GHOUL</span>
            </h1>

            <p className="text-[#94a3b8] text-base md:text-lg max-w-md mb-8 leading-relaxed">
              When the music stops and the lights come up, the real party begins.
              No mess too wild. No stain too stubborn.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#aftermath"
                className="inline-flex items-center gap-2 px-6 py-3 font-bungee text-sm tracking-wider uppercase transition-all hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #ff00ff, #ff0080)',
                  color: '#0a0a1a',
                  boxShadow: '0 0 20px rgba(255,0,255,0.4)',
                }}
              >
                Explore
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-[#94a3b8]/50 text-xs tracking-wider animate-pulse-hint">
                Click the ghoul to party!
              </span>
            </div>
          </div>

          {/* Right side - empty space for mascot to float in */}
          <div className="hidden md:flex items-center justify-center h-[60vh] relative">
            <div
              className="absolute w-64 h-64 rounded-full opacity-20 blur-3xl"
              style={{ background: 'radial-gradient(circle, #ff00ff, transparent 70%)' }}
            />
            <div
              className="absolute w-48 h-48 rounded-full opacity-15 blur-3xl"
              style={{ background: 'radial-gradient(circle, #00f0ff, transparent 70%)', animation: 'float-around 8s ease-in-out infinite' }}
            />
          </div>
        </div>

        {/* Neon border at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #ff00ff, #00f0ff, transparent)' }} />
      </section>

      {/* ===== THE AFTERMATH ===== */}
      <section id="aftermath" ref={aftermathRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-16 md:mb-24">
            <h2 className="font-bungee text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
              style={{
                color: '#fff',
                textShadow: '0 0 20px rgba(255,255,255,0.2)',
              }}>
              THE MUSIC STOPS.
              <br />
              <span className="text-[#ff00ff]"
                style={{ textShadow: '0 0 30px rgba(255,0,255,0.5)' }}>
                THE MESS BEGINS.
              </span>
            </h2>
            <p className="text-[#94a3b8] text-lg max-w-xl">
              Red wine on the carpet. Glitter in places glitter should never be.
              Confetti fused to the ceiling. We've seen it all. And we clean it all.
            </p>
          </div>

          {/* Stats - styled like club stamps */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Music, value: '∞', label: 'Parties Cleaned', color: '#ff00ff' },
              { icon: Zap, value: '0', label: 'Stains Left Behind', color: '#00f0ff' },
              { icon: Sparkles, value: '100%', label: 'Glow Up Rate', color: '#ffff00' },
            ].map((stat, i) => (
              <div
                key={i}
                className="reveal relative p-6 md:p-8 border-2 border-dashed"
                style={{
                  borderColor: `${stat.color}40`,
                  background: 'rgba(10, 10, 26, 0.8)',
                }}
              >
                <div className="absolute -top-3 left-4 px-2 text-[10px] font-bold tracking-[0.2em] uppercase"
                  style={{ color: stat.color, background: '#0a0a1a' }}>
                  Verified
                </div>
                <stat.icon className="w-6 h-6 mb-4" style={{ color: stat.color }} />
                <div className="font-bungee text-3xl md:text-4xl mb-1" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-[#94a3b8] text-xs tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS - VIP PASSES ===== */}
      <section ref={productRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-12 md:mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#ff00ff] mb-4 block">
              The Drop
            </span>
            <h2 className="font-bungee text-4xl md:text-5xl text-white mb-4"
              style={{ textShadow: '0 0 20px rgba(255,255,255,0.15)' }}>
              COMING SOON
            </h2>
            <p className="text-[#94a3b8] max-w-md">
              The ultimate party cleanup arsenal. VIP access only.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {config.products.map((product, i) => {
              const Icon = PRODUCT_ICONS[i % PRODUCT_ICONS.length];
              const colors = ['#ff00ff', '#00f0ff', '#ffff00', '#ff0080', '#00ff88'];
              const color = colors[i % colors.length];

              return (
                <div
                  key={i}
                  className="reveal group relative p-6 border-2 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: `${color}30`,
                    background: 'rgba(10, 10, 26, 0.9)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.boxShadow = `0 0 30px ${color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${color}30`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Ticket notch */}
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-8 bg-[#0a0a1a] rounded-r-full"
                    style={{ borderRight: `2px solid ${color}30` }} />
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-8 bg-[#0a0a1a] rounded-l-full"
                    style={{ borderLeft: `2px solid ${color}30` }} />

                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center border-2"
                      style={{ borderColor: `${color}40` }}>
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-2 py-1 border"
                      style={{ color, borderColor: `${color}40` }}>
                      VIP
                    </span>
                  </div>

                  <h3 className="font-bungee text-lg text-white mb-2 tracking-wide">
                    {product.name.toUpperCase()}
                  </h3>
                  <p className="text-[#94a3b8] text-xs leading-relaxed mb-4">
                    {product.description || 'Premium party cleanup technology. No stain survives.'}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t"
                    style={{ borderColor: `${color}15` }}>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#94a3b8]/50">
                      ADMIT ONE
                    </span>
                    <span className="text-[10px] font-bold tracking-wider" style={{ color }}>
                      SOON
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== LINEUP (UNIVERSE) ===== */}
      <section ref={lineupRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#00f0ff] mb-4 block">
              Festival Lineup
            </span>
            <h2 className="font-bungee text-4xl md:text-6xl text-white mb-4"
              style={{ textShadow: '0 0 20px rgba(0,240,255,0.2)' }}>
              THE GHOULVERSE
            </h2>
            <p className="text-[#94a3b8] max-w-lg mx-auto">
              Eight legendary acts. One epic universe. Don't miss a single set.
            </p>
          </div>

          {/* Festival poster grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
            {OTHER_GHOULS.map((g) => {
              const isHeadliner = ['goo', 'party'].includes(g.id);
              const isSpecial = ['beauty', 'garden'].includes(g.id);

              return (
                <a
                  key={g.id}
                  href={g.live ? g.domain : `https://www.ghoulverse.com/ghouls/${g.id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal group relative p-4 md:p-6 border transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  style={{
                    borderColor: isHeadliner ? `${g.color}60` : `${g.color}20`,
                    background: isHeadliner
                      ? `linear-gradient(135deg, ${g.color}15, transparent)`
                      : 'rgba(10, 10, 26, 0.9)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = g.color;
                    e.currentTarget.style.boxShadow = `0 0 25px ${g.color}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = isHeadliner ? `${g.color}60` : `${g.color}20`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {isHeadliner && (
                    <div className="absolute top-2 right-2 text-[8px] font-bold tracking-[0.2em] uppercase px-1.5 py-0.5"
                      style={{ color: g.color, border: `1px solid ${g.color}60` }}>
                      Headliner
                    </div>
                  )}
                  {isSpecial && (
                    <div className="absolute top-2 right-2 text-[8px] font-bold tracking-[0.2em] uppercase px-1.5 py-0.5"
                      style={{ color: g.color, border: `1px solid ${g.color}40` }}>
                      Special
                    </div>
                  )}

                  <div className="text-3xl md:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300"
                    style={{ filter: `drop-shadow(0 0 8px ${g.color}40)` }}>
                    {g.icon}
                  </div>

                  <h3 className="font-bungee text-xs md:text-sm text-white tracking-wider mb-0.5">
                    {g.name}
                  </h3>
                  <p className="text-[#94a3b8]/60 text-[10px] uppercase tracking-wider">
                    {g.realm}
                  </p>
                  {!g.live && (
                    <span className="text-[9px] text-[#94a3b8]/40 uppercase tracking-wider block mt-1">
                      TBA
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          <div className="reveal text-center">
            <a
              href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 font-bungee text-sm tracking-wider uppercase transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #ff00ff, #00f0ff)',
                color: '#0a0a1a',
                boxShadow: '0 0 30px rgba(255,0,255,0.3), 0 0 60px rgba(0,240,255,0.2)',
              }}
            >
              Enter the GHOULVERSE
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== GAME - CLUB FLYER STYLE ===== */}
      <section ref={gameRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div
            className="reveal relative p-8 md:p-16 text-center overflow-hidden border-2"
            style={{
              borderColor: '#ff00ff40',
              background: 'linear-gradient(135deg, rgba(255,0,255,0.05), rgba(0,240,255,0.05))',
            }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#ff00ff]" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00f0ff]" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00f0ff]" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#ff00ff]" />

            <div
              className="absolute -top-32 -left-32 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
              style={{ background: '#ff00ff' }}
            />
            <div
              className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
              style={{ background: '#00f0ff' }}
            />

            <Gamepad2 className="reveal w-12 h-12 text-[#ff00ff] mx-auto mb-6"
              style={{ filter: 'drop-shadow(0 0 10px rgba(255,0,255,0.5))' }} />

            <h2 className="reveal font-bungee text-4xl md:text-6xl text-white mb-4 relative z-10"
              style={{ textShadow: '0 0 20px rgba(255,0,255,0.3)' }}>
              PLAY GHOULVERSE
            </h2>

            <p className="reveal text-[#94a3b8] max-w-xl mx-auto mb-8 relative z-10 text-sm md:text-base">
              Pilot {config.name} through the Void in this epic endless runner.
              Battle bacteria, unlock all 8 ghouls, and claim your place on the leaderboard.
            </p>

            <a
              href={config.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal relative z-10 inline-flex items-center gap-2 px-8 py-4 font-bungee text-sm tracking-wider uppercase transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #ff00ff, #ff0080)',
                color: '#0a0a1a',
                boxShadow: '0 0 30px rgba(255,0,255,0.4)',
              }}
            >
              <Gamepad2 className="w-5 h-5" />
              PLAY NOW
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER / CTA ===== */}
      <section ref={ctaRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="reveal mb-8">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#ff00ff] mb-4 block">
              Guest List
            </span>
            <h2 className="font-bungee text-4xl md:text-5xl text-white mb-4"
              style={{ textShadow: '0 0 20px rgba(255,255,255,0.15)' }}>
              {config.cta.headline}
            </h2>
            <p className="text-[#94a3b8]">
              {config.cta.subheadline}
            </p>
          </div>

          <div className="reveal flex flex-col sm:flex-row gap-3 mb-16">
            <input
              type="email"
              placeholder={config.cta.placeholderText}
              className="flex-1 px-5 py-4 font-inter text-sm text-white placeholder:text-[#94a3b8]/40 outline-none transition-all bg-transparent border-2 focus:border-[#ff00ff]"
              style={{ borderColor: 'rgba(255,0,255,0.3)' }}
            />
            <button
              className="px-8 py-4 font-bungee text-sm tracking-wider uppercase transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #ff00ff, #00f0ff)',
                color: '#0a0a1a',
                boxShadow: '0 0 20px rgba(255,0,255,0.3)',
              }}
            >
              {config.cta.buttonText}
            </button>
          </div>

          <div className="reveal flex items-center justify-center gap-3 mb-10">
            {[Twitter, Instagram, Youtube].map((Icon, i) => {
              const colors = ['#ff00ff', '#00f0ff', '#ffff00'];
              return (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 flex items-center justify-center transition-all hover:scale-110 border-2"
                  style={{
                    borderColor: `${colors[i]}40`,
                    background: 'rgba(10, 10, 26, 0.8)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors[i];
                    e.currentTarget.style.boxShadow = `0 0 15px ${colors[i]}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${colors[i]}40`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: colors[i] }} />
                </a>
              );
            })}
          </div>

          <div className="reveal mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
            <a
              href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-[#ff00ff] transition-colors flex items-center gap-1 tracking-wider"
            >
              <Ghost className="w-3 h-3" />
              Explore the GHOULVERSE
            </a>
            <span className="text-[#94a3b8]/20 hidden sm:inline">|</span>
            <a
              href={config.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-[#00f0ff] transition-colors flex items-center gap-1 tracking-wider"
            >
              <Gamepad2 className="w-3 h-3" />
              Play GHOULVERSE
            </a>
          </div>

          <p className="reveal text-[#94a3b8]/30 text-xs tracking-wider">
            &copy; 2025 <span className="font-bungee text-[#ff00ff]/60">{config.name}</span> — All rights reserved.
          </p>
          <p className="reveal text-[#94a3b8]/20 text-[10px] mt-2 tracking-wider">
            {config.name} is part of the{' '}
            <a href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'} target="_blank" rel="noopener noreferrer"
              className="hover:text-[#ff00ff] transition-colors">
              GHOULVERSE
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
