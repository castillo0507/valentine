"use client";

import { useState } from "react";
import Image from "next/image";

interface Polaroid {
  id: number;
  rotation: number;
  caption: string;
  image: string;
  scene: React.ReactNode;
}

function SunsetScene() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Sky gradient */}
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2d1b4e" />
          <stop offset="40%" stopColor="#8b3a62" />
          <stop offset="70%" stopColor="#e8756a" />
          <stop offset="100%" stopColor="#f5a962" />
        </linearGradient>
        <radialGradient id="sun" cx="50%" cy="65%" r="15%">
          <stop offset="0%" stopColor="#ffe066" />
          <stop offset="100%" stopColor="#ff7043" />
        </radialGradient>
      </defs>
      <rect width="200" height="200" fill="url(#sky)" />
      {/* Sun */}
      <circle cx="100" cy="130" r="28" fill="url(#sun)" opacity="0.9" />
      {/* Water */}
      <rect y="140" width="200" height="60" fill="#1a1040" opacity="0.6" />
      {/* Sun reflection */}
      <ellipse cx="100" cy="160" rx="20" ry="40" fill="#ff9944" opacity="0.2" />
      {/* Couple silhouette */}
      {/* Person 1 */}
      <circle cx="85" cy="110" r="6" fill="#1a0a2e" />
      <rect x="82" y="116" width="6" height="16" rx="2" fill="#1a0a2e" />
      <line x1="82" y1="120" x2="76" y2="126" stroke="#1a0a2e" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="88" y1="120" x2="97" y2="118" stroke="#1a0a2e" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="83" y1="132" x2="79" y2="142" stroke="#1a0a2e" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="87" y1="132" x2="91" y2="142" stroke="#1a0a2e" strokeWidth="2.5" strokeLinecap="round" />
      {/* Person 2 */}
      <circle cx="105" cy="108" r="6" fill="#1a0a2e" />
      {/* hair */}
      <path d="M99 106 Q105 98 111 106" fill="#1a0a2e" />
      <rect x="102" y="114" width="6" height="16" rx="2" fill="#1a0a2e" />
      <line x1="108" y1="118" x2="114" y2="125" stroke="#1a0a2e" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="102" y1="118" x2="97" y2="118" stroke="#1a0a2e" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="103" y1="130" x2="99" y2="142" stroke="#1a0a2e" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="107" y1="130" x2="111" y2="142" stroke="#1a0a2e" strokeWidth="2.5" strokeLinecap="round" />
      {/* Heart between them */}
      <path d="M95 102 Q95 97 99 97 Q103 97 103 102 Q103 97 107 97 Q111 97 111 102 Q111 108 103 113 Q95 108 95 102Z"
        fill="#ff4d6d" opacity="0.8" />
      {/* Stars */}
      {[
        [20, 20], [50, 35], [150, 15], [170, 40], [30, 50], [140, 50], [80, 15], [120, 25]
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={1.2} fill="#fff" opacity={0.6 + Math.random() * 0.4} />
      ))}
    </svg>
  );
}

