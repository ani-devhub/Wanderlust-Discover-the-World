import { useState } from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import Packages from './components/Packages';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Career from './components/Career';
import Footer from './components/Footer';

function App() {
    const [activeSection, setActiveSection] = useState('home');

    const handleNavigation = (section) => {
        setActiveSection(section);
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='min-h-screen bg-slate-50'>
            <Header onNavigate={handleNavigation} activeSection={activeSection} />

            <main>
                <section id='home'>
                    <HeroCarousel />
                </section>

                <section id='packages' className='py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
                    <Packages />
                </section>

                <section id='about' className='py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
                    <AboutUs />
                </section>

                <section id='contact' className='py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
                    <ContactUs />
                </section>

                {/* <section id="careers" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <Career />
        </section> */}
            </main>

            <Footer onNavigate={handleNavigation} />
        </div>
    );
}

export default App;
