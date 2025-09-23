import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User } from 'lucide-react';

const BlogFeatured = () => {
  const featuredPost = {
    id: 1,
    title: "The Future of Digital Marketing: AI-Powered Strategies",
    excerpt: "Discover how artificial intelligence is revolutionizing digital marketing and what it means for your business growth.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/images/blog/featured-post.jpg",
    category: "Digital Marketing",
    slug: "future-digital-marketing-ai-powered-strategies"
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
          <p className="text-lg text-gray-600">Our most popular and insightful content</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-full">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {featuredPost.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                <Link href={`/blog/${featuredPost.slug}`} className="hover:text-blue-600 transition-colors">
                  {featuredPost.title}
                </Link>
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                
                <Link 
                  href={`/blog/${featuredPost.slug}`}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFeatured;
