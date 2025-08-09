import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const navigationItems = [
        {
            name: "Home",
            href: "#home",
            hasDropdown: false,
        },
        {
            name: "About Us",
            href: "#about",
            hasDropdown: true,
            dropdownItems: [
                { name: "Vision & Mission", href: "#vision" },
                { name: "Principal's Message", href: "#principal" },
                { name: "School History", href: "#history" },
                { name: "Our Values", href: "#values" },
            ],
        },
        {
            name: "Academics",
            href: "#academics",
            hasDropdown: true,
            dropdownItems: [
                { name: "Primary School", href: "#primary" },
                { name: "Middle School", href: "#middle" },
                { name: "High School", href: "#high" },
                { name: "Curriculum", href: "#curriculum" },
                { name: "Examinations", href: "#exams" },
            ],
        },
        {
            name: "Admissions",
            href: "#admissions",
            hasDropdown: true,
            dropdownItems: [
                { name: "Admission Process", href: "#process" },
                { name: "Requirements", href: "#requirements" },
                { name: "Fee Structure", href: "#fees" },
                { name: "Scholarships", href: "#scholarships" },
                { name: "Apply Now", href: "#apply" },
            ],
        },
        {
            name: "Facilities",
            href: "#facilities",
            hasDropdown: true,
            dropdownItems: [
                { name: "Classrooms", href: "#classrooms" },
                { name: "Library", href: "#library" },
                { name: "Sports Complex", href: "#sports" },
                { name: "Laboratories", href: "#labs" },
                { name: "Transportation", href: "#transport" },
            ],
        },
        {
            name: "Contact",
            href: "#contact",
            hasDropdown: false,
        },
    ];

    return (
        <nav className="bg-white shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold text-blue-600">
                                Vrinda School
                            </h1>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navigationItems.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative"
                                    onMouseEnter={() =>
                                        setHoveredItem(item.name)
                                    }
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    <a
                                        href={item.href}
                                        className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                    >
                                        {item.name}
                                    </a>

                                    {/* Dropdown Menu */}
                                    {item.hasDropdown &&
                                        hoveredItem === item.name && (
                                            <div className="absolute top-full left-0 mt-1 w-48 bg-blue-800 border-t-2 border-green-500 rounded-md shadow-lg z-50">
                                                <div className="py-2">
                                                    {item.dropdownItems?.map(
                                                        (dropdownItem) => (
                                                            <a
                                                                key={
                                                                    dropdownItem.name
                                                                }
                                                                href={
                                                                    dropdownItem.href
                                                                }
                                                                className="block px-4 py-2 text-sm text-white hover:bg-blue-700 transition-colors duration-200"
                                                            >
                                                                {
                                                                    dropdownItem.name
                                                                }
                                                            </a>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                            {navigationItems.map((item) => (
                                <div key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        {item.name}
                                    </a>
                                    {/* Mobile Dropdown Items */}
                                    {item.hasDropdown && item.dropdownItems && (
                                        <div className="ml-4 mt-1 space-y-1">
                                            {item.dropdownItems.map(
                                                (dropdownItem) => (
                                                    <a
                                                        key={dropdownItem.name}
                                                        href={dropdownItem.href}
                                                        className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm"
                                                    >
                                                        {dropdownItem.name}
                                                    </a>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
