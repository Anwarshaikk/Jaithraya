'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, ChevronDown, Check } from 'lucide-react';
import { ShowcaseCategory, Industry } from '@/data/showcase';
import logEvent from '@/lib/analytics';

interface FiltersBarProps {
  categories: ShowcaseCategory[];
  industries: Industry[];
  tags: string[];
  value: {
    search: string;
    category: ShowcaseCategory | 'all';
    industry: Industry | 'all';
    tags: string[];
    sort: string;
  };
  onChange: {
    search: (value: string) => void;
    category: (value: ShowcaseCategory | 'all') => void;
    industry: (value: Industry | 'all') => void;
    tags: (value: string[]) => void;
    sort: (value: string) => void;
  };
}

export function FiltersBar({ 
  categories, 
  industries, 
  tags, 
  value, 
  onChange 
}: FiltersBarProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const [isTagsOpen, setIsTagsOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  const categoryRef = useRef<HTMLDivElement>(null);
  const industryRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setIsCategoryOpen(false);
      }
      if (industryRef.current && !industryRef.current.contains(event.target as Node)) {
        setIsIndustryOpen(false);
      }
      if (tagsRef.current && !tagsRef.current.contains(event.target as Node)) {
        setIsTagsOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTagToggle = (tag: string) => {
    const newTags = value.tags.includes(tag)
      ? value.tags.filter(t => t !== tag)
      : [...value.tags, tag];
    onChange.tags(newTags);
    logEvent({
      name: 'showcase_filter_change',
      properties: {
        filter_type: 'tags',
        filter_value: tag
      }
    });
  };

  const clearAllFilters = () => {
    onChange.search('');
    onChange.category('all');
    onChange.industry('all');
    onChange.tags([]);
    onChange.sort('relevance');
  };

  const hasActiveFilters = value.search || value.category !== 'all' || value.industry !== 'all' || value.tags.length > 0;

  return (
    <div className="space-y-4">
      {/* Search and Clear */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search projects..."
            value={value.search}
            onChange={(e) => onChange.search(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-charcoal-200 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="flex items-center px-4 py-3 text-charcoal-600 hover:text-saffron-600 transition-colors"
          >
            <X className="w-4 h-4 mr-2" />
            Clear All
          </button>
        )}
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap gap-4">
        {/* Category Filter */}
        <div className="relative" ref={categoryRef}>
          <button
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-200 ${
              value.category !== 'all'
                ? 'border-saffron-300 bg-saffron-50 text-saffron-700'
                : 'border-charcoal-200 text-charcoal-600 hover:border-saffron-300'
            }`}
          >
            <Filter className="w-4 h-4 mr-2" />
            Category: {value.category === 'all' ? 'All' : value.category}
            <ChevronDown className="w-4 h-4 ml-2" />
          </button>

          <AnimatePresence>
            {isCategoryOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-charcoal-200 z-50"
              >
                <div className="p-2">
                  <button
                    onClick={() => {
                      onChange.category('all');
                      setIsCategoryOpen(false);
                      logEvent({
                        name: 'showcase_filter_change',
                        properties: {
                          filter_type: 'category',
                          filter_value: 'all'
                        }
                      });
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      value.category === 'all'
                        ? 'bg-saffron-100 text-saffron-700'
                        : 'text-charcoal-600 hover:bg-charcoal-50'
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        onChange.category(category);
                        setIsCategoryOpen(false);
                        logEvent({
                          name: 'showcase_filter_change',
                          properties: {
                            filter_type: 'category',
                            filter_value: category
                          }
                        });
                      }}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        value.category === category
                          ? 'bg-saffron-100 text-saffron-700'
                          : 'text-charcoal-600 hover:bg-charcoal-50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Industry Filter */}
        <div className="relative" ref={industryRef}>
          <button
            onClick={() => setIsIndustryOpen(!isIndustryOpen)}
            className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-200 ${
              value.industry !== 'all'
                ? 'border-teal-300 bg-teal-50 text-teal-700'
                : 'border-charcoal-200 text-charcoal-600 hover:border-teal-300'
            }`}
          >
            Industry: {value.industry === 'all' ? 'All' : value.industry}
            <ChevronDown className="w-4 h-4 ml-2" />
          </button>

          <AnimatePresence>
            {isIndustryOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-charcoal-200 z-50"
              >
                <div className="p-2">
                  <button
                    onClick={() => {
                      onChange.industry('all');
                      setIsIndustryOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      value.industry === 'all'
                        ? 'bg-teal-100 text-teal-700'
                        : 'text-charcoal-600 hover:bg-charcoal-50'
                    }`}
                  >
                    All Industries
                  </button>
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      onClick={() => {
                        onChange.industry(industry);
                        setIsIndustryOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        value.industry === industry
                          ? 'bg-teal-100 text-teal-700'
                          : 'text-charcoal-600 hover:bg-charcoal-50'
                      }`}
                    >
                      {industry}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tags Filter */}
        <div className="relative" ref={tagsRef}>
          <button
            onClick={() => setIsTagsOpen(!isTagsOpen)}
            className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-200 ${
              value.tags.length > 0
                ? 'border-saffron-300 bg-saffron-50 text-saffron-700'
                : 'border-charcoal-200 text-charcoal-600 hover:border-saffron-300'
            }`}
          >
            Tags: {value.tags.length > 0 ? `${value.tags.length} selected` : 'All'}
            <ChevronDown className="w-4 h-4 ml-2" />
          </button>

          <AnimatePresence>
            {isTagsOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-charcoal-200 z-50"
              >
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                    {tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => handleTagToggle(tag)}
                        className={`flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
                          value.tags.includes(tag)
                            ? 'bg-saffron-100 text-saffron-700'
                            : 'text-charcoal-600 hover:bg-charcoal-50'
                        }`}
                      >
                        <Check 
                          className={`w-4 h-4 mr-2 ${
                            value.tags.includes(tag) ? 'opacity-100' : 'opacity-0'
                          }`} 
                        />
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sort Filter */}
        <div className="relative" ref={sortRef}>
          <button
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="flex items-center px-4 py-2 rounded-lg border border-charcoal-200 text-charcoal-600 hover:border-saffron-300 transition-all duration-200"
          >
            Sort: {value.sort === 'relevance' ? 'Most Relevant' : 
                   value.sort === 'latest' ? 'Latest' :
                   value.sort === 'title' ? 'Title A-Z' : 'Category'}
            <ChevronDown className="w-4 h-4 ml-2" />
          </button>

          <AnimatePresence>
            {isSortOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-charcoal-200 z-50"
              >
                <div className="p-2">
                  {[
                    { value: 'relevance', label: 'Most Relevant' },
                    { value: 'latest', label: 'Latest' },
                    { value: 'title', label: 'Title A-Z' },
                    { value: 'category', label: 'Category' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        onChange.sort(option.value);
                        setIsSortOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        value.sort === option.value
                          ? 'bg-saffron-100 text-saffron-700'
                          : 'text-charcoal-600 hover:bg-charcoal-50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Active Tags */}
      {value.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {value.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full bg-saffron-100 text-saffron-700 text-sm"
            >
              {tag}
              <button
                onClick={() => handleTagToggle(tag)}
                className="ml-2 hover:text-saffron-800"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
