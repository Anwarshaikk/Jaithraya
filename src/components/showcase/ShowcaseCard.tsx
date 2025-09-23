'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Eye, ExternalLink, Calendar, Building2 } from 'lucide-react';
import { ShowcaseItem } from '@/data/showcase';
import { KPIChip } from '@/components/ui/KPIChip';
import { Button } from '@/components/ui/Button';
import logEvent from '@/lib/analytics';

interface ShowcaseCardProps {
  item: ShowcaseItem;
  viewMode: 'grid' | 'list';
  onQuickPreview: () => void;
}

export function ShowcaseCard({ item, viewMode, onQuickPreview }: ShowcaseCardProps) {
  const [imageLoading, setImageLoading] = useState(true);

  const handleViewDetails = () => {
    logEvent({
      name: 'showcase_view_details',
      properties: {
        item_slug: item.slug,
        item_category: item.category,
        item_industry: item.industry
      }
    });
    window.location.href = `/showcase/${item.slug}`;
  };

  const handleQuickPreview = (e: React.MouseEvent) => {
    e.preventDefault();
    logEvent({
      name: 'showcase_quick_preview',
      properties: {
        item_slug: item.slug,
        item_category: item.category,
        item_industry: item.industry
      }
    });
    onQuickPreview();
  };

  if (viewMode === 'list') {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        className="bg-white rounded-xl border border-charcoal-100 hover:border-teal-200 transition-all duration-300 shadow-soft hover:shadow-elevated overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative w-full md:w-80 h-48 md:h-64 flex-shrink-0">
        <Image
          src={item.media[0]?.src || '/images/placeholder-showcase.svg'}
          alt={item.media[0]?.alt || item.title}
          fill
          className={`object-cover transition-opacity duration-300 ${
            imageLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoading(false)}
          sizes="(max-width: 768px) 100vw, 320px"
          loading="lazy"
        />
            {imageLoading && (
              <div className="absolute inset-0 bg-gradient-to-r from-saffron-100 to-teal-100 animate-pulse" />
            )}
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-saffron-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {item.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-charcoal-900 mb-2">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-charcoal-600 text-sm mb-3">
                    {item.subtitle}
                  </p>
                )}
                
                {/* Industry */}
                <div className="flex items-center text-sm text-charcoal-500 mb-3">
                  <Building2 className="w-4 h-4 mr-2" />
                  {item.industry}
                </div>
              </div>

              {/* Summary */}
              <p className="text-charcoal-600 text-sm mb-4 flex-1">
                {item.summary}
              </p>

              {/* KPIs */}
              {item.kpis && item.kpis.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.kpis.slice(0, 3).map((kpi, index) => (
                    <KPIChip
                      key={index}
                      label={kpi.label}
                      value={kpi.value}
                      size="sm"
                    />
                  ))}
                  {item.kpis.length > 3 && (
                    <span className="text-xs text-charcoal-400 px-2 py-1">
                      +{item.kpis.length - 3} more
                    </span>
                  )}
                </div>
              )}

              {/* Actions */}
              <div className="flex space-x-3">
                <Button
                  onClick={handleViewDetails}
                  className="flex-1 bg-gradient-to-r from-saffron-500 to-teal-500 hover:from-saffron-600 hover:to-teal-600 text-white"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </Button>
                <Button
                  onClick={handleQuickPreview}
                  variant="outline"
                  className="flex-1 border-teal-200 text-teal-600 hover:bg-teal-50"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Quick Preview
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl border border-charcoal-100 hover:border-teal-200 transition-all duration-300 shadow-soft hover:shadow-elevated overflow-hidden group"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={item.media[0]?.src || '/images/placeholder-showcase.svg'}
          alt={item.media[0]?.alt || item.title}
          fill
          className={`object-cover transition-all duration-300 group-hover:scale-105 ${
            imageLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoading(false)}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
          loading="lazy"
        />
        {imageLoading && (
          <div className="absolute inset-0 bg-gradient-to-r from-saffron-100 to-teal-100 animate-pulse" />
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-saffron-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {item.category}
          </span>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Preview Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            onClick={handleQuickPreview}
            variant="outline"
            className="bg-white/90 backdrop-blur-sm border-white text-charcoal-900 hover:bg-white"
          >
            <Eye className="w-4 h-4 mr-2" />
            Quick Preview
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-charcoal-900 mb-2 line-clamp-2">
            {item.title}
          </h3>
          {item.subtitle && (
            <p className="text-charcoal-600 text-sm mb-3 line-clamp-2">
              {item.subtitle}
            </p>
          )}
          
          {/* Industry */}
          <div className="flex items-center text-sm text-charcoal-500 mb-3">
            <Building2 className="w-4 h-4 mr-2" />
            {item.industry}
          </div>
        </div>

        {/* Summary */}
        <p className="text-charcoal-600 text-sm mb-4 line-clamp-3">
          {item.summary}
        </p>

        {/* KPIs */}
        {item.kpis && item.kpis.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {item.kpis.slice(0, 2).map((kpi, index) => (
              <KPIChip
                key={index}
                label={kpi.label}
                value={kpi.value}
                size="sm"
              />
            ))}
            {item.kpis.length > 2 && (
              <span className="text-xs text-charcoal-400 px-2 py-1">
                +{item.kpis.length - 2} more
              </span>
            )}
          </div>
        )}

        {/* Actions */}
        <Button
          onClick={handleViewDetails}
          className="w-full bg-gradient-to-r from-saffron-500 to-teal-500 hover:from-saffron-600 hover:to-teal-600 text-white"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          View Details
        </Button>
      </div>
    </motion.div>
  );
}
