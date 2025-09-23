import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const BlogArticles = () => {
  const articles = [
    {
      id: 1,
      title: "10 Essential Social Media Metrics Every Marketer Should Track",
      excerpt: "Learn about the key performance indicators that matter most for your social media strategy.",
      author: "Mike Chen",
      date: "2024-01-12",
      readTime: "6 min read",
      image: "/images/blog/social-media-metrics.jpg",
      category: "Social Media",
      slug: "essential-social-media-metrics"
    },
    {
      id: 2,
      title: "How to Build a Data-Driven Marketing Strategy",
      excerpt: "Discover the framework for creating marketing strategies backed by solid data and analytics.",
      author: "Sarah Johnson",
      date: "2024-01-10",
      readTime: "10 min read",
      image: "/images/blog/data-driven-marketing.jpg",
      category: "Analytics",
      slug: "data-driven-marketing-strategy"
    },
    {
      id: 3,
      title: "The Complete Guide to Marketing Automation",
      excerpt: "Everything you need to know about automating your marketing processes for better efficiency.",
      author: "David Rodriguez",
      date: "2024-01-08",
      readTime: "12 min read",
      image: "/images/blog/marketing-automation.jpg",
      category: "Automation",
      slug: "complete-guide-marketing-automation"
    },
    {
      id: 4,
      title: "Content Marketing Trends for 2024",
      excerpt: "Stay ahead of the curve with these emerging content marketing trends and strategies.",
      author: "Emily Watson",
      date: "2024-01-05",
      readTime: "8 min read",
      image: "/images/blog/content-marketing-trends.jpg",
      category: "Digital Marketing",
      slug: "content-marketing-trends-2024"
    },
    {
      id: 5,
      title: "ROI Optimization: Getting More from Your Marketing Budget",
      excerpt: "Practical tips for maximizing your marketing ROI and getting better results with the same budget.",
      author: "Alex Thompson",
      date: "2024-01-03",
      readTime: "7 min read",
      image: "/images/blog/roi-optimization.jpg",
      category: "Strategy",
      slug: "roi-optimization-marketing-budget"
    },
    {
      id: 6,
      title: "Case Study: How We Increased Client Revenue by 300%",
      excerpt: "A detailed look at the strategies and tactics that led to exceptional growth for one of our clients.",
      author: "Team Jaithraya",
      date: "2024-01-01",
      readTime: "15 min read",
      image: "/images/blog/case-study-revenue.jpg",
      category: "Case Studies",
      slug: "case-study-300-percent-revenue-increase"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
          <p className="text-lg text-gray-600">Stay updated with our latest insights and strategies</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-gray-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  <Link href={`/blog/${article.slug}`} className="hover:text-blue-600 transition-colors">
                    {article.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                </div>
                
                <Link 
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogArticles;
