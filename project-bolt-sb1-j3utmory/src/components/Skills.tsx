import React from 'react';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I use to build exceptional digital experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <div
                key={skillCategory.category}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                  {skillCategory.category}
                </h3>
                
                <div className="space-y-6">
                  {skillCategory.technologies.map((tech) => (
                    <div key={tech.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-slate-700">{tech.name}</span>
                        <span className="text-sm text-slate-500">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;