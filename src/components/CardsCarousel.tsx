const CardsCarousel = () => {
    const cards = [
        {
            id: 1,
            title: "Academic Excellence",
            description:
                "Our rigorous curriculum prepares students for higher education and future careers.",
            icon: "",
            color: "bg-blue-500",
        },
        {
            id: 2,
            title: "Sports & Athletics",
            description:
                "Comprehensive sports programs promoting physical fitness and team spirit.",
            icon: "",
            color: "bg-green-500",
        },
        {
            id: 3,
            title: "Arts & Culture",
            description:
                "Creative arts programs fostering imagination and cultural appreciation.",
            icon: "",
            color: "bg-purple-500",
        },
        {
            id: 4,
            title: "Technology & Innovation",
            description:
                "Modern computer labs and STEM programs for 21st-century skills.",
            icon: "",
            color: "bg-orange-500",
        },
        {
            id: 5,
            title: "Community Service",
            description:
                "Programs that instill social responsibility and leadership skills.",
            icon: "",
            color: "bg-red-500",
        },
        {
            id: 6,
            title: "Global Perspective",
            description:
                "International programs and cultural exchange opportunities.",
            icon: "",
            color: "bg-indigo-500",
        },
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our Programs
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        Discover the diverse range of programs and activities
                        that make Vrinda School a comprehensive learning
                        environment for every student.
                    </p>
                </div>

                {/* 3x3 Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
                        >
                            <div
                                className={`${card.color} rounded-t-xl p-6 text-center`}
                            >
                                <div className="text-4xl mb-4">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">
                                    {card.title}
                                </h3>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CardsCarousel;
