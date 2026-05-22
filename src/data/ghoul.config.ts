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
  fundingAsk: string;
  valuation: string;
  equityOffered: string;
  projectedRevenue: { year: string; amount: string; sources: string }[];
  roiTarget: string;
  partnerships: { type: string; description: string }[];
  revenueStreams: { stream: string; description: string; timeline: string }[];
}

export const config: GhoulConfig = {
  id: "party",
  name: "PARTY GHOUL",
  tagline: "The Aftermath Specialist",
  description:
    "When the music stops and the lights come up, PARTY GHOUL emerges from the shadows. No mess too wild, no stain too stubborn. From event-safe drug testing kits to throwing its own festival — PARTY GHOUL protects every part of the party.",
  domain: "https://www.partyghoul.com",
  icon: "🎉",
  isLeader: false,

  products: [
    {
      name: "Red Wine Remover",
      tagline: "Lifts cabernet before it sets",
      description: "Planned formulation for event aftermath. Targets red wine, fruit juice, and organic pigments.",
      category: "core",
      volume: "500ml Spray",
      price: "$TBD",
      features: ["Enzyme-based formula", "Safe on delicate fabrics", "Rapid action"],
      heroIngredient: "Fast-Acting Ectoplasm™",
    },
    {
      name: "Party Surface Wipes",
      tagline: "One wipe. Zero evidence.",
      description: "Planned pre-moistened wipes for rapid surface restoration at venues and events.",
      category: "core",
      volume: "40 Pack",
      price: "$TBD",
      features: ["Biodegradable fibre", "Alcohol-free formula", "Re-sealable pouch"],
      heroIngredient: "Fast-Acting Ectoplasm™",
    },
    {
      name: "Morning-After Floor Wash",
      tagline: "The carpet remembers. We don't.",
      description: "Planned deep-penetrating floor solution for carpets, tiles, and hardwood post-event.",
      category: "core",
      volume: "1L Concentrate",
      price: "$TBD",
      features: ["Makes 5L diluted", "Pet-safe formulation", "Lavender finish"],
      heroIngredient: "Fast-Acting Ectoplasm™",
    },
    {
      name: "Glitter Annihilator",
      tagline: "Removes craft herpes from any surface",
      description: "Planned professional-grade glitter and micro-debris removal for venues.",
      category: "pro",
      volume: "750ml Pro Spray",
      price: "$TBD",
      features: ["Electrostatic capture", "Safe on electronics", "Event-hall approved"],
      heroIngredient: "Fast-Acting Ectoplasm™",
    },
    {
      name: "Confetti Dissolver Pro",
      tagline: "Industrial-grade celebration cleanup",
      description: "Planned heavy-duty paper and foil dissolution for venues and outdoor spaces.",
      category: "pro",
      volume: "2L Pro Drum",
      price: "$TBD",
      features: ["Hose-attachment compatible", "Eco-certified breakdown", "Venue bulk pricing"],
      heroIngredient: "Fast-Acting Ectoplasm™",
    },
    {
      name: "UV Stain Detector Pen",
      tagline: "Find what the lights hid",
      description: "Planned UV-A torch for revealing invisible organic stains in event spaces.",
      category: "tool",
      volume: "Kit",
      price: "$TBD",
      features: ["365nm UV-A LED", "2-hour battery life", "Marking tip included"],
    },
    {
      name: "The Hangover Kit",
      tagline: "Everything in one place",
      description: "Planned hard-shell carry case for mobile Party Ghoul deployment.",
      category: "tool",
      volume: "Carry Case",
      price: "$TBD",
      features: ["Fits 6 products", "Splash-resistant shell", "Shoulder strap included"],
    },
    {
      name: "Party Wipes Refill",
      tagline: "40 wipes. Zero plastic.",
      description: "Planned compostable refill pack for the Party Surface Wipes system.",
      category: "refill",
      volume: "40 Wipes",
      price: "$TBD",
      features: ["100% compostable", "No outer plastic", "Home-composts in 90 days"],
      heroIngredient: "Fast-Acting Ectoplasm™",
    },
    {
      name: "NYE Sparkle Destroyer",
      tagline: "New Year's limited edition",
      description: "Planned limited-batch formulation for fireworks residue and champagne spray.",
      category: "limited",
      volume: "500ml",
      price: "$TBD",
      features: ["Limited batch", "Metallic residue formula", "Collectible label art"],
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
      id: "goo",
      name: "GOO GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/goo/",
      icon: "👻",
      color: "#ff00ff",
      realm: "The Goo Dimension",
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
      id: "beauty",
      name: "BEAUTY GHOUL",
      domain: "https://www.beautyghoul.com",
      icon: "💄",
      color: "#ec4899",
      realm: "The Glamour Dimension",
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
      id: "zen",
      name: "ZEN GHOUL",
      domain: "https://www.zenghoul.com",
      icon: "🧘",
      color: "#a855f7",
      realm: "The Tranquil Gardens",
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
      id: "geek",
      name: "GEEK GHOUL",
      domain: "https://www.geekghoul.com",
      icon: "💻",
      color: "#00d4ff",
      realm: "The Mainframe",
      live: true,
    },
    {
      id: "sport",
      name: "SPORT GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/sport/",
      icon: "🏆",
      color: "#f97316",
      realm: "The Arena",
      live: false,
    },
    {
      id: "googoo",
      name: "GOO GOO",
      domain: "https://www.ghoulverse.com/ghouls/googoo/",
      icon: "🍼",
      color: "#3b82f6",
      realm: "The Nursery",
      live: false,
    },
    {
      id: "kid",
      name: "KID GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/kid/",
      icon: "🧒",
      color: "#ef4444",
      realm: "The Playground",
      live: false,
    },
    {
      id: "teen",
      name: "TEEN GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/teen/",
      icon: "🎧",
      color: "#8b5cf6",
      realm: "The Hangout",
      live: false,
    },
    {
      id: "scholar",
      name: "SCHOLAR GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/scholar/",
      icon: "📚",
      color: "#f97316",
      realm: "The Infinite Library",
      live: false,
    },
  ],

  cta: {
    headline: "Investor Inquiries",
    subheadline: "Join the GHOULVERSE portfolio. Request the full investor deck and financial projections.",
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

  marketSize: "$14B global event services + $250B character licensing market",
  traction: [
    { label: "Character Websites", value: "6 Live", status: "complete" },
    { label: "GOO GHOUL™ Trademark", value: "IP Australia — Accepted", status: "complete" },
    { label: "GHOULVERSE Game", value: "Live", status: "complete" },
    { label: "Brand Partnerships", value: "Seeking First Deals", status: "upcoming" },
  ],
  ipStatus: "Trademark classes identified — Class 3 (event cleaning preparations) and Class 41 (event organisation & entertainment services). Filing planned post-funding.",
  ipClasses: [
    "Class 3 — Cleaning preparations for events & venues",
    "Class 41 — Entertainment & event organisation services",
    "Class 25 — Costumes, apparel & party wear",
  ],
  roadmap: [
    { phase: "Phase 1", title: "Foundation", items: ["12 character websites live", "GOO GHOUL™ Class 3 (AU) filed", "GHOULVERSE game launched"], status: "complete" },
    { phase: "Phase 1.5", title: "International IP", items: ["US trademark via Madrid Protocol", "EU trademark filing", "Defensive name registrations"], status: "in-progress" },
    { phase: "Phase 2", title: "Mascot Creation", items: ["24 professional mascots (2 per ghoul)", "$120K investment across 12 characters"], status: "upcoming" },
    { phase: "Phase 3", title: "Partnerships & Revenue", items: ["Sector sponsorships", "Affiliate deals", "Event appearances", "Influencer recruitment"], status: "upcoming" },
    { phase: "Phase 4", title: "Entertainment Scale", items: ["Animated series pilot", "Convention circuit", "Merchandise licensing"], status: "upcoming" },
    { phase: "Phase 5", title: "Product Launch", items: ["GOO GHOUL household cleaners", "Vertical-specific product lines"], status: "upcoming" },
  ],

  fundingAsk: "$250,000 AUD",
  valuation: "$1,250,000 pre-money",
  equityOffered: "20%",
  projectedRevenue: [
    { year: "Year 1", amount: "$200,000", sources: "Brand sponsorships, event appearances, affiliate commissions" },
    { year: "Year 2", amount: "$560,000", sources: "Licensing, events, merch royalties, content" },
    { year: "Year 3", amount: "$1,200,000", sources: "Full licensing engine + product sales" },
  ],
  roiTarget: "5–8x over 3–5 years (40–70% IRR)",
  partnerships: [
    { type: "Brand Sponsorships", description: "Existing companies in each vertical pay to associate with our character IP at events and online." },
    { type: "Affiliate Marketing", description: "Partner products featured on ghoul websites — we earn commission on referred sales." },
    { type: "Event Appearances", description: "Mascots appear at sports events, conventions, retail launches — appearance fees + brand exposure." },
    { type: "Licensing", description: "Brands license ghoul characters for their own marketing, packaging, and promotions." },
  ],
  revenueStreams: [
    { stream: "Sponsorships", description: "Sector-specific brand deals per ghoul", timeline: "Year 1" },
    { stream: "Events", description: "Mascot appearances and activations", timeline: "Year 1" },
    { stream: "Affiliate", description: "Commission on partner product sales", timeline: "Year 1" },
    { stream: "Licensing", description: "Character IP licensing to brands", timeline: "Year 2" },
    { stream: "Merchandise", description: "Royalties on plush, apparel, accessories", timeline: "Year 2" },
    { stream: "Animation", description: "YouTube/streaming ad revenue, distribution deals", timeline: "Year 2" },
    { stream: "Products", description: "Owned product lines (GOO GHOUL cleaners first)", timeline: "Year 3" },
  ],
};
