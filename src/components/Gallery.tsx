export default function Gallery() {
    return (
        <section className="py-16 bg-[#f4f1eb] text-center">
            <h2 className="text-3xl font-bold mb-12 tracking-wide">GALLERY</h2>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch px-4 gap-0">
                {/* Left image */}
                <div className="w-full md:w-[52%]">
                    <img
                        src="/gallery-1.png"
                        loading="lazy"
                        alt="Gallery image 1"
                        className="w-full h-full object-cover"
                        style={{ height: '100%' }}
                        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Divider */}
                <div className="hidden md:block w-[3%] bg-[#e5dfd4]" />

                {/* Right image */}
                <div className="w-full md:w-[45%]">
                    <img
                        src="/gallery-2.png"
                        loading="lazy"
                        alt="Gallery image 2"
                        className="w-full h-full object-cover"
                        style={{ height: '100%' }}
                        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </div>
        </section>
    );
}
