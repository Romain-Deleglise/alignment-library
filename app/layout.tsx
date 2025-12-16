// Root layout - must have html and body tags
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var locale = window.location.pathname.split('/')[1];
                if (locale === 'fr' || locale === 'en') {
                  document.documentElement.lang = locale;
                } else {
                  document.documentElement.lang = 'fr';
                }
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
