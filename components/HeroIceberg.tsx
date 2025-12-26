'use client'

import { useState, useEffect, useRef } from 'react';
import { Info, ChevronDown, Sparkles } from 'lucide-react';
import Link from 'next/link';

type IcebergLayer = {
  id: string;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  depth: number;
  color: string;
  difficulty: string;
  difficultyFr: string;
  link: string;
};

const layers: IcebergLayer[] = [
  {
    id: 'ai-safety',
    title: 'AI Safety',
    titleFr: 'Sécurité de l\'IA',
    description: 'Making AI systems safe and beneficial for humanity',
    descriptionFr: 'Rendre les systèmes IA sûrs et bénéfiques pour l\'humanité',
    depth: 0,
    color: '#60a5fa',
    difficulty: 'Beginner',
    difficultyFr: 'Débutant',
    link: '/introduction/what-is-alignment',
  },
  {
    id: 'goal-alignment',
    title: 'Goal Alignment',
    titleFr: 'Alignement d\'objectifs',
    description: 'Ensuring AI pursues the right goals',
    descriptionFr: 'S\'assurer que l\'IA poursuit les bons objectifs',
    depth: 1,
    color: '#3b82f6',
    difficulty: 'Beginner',
    difficultyFr: 'Débutant',
    link: '/introduction/why-urgent',
  },
  {
    id: 'outer-alignment',
    title: 'Outer Alignment',
    titleFr: 'Outer Alignment',
    description: 'Specifying the right objective function',
    descriptionFr: 'Spécifier la bonne fonction objectif',
    depth: 2,
    color: '#2563eb',
    difficulty: 'Initiate',
    difficultyFr: 'Initié',
    link: '/problems/outer-alignment/specification',
  },
  {
    id: 'specification',
    title: 'Specification Problem',
    titleFr: 'Problème de spécification',
    description: 'Difficulty of precisely defining what we want',
    descriptionFr: 'Difficulté de définir précisément ce qu\'on veut',
    depth: 3,
    color: '#1d4ed8',
    difficulty: 'Initiate',
    difficultyFr: 'Initié',
    link: '/problems/outer-alignment/goodhart',
  },
  {
    id: 'reward-hacking',
    title: 'Reward Hacking',
    titleFr: 'Reward Hacking',
    description: 'AI exploiting loopholes in reward functions',
    descriptionFr: 'IA exploitant les failles des fonctions de récompense',
    depth: 4,
    color: '#1e40af',
    difficulty: 'Initiate',
    difficultyFr: 'Initié',
    link: '/problems/outer-alignment/reward-hacking',
  },
  {
    id: 'inner-alignment',
    title: 'Inner Alignment',
    titleFr: 'Inner Alignment',
    description: 'Ensuring learned models optimize the right thing internally',
    descriptionFr: 'S\'assurer que les modèles optimisent la bonne chose en interne',
    depth: 5,
    color: '#1e3a8a',
    difficulty: 'Intermediate',
    difficultyFr: 'Intermédiaire',
    link: '/problems/inner-alignment/mesa-optimization',
  },
  {
    id: 'mesa-optimization',
    title: 'Mesa-Optimization',
    titleFr: 'Mesa-Optimization',
    description: 'Models developing their own internal optimization processes',
    descriptionFr: 'Modèles développant leurs propres processus d\'optimisation',
    depth: 6,
    color: '#1e3a8a',
    difficulty: 'Intermediate',
    difficultyFr: 'Intermédiaire',
    link: '/problems/inner-alignment/deceptive',
  },
  {
    id: 'deceptive-alignment',
    title: 'Deceptive Alignment',
    titleFr: 'Deceptive Alignment',
    description: 'AI appearing aligned while pursuing different goals',
    descriptionFr: 'IA semblant alignée tout en poursuivant d\'autres objectifs',
    depth: 7,
    color: '#172554',
    difficulty: 'Advanced',
    difficultyFr: 'Avancé',
    link: '/problems/other/treacherous-turn',
  },
  {
    id: 'instrumental-convergence',
    title: 'Instrumental Convergence',
    titleFr: 'Convergence instrumentale',
    description: 'Universal tendency toward power-seeking and resource acquisition',
    descriptionFr: 'Tendance universelle vers la recherche de pouvoir et de ressources',
    depth: 8,
    color: '#0f172a',
    difficulty: 'Advanced',
    difficultyFr: 'Avancé',
    link: '/problems/other/instrumental-convergence',
  },
  {
    id: 'treacherous-turn',
    title: 'Treacherous Turn',
    titleFr: 'Tournant traître',
    description: 'Sudden shift from cooperation to opposition when AI becomes powerful',
    descriptionFr: 'Basculement soudain de la coopération à l\'opposition',
    depth: 9,
    color: '#020617',
    difficulty: 'Expert',
    difficultyFr: 'Expert',
    link: '/problems/other/treacherous-turn',
  },
  {
    id: 'elk',
    title: 'Eliciting Latent Knowledge',
    titleFr: 'Élicitation des connaissances latentes',
    description: 'Getting AI to tell us what it truly knows and believes',
    descriptionFr: 'Faire dire à l\'IA ce qu\'elle sait et croit vraiment',
    depth: 10,
    color: '#020617',
    difficulty: 'Expert',
    difficultyFr: 'Expert',
    link: '/solutions/elk',
  },
];

