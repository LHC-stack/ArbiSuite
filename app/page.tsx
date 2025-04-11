import Header from './components/Header';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ProductPreview from './components/ProductPreview';
import StatusSection from './components/StatusSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section className="container py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            ArbiSuite
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Единая платформа для арбитража трафика и digital-маркетинга
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#early-access" 
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-white hover:bg-blue-700 transition-colors"
            >
              Получить ранний доступ
            </a>
          </div>
        </section>
        
        <ProblemSection />
        <SolutionSection />
        <ProductPreview />
        <StatusSection />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
}
