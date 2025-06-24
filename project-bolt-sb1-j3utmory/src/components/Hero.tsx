import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-6 h-full flex items-center relative z-10">
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Animated Introduction */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              Welcome to my portfolio
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-slate-300 font-light mb-8">
              {personal.title}
            </h2>
            
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
              {personal.tagline}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a
                href="#projects"
                className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg font-semibold transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a
                href={personal.github}
                className="text-slate-400 hover:text-white transition-colors duration-300 p-2 hover:bg-slate-800 rounded-lg"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href={personal.linkedin}
                className="text-slate-400 hover:text-white transition-colors duration-300 p-2 hover:bg-slate-800 rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={personal.twitter}
                className="text-slate-400 hover:text-white transition-colors duration-300 p-2 hover:bg-slate-800 rounded-lg"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="text-slate-400 hover:text-white transition-colors duration-300 p-2 hover:bg-slate-800 rounded-lg"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-slate-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;