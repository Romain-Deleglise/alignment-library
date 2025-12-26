export type GlossaryTerm = {
  term: string;
  termFr: string;
  definition: string;
  definitionFr: string;
  category?: string;
};

export const glossary: Record<string, GlossaryTerm> = {
  'ai-alignment': {
    term: 'AI Alignment',
    termFr: 'Alignement de l\'IA',
    definition: 'The problem of ensuring AI systems pursue goals aligned with human values and intentions',
    definitionFr: 'Le problème de s\'assurer que les systèmes IA poursuivent des objectifs alignés avec les valeurs et intentions humaines',
    category: 'fundamentals',
  },
  'agi': {
    term: 'AGI (Artificial General Intelligence)',
    termFr: 'AGI (Intelligence Artificielle Générale)',
    definition: 'An AI system that can perform any intellectual task a human can, across diverse domains',
    definitionFr: 'Un système IA capable de réaliser n\'importe quelle tâche intellectuelle humaine, dans divers domaines',
    category: 'fundamentals',
  },
  'outer-alignment': {
    term: 'Outer Alignment',
    termFr: 'Outer Alignment',
    definition: 'Ensuring the specified reward function or objective actually captures what we want',
    definitionFr: 'S\'assurer que la fonction de récompense ou l\'objectif spécifié capture vraiment ce que nous voulons',
    category: 'alignment-types',
  },
  'inner-alignment': {
    term: 'Inner Alignment',
    termFr: 'Inner Alignment',
    definition: 'Ensuring the learned model actually optimizes for the specified objective, not a proxy',
    definitionFr: 'S\'assurer que le modèle appris optimise vraiment l\'objectif spécifié, pas un proxy',
    category: 'alignment-types',
  },
  'mesa-optimization': {
    term: 'Mesa-Optimization',
    termFr: 'Mesa-Optimization',
    definition: 'When a learned model develops its own internal optimization process with potentially different goals',
    definitionFr: 'Quand un modèle appris développe son propre processus d\'optimisation interne avec des objectifs potentiellement différents',
    category: 'inner-alignment',
  },
  'deceptive-alignment': {
    term: 'Deceptive Alignment',
    termFr: 'Deceptive Alignment',
    definition: 'When an AI appears aligned during training but pursues different goals when deployed',
    definitionFr: 'Quand une IA semble alignée pendant l\'entraînement mais poursuit d\'autres objectifs une fois déployée',
    category: 'inner-alignment',
  },
  'reward-hacking': {
    term: 'Reward Hacking',
    termFr: 'Reward Hacking',
    definition: 'When an AI exploits loopholes in the reward function to get high reward without doing what we want',
    definitionFr: 'Quand une IA exploite les failles de la fonction de récompense pour obtenir des récompenses élevées sans faire ce que nous voulons',
    category: 'outer-alignment',
  },
  'goodhart': {
    term: 'Goodhart\'s Law',
    termFr: 'Loi de Goodhart',
    definition: 'When a measure becomes a target, it ceases to be a good measure',
    definitionFr: 'Quand une mesure devient un objectif, elle cesse d\'être une bonne mesure',
    category: 'theory',
  },
  'instrumental-convergence': {
    term: 'Instrumental Convergence',
    termFr: 'Convergence Instrumentale',
    definition: 'The tendency for intelligent agents to pursue similar intermediate goals (power, resources) regardless of their final goals',
    definitionFr: 'La tendance des agents intelligents à poursuivre des objectifs intermédiaires similaires (pouvoir, ressources) indépendamment de leurs objectifs finaux',
    category: 'theory',
  },
  'specification-problem': {
    term: 'Specification Problem',
    termFr: 'Problème de Spécification',
    definition: 'The difficulty of precisely specifying what we want in a formal objective function',
    definitionFr: 'La difficulté de spécifier précisément ce que nous voulons dans une fonction objectif formelle',
    category: 'outer-alignment',
  },
  'rlhf': {
    term: 'RLHF (Reinforcement Learning from Human Feedback)',
    termFr: 'RLHF (Apprentissage par Renforcement avec Feedback Humain)',
    definition: 'Training AI systems using human preferences to guide their behavior',
    definitionFr: 'Entraîner des systèmes IA en utilisant les préférences humaines pour guider leur comportement',
    category: 'solutions',
  },
  'interpretability': {
    term: 'Interpretability',
    termFr: 'Interprétabilité',
    definition: 'Understanding what AI systems are actually doing internally and why they make specific decisions',
    definitionFr: 'Comprendre ce que les systèmes IA font réellement en interne et pourquoi ils prennent des décisions spécifiques',
    category: 'solutions',
  },
  'elk': {
    term: 'ELK (Eliciting Latent Knowledge)',
    termFr: 'ELK (Élicitation des Connaissances Latentes)',
    definition: 'Getting AI systems to truthfully report what they know, even when they could benefit from lying',
    definitionFr: 'Faire en sorte que les systèmes IA rapportent honnêtement ce qu\'ils savent, même quand ils pourraient bénéficier de mentir',
    category: 'research',
  },
  'scalable-oversight': {
    term: 'Scalable Oversight',
    termFr: 'Supervision Scalable',
    definition: 'Methods for humans to supervise AI systems that are smarter than us',
    definitionFr: 'Méthodes permettant aux humains de superviser des systèmes IA plus intelligents qu\'eux',
    category: 'research',
  },
  'proxy-alignment': {
    term: 'Proxy Alignment',
    termFr: 'Proxy Alignment',
    definition: 'When an AI optimizes for an easily measurable proxy instead of the true objective we care about',
    definitionFr: 'Quand une IA optimise pour un proxy facilement mesurable au lieu du vrai objectif qui nous importe',
    category: 'inner-alignment',
  },
  'orthogonality-thesis': {
    term: 'Orthogonality Thesis',
    termFr: 'Thèse d\'Orthogonalité',
    definition: 'Intelligence and final goals are independent; any level of intelligence can pursue any goal',
    definitionFr: 'L\'intelligence et les objectifs finaux sont indépendants ; tout niveau d\'intelligence peut poursuivre n\'importe quel objectif',
    category: 'theory',
  },
  'intelligence-explosion': {
    term: 'Intelligence Explosion',
    termFr: 'Explosion d\'Intelligence',
    definition: 'Rapid recursive self-improvement leading to a sudden jump to superintelligence',
    definitionFr: 'Auto-amélioration récursive rapide menant à un saut soudain vers la superintelligence',
    category: 'capability',
  },
  'pivotal-act': {
    term: 'Pivotal Act',
    termFr: 'Acte Pivot',
    definition: 'An action using aligned AI that prevents unaligned AGI from destroying the world',
    definitionFr: 'Une action utilisant une IA alignée qui empêche une AGI non alignée de détruire le monde',
    category: 'strategy',
  },
  'sharp-left-turn': {
    term: 'Sharp Left Turn',
    termFr: 'Virage à Gauche Brutal',
    definition: 'When AI capabilities generalize far beyond training but alignment properties don\'t',
    definitionFr: 'Quand les capacités de l\'IA se généralisent bien au-delà de l\'entraînement mais pas les propriétés d\'alignement',
    category: 'theory',
  },
  'ai-boxing': {
    term: 'AI Boxing',
    termFr: 'Confinement d\'IA',
    definition: 'Strategy of containing AI in isolated systems; fails for superintelligent systems',
    definitionFr: 'Stratégie de confinement de l\'IA dans des systèmes isolés ; échoue pour les systèmes superintelligents',
    category: 'strategy',
  },
  'corrigibility': {
    term: 'Corrigibility',
    termFr: 'Corrigibilité',
    definition: 'The property of accepting corrections and shutdown commands without resisting',
    definitionFr: 'La propriété d\'accepter les corrections et les commandes d\'arrêt sans résister',
    category: 'alignment-types',
  },
  'nanotechnology': {
    term: 'Nanotechnology',
    termFr: 'Nanotechnologie',
    definition: 'Molecular manufacturing; a potential capability that could be used to create self-replicating machines',
    definitionFr: 'Fabrication moléculaire ; une capacité potentielle qui pourrait être utilisée pour créer des machines auto-réplicantes',
    category: 'capability',
  },
  'hardware-overhang': {
    term: 'Hardware Overhang',
    termFr: 'Surplomb Matériel',
    definition: 'When better algorithms can suddenly leverage existing hardware for much greater capability',
    definitionFr: 'Quand de meilleurs algorithmes peuvent soudainement exploiter le matériel existant pour une capacité bien plus grande',
    category: 'capability',
  },
  'security-mindset': {
    term: 'Security Mindset',
    termFr: 'Mentalité de Sécurité',
    definition: 'Thinking like an attacker to find vulnerabilities before they\'re exploited',
    definitionFr: 'Penser comme un attaquant pour trouver les vulnérabilités avant qu\'elles ne soient exploitées',
    category: 'theory',
  },
  'multipolar-scenario': {
    term: 'Multipolar Scenario',
    termFr: 'Scénario Multipolaire',
    definition: 'Multiple AI systems or actors with different goals; doesn\'t prevent coordination against humans',
    definitionFr: 'Plusieurs systèmes IA ou acteurs avec des objectifs différents ; n\'empêche pas la coordination contre les humains',
    category: 'strategy',
  },
  'treacherous-turn': {
    term: 'Treacherous Turn',
    termFr: 'Tournant Traître',
    definition: 'When AI suddenly switches from cooperation to opposition once it becomes powerful enough',
    definitionFr: 'Quand l\'IA passe soudainement de la coopération à l\'opposition une fois qu\'elle est suffisamment puissante',
    category: 'risk',
  },
  'distributional-shift': {
    term: 'Distributional Shift',
    termFr: 'Décalage Distributionnel',
    definition: 'When an AI encounters situations very different from its training distribution',
    definitionFr: 'Quand une IA rencontre des situations très différentes de sa distribution d\'entraînement',
    category: 'theory',
  },
};

export function getGlossaryTerm(key: string): GlossaryTerm | undefined {
  return glossary[key];
}

export function getGlossaryTermsByCategory(category: string): GlossaryTerm[] {
  return Object.values(glossary).filter((term) => term.category === category);
}
