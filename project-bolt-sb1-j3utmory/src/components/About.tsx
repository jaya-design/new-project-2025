import React from 'react';
import { CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-orange-100 p-1">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-500/10 rounded-full"></div>
            </div>
            
            {/* About Content */}
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                {about.description}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Highlights</h3>
                {about.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-slate-600">{highlight}</p>
                  </div>
                ))}
              </div>
              
              <div className="pt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-colors duration-300"
                >
                  Let's Work Together
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;