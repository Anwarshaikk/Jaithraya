'use client';

import React from 'react';
import { ShowcaseCard } from '@/components/showcase/ShowcaseCard';
import { SHOWCASE_ITEMS, ShowcaseItem } from '@/data/showcase';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const DigitalPresenceShowcase = () => {
  const digitalPresenceItems = SHOWCASE_ITEMS.filter(
    (item) => item.category === 'Website' || item.tags.includes('booking')
  ).slice(0, 3);

  const handleQuickPreview = (item: ShowcaseItem) => {
    // In a real app, you'd open a modal here.
    // For now, we'll just log to console.
    console.log('Quick preview for:', item.title);
  };

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Work in Action"
          subtitle="Explore some of the digital presence solutions we've delivered to our clients."
        />

        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {digitalPresenceItems.map((item) => (
            <ShowcaseCard
              key={item.slug}
              item={item}
              viewMode="grid"
              onQuickPreview={() => handleQuickPreview(item)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/showcase">
              Explore More Examples <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DigitalPresenceShowcase;
