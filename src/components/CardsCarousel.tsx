import { useState, useEffect } from "react";

const CardsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

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
            icon: "⚽",
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

    // Check screen size on mount and resize
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    };

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

                <div className="relative">
                    {/* Mobile: Single Card Display */}
                    {isMobile ? (
                        <div className="block md:hidden">
                            <div className="max-w-sm mx-auto">
                                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div
                                        className={`${cards[currentIndex].color} rounded-t-xl p-6 text-center`}
                                    >
                                        <div className="text-4xl mb-4">
                                            {cards[currentIndex].icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">
                                            {cards[currentIndex].title}
                                        </h3>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            {cards[currentIndex].description}
                                        </p>
                                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Navigation */}
                            <div className="flex justify-between items-center mt-6">
                                <button
                                    onClick={prevSlide}
                                    className="bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg transition-colors duration-300"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                </button>

                                {/* Mobile Indicators */}
                                <div className="flex space-x-2">
                                    {cards.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() =>
                                                setCurrentIndex(index)
                                            }
                                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                                index === currentIndex
                                                    ? "bg-blue-600"
                                                    : "bg-gray-300"
                                            }`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={nextSlide}
                                    className="bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg transition-colors duration-300"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* Desktop/Tablet: Multi-Card Carousel */
                        <div className="hidden md:block">
                            <div className="overflow-hidden">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(-${
                                            currentIndex * 33.333
                                        }%)`,
                                        width: `${(cards.length / 3) * 100}%`,
                                    }}
                                >
                                    {cards.map((card) => (
                                        <div
                                            key={card.id}
                                            className="w-1/3 flex-shrink-0 px-4"
                                        >
                                            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
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
                                                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                                                        Learn More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Desktop Navigation Buttons */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg transition-colors duration-300"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg transition-colors duration-300"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>

                            {/* Desktop Indicators */}
                            <div className="flex justify-center mt-8 space-x-2">
                                {Array.from(
                                    { length: cards.length - 2 },
                                    (_, index) => (
                                        <button
                                            key={index}
                                            onClick={() =>
                                                setCurrentIndex(index)
                                            }
                                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                                index === currentIndex
                                                    ? "bg-blue-600"
                                                    : "bg-gray-300"
                                            }`}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CardsCarousel;
