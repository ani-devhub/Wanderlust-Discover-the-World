import { useState } from 'react';
import PackageCard from './PackageCard';
import himalayaImg from '../assets/images/package-himalaya.jpg';
import baliImg from '../assets/images/package-bali.avif';
import europeImg from '../assets/images/package-europe.jpg';
import egyptImg from '../assets/images/package-egypt.avif';
import amazonImg from '../assets/images/package-amazon.avif';
import santoriniImg from '../assets/images/package-santorini.jpg';

function Packages() {
    const [activeTab, setActiveTab] = useState('all');

    const packageCategories = [
        { id: 'all', name: 'All Packages' },
        { id: 'adventure', name: 'Adventure' },
        { id: 'beach', name: 'Beach & Resort' },
        { id: 'city', name: 'City Tours' },
        { id: 'cultural', name: 'Cultural' },
    ];

    const packagesData = [
        {
            id: 1,
            title: 'Himalayan Adventure',
            description: 'Trek through the stunning Himalayan mountains with expert guides.',
            price: 2499,
            duration: '12 days',
            image: himalayaImg,
            category: 'adventure',
            popular: true,
        },
        {
            id: 2,
            title: 'Bali Beach Paradise',
            description: 'Relax in luxury beachfront villas with private pools and spa treatments.',
            price: 1899,
            duration: '8 days',
            image: baliImg,
            category: 'beach',
            popular: true,
        },
        {
            id: 3,
            title: 'European Capitals',
            description: 'Experience the culture, history, and cuisine of London, Paris, and Rome.',
            price: 3299,
            duration: '14 days',
            image: europeImg,
            category: 'city',
            popular: false,
        },
        {
            id: 4,
            title: 'Egyptian Wonders',
            description: 'Discover ancient pyramids, temples, and tombs with Egyptology experts.',
            price: 1999,
            duration: '10 days',
            image: egyptImg,
            category: 'cultural',
            popular: true,
        },
        {
            id: 5,
            title: 'Amazon Rainforest Expedition',
            description: 'Explore the diverse wildlife and indigenous cultures of the Amazon.',
            price: 2699,
            duration: '9 days',
            image: amazonImg,
            category: 'adventure',
            popular: false,
        },
        {
            id: 6,
            title: 'Santorini Island Escape',
            description: 'White-washed buildings, blue domes, and stunning Aegean sunsets.',
            price: 2199,
            duration: '7 days',
            image: santoriniImg,
            category: 'beach',
            popular: true,
        },
    ];

    const filteredPackages =
        activeTab === 'all' ? packagesData : packagesData.filter((pkg) => pkg.category === activeTab);

    return (
        <div className='py-8'>
            <div className='text-center mb-12'>
                <h2 className='text-3xl md:text-4xl font-bold mb-2 text-gray-800'>Our Premium Packages</h2>
                <p className='text-gray-600 max-w-2xl mx-auto'>
                    Carefully crafted travel experiences that combine adventure, comfort, and authenticity. Explore our
                    range of packages designed for every type of traveler.
                </p>
            </div>

            {/* Category Tabs */}
            <div className='flex flex-wrap justify-center gap-2 mb-10'>
                {packageCategories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setActiveTab(category.id)}
                        className={`px-4 py-2 rounded-full transition-all duration-300 ${
                            activeTab === category.id
                                ? 'bg-emerald-600 text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Packages Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {filteredPackages.map((packageItem) => (
                    <PackageCard key={packageItem.id} packageData={packageItem} />
                ))}
            </div>

            {/* Call to action */}
            <div className='text-center mt-12'>
                <button className='bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300'>
                    View All Packages
                </button>
            </div>
        </div>
    );
}

export default Packages;
