import React from 'react';
import { translations } from '../data/translations';

interface AboutProps {
    language: string;
}

const About: React.FC<AboutProps> = ({ language }) => {
    const t = translations[language];

    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">{t.about.title}</h1>
                    <p className="text-xl text-gray-600">{t.about.subtitle}</p>
                </div>

                {/* History Section */}
                <div className="mb-16">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                            <img
                                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
                                alt="Our History"
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-red-600 mb-6">{t.about.history}</h2>
                            <p className="text-gray-700 mb-4 text-lg">
                                {t.about.historyText1}
                            </p>
                            <p className="text-gray-700 text-lg">
                                {t.about.historyText2}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="mb-16 bg-gray-50 rounded-lg p-8 shadow-md">
                    <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">{t.about.mission}</h2>
                    <p className="text-gray-700 text-lg text-center max-w-4xl mx-auto">
                        {t.about.missionText}
                    </p>
                </div>

                {/* Achievements Section */}
                <div>
                    <div className="flex flex-col md:flex-row-reverse items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
                            <img
                                src="https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                                alt="Our Achievements"
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-red-600 mb-6">{t.about.achievements}</h2>
                            <p className="text-gray-700 text-lg">
                                {t.about.achievementsText}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-center mb-12">1970 - 2024</h2>
                    <div className="relative">
                        {/* Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200"></div>

                        {/* Timeline Items */}
                        <div className="relative z-10">
                            {/* 1970 */}
                            <div className="mb-16 flex justify-center">
                                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                                    1970
                                </div>
                            </div>
                            <div className="mb-16 flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                                    <h3 className="text-xl font-bold mb-2">Founding of the Association</h3>
                                    <p className="text-gray-600">Srpsko Udruženje Solna was established by a group of Serbian immigrants in Sweden.</p>
                                </div>
                                <div className="md:w-1/2 md:pl-12">
                                    <div className="bg-white p-4 rounded-lg shadow-md">
                                        <img
                                            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
                                            alt="Founding"
                                            className="rounded w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* 1985 */}
                            <div className="mb-16 flex justify-center">
                                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                                    1985
                                </div>
                            </div>
                            <div className="mb-16 flex flex-col md:flex-row-reverse items-center">
                                <div className="md:w-1/2 md:pl-12 md:text-left mb-8 md:mb-0">
                                    <h3 className="text-xl font-bold mb-2">First International Performance</h3>
                                    <p className="text-gray-600">Our first international performance at the European Folk Festival.</p>
                                </div>
                                <div className="md:w-1/2 md:pr-12">
                                    <div className="bg-white p-4 rounded-lg shadow-md">
                                        <img
                                            src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                                            alt="First International Performance"
                                            className="rounded w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* 2000 */}
                            <div className="mb-16 flex justify-center">
                                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                                    2000
                                </div>
                            </div>
                            <div className="mb-16 flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                                    <h3 className="text-xl font-bold mb-2">30th Anniversary Celebration</h3>
                                    <p className="text-gray-600">A major celebration marking 30 years of preserving Serbian culture in Sweden.</p>
                                </div>
                                <div className="md:w-1/2 md:pl-12">
                                    <div className="bg-white p-4 rounded-lg shadow-md">
                                        <img
                                            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                                            alt="30th Anniversary"
                                            className="rounded w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* 2020 */}
                            <div className="mb-16 flex justify-center">
                                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                                    2020
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row-reverse items-center">
                                <div className="md:w-1/2 md:pl-12 md:text-left mb-8 md:mb-0">
                                    <h3 className="text-xl font-bold mb-2">50th Anniversary</h3>
                                    <p className="text-gray-600">Golden jubilee celebrating half a century of cultural preservation and community building.</p>
                                </div>
                                <div className="md:w-1/2 md:pr-12">
                                    <div className="bg-white p-4 rounded-lg shadow-md">
                                        <img
                                            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                            alt="50th Anniversary"
                                            className="rounded w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;