import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // Liste des locales supportées
  locales,

  // Locale par défaut
  defaultLocale,

  // Utiliser le préfixe de locale pour toutes les langues sauf la par défaut
  localePrefix: 'always',
});

export const config = {
  // Matcher qui ignore les chemins internes de Next.js et les fichiers statiques
  matcher: ['/', '/(fr|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
