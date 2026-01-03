import { useState, useEffect } from 'react';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPagesOpen, setIsPagesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass' : 'bg-transparent'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between py-6">
                    {/* Logo */}
                    <a href="#" className="text-2xl font-bold">
                        <span className="serif-accent">Limitless</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="relative">
                            <button
                                onClick={() => setIsPagesOpen(!isPagesOpen)}
                                className="text-limitless-grey hover:text-white transition-colors duration-200 flex items-center gap-2"
                            >
                                Pages
                                <svg
                                    className={`w-4 h-4 transition-transform ${isPagesOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {isPagesOpen && (
                                <div className="absolute top-full left-0 mt-2 w-48 glass rounded-xl overflow-hidden animate-fade-in-up">
                                    <a
                                        href="#"
                                        className="block px-4 py-3 text-limitless-grey hover:text-white hover:bg-limitless-grey-dark transition-all"
                                    >
                                        Coming Soon
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-3 text-limitless-grey hover:text-white hover:bg-limitless-grey-dark transition-all"
                                    >
                                        Legal
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-3 text-limitless-grey hover:text-white hover:bg-limitless-grey-dark transition-all"
                                    >
                                        404
                                    </a>
                                </div>
                            )}
                        </div>

                        <a
                            href="#about"
                            className="text-limitless-grey hover:text-white transition-colors duration-200"
                        >
                            About
                        </a>
                        <a
                            href="#work"
                            className="text-limitless-grey hover:text-white transition-colors duration-200"
                        >
                            Work
                        </a>
                        <a
                            href="#contact"
                            className="text-limitless-grey hover:text-white transition-colors duration-200"
                        >
                            Contact
                        </a>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a href="#contact" className="btn-primary">
                            Book a Call
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden glass rounded-xl p-6 mb-4 animate-fade-in-up">
                        <div className="flex flex-col space-y-4">
                            <a href="#about" className="text-limitless-grey hover:text-white transition-colors">
                                About
                            </a>
                            <a href="#work" className="text-limitless-grey hover:text-white transition-colors">
                                Work
                            </a>
                            <a href="#contact" className="text-limitless-grey hover:text-white transition-colors">
                                Contact
                            </a>
                            <a href="#contact" className="btn-primary text-center mt-4">
                                Book a Call
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
