import React from 'react';
import { ExternalLink, Book, Video, Code, Star, Users, FileText, Clock } from 'lucide-react';

// Move component declarations before they are used
const Server = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);

const Layers = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
);

const Palette = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="13.5" cy="6.5" r="0.5"></circle>
    <circle cx="17.5" cy="10.5" r="0.5"></circle>
    <circle cx="8.5" cy="7.5" r="0.5"></circle>
    <circle cx="6.5" cy="12.5" r="0.5"></circle>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
  </svg>
);

const courseCategories = [
  {
    id: 'frontend',
    title: 'Front-End Development',
    icon: <Code size={20} />,
    description: 'Learn to build beautiful, responsive user interfaces with modern frameworks.',
    courses: [
      {
        title: 'Complete HTML & CSS Bootcamp',
        provider: 'Udemy',
        level: 'Beginner',
        url: 'https://www.udemy.com',
        free: false,
        rating: 4.8,
        duration: '20 hours',
        description: 'Master the fundamentals of web development with comprehensive HTML and CSS training.',
      },
      {
        title: 'JavaScript Essentials',
        provider: 'Codecademy',
        level: 'Beginner',
        url: 'https://www.codecademy.com',
        free: true,
        rating: 4.6,
        duration: '30 hours',
        description: 'Learn modern JavaScript from the ground up, including ES6+ features and DOM manipulation.',
      },
      {
        title: 'React - The Complete Guide',
        provider: 'Udemy',
        level: 'Intermediate',
        url: 'https://www.udemy.com',
        free: false,
        rating: 4.9,
        duration: '40 hours',
        description: 'Comprehensive guide to building powerful web applications with React and Redux.',
      },
    ],
  },
  {
    id: 'backend',
    title: 'Back-End Development',
    icon: <Server size={20} />,
    description: 'Develop server-side applications, APIs, and database solutions.',
    courses: [
      {
        title: 'Node.js for Beginners',
        provider: 'freeCodeCamp',
        level: 'Beginner',
        url: 'https://www.freecodecamp.org',
        free: true,
        rating: 4.7,
        duration: '15 hours',
        description: 'Introduction to server-side JavaScript with Node.js and Express.',
      },
      {
        title: 'SQL Database Design',
        provider: 'Khan Academy',
        level: 'Beginner',
        url: 'https://www.khanacademy.org',
        free: true,
        rating: 4.5,
        duration: '10 hours',
        description: 'Learn database design principles and SQL query language fundamentals.',
      },
      {
        title: 'RESTful API Development',
        provider: 'Pluralsight',
        level: 'Intermediate',
        url: 'https://www.pluralsight.com',
        free: false,
        rating: 4.8,
        duration: '12 hours',
        description: 'Design and build scalable RESTful APIs following best practices.',
      },
    ],
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    icon: <Layers size={20} />,
    description: 'Master both front-end and back-end technologies to become a versatile developer.',
    courses: [
      {
        title: 'The Web Developer Bootcamp',
        provider: 'Udemy',
        level: 'Beginner to Intermediate',
        url: 'https://www.udemy.com',
        free: false,
        rating: 4.9,
        duration: '60 hours',
        description: 'Comprehensive course covering HTML, CSS, JavaScript, Node.js, Express, and MongoDB.',
      },
      {
        title: 'Full Stack Open',
        provider: 'University of Helsinki',
        level: 'Intermediate',
        url: 'https://fullstackopen.com',
        free: true,
        rating: 4.8,
        duration: '100+ hours',
        description: 'Modern web development with JavaScript, React, Node.js, and GraphQL.',
      },
      {
        title: "CS50's Web Programming",
        provider: 'Harvard University',
        level: 'Intermediate',
        url: 'https://cs50.harvard.edu/web',
        free: true,
        rating: 4.9,
        duration: '70 hours',
        description: 'Learn web design and development from Harvard University professors.',
      },
    ],
  },
  {
    id: 'ux',
    title: 'UX/UI Design',
    icon: <Palette size={20} />,
    description: 'Learn design principles and tools to create intuitive, user-friendly interfaces.',
    courses: [
      {
        title: 'UI/UX Design Specialization',
        provider: 'Coursera',
        level: 'Beginner',
        url: 'https://www.coursera.org',
        free: false,
        rating: 4.7,
        duration: '35 hours',
        description: 'Master the UI/UX design process from research through to final designs.',
      },
      {
        title: 'Design Principles',
        provider: 'Interaction Design Foundation',
        level: 'Beginner',
        url: 'https://www.interaction-design.org',
        free: false,
        rating: 4.6,
        duration: '15 hours',
        description: 'Learn fundamental design principles for creating effective user interfaces.',
      },
      {
        title: 'Figma UI Design',
        provider: 'YouTube',
        level: 'Beginner to Intermediate',
        url: 'https://www.youtube.com',
        free: true,
        rating: 4.5,
        duration: '10 hours',
        description: 'Practical tutorials on designing modern interfaces with Figma.',
      },
    ],
  },
];

