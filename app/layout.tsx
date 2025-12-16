// This is the minimal root layout required by Next.js
// The actual layout with providers is in [locale]/layout.tsx
// The middleware handles locale detection and redirection
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