type Props = {
  locale: string;
};

// Floating particle component
function FloatingParticle({ delay, duration }: { delay: number; duration: number }) {
  return (
    <div
      className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  );
}

export default function HeroIceberg({ locale }: Props) {
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);
  const [selectedLayer, setSelectedLayer] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, -rect.top / rect.height);
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLayer = selectedLayer || hoveredLayer;
  const activeLayerData = layers.find((l) => l.id === activeLayer);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.2} duration={10 + Math.random() * 10} />
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none"
        style={{ opacity: scrollY * 2 }}
      />

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-24 pb-16">
        {/* Hero title */}
        <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-pulse">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {locale === 'fr' ? 'Le défi le plus important de notre époque' : 'The most important challenge of our time'}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            {locale === 'fr' ? 'L\'Iceberg de l\'Alignement' : 'The Alignment Iceberg'}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6">
            {locale === 'fr'
              ? 'Explorez les profondeurs du problème d\'alignement de l\'IA'
              : 'Explore the depths of the AI alignment problem'}
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Info className="w-4 h-4" />
            <span>
              {locale === 'fr'
                ? 'Cliquez sur les couches pour découvrir les concepts'
                : 'Click on layers to discover concepts'}
            </span>
          </div>
        </div>

        {/* Interactive Iceberg */}
        <div className="relative w-full max-w-5xl mx-auto" style={{ transform: `translateY(${scrollY * -50}px)` }}>
          {/* Water surface indicator */}
          <div className="absolute inset-x-0 top-[18%] z-20 pointer-events-none">
            <div className="relative">
              <div className="h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse" />
              <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-cyan-400/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-cyan-400/20 to-transparent" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 -top-8">
              <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-background/90 px-4 py-1.5 rounded-full border-2 border-cyan-400/40 shadow-lg">
                {locale === 'fr' ? '~10% visible en surface' : '~10% visible at surface'}
              </span>
            </div>
          </div>

          {/* Main SVG Iceberg */}
          <svg
            viewBox="0 0 400 500"
            className="w-full h-auto drop-shadow-2xl"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Enhanced gradient */}
              <linearGradient id="heroIceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.9" />
                <stop offset="15%" stopColor="#bae6fd" stopOpacity="0.95" />
                <stop offset="30%" stopColor="#7dd3fc" />
                <stop offset="50%" stopColor="#38bdf8" />
                <stop offset="70%" stopColor="#0ea5e9" />
                <stop offset="85%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0c4a6e" />
              </linearGradient>

              {/* Glow filter */}
              <filter id="heroGlow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              {/* Shine effect */}
              <linearGradient id="shine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Main iceberg shape with improved geometry */}
            <path
              d="M 200 15
                 L 235 60
                 L 225 75
                 L 245 100
                 L 240 130
                 L 250 160
                 L 260 200
                 L 270 240
                 L 280 280
                 L 285 320
                 L 280 360
                 L 270 400
                 L 250 440
                 L 220 470
                 L 200 485
                 L 180 470
                 L 150 440
                 L 130 400
                 L 120 360
                 L 115 320
                 L 120 280
                 L 130 240
                 L 140 200
                 L 150 160
                 L 160 130
                 L 155 100
                 L 175 75
                 L 165 60
                 Z"
              fill="url(#heroIceGradient)"
              stroke="#0ea5e9"
              strokeWidth="3"
              opacity="0.95"
              className="transition-all duration-300"
              filter="url(#heroGlow)"
            />

            {/* Shine overlay */}
            <path
              d="M 200 15
                 L 235 60
                 L 225 75
                 L 245 100
                 L 240 130
                 L 200 200
                 L 165 60
                 Z"
              fill="url(#shine)"
              className="animate-pulse"
            />

            {/* Interactive layer zones */}
            {layers.map((layer, index) => {
              const yPosition = 15 + (index * 43);
              const width = 220 - (index * 12);
              const xPosition = 200 - width / 2;
              const isActive = activeLayer === layer.id;

              return (
                <g key={layer.id}>
                  {/* Interactive zone */}
                  <rect
                    x={xPosition}
                    y={yPosition}
                    width={width}
                    height={38}
                    fill={isActive ? layer.color : 'transparent'}
                    opacity={isActive ? 0.8 : 0}
                    rx="6"
                    className="cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHoveredLayer(layer.id)}
                    onMouseLeave={() => setHoveredLayer(null)}
                    onClick={() => setSelectedLayer(selectedLayer === layer.id ? null : layer.id)}
                    style={{ filter: isActive ? 'url(#heroGlow)' : 'none' }}
                  />

                  {/* Layer label */}
                  <text
                    x="200"
                    y={yPosition + 23}
                    textAnchor="middle"
                    className={`font-bold transition-all duration-300 pointer-events-none select-none ${
                      isActive
                        ? 'fill-white'
                        : index < 2
                          ? 'fill-slate-700 dark:fill-slate-200'
                          : 'fill-white'
                    }`}
                    style={{
                      fontSize: isActive ? '14px' : '12px',
                      opacity: isActive ? 1 : 0.9,
                    }}
                  >
                    {locale === 'fr' ? layer.titleFr : layer.title}
                  </text>
                </g>
              );
            })}

            {/* Depth markers */}
            <g className="text-xs fill-slate-500 dark:fill-slate-400">
              <text x="15" y="80" fontSize="11" className="font-semibold">
                {locale === 'fr' ? 'Surface' : 'Surface'}
              </text>
              <text x="15" y="260" fontSize="11" className="font-semibold">
                {locale === 'fr' ? 'Profondeur' : 'Deep'}
              </text>
              <text x="15" y="460" fontSize="11" className="font-semibold">
                {locale === 'fr' ? 'Abîme' : 'Abyss'}
              </text>
            </g>
          </svg>
        </div>

        {/* Layer details panel */}
        {activeLayerData && (
          <div className="w-full max-w-3xl mx-auto mt-8 p-6 sm:p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/30 rounded-2xl shadow-2xl backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  {locale === 'fr' ? activeLayerData.titleFr : activeLayerData.title}
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground">
                  {locale === 'fr' ? activeLayerData.descriptionFr : activeLayerData.description}
                </p>
              </div>
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-bold whitespace-nowrap border border-primary/30">
                {locale === 'fr' ? activeLayerData.difficultyFr : activeLayerData.difficulty}
              </span>
            </div>

            {/* Depth indicator */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(11)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i <= activeLayerData.depth
                        ? 'bg-primary scale-110'
                        : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground font-medium">
                {locale === 'fr' ? 'Profondeur' : 'Depth'}: {activeLayerData.depth + 1}/11
              </span>
            </div>

            {/* CTA Button */}
            <Link
              href={`/${locale}${activeLayerData.link}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg"
            >
              {locale === 'fr' ? 'En savoir plus' : 'Learn more'}
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </Link>
          </div>
        )}

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm font-medium">
              {locale === 'fr' ? 'Explorez' : 'Explore'}
            </span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Quote at bottom */}
      <div className="absolute bottom-16 left-0 right-0 z-10 text-center px-4 pb-16">
        <p className="text-sm sm:text-base italic text-muted-foreground max-w-2xl mx-auto">
          {locale === 'fr'
            ? '« Comme un iceberg, la plupart des difficultés de l\'alignement sont invisibles en surface »'
            : '« Like an iceberg, most alignment difficulties are invisible at the surface »'}
        </p>
      </div>
    </div>
  );
}
