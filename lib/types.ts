// Types pour le système de progression
export type DifficultyLevel = 'beginner' | 'initiate' | 'intermediate' | 'advanced' | 'expert';

export type LevelInfo = {
  id: DifficultyLevel;
  label: string;
  labelFr: string;
  icon: string;
  color: string;
  timeRange: string;
  timeRangeFr: string;
  description: string;
  descriptionFr: string;
};

export const DIFFICULTY_LEVELS: Record<DifficultyLevel, LevelInfo> = {
  beginner: {
    id: 'beginner',
    label: 'Beginner',
    labelFr: 'Débutant',
    icon: '🌱',
    color: 'emerald',
    timeRange: '0-5h',
    timeRangeFr: '0-5h',
    description: 'No prior knowledge required',
    descriptionFr: 'Aucune connaissance préalable requise',
  },
  initiate: {
    id: 'initiate',
    label: 'Initiate',
    labelFr: 'Initié',
    icon: '🌿',
    color: 'green',
    timeRange: '5-20h',
    timeRangeFr: '5-20h',
    description: 'Basic concepts understood',
    descriptionFr: 'Concepts de base compris',
  },
  intermediate: {
    id: 'intermediate',
    label: 'Intermediate',
    labelFr: 'Intermédiaire',
    icon: '🌳',
    color: 'teal',
    timeRange: '20-50h',
    timeRangeFr: '20-50h',
    description: 'Solid foundation in alignment',
    descriptionFr: 'Base solide en alignement',
  },
  advanced: {
    id: 'advanced',
    label: 'Advanced',
    labelFr: 'Avancé',
    icon: '🌲',
    color: 'blue',
    timeRange: '50-100h',
    timeRangeFr: '50-100h',
    description: 'Deep technical understanding',
    descriptionFr: 'Compréhension technique approfondie',
  },
  expert: {
    id: 'expert',
    label: 'Expert',
    labelFr: 'Expert',
    icon: '🏔️',
    color: 'purple',
    timeRange: '100h+',
    timeRangeFr: '100h+',
    description: 'Research-level knowledge',
    descriptionFr: 'Connaissances niveau recherche',
  },
};

export type ArticleMetadata = {
  title: string;
  description?: string;
  difficulty: DifficultyLevel;
  readingTime?: number;
  prerequisites?: string[];
  tags?: string[];
};
