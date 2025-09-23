'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, SortAsc, Grid, List } from 'lucide-react';
import { SHOWCASE_ITEMS, allCategories, allIndustries, allTags, type ShowcaseItem, type ShowcaseCategory, type Industry } from '@/data/showcase';
import { ShowcaseCard } from '@/components/showcase/ShowcaseCard';
import { FiltersBar } from '@/components/showcase/FiltersBar';
import { Lightbox } from '@/components/showcase/Lightbox';
import StickyCTA from '@/components/StickyCTA';

type SortOption = 'relevance' | 'latest' | 'title' | 'category';

export default function ShowcasePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ShowcaseCategory | 'all'>('all');
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | 'all'>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [lightboxItem, setLightboxItem] = useState<ShowcaseItem | null>(null);

  // Filter and search items
  const filteredItems = useMemo(() => {
    let items = SHOWCASE_ITEMS.filter(item => item.published);

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      items = items.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.highlights.some(highlight => highlight.toLowerCase().includes(query)) ||
        item.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      items = items.filter(item => item.category === selectedCategory);
    }

    // Industry filter
    if (selectedIndustry !== 'all') {
      items = items.filter(item => item.industry === selectedIndustry);
    }

    // Tags filter
    if (selectedTags.length > 0) {
      items = items.filter(item => 
        selectedTags.some(tag => item.tags.includes(tag))
      );
    }

    // Sort items
    switch (sortBy) {
      case 'latest':
        // Items are already in order of creation
        break;
      case 'title':
        items.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'category':
        items.sort((a, b) => a.category.localeCompare(b.category));
        break;
      case 'relevance':
      default:
        // Keep original order for relevance
        break;
    }

    return items;
  }, [searchQuery, selectedCategory, selectedIndustry, selectedTags, sortBy]);

  // Update URL params
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (selectedCategory !== 'all') params.set('category', selectedCategory);
    if (selectedIndustry !== 'all') params.set('industry', selectedIndustry);
    if (selectedTags.length > 0) params.set('tags', selectedTags.join(','));
    if (sortBy !== 'relevance') params.set('sort', sortBy);

    const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
    window.history.replaceState({}, '', newUrl);
  }, [searchQuery, selectedCategory, selectedIndustry, selectedTags, sortBy]);

  // Load URL params on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearchQuery(params.get('q') || '');
    setSelectedCategory((params.get('category') as ShowcaseCategory) || 'all');
    setSelectedIndustry((params.get('industry') as Industry) || 'all');
    setSelectedTags(params.get('tags')?.split(',').filter(Boolean) || []);
    setSortBy((params.get('sort') as SortOption) || 'relevance');
  }, []);

  const handleQuickPreview = (item: ShowcaseItem) => {
    setLightboxItem(item);
  };

  const handleCloseLightbox = () => {
    setLightboxItem(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-saffron-100/30 to-transparent to-70%"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-saffron-200/40 to-transparent rounded-full -translate-y-48 translate-x-48 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-teal-200/40 to-transparent rounded-full translate-y-40 -translate-x-40 blur-2xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-charcoal-900 via-saffron-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Showcase & Live Examples
            </h1>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto mb-8">
              Explore real-world solutions we've built for businesses across industries. 
              See how our technology transforms operations and drives growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Bar */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-saffron-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <FiltersBar
            categories={allCategories}
            industries={allIndustries}
            tags={allTags}
            value={{
              search: searchQuery,
              category: selectedCategory,
              industry: selectedIndustry,
              tags: selectedTags,
              sort: sortBy
            }}
            onChange={{
              search: setSearchQuery,
              category: setSelectedCategory,
              industry: setSelectedIndustry,
              tags: setSelectedTags,
              sort: (value: string) => setSortBy(value as SortOption)
            }}
          />
        </div>
      </div>

      {/* Results Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <h2 className="text-2xl font-bold text-charcoal-900">
                {filteredItems.length} {filteredItems.length === 1 ? 'Project' : 'Projects'} Found
              </h2>
              {searchQuery && (
                <span className="text-saffron-600 font-medium">
                  for "{searchQuery}"
                </span>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-saffron-100 text-saffron-600' 
                    : 'text-charcoal-400 hover:text-charcoal-600'
                }`}
                aria-label="Grid view"
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-saffron-100 text-saffron-600' 
                    : 'text-charcoal-400 hover:text-charcoal-600'
                }`}
                aria-label="List view"
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Results Grid */}
          {filteredItems.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6'
                  : 'space-y-6'
              }
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ShowcaseCard
                    item={item}
                    viewMode={viewMode}
                    onQuickPreview={() => handleQuickPreview(item)}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gradient-to-r from-saffron-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-saffron-500" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                  No projects found
                </h3>
                <p className="text-charcoal-600 mb-8">
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedIndustry('all');
                    setSelectedTags([]);
                    setSortBy('relevance');
                  }}
                  className="bg-gradient-to-r from-saffron-500 to-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-saffron-600 hover:to-teal-600 transition-all duration-300"
                >
                  Clear All Filters
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && (
        <Lightbox
          item={lightboxItem}
          onClose={handleCloseLightbox}
        />
      )}

      {/* Sticky CTA */}
      <StickyCTA />
    </div>
  );
}
