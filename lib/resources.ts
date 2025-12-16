import { DifficultyLevel } from './types';

export type ResourceType = 'paper' | 'video' | 'course' | 'book' | 'website' | 'podcast';

export type Resource = {
  id: string;
  title: string;
  titleFr?: string;
  author: string;
  year: number;
  type: ResourceType;
  difficulty: DifficultyLevel;
  url: string;
  description: string;
  descriptionFr?: string;
  tags: string[];
  organization?: string;
  estimatedTime?: string;
};

export const resources: Resource[] = [
  // Beginner Resources
  {
    id: 'agi-ruin',
    title: 'AGI Ruin: A List of Lethalities',
    titleFr: 'Ruine AGI : Une liste de létalités',
    author: 'Eliezer Yudkowsky',
    year: 2022,
    type: 'paper',
    difficulty: 'beginner',
    url: 'https://www.lesswrong.com/posts/uMQ3cqWDPHhjtiesc/agi-ruin-a-list-of-lethalities',
    description: 'Comprehensive list of reasons why AGI alignment is extremely difficult',
    descriptionFr: 'Liste exhaustive des raisons pour lesquelles l\'alignement de l\'AGI est extrêmement difficile',
    tags: ['fundamentals', 'risk', 'agi'],
    organization: 'MIRI',
    estimatedTime: '2h',
  },
  {
    id: 'ai-safety-intro',
    title: 'Introduction to AI Safety, Ethics and Society',
    titleFr: 'Introduction à la sécurité, l\'éthique et la société de l\'IA',
    author: 'Dan Hendrycks',
    year: 2023,
    type: 'course',
    difficulty: 'beginner',
    url: 'https://course.mlsafety.org/',
    description: 'Comprehensive online course covering AI safety fundamentals',
    descriptionFr: 'Cours en ligne complet couvrant les fondamentaux de la sécurité de l\'IA',
    tags: ['fundamentals', 'course', 'ethics'],
    organization: 'Center for AI Safety',
    estimatedTime: '40h',
  },
  {
    id: 'alignment-problem-book',
    title: 'The Alignment Problem',
    titleFr: 'Le problème de l\'alignement',
    author: 'Brian Christian',
    year: 2020,
    type: 'book',
    difficulty: 'beginner',
    url: 'https://brianchristian.org/the-alignment-problem/',
    description: 'Accessible introduction to AI alignment for general audiences',
    descriptionFr: 'Introduction accessible à l\'alignement de l\'IA pour le grand public',
    tags: ['fundamentals', 'introduction'],
    estimatedTime: '10h',
  },

  // Initiate Resources
  {
    id: 'concrete-problems',
    title: 'Concrete Problems in AI Safety',
    titleFr: 'Problèmes concrets en sécurité de l\'IA',
    author: 'Amodei et al.',
    year: 2016,
    type: 'paper',
    difficulty: 'initiate',
    url: 'https://arxiv.org/abs/1606.06565',
    description: 'Foundational paper outlining practical AI safety research directions',
    descriptionFr: 'Article fondamental décrivant les directions de recherche pratiques en sécurité de l\'IA',
    tags: ['outer-alignment', 'research-agenda'],
    organization: 'DeepMind/OpenAI',
    estimatedTime: '2h',
  },
  {
    id: 'reward-tampering',
    title: 'Specification gaming examples in AI',
    titleFr: 'Exemples de reward hacking dans l\'IA',
    author: 'Victoria Krakovna et al.',
    year: 2020,
    type: 'website',
    difficulty: 'initiate',
    url: 'https://deepmindsafetyresearch.medium.com/specification-gaming-the-flip-side-of-ai-ingenuity-c85bdb0deeb4',
    description: 'Collection of real examples where AI exploited loopholes in objectives',
    descriptionFr: 'Collection d\'exemples réels où l\'IA a exploité des failles dans les objectifs',
    tags: ['reward-hacking', 'examples', 'outer-alignment'],
    organization: 'DeepMind',
    estimatedTime: '1h',
  },

  // Intermediate Resources
  {
    id: 'risks-from-learned',
    title: 'Risks from Learned Optimization',
    titleFr: 'Risques de l\'optimisation apprise',
    author: 'Hubinger et al.',
    year: 2019,
    type: 'paper',
    difficulty: 'intermediate',
    url: 'https://arxiv.org/abs/1906.01820',
    description: 'Foundational work on mesa-optimization and inner alignment',
    descriptionFr: 'Travail fondamental sur la mesa-optimization et l\'inner alignment',
    tags: ['inner-alignment', 'mesa-optimization', 'theory'],
    organization: 'MIRI',
    estimatedTime: '4h',
  },
  {
    id: 'goal-misgeneralization',
    title: 'Goal Misgeneralization in Deep Reinforcement Learning',
    titleFr: 'Erreur de généralisation d\'objectifs en RL profond',
    author: 'Langosco et al.',
    year: 2022,
    type: 'paper',
    difficulty: 'intermediate',
    url: 'https://arxiv.org/abs/2105.14111',
    description: 'Empirical demonstrations of inner alignment failures',
    descriptionFr: 'Démonstrations empiriques d\'échecs d\'inner alignment',
    tags: ['inner-alignment', 'empirical', 'rl'],
    organization: 'DeepMind',
    estimatedTime: '3h',
  },

  // Advanced Resources
  {
    id: 'rlhf-paper',
    title: 'Training language models to follow instructions with human feedback',
    titleFr: 'Entraîner des modèles de langage à suivre des instructions avec feedback humain',
    author: 'Ouyang et al.',
    year: 2022,
    type: 'paper',
    difficulty: 'advanced',
    url: 'https://arxiv.org/abs/2203.02155',
    description: 'InstructGPT paper introducing RLHF for LLMs',
    descriptionFr: 'Article InstructGPT introduisant RLHF pour les LLMs',
    tags: ['rlhf', 'llm', 'solutions'],
    organization: 'OpenAI',
    estimatedTime: '2h',
  },
  {
    id: 'constitutional-ai',
    title: 'Constitutional AI: Harmlessness from AI Feedback',
    titleFr: 'Constitutional AI : Innocuité via feedback IA',
    author: 'Bai et al.',
    year: 2022,
    type: 'paper',
    difficulty: 'advanced',
    url: 'https://arxiv.org/abs/2212.08073',
    description: 'Anthropic\'s approach to training helpful, honest, and harmless AI',
    descriptionFr: 'Approche d\'Anthropic pour entraîner une IA utile, honnête et inoffensive',
    tags: ['constitutional-ai', 'solutions', 'anthropic'],
    organization: 'Anthropic',
    estimatedTime: '3h',
  },
  {
    id: 'mechanistic-interpretability',
    title: 'A Mathematical Framework for Transformer Circuits',
    titleFr: 'Un cadre mathématique pour les circuits de Transformers',
    author: 'Elhage et al.',
    year: 2021,
    type: 'paper',
    difficulty: 'advanced',
    url: 'https://transformer-circuits.pub/2021/framework/index.html',
    description: 'Foundational work on understanding transformer internals',
    descriptionFr: 'Travail fondamental pour comprendre l\'interne des transformers',
    tags: ['interpretability', 'mechanistic', 'transformers'],
    organization: 'Anthropic',
    estimatedTime: '4h',
  },

  // Expert Resources
  {
    id: 'elk-report',
    title: 'Eliciting Latent Knowledge (ELK) Report',
    titleFr: 'Rapport sur l\'élicitation des connaissances latentes (ELK)',
    author: 'ARC',
    year: 2022,
    type: 'paper',
    difficulty: 'expert',
    url: 'https://docs.google.com/document/d/1WwsnJQstPq91_Yh-Ch2XRL8H_EpsnjrC1dwZXR37PC8/edit',
    description: 'Technical report on the ELK problem and proposed solutions',
    descriptionFr: 'Rapport technique sur le problème ELK et les solutions proposées',
    tags: ['elk', 'research', 'theory'],
    organization: 'ARC',
    estimatedTime: '6h',
  },
  {
    id: 'iterated-distillation',
    title: 'Iterated Distillation and Amplification',
    titleFr: 'Distillation et amplification itérées',
    author: 'Christiano et al.',
    year: 2018,
    type: 'paper',
    difficulty: 'expert',
    url: 'https://arxiv.org/abs/1810.08575',
    description: 'Approach for scalable oversight of superhuman AI systems',
    descriptionFr: 'Approche pour la supervision scalable de systèmes IA surhumains',
    tags: ['scalable-oversight', 'research', 'theory'],
    organization: 'OpenAI',
    estimatedTime: '4h',
  },
];

export function getResourcesByDifficulty(difficulty: DifficultyLevel): Resource[] {
  return resources.filter((r) => r.difficulty === difficulty);
}

export function getResourcesByType(type: ResourceType): Resource[] {
  return resources.filter((r) => r.type === type);
}

export function getResourcesByOrganization(org: string): Resource[] {
  return resources.filter((r) => r.organization === org);
}

export function filterResources(
  difficulty?: DifficultyLevel,
  type?: ResourceType,
  organization?: string,
  tags?: string[]
): Resource[] {
  let filtered = resources;

  if (difficulty) {
    filtered = filtered.filter((r) => r.difficulty === difficulty);
  }

  if (type) {
    filtered = filtered.filter((r) => r.type === type);
  }

  if (organization) {
    filtered = filtered.filter((r) => r.organization === organization);
  }

  if (tags && tags.length > 0) {
    filtered = filtered.filter((r) => tags.some((tag) => r.tags.includes(tag)));
  }

  return filtered;
}
