
function Footer() {

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-green-500 mb-4">INK MIND-AUTOS</h3>
                        <p className="text-gray-400">
                            Your trusted partner for printing, branding, furniture, and import-export services.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-gray-400 hover:text-green-500 transition">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-green-500 transition">About</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-green-500 transition">Services</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-green-500 transition">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                        <p className="text-gray-400 mb-2">Phone: +234 903 076 1768 </p>
                        <p className="text-gray-400 mb-2">Phone: +234 903 076 1768  </p>
                        <p className="text-gray-400 mb-2">Email: info@inkmindautos.com</p>
                        <p className="text-gray-400">22 Oziegbe Street Illupeju, Lagos State</p>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2026 INK MIND-AUTOS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer