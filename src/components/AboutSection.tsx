const AboutSection = () => {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Vrinda School
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
  
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  At Vrinda School, we are committed to fostering academic excellence, 
                  character development, and innovative thinking. Our mission is to 
                  prepare students for the challenges of tomorrow while instilling 
                  values that last a lifetime.
                </p>
              </div>
  
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg border-l-4 border-green-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We envision a learning community where every student discovers 
                  their unique potential, develops critical thinking skills, and 
                  becomes a responsible global citizen ready to make a positive 
                  impact on the world.
                </p>
              </div>
  
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Values
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Integrity, excellence, innovation, and compassion form the 
                  foundation of our educational philosophy. We believe in 
                  nurturing not just academic success, but also emotional 
                  intelligence and social responsibility.
                </p>
              </div>
            </div>
  
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-blue-100 p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-600">Students</div>
                  </div>
                  <div className="bg-green-100 p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                    <div className="text-gray-600">Expert Teachers</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-purple-100 p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-orange-100 p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                    <div className="text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Why Choose Vrinda School?
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Individualized learning approach
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    State-of-the-art facilities
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Comprehensive extracurricular programs
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Strong community partnerships
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default AboutSection