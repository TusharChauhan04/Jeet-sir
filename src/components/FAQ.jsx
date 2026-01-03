import { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'What is included in my subscription?',
            answer: 'Your subscription includes unlimited design requests, unlimited revisions, a dedicated designer, 48-hour delivery, and access to all design categories including web design, branding, UI/UX, and more.',
        },
        {
            question: 'How fast will I receive my designs?',
            answer: 'Most design requests are delivered within 48 hours. More complex projects may take slightly longer, but we\'ll always communicate timelines clearly upfront.',
        },
        {
            question: 'Can I request revisions?',
            answer: 'Absolutely! We offer unlimited revisions on all projects. We\'ll keep refining until you\'re 100% satisfied with the final result.',
        },
        {
            question: 'What if I only have one request?',
            answer: 'No problem! You can pause your subscription when you don\'t have active requests and resume it anytime. You only pay for the months you need us.',
        },
        {
            question: 'Who are the designers?',
            answer: 'Our team consists of senior designers with 5+ years of experience across various industries. Each designer is vetted for quality and expertise.',
        },
        {
            question: 'Can I cancel anytime?',
            answer: 'Yes! There are no long-term contracts or commitments. Cancel your subscription anytime, and you\'ll retain access until the end of your billing period.',
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section-padding" id="faq">
            <div className="container-custom max-w-4xl">
                {/* Section Header */}
                <div className="text-center mb-16 animate-on-scroll">
                    <h2 className="mb-4">Frequently Asked Questions</h2>
                    <p className="text-limitless-grey text-lg">
                        Everything you need to know about our service
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`card cursor-pointer animate-on-scroll stagger-${(index % 4) + 1}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg md:text-xl pr-8">{faq.question}</h3>
                                <div
                                    className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 border-limitless-purple text-limitless-purple transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''
                                        }`}
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                            </div>

                            {/* Answer */}
                            <div
                                className={`overflow-hidden transition-all duration-400 ${openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                                    }`}
                            >
                                <p className="text-limitless-grey leading-relaxed">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
