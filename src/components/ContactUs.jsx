import { useState } from 'react';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        error: false,
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus({
                submitted: false,
                error: true,
                message: 'Please fill in all required fields.',
            });
            return;
        }

        // In a real application, you'd send this data to a backend API
        // Here we'll simulate a successful submission
        setFormStatus({
            submitted: true,
            error: false,
            message: 'Thank you for your message! We will get back to you soon.',
        });

        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        });
    };
    const FacebookIcon = () => (
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
        </svg>
    );

    const TwitterIcon = () => (
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
        </svg>
    );

    const InstagramIcon = () => (
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.185-1.529-.737-.934-1.108-2.142-1.108-3.459s.371-2.525 1.108-3.459c.737-.933 1.888-1.529 3.185-1.529s2.448.596 3.185 1.529c.737.934 1.108 2.142 1.108 3.459s-.371 2.525-1.108 3.459c-.737.933-1.888 1.529-3.185 1.529zm7.718-10.196c-.424 0-.767-.343-.767-.767s.343-.767.767-.767.767.343.767.767-.343.767-.767.767zm-.767 2.767c0-.764-.311-1.456-.813-1.958s-1.194-.813-1.958-.813-1.456.311-1.958.813-.813 1.194-.813 1.958.311 1.456.813 1.958 1.194.813 1.958.813 1.456-.311 1.958-.813.813-1.194.813-1.958z' />
        </svg>
    );

    const YouTubeIcon = () => (
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
        </svg>
    );

    // Better Instagram icon (camera style)
    const InstagramCameraIcon = () => (
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
        </svg>
    );

    const socialPlatforms = [
        {
            name: 'facebook',
            icon: <FacebookIcon />,
            href: 'https://facebook.com/yourpage',
            color: 'hover:bg-blue-100 hover:text-blue-600',
            label: 'Follow us on Facebook',
        },
        {
            name: 'twitter',
            icon: <TwitterIcon />,
            href: 'https://twitter.com/yourhandle',
            color: 'hover:bg-sky-100 hover:text-sky-600',
            label: 'Follow us on Twitter',
        },
        {
            name: 'instagram',
            icon: <InstagramCameraIcon />,
            href: 'https://instagram.com/yourprofile',
            color: 'hover:bg-pink-100 hover:text-pink-600',
            label: 'Follow us on Instagram',
        },
        {
            name: 'youtube',
            icon: <YouTubeIcon />,
            href: 'https://youtube.com/yourchannel',
            color: 'hover:bg-red-100 hover:text-red-600',
            label: 'Subscribe to our YouTube channel',
        },
    ];
    const contactInfo = [
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
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z' />
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                    />
                </svg>
            ),
            title: 'Our Location',
            details: '123 Adventure Street, Travelville, CA 94123',
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
                        d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                    />
                </svg>
            ),
            title: 'Call Us',
            details: '+1 (555) 123-4567',
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
                        d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                    />
                </svg>
            ),
            title: 'Email Us',
            details: 'info@wanderlust-travel.com',
        },
    ];

    return (
        <div className='py-8'>
            <div className='text-center mb-12'>
                <h2 className='text-3xl md:text-4xl font-bold mb-2 text-gray-800'>Contact Us</h2>
                <p className='text-gray-600 max-w-2xl mx-auto'>
                    Have questions about our travel packages or need assistance planning your dream trip? Our team is
                    here to help make your travel experience unforgettable.
                </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                {/* Contact Form */}
                <div className='bg-white rounded-xl shadow-lg p-8'>
                    {formStatus.submitted ? (
                        <div className='bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-16 h-16 mx-auto text-green-500 mb-4'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                />
                            </svg>
                            <h4 className='text-xl font-medium mb-2'>Success!</h4>
                            <p>{formStatus.message}</p>
                            <button
                                className='mt-4 text-emerald-600 font-medium'
                                onClick={() => setFormStatus({ submitted: false, error: false, message: '' })}
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className='space-y-6'>
                            <h3 className='text-xl font-semibold mb-4'>Send Us a Message</h3>

                            {formStatus.error && (
                                <div className='bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm'>
                                    {formStatus.message}
                                </div>
                            )}

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div>
                                    <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>
                                        Full Name <span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        type='text'
                                        id='name'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
                                        Email <span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
                                        required
                                    />
                                </div>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div>
                                    <label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-1'>
                                        Phone Number
                                    </label>
                                    <input
                                        type='tel'
                                        id='phone'
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-1'>
                                        Subject
                                    </label>
                                    <select
                                        id='subject'
                                        name='subject'
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
                                    >
                                        <option value=''>Select a subject</option>
                                        <option value='General Inquiry'>General Inquiry</option>
                                        <option value='Package Information'>Package Information</option>
                                        <option value='Booking Question'>Booking Question</option>
                                        <option value='Feedback'>Feedback</option>
                                        <option value='Other'>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-1'>
                                    Message <span className='text-red-500'>*</span>
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    rows='5'
                                    value={formData.message}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
                                    required
                                ></textarea>
                            </div>

                            <button
                                type='submit'
                                className='w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300'
                            >
                                Send Message
                            </button>
                        </form>
                    )}
                </div>

                {/* Contact Info */}
                <div className='flex flex-col justify-between'>
                    <div>
                        <h3 className='text-xl font-semibold mb-6'>Get In Touch</h3>
                        <div className='space-y-6'>
                            {contactInfo.map((info, index) => (
                                <div key={index} className='flex items-start space-x-4'>
                                    <div className='bg-emerald-100 p-3 rounded-full text-emerald-600'>{info.icon}</div>
                                    <div>
                                        <h4 className='font-medium text-gray-800'>{info.title}</h4>
                                        <p className='text-gray-600'>{info.details}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Map */}
                    <div className='mt-10 h-64 bg-gray-200 rounded-xl overflow-hidden relative'>
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-gray-500'>Interactive Map Would Be Embedded Here</p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className='mt-8'>
                        <h4 className='font-medium text-gray-800 mb-4'>Follow Us</h4>
                        <div className='flex space-x-4'>
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                className='bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg'
                                aria-label='Follow us on Facebook'
                            >
                                <FacebookIcon />
                            </a>

                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                className='bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg'
                                aria-label='Follow us on Twitter'
                            >
                                <TwitterIcon />
                            </a>

                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                className='bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg'
                                aria-label='Follow us on Instagram'
                            >
                                <InstagramCameraIcon />
                            </a>

                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                className='bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg'
                                aria-label='Subscribe to our YouTube channel'
                            >
                                <YouTubeIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
