import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <AnnouncementBanner />
      <Header />
      <main id="content">
        <Hero />
        <ProductGrid />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
