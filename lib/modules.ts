import { DifficultyLevel } from './types';

export type ModuleArticle = {
  slug: string;
  section: string;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  readingTime?: string;
  prerequisites?: string[];
};

export type Module = {
  id: string;
  slug: string;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  level: DifficultyLevel;
  estimatedHours: string;
  articles: ModuleArticle[];
};

export const modules: Module[] = [
  {
    id: 'introduction',
    slug: 'introduction',
    title: 'Start Here',
    titleFr: 'Commencez ici',
    description: 'Understand the basics of AI alignment and why it matters',
    descriptionFr: "Comprendre les bases de l'alignement de l'IA et pourquoi c'est important",
    level: 'beginner',
    estimatedHours: '1-2h',
    articles: [
      {
        slug: 'what-is-alignment',
        section: 'introduction',
        title: 'What is AI Alignment?',
        titleFr: "Qu'est-ce que l'alignement de l'IA ?",
        description: 'Introduction to the alignment problem',
        descriptionFr: "Introduction au problème de l'alignement",
        readingTime: '10 min',
      },
      {
        slug: 'why-urgent',
        section: 'introduction',
        title: 'Why is this urgent?',
        titleFr: 'Pourquoi est-ce urgent ?',
        description: 'Understanding the timeline and stakes',
        descriptionFr: "Comprendre l'échéance et les enjeux",
        readingTime: '15 min',
      },
      {
        slug: 'current-state',
        section: 'introduction',
        title: 'Current State of AI',
        titleFr: "État actuel de l'IA",
        description: 'Where we are today',
        descriptionFr: "Où nous en sommes aujourd'hui",
        readingTime: '12 min',
      },
    ],
  },
  {
    id: 'fundamental-concepts',
    slug: 'fundamental-concepts',
    title: 'Fundamental Concepts',
    titleFr: 'Concepts Fondamentaux',
    description: 'Core theoretical frameworks: orthogonality, intelligence explosion, pivotal acts, and key asymmetries',
    descriptionFr: 'Cadres théoriques centraux : orthogonalité, explosion d\'intelligence, actes pivots et asymétries clés',
    level: 'initiate',
    estimatedHours: '4-6h',
    articles: [
      {
        slug: 'orthogonality',
        section: 'concepts',
        title: 'Orthogonality Thesis',
        titleFr: 'Thèse d\'Orthogonalité',
        description: 'Intelligence and goals are independent',
        descriptionFr: 'L\'intelligence et les objectifs sont indépendants',
        readingTime: '8 min',
      },
      {
        slug: 'intelligence-explosion',
        section: 'concepts',
        title: 'Intelligence Explosion',
        titleFr: 'Explosion d\'Intelligence',
        description: 'How recursive self-improvement leads to rapid capability gains',
        descriptionFr: 'Comment l\'auto-amélioration récursive mène à des gains rapides de capacité',
        readingTime: '10 min',
      },
      {
        slug: 'inner-outer-alignment',
        section: 'concepts',
        title: 'Inner vs Outer Alignment',
        titleFr: 'Alignement Interne vs Externe',
        description: 'Two fundamental challenges of AI alignment',
        descriptionFr: 'Deux défis fondamentaux de l\'alignement de l\'IA',
        readingTime: '10 min',
      },
      {
        slug: 'sharp-left-turn',
        section: 'concepts',
        title: 'Sharp Left Turn',
        titleFr: 'Virage à Gauche Brutal',
        description: 'Why capabilities generalize further than alignment',
        descriptionFr: 'Pourquoi les capacités se généralisent plus que l\'alignement',
        readingTime: '12 min',
      },
      {
        slug: 'pivotal-act',
        section: 'concepts',
        title: 'Pivotal Acts',
        titleFr: 'Actes Pivots',
        description: 'Actions powerful enough to prevent unaligned AGI',
        descriptionFr: 'Actions suffisamment puissantes pour empêcher une AGI non alignée',
        readingTime: '12 min',
      },
      {
        slug: 'ai-boxing',
        section: 'concepts',
        title: 'AI Boxing',
        titleFr: 'Confinement d\'IA',
        description: 'Why containing superintelligent AI fails',
        descriptionFr: 'Pourquoi confiner une IA superintelligente échoue',
        readingTime: '10 min',
      },
    ],
  },
  {
    id: 'outer-alignment',
    slug: 'outer-alignment',
    title: 'Core Problems: Outer Alignment',
    titleFr: 'Problèmes Fondamentaux : Outer Alignment',
    description: 'Learn about specification problems, reward hacking, and Goodhart\'s Law',
    descriptionFr: "Découvrir le problème de spécification, le reward hacking et la loi de Goodhart",
    level: 'initiate',
    estimatedHours: '5-8h',
    articles: [
      {
        slug: 'specification',
        section: 'problems/outer-alignment',
        title: 'The Specification Problem',
        titleFr: 'Le problème de spécification',
        description: 'Why it\'s hard to specify what we want',
        descriptionFr: 'Pourquoi il est difficile de spécifier ce que nous voulons',
        readingTime: '20 min',
      },
      {
        slug: 'reward-hacking',
        section: 'problems/outer-alignment',
        title: 'Reward Hacking',
        titleFr: 'Reward Hacking',
        description: 'When AI exploits loopholes in reward functions',
        descriptionFr: 'Quand l\'IA exploite les failles des fonctions de récompense',
        readingTime: '25 min',
      },
      {
        slug: 'goodhart',
        section: 'problems/outer-alignment',
        title: 'Goodhart\'s Law',
        titleFr: 'Loi de Goodhart',
        description: 'When a measure becomes a target, it ceases to be a good measure',
        descriptionFr: 'Quand une mesure devient un objectif, elle cesse d\'être une bonne mesure',
        readingTime: '18 min',
      },
    ],
  },
  {
    id: 'inner-alignment',
    slug: 'inner-alignment',
    title: 'Inner Alignment',
    titleFr: 'Inner Alignment',
    description: 'Mesa-optimization, deceptive alignment, and instrumental convergence',
    descriptionFr: 'Mesa-optimization, deceptive alignment et convergence instrumentale',
    level: 'intermediate',
    estimatedHours: '10-15h',
    articles: [
      {
        slug: 'mesa-optimization',
        section: 'problems/inner-alignment',
        title: 'Mesa-Optimization',
        titleFr: 'Mesa-Optimization',
        description: 'When learned models develop their own optimization processes',
        descriptionFr: 'Quand les modèles appris développent leurs propres processus d\'optimisation',
        readingTime: '30 min',
      },
      {
        slug: 'deceptive',
        section: 'problems/inner-alignment',
        title: 'Deceptive Alignment',
        titleFr: 'Deceptive Alignment',
        description: 'When AI systems appear aligned but pursue different goals',
        descriptionFr: 'Quand les systèmes IA semblent alignés mais poursuivent d\'autres objectifs',
        readingTime: '35 min',
      },
      {
        slug: 'proxy',
        section: 'problems/inner-alignment',
        title: 'Proxy Alignment',
        titleFr: 'Proxy Alignment',
        description: 'The risks of optimizing for proxies instead of true objectives',
        descriptionFr: 'Les risques d\'optimiser pour des proxies au lieu des vrais objectifs',
        readingTime: '25 min',
      },
    ],
  },
  {
    id: 'solutions',
    slug: 'solutions',
    title: 'Solutions & Research',
    titleFr: 'Solutions & Recherche',
    description: 'Current approaches: RLHF, Constitutional AI, Interpretability',
    descriptionFr: 'Approches actuelles : RLHF, Constitutional AI, Interprétabilité',
    level: 'advanced',
    estimatedHours: '8-12h',
    articles: [
      {
        slug: 'rlhf',
        section: 'solutions',
        title: 'RLHF (Reinforcement Learning from Human Feedback)',
        titleFr: 'RLHF (Apprentissage par renforcement avec feedback humain)',
        description: 'Training AI using human preferences',
        descriptionFr: 'Entraîner l\'IA avec les préférences humaines',
        readingTime: '30 min',
      },
      {
        slug: 'constitutional-ai',
        section: 'solutions',
        title: 'Constitutional AI',
        titleFr: 'Constitutional AI',
        description: 'Teaching AI to self-improve based on principles',
        descriptionFr: 'Apprendre à l\'IA à s\'auto-améliorer selon des principes',
        readingTime: '25 min',
      },
      {
        slug: 'interpretability',
        section: 'solutions',
        title: 'Interpretability',
        titleFr: 'Interprétabilité',
        description: 'Understanding what AI systems are actually doing',
        descriptionFr: 'Comprendre ce que les systèmes IA font réellement',
        readingTime: '35 min',
      },
    ],
  },
  {
    id: 'research',
    slug: 'research',
    title: 'Research Frontiers',
    titleFr: 'Frontières de la Recherche',
    description: 'ELK, scalable oversight, and open problems',
    descriptionFr: 'ELK, scalable oversight et problèmes ouverts',
    level: 'expert',
    estimatedHours: '20-30h',
    articles: [
      {
        slug: 'elk',
        section: 'concepts',
        title: 'Eliciting Latent Knowledge (ELK)',
        titleFr: 'Eliciting Latent Knowledge (ELK)',
        description: 'Getting AI to tell us what it really knows',
        descriptionFr: 'Faire en sorte que l\'IA nous dise ce qu\'elle sait vraiment',
        readingTime: '40 min',
      },
      {
        slug: 'scalable-oversight',
        section: 'solutions',
        title: 'Scalable Oversight',
        titleFr: 'Scalable Oversight',
        description: 'Supervising AI systems smarter than us',
        descriptionFr: 'Superviser des systèmes IA plus intelligents que nous',
        readingTime: '35 min',
      },
    ],
  },
];

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getModuleArticles(moduleSlug: string): ModuleArticle[] {
  const moduleData = getModuleBySlug(moduleSlug);
  return moduleData?.articles || [];
}
