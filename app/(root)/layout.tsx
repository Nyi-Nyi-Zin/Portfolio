// app/(root)/layout.tsx - Container layout (no navbar/footer here)
// Child layouts handle their own navbar/footer structure
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
