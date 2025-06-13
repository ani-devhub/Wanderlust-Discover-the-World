import { useState } from 'react';
import culturalImg from '../assets/images/culture.jpg';

function Career() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const jobCategories = [
        { id: 'all', name: 'All Positions' },
        { id: 'tour-guide', name: 'Tour Guides' },
        { id: 'management', name: 'Management' },
        { id: 'customer-service', name: 'Customer Service' },
        { id: 'marketing', name: 'Marketing' },
    ];

    const jobListings = [
        {
            id: 1,
            title: 'Senior Tour Guide',
            location: 'Multiple Locations',
            type: 'Full-time',
            category: 'tour-guide',
            description:
                'Lead travel groups through exciting destinations while providing historical and cultural information. Must have 3+ years of tour guide experience and fluency in at least two languages.',
            requirements: [
                "Bachelor's degree in Tourism, History, or related field",
                'Fluency in English and at least one other language',
                '3+ years of tour guide experience',
                'Excellent communication and storytelling skills',
                'First aid certification',
                'Availability to travel extensively',
            ],
            isNew: true,
        },
        {
            id: 2,
            title: 'Operations Manager',
            location: 'San Francisco, CA',
            type: 'Full-time',
            category: 'management',
            description:
                'Oversee the planning, organization, and execution of our travel packages. Responsible for coordinating with local partners, managing logistics, and ensuring exceptional customer experiences.',
            requirements: [
                "Bachelor's degree in Business, Tourism Management, or related field",
                '5+ years in travel operations management',
                'Strong organizational and leadership skills',
                'Experience with travel booking systems',
                'Problem-solving abilities in fast-paced environments',
            ],
            isNew: false,
        },
        {
            id: 3,
            title: 'Travel Consultant',
            location: 'Remote',
            type: 'Full-time / Part-time',
            category: 'customer-service',
            description:
                'Help clients plan their ideal vacations by providing expert advice on destinations, accommodations, and activities. Develop personalized itineraries and handle bookings.',
            requirements: [
                'Previous experience in travel planning or customer service',
                'Excellent communication skills',
                'Knowledge of global destinations and travel trends',
                'Ability to work with booking software',
                'Problem-solving and attention to detail',
            ],
            isNew: true,
        },
        {
            id: 4,
            title: 'Digital Marketing Specialist',
            location: 'New York, NY',
            type: 'Full-time',
            category: 'marketing',
            description:
                'Create and implement digital marketing campaigns to promote our travel packages across various channels. Analyze performance metrics and optimize strategies accordingly.',
            requirements: [
                "Bachelor's degree in Marketing, Communications, or related field",
                '3+ years of digital marketing experience',
                'Proficiency in social media marketing and email campaigns',
                'Experience with SEO/SEM and analytics tools',
                'Creative content creation abilities',
            ],
            isNew: false,
        },
        {
            id: 5,
            title: 'Adventure Tour Guide',
            location: 'Multiple Locations',
            type: 'Seasonal',
            category: 'tour-guide',
            description:
                'Lead adventurous activities such as hiking, kayaking, and wildlife expeditions. Ensure safety protocols while delivering engaging and educational experiences.',
            requirements: [
                'Proven experience leading outdoor adventure activities',
                'Relevant certifications (wilderness first responder, etc.)',
                'Knowledge of environmental conservation',
                'Physical fitness and outdoor skills',
                'Ability to manage groups in various conditions',
            ],
            isNew: false,
        },
    ];

    const filteredJobs =
        selectedCategory === 'all' ? jobListings : jobListings.filter((job) => job.category === selectedCategory);

    const benefitsList = [
        {
            icon: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
                    />
                </svg>
            ),
            title: 'Travel Opportunities',
            description:
                'Extensive travel opportunities with significant discounts on our packages for you and your family.',
        },
        {
            icon: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
                    />
                </svg>
            ),
            title: 'Professional Development',
            description: 'Ongoing training, workshops, and opportunities to enhance your skills and grow your career.',
        },
        {
            icon: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                    />
                </svg>
            ),
            title: 'Wellness Benefits',
            description: 'Comprehensive health insurance, wellness programs, and work-life balance initiatives.',
        },
        {
            icon: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
                    />
                </svg>
            ),
            title: 'Diverse & Inclusive Culture',
            description:
                'Work with passionate professionals from various cultural backgrounds in an inclusive environment.',
        },
    ];

    return (
        <div className='py-8'>
            <div className='text-center mb-12'>
                <h2 className='text-3xl md:text-4xl font-bold mb-2 text-gray-800'>Join Our Team</h2>
                <p className='text-gray-600 max-w-2xl mx-auto'>
                    Build your career with a company that values passion, creativity, and a genuine love for travel.
                    Explore our current openings and become part of our global family.
                </p>
            </div>

            {/* Culture Section */}
            <div className='bg-emerald-50 py-12 px-4 rounded-xl mb-16'>
                <div className='max-w-6xl mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <div>
                            <h3 className='text-2xl font-bold text-emerald-700 mb-4'>Our Culture</h3>
                            <p className='text-gray-600 mb-4'>
                                At Wanderlust, we believe that passionate people create extraordinary experiences. Our
                                team consists of travel enthusiasts who bring diverse perspectives and a shared
                                commitment to excellence.
                            </p>
                            <p className='text-gray-600 mb-6'>
                                We foster an environment of innovation, collaboration, and continuous growth. Our
                                employees are encouraged to share ideas, take initiative, and develop both personally
                                and professionally.
                            </p>
                            <div className='flex flex-wrap gap-3'>
                                {['Passionate', 'Innovative', 'Diverse', 'Collaborative', 'Adventurous'].map(
                                    (value) => (
                                        <span
                                            key={value}
                                            className='bg-white px-3 py-1 rounded-full text-emerald-600 text-sm font-medium shadow-sm'
                                        >
                                            {value}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                        <div className='h-64 lg:h-80 bg-gray-300 rounded-lg overflow-hidden relative'>
                            <div
                                className='absolute inset-0 bg-cover bg-center'
                                style={{ backgroundImage: `url(${culturalImg})` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className='mb-16'>
                <h3 className='text-2xl font-bold text-center mb-10'>Why Work With Us</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {benefitsList.map((benefit, index) => (
                        <div
                            key={index}
                            className='bg-white p-6 rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1'
                        >
                            <div className='text-emerald-600 mb-4'>{benefit.icon}</div>
                            <h4 className='font-bold text-lg mb-2'>{benefit.title}</h4>
                            <p className='text-gray-600'>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Job Listings Section */}
            <div>
                <h3 className='text-2xl font-bold text-center mb-8'>Current Openings</h3>

                {/* Category Filter */}
                <div className='flex flex-wrap justify-center gap-2 mb-8'>
                    {jobCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-4 py-2 rounded-full transition-all duration-300 ${
                                selectedCategory === category.id
                                    ? 'bg-emerald-600 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Job Cards */}
                {filteredJobs.length > 0 ? (
                    <div className='space-y-6'>
                        {filteredJobs.map((job) => (
                            <div
                                key={job.id}
                                className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'
                            >
                                <div className='flex flex-wrap justify-between items-start gap-4 mb-4'>
                                    <div>
                                        <div className='flex items-center gap-2'>
                                            <h4 className='text-xl font-bold text-gray-800'>{job.title}</h4>
                                            {job.isNew && (
                                                <span className='bg-emerald-100 text-emerald-700 text-xs font-semibold px-2 py-1 rounded'>
                                                    New
                                                </span>
                                            )}
                                        </div>
                                        <div className='flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-gray-600 text-sm'>
                                            <span className='flex items-center'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    strokeWidth={1.5}
                                                    stroke='currentColor'
                                                    className='w-4 h-4 mr-1'
                                                >
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                                                    />
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                                                    />
                                                </svg>
                                                {job.location}
                                            </span>
                                            <span className='flex items-center'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    strokeWidth={1.5}
                                                    stroke='currentColor'
                                                    className='w-4 h-4 mr-1'
                                                >
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                                                    />
                                                </svg>
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>
                                    <button className='bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded transition-colors duration-300'>
                                        Apply Now
                                    </button>
                                </div>

                                <p className='text-gray-600 mb-4'>{job.description}</p>

                                <div>
                                    <h5 className='font-semibold mb-2 text-gray-800'>Requirements:</h5>
                                    <ul className='list-disc list-inside text-gray-600 space-y-1'>
                                        {job.requirements.map((req, idx) => (
                                            <li key={idx}>{req}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='text-center py-10'>
                        <p className='text-gray-600'>No positions currently available in this category.</p>
                    </div>
                )}

                {/* No positions found */}
                {filteredJobs.length === 0 && (
                    <div className='text-center mt-8'>
                        <p className='text-gray-600'>Don't see the right position? Send your resume to</p>
                        <a
                            href='mailto:careers@wanderlust-travel.com'
                            className='text-emerald-600 font-medium hover:underline'
                        >
                            careers@wanderlust-travel.com
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Career;
