import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ArbiSuite — Единая платформа для арбитража трафика и digital-маркетинга",
  description: "ArbiSuite объединяет все необходимые инструменты для арбитражников и маркетологов: антидетект-браузер, AI-ассистент, трекер и генератор креативов в одном окне",
  keywords: "арбитраж трафика, digital-маркетинг, антидетект, трекер, AI-ассистент, keitaro, adsPower, арбитраж",
  authors: [{ name: "ArbiSuite Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "ArbiSuite — Единая платформа для арбитража трафика и digital-маркетинга",
    description: "Антидетект-браузер, AI, трекинг и креативы в одном окне",
    url: "https://arbisuite.io",
    siteName: "ArbiSuite",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Убедитесь, что файл существует в public/
        width: 1200,
        height: 630,
        alt: "ArbiSuite Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ArbiSuite — Единая платформа для арбитража трафика и digital-маркетинга",
    description: "Антидетект-браузер, AI, трекинг и креативы в одном окне",
    images: ["/twitter-image.png"], // Убедитесь, что файл существует в public/
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="u34kEUicn9EIHgAqGBTx11GxNn2WuWxBFyms6iFKaoc"
        />
        <meta 
          name="google-site-verification" 
          content="T3Ot8Iz_t3aZ_iQtCO4wnr3dLFmebAiyAvFOHQg0iHA" 
        />
        
        {/* Favicon */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>"
          type="image/svg+xml"
        />
        
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-1351VRX00Y`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1351VRX00Y');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[var(--background)] text-[var(--foreground)]`}
      >
        {children}
      </body>
    </html>
  );
}