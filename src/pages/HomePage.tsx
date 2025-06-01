import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Users, Award, Briefcase, Heart } from 'lucide-react';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Launch Your Career at Hot Beans
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Join our talented team of developers and build the digital experiences of tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/jobs"
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                View Open Positions
              </Link>
              <Link
                to="/apply"
                className="bg-transparent hover:bg-blue-800 border-2 border-white font-semibold px-8 py-3 rounded-full transition-all"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Company Profile Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              About Hot Beans
            </h2>
            <p className="text-lg text-gray-600">
              We're a forward-thinking company specializing in creating innovative digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Hot Beans team collaboration"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Our Mission</h3>
                <p className="text-gray-700">
                  At Hot Beans, we're on a mission to create exceptional digital experiences that transform businesses and delight users. We believe in nurturing talent and fostering a culture of continuous learning and innovation.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-blue-100 p-2 rounded-full">
                      <Code size={20} className="text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Technical Excellence</h4>
                      <p className="text-gray-700">We take pride in writing clean, efficient, and maintainable code.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-blue-100 p-2 rounded-full">
                      <Users size={20} className="text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Collaborative Spirit</h4>
                      <p className="text-gray-700">We believe great ideas emerge when we work together as a team.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-blue-100 p-2 rounded-full">
                      <Award size={20} className="text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Continuous Learning</h4>
                      <p className="text-gray-700">We invest in growth and stay at the forefront of technology.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-blue-100 p-2 rounded-full">
                      <Heart size={20} className="text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">User-Centered Approach</h4>
                      <p className="text-gray-700">We create solutions with the end user always in mind.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Join Hot Beans?
            </h2>
            <p className="text-lg text-gray-600">
              We offer more than just a job - we provide an environment where you can thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Briefcase size={24} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Career Growth</h3>
              <p className="text-gray-700">
                Clear career progression paths with regular performance reviews and opportunities for advancement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Award size={24} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Continuous Learning</h3>
              <p className="text-gray-700">
                Access to training resources, conferences, workshops, and mentorship from senior developers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Users size={24} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Collaborative Culture</h3>
              <p className="text-gray-700">
                Work in a supportive environment with team building events, hackathons, and social activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Opportunities</h2>
            <Link to="/jobs" className="text-blue-700 hover:text-blue-800 font-medium flex items-center">
              View All Positions <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Junior Front-End Developer</h3>
                  <p className="text-gray-600">Full-time • Remote / London</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">New</span>
              </div>
              <p className="text-gray-700 mb-6">
                Join our team creating beautiful, responsive user interfaces using modern frameworks and libraries.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">HTML/CSS</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">JavaScript</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">React</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">Tailwind CSS</span>
              </div>
              <Link 
                to="/jobs" 
                className="text-blue-700 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Junior Back-End Developer</h3>
                  <p className="text-gray-600">Full-time • London</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Help build robust server-side applications, APIs, and database solutions for our clients.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">Node.js</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">Express</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">SQL</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">MongoDB</span>
              </div>
              <Link 
                to="/jobs" 
                className="text-blue-700 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              Hear what our developers have to say about working at Hot Beans.
            </p>
          </div>
          
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our team and be part of creating exceptional experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/apply"
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                Apply Now
              </Link>
              <Link
                to="/resources"
                className="bg-transparent hover:bg-blue-800 border-2 border-white font-semibold px-8 py-3 rounded-full transition-all"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;