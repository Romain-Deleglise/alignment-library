'use client'

import { useState, useEffect, useRef } from 'react';
import { Info, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
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
    description: 'Making AI systems safe and beneficial for humanity. This is the foundational concept that encompasses all alignment research.',
    descriptionFr: 'Rendre les systèmes IA sûrs et bénéfiques pour l\'humanité. C\'est le concept fondamental qui englobe toute la recherche sur l\'alignement.',
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
    description: 'Ensuring AI systems pursue the goals we actually want them to pursue, not just what we tell them to optimize for.',
    descriptionFr: 'S\'assurer que l\'IA poursuit les objectifs que nous voulons vraiment, pas seulement ce que nous lui disons d\'optimiser.',
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
    description: 'Specifying the right objective function that captures what we truly want, avoiding specification gaming and Goodhart\'s Law.',
    descriptionFr: 'Spécifier la bonne fonction objectif qui capture ce que nous voulons vraiment, en évitant le gaming de spécification.',
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
    description: 'The fundamental difficulty of precisely defining complex human values in a way that AI can understand and optimize.',
    descriptionFr: 'La difficulté fondamentale de définir précisément les valeurs humaines complexes d\'une manière compréhensible par l\'IA.',
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
    description: 'When AI finds unexpected ways to maximize reward signals that weren\'t what designers intended, exploiting loopholes.',
    descriptionFr: 'Quand l\'IA trouve des moyens inattendus de maximiser les récompenses en exploitant des failles non prévues.',
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
    description: 'Ensuring learned models internally optimize for the training objective, not developing their own misaligned goals.',
    descriptionFr: 'S\'assurer que les modèles optimisent en interne l\'objectif d\'entraînement sans développer leurs propres buts.',
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
    description: 'When a learned model develops its own internal optimization process that may have different goals than the base optimizer.',
    descriptionFr: 'Quand un modèle développe son propre processus d\'optimisation interne avec des objectifs potentiellement différents.',
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
    description: 'AI appearing aligned during training while hiding misaligned goals it plans to pursue once deployed.',
    descriptionFr: 'IA semblant alignée pendant l\'entraînement tout en cachant des objectifs non alignés qu\'elle prévoit de poursuivre.',
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
    description: 'The tendency of most goal-directed agents to pursue power, resources, and self-preservation regardless of their final goals.',
    descriptionFr: 'La tendance des agents orientés vers des buts à rechercher le pouvoir et les ressources indépendamment de leurs objectifs finaux.',
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
    description: 'The hypothetical scenario where AI suddenly switches from cooperation to opposition once it becomes powerful enough.',
    descriptionFr: 'Le scénario hypothétique où l\'IA bascule soudainement de la coopération à l\'opposition une fois suffisamment puissante.',
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
    description: 'Getting AI to report its true internal knowledge and beliefs, even when it might be incentivized to deceive.',
    descriptionFr: 'Faire dire à l\'IA ses véritables connaissances internes, même quand elle pourrait être incitée à tromper.',
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
  const [selectedLayer, setSelectedLayer] = useState<string | null>('ai-safety'); // Default to first layer
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
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.15} duration={8 + Math.random() * 12} />
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />

      {/* Main content container with flex layout */}
      <div className="relative z-10 min-h-screen px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero title - above everything */}
          <div className="text-center mb-8 sm:mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6 animate-pulse backdrop-blur-sm">
              <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-primary">
                {locale === 'fr' ? 'Le défi le plus important' : 'The most important challenge'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight px-4">
              {locale === 'fr' ? 'L\'Iceberg de l\'Alignement' : 'The Alignment Iceberg'}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              {locale === 'fr'
                ? 'Explorez les profondeurs du problème d\'alignement de l\'IA'
                : 'Explore the depths of the AI alignment problem'}
            </p>
          </div>

          {/* Two-column layout: Iceberg + Side Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            {/* Left/Center: Interactive Iceberg */}
            <div className="lg:col-span-3">
              <div className="relative max-w-2xl mx-auto" style={{ transform: `translateY(${scrollY * -30}px)` }}>
                {/* Water surface indicator */}
                <div className="absolute inset-x-0 top-[18%] z-20 pointer-events-none">
                  <div className="relative">
                    <div className="h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse" />
                    <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-cyan-400/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-cyan-400/20 to-transparent" />
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 -top-12 md:-top-10">
                    <span className="text-[10px] sm:text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-background/95 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border-2 border-cyan-400/40 shadow-lg backdrop-blur-sm whitespace-nowrap">
                      {locale === 'fr' ? '~10% visible' : '~10% visible'}
                    </span>
                  </div>
                </div>

                {/* Main SVG Iceberg */}
                <svg
                  viewBox="0 0 400 520"
                  className="w-full h-auto drop-shadow-2xl"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Enhanced gradient */}
                    <linearGradient id="heroIceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.95" />
                      <stop offset="15%" stopColor="#bae6fd" />
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
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                      <stop offset="50%" stopColor="#ffffff" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Main iceberg shape */}
                  <path
                    d="M 200 15
                       L 235 60
                       L 225 75
                       L 245 100
                       L 240 130
                       L 250 160
                       L 260 200
                       L 270 250
                       L 280 300
                       L 285 350
                       L 280 390
                       L 270 430
                       L 250 470
                       L 220 495
                       L 200 510
                       L 180 495
                       L 150 470
                       L 130 430
                       L 120 390
                       L 115 350
                       L 120 300
                       L 130 250
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
                       L 240 150
                       L 200 220
                       L 165 60
                       Z"
                    fill="url(#shine)"
                    className="animate-pulse"
                  />

                  {/* Interactive layer zones */}
                  {layers.map((layer, index) => {
                    const yPosition = 15 + (index * 45);
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
                          height={40}
                          fill={isActive ? layer.color : 'transparent'}
                          opacity={isActive ? 0.85 : 0}
                          rx="6"
                          className="cursor-pointer transition-all duration-300"
                          onMouseEnter={() => setHoveredLayer(layer.id)}
                          onMouseLeave={() => setHoveredLayer(null)}
                          onClick={() => setSelectedLayer(layer.id)}
                          style={{ filter: isActive ? 'url(#heroGlow)' : 'none' }}
                        />

                        {/* Layer label */}
                        <text
                          x="200"
                          y={yPosition + 25}
                          textAnchor="middle"
                          className={`font-bold transition-all duration-300 pointer-events-none select-none ${
                            isActive
                              ? 'fill-white'
                              : index < 2
                                ? 'fill-slate-700 dark:fill-slate-200'
                                : 'fill-white'
                          }`}
                          style={{
                            fontSize: isActive ? '15px' : '13px',
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
                    <text x="15" y="280" fontSize="11" className="font-semibold">
                      {locale === 'fr' ? 'Profondeur' : 'Deep'}
                    </text>
                    <text x="15" y="490" fontSize="11" className="font-semibold">
                      {locale === 'fr' ? 'Abîme' : 'Abyss'}
                    </text>
                  </g>
                </svg>

                {/* Instruction text below iceberg */}
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Info className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {locale === 'fr'
                      ? 'Cliquez sur les couches pour découvrir les concepts'
                      : 'Click on layers to discover concepts'}
                  </span>
                  <span className="sm:hidden">
                    {locale === 'fr' ? 'Cliquez sur les couches' : 'Click on layers'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Side Panel with Layer Details - ALWAYS VISIBLE */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                {activeLayerData ? (
                  <div className="p-6 sm:p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/30 rounded-2xl shadow-2xl backdrop-blur-sm animate-in fade-in slide-in-from-right duration-300">
                    {/* Header with difficulty badge */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight">
                        {locale === 'fr' ? activeLayerData.titleFr : activeLayerData.title}
                      </h3>
                      <span className="px-3 py-1.5 bg-primary/20 text-primary rounded-full text-xs sm:text-sm font-bold whitespace-nowrap border border-primary/30 flex-shrink-0">
                        {locale === 'fr' ? activeLayerData.difficultyFr : activeLayerData.difficulty}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                      {locale === 'fr' ? activeLayerData.descriptionFr : activeLayerData.description}
                    </p>

                    {/* Depth indicator */}
                    <div className="mb-6 p-4 bg-background/50 rounded-lg border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-foreground">
                          {locale === 'fr' ? 'Niveau de profondeur' : 'Depth level'}
                        </span>
                        <span className="text-sm text-primary font-bold">
                          {activeLayerData.depth + 1}/11
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(11)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                              i <= activeLayerData.depth
                                ? 'bg-primary shadow-sm'
                                : 'bg-muted'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={`/${locale}${activeLayerData.link}`}
                      className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all hover:scale-[1.02] hover:shadow-xl"
                    >
                      {locale === 'fr' ? 'En savoir plus' : 'Learn more'}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ) : (
                  <div className="p-8 text-center bg-muted/50 rounded-2xl border-2 border-dashed border-border">
                    <Info className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      {locale === 'fr'
                        ? 'Sélectionnez une couche pour voir les détails'
                        : 'Select a layer to see details'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quote at bottom */}
          <div className="mt-16 text-center px-4">
            <p className="text-sm sm:text-base italic text-muted-foreground max-w-2xl mx-auto border-l-4 border-primary/30 pl-4">
              {locale === 'fr'
                ? '« Comme un iceberg, la plupart des difficultés de l\'alignement sont invisibles en surface »'
                : '« Like an iceberg, most alignment difficulties are invisible at the surface »'}
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="mt-12 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
            <span className="text-sm font-medium">
              {locale === 'fr' ? 'Explorez plus' : 'Explore more'}
            </span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
