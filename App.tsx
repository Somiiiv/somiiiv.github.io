import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [currentLanguage, setCurrentLanguage] = useState('sr-latin');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home language={currentLanguage} />;
            case 'about':
                return <About language={currentLanguage} />;
            case 'gallery':
                return <Gallery language={currentLanguage} />;
            case 'contact':
                return <Contact language={currentLanguage} />;
            default:
                return <Home language={currentLanguage} />;
        }
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                currentLanguage={currentLanguage}
                setCurrentLanguage={setCurrentLanguage}
                mobileMenuOpen={mobileMenuOpen}
                toggleMobileMenu={toggleMobileMenu}
            />

            <main className="flex-grow">
                {renderPage()}
            </main>

            <Footer
                currentLanguage={currentLanguage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default App;