import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // Liste des locales supportées
  locales,

  // Locale par défaut
  defaultLocale,

  // Rediriger automatiquement vers la locale par défaut si aucune n'est détectée
  localeDetection: true,
});

export const config = {
  // Matcher qui ignore les chemins internes de Next.js et les fichiers statiques
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
