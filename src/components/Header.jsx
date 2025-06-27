import { useState, useEffect } from 'react';

function Header({ onNavigate, activeSection }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll event to change header appearance
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'Packages', id: 'packages' },
        { name: 'About Us', id: 'about' },
        { name: 'Contact', id: 'contact' },
        // { name: 'Careers', id: 'careers' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
            }`}
        >
            <div className='container mx-auto px-4 flex justify-between items-center'>
                {/* Logo */}
                <div className='text-2xl font-bold cursor-pointer flex items-center' onClick={() => onNavigate('home')}>
                    <span
                        className={`${isScrolled ? 'text-emerald-600' : 'text-white'} transition-colors duration-300`}
                    >
                        Wanderlust
                    </span>
                </div>

                {/* Desktop Menu */}
                <nav className='hidden lg:flex space-x-8'>
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => onNavigate(link.id)}
                            className={`${
                                activeSection === link.id
                                    ? 'font-semibold border-b-2 border-emerald-500'
                                    : 'font-normal'
                            } ${
                                isScrolled ? 'text-gray-800' : 'text-white'
                            } hover:text-emerald-500 transition-colors duration-200 px-1 py-1`}
                        >
                            {link.name}
                        </button>
                    ))}
                </nav>

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className='lg:hidden focus:outline-none'
                    aria-label='Toggle menu'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M6 18L18 6M6 6l12 12'
                            />
                        ) : (
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className='lg:hidden bg-white shadow-lg'>
                    <div className='flex flex-col space-y-4 py-4 px-8'>
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => {
                                    onNavigate(link.id);
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`${
                                    activeSection === link.id
                                        ? 'font-semibold text-emerald-600'
                                        : 'font-normal text-gray-800'
                                } text-left transition-colors duration-200`}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
