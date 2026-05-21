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
  tagline: string;
  description: string;
  category: 'core' | 'pro' | 'tool' | 'refill' | 'limited';
  volume: string;
  price: string;
  features: string[];
  heroIngredient?: string;
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
  science: {
    title: string;
    subtitle: string;
    description: string;
    adaptation: string;
    stats: { label: string; value: string }[];
  };
  marketSize: string;
  traction: { label: string; value: string; status: 'complete' | 'in-progress' | 'upcoming' }[];
  ipStatus: string;
  ipClasses: string[];
  roadmap: { phase: string; title: string; items: string[]; status: 'complete' | 'in-progress' | 'upcoming' }[];
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
    {
      name: "Red Wine Remover",
      tagline: "Lifts cabernet before it sets",
      description: "Molecular-grade stain lifter engineered for the aftermath. Dissolves red wine, fruit juice, and organic pigments at the cellular level.",
      category: "core",
      volume: "500ml Spray",
      price: "$19.99 AUD",
      features: ["Works in 30 seconds", "Safe on wool & silk", "No bleaching agents"],
      heroIngredient: "Fast-Acting Ectoplasm™",
    },
    {
      name: "Party Surface Wipes",
      tagline: "One wipe. Zero evidence.",
      description: "Pre-moistened industrial wipes for rapid surface restoration. Handles stickiness, spills, and mystery residues.",
      category: "core",
      volume: "40 Pack",
      price: "$12.99 AUD",
      features: ["Biodegradable fibre", "Alcohol-free formula", "Re-sealable pouch"],
      heroIngredient: "Fast-Acting Ectoplasm™",
    },
    {
      name: "Morning-After Floor Wash",
      tagline: "The carpet remembers. We don't.",
      description: "Deep-penetrating floor solution for carpets, tiles, and hardwood. Neutralises odours while lifting embedded stains.",
      category: "core",
      volume: "1L Concentrate",
      price: "$24.99 AUD",
      features: ["Makes 5L diluted", "Pet-safe formulation", "Lavender finish"],
      heroIngredient: "Fast-Acting Ectoplasm™",
    },
    {
      name: "Glitter Annihilator",
      tagline: "Removes craft herpes from any surface",
      description: "The professional's choice for glitter, sequin, and micro-debris removal. Electrostatic capture technology lifts particles vacuum cleaners miss.",
      category: "pro",
      volume: "750ml Pro Spray",
      price: "$34.99 AUD",
      features: ["Electrostatic capture", "Safe on electronics", "Event-hall approved"],
      heroIngredient: "Fast-Acting Ectoplasm™",
    },
    {
      name: "Confetti Dissolver Pro",
      tagline: "Industrial-grade celebration cleanup",
      description: "Heavy-duty paper and foil dissolution for venues, halls, and outdoor spaces. Breaks down biodegradable confetti in minutes.",
      category: "pro",
      volume: "2L Pro Drum",
      price: "$49.99 AUD",
      features: ["Hose-attachment compatible", "Eco-certified breakdown", "Venue bulk pricing"],
      heroIngredient: "Fast-Acting Ectoplasm™",
    },
    {
      name: "UV Stain Detector Pen",
      tagline: "Find what the lights hid",
      description: "Handheld UV-A torch with integrated marking tip. Reveals invisible organic stains so nothing gets missed.",
      category: "tool",
      volume: "Kit",
      price: "$29.99 AUD",
      features: ["365nm UV-A LED", "2-hour battery life", "Marking tip included"],
    },
    {
      name: "The Hangover Kit",
      tagline: "Everything in one place",
      description: "Hard-shell carry case with custom foam insert. Holds your full Party Ghoul arsenal for mobile deployment.",
      category: "tool",
      volume: "Carry Case",
      price: "$59.99 AUD",
      features: ["Fits 6 products", "Splash-resistant shell", "Shoulder strap included"],
    },
    {
      name: "Party Wipes Refill",
      tagline: "40 wipes. Zero plastic.",
      description: "Compostable refill pack for the Party Surface Wipes system. Same strength, less waste.",
      category: "refill",
      volume: "40 Wipes",
      price: "$9.99 AUD",
      features: ["100% compostable", "No outer plastic", "Home-composts in 90 days"],
      heroIngredient: "Fast-Acting Ectoplasm™",
    },
    {
      name: "NYE Sparkle Destroyer",
      tagline: "New Year's limited edition",
      description: "A once-a-year formulation tuned for fireworks residue, champagne spray, and confetti fallout. When the ball drops, we pick it up.",
      category: "limited",
      volume: "500ml",
      price: "$27.99 AUD",
      features: ["Limited batch of 2,000", "Metallic residue formula", "Collectible label art"],
      heroIngredient: "Fast-Acting Ectoplasm™",
    },
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
      id: "geek",
      name: "GEEK GHOUL",
      domain: "https://www.geekghoul.com",
      icon: "💻",
      color: "#00d4ff",
      realm: "The Mainframe",
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
    headline: "Investor Inquiries",
    subheadline: "Join the GHOULVERSE portfolio. Request the full product deck and financial projections.",
    buttonText: "Request Deck",
    placeholderText: "Enter your email...",
  },

  gameUrl: "https://www.ghoulverse.com/play/",

  social: {
    twitter: "#",
    instagram: "#",
    youtube: "#",
  },

  science: {
    title: "The Science",
    subtitle: "Fast-Acting Ectoplasm™",
    description: "Every PARTY GHOUL product is powered by Fast-Acting Ectoplasm™ — a proprietary enzyme complex that accelerates molecular breakdown at the point of contact. Developed in the GHOULVERSE labs, this technology dissolves organic stains in seconds rather than hours.",
    adaptation: "For the aftermath, we engineered a rapid-release variant that activates on contact with alcohol-based pigments, sugars, and synthetic dyes — the molecular signature of every great party.",
    stats: [
      { label: "Stain Dissolution Speed", value: "< 30 sec" },
      { label: "Active Enzyme Strains", value: "12" },
      { label: "Surface Compatibility", value: "40+" },
      { label: "Biodegradability", value: "98%" },
    ],
  },

  marketSize: "$14B global event services market",
  traction: [
    { label: "Formulations", value: "9 Complete", status: "complete" },
    { label: "Manufacturing", value: "Partners Secured", status: "complete" },
    { label: "Trademark", value: "IP Australia — Accepted", status: "complete" },
    { label: "Retail", value: "In Negotiation", status: "in-progress" },
  ],
  ipStatus: "Trademark filed — Class 3 (event cleaning preparations) and Class 41 (event organisation & entertainment services).",
  ipClasses: [
    "Class 3 — Cleaning preparations for events & venues",
    "Class 41 — Entertainment & event organisation services",
    "Class 25 — Costumes, apparel & party wear",
  ],
  roadmap: [
    { phase: "Phase 1", title: "Brand Launch", items: ["6 sites live", "54 SKUs formulated", "GOO RUNNER game launched"], status: "complete" },
    { phase: "Phase 2", title: "Retail Partnerships", items: ["Chemist Warehouse", "Event supply wholesalers", "Venue partnerships"], status: "in-progress" },
    { phase: "Phase 3", title: "International", items: ["US TM filing", "UK/EU expansion", "Amazon FBA launch"], status: "upcoming" },
    { phase: "Phase 4", title: "Game Monetisation", items: ["In-app purchases", "Character skins", "NFT collectibles"], status: "upcoming" },
    { phase: "Phase 5", title: "New Ghouls", items: ["Toddler Ghoul", "Scholar Ghoul", "2 mystery verticals"], status: "upcoming" },
  ],
};
