
function HeroSection() {
    return (
        <section id="home" className="pt-20 bg-linear-to-br from-green-50 to-green-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        INK MIND-AUTOS
                    </h1>
                    <p className="text-xl md:text-2xl text-green-700 font-semibold mb-4">
                        General Printing & Delivery | Furniture | Import & Export
                    </p>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                        We're always available. Your wish is our command. At INK MIND-AUTOS, we deliver the best services.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#services" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                            Our Services
                        </a>
                        <a href="#contact" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold border-2 border-green-600 hover:bg-green-50 transition">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection