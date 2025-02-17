import React from 'react';
import { BadgeCheckIcon, BookAIcon, BookOpen, Brain, Code, GraduationCap, Users, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8" />
            <span className="text-xl font-bold">GetAIEd</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#courses" className="hover:text-indigo-200">Courses</a>
            <a href="#features" className="hover:text-indigo-200">Features</a>
            <a href="#testimonials" className="hover:text-indigo-200">Testimonials</a>
          </div>
          <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSd1DJVEBINTJZ0LfvUgxIGGlxqTxn1hmord0zxHCXGHRjZ1uA/viewform?usp=header"
    target="_blank"
    rel="noopener noreferrer"
  >
          <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-indigo-50 transition-colors">
            Get Started
          </button>
          </a>
        </nav>
        
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Master Artificial Intelligence</h1>
            <p className="text-xl mb-8">Learn AI from industry experts. From basics to advanced concepts, transform your career with cutting-edge AI education.</p>
            <a
    href="https://www.youtube.com/@GetAIedu"
    target="_blank"
    rel="noopener noreferrer"
  >
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-50 transition-colors">
              Start Learning
            </button> </a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Our Platform</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <BookOpen className="w-8 h-8" />, title: "Comprehensive Curriculum", description: "From ML basics to advanced AI concepts" },
              { icon: <Code className="w-8 h-8" />, title: "Hands-on Projects", description: "Build real-world AI applications" },
              { icon: <GraduationCap className="w-8 h-8" />, title: "Expert Instructors", description: "Learn from industry professionals" },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-block p-4 bg-indigo-100 rounded-full text-indigo-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section id="courses" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Featured Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Machine Learning Fundamentals",
                description: "Learn the basics of ML algorithms and implementation",
                image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Deep-Learning-vs-Machine-Learning.jpg",
                level: "Beginner"
              },
              {
                title: "Deep Learning & Neural Networks",
                description: "Master neural networks and deep learning concepts",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
                level: "Intermediate"
              },
              {
                title: "Natural Language Processing",
                description: "Build AI systems that understand human language",
                image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=800&q=80",
                level: "Advanced"
              }
            ].map((course, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-sm text-indigo-600 mb-2">{course.level}</div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { icon: <Users className="w-8 h-8" />, number: "100+", label: "Students" },
              { icon: <BookOpen className="w-8 h-8" />, number: "5+", label: "Courses" },
              { icon: <Zap className="w-8 h-8" />, number: "95%", label: "Success Rate" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="inline-block p-4 bg-indigo-100 rounded-full text-indigo-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-6 h-6" />
                <span className="text-lg font-bold">GetAIEd</span>
              </div>
              <p className="text-gray-400">Empowering the next generation of AI professionals</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Courses</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Stay updated with our latest courses and news</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="bg-indigo-600 px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 GetAIEd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;