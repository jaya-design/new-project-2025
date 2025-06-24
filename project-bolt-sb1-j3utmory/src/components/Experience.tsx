import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              My journey through various roles and the impact I've made along the way.
            </p>
          </div>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={job.id}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Timeline connector */}
                {index < experience.length - 1 && (
                  <div className="absolute left-8 bottom-0 transform translate-y-8 w-0.5 h-8 bg-gradient-to-b from-blue-500 to-orange-500"></div>
                )}
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{job.title}</h3>
                    <h4 className="text-xl font-semibold text-blue-600 mb-3">{job.company}</h4>
                    <p className="text-slate-600 leading-relaxed">{job.description}</p>
                  </div>
                  
                  <div className="flex flex-col md:items-end space-y-2 text-sm text-slate-500">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-slate-800 mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="flex items-start space-x-3 text-slate-600"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;