import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Svayam Incarnation | Complete Business Outsourcing Partner',
  description:
    'Svayam Incarnation delivers structured, implementation-ready business outsourcing solutions across technology, marketing, branding, AI automation, and dedicated teams.',
  keywords: [
    'Svayam Incarnation',
    'Business Outsourcing',
    'Technology Solutions',
    'Digital Marketing',
    'AI Automation',
    'Dedicated Teams',
    'Legal Compliance',
    'Business Consulting',
  ],
  authors: [{ name: 'Svayam Incarnation' }],
  creator: 'Svayam Incarnation',
  metadataBase: new URL('https://www.svayam.in'),
  openGraph: {
    title: 'Svayam Incarnation | Complete Business Outsourcing Partner',
    description:
      'Structured, token-driven business outsourcing solutions for buyers, teams, and decision-makers.',
    url: 'https://www.svayam.in/',
    siteName: 'Svayam Incarnation',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo (1).svg',
        width: 120,
        height: 120,
        alt: 'Svayam Incarnation Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Svayam Incarnation | Complete Business Outsourcing Partner',
    description: 'Structured, token-driven business outsourcing solutions.',
    images: ['/logo (1).svg'],
  },
  icons: {
    icon: '/logo (1).svg',
    shortcut: '/logo (1).svg',
    apple: '/logo (1).svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Svayam Incarnation',
    description:
      'Complete business outsourcing partner providing technology, marketing, branding, AI automation, and dedicated teams.',
    url: 'https://www.svayam.in/',
    logo: 'https://www.svayam.in/logo%20(1).svg',
    knowsAbout: [
      'Software Engineering',
      'Digital Marketing',
      'AI & Workflow Automation',
      'Legal Compliance',
      'Brand Identity Design',
      'Business Consulting',
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-[#212529] antialiased flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
