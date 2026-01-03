import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Benefits from './components/Benefits';
import Marquee from './components/Marquee';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { initScrollAnimations } from './utils/scrollAnimations';

function App() {
    useEffect(() => {
        // Initialize scroll animations
        const observer = initScrollAnimations();

        // Cleanup
        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div className="App">
            <Navigation />
            <Hero />
            <Marquee />
            <Process />
            <Benefits />
            <Pricing />
            <Portfolio />
            <FAQ />
            <Footer />
        </div>
    );
}

export default App;
