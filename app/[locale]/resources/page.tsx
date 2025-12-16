'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Book, Video, GraduationCap, FileText, Globe, Mic, ExternalLink, Filter } from 'lucide-react';
import { resources, type ResourceType } from '@/lib/resources';
import { DIFFICULTY_LEVELS, type DifficultyLevel } from '@/lib/types';
import DifficultyBadge from '@/components/DifficultyBadge';

const typeIcons: Record<ResourceType, any> = {
  paper: FileText,
  video: Video,
  course: GraduationCap,
  book: Book,
  website: Globe,
  podcast: Mic,
};

export default function ResourcesPage() {
  const locale = useLocale();
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | 'all'>('all');
  const [selectedType, setSelectedType] = useState<ResourceType | 'all'>('all');
  const [selectedOrg, setSelectedOrg] = useState<string>('all');

  // Filter resources
  const filteredResources = resources.filter((resource) => {
    if (selectedDifficulty !== 'all' && resource.difficulty !== selectedDifficulty) return false;
    if (selectedType !== 'all' && resource.type !== selectedType) return false;
    if (selectedOrg !== 'all' && resource.organization !== selectedOrg) return false;
    return true;
  });

  // Get unique organizations
  const organizations = Array.from(new Set(resources.map((r) => r.organization).filter(Boolean)));

  const typeLabels: Record<ResourceType, { en: string; fr: string }> = {
    paper: { en: 'Paper', fr: 'Article' },
    video: { en: 'Video', fr: 'Vidéo' },
    course: { en: 'Course', fr: 'Cours' },
    book: { en: 'Book', fr: 'Livre' },
    website: { en: 'Website', fr: 'Site web' },
    podcast: { en: 'Podcast', fr: 'Podcast' },
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {locale === 'fr' ? 'Ressources d\'apprentissage' : 'Learning Resources'}
        </h1>
        <p className="text-xl text-muted-foreground">
          {locale === 'fr'
            ? 'Papers, cours, livres et vidéos organisés par niveau de difficulté'
            : 'Papers, courses, books, and videos organized by difficulty level'}
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 p-6 bg-muted/30 rounded-lg border-2 space-y-4">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <Filter className="w-5 h-5" />
          {locale === 'fr' ? 'Filtres' : 'Filters'}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Difficulty Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">
              {locale === 'fr' ? 'Niveau' : 'Difficulty'}
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value as DifficultyLevel | 'all')}
              className="w-full p-2 rounded-md border bg-background"
            >
              <option value="all">{locale === 'fr' ? 'Tous les niveaux' : 'All levels'}</option>
              {Object.entries(DIFFICULTY_LEVELS).map(([key, level]) => (
                <option key={key} value={key}>
                  {level.icon} {locale === 'fr' ? level.labelFr : level.label}
                </option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">
              {locale === 'fr' ? 'Type' : 'Type'}
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as ResourceType | 'all')}
              className="w-full p-2 rounded-md border bg-background"
            >
              <option value="all">{locale === 'fr' ? 'Tous les types' : 'All types'}</option>
              {Object.entries(typeLabels).map(([key, labels]) => (
                <option key={key} value={key}>
                  {locale === 'fr' ? labels.fr : labels.en}
                </option>
              ))}
            </select>
          </div>

          {/* Organization Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">
              {locale === 'fr' ? 'Organisation' : 'Organization'}
            </label>
            <select
              value={selectedOrg}
              onChange={(e) => setSelectedOrg(e.target.value)}
              className="w-full p-2 rounded-md border bg-background"
            >
              <option value="all">{locale === 'fr' ? 'Toutes' : 'All'}</option>
              {organizations.map((org) => (
                <option key={org} value={org}>
                  {org}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="text-sm text-muted-foreground">
          {locale === 'fr' ? `${filteredResources.length} ressources trouvées` : `${filteredResources.length} resources found`}
        </div>
      </div>

      {/* Resources List */}
      <div className="space-y-4">
        {filteredResources.map((resource) => {
          const Icon = typeIcons[resource.type];
          const title = (locale === 'fr' && resource.titleFr) ? resource.titleFr : resource.title;
          const description = (locale === 'fr' && resource.descriptionFr) ? resource.descriptionFr : resource.description;

          return (
            <a
              key={resource.id}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border-2 rounded-lg hover:bg-muted hover:border-primary/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
                        {title}
                        <ExternalLink className="w-4 h-4 flex-shrink-0" />
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {resource.author} ({resource.year})
                        {resource.organization && ` • ${resource.organization}`}
                      </p>
                    </div>
                    <DifficultyBadge level={resource.difficulty} size="sm" />
                  </div>

                  <p className="text-muted-foreground mb-3">
                    {description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="px-2 py-1 bg-muted rounded">
                      {locale === 'fr' ? typeLabels[resource.type].fr : typeLabels[resource.type].en}
                    </span>
                    {resource.estimatedTime && (
                      <span className="text-muted-foreground">
                        ⏱️ {resource.estimatedTime}
                      </span>
                    )}
                    {resource.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-muted-foreground">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Empty state */}
      {filteredResources.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <p>{locale === 'fr' ? 'Aucune ressource ne correspond aux filtres sélectionnés.' : 'No resources match the selected filters.'}</p>
        </div>
      )}
    </div>
  );
}
