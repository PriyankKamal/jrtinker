import React from 'react';
import { InfoCard } from './InfoCard';
import { SectionHeader } from './SectionHeader';
import { LabStats } from './LabStats';
import { CTA } from './CTA';
import { labInfo } from '../data/labInfo';
import { Microscope, FlaskConical, Atom } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const KnowMoreSection = () => {
  return (
    <>
    <Helmet>
      <title>Know more</title>
    </Helmet>
    <div className="w-full py-16 px-4 md:px-8 lg:px-16 pt-64">
      <SectionHeader 
        title="Know More About Our Lab" 
        subtitle="Discover how our cutting-edge STEM research and facilities can support your scientific journey"
      />
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <InfoCard 
          icon={<Microscope className="w-10 h-10 text-teal-600" />}
          title="State-of-the-Art Equipment"
          content="Access to cutting-edge microscopes, spectrometers, and computational tools that enable breakthrough research."
          link="#equipment"
        />
        <InfoCard 
          icon={<FlaskConical className="w-10 h-10 text-teal-600" />}
          title="Research Opportunities"
          content="Collaborate with leading scientists on projects spanning biology, chemistry, physics, and engineering."
          link="#research"
        />
        <InfoCard 
          icon={<Atom className="w-10 h-10 text-teal-600" />}
          title="Educational Programs"
          content="Workshops, seminars, and hands-on learning experiences designed for students of all ages and skill levels."
          link="#education"
        />
      </div>

      <LabStats stats={labInfo.stats} />
      
      <div className="mt-20">
        <h3 className="text-2xl font-semibold text-gray-800 mb-8">Featured Research Areas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {labInfo.researchAreas.map((area, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <div 
                className="h-56 bg-cover bg-center" 
                style={{ backgroundImage: `url(${area.imageUrl})` }}
              />
              <div className="p-6">
                <h4 className="text-xl font-medium text-gray-800 mb-2">{area.title}</h4>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <a 
                  href={area.link} 
                  className="inline-flex items-center text-teal-600 font-medium hover:text-teal-800 transition-colors"
                >
                  Learn more 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-semibold text-gray-800 mb-8">Our Facilities</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {labInfo.facilityImages.map((img, index) => (
            <div 
              key={index} 
              className="rounded-lg overflow-hidden aspect-square group relative"
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="text-white p-4 font-medium">{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTA />
    </div>
    </>
  );
};