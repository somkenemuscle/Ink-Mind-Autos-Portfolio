import services from "../../data/services";
import { Printer, Package, Sofa, Truck } from 'lucide-react';


const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Printer,
    Package,
    Sofa,
    Truck
};


function Services() {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                    <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        From traditional printing to modern digital solutions, we offer comprehensive services to meet all your needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.iconName];
                        return (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="text-green-600 mb-4">
                                    <IconComponent className="w-12 h-12" />
                                </div>
                                <h3 className="text-xl font-semibold">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services