import { useState, useEffect } from 'react';
import carousel1 from '../assets/images/carousel-1.avif';
import carousel2 from '../assets/images/carousel-2.avif';
import carousel3 from '../assets/images/carousel-3.avif';

function HeroCarousel() {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            image: carousel1,
            title: 'Discover New Horizons',
            subtitle: 'Unforgettable travel experiences tailored for adventurous souls',
        },
        {
            image: carousel2,
            title: 'Luxury Getaways',
            subtitle: 'Indulge in premium accommodations with breathtaking views',
        },
        {
            image: carousel3,
            title: 'Cultural Experiences',
            subtitle: 'Immerse yourself in authentic local traditions',
        },
        {
            image: carousel3,
            title: 'Cultural Experiences',
            subtitle: 'Immerse yourself in authentic local traditions',
        },
        {
            image: carousel3,
            title: 'Cultural Experiences',
            subtitle: 'Immerse yourself in authentic local traditions',
        },
    ];

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => {
        setActiveSlide(index);
    };

    const goToNextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
    };

    const goToPrevSlide = () => {
        setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className='relative h-screen w-full overflow-hidden'>
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                        activeSlide === index ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center', // Try 'center top' or '50% 30%'
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-4'>
                        <h1 className='text-4xl md:text-6xl font-bold mb-4 text-center'>{slide.title}</h1>
                        <p className='text-xl md:text-2xl max-w-2xl text-center'>{slide.subtitle}</p>
                        <button className='mt-8 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 transform hover:scale-105'>
                            Explore Our Packages
                        </button>
                    </div>
                </div>
            ))}

            {/* Navigation arrows */}
            <button
                onClick={goToPrevSlide}
                className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all'
                aria-label='Previous slide'
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    className='w-6 h-6'
                >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                </svg>
            </button>

            <button
                onClick={goToNextSlide}
                className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all'
                aria-label='Next slide'
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    className='w-6 h-6'
                >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                </svg>
            </button>

            {/* Dots indicators */}
            <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2'>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            activeSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll down indicator */}
            <div className='absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    className='w-8 h-8 text-white'
                >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
                </svg>
            </div>
        </div>
    );
}

export default HeroCarousel;
