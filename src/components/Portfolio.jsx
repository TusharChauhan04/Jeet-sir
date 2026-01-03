const Portfolio = () => {
    const projects = [
        {
            title: 'Brand Identity',
            category: 'Branding',
            image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80',
            color: 'from-purple-600 to-pink-600',
        },
        {
            title: 'E-commerce Platform',
            category: 'Web Design',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
            color: 'from-blue-600 to-cyan-600',
        },
        {
            title: 'Mobile App UI',
            category: 'App Design',
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
            color: 'from-orange-600 to-red-600',
        },
        {
            title: 'Dashboard Analytics',
            category: 'UI/UX',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            color: 'from-green-600 to-teal-600',
        },
    ];

    return (
        <section className="section-padding bg-limitless-grey-dark bg-opacity-30" id="work">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16 animate-on-scroll">
                    <h2 className="mb-4">Recent Work</h2>
                    <p className="text-limitless-grey text-lg max-w-2xl mx-auto">
                        Explore our latest projects and see the quality we deliver
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-3xl animate-on-scroll stagger-${(index % 3) + 1}`}
                        >
                            {/* Image Container */}
                            <div className="img-hover aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <div className="text-limitless-purple text-sm font-bold mb-2 uppercase tracking-wider">
                                        {project.category}
                                    </div>
                                    <h3 className="text-3xl mb-4">{project.title}</h3>
                                    <button className="btn-secondary">View Project</button>
                                </div>
                            </div>

                            {/* Border Glow on Hover */}
                            <div className={`absolute inset-0 border-2 border-transparent group-hover:border-limitless-purple rounded-3xl transition-all duration-500 pointer-events-none`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
