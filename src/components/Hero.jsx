import { useEffect, useState } from 'react';

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Trigger entrance animation after component mounts
        setTimeout(() => setIsLoaded(true), 100);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-radial-purple opacity-60 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-radial-blue opacity-40 pointer-events-none" />

            {/* Content */}
            <div className="container-custom relative z-10 text-center px-4">
                {/* Badge */}
                <div className={`transition-all duration-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black bg-opacity-50 border border-limitless-border mb-8">
                        <span className="w-2 h-2 rounded-full bg-limitless-green"></span>
                        <span className="text-sm text-limitless-white">Hurry, only 3 spots left.</span>
                    </div>
                </div>

                {/* Main Title - EXACT from template */}
                <div className={`transition-all duration-600 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <h1 className="font-satoshi text-hero mb-6">
                        <span className="block">The truly</span>
                        <span className="font-instrument italic text-transparent bg-clip-text bg-gradient-to-r from-limitless-purple to-purple-400">
                            Limitless
                        </span>
                        <span className="block">design subscription.</span>
                    </h1>
                </div>

                {/* Subtitle - EXACT from template */}
                <div className={`transition-all duration-600 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <p className="text-limitless-grey text-lg md:text-xl max-w-2xl mx-auto mb-12 font-inter">
                        Say goodbye to expensive freelancers, and hello to limitless, lightning fast design.
                    </p>
                </div>

                {/* CTA Buttons - EXACT from template */}
                <div className={`transition-all duration-600 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#pricing" className="btn-primary">
                            Book a call
                        </a>
                        <a href="#pricing" className="btn-secondary">
                            See plans
                        </a>
                    </div>
                </div>

                {/* Hero Image/Graphic would go here if we had it */}
                <div className={`mt-16 transition-all duration-600 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    {/* Placeholder for hero graphic - would use real image from template */}
                    <div className="max-w-4xl mx-auto">
                        <div className="aspect-video bg-gradient-to-br from-limitless-purple/20 to-transparent rounded-3xl border border-limitless-border flex items-center justify-center">
                            <p className="text-limitless-grey">Hero Graphic Here</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
