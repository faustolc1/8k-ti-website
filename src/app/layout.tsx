import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "8K Soluções em TI - Infraestrutura, Segurança e Cloud",
  description: "Transformamos desafios tecnológicos em oportunidades de crescimento. Soluções completas em infraestrutura de TI, segurança da informação, cloud computing e suporte técnico especializado.",
  keywords: "TI, infraestrutura, segurança da informação, cloud computing, suporte técnico, consultoria TI, São Paulo",
  authors: [{ name: "8K Soluções em TI" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "8K Soluções em TI - Infraestrutura, Segurança e Cloud",
    description: "Transformamos desafios tecnológicos em oportunidades de crescimento. Soluções completas em TI para sua empresa.",
    url: "https://8k.net.br",
    siteName: "8K Soluções em TI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "8K Soluções em TI",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "8K Soluções em TI - Infraestrutura, Segurança e Cloud",
    description: "Transformamos desafios tecnológicos em oportunidades de crescimento.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://8k.net.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="google-site-verification" content="your-verification-code" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "8K Soluções em TI",
              "url": "https://8k.net.br",
              "logo": "https://8k.net.br/logo.png",
              "description": "Soluções completas em TI: infraestrutura, segurança, cloud e suporte técnico",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-11-99999-9999",
                "contactType": "customer service",
                "availableLanguage": "Portuguese"
              },
              "sameAs": [
                "https://www.linkedin.com/company/8k-solucoes",
                "https://www.facebook.com/8ksolucoes",
                "https://www.instagram.com/8ksolucoes"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}