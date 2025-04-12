"use client";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import ProductPreview from "./components/ProductPreview";
import StatusSection from "./components/StatusSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProductPreview />
        <StatusSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