function CafeScene() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="cafeBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d2b1f" />
          <stop offset="100%" stopColor="#5c3d2e" />
        </linearGradient>
      </defs>
      {/* Background */}
      <rect width="200" height="200" fill="url(#cafeBg)" />
      {/* Window */}
      <rect x="60" y="15" width="80" height="60" rx="4" fill="#1a3a5c" stroke="#8b7355" strokeWidth="3" />
      <line x1="100" y1="15" x2="100" y2="75" stroke="#8b7355" strokeWidth="2" />
      <line x1="60" y1="45" x2="140" y2="45" stroke="#8b7355" strokeWidth="2" />
      {/* Moon through window */}
      <circle cx="120" cy="35" r="8" fill="#f5e6c8" opacity="0.8" />
      {/* Table */}
      <ellipse cx="100" cy="150" rx="70" ry="12" fill="#6b4226" />
      <rect x="95" y="150" width="10" height="40" fill="#5a3520" />
      {/* Coffee cup 1 */}
      <rect x="60" y="125" width="25" height="22" rx="3" fill="#fff5ee" />
      <path d="M85 130 Q95 130 95 140 Q95 150 85 147" fill="none" stroke="#fff5ee" strokeWidth="2.5" />
      <ellipse cx="72" cy="125" rx="13" ry="3" fill="#e8ddd0" />
      {/* Coffee inside */}
      <ellipse cx="72" cy="127" rx="10" ry="2.5" fill="#4a2c17" />
      {/* Steam */}
      <path d="M65 118 Q63 110 67 105" fill="none" stroke="#ddd" strokeWidth="1" opacity="0.5" />
      <path d="M72 115 Q70 107 74 102" fill="none" stroke="#ddd" strokeWidth="1" opacity="0.5" />
      <path d="M79 118 Q77 110 81 105" fill="none" stroke="#ddd" strokeWidth="1" opacity="0.5" />
      {/* Coffee cup 2 */}
      <rect x="115" y="125" width="25" height="22" rx="3" fill="#ffe4e1" />
      <path d="M140 130 Q150 130 150 140 Q150 150 140 147" fill="none" stroke="#ffe4e1" strokeWidth="2.5" />
      <ellipse cx="127" cy="125" rx="13" ry="3" fill="#f0d0d0" />
      <ellipse cx="127" cy="127" rx="10" ry="2.5" fill="#4a2c17" />
      {/* Latte art heart */}
      <path d="M124 130 Q124 128 126 128 Q128 128 128 130 Q128 128 130 128 Q132 128 132 130 Q132 133 128 135 Q124 133 124 130Z"
        fill="#d4a574" opacity="0.7" />
      {/* Steam 2 */}
      <path d="M120 118 Q118 110 122 105" fill="none" stroke="#ddd" strokeWidth="1" opacity="0.5" />
      <path d="M127 115 Q125 107 129 102" fill="none" stroke="#ddd" strokeWidth="1" opacity="0.5" />
      <path d="M134 118 Q132 110 136 105" fill="none" stroke="#ddd" strokeWidth="1" opacity="0.5" />
      {/* Shared pastry plate */}
      <ellipse cx="100" cy="142" rx="15" ry="5" fill="#e8ddd0" />
      {/* Heart cookie */}
      <path d="M96 138 Q96 134 100 134 Q104 134 104 138 Q104 134 108 134 Q112 134 112 138 Q112 142 104 146 Q96 142 96 138Z"
        fill="#ff6b8a" />
      {/* Candle */}
      <rect x="97" y="95" width="6" height="28" rx="2" fill="#cc3355" />
      <ellipse cx="100" cy="95" rx="3" ry="1.5" fill="#cc3355" />
      {/* Flame */}
      <path d="M100 85 Q97 90 100 95 Q103 90 100 85Z" fill="#ffd700" />
      <path d="M100 88 Q99 91 100 94 Q101 91 100 88Z" fill="#ff9944" />
      {/* Warm glow */}
      <circle cx="100" cy="90" r="15" fill="#ffd700" opacity="0.06" />
    </svg>
  );
}

