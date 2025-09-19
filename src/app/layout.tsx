import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { APP_CONFIG } from "@/constants";
import { ConsultationProvider } from "@/contexts/ConsultationContext";
import { Toaster } from "sonner";
import ConsultationWrapper from "@/components/ConsultationWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${APP_CONFIG.name} - ${APP_CONFIG.tagline}`,
  description: APP_CONFIG.description,
  keywords: "AI, business automation, web development, data science, small business solutions",
  authors: [{ name: "Anwar Rashid Shaik" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ConsultationProvider>
          <Header />
          <main>{children}</main>
          <Toaster />
          <ConsultationWrapper />
        </ConsultationProvider>
      </body>
    </html>
  );
}