const TrainingResources = () => {
  return (
    <div className="pt-20 pb-16">
      {/* Header */}
      <section className="bg-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Learning Resources</h1>
            <p className="text-lg md:text-xl text-blue-100">
              Discover courses, tutorials, and resources to enhance your development skills.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Why Continuous Learning Matters</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Hot Beans, we believe in the power of continuous learning. The field of development evolves rapidly, with new technologies, frameworks, and best practices emerging regularly. We encourage all our team members and prospective employees to invest in their skills through quality educational resources.
            </p>
            <p className="text-lg text-gray-700">
              Below, we've curated a selection of top-rated courses and resources for various aspects of development. These will help you build the skills we look for in our developers.
            </p>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Recommended Courses</h2>
          
          <div className="space-y-12">
            {courseCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-blue-700 text-white p-6">
                  <div className="flex items-center">
                    <div className="bg-white p-2 rounded-full text-blue-700 mr-3">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <p className="mt-2 text-blue-100">{category.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.courses.map((course, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-lg font-semibold text-gray-900">{course.title}</h4>
                          {course.free ? (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Free</span>
                          ) : (
                            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">Paid</span>
                          )}
                        </div>
                        
                        <p className="text-gray-700 mb-4 text-sm">{course.description}</p>
                        
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <Book size={14} className="mr-1" />
                          <span>Provider: {course.provider}</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <FileText size={14} className="mr-1" />
                          <span>Level: {course.level}</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <Clock size={14} className="mr-1" />
                          <span>Duration: {course.duration}</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-600 mb-4">
                          <Star size={14} className="mr-1 text-yellow-500" />
                          <span>{course.rating}/5 rating</span>
                        </div>
                        
                        <a 
                          href={course.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
                        >
                          View Course <ExternalLink size={14} className="ml-1" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Free Learning Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-700 mr-4">
                  <Book size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Documentation</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://developer.mozilla.org/en-US/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-700"
                  >
                    <span>MDN Web Docs</span>
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://reactjs.org/docs/getting-started.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-700"
                  >
                    <span>React Documentation</span>
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://nodejs.org/en/docs/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-700"
                  >
                    <span>Node.js Documentation</span>
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://tail

windcss.com/docs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-700"
                  >
                    <span>Tailwind CSS Documentation</span>
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-700 mr-4">
                  <Video size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Video Tutorials</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.youtube.com/c/TraversyMedia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-700"
                  >
                    <span>Traversy Media</span>
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.youtube.com/c/TheNetNinja" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-700"
                  >
                    <span>The Net Ninja</span>
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.youtube.com/c/Fireship" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-700"
                  >
                    <span>Fireship</span>
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.youtube.com/c/WebDevSimplified" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-700"
                  >
                    <span>Web Dev Simplified</span>
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-700 mr-4">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Interactive Learning</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.freecodecamp.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-700"
                  >
                    <span>freeCodeCamp</span>
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.codecademy.com/learn/paths/web-development" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-700"
                  >
                    <span>Codecademy</span>
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://exercism.io/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-700"
                  >
                    <span>Exercism</span>
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://scrimba.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-700"
                  >
                    <span>Scrimba</span>
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Community Resources</h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full text-blue-700 mr-4">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Developer Communities</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Joining developer communities can accelerate your learning journey through peer support, mentorship, and staying up-to-date with industry trends.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Online Forums</h4>
                  <ul className="space-y-2">
                    <li>
                      <a 
                        href="https://stackoverflow.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-blue-700"
                      >
                        <span>Stack Overflow</span>
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.reddit.com/r/webdev/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-blue-700"
                      >
                        <span>Reddit - r/webdev</span>
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://dev.to/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-blue-700"
                      >
                        <span>DEV Community</span>
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Chat Communities</h4>
                  <ul className="space-y-2">
                    <li>
                      <a 
                        href="https://discord.gg/FrontendMasters" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-blue-700"
                      >
                        <span>Frontend Masters Discord</span>
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reactiflux.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-blue-700"
                      >
                        <span>Reactiflux Discord</span>
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://slackhq.com/blog/say-hello-wave-to-slack-community" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-blue-700"
                      >
                        <span>Slack Communities</span>
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Learning Support */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              How Hot Beans Supports Your Learning
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              When you join our team, your professional development becomes our priority. Here's how we support continuous learning:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Book size={24} className="text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Learning Budget</h3>
                <p className="text-gray-700">
                  All team members receive a personal annual budget for courses, books, conferences, and other learning resources.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Users size={24} className="text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Mentorship Program</h3>
                <p className="text-gray-700">
                  Junior developers are paired with experienced mentors who provide guidance, code reviews, and career advice.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Clock size={24} className="text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Dedicated Learning Time</h3>
                <p className="text-gray-700">
                  We allocate paid time each week specifically for learning and professional development activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Once you've built your skills, apply to join our team and put your knowledge into practice on real-world projects.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/apply"
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                Apply Now
              </a>
              <a
                href="/jobs"
                className="bg-transparent hover:bg-blue-800 border-2 border-white font-semibold px-8 py-3 rounded-full transition-all"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingResources;