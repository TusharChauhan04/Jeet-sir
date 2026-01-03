const Marquee = () => {
    const logos = [
        { name: 'Google', symbol: 'G' },
        { name: 'Microsoft', symbol: 'M' },
        { name: 'Apple', symbol: 'A' },
        { name: 'Amazon', symbol: 'AZ' },
        { name: 'Meta', symbol: 'F' },
        { name: 'Netflix', symbol: 'N' },
        { name: 'Tesla', symbol: 'T' },
        { name: 'Spotify', symbol: 'S' },
    ];

    // Duplicate logos for seamless loop
    const duplicatedLogos = [...logos, ...logos];

    return (
        <section className="py-16 bg-limitless-grey-dark bg-opacity-20">
            <div className="container-custom mb-8">
                <p className="text-center text-limitless-grey text-sm uppercase tracking-wider">
                    Featured On & Trusted By
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative overflow-hidden">
                <div className="flex animate-marquee hover:pause whitespace-nowrap">
                    {duplicatedLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="inline-flex items-center justify-center mx-12"
                        >
                            <div className="w-24 h-24 rounded-full border-2 border-limitless-grey border-opacity-30 flex items-center justify-center text-2xl font-bold text-limitless-grey hover:text-white hover:border-limitless-purple transition-all duration-300">
                                {logo.symbol}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Marquee;
