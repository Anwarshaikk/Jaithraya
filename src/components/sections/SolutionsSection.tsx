import React from 'react';
import Link from 'next/link';
import { SOLUTIONS_SECTION } from '@/constants';
import { cn } from '@/lib/utils';

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-neutral-800 mb-8">
          {SOLUTIONS_SECTION.title}
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {SOLUTIONS_SECTION.solutionCards.map((card, index) => (
            <Link href={card.href} key={index} className="w-full md:w-1/3 p-4 group">
              <div className="bg-gradient-to-br from-saffron-50 to-complementary-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-saffron-100 group-hover:border-accent-300">
                <h3 className="text-2xl font-bold text-charcoal-800 mb-4 group-hover:text-accent-600 transition-colors duration-300">{card.title}</h3>
                <p className="text-charcoal-600 group-hover:text-charcoal-700 transition-colors duration-300">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
