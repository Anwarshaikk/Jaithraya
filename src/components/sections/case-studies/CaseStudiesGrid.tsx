import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';

const CaseStudiesGrid = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Brand Increases Revenue by 300%",
      client: "Fashion Forward",
      industry: "Retail",
      challenge: "Low online visibility and poor conversion rates",
      solution: "Comprehensive digital marketing strategy with focus on social media and SEO",
      results: [
        "300% increase in revenue",
        "150% boost in website traffic",
        "85% improvement in conversion rate"
      ],
      image: "/images/case-studies/fashion-forward.jpg",
      slug: "fashion-forward-300-percent-revenue-increase"
    },
    {
      id: 2,
      title: "Restaurant Chain Doubles Customer Engagement",
      client: "Bella Vista Restaurants",
      industry: "Food & Hospitality",
      challenge: "Declining customer engagement and low social media presence",
      solution: "Social media strategy with user-generated content campaigns",
      results: [
        "200% increase in social media engagement",
        "150% growth in customer reviews",
        "90% improvement in brand awareness"
      ],
      image: "/images/case-studies/bella-vista.jpg",
      slug: "bella-vista-doubles-customer-engagement"
    },
    {
      id: 3,
      title: "Tech Startup Achieves 500% Lead Growth",
      client: "InnovateTech Solutions",
      industry: "Technology",
      challenge: "Limited brand recognition and low lead generation",
      solution: "Content marketing and automation strategy",
      results: [
        "500% increase in qualified leads",
        "300% growth in website traffic",
        "250% improvement in lead quality"
      ],
      image: "/images/case-studies/innovate-tech.jpg",
      slug: "innovate-tech-500-percent-lead-growth"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600">Real results from real clients</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-gray-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
                    {study.industry}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link href={`/case-studies/${study.slug}`} className="hover:text-blue-600 transition-colors">
                    {study.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  <strong>Client:</strong> {study.client}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Challenge:</h4>
                  <p className="text-gray-600 text-sm">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Solution:</h4>
                  <p className="text-gray-600 text-sm">{study.solution}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <TrendingUp className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/case-studies"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            View All Case Studies
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesGrid;
