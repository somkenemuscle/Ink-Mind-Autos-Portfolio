import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, Heart } from 'lucide-react';

const quickLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
];

const services = [
    "Inkjet Printing",
    "Laser Printing",
    "LED UV Printing",
    "3D Printing",
    "Furniture",
];

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-950 text-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
            </div>

            {/* Main Footer Content */}
            <div className="relative">
                {/* Top Section with CTA */}
                <div className="border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-linear-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-10">
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to start your project?</h3>
                                <p className="text-green-100">Let's create something amazing together.</p>
                            </div>
                            <a 
                                href="#contact"
                                className="group flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors shrink-0"
                            >
                                Get Started
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Links Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {/* Brand Column */}
                        <div className="lg:col-span-1">
                            <a href="#" className="inline-block mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl overflow-hidden">
                                        <img 
                                            src="/logos.png" 
                                            alt="INK MIND-AUTOS" 
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xl font-bold">INK MIND-AUTOS</span>
                                </div>
                            </a>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Your trusted partner for printing, branding, furniture, and import-export services. Bringing your vision to life since day one.
                            </p>
                            {/* Social Links */}
                            <div className="flex items-center gap-3">
                                <a
                                    href="https://instagram.com/inkmind.autos"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-green-600 flex items-center justify-center transition-colors duration-300"
                                    aria-label="Instagram"
                                >
                                    <SocialIcon name="instagram" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                            <ul className="space-y-4">
                                {quickLinks.map((link) => (
                                    <li key={link.href}>
                                        <a 
                                            href={link.href} 
                                            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-green-500 transition-colors" />
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
                            <ul className="space-y-4">
                                {services.map((service) => (
                                    <li key={service}>
                                        <a 
                                            href="#services" 
                                            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-green-500 transition-colors" />
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
                            <ul className="space-y-4">
                                <li>
                                    <a 
                                        href="tel:+2349030761768" 
                                        className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-green-600/20 transition-colors shrink-0">
                                            <Phone className="w-4 h-4 text-green-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Call us</p>
                                            <p>+234 903 076 1768</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="mailto:info@inkmindautos.com" 
                                        className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-green-600/20 transition-colors shrink-0">
                                            <Mail className="w-4 h-4 text-green-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Email us</p>
                                            <p>info@inkmindautos.com</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <div className="flex items-start gap-3 text-gray-400">
                                        <div className="p-2 rounded-lg bg-white/5 shrink-0">
                                            <MapPin className="w-4 h-4 text-green-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Visit us</p>
                                            <p>Oziegbe Street<br />Ilupeju, Lagos State</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <p className="text-gray-500 text-sm text-center md:text-left">
                                © {currentYear} INK MIND-AUTOS. All rights reserved.
                            </p>
                            <div className="flex items-center gap-1 text-gray-500 text-sm">
                                <span>Made with</span>
                                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                                <span>in Lagos, Nigeria</span>
                            </div>
                            <div className="flex items-center gap-6 text-sm">
                                <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
                                <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Simple social icons component
function SocialIcon({ name }: { name: string }) {
    const icons: Record<string, React.ReactElement> = {
        instagram: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
        ),
    };
    return icons[name] || null;
}

export default Footer;
