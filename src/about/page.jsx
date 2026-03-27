"use client"
const Page = () => {
  return (
    <div className="w-full min-h-screen bg-linear-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Main Heading */}
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-950 mb-6 md:mb-8">
          About Us
        </h1>

        {/* Welcome Section */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-8 md:mb-10 leading-relaxed">
          Welcome to our platform. We are dedicated to delivering exceptional
          digital solutions that empower businesses and individuals to achieve
          their goals. With a passion for innovation and excellence, our team
          combines cutting-edge technology with creative problem-solving to
          provide comprehensive services tailored to your unique needs.
        </p>

        {/* Our Mission Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl text-blue-950 mt-6 md:mt-8 mb-4">
            Our Mission
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Our mission is to bridge the gap between vision and reality, transforming
            ideas into impactful digital experiences. We believe in fostering strong
            relationships with our clients, built on transparency, reliability, and
            measurable results. Whether you're looking to establish your online
            presence, streamline your operations, or scale your business, we're
            committed to being your trusted partner every step of the way.
          </p>
        </div>

        {/* Our Values Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl text-blue-950 mt-6 md:mt-8 mb-4">
            Our Values
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            At the heart of everything we do is a commitment to quality, integrity, and
            customer success. We take pride in our ability to understand complex
            challenges and deliver innovative solutions that drive meaningful
            change. Our team of skilled professionals is motivated by the
            opportunity to create value and leave a lasting impact on every project
            we undertake.
          </p>
        </div>

        {/* Our Expertise Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl text-blue-950 mt-6 md:mt-8 mb-4">
            Our Expertise
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            With years of experience in the digital landscape, we specialize in web development,
            mobile applications, UI/UX design, and digital transformation strategies. Our diverse
            skill set allows us to tackle projects of any complexity, from startups to enterprise-level
            solutions. We stay at the forefront of technology trends and best practices to ensure
            our clients always receive cutting-edge solutions.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl text-blue-950 mt-6 md:mt-8 mb-4">
            Why Choose Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            We distinguish ourselves through our client-centric approach, proven track record of success,
            and unwavering commitment to excellence. Our team is not just skilled developers and designers—
            we are strategic partners invested in your success. We listen, understand, and deliver solutions
            that go beyond expectations, creating lasting value for your business and your users.
          </p>
        </div>

        {/* Looking Forward Section */}
        <div className="mb-8 md:mb-12">
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl text-blue-950 mt-6 md:mt-8 mb-4">
            Looking Forward
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            As we continue to grow, our commitment to innovation, quality, and customer satisfaction
            remains unwavering. We envision a future where technology seamlessly enables businesses to
            achieve their dreams, and we're excited to be part of your journey. Let's build something
            extraordinary together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
