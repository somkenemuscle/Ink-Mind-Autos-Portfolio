import { Menu, X } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="shrink-0">
                        <h1 className="text-2xl font-bold text-green-700">INK MIND-AUTOS</h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-gray-700 hover:text-green-600 transition">Home</a>
                        <a href="#about" className="text-gray-700 hover:text-green-600 transition">About</a>
                        <a href="#services" className="text-gray-700 hover:text-green-600 transition">Services</a>
                        <a href="#contact" className="text-gray-700 hover:text-green-600 transition">Contact</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded">Home</a>
                        <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded">About</a>
                        <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded">Services</a>
                        <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded">Contact</a>
                    </div>
                </div>
            )}
        </nav>

    )
}

export default Navbar