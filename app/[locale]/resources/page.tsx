'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Book, Video, GraduationCap, FileText, Globe, Mic, ExternalLink, Filter, Search, X, Library } from 'lucide-react';
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

const typeColors: Record<ResourceType, string> = {
  paper: 'from-blue-500/10 to-blue-500/5 border-blue-500/20',
  video: 'from-red-500/10 to-red-500/5 border-red-500/20',
  course: 'from-green-500/10 to-green-500/5 border-green-500/20',
  book: 'from-purple-500/10 to-purple-500/5 border-purple-500/20',
  website: 'from-cyan-500/10 to-cyan-500/5 border-cyan-500/20',
  podcast: 'from-orange-500/10 to-orange-500/5 border-orange-500/20',
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

  // Count active filters
  const activeFiltersCount = [selectedDifficulty !== 'all', selectedType !== 'all', selectedOrg !== 'all'].filter(Boolean).length;

  // Reset all filters
  const resetFilters = () => {
    setSelectedDifficulty('all');
    setSelectedType('all');
    setSelectedOrg('all');
  };

  const typeLabels: Record<ResourceType, { en: string; fr: string }> = {
    paper: { en: 'Paper', fr: 'Article' },
    video: { en: 'Video', fr: 'Vidéo' },
    course: { en: 'Course', fr: 'Cours' },
    book: { en: 'Book', fr: 'Livre' },
    website: { en: 'Website', fr: 'Site web' },
    podcast: { en: 'Podcast', fr: 'Podcast' },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header - Enhanced */}
      <div className="relative mb-12 overflow-hidden rounded-2xl border-2 border-border bg-gradient-to-br from-muted/50 via-background to-muted/30 p-8 sm:p-12">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
              <Library className="w-7 h-7 text-primary" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {locale === 'fr' ? 'Ressources d\'apprentissage' : 'Learning Resources'}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                {locale === 'fr'
                  ? 'Papers, cours, livres et vidéos organisés par niveau de difficulté'
                  : 'Papers, courses, books, and videos organized by difficulty level'}
              </p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="px-4 py-2 bg-background/80 backdrop-blur-sm border border-border rounded-xl">
              <span className="text-sm text-muted-foreground">{locale === 'fr' ? 'Total:' : 'Total:'}</span>
              <span className="ml-2 font-bold text-lg">{resources.length}</span>
            </div>
            {Object.entries(typeLabels).map(([type, labels]) => {
              const count = resources.filter((r) => r.type === type).length;
              if (count === 0) return null;
              return (
                <div key={type} className="px-4 py-2 bg-background/80 backdrop-blur-sm border border-border rounded-xl">
                  <span className="text-sm text-muted-foreground">{locale === 'fr' ? labels.fr : labels.en}:</span>
                  <span className="ml-2 font-bold">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Filters - Enhanced */}
      <div className="mb-8 overflow-hidden rounded-xl border-2 border-border bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Filter className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold">
                {locale === 'fr' ? 'Filtres' : 'Filters'}
                {activeFiltersCount > 0 && (
                  <span className="ml-2 px-2 py-1 text-xs bg-primary text-primary-foreground rounded-full">
                    {activeFiltersCount}
                  </span>
                )}
              </h2>
            </div>
            {activeFiltersCount > 0 && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground bg-muted hover:bg-muted/80 rounded-lg transition-all"
              >
                <X className="w-4 h-4" />
                {locale === 'fr' ? 'Réinitialiser' : 'Reset'}
              </button>
            )}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Difficulty Filter */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-foreground/80">
                {locale === 'fr' ? 'Niveau' : 'Difficulty'}
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value as DifficultyLevel | 'all')}
                className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
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
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-foreground/80">
                {locale === 'fr' ? 'Type' : 'Type'}
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as ResourceType | 'all')}
                className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
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
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-foreground/80">
                {locale === 'fr' ? 'Organisation' : 'Organization'}
              </label>
              <select
                value={selectedOrg}
                onChange={(e) => setSelectedOrg(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
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
          <div className="flex items-center gap-2 pt-4 border-t border-border/50">
            <Search className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">
              {locale === 'fr'
                ? `${filteredResources.length} ressource${filteredResources.length > 1 ? 's' : ''} trouvée${filteredResources.length > 1 ? 's' : ''}`
                : `${filteredResources.length} resource${filteredResources.length !== 1 ? 's' : ''} found`}
            </span>
          </div>
        </div>
      </div>

      {/* Resources List - Enhanced */}
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
              className="group block relative overflow-hidden rounded-xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${typeColors[resource.type]} opacity-0 group-hover:opacity-100 transition-opacity`} />

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="relative p-6 sm:p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:border-primary/50 transition-all">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors flex items-center gap-2 mb-2">
                          {title}
                          <ExternalLink className="w-4 h-4 flex-shrink-0 opacity-50 group-hover:opacity-100" />
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">{resource.author}</span>
                          <span className="mx-1.5">•</span>
                          <span>{resource.year}</span>
                          {resource.organization && (
                            <>
                              <span className="mx-1.5">•</span>
                              <span className="text-primary">{resource.organization}</span>
                            </>
                          )}
                        </p>
                      </div>
                      <DifficultyBadge level={resource.difficulty} size="sm" />
                    </div>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                      {description}
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-lg text-xs font-semibold">
                        {locale === 'fr' ? typeLabels[resource.type].fr : typeLabels[resource.type].en}
                      </span>
                      {resource.estimatedTime && (
                        <span className="px-3 py-1.5 bg-muted border border-border rounded-lg text-xs font-medium text-muted-foreground">
                          ⏱️ {resource.estimatedTime}
                        </span>
                      )}
                      {resource.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-3 py-1.5 bg-muted/50 border border-border rounded-lg text-xs text-muted-foreground">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Empty state - Enhanced */}
      {filteredResources.length === 0 && (
        <div className="relative overflow-hidden rounded-2xl border-2 border-dashed border-border bg-muted/20 p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          <div className="relative">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-muted flex items-center justify-center">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {locale === 'fr' ? 'Aucune ressource trouvée' : 'No resources found'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {locale === 'fr'
                ? 'Aucune ressource ne correspond aux filtres sélectionnés. Essayez d\'ajuster vos critères.'
                : 'No resources match the selected filters. Try adjusting your criteria.'}
            </p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
            >
              <X className="w-4 h-4" />
              {locale === 'fr' ? 'Réinitialiser les filtres' : 'Reset filters'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
