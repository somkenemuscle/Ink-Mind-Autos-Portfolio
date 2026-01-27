import services from "../../data/services";
import { Printer, Package, Sofa, Truck, ArrowUpRight, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Printer,
    Package,
    Sofa,
    Truck
};

// Define bento grid patterns for visual variety
const bentoPatterns = [
    "md:col-span-2 md:row-span-2", // Large featured card
    "md:col-span-1 md:row-span-1", // Standard card
    "md:col-span-1 md:row-span-2", // Tall card
    "md:col-span-2 md:row-span-1", // Wide card
    "md:col-span-1 md:row-span-1", // Standard card
    "md:col-span-1 md:row-span-1", // Standard card
    "md:col-span-2 md:row-span-1", // Wide card
    "md:col-span-1 md:row-span-2", // Tall card
    "md:col-span-1 md:row-span-1", // Standard card
    "md:col-span-2 md:row-span-1", // Wide card
    "md:col-span-1 md:row-span-1", // Standard card
];

// Gradient backgrounds for variety
const gradients = [
    "from-emerald-500/10 via-teal-500/5 to-transparent",
    "from-blue-500/10 via-indigo-500/5 to-transparent",
    "from-purple-500/10 via-pink-500/5 to-transparent",
    "from-amber-500/10 via-orange-500/5 to-transparent",
    "from-rose-500/10 via-red-500/5 to-transparent",
    "from-cyan-500/10 via-sky-500/5 to-transparent",
    "from-lime-500/10 via-green-500/5 to-transparent",
    "from-fuchsia-500/10 via-violet-500/5 to-transparent",
    "from-teal-500/10 via-emerald-500/5 to-transparent",
    "from-indigo-500/10 via-blue-500/5 to-transparent",
    "from-orange-500/10 via-amber-500/5 to-transparent",
];

// Icon accent colors
const accentColors = [
    "text-emerald-500 bg-emerald-500/10 group-hover:bg-emerald-500 group-hover:text-white",
    "text-blue-500 bg-blue-500/10 group-hover:bg-blue-500 group-hover:text-white",
    "text-purple-500 bg-purple-500/10 group-hover:bg-purple-500 group-hover:text-white",
    "text-amber-500 bg-amber-500/10 group-hover:bg-amber-500 group-hover:text-white",
    "text-rose-500 bg-rose-500/10 group-hover:bg-rose-500 group-hover:text-white",
    "text-cyan-500 bg-cyan-500/10 group-hover:bg-cyan-500 group-hover:text-white",
    "text-lime-500 bg-lime-500/10 group-hover:bg-lime-500 group-hover:text-white",
    "text-fuchsia-500 bg-fuchsia-500/10 group-hover:bg-fuchsia-500 group-hover:text-white",
    "text-teal-500 bg-teal-500/10 group-hover:bg-teal-500 group-hover:text-white",
    "text-indigo-500 bg-indigo-500/10 group-hover:bg-indigo-500 group-hover:text-white",
    "text-orange-500 bg-orange-500/10 group-hover:bg-orange-500 group-hover:text-white",
];

function Services() {
    return (
        <section id="services" className="py-24 bg-linear-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-green-700">What We Offer</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Our <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-500">Services</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        From traditional printing to modern digital solutions, we offer comprehensive services
                        to meet all your creative and business needs.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.iconName];
                        const pattern = bentoPatterns[index % bentoPatterns.length];
                        const gradient = gradients[index % gradients.length];
                        const accent = accentColors[index % accentColors.length];
                        const isLarge = pattern.includes("col-span-2") && pattern.includes("row-span-2");
                        const isTall = pattern.includes("row-span-2") && !pattern.includes("col-span-2");
                        const isWide = pattern.includes("col-span-2") && !pattern.includes("row-span-2");

                        return (
                            <div
                                key={index}
                                className={`
                                    group relative bg-white rounded-3xl p-6 md:p-8
                                    border border-gray-100 hover:border-gray-200
                                    shadow-sm hover:shadow-xl hover:shadow-gray-200/50
                                    transition-all duration-500 ease-out
                                    hover:-translate-y-1 cursor-pointer
                                    overflow-hidden
                                    ${pattern}
                                `}
                            >
                                {/* Gradient overlay */}
                                <div className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Decorative corner accent */}
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-linear-to-br from-gray-100/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Content */}
                                <div className={`relative z-10 h-full flex flex-col ${isLarge ? 'justify-between' : isTall ? 'justify-between' : 'justify-start'}`}>
                                    {/* Icon and Arrow */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`
                                            p-3 md:p-4 rounded-2xl transition-all duration-300
                                            ${accent}
                                            ${isLarge ? 'p-5' : ''}
                                        `}>
                                            <IconComponent className={`
                                                ${isLarge ? 'w-8 h-8 md:w-10 md:h-10' : 'w-6 h-6 md:w-7 md:h-7'}
                                            `} />
                                        </div>
                                        <div className="p-2 rounded-full bg-gray-100 text-gray-400 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0">
                                            <ArrowUpRight className="w-4 h-4" />
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className={`${isTall ? 'mt-auto' : ''}`}>
                                        <h3 className={`
                                            font-bold text-gray-900 mb-2 md:mb-3
                                            group-hover:text-gray-800 transition-colors
                                            ${isLarge ? 'text-2xl md:text-3xl' : isWide ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}
                                        `}>
                                            {service.title}
                                        </h3>
                                        <p className={`
                                            text-gray-500 leading-relaxed
                                            group-hover:text-gray-600 transition-colors
                                            ${isLarge ? 'text-base md:text-lg' : 'text-sm md:text-base'}
                                            ${!isLarge && !isTall && !isWide ? 'line-clamp-3' : ''}
                                        `}>
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Bottom accent line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Hover glow effect */}
                                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-gray-900/5 group-hover:ring-green-500/20 transition-all duration-300" />
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-4 p-2 bg-gray-100 rounded-full">
                        <span className="pl-4 text-gray-600">Need a custom solution?</span>
                        <button className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2 group">
                            Contact Us
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
