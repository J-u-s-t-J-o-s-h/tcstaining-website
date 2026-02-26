import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';

const About = lazy(() => import('./sections/About'));
const Services = lazy(() => import('./sections/Services'));
const Gallery = lazy(() => import('./sections/Gallery'));
const Contact = lazy(() => import('./sections/Contact'));

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-[50vh]" />}>
          <About />
          <Services />
          <Gallery />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
