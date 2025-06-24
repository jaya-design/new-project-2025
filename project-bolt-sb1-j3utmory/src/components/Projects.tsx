import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
  const { projects } = portfolioData;
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects that demonstrate my skills and passion for development.
            </p>
          </div>
          
          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-1 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      <Star size={14} fill="currentColor" />
                      <span>Featured</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 px-4 py-2 border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-800 rounded-lg font-semibold transition-colors duration-300"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Other Projects</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-slate-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h4>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-slate-200 text-slate-600 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-slate-500 text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-3">
                      <a
                        href={project.liveUrl}
                        className="text-blue-500 hover:text-blue-600 font-semibold text-sm transition-colors duration-300"
                      >
                        View Live
                      </a>
                      <a
                        href={project.githubUrl}
                        className="text-slate-500 hover:text-slate-600 font-semibold text-sm transition-colors duration-300"
                      >
                        Source
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;