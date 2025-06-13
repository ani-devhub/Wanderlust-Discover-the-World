import FeatureCard from './FeatureCard';
import aboutUsBg from '../assets/images/about-us.jpg';
import team1 from '../assets/images/team-1.jpg';
import team2 from '../assets/images/team-2.jpg';
import team3 from '../assets/images/team-3.jpg';
import team4 from '../assets/images/team-4.jpg';

function AboutUs() {
    const features = [
        {
            title: 'Expert Guides',
            description: 'Our team consists of certified local guides with extensive knowledge and passion.',
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
                        d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                    />
                </svg>
            ),
        },
        {
            title: 'Sustainable Tourism',
            description: 'We prioritize environmentally responsible travel that respects local communities.',
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
                        d='M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25'
                    />
                </svg>
            ),
        },
        {
            title: 'Personalized Experience',
            description: 'We craft unique itineraries based on your preferences and interests.',
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
                        d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z'
                    />
                </svg>
            ),
        },
    ];

    return (
        <div className='py-8'>
            <div className='text-center mb-12'>
                <h2 className='text-3xl md:text-4xl font-bold mb-2 text-gray-800'>About Wanderlust</h2>
                <p className='text-gray-600 max-w-2xl mx-auto'>
                    Creating unforgettable travel experiences since 2005. Our mission is to inspire people to explore,
                    experience and embrace new cultures around the world.
                </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-16'>
                <div className='relative h-96 rounded-xl overflow-hidden shadow-xl'>
                    <div
                        className='absolute inset-0 bg-cover bg-center'
                        style={{ backgroundImage: `url(${aboutUsBg})` }}
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                    <div className='absolute bottom-8 left-8 text-white'>
                        <p className='font-bold text-xl'>15+ Years of Excellence</p>
                        <p>Award-winning travel experiences</p>
                    </div>
                </div>

                <div className='space-y-6'>
                    <h3 className='text-2xl font-bold text-emerald-700'>Our Story</h3>
                    <p className='text-gray-600'>
                        Founded by a group of passionate travelers in 2005, Wanderlust has grown from a small local
                        agency to an internationally recognized travel company. Our journey began with a simple belief:
                        travel has the power to transform lives.
                    </p>
                    <p className='text-gray-600'>
                        Today, we serve thousands of travelers annually, organizing journeys to over 70 countries across
                        6 continents. Our team of 150+ travel experts works tirelessly to craft unique and authentic
                        experiences that create lifelong memories.
                    </p>
                    <div className='flex flex-wrap gap-4 mt-8'>
                        <div className='text-center'>
                            <p className='text-4xl font-bold text-emerald-600'>15+</p>
                            <p className='text-gray-600'>Years Experience</p>
                        </div>
                        <div className='text-center'>
                            <p className='text-4xl font-bold text-emerald-600'>70+</p>
                            <p className='text-gray-600'>Destinations</p>
                        </div>
                        <div className='text-center'>
                            <p className='text-4xl font-bold text-emerald-600'>25k+</p>
                            <p className='text-gray-600'>Happy Travelers</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className='mt-16'>
                <h3 className='text-2xl font-bold text-center mb-10'>Why Choose Us</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} />
                    ))}
                </div>
            </div>

            {/* Team */}
            <div className='mt-20'>
                <h3 className='text-2xl font-bold text-center mb-10'>Meet Our Leadership Team</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {[
                        { name: 'Sarah Johnson', role: 'CEO & Co-founder', image: team1 },
                        { name: 'David Chen', role: 'Operations Director', image: team2 },
                        { name: 'Maria Rodriguez', role: 'Customer Experience', image: team4 },
                        { name: 'James Wilson', role: 'Marketing Director', image: team3 },
                    ].map((member, index) => (
                        <div
                            key={index}
                            className='bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105'
                        >
                            <div className='h-64 overflow-hidden'>
                                <div
                                    className='h-full w-full bg-cover bg-center'
                                    style={{ backgroundImage: `url(${member.image})` }}
                                />
                            </div>
                            <div className='p-4'>
                                <h4 className='font-bold text-lg'>{member.name}</h4>
                                <p className='text-emerald-600'>{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