function DanceScene() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <radialGradient id="spotlight" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#4a2040" />
          <stop offset="100%" stopColor="#1a0a1e" />
        </radialGradient>
      </defs>
      {/* Background */}
      <rect width="200" height="200" fill="url(#spotlight)" />
      {/* Floor */}
      <rect y="165" width="200" height="35" fill="#120818" opacity="0.5" />
      <line x1="0" y1="165" x2="200" y2="165" stroke="#ff4d6d" strokeWidth="0.5" opacity="0.3" />
      {/* Disco/sparkle effects */}
      {[
        [30, 25], [170, 30], [45, 60], [155, 55], [20, 90], [180, 85],
        [50, 15], [150, 20], [35, 120], [165, 110], [80, 30], [120, 20]
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={1} fill="#ffd700" opacity={0.3 + (i % 3) * 0.2}>
            <animate attributeName="opacity" values="0.2;0.7;0.2" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
      {/* Musical notes */}
      <text x="30" y="80" fontSize="16" fill="#ff8fa3" opacity="0.4">♪</text>
      <text x="160" y="60" fontSize="14" fill="#ff8fa3" opacity="0.3">♫</text>
      <text x="55" y="40" fontSize="12" fill="#ffb3c1" opacity="0.35">♪</text>
      <text x="140" y="95" fontSize="15" fill="#ffb3c1" opacity="0.35">♩</text>
      {/* Dancing couple */}
      {/* Person 1 (lead) */}
      <circle cx="88" cy="95" r="8" fill="#d4a574" />
      {/* Hair */}
      <path d="M80 92 Q88 82 96 92" fill="#2c1810" />
      {/* Body */}
      <path d="M82 103 Q85 130 80 155" stroke="#2c2c2c" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M94 103 Q91 130 96 155" stroke="#2c2c2c" strokeWidth="3" fill="none" strokeLinecap="round" />
      <rect x="80" y="103" width="16" height="22" rx="4" fill="#2c2c2c" />
      {/* Lead arm reaching to partner */}
      <path d="M80 108 Q75 112 72 108" stroke="#d4a574" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M96 110 Q105 105 112 108" stroke="#d4a574" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Person 2 (follow) */}
      <circle cx="118" cy="93" r="8" fill="#e8c4a0" />
      {/* Long hair */}
      <path d="M110 90 Q118 80 126 90 Q128 100 124 108" fill="#4a2c17" opacity="0.8" />
      <path d="M110 90 Q108 100 112 108" fill="#4a2c17" opacity="0.8" />
      {/* Dress */}
      <path d="M110 101 L105 160 L131 160 L126 101Z" fill="#cc3355" />
      <path d="M105 160 Q118 150 131 160" fill="#aa2244" />
      {/* Follow arm */}
      <path d="M110 106 Q105 108 102 112" stroke="#e8c4a0" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M126 106 Q135 112 138 120" stroke="#e8c4a0" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Holding hands */}
      <circle cx="102" cy="112" r="2.5" fill="#d4a574" />
      <circle cx="102" cy="112" r="2.5" fill="#e8c4a0" opacity="0.5" />
      {/* Hearts floating up */}
      <path d="M98 82 Q98 79 101 79 Q104 79 104 82 Q104 79 107 79 Q110 79 110 82 Q110 86 104 89 Q98 86 98 82Z"
        fill="#ff4d6d" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;-5,-15;0,0" dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M115 78 Q115 76 117 76 Q119 76 119 78 Q119 76 121 76 Q123 76 123 78 Q123 80 119 83 Q115 80 115 78Z"
        fill="#ff8fa3" opacity="0.5">
        <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2.5s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0,0;5,-20;0,0" dur="3.5s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

function GardenScene() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="gardenSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fce4ec" />
          <stop offset="100%" stopColor="#f8bbd0" />
        </linearGradient>
      </defs>
      {/* Sky */}
      <rect width="200" height="200" fill="url(#gardenSky)" />
      {/* Grass */}
      <ellipse cx="100" cy="200" rx="120" ry="60" fill="#4caf50" opacity="0.3" />
      <rect y="170" width="200" height="30" fill="#388e3c" opacity="0.4" />
      {/* Flowers */}
      {[
        [25, 155, "#ff4d6d"], [55, 160, "#ff8fa3"], [145, 158, "#e91e63"],
        [175, 155, "#ff6b8a"], [100, 162, "#ff4d6d"], [70, 150, "#ffb3c1"], [130, 152, "#ff1744"]
      ].map(([cx, cy, color], i) => (
        <g key={i}>
          <line x1={cx as number} y1={cy as number} x2={cx as number} y2={(cy as number) + 20} stroke="#2e7d32" strokeWidth="2" />
          {[0, 72, 144, 216, 288].map((angle, j) => (
            <circle
              key={j}
              cx={(cx as number) + Math.cos((angle * Math.PI) / 180) * 5}
              cy={(cy as number) + Math.sin((angle * Math.PI) / 180) * 5}
              r="4"
              fill={color as string}
              opacity="0.8"
            />
          ))}
          <circle cx={cx as number} cy={cy as number} r="3" fill="#ffd700" />
        </g>
      ))}
      {/* Bench */}
      <rect x="60" y="120" width="80" height="6" rx="2" fill="#8d6e63" />
      <rect x="60" y="110" width="80" height="4" rx="1" fill="#795548" />
      <rect x="65" y="126" width="4" height="25" fill="#6d4c41" />
      <rect x="131" y="126" width="4" height="25" fill="#6d4c41" />
      {/* Couple on bench */}
      {/* Person 1 */}
      <circle cx="85" cy="98" r="7" fill="#d4a574" />
      <rect x="80" y="105" width="10" height="15" rx="3" fill="#3f51b5" />
      <line x1="80" y1="120" x2="78" y2="135" stroke="#2c2c5c" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="90" y1="120" x2="92" y2="135" stroke="#2c2c5c" strokeWidth="2.5" strokeLinecap="round" />
      {/* Person 2 */}
      <circle cx="115" cy="96" r="7" fill="#e8c4a0" />
      <path d="M108 93 Q115 86 122 93 Q124 100 120 105" fill="#4a2c17" opacity="0.6" />
      <path d="M108 93 Q106 100 110 105" fill="#4a2c17" opacity="0.6" />
      <rect x="110" y="103" width="10" height="15" rx="3" fill="#e91e63" />
      <line x1="110" y1="118" x2="108" y2="135" stroke="#c2185b" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="120" y1="118" x2="122" y2="135" stroke="#c2185b" strokeWidth="2.5" strokeLinecap="round" />
      {/* Leaning together */}
      <line x1="90" y1="108" x2="95" y2="105" stroke="#d4a574" strokeWidth="2" strokeLinecap="round" />
      <line x1="110" y1="106" x2="105" y2="103" stroke="#e8c4a0" strokeWidth="2" strokeLinecap="round" />
      {/* Heart above */}
      <path d="M95 82 Q95 78 99 78 Q103 78 103 82 Q103 78 107 78 Q111 78 111 82 Q111 87 103 91 Q95 87 95 82Z"
        fill="#ff4d6d" opacity="0.7" />
      {/* Butterflies */}
      <g transform="translate(40, 80)">
        <path d="M0 0 Q-6 -5 -4 -10 Q-2 -5 0 0" fill="#ff8fa3" opacity="0.6" />
        <path d="M0 0 Q6 -5 4 -10 Q2 -5 0 0" fill="#ffb3c1" opacity="0.6" />
      </g>
      <g transform="translate(160, 70)">
        <path d="M0 0 Q-5 -4 -3 -8 Q-1 -4 0 0" fill="#e91e63" opacity="0.5" />
        <path d="M0 0 Q5 -4 3 -8 Q1 -4 0 0" fill="#f48fb1" opacity="0.5" />
      </g>
      {/* Clouds */}
      <ellipse cx="40" cy="30" rx="20" ry="10" fill="#fff" opacity="0.3" />
      <ellipse cx="55" cy="28" rx="15" ry="8" fill="#fff" opacity="0.25" />
      <ellipse cx="150" cy="25" rx="18" ry="9" fill="#fff" opacity="0.3" />
      <ellipse cx="165" cy="23" rx="12" ry="7" fill="#fff" opacity="0.25" />
    </svg>
  );
}

