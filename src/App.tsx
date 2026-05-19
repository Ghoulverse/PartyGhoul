import PartyMascot from '@/components/PartyMascot';
import PartyParticles from '@/components/PartyParticles';
import Home from '@/pages/Home';

export default function App() {
  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Ambient party particles (confetti, glow sticks, sparkles) */}
      <PartyParticles />

      {/* The interactive party mascot */}
      <PartyMascot />

      {/* Page content */}
      <Home />
    </>
  );
}
