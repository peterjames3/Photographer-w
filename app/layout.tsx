// app/layout.tsx (or app/RootLayout.tsx depending on your structure)
import type { Metadata } from "next";
import { cormorant } from "@/app/ui/font";
import "@/app/ui/global.css";
import Navbar from "@/app/ui/Navbar";
import Footer from "@/app/ui/Footer";
import ScrollToTop from "@/app/ui/Feature/ScrollToTop";
import Transition from "@/app/ui/Transition";
//import RouterLoader from '@/components/ui/RouteLoader';

export const metadata: Metadata = {
  title: "Capturing Timeless Moments",
  description:
    "Get in touch with Me for professional photography services. Specializing in landscape, portrait, and event photography.",
  keywords:
    "contact Peter, hire a photographer, professional photography, landscape photography, portrait photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.className} antialiased`}>
        <Navbar />
        <Transition>{children}</Transition>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