const polaroids: Polaroid[] = [
  {
    id: 1,
    rotation: -6,
    caption: "Our Almost Sunset Date 🌅",
    image: "sunset.jpg",
    scene: <SunsetScene />,
  },
  {
    id: 2,
    rotation: 3,
    caption: "Church Date ☕",
    image: "church.jpg",
    scene: <CafeScene />,
  },
  {
    id: 3,
    rotation: -4,
    caption: "Arcade Date💃",
    image: "arcade1.jpg",
    scene: <DanceScene />,
  },
  {
    id: 4,
    rotation: 5,
    caption: "Cinema Date 🌸",
    image: "cinema.jpg",
    scene: <GardenScene />,
  },
  {
    id: 5,
    rotation: -3,
    caption: "Travel Date✨",
    image: "travel.jpg",
    scene: <SunsetScene />,
  },
  {
    id: 6,
    rotation: 4,
    caption: "Beach Date 🏖️",
    image: "beach.jpg",
    scene: <GardenScene />,
  },
  {
    id: 7,
    rotation: -5,
    caption: "Food trip Date🍕",
    image: "foodtrip.jpg",
    scene: <CafeScene />,
  },
  {
    id: 8,
    rotation: 3,
    caption: "Night Gala Date🎨",
    image: "nightgala.jpg",
    scene: <DanceScene />,
  },
];

