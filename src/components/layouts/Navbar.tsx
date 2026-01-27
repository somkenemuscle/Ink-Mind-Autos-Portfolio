import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Main Navbar */}
            <nav className={`
                fixed top-0 left-0 right-0 z-50 transition-all duration-500
                ${scrolled ? 'py-2' : 'py-4'}
            `}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`
                        flex justify-between items-center
                        ${scrolled 
                            ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-gray-200/50 rounded-2xl px-6 py-3' 
                            : 'bg-transparent px-2 py-2'
                        }
                        transition-all duration-500
                    `}>
                        {/* Logo */}
                        <a href="#" className="shrink-0 group">
                            <div className="flex items-center gap-3">
                                <div className={`
                                    relative overflow-hidden rounded-xl transition-all duration-300
                                    ${scrolled ? 'w-10 h-10' : 'w-12 h-12'}
                                `}>
                                    <img 
                                        src="/logos.png" 
                                        alt="INK MIND-AUTOS" 
                                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        </a>

                        {/* Desktop Navigation - Floating Pill */}
                        <div className="hidden md:flex items-center">
                            <div className={`
                                flex items-center gap-1 p-1.5 rounded-full transition-all duration-300
                                ${scrolled 
                                    ? 'bg-gray-100' 
                                    : 'bg-white/80 backdrop-blur-xl shadow-lg shadow-gray-200/30'
                                }
                            `}>
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="relative px-5 py-2.5 rounded-full text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button - Desktop */}
                        <div className="hidden md:flex items-center gap-4">
                            <a 
                                href="#contact"
                                className={`
                                    group flex items-center gap-2 px-5 py-2.5 rounded-full
                                    font-medium text-sm transition-all duration-300
                                    ${scrolled 
                                        ? 'bg-green-600 text-white hover:bg-green-700' 
                                        : 'bg-gray-900 text-white hover:bg-gray-800'
                                    }
                                `}
                            >
                                Get in Touch
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className={`
                                md:hidden p-2.5 rounded-xl transition-all duration-300
                                ${scrolled 
                                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                                    : 'bg-white/80 backdrop-blur-xl text-gray-700 hover:bg-white shadow-lg shadow-gray-200/30'
                                }
                            `}
                        >
                            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`
                fixed inset-0 z-40 md:hidden transition-all duration-500
                ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
            `}>
                {/* Backdrop */}
                <div 
                    className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                    onClick={() => setIsMenuOpen(false)}
                />
                
                {/* Menu Panel */}
                <div className={`
                    absolute top-24 left-4 right-4 bg-white rounded-3xl shadow-2xl
                    transform transition-all duration-500 ease-out
                    ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}
                `}>
                    <div className="p-6">
                        {/* Mobile Nav Links */}
                        <div className="space-y-2">
                            {navLinks.map((link, index) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 text-gray-700 hover:bg-gray-100 transition-all duration-300"
                                    style={{ 
                                        transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' 
                                    }}
                                >
                                    <span className="font-medium">{link.label}</span>
                                    <ArrowUpRight className="w-4 h-4 text-gray-400" />
                                </a>
                            ))}
                        </div>

                        {/* Mobile CTA */}
                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <a 
                                href="#contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center justify-center gap-2 w-full p-4 bg-green-600 text-white rounded-2xl font-medium hover:bg-green-700 transition-colors"
                            >
                                Get in Touch
                                <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
