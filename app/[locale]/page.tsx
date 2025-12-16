import Link from 'next/link';
import { Book, Target, AlertTriangle, Users, Lightbulb, ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import LearningPathCard from '@/components/LearningPathCard';

type Props = {
  params: { locale: string };
};

export default async function HomePage({ params }: Props) {
  const { locale } = params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'homepage' });

  const learningPaths = [
    {
      level: 'beginner' as const,
      title: 'Start Here',
      titleFr: 'Commencez ici',
      description: 'Understand the basics of AI alignment and why it matters',
      descriptionFr: 'Comprendre les bases de l\'alignement de l\'IA et pourquoi c\'est important',
      articleCount: 3,
      estimatedHours: '1-2h',
      href: `/${locale}/module/introduction`,
    },
    {
      level: 'initiate' as const,
      title: 'Core Problems',
      titleFr: 'Problèmes Fondamentaux',
      description: 'Learn about outer alignment, specification problems, and Goodhart\'s Law',
      descriptionFr: 'Découvrir l\'outer alignment, le problème de spécification et la loi de Goodhart',
      articleCount: 8,
      estimatedHours: '5-8h',
      href: `/${locale}/module/outer-alignment`,
    },
    {
      level: 'intermediate' as const,
      title: 'Inner Alignment',
      titleFr: 'Inner Alignment',
      description: 'Mesa-optimization, deceptive alignment, and instrumental convergence',
      descriptionFr: 'Mesa-optimization, deceptive alignment et convergence instrumentale',
      articleCount: 7,
      estimatedHours: '10-15h',
      href: `/${locale}/module/inner-alignment`,
    },
    {
      level: 'advanced' as const,
      title: 'Solutions & Research',
      titleFr: 'Solutions & Recherche',
      description: 'Current approaches: RLHF, Constitutional AI, Interpretability, and their limitations',
      descriptionFr: 'Approches actuelles : RLHF, Constitutional AI, Interprétabilité et leurs limites',
      articleCount: 6,
      estimatedHours: '8-12h',
      href: `/${locale}/module/solutions`,
    },
    {
      level: 'expert' as const,
      title: 'Research Frontiers',
      titleFr: 'Frontières de la Recherche',
      description: 'ELK, scalable oversight, and open problems in alignment research',
      descriptionFr: 'ELK, scalable oversight et problèmes ouverts en recherche d\'alignement',
      articleCount: 12,
      estimatedHours: '20-30h',
      href: `/${locale}/module/research`,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-6 animate-in zoom-in duration-300">
            <Target className="w-14 h-14 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent animate-in slide-in-from-bottom-4 duration-500">
            {locale === 'fr' ? 'Comprendre le Problème de l\'Alignement de l\'IA' : 'Understanding the AI Alignment Problem'}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2 animate-in slide-in-from-bottom-4 duration-500 delay-100">
            {locale === 'fr'
              ? 'Le défi le plus important de notre époque, expliqué progressivement'
              : 'The most important challenge of our time, explained progressively'}
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in slide-in-from-bottom-4 duration-500 delay-200">
            {locale === 'fr'
              ? 'Un parcours structuré du niveau débutant jusqu\'à expert, avec des ressources, schémas et exemples concrets.'
              : 'A structured learning path from beginner to expert, with resources, diagrams, and concrete examples.'}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto animate-in fade-in duration-500 delay-300">
          <div className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-all">
            <div className="text-3xl font-bold text-primary">30+</div>
            <div className="text-sm text-muted-foreground">
              {locale === 'fr' ? 'Articles détaillés' : 'Detailed articles'}
            </div>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-all">
            <div className="text-3xl font-bold text-primary">5</div>
            <div className="text-sm text-muted-foreground">
              {locale === 'fr' ? 'Niveaux de progression' : 'Progression levels'}
            </div>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-all">
            <div className="text-3xl font-bold text-primary">50+h</div>
            <div className="text-sm text-muted-foreground">
              {locale === 'fr' ? 'De contenu' : 'Of content'}
            </div>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-all">
            <div className="text-3xl font-bold text-primary">100+</div>
            <div className="text-sm text-muted-foreground">
              {locale === 'fr' ? 'Ressources' : 'Resources'}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">
            {locale === 'fr' ? 'Votre Parcours d\'Apprentissage' : 'Your Learning Path'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {locale === 'fr'
              ? 'Suivez un parcours progressif de 🌱 débutant à 🏔️ expert. Chaque niveau construit sur le précédent.'
              : 'Follow a progressive path from 🌱 beginner to 🏔️ expert. Each level builds on the previous one.'}
          </p>
        </div>

        <div className="space-y-4 animate-in fade-in duration-500 delay-400">
          {learningPaths.map((path, index) => (
            <div key={path.level} className="animate-in slide-in-from-left duration-500" style={{ animationDelay: `${index * 100}ms` }}>
              <LearningPathCard {...path} locale={locale} />
            </div>
          ))}
        </div>
      </section>

      {/* Why This Matters */}
      <section className="mb-16 p-8 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/10 rounded-lg animate-in fade-in duration-500 delay-900">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-2xl font-bold mb-3">
              {locale === 'fr' ? 'Pourquoi c\'est urgent' : 'Why This Matters'}
            </h3>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-3">
                {locale === 'fr'
                  ? 'De nombreux chercheurs estiment des probabilités très élevées de risque existentiel (50-99%+) si nous ne résolvons pas le problème de l\'alignement avant le développement d\'une IA de niveau humain (AGI).'
                  : 'Many leading researchers estimate very high probabilities of existential risk (50-99%+) if we don\'t solve the alignment problem before developing human-level AI (AGI).'}
              </p>
              <blockquote className="border-l-4 border-yellow-500 pl-4 italic">
                {locale === 'fr'
                  ? '"Atténuer le risque d\'extinction lié à l\'IA devrait être une priorité mondiale au même titre que d\'autres risques à l\'échelle de la société tels que les pandémies et la guerre nucléaire." — Déclaration sur le risque de l\'IA (2023)'
                  : '"Mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war." — Statement on AI Risk (2023)'}
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="grid md:grid-cols-3 gap-6 mb-16">
        <Link
          href={`/${locale}/resources/reading-lists`}
          className="p-6 border-2 rounded-lg hover:bg-muted hover:border-primary/50 transition-all group hover:scale-105 hover:shadow-lg"
        >
          <Book className="w-10 h-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {locale === 'fr' ? 'Ressources par Niveau' : 'Resources by Level'}
          </h3>
          <p className="text-muted-foreground text-sm">
            {locale === 'fr'
              ? 'Papers, vidéos et cours organisés par difficulté'
              : 'Papers, videos, and courses organized by difficulty'}
          </p>
        </Link>

        <Link
          href={`/${locale}/organizations/miri`}
          className="p-6 border-2 rounded-lg hover:bg-muted hover:border-primary/50 transition-all group hover:scale-105 hover:shadow-lg"
        >
          <Users className="w-10 h-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {locale === 'fr' ? 'Organisations' : 'Organizations'}
          </h3>
          <p className="text-muted-foreground text-sm">
            {locale === 'fr'
              ? 'MIRI, Anthropic, ARC et les acteurs clés'
              : 'MIRI, Anthropic, ARC and key players'}
          </p>
        </Link>

        <a
          href="https://www.aisafetyfundamentals.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 border-2 rounded-lg hover:bg-muted hover:border-primary/50 transition-all group hover:scale-105 hover:shadow-lg"
        >
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
            <ExternalLink className="w-4 h-4 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {locale === 'fr' ? 'Cours Pratiques' : 'Practical Courses'}
          </h3>
          <p className="text-muted-foreground text-sm">
            {locale === 'fr'
              ? 'Formations et programmes certifiants'
              : 'Training programs and certifications'}
          </p>
        </a>
      </section>
    </div>
  );
}