export default function PolaroidPhotos() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <div className="flex flex-wrap justify-center gap-6 py-4">
      {polaroids.map((p) => (
        <div
          key={p.id}
          className="group cursor-pointer"
          style={{ transform: `rotate(${p.rotation}deg)` }}
          onClick={() => setFlipped(flipped === p.id ? null : p.id)}
        >
          <div
            className="relative w-[180px] h-[220px] transition-all duration-500 ease-in-out group-hover:scale-105"
            style={{
              transformStyle: "preserve-3d",
              transform: flipped === p.id ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 backface-hidden rounded-sm"
              style={{
                backfaceVisibility: "hidden",
                background: "linear-gradient(145deg, #fefefe, #f0ece4)",
                padding: "10px 10px 40px 10px",
                boxShadow:
                  "0 4px 15px rgba(0,0,0,0.25), 0 1px 4px rgba(0,0,0,0.15), inset 0 0 30px rgba(0,0,0,0.03)",
              }}
            >
              {/* Photo area */}
              <div className="w-full h-[150px] overflow-hidden bg-gray-200 relative">
                <Image
                  src={p.image}
                  alt={p.caption}
                  fill
                  className="object-cover"
                  sizes="160px"
                  unoptimized
                />
                {/* Subtle photo overlay for vintage feel */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(0,0,0,0.08) 100%)",
                    mixBlendMode: "multiply",
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 20px rgba(0,0,0,0.15)",
                  }}
                />
              </div>
              {/* Caption */}
              <p
                className="text-center mt-2 text-[#5c4033] text-sm"
                style={{ fontFamily: "var(--font-dancing), cursive" }}
              >
                {p.caption}
              </p>
              {/* Tape effect */}
              <div
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-[50px] h-[14px] rounded-sm opacity-40"
                style={{
                  background: "linear-gradient(135deg, rgba(255,235,180,0.7), rgba(220,200,150,0.5))",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                }}
              />
            </div>

            {/* Back */}
            <div
              className="absolute inset-0 rounded-sm flex items-center justify-center"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                background: "linear-gradient(145deg, #fefefe, #f5f0e8)",
                boxShadow:
                  "0 4px 15px rgba(0,0,0,0.25), 0 1px 4px rgba(0,0,0,0.15)",
              }}
            >
              <div className="text-center px-4">
                <p
                  className="text-[#8b4553] text-xl mb-2"
                  style={{ fontFamily: "var(--font-dancing), cursive" }}
                >
                  {p.caption}
                </p>
                <p className="text-[#a08070] text-xs italic">
                  Feb 14, 2026
                </p>
                <p
                  className="text-[#cc3355] text-2xl mt-3"
                  style={{ fontFamily: "var(--font-vibes), cursive" }}
                >
                  Forever yours 💕
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
