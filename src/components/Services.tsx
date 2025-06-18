import { FaStamp, FaRoad, FaUmbrellaBeach } from 'react-icons/fa';

const services = [
    {
        icon: <FaStamp size={40} />,
        title: 'Stamped Concrete',
        description: 'Decorative patterns for concrete that enhance the look of patios, walkways, and more.',
    },
    {
        icon: <FaRoad size={40} />,
        title: 'Driveways',
        description: 'Durable and clean surfaces that boost curb appeal and stand up to heavy use.',
    },
    {
        icon: <FaUmbrellaBeach size={40} />,
        title: 'Patios',
        description: 'Outdoor living spaces designed with comfort, beauty, and strength in mind.',
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="py-16 bg-white text-center"
        >
            <h2 className="text-3xl font-bold mb-12 tracking-wide">SERVICES</h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
                {services.map((service, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <div className="mb-4 text-[#c1ad93]">{service.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600 max-w-xs">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
