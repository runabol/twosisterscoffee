import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AboutUs } from "@/components/AboutUs";

export default function HomePage() {
  return (
    <>
      <AnnouncementBanner />
      <div className="max-w-7xl mx-auto">
        <Header />
        <main id="content">
          <Hero />
          <ProductGrid />
          <AboutUs />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
