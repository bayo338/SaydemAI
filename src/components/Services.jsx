import React from 'react';
import { FaFileAlt, FaEdit, FaBook, FaSlideshare } from 'react-icons/fa';

const services = [
  {
    icon: <FaFileAlt className="text-green-600 w-8 h-8" />,
    title: 'Instant Report Generation',
    description:
      'Jumpstart your technical report with a structured draft tailored to your topic and format — instantly.',
  },
  {
    icon: <FaEdit className="text-green-600 w-8 h-8" />,
    title: 'Smart Editing with Prompts',
    description:
      'Update, expand, or refine any section of your report using simple prompts — no need to start from scratch.',
  },
  {
    icon: <FaBook className="text-green-600 w-8 h-8" />,
    title: 'Verified References & Original Content',
    description:
      'Get citations from trusted sources like journals, articles, and reports. All content is unique and built for credibility.',
  },
  {
    icon: <FaSlideshare className="text-green-600 w-8 h-8" />,
    title: 'Presentation Slides',
    description:
      'Automatically generate polished slide decks that highlight your report’s key points — ready to present.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative bg-white overflow-hidden py-24 dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-md p-4 transition-all ">

      {/* Top‑right circle */}
      {/* <div className="absolute -top-32 -right-16 w-48 h-48 bg-green-200 rounded-full opacity-30" /> */}

      {/* bottom-right circle */}
      <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-green-200 rounded-full opacity-30" />
      {/* top-left rotated square */}
      <div className="absolute -top-8 -left-8 w-40 h-40 bg-green-200 rotate-45 opacity-30" />


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto">
          Everything you need to take your technical report from idea to presentation.
        </p>

        {/* Services Grid */}
        <div className="mt-12 grid gap-10 grid-cols-1 md:grid-cols-2">
          {services.map((svc) => (
            <div key={svc.title} className="flex items-start gap-4">
              <div className="flex-shrink-0">{svc.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {svc.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{svc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
