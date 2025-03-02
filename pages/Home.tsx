import React from 'react';
import { ArrowRight } from 'lucide-react';
import { translations } from '../data/translations';
import { galleryImages } from '../data/galleryImages';

interface HomeProps {
    language: string;
}

const Home: React.FC<HomeProps> = ({ language }) => {
    const t = translations[language];

    // Filter performance images for the showcase
    const performanceImages = galleryImages
        .filter(img => img.category === 'performances')
        .slice(0, 3);

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1564585222527-c2777a5bc6cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        {t.home.welcome} <span className="text-red-400">Srpsko Udruženje Solna</span>
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mb-8">
                        {t.home.subtitle}
                    </p>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 flex items-center">
                        {t.home.learnMore}
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                </div>
            </section>

            {/* Latest Performances Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        {t.home.latestPerformances}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {performanceImages.map((image) => (
                            <div key={image.id} className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                                <img
                                    src={image.url}
                                    alt={image.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                                    <p className="text-gray-600">{image.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 flex items-center mx-auto">
                            {t.home.viewGallery}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Join Us Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-1/2">
                                <img
                                    src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                    alt="Join Us"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                                    {t.home.joinUs}
                                </h2>
                                <p className="text-gray-600 mb-8 text-lg">
                                    {t.home.joinUsText}
                                </p>
                                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 self-start flex items-center">
                                    {t.home.contactUs}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;