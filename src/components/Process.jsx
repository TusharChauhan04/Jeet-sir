const Process = () => {
    const steps = [
        {
            number: '01',
            title: 'Subscribe',
            description: 'Subscribe to a plan & request as many designs as you\'d like.',
            icon: '📝',
        },
        {
            number: '02',
            title: 'Receive',
            description: 'Receive your design as fast as two business days on average.',
            icon: '⚡',
        },
        {
            number: '03',
            title: 'Revise',
            description: 'We\'ll revise the designs until you\'re 100% satisfied.',
            icon: '✨',
        },
    ];

    return (
        <section className="section-padding" id="process">
            <div className="container-custom">
                {/* Section Header - EXACT from template */}
                <div className="text-center mb-16 animate-on-scroll">
                    <h2 className="font-satoshi text-section mb-4">Your designs, effortlessly.</h2>
                    <p className="text-limitless-grey text-lg max-w-2xl mx-auto font-inter">
                        Three simple steps to limitless design
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`card animate-on-scroll stagger-${index + 1}`}
                        >
                            <div className="text-6xl mb-6">{step.icon}</div>
                            <div className="text-limitless-purple text-sm font-bold mb-2">{step.number}</div>
                            <h3 className="text-2xl mb-4 font-satoshi font-bold">{step.title}</h3>
                            <p className="text-limitless-grey font-inter">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
