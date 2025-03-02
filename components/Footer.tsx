import React from 'react';
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { translations } from '../data/translations';

interface FooterProps {
    currentLanguage: string;
    setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ currentLanguage, setCurrentPage }) => {
    const t = translations[currentLanguage];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-red-700 text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">{t.footer.about}</h3>
                        <p className="mb-4">
                            {t.footer.description}
                        </p>
                        <p>{t.footer.established}: 1970</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">{t.footer.contact}</h3>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <MapPin className="w-5 h-5 mr-2" />
                                <span>Solna, Sweden</span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 mr-2" />
                                <span>+46 123 456 789</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 mr-2" />
                                <span>info@srpskoudruzenje.se</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">{t.footer.followUs}</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-200 transition-colors">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-200 transition-colors">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-200 transition-colors">
                                <Youtube className="w-6 h-6" />
                            </a>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-xl font-bold mb-4">{t.footer.quickLinks}</h3>
                            <ul className="space-y-2">
                                <li>
                                    <button
                                        onClick={() => setCurrentPage('home')}
                                        className="hover:text-red-200 transition-colors"
                                    >
                                        {t.nav.home}
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setCurrentPage('about')}
                                        className="hover:text-red-200 transition-colors"
                                    >
                                        {t.nav.about}
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setCurrentPage('gallery')}
                                        className="hover:text-red-200 transition-colors"
                                    >
                                        {t.nav.gallery}
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setCurrentPage('contact')}
                                        className="hover:text-red-200 transition-colors"
                                    >
                                        {t.nav.contact}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-red-600 mt-8 pt-6 text-center">
                    <p>&copy; {currentYear} Srpsko Udruženje Solna. {t.footer.rights}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;