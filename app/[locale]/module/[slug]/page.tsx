import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ArrowLeft, BookOpen, Clock, ChevronRight, Target, Sparkles } from 'lucide-react';
import { modules, getModuleBySlug } from '@/lib/modules';
import DifficultyBadge from '@/components/DifficultyBadge';

type Props = {
  params: { locale: string; slug: string };
};

export function generateStaticParams() {
  return modules.map((m) => ({
    slug: m.slug,
  }));
}

export default async function ModulePage({ params }: Props) {
  const { locale, slug } = params;

  // Enable static rendering
  setRequestLocale(locale);

  const moduleData = getModuleBySlug(slug);

  if (!moduleData) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: 'common' });

  const title = locale === 'fr' ? moduleData.titleFr : moduleData.title;
  const description = locale === 'fr' ? moduleData.descriptionFr : moduleData.description;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back button - Enhanced */}
      <Link
        href={`/${locale}`}
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-all hover:gap-3 group"
      >
        <div className="w-8 h-8 rounded-lg bg-muted group-hover:bg-primary/10 flex items-center justify-center transition-all">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        </div>
        <span className="font-medium">{locale === 'fr' ? 'Retour à l\'accueil' : 'Back to home'}</span>
      </Link>

      {/* Module Header - Enhanced with gradient background */}
      <div className="relative mb-12 overflow-hidden rounded-2xl border-2 border-border bg-gradient-to-br from-muted/50 via-background to-muted/30 p-8 sm:p-10">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />

        {/* Decorative accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex-1">
              <DifficultyBadge level={moduleData.level} size="lg" showLabel showTime />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {title}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                {description}
              </p>
            </div>
          </div>

          {/* Module Stats - Enhanced with cards */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <div className="flex items-center gap-3 px-5 py-3 bg-background/80 backdrop-blur-sm border border-border rounded-xl shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">{locale === 'fr' ? 'Articles' : 'Articles'}</div>
                <div className="text-lg font-bold">{moduleData.articles.length}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-background/80 backdrop-blur-sm border border-border rounded-xl shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">{locale === 'fr' ? 'Durée estimée' : 'Estimated time'}</div>
                <div className="text-lg font-bold">{moduleData.estimatedHours}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="mb-8 flex items-center gap-3">
        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full w-0 transition-all duration-500"
               style={{ width: '0%' }} />
        </div>
        <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
          0 / {moduleData.articles.length}
        </span>
      </div>

      {/* Articles List - Enhanced */}
      <div className="space-y-4 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <Target className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold">
            {locale === 'fr' ? 'Articles de ce module' : 'Articles in this module'}
          </h2>
        </div>

        {moduleData.articles.map((article, index) => {
          const articleTitle = locale === 'fr' ? article.titleFr : article.title;
          const articleDescription = locale === 'fr' ? article.descriptionFr : article.description;
          const isFirst = index === 0;

          return (
            <Link
              key={article.slug}
              href={`/${locale}/${article.section}/${article.slug}`}
              className="group block relative overflow-hidden rounded-xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="relative p-6 sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      {/* Enhanced number badge */}
                      <div className="relative flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:border-primary/50 transition-all">
                          <span className="text-lg font-bold text-primary">{index + 1}</span>
                        </div>
                        {isFirst && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                            <Sparkles className="w-3 h-3 text-primary-foreground" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors mb-2 leading-tight">
                          {articleTitle}
                        </h3>
                        {isFirst && (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                            {locale === 'fr' ? 'Commencez ici' : 'Start here'}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 ml-16">
                      {articleDescription}
                    </p>
                    {article.readingTime && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground ml-16">
                        <Clock className="w-4 h-4" />
                        <span>{article.readingTime}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Navigation to next module - Enhanced */}
      <div className="relative overflow-hidden rounded-2xl border-2 border-border bg-gradient-to-br from-primary/5 via-background to-muted/30 p-8">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                {locale === 'fr' ? 'Prochaine étape' : 'Next step'}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {locale === 'fr'
                  ? 'Une fois que vous avez terminé ce module, passez au niveau suivant pour approfondir vos connaissances.'
                  : 'Once you\'ve completed this module, move to the next level to deepen your understanding.'}
              </p>
              <Link
                href={`/${locale}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 hover:gap-3 transition-all hover:shadow-lg group"
              >
                {locale === 'fr' ? 'Voir tous les modules' : 'View all modules'}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
