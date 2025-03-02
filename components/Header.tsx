import React from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { translations } from '../data/translations';
import Logo from './Logo';

interface HeaderProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
    currentLanguage: string;
    setCurrentLanguage: (language: string) => void;
    mobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({
                                           currentPage,
                                           setCurrentPage,
                                           currentLanguage,
                                           setCurrentLanguage,
                                           mobileMenuOpen,
                                           toggleMobileMenu
                                       }) => {
    const t = translations[currentLanguage];

    const navItems = [
        { id: 'home', label: t.nav.home },
        { id: 'about', label: t.nav.about },
        { id: 'gallery', label: t.nav.gallery },
        { id: 'contact', label: t.nav.contact },
    ];

    const languages = [
        { id: 'sr-latin', label: 'Srpski (latinica)' },
        { id: 'sr-cyrillic', label: 'Српски (ћирилица)' },
        { id: 'sv', label: 'Svenska' },
    ];

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div
                            className="cursor-pointer"
                            onClick={() => setCurrentPage('home')}
                        >
                            <Logo />
                        </div>
                        <h1
                            className="ml-3 text-2xl font-bold text-red-600 cursor-pointer hidden sm:block"
                            onClick={() => setCurrentPage('home')}
                        >
                            Srpsko Udruženje Solna
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setCurrentPage(item.id)}
                                className={`text-lg font-medium transition-colors duration-200 ${
                                    currentPage === item.id
                                        ? 'text-red-600 border-b-2 border-red-600'
                                        : 'text-gray-700 hover:text-red-500'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}

                        <div className="relative group">
                            <button className="flex items-center text-gray-700 hover:text-red-500">
                                <Globe className="w-5 h-5 mr-1" />
                                <span>{languages.find(lang => lang.id === currentLanguage)?.label.split(' ')[0]}</span>
                            </button>
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.id}
                                        onClick={() => setCurrentLanguage(lang.id)}
                                        className={`block px-4 py-2 text-sm w-full text-left ${
                                            currentLanguage === lang.id
                                                ? 'bg-red-100 text-red-600'
                                                : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-gray-700 hover:text-red-500 focus:outline-none"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <div className="flex flex-col space-y-3">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setCurrentPage(item.id);
                                        toggleMobileMenu();
                                    }}
                                    className={`text-lg font-medium py-2 ${
                                        currentPage === item.id
                                            ? 'text-red-600 border-l-4 border-red-600 pl-2'
                                            : 'text-gray-700 hover:text-red-500 pl-3'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}

                            <div className="border-t border-gray-200 pt-3">
                                <p className="text-sm text-gray-500 mb-2 pl-3">{t.language}</p>
                                {languages.map((lang) => (
                                    <button
                                        key={lang.id}
                                        onClick={() => setCurrentLanguage(lang.id)}
                                        className={`block py-2 text-lg w-full text-left ${
                                            currentLanguage === lang.id
                                                ? 'text-red-600 border-l-4 border-red-600 pl-2'
                                                : 'text-gray-700 hover:text-red-500 pl-3'
                                        }`}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;