import React from 'react';

function Footer({ onNavigate }) {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: 'Explore',
            links: [
                { name: 'Home', id: 'home' },
                { name: 'Packages', id: 'packages' },
                { name: 'Special Offers', id: 'packages' },
                { name: 'About Us', id: 'about' },
            ],
        },

        {
            title: 'Company',
            links: [
                { name: 'Our Story', id: 'about' },
                { name: 'Careers', id: 'careers' },
                { name: 'Contact Us', id: 'contact' },
                { name: 'Blog', id: null },
            ],
        },
    ];

    const socialLinks = [
        {
            name: 'Facebook',
            icon: (
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z' />
                </svg>
            ),
            url: '#',
        },
        {
            name: 'Twitter',
            icon: (
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z' />
                </svg>
            ),
            url: '#',
        },
        {
            name: 'Instagram',
            icon: (
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z' />
                    <circle cx='11.994' cy='11.979' r='3.003' />
                </svg>
            ),
            url: '#',
        },
        {
            name: 'YouTube',
            icon: (
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.44a2.503 2.503 0 0 0-1.767 1.763C2.007 8.771 2 12 2 12s.007 3.229.442 4.797a2.506 2.506 0 0 0 1.767 1.763c1.566.44 7.831.44 7.831.44s6.264 0 7.831-.44a2.506 2.506 0 0 0 1.762-1.763C22 15.229 22 12 22 12s0-3.229-.407-4.797zM9.998 15.505V8.495L16.001 12l-6.003 3.505z' />
                </svg>
            ),
            url: '#',
        },
    ];

    return (
        <footer className='bg-gray-800 text-white pt-16 pb-8'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
                    {/* Logo and About */}
                    <div className='lg:col-span-2'>
                        <div className='mb-4'>
                            <h2 className='text-2xl font-bold text-emerald-400'>Wanderlust</h2>
                            <p className='text-sm text-gray-400 mt-1'>Discover the World</p>
                        </div>
                        <p className='text-gray-300 mb-4 pr-4'>
                            Creating unforgettable travel experiences since 2005. Our mission is to inspire people to
                            explore, experience and embrace new cultures around the world.
                        </p>
                        <div className='flex space-x-4 mt-6'>
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    aria-label={link.name}
                                    className='text-gray-400 hover:text-emerald-400 transition-colors'
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    {footerLinks.map((column, index) => (
                        <div key={index}>
                            <h3 className='text-lg font-semibold mb-4 text-emerald-400'>{column.title}</h3>
                            <ul className='space-y-2'>
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        {link.id ? (
                                            <button
                                                onClick={() => onNavigate(link.id)}
                                                className='text-gray-300 hover:text-white transition-colors'
                                            >
                                                {link.name}
                                            </button>
                                        ) : (
                                            <a href='#' className='text-gray-300 hover:text-white transition-colors'>
                                                {link.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter */}
                    <div className='flex justify-end w-full'>
                        <div className='max-w-md w-full'>
                            <h3 className='text-lg font-semibold mb-4 text-emerald-400'>Subscribe</h3>
                            <p className='text-gray-300 mb-4'>
                                Subscribe to our newsletter for travel tips and exclusive offers.
                            </p>
                            <form className='flex'>
                                <input
                                    type='email'
                                    placeholder='Your email'
                                    className='px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800'
                                />
                                <button
                                    type='submit'
                                    className='bg-emerald-600 hover:bg-emerald-700 transition-colors px-4 py-2 rounded-r-md'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={1.5}
                                        stroke='currentColor'
                                        className='w-5 h-5'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
                                        />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className='border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center'>
                    <p className='text-gray-400 text-sm'>
                        &copy; {currentYear} Wanderlust Travel. All rights reserved.
                    </p>
                    <div className='flex space-x-4 mt-4 md:mt-0 text-sm text-gray-400'>
                        <a href='#' className='hover:text-white transition-colors'>
                            Privacy Policy
                        </a>
                        <a href='#' className='hover:text-white transition-colors'>
                            Terms of Service
                        </a>
                        <a href='#' className='hover:text-white transition-colors'>
                            Sitemap
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
