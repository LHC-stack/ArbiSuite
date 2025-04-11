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
