// This is a minimal root layout - the actual layout is in [locale]/layout.tsx
// The middleware handles locale detection and redirection
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
