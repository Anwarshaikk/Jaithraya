import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';

const CaseStudiesCTA = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "300%",
      label: "Average Revenue Growth"
    },
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients"
    },
    {
      icon: Target,
      value: "95%",
      label: "Success Rate"
    }
  ];

  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join hundreds of businesses that have transformed their marketing with our proven strategies. 
            Let's create your next success story together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            
            <Link 
              href="/case-studies"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
          
          <p className="text-blue-200 text-sm mt-6">
            Free consultation • No commitment • Results guaranteed
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesCTA;
