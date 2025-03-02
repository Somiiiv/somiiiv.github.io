import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { translations } from '../data/translations';

interface ContactProps {
    language: string;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
    const t = translations[language];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState<{
        submitted: boolean;
        success: boolean;
        message: string;
    } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simulate form submission
        setFormStatus({
            submitted: true,
            success: true,
            message: language === 'sv'
                ? 'Tack för ditt meddelande! Vi återkommer till dig så snart som möjligt.'
                : language === 'sr-cyrillic'
                    ? 'Хвала на вашој поруци! Одговорићемо вам у најкраћем могућем року.'
                    : 'Hvala na vašoj poruci! Odgovorićemo vam u najkraćem mogućem roku.'
        });

        // Reset form
        setFormData({
            name: '',
            email: '',
            message: ''
        });

        // Clear status after 5 seconds
        setTimeout(() => {
            setFormStatus(null);
        }, 5000);
    };

    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">{t.contact.title}</h1>
                    <p className="text-xl text-gray-600">{t.contact.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.contact.findUs}</h2>

                        <div className="bg-gray-50 rounded-lg p-6 shadow-md mb-8">
                            <div className="flex items-start mb-6">
                                <MapPin className="w-6 h-6 text-red-600 mr-4 mt-1" />
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">{t.contact.address}</h3>
                                    <p className="text-gray-600">
                                        Srpsko Udruženje Solna<br />
                                        Huvudstagatan 1<br />
                                        171 58 Solna<br />
                                        Sweden
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start mb-6">
                                <Phone className="w-6 h-6 text-red-600 mr-4 mt-1" />
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">{t.contact.phone}</h3>
                                    <p className="text-gray-600">+46 123 456 789</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Mail className="w-6 h-6 text-red-600 mr-4 mt-1" />
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">{t.contact.email}</h3>
                                    <p className="text-gray-600">info@srpskoudruzenje.se</p>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="rounded-lg overflow-hidden shadow-md h-80">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.1807953507187!2d17.9935!3d59.3611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d9d263b8e83%3A0x82fc73b3b8457d10!2sHuvudstagatan%201%2C%20171%2058%20Solna%2C%20Sweden!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Srpsko Udruženje Solna location"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.contact.getInTouch}</h2>

                        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-6 shadow-md">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                    {t.contact.nameLabel}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                    {t.contact.emailLabel}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                    {t.contact.messageLabel}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 flex items-center"
                            >
                                {t.contact.send}
                                <Send className="ml-2 h-5 w-5" />
                            </button>

                            {formStatus && (
                                <div className={`mt-4 p-3 rounded-md ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {formStatus.message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;