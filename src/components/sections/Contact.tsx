import { Phone, Mail, MapPin } from 'lucide-react';

function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
                    <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600">Get in touch with us today. We're here to help!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="text-center p-6 bg-green-50 rounded-lg">
                        <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                        <p className="text-gray-700">+234 903 076 1768</p>
                        <p className="text-gray-700">+234 903 076 1768</p>

                    </div>
                    <div className="text-center p-6 bg-green-50 rounded-lg">
                        <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                        <p className="text-gray-700">info@inkmindautos.com</p>
                    </div>
                    <div className="text-center p-6 bg-green-50 rounded-lg">
                        <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                        <p className="text-gray-700">22 Oziegbe Street Illupeju, Lagos State</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact