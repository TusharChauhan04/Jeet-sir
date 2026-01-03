const Benefits = () => {
    const benefits = [
        {
            icon: '⚡',
            title: 'Lightning Fast',
            description: 'Get your designs delivered within 48 hours. No more waiting weeks for results.',
        },
        {
            icon: '🎨',
            title: 'Expert Designers',
            description: 'Work with top-tier designers who have years of experience across all industries.',
        },
        {
            icon: '♾️',
            title: 'Unlimited Requests',
            description: 'Submit as many design requests as you need. No limits, no hidden fees.',
        },
        {
            icon: '🔄',
            title: 'Unlimited Revisions',
            description: 'Request as many revisions as needed until you\'re completely satisfied.',
        },
        {
            icon: '📱',
            title: 'All Design Types',
            description: 'From web design to graphics, branding to UI/UX. We cover everything.',
        },
        {
            icon: '💎',
            title: 'Premium Quality',
            description: 'Pixel-perfect designs that exceed industry standards every single time.',
        },
    ];

    return (
        <section className="section-padding" id="benefits">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16 animate-on-scroll">
                    <h2 className="mb-4">Why Choose Us</h2>
                    <p className="text-limitless-grey text-lg max-w-2xl mx-auto">
                        We make design simple, affordable, and accessible for everyone
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`card animate-on-scroll stagger-${(index % 4) + 1}`}
                        >
                            <div className="text-5xl mb-4">{benefit.icon}</div>
                            <h3 className="text-xl mb-3">{benefit.title}</h3>
                            <p className="text-limitless-grey leading-relaxed">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
