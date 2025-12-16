import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // Liste des locales supportées
  locales,

  // Locale par défaut
  defaultLocale,

  // Toujours afficher le préfixe de locale dans l'URL
  localePrefix: 'always',
});

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/', '/(fr|en)/:path*', '/((?!_next|_vercel|api|.*\\..*).*)'],
};
