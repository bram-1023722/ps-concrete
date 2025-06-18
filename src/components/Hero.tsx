'use client';

export default function Hero() {
    const scrollToContact = () => {
        const el = document.getElementById('contact');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            className="relative w-full h-[80vh] bg-cover bg-center"
            style={{ backgroundImage: "url('/heroconcrete.jpg')" }}
        >
            <div className="absolute bottom-16 left-10 md:left-20 text-white text-left">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-wide mb-6 drop-shadow">
                    SOLID<br />
                    CRAFTSMANSHIP.<br />
                    MODERN CONCRETE.
                </h1>
                <button
                    onClick={scrollToContact}
                    className="bg-[#c1ad93] text-black font-semibold px-6 py-3 rounded-sm shadow hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                    CONTACT US
                </button>
            </div>
        </section>
    );
}
