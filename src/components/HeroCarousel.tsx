import { useState, useEffect } from 'react'

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const slides = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg",
      title: "Welcome to Vrinda School",
      subtitle: "Nurturing Excellence, Building Future Leaders",
      description: "A place where every child's potential is discovered and nurtured through innovative education."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80",
      title: "State-of-the-Art Facilities",
      subtitle: "Modern Learning Environment",
      description: "Equipped with the latest technology and resources to provide the best learning experience."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "Excellence in Education",
      subtitle: "Comprehensive Academic Programs",
      description: "From early childhood to high school, we provide a comprehensive curriculum that prepares students for success."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80",
      title: "Sports & Athletics",
      subtitle: "Building Champions",
      description: "Our comprehensive sports programs promote physical fitness, teamwork, and competitive spirit."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Arts & Culture",
      subtitle: "Creative Expression",
      description: "Fostering creativity and cultural appreciation through our comprehensive arts programs."
    }
  ]

  const handleSlideChange = (newSlide: number) => {
    // if (isTransitioning) return
    
    // setIsTransitioning(true)
    setCurrentSlide(newSlide)
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 800) // Match the CSS transition duration
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        handleSlideChange((currentSlide + 1) % slides.length)
      }
    }, 5000)
    return () => clearInterval(timer)
  }, [currentSlide, isTransitioning])

  // Get the 3 visible slides (previous, current, next)
  const getVisibleSlides = () => {
    const prev = (currentSlide - 1 + slides.length) % slides.length
    const next = (currentSlide + 1) % slides.length
    return [
      { ...slides[prev], position: 'left' },
      { ...slides[currentSlide], position: 'center' },
      { ...slides[next], position: 'right' }
    ]
  }

  const visibleSlides = getVisibleSlides()

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Main Background Image with Fade Transition */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className={`w-full h-full object-cover transition-opacity duration-800 ease-in-out ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </div>

      {/* Content Overlay with Fade Animation */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className={`text-center text-white max-w-4xl mx-auto px-4 transition-all duration-500 ease-in-out ${
          isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {slides[currentSlide].title}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            {slides[currentSlide].subtitle}
          </h2>
          <p className="text-lg md:text-xl mb-8">
            {slides[currentSlide].description}
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105">
            Explore Further
            <svg className="inline-block w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Thumbnail Carousel at Bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-4">
          {/* Left Arrow */}
          <button
            onClick={() => handleSlideChange((currentSlide - 1 + slides.length) % slides.length)}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Three Visible Thumbnails */}
          <div className="flex space-x-4">
            {visibleSlides.map((slide) => (
              <button
                key={`${slide.id}-${slide.position}`}
                onClick={() => {
                  if (slide.position === 'left') {
                    handleSlideChange((currentSlide - 1 + slides.length) % slides.length)
                  } else if (slide.position === 'right') {
                    handleSlideChange((currentSlide + 1) % slides.length)
                  }
                }}
                className={`relative w-20 h-14 md:w-28 md:h-20 rounded-lg overflow-hidden transition-all duration-500 ease-in-out transform ${
                  slide.position === 'center'
                    ? 'ring-4 ring-green-500 scale-110 z-10'
                    : 'ring-2 ring-white ring-opacity-50 scale-90 hover:scale-95'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay for selected state */}
                {slide.position === 'center' && (
                  <div className="absolute inset-0 bg-green-500 bg-opacity-30"></div>
                )}
                {/* Subtle overlay for non-selected */}
                {slide.position !== 'center' && (
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                )}
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => handleSlideChange((currentSlide + 1) % slides.length)}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-green-500 scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroCarousel