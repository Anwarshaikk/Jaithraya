import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Calendar, Building2, Tag, CheckCircle } from 'lucide-react';
import { getItemBySlug, getRelatedItems, SHOWCASE_ITEMS } from '@/data/showcase';
import { KPIChip } from '@/components/ui/KPIChip';
import { Button } from '@/components/ui/Button';
import StickyCTA from '@/components/StickyCTA';
import { ShowcaseCard } from '@/components/showcase/ShowcaseCard';
import logEvent from '@/lib/analytics';

interface ShowcaseDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SHOWCASE_ITEMS
    .filter(item => item.published)
    .map((item) => ({
      slug: item.slug,
    }));
}

export async function generateMetadata({ params }: ShowcaseDetailPageProps): Promise<Metadata> {
  const item = getItemBySlug(params.slug);

  if (!item) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${item.title} - Showcase | Jaithraya`,
    description: item.summary,
    openGraph: {
      title: `${item.title} - Showcase | Jaithraya`,
      description: item.summary,
      type: 'website',
      url: `/showcase/${item.slug}`,
      images: [
        {
          url: item.media[0]?.src || '/images/placeholder-showcase.svg',
          width: 1200,
          height: 630,
          alt: item.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${item.title} - Showcase | Jaithraya`,
      description: item.summary,
      images: [item.media[0]?.src || '/images/placeholder-showcase.svg'],
    },
    alternates: {
      canonical: `/showcase/${item.slug}`,
    },
  };
}

export default function ShowcaseDetailPage({ params }: ShowcaseDetailPageProps) {
  const item = getItemBySlug(params.slug);

  if (!item) {
    notFound();
  }

  const relatedItems = getRelatedItems(item, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 via-white to-teal-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              href="/showcase"
              className="text-charcoal-500 hover:text-saffron-600 transition-colors"
            >
              Showcase
            </Link>
            <span className="text-charcoal-300">/</span>
            <span className="text-charcoal-900 font-medium">{item.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-saffron-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {item.category}
                </span>
                <div className="flex items-center text-charcoal-600">
                  <Building2 className="w-4 h-4 mr-2" />
                  {item.industry}
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
                {item.title}
              </h1>

              {item.subtitle && (
                <p className="text-xl text-charcoal-600 mb-8">
                  {item.subtitle}
                </p>
              )}

              {/* KPIs */}
              {item.kpis && item.kpis.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-8">
                  {item.kpis.map((kpi, index) => (
                    <KPIChip
                      key={index}
                      label={kpi.label}
                      value={kpi.value}
                      size="lg"
                    />
                  ))}
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-saffron-500 to-teal-500 hover:from-saffron-600 hover:to-teal-600 text-white"
                >
                  Schedule Free Consultation
                </Button>
                {item.demo?.url && (
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-teal-300 text-teal-600 hover:bg-teal-50"
                    asChild
                  >
                    <a href={item.demo.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      View Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={item.media[0]?.src || '/images/placeholder-showcase.svg'}
                  alt={item.media[0]?.alt || item.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-saffron-400 to-teal-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-teal-400 to-saffron-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold text-charcoal-900 mb-6">
                  Project Overview
                </h2>
                <p className="text-lg text-charcoal-600 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              {/* Highlights */}
              {item.highlights && item.highlights.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-charcoal-900 mb-6">
                    Key Highlights
                  </h3>
                  <ul className="space-y-4">
                    {item.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-saffron-500 mr-4 mt-1 flex-shrink-0" />
                        <span className="text-charcoal-600 text-lg">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Features */}
              {item.features && item.features.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-charcoal-900 mb-6">
                    What's Included
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center p-4 bg-white rounded-lg border border-charcoal-100 hover:border-teal-200 transition-colors"
                      >
                        <CheckCircle className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                        <span className="text-charcoal-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery */}
              {item.media && item.media.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-charcoal-900 mb-6">
                    Project Gallery
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {item.media.map((media, index) => (
                      <div
                        key={index}
                        className="relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <Image
                          src={media.src}
                          alt={media.alt || `${item.title} image ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {media.type === 'video' && (
                          <div className="absolute inset-0 bg-charcoal-900/20 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                              <div className="w-0 h-0 border-l-[12px] border-l-charcoal-600 border-y-[8px] border-y-transparent ml-1"></div>
                            </div>
                          </div>
                        )}
                        {media.type === 'iframe' && (
                          <div className="absolute inset-0 bg-charcoal-900/20 flex items-center justify-center">
                            <ExternalLink className="w-8 h-8 text-white" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Results */}
              {item.kpis && item.kpis.length > 0 && (
                <div className="bg-white rounded-xl p-6 shadow-soft border border-charcoal-100">
                  <h3 className="text-xl font-bold text-charcoal-900 mb-4">
                    Key Results
                  </h3>
                  <div className="space-y-4">
                    {item.kpis.map((kpi, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-4 bg-gradient-to-r from-saffron-50 to-teal-50 rounded-lg"
                      >
                        <span className="text-charcoal-700 font-medium">{kpi.label}</span>
                        <span className="text-2xl font-bold text-saffron-600">{kpi.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              {item.techStack && item.techStack.length > 0 && (
                <div className="bg-white rounded-xl p-6 shadow-soft border border-charcoal-100">
                  <h3 className="text-xl font-bold text-charcoal-900 mb-4">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-charcoal-100 text-charcoal-700 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="bg-white rounded-xl p-6 shadow-soft border border-charcoal-100">
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Demo Access */}
              {item.demo && (
                <div className="bg-gradient-to-r from-saffron-50 to-teal-50 rounded-xl p-6 border border-saffron-200">
                  <h3 className="text-xl font-bold text-charcoal-900 mb-4">
                    Live Demo
                  </h3>
                  <p className="text-charcoal-600 mb-4">
                    Experience this solution in action with our interactive demo.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-saffron-500 to-teal-500 hover:from-saffron-600 hover:to-teal-600 text-white"
                  >
                    <a href={item.demo?.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Access Demo
                    </a>
                  </Button>
                  {item.demo.creds && (
                    <div className="mt-4 p-3 bg-white/50 rounded-lg">
                      <p className="text-sm text-charcoal-600 mb-2">Demo credentials:</p>
                      <p className="text-sm font-mono text-charcoal-700">
                        User: {item.demo.creds.user}
                      </p>
                      <p className="text-sm font-mono text-charcoal-700">
                        Pass: {item.demo.creds.pass}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedItems.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal-900 mb-4">
                Related Projects
              </h2>
              <p className="text-lg text-charcoal-600">
                Explore more solutions that might interest you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedItems.map((relatedItem) => (
                <div key={relatedItem.slug} className="bg-white rounded-xl border border-charcoal-100 hover:border-teal-200 transition-all duration-300 shadow-soft hover:shadow-elevated overflow-hidden group">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={relatedItem.media[0]?.src || '/images/placeholder-showcase.svg'}
                      alt={relatedItem.media[0]?.alt || relatedItem.title}
                      fill
                      className="object-cover transition-all duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-saffron-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {relatedItem.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-charcoal-900 mb-2 line-clamp-2">
                      {relatedItem.title}
                    </h3>
                    <p className="text-charcoal-600 text-sm mb-4 line-clamp-3">
                      {relatedItem.summary}
                    </p>
                    <Link
                      href={`/showcase/${relatedItem.slug}`}
                      className="w-full bg-gradient-to-r from-saffron-500 to-teal-500 hover:from-saffron-600 hover:to-teal-600 text-white px-4 py-2 rounded-lg font-semibold text-center block transition-all duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/showcase"
                className="inline-flex items-center text-saffron-600 hover:text-saffron-700 font-semibold"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Sticky CTA */}
      <StickyCTA />
    </div>
  );
}
