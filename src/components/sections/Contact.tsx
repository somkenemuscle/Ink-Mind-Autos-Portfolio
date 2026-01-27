import { Phone, Mail, MapPin, Send, Clock, MessageCircle, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
    {
        icon: Phone,
        title: "Call Us",
        description: "Mon-Fri from 8am to 6pm",
        details: ["+234 903 076 1768", "+234 903 076 1768"],
        color: "from-emerald-500 to-teal-500",
        bgColor: "bg-emerald-50",
        iconColor: "text-emerald-600",
        hoverBg: "group-hover:bg-emerald-500"
    },
    {
        icon: Mail,
        title: "Email Us",
        description: "We'll respond within 24 hours",
        details: ["info@inkmindautos.com"],
        color: "from-blue-500 to-indigo-500",
        bgColor: "bg-blue-50",
        iconColor: "text-blue-600",
        hoverBg: "group-hover:bg-blue-500"
    },
    {
        icon: MapPin,
        title: "Visit Us",
        description: "Come say hello at our office",
        details: ["22 Oziegbe Street", "Ilupeju, Lagos State"],
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-50",
        iconColor: "text-purple-600",
        hoverBg: "group-hover:bg-purple-500"
    },
];

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-24 bg-linear-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 left-1/3 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full mb-6">
                        <MessageCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-green-700">Get in Touch</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Let's <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-500">Connect</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Contact Info Cards - Left Side */}
                    <div className="lg:col-span-2 space-y-6">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-3xl p-6 border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                            >
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-linear-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                                
                                <div className="relative flex items-start gap-4">
                                    {/* Icon */}
                                    <div className={`
                                        shrink-0 p-4 rounded-2xl transition-all duration-300
                                        ${info.bgColor} ${info.hoverBg} group-hover:text-white
                                    `}>
                                        <info.icon className={`w-6 h-6 ${info.iconColor} group-hover:text-white transition-colors duration-300`} />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h3>
                                        <p className="text-sm text-gray-500 mb-2">{info.description}</p>
                                        <div className="space-y-1">
                                            {info.details.map((detail, idx) => (
                                                <p key={idx} className="text-gray-700 font-medium">{detail}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom accent line */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${info.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            </div>
                        ))}

                        {/* Business Hours Card */}
                        <div className="bg-gray-900 rounded-3xl p-6 text-white">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-white/10 rounded-xl">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold">Business Hours</h3>
                            </div>
                            <div className="space-y-3 text-gray-300">
                                <div className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span className="text-white font-medium">8:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span className="text-white font-medium">9:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span className="text-gray-500">Closed</span>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-sm text-gray-400">Currently Open</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - Right Side */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-200/50 border border-gray-100">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h3>
                                <p className="text-gray-600">Fill out the form below and we'll get back to you shortly.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name & Email Row */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 appearance-none cursor-pointer"
                                        required
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="printing">Printing Services</option>
                                        <option value="branding">Branding & Design</option>
                                        <option value="furniture">Furniture Solutions</option>
                                        <option value="import-export">Import & Export</option>
                                        <option value="other">Other Inquiry</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project..."
                                        rows={5}
                                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 resize-none"
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full group flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg shadow-gray-900/20 hover:shadow-xl hover:shadow-gray-900/30"
                                >
                                    <Send className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                    Send Message
                                </button>

                                {/* Privacy Note */}
                                <p className="text-center text-sm text-gray-500">
                                    By submitting this form, you agree to our{' '}
                                    <a href="#" className="text-green-600 hover:underline">Privacy Policy</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-green-50 to-emerald-50 rounded-3xl border border-green-100">
                        <div className="text-center sm:text-left">
                            <h4 className="text-lg font-bold text-gray-900">Prefer to talk?</h4>
                            <p className="text-gray-600">Schedule a call with our team</p>
                        </div>
                        <a 
                            href="tel:+2349030761768"
                            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors group"
                        >
                            <Phone className="w-4 h-4" />
                            Call Now
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
