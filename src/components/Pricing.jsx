const Pricing = () => {
    const features = [
        'Unlimited design requests',
        'Average 48 hours delivery',
        'Unlimited revisions',
        'Unlimited brands',
        'Invite unlimited users',
        'Pause or cancel anytime',
    ];

    return (
        <section className="section-padding bg-limitless-bg-secondary" id="pricing">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16 animate-on-scroll">
                    <h2 className="font-satoshi text-section mb-4">Simple, transparent pricing</h2>
                    <p className="text-limitless-grey text-lg max-w-2xl mx-auto font-inter">
                        One plan, unlimited possibilities
                    </p>
                </div>

                {/* Pricing Card - EXACT from template */}
                <div className="max-w-lg mx-auto">
                    <div className="card animate-on-scroll text-center">
                        <div className="mb-8">
                            <div className="text-6xl font-satoshi font-bold mb-2">$2,989</div>
                            <div className="text-limitless-grey text-lg font-inter">/month</div>
                        </div>

                        {/* Features List */}
                        <ul className="space-y-4 mb-8 text-left">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-limitless-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-limitless-white font-inter">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <a href="#contact" className="btn-primary w-full block text-center">
                            Get started
                        </a>

                        {/* Add-on */}
                        <div className="mt-6 p-4 bg-limitless-black rounded-xl border border-limitless-border">
                            <div className="flex items-center justify-between">
                                <span className="text-limitless-white font-inter">Framer Development</span>
                                <span className="text-limitless-green font-satoshi font-bold">+ $500</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
