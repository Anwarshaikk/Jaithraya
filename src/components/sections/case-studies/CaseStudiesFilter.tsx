'use client';

import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';

const CaseStudiesFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const industries = [
    'All Industries',
    'Retail',
    'Food & Hospitality',
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'Manufacturing'
  ];

  const results = [
    'All Results',
    'Revenue Growth',
    'Lead Generation',
    'Brand Awareness',
    'Customer Engagement',
    'Website Traffic',
    'Conversion Rate'
  ];

  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <section className="py-8 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span className="font-medium">Filters</span>
              {selectedFilters.length > 0 && (
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  {selectedFilters.length}
                </span>
              )}
            </button>
            
            {selectedFilters.length > 0 && (
              <button
                onClick={clearFilters}
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <X className="w-4 h-4" />
                <span className="text-sm">Clear all</span>
              </button>
            )}
          </div>
          
          <div className="text-sm text-gray-600">
            Showing results for: {selectedFilters.length > 0 ? selectedFilters.join(', ') : 'All case studies'}
          </div>
        </div>
        
        {isOpen && (
          <div className="mt-6 p-6 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Industry</h3>
                <div className="space-y-2">
                  {industries.map((industry) => (
                    <label key={industry} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.includes(industry)}
                        onChange={() => toggleFilter(industry)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{industry}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Results Type</h3>
                <div className="space-y-2">
                  {results.map((result) => (
                    <label key={result} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.includes(result)}
                        onChange={() => toggleFilter(result)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{result}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-6 space-x-3">
              <button
                onClick={clearFilters}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Clear
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesFilter;
