import Link from 'next/link';
import { Book, Target, AlertTriangle, Users, Lightbulb, ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import LearningPathCard from '@/components/LearningPathCard';
import HeroIceberg from '@/components/HeroIceberg';

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
    <>
      {/* Full-Screen Hero Iceberg */}
      <HeroIceberg locale={locale} />

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-500">
            <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl hover:border-primary/40 transition-all hover:scale-105 hover:shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground font-medium">
                {locale === 'fr' ? 'Articles détaillés' : 'Detailed articles'}
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl hover:border-primary/40 transition-all hover:scale-105 hover:shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-sm text-muted-foreground font-medium">
                {locale === 'fr' ? 'Niveaux de progression' : 'Progression levels'}
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl hover:border-primary/40 transition-all hover:scale-105 hover:shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">50+h</div>
              <div className="text-sm text-muted-foreground font-medium">
                {locale === 'fr' ? 'De contenu' : 'Of content'}
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl hover:border-primary/40 transition-all hover:scale-105 hover:shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground font-medium">
                {locale === 'fr' ? 'Ressources' : 'Resources'}
              </div>
            </div>
          </div>
        </section>

        {/* Learning Path Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              {locale === 'fr' ? 'Votre Parcours d\'Apprentissage' : 'Your Learning Path'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {locale === 'fr'
                ? 'Suivez un parcours progressif de 🌱 débutant à 🏔️ expert. Chaque niveau construit sur le précédent.'
                : 'Follow a progressive path from 🌱 beginner to 🏔️ expert. Each level builds on the previous one.'}
            </p>
          </div>

          <div className="space-y-4">
            {learningPaths.map((path, index) => (
              <div key={path.level} className="animate-in fade-in duration-500" style={{ animationDelay: `${index * 50}ms` }}>
                <LearningPathCard {...path} locale={locale} />
              </div>
            ))}
          </div>
        </section>

        {/* Why This Matters */}
        <section className="mb-16 p-8 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/10 rounded-xl shadow-lg">
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
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Link
            href={`/${locale}/resources/reading-lists`}
            className="p-6 border-2 rounded-xl hover:bg-muted hover:border-primary/50 transition-all group hover:scale-105 hover:shadow-xl bg-gradient-to-br from-background to-muted/30"
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
            className="p-6 border-2 rounded-xl hover:bg-muted hover:border-primary/50 transition-all group hover:scale-105 hover:shadow-xl bg-gradient-to-br from-background to-muted/30"
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
            className="p-6 border-2 rounded-xl hover:bg-muted hover:border-primary/50 transition-all group hover:scale-105 hover:shadow-xl bg-gradient-to-br from-background to-muted/30"
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
    </>
  );
}
