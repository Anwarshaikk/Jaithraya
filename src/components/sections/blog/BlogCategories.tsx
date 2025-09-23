import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const BlogCategories = () => {
  const categories = [
    {
      name: "Digital Marketing",
      description: "Latest trends and strategies in digital marketing",
      count: 12,
      color: "bg-teal-500",
      href: "/blog/category/digital-marketing"
    },
    {
      name: "Social Media",
      description: "Social media best practices and case studies",
      count: 8,
      color: "bg-saffron-500",
      href: "/blog/category/social-media"
    },
    {
      name: "Analytics",
      description: "Data-driven insights and analytics tips",
      count: 6,
      color: "bg-teal-600",
      href: "/blog/category/analytics"
    },
    {
      name: "Automation",
      description: "Marketing automation tools and strategies",
      count: 4,
      color: "bg-saffron-600",
      href: "/blog/category/automation"
    },
    {
      name: "Strategy",
      description: "Marketing strategy and planning guides",
      count: 10,
      color: "bg-teal-700",
      href: "/blog/category/strategy"
    },
    {
      name: "Case Studies",
      description: "Real-world examples and success stories",
      count: 7,
      color: "bg-saffron-700",
      href: "/blog/category/case-studies"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
          <p className="text-lg text-gray-600">Find articles that match your interests</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">
                    {category.name.charAt(0)}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {category.name}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {category.count} articles
                </span>
                <span className="text-blue-600 text-sm font-medium group-hover:text-blue-700">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;
