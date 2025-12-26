'use client'

import { useState } from 'react';
import { Info } from 'lucide-react';

type IcebergLayer = {
  id: string;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  depth: number; // 0 = surface, higher = deeper
  color: string;
  difficulty: string;
  difficultyFr: string;
};

const layers: IcebergLayer[] = [
  // Surface (10% visible)
  {
    id: 'ai-safety',
    title: 'AI Safety',
    titleFr: 'Sécurité de l\'IA',
    description: 'Making AI systems safe and beneficial',
    descriptionFr: 'Rendre les systèmes IA sûrs et bénéfiques',
    depth: 0,
    color: '#60a5fa', // light blue
    difficulty: 'Beginner',
    difficultyFr: 'Débutant',
  },
  {
    id: 'goal-alignment',
    title: 'Goal Alignment',
    titleFr: 'Alignement d\'objectifs',
    description: 'Ensuring AI pursues the right goals',
    descriptionFr: 'S\'assurer que l\'IA poursuit les bons objectifs',
    depth: 1,
    color: '#3b82f6', // blue
    difficulty: 'Beginner',
    difficultyFr: 'Débutant',
  },

  // Just below surface (20%)
  {
    id: 'outer-alignment',
    title: 'Outer Alignment',
    titleFr: 'Outer Alignment',
    description: 'Specifying the right objective function',
    descriptionFr: 'Spécifier la bonne fonction objectif',
    depth: 2,
    color: '#2563eb', // darker blue
    difficulty: 'Initiate',
    difficultyFr: 'Initié',
  },
  {
    id: 'specification',
    title: 'Specification Problem',
    titleFr: 'Problème de spécification',
    description: 'Difficulty of precisely defining what we want',
    descriptionFr: 'Difficulté de définir précisément ce qu\'on veut',
    depth: 3,
    color: '#1d4ed8', // deep blue
    difficulty: 'Initiate',
    difficultyFr: 'Initié',
  },
  {
    id: 'reward-hacking',
    title: 'Reward Hacking',
    titleFr: 'Reward Hacking',
    description: 'AI exploiting loopholes in objectives',
    descriptionFr: 'IA exploitant les failles des objectifs',
    depth: 4,
    color: '#1e40af', // very deep blue
    difficulty: 'Initiate',
    difficultyFr: 'Initié',
  },

  // Mid-depth (40%)
  {
    id: 'inner-alignment',
    title: 'Inner Alignment',
    titleFr: 'Inner Alignment',
    description: 'Ensuring learned models optimize the right thing',
    descriptionFr: 'S\'assurer que les modèles optimisent la bonne chose',
    depth: 5,
    color: '#1e3a8a', // darker blue
    difficulty: 'Intermediate',
    difficultyFr: 'Intermédiaire',
  },
  {
    id: 'mesa-optimization',
    title: 'Mesa-Optimization',
    titleFr: 'Mesa-Optimization',
    description: 'Models developing their own optimization processes',
    descriptionFr: 'Modèles développant leurs propres processus',
    depth: 6,
    color: '#1e3a8a',
    difficulty: 'Intermediate',
    difficultyFr: 'Intermédiaire',
  },
  {
    id: 'deceptive-alignment',
    title: 'Deceptive Alignment',
    titleFr: 'Deceptive Alignment',
    description: 'AI appearing aligned while pursuing other goals',
    descriptionFr: 'IA semblant alignée mais poursuivant d\'autres buts',
    depth: 7,
    color: '#172554', // very dark blue
    difficulty: 'Advanced',
    difficultyFr: 'Avancé',
  },

  // Deep (30%)
  {
    id: 'instrumental-convergence',
    title: 'Instrumental Convergence',
    titleFr: 'Convergence instrumentale',
    description: 'Universal drives toward power and resources',
    descriptionFr: 'Tendances universelles vers le pouvoir et les ressources',
    depth: 8,
    color: '#0f172a', // darkest blue
    difficulty: 'Advanced',
    difficultyFr: 'Avancé',
  },
  {
    id: 'treacherous-turn',
    title: 'Treacherous Turn',
    titleFr: 'Tournant traître',
    description: 'Sudden shift from cooperation to opposition',
    descriptionFr: 'Basculement soudain de la coopération à l\'opposition',
    depth: 9,
    color: '#020617', // almost black
    difficulty: 'Expert',
    difficultyFr: 'Expert',
  },
  {
    id: 'elk',
    title: 'Eliciting Latent Knowledge',
    titleFr: 'Élicitation des connaissances latentes',
    description: 'Getting AI to tell us what it really knows',
    descriptionFr: 'Faire dire à l\'IA ce qu\'elle sait vraiment',
    depth: 10,
    color: '#020617',
    difficulty: 'Expert',
    difficultyFr: 'Expert',
  },
];

type Props = {
  locale: string;
};

