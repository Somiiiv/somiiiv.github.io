import React, { useState } from 'react';
import { translations } from '../data/translations';
import { galleryImages } from '../data/galleryImages';

interface GalleryProps {
    language: string;
}

const Gallery: React.FC<GalleryProps> = ({ language }) => {
    const t = translations[language];
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const categories = [
        { id: 'all', label: t.gallery.viewAll },
        { id: 'performances', label: t.gallery.performances },
        { id: 'events', label: t.gallery.events },
        { id: 'costumes', label: t.gallery.costumes },
    ];

    const filteredImages = activeCategory === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    const openLightbox = (imageId: number) => {
        setSelectedImage(imageId);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    const getNextImage = () => {
        if (selectedImage === null) return;

        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
        const nextIndex = (currentIndex + 1) % filteredImages.length;
        setSelectedImage(filteredImages[nextIndex].id);
    };

    const getPrevImage = () => {
        if (selectedImage === null) return;

        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
        const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        setSelectedImage(filteredImages[prevIndex].id);
    };

    const selectedImageData = selectedImage !== null
        ? galleryImages.find(img => img.id === selectedImage)
        : null;

    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">{t.gallery.title}</h1>
                    <p className="text-xl text-gray-600">{t.gallery.subtitle}</p>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`mx-2 my-2 px-6 py-2 rounded-full transition-colors duration-200 ${
                                activeCategory === category.id
                                    ? 'bg-red-600 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredImages.map((image) => (
                        <div
                            key={image.id}
                            className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:shadow-xl hover:scale-105"
                            onClick={() => openLightbox(image.id)}
                        >
                            <div className="relative pb-[66.67%]">
                                <img
                                    src={image.url}
                                    alt={image.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                                <p className="text-gray-600 text-sm">{image.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox */}
                {selectedImage !== null && selectedImageData && (
                    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                        <button
                            className="absolute top-4 right-4 text-white text-4xl hover:text-red-400"
                            onClick={closeLightbox}
                        >
                            &times;
                        </button>

                        <button
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-red-400"
                            onClick={getPrevImage}
                        >
                            &#8249;
                        </button>

                        <div className="max-w-4xl max-h-[80vh] relative">
                            <img
                                src={selectedImageData.url}
                                alt={selectedImageData.title}
                                className="max-w-full max-h-[70vh] object-contain"
                            />
                            <div className="mt-4 text-white text-center">
                                <h3 className="text-xl font-semibold">{selectedImageData.title}</h3>
                                <p className="text-gray-300">{selectedImageData.description}</p>
                            </div>
                        </div>

                        <button
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-red-400"
                            onClick={getNextImage}
                        >
                            &#8250;
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;