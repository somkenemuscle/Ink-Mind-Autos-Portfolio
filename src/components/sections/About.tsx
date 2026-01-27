import { Target, Heart, Zap, Users, Award, Clock } from 'lucide-react';

const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Clock, value: "24/7", label: "Support Available" },
];

const values = [
    {
        icon: Target,
        title: "Our Mission",
        description: "To create unique identities and perceptions for businesses through comprehensive printing and branding services.",
        color: "from-emerald-500 to-teal-500",
        bgColor: "bg-emerald-50",
        iconColor: "text-emerald-600"
    },
    {
        icon: Heart,
        title: "Our Values",
        description: "We believe in quality, integrity, and building lasting relationships with every client we serve.",
        color: "from-rose-500 to-pink-500",
        bgColor: "bg-rose-50",
        iconColor: "text-rose-600"
    },
    {
        icon: Zap,
        title: "Our Approach",
        description: "Combining traditional craftsmanship with modern technology to deliver exceptional results every time.",
        color: "from-amber-500 to-orange-500",
        bgColor: "bg-amber-50",
        iconColor: "text-amber-600"
    },
];

function About() {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-gray-600">Who We Are</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        About <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-500">INK MIND-AUTOS</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Your trusted partner for printing, branding, and business solutions since day one.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                    {/* Left - Image/Visual */}
                    <div className="relative">
                        <div className="relative aspect-square max-w-lg mx-auto">
                            {/* Decorative background shapes */}
                            <div className="absolute inset-0 bg-linear-to-br from-green-100 to-emerald-50 rounded-3xl transform rotate-3" />
                            <div className="absolute inset-0 bg-linear-to-br from-gray-100 to-white rounded-3xl transform -rotate-3 shadow-xl" />
                            
                            {/* Main content card */}
                            <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-full flex flex-col justify-center">
                                <div className="space-y-6">
                                    {/* Logo placeholder */}
                                    <div className="w-20 h-20 mx-auto">
                                        <img 
                                            src="/logos.png" 
                                            alt="INK MIND-AUTOS" 
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    
                                    {/* Quote */}
                                    <blockquote className="text-center">
                                        <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed">
                                            "We don't just print — we bring your <span className="text-green-600">vision</span> to life."
                                        </p>
                                    </blockquote>

                                    {/* Stats */}
                                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                                        {stats.map((stat, index) => (
                                            <div key={index} className="text-center">
                                                <stat.icon className="w-5 h-5 mx-auto mb-2 text-green-600" />
                                                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                                <div className="text-xs text-gray-500">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Text Content */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                At <span className="font-semibold text-gray-900">INK MIND-AUTOS</span>, we create a unique identity and perception for businesses through our comprehensive printing and branding services. We go beyond just logos to include mission, values, voice, and customer experience, all designed to build trust, loyalty, and differentiation from competitors.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our approach combines traditional and digital printing methods, ensuring we deliver the right solution for every project. Whether you need photo-quality prints, large-scale publications, custom merchandise, or specialty materials, we have the expertise and equipment to bring your vision to life.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Beyond printing, we offer furniture solutions and import-export services, making us your <span className="font-semibold text-gray-900">one-stop partner</span> for diverse business needs.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a 
                                href="#services" 
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                            >
                                Explore Services
                            </a>
                            <a 
                                href="#contact" 
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>

                {/* Values Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {values.map((value, index) => (
                        <div 
                            key={index}
                            className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                        >
                            {/* Gradient accent on hover */}
                            <div className={`absolute inset-0 bg-linear-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                            
                            {/* Icon */}
                            <div className={`inline-flex p-4 rounded-2xl ${value.bgColor} mb-6`}>
                                <value.icon className={`w-6 h-6 ${value.iconColor}`} />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{value.description}</p>

                            {/* Bottom accent line */}
                            <div className={`absolute bottom-0 left-8 right-8 h-1 bg-linear-to-r ${value.color} opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-500`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;
