import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WB MINING SERVICES SARL",
  description: "Votre partenaire de confiance dans le secteur minier et industriel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}