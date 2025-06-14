import { useState, useEffect, useRef } from 'react';

// Mock PackageCard component for demonstration
function PackageCard({ packageData, index }) {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{
                transitionDelay: `${index * 150}ms`, // Stagger animation
            }}
        >
            <div className='relative'>
                <img src={packageData.image} alt={packageData.title} className='w-full h-48 object-cover' />
                {packageData.popular && (
                    <div className='absolute top-3 right-3 bg-emerald-600 text-white px-2 py-1 rounded-full text-sm font-semibold'>
                        Popular
                    </div>
                )}
            </div>
            <div className='p-6'>
                <h3 className='text-xl font-bold mb-2 text-gray-800'>{packageData.title}</h3>
                <p className='text-gray-600 mb-4'>{packageData.description}</p>
                <div className='flex justify-between items-center mb-4'>
                    <span className='text-2xl font-bold text-emerald-600'>${packageData.price}</span>
                    <span className='text-gray-500'>{packageData.duration}</span>
                </div>
                <button className='w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300'>
                    Book Now
                </button>
            </div>
        </div>
    );
}

function Packages() {
    const [activeTab, setActiveTab] = useState('all');
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    const [areTabsVisible, setAreTabsVisible] = useState(false);
    const headerRef = useRef(null);
    const tabsRef = useRef(null);

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
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
            category: 'adventure',
            popular: true,
        },
        {
            id: 2,
            title: 'Bali Beach Paradise',
            description: 'Relax in luxury beachfront villas with private pools and spa treatments.',
            price: 1899,
            duration: '8 days',
            image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&h=300&fit=crop',
            category: 'beach',
            popular: true,
        },
        {
            id: 3,
            title: 'European Capitals',
            description: 'Experience the culture, history, and cuisine of London, Paris, and Rome.',
            price: 3299,
            duration: '14 days',
            image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop',
            category: 'city',
            popular: false,
        },
        {
            id: 4,
            title: 'Egyptian Wonders',
            description: 'Discover ancient pyramids, temples, and tombs with Egyptology experts.',
            price: 1999,
            duration: '10 days',
            image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d75d40?w=400&h=300&fit=crop',
            category: 'cultural',
            popular: true,
        },
        {
            id: 5,
            title: 'Amazon Rainforest Expedition',
            description: 'Explore the diverse wildlife and indigenous cultures of the Amazon.',
            price: 2699,
            duration: '9 days',
            image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop',
            category: 'adventure',
            popular: false,
        },
        {
            id: 6,
            title: 'Santorini Island Escape',
            description: 'White-washed buildings, blue domes, and stunning Aegean sunsets.',
            price: 2199,
            duration: '7 days',
            image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop',
            category: 'beach',
            popular: true,
        },
    ];

    const filteredPackages =
        activeTab === 'all' ? packagesData : packagesData.filter((pkg) => pkg.category === activeTab);

    // Intersection Observer for header
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsHeaderVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        return () => {
            if (headerRef.current) {
                observer.unobserve(headerRef.current);
            }
        };
    }, []);

    // Intersection Observer for tabs
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAreTabsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -30px 0px',
            }
        );

        if (tabsRef.current) {
            observer.observe(tabsRef.current);
        }

        return () => {
            if (tabsRef.current) {
                observer.unobserve(tabsRef.current);
            }
        };
    }, []);

    return (
        <div className='py-16 px-4 max-w-7xl mx-auto'>
            {/* Header Section */}
            <div
                ref={headerRef}
                className={`text-center mb-12 transition-all duration-800 transform ${
                    isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
            >
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-800'>Our Premium Packages</h2>
                <p className='text-gray-600 max-w-2xl mx-auto text-lg'>
                    Carefully crafted travel experiences that combine adventure, comfort, and authenticity. Explore our
                    range of packages designed for every type of traveler.
                </p>
            </div>

            {/* Category Tabs */}
            <div
                ref={tabsRef}
                className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-800 transform ${
                    areTabsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '200ms' }}
            >
                {packageCategories.map((category, index) => (
                    <button
                        key={category.id}
                        onClick={() => setActiveTab(category.id)}
                        className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                            activeTab === category.id
                                ? 'bg-emerald-600 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                        }`}
                        style={{
                            animationDelay: `${index * 100}ms`,
                        }}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Packages Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
                {filteredPackages.map((packageItem, index) => (
                    <PackageCard key={`${packageItem.id}-${activeTab}`} packageData={packageItem} index={index} />
                ))}
            </div>

            {/* Call to action */}
            <div className='text-center'>
                <button className='bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>
                    View All Packages
                </button>
            </div>
        </div>
    );
}

export default Packages;