export default function AlignmentIceberg({ locale }: Props) {
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);
  const [selectedLayer, setSelectedLayer] = useState<string | null>(null);

  const activeLayer = selectedLayer || hoveredLayer;
  const activeLayerData = layers.find((l) => l.id === activeLayer);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Info tooltip */}
      <div className="mb-4 text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
        <Info className="w-4 h-4" />
        <span>
          {locale === 'fr'
            ? 'Survolez ou cliquez sur les couches pour découvrir les concepts'
            : 'Hover or click on layers to discover concepts'}
        </span>
      </div>

      {/* Main iceberg container */}
      <div className="relative aspect-[3/4] max-h-[600px]">
        {/* Water line */}
        <div className="absolute inset-x-0 top-[15%] z-20 pointer-events-none">
          <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse" />
          <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-cyan-400/10 to-transparent" />
        </div>

        {/* Water surface text */}
        <div className="absolute inset-x-0 top-[15%] -translate-y-8 z-10 text-center">
          <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 bg-background/80 px-3 py-1 rounded-full border border-cyan-400/30">
            {locale === 'fr' ? '~10% visible' : '~10% visible'}
          </span>
        </div>

        <svg
          viewBox="0 0 300 400"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="iceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="15%" stopColor="#bae6fd" />
              <stop offset="30%" stopColor="#7dd3fc" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="70%" stopColor="#0ea5e9" />
              <stop offset="85%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0c4a6e" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Main iceberg shape */}
          <path
            d="M 150 10
               L 180 50
               L 170 60
               L 190 80
               L 185 100
               L 195 120
               L 200 140
               L 210 180
               L 220 220
               L 225 260
               L 220 300
               L 210 340
               L 190 370
               L 150 390
               L 110 370
               L 90 340
               L 80 300
               L 75 260
               L 80 220
               L 90 180
               L 100 140
               L 105 120
               L 115 100
               L 110 80
               L 130 60
               L 120 50
               Z"
            fill="url(#iceGradient)"
            stroke="#0ea5e9"
            strokeWidth="2"
            opacity="0.9"
            className="transition-all duration-300"
          />

          {/* Interactive layer zones */}
          {layers.map((layer, index) => {
            const yPosition = 10 + (index * 35);
            const width = 160 - (index * 8);
            const xPosition = 150 - width / 2;
            const isActive = activeLayer === layer.id;

            return (
              <g key={layer.id}>
                {/* Interactive zone */}
                <rect
                  x={xPosition}
                  y={yPosition}
                  width={width}
                  height={30}
                  fill={isActive ? layer.color : 'transparent'}
                  opacity={isActive ? 0.7 : 0}
                  rx="4"
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredLayer(layer.id)}
                  onMouseLeave={() => setHoveredLayer(null)}
                  onClick={() => setSelectedLayer(selectedLayer === layer.id ? null : layer.id)}
                  style={{ filter: isActive ? 'url(#glow)' : 'none' }}
                />

                {/* Layer label */}
                <text
                  x="150"
                  y={yPosition + 18}
                  textAnchor="middle"
                  className={`text-xs font-semibold transition-all duration-300 pointer-events-none select-none ${
                    isActive
                      ? 'fill-white'
                      : index < 2
                        ? 'fill-slate-700 dark:fill-slate-300'
                        : 'fill-white'
                  }`}
                  style={{
                    fontSize: isActive ? '11px' : '9px',
                    opacity: isActive ? 1 : 0.8,
                  }}
                >
                  {locale === 'fr' ? layer.titleFr : layer.title}
                </text>
              </g>
            );
          })}

          {/* Depth markers */}
          <text x="10" y="65" className="text-[8px] fill-slate-500 dark:fill-slate-400">
            {locale === 'fr' ? 'Surface' : 'Surface'}
          </text>
          <text x="10" y="200" className="text-[8px] fill-slate-400">
            {locale === 'fr' ? 'Profondeur' : 'Deep'}
          </text>
          <text x="10" y="380" className="text-[8px] fill-slate-300">
            {locale === 'fr' ? 'Abîme' : 'Abyss'}
          </text>
        </svg>
      </div>

      {/* Layer details panel */}
      {activeLayerData && (
        <div className="mt-6 p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-lg animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-2xl font-bold">
              {locale === 'fr' ? activeLayerData.titleFr : activeLayerData.title}
            </h3>
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold whitespace-nowrap">
              {locale === 'fr' ? activeLayerData.difficultyFr : activeLayerData.difficulty}
            </span>
          </div>
          <p className="text-muted-foreground">
            {locale === 'fr' ? activeLayerData.descriptionFr : activeLayerData.description}
          </p>

          {/* Depth indicator */}
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              {[...Array(11)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i <= activeLayerData.depth
                      ? 'bg-primary'
                      : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            <span>
              {locale === 'fr' ? 'Niveau de profondeur' : 'Depth level'}: {activeLayerData.depth + 1}/11
            </span>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p className="italic">
          {locale === 'fr'
            ? '« Comme un iceberg, la plupart des difficultés de l\'alignement sont invisibles en surface »'
            : '« Like an iceberg, most alignment difficulties are invisible at the surface »'}
        </p>
      </div>
    </div>
  );
}
