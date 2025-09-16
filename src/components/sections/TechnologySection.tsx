import React from 'react';
import { TECHNOLOGY_SECTION } from '@/constants';
import { cn } from '@/lib/utils';

interface TechnologySectionProps {
  className?: string;
}

const TechnologySection: React.FC<TechnologySectionProps> = ({ className }) => {
  return (
    <section className={cn('py-20 bg-white', className)}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">
            {TECHNOLOGY_SECTION.title}
          </h2>
          <p className="text-xl text-neutral-600">
            {TECHNOLOGY_SECTION.subtitle}
          </p>
        </div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {TECHNOLOGY_SECTION.categories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-gradient-to-br from-saffron-50 to-complementary-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-saffron-100"
            >
              <h3 className="text-2xl font-semibold text-neutral-800 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={tech.name}
                    className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-saffron-100"
                  >
                    <div>
                      <div className="font-semibold text-neutral-800">
                        {tech.name}
                      </div>
                      <div className="text-sm text-neutral-600">
                        {tech.description}
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-saffron-500 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-neutral-600 mb-6">
            Ready to leverage these technologies for your business?
          </p>
          <a
            href="/contact"
            className="bg-saffron-500 text-white rounded-full px-8 py-3 font-semibold hover:bg-saffron-600 transition duration-300 inline-block shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
