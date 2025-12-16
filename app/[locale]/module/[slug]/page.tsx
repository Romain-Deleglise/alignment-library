import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ArrowLeft, BookOpen, Clock, ChevronRight } from 'lucide-react';
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
    <div className="max-w-4xl mx-auto">
      {/* Back button */}
      <Link
        href={`/${locale}`}
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        {locale === 'fr' ? 'Retour à l\'accueil' : 'Back to home'}
      </Link>

      {/* Module Header */}
      <div className="mb-12">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <DifficultyBadge level={moduleData.level} size="lg" showLabel showTime />
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-3">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {description}
            </p>
          </div>
        </div>

        {/* Module Stats */}
        <div className="flex items-center gap-6 mt-6 p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="font-medium">{moduleData.articles.length} {locale === 'fr' ? 'articles' : 'articles'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            <span className="font-medium">{moduleData.estimatedHours}</span>
          </div>
        </div>
      </div>

      {/* Articles List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-6">
          {locale === 'fr' ? 'Articles de ce module' : 'Articles in this module'}
        </h2>

        {moduleData.articles.map((article, index) => {
          const articleTitle = locale === 'fr' ? article.titleFr : article.title;
          const articleDescription = locale === 'fr' ? article.descriptionFr : article.description;

          return (
            <Link
              key={article.slug}
              href={`/${locale}/${article.section}/${article.slug}`}
              className="block p-6 border-2 rounded-lg hover:bg-muted hover:border-primary/50 transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {articleTitle}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    {articleDescription}
                  </p>
                  {article.readingTime && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{article.readingTime}</span>
                    </div>
                  )}
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Navigation to next module */}
      <div className="mt-12 p-6 bg-muted/30 rounded-lg border-2">
        <h3 className="text-lg font-semibold mb-3">
          {locale === 'fr' ? 'Prochaine étape' : 'Next step'}
        </h3>
        <p className="text-muted-foreground mb-4">
          {locale === 'fr'
            ? 'Une fois que vous avez terminé ce module, passez au niveau suivant pour approfondir vos connaissances.'
            : 'Once you\'ve completed this module, move to the next level to deepen your understanding.'}
        </p>
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          {locale === 'fr' ? 'Voir tous les modules' : 'View all modules'}
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
