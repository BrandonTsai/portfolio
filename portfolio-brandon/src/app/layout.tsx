import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brandon Tsai – Senior Platform Engineer",
  description: "Crafting resilient infrastructure and delivering services without compromise. Portfolio of Brandon Tsai, Senior Platform Engineer.",
  openGraph: {
    title: "Brandon Tsai – Senior Platform Engineer",
    description: "Crafting resilient infrastructure and delivering services without compromise. Portfolio of Brandon Tsai, Senior Platform Engineer.",
    url: "https://yourdomain.com/",
    siteName: "Brandon Tsai Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brandon Tsai – Senior Platform Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brandon Tsai – Senior Platform Engineer",
    description: "Crafting resilient infrastructure and delivering services without compromise. Portfolio of Brandon Tsai, Senior Platform Engineer.",
    images: ["https://yourdomain.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://yourdomain.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Brandon Tsai",
              url: "https://yourdomain.com/",
              jobTitle: "Senior Platform Engineer",
              sameAs: [
                "https://linkedin.com/in/your-linkedin",
                "https://github.com/your-github"
              ],
              description: "Crafting resilient infrastructure and delivering services without compromise. Portfolio of Brandon Tsai, Senior Platform Engineer."
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

// Web Vitals reporting (Next.js will call this automatically if present)
export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    // You can send this data to an analytics endpoint
    // Example: fetch('/analytics', { method: 'POST', body: JSON.stringify(metric) })
    console.log(metric);
  }
}
