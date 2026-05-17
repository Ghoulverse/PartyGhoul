/**
 * Ghoul Site Configuration
 */

export interface CrossLink {
  id: string;
  name: string;
  domain: string;
  icon: string;
  color: string;
  realm: string;
  live: boolean;
}

export interface Product {
  name: string;
  description?: string;
  comingSoon?: boolean;
}

export interface GhoulConfig {
  id: string;
  name: string;
  tagline: string;
  description: string;
  domain: string;
  icon: string;
  isLeader: boolean;
  products: Product[];
  crossLinks: CrossLink[];
  cta: {
    headline: string;
    subheadline: string;
    buttonText: string;
    placeholderText: string;
  };
  gameUrl: string;
  social: {
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
}

export const config: GhoulConfig = {
  id: "party",
  name: "PARTY GHOUL",
  tagline: "The Aftermath Specialist",
  description:
    "When the music stops and the lights come up, PARTY GHOUL emerges from the shadows. No mess too wild, no stain too stubborn.",
  domain: "https://www.partyghoul.com",
  icon: "🎉",
  isLeader: false,

  products: [
    { name: "Red Wine Remover", comingSoon: true },
    { name: "Glitter Annihilator", comingSoon: true },
    { name: "Confetti Dissolver", comingSoon: true },
    { name: "Party Surface Wipes", comingSoon: true },
    { name: "Morning-After Rescue Kit", comingSoon: true },
  ],

  crossLinks: [
    {
      id: "ghoulverse",
      name: "GHOULVERSE",
      domain: "https://www.ghoulverse.com",
      icon: "🌌",
      color: "#00f0ff",
      realm: "The Universe",
      live: true,
    },
    {
      id: "zen",
      name: "ZEN GHOUL",
      domain: "https://www.zenghoul.com",
      icon: "🧘",
      color: "#a855f7",
      realm: "The Tranquil Gardens",
      live: true,
    },
    {
      id: "party",
      name: "PARTY GHOUL",
      domain: "https://www.partyghoul.com",
      icon: "🎉",
      color: "#ff00ff",
      realm: "The Neon District",
      live: true,
    },
    {
      id: "tradie",
      name: "TRADIE GHOUL",
      domain: "https://www.tradieghoul.com",
      icon: "🔧",
      color: "#eab308",
      realm: "The Industrial Wastes",
      live: true,
    },
    {
      id: "garden",
      name: "GARDEN GHOUL",
      domain: "https://www.gardenghoul.com",
      icon: "🌿",
      color: "#22c55e",
      realm: "The Verdant Wilds",
      live: true,
    },
    {
      id: "beauty",
      name: "BEAUTY GHOUL",
      domain: "https://www.beautyghoul.com",
      icon: "💄",
      color: "#ec4899",
      realm: "The Glamour Dimension",
      live: true,
    },
    {
      id: "scholar",
      name: "SCHOLAR GHOUL",
      domain: "https://www.scholarghoul.com",
      icon: "📚",
      color: "#f97316",
      realm: "The Infinite Library",
      live: false,
    },
    {
      id: "toddler",
      name: "TODDLER GHOUL",
      domain: "https://www.toddlerghoul.com",
      icon: "🍼",
      color: "#3b82f6",
      realm: "The Playful Realm",
      live: false,
    },
  ],

  cta: {
    headline: "Wanna Party?",
    subheadline: "Join the afterlife party. Be the first to know when we drop.",
    buttonText: "Get on the List",
    placeholderText: "Enter your email...",
  },

  gameUrl: "https://www.ghoulverse.com/play/",

  social: {
    twitter: "#",
    instagram: "#",
    youtube: "#",
  },
};
