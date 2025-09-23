'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Play, ExternalLink } from 'lucide-react';
import { ShowcaseItem } from '@/data/showcase';

interface LightboxProps {
  item: ShowcaseItem;
  onClose: () => void;
}

export function Lightbox({ item, onClose }: LightboxProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentMedia = item.media[currentMediaIndex];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (currentMediaIndex > 0) {
            setCurrentMediaIndex(currentMediaIndex - 1);
          }
          break;
        case 'ArrowRight':
          if (currentMediaIndex < item.media.length - 1) {
            setCurrentMediaIndex(currentMediaIndex + 1);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentMediaIndex, item.media.length, onClose]);

  // Focus trap
  useEffect(() => {
    if (lightboxRef.current) {
      lightboxRef.current.focus();
    }
  }, []);

  const handlePrevious = () => {
    if (currentMediaIndex > 0) {
      setCurrentMediaIndex(currentMediaIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentMediaIndex < item.media.length - 1) {
      setCurrentMediaIndex(currentMediaIndex + 1);
    }
  };

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleDemoClick = () => {
    if (item.demo?.url) {
      window.open(item.demo.url, '_blank');
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-900/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          ref={lightboxRef}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          aria-describedby="lightbox-description"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-charcoal-100">
            <div className="flex-1">
              <h2 id="lightbox-title" className="text-2xl font-bold text-charcoal-900 mb-2">
                {item.title}
              </h2>
              <div id="lightbox-description" className="flex items-center space-x-4 text-sm text-charcoal-600">
                <span className="bg-saffron-100 text-saffron-700 px-3 py-1 rounded-full font-medium">
                  {item.category}
                </span>
                <span>{item.industry}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-charcoal-400 hover:text-charcoal-600 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Media Content */}
          <div className="relative bg-charcoal-50">
            {/* Main Media */}
            <div className="relative aspect-video bg-charcoal-100">
              {currentMedia?.type === 'image' && (
                <Image
                  src={currentMedia.src}
                  alt={currentMedia.alt || item.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                />
              )}

              {currentMedia?.type === 'video' && (
                <div className="relative w-full h-full">
                  <video
                    ref={videoRef}
                    src={currentMedia.src}
                    className="w-full h-full object-contain"
                    controls
                    poster={currentMedia.alt}
                  />
                </div>
              )}

              {currentMedia?.type === 'iframe' && (
                <iframe
                  src={currentMedia.src}
                  className="w-full h-full border-0"
                  title={currentMedia.alt || item.title}
                />
              )}

              {/* Navigation Arrows */}
              {item.media.length > 1 && (
                <>
                  {currentMediaIndex > 0 && (
                    <button
                      onClick={handlePrevious}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                      aria-label="Previous media"
                    >
                      <ChevronLeft className="w-6 h-6 text-charcoal-600" />
                    </button>
                  )}
                  {currentMediaIndex < item.media.length - 1 && (
                    <button
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                      aria-label="Next media"
                    >
                      <ChevronRight className="w-6 h-6 text-charcoal-600" />
                    </button>
                  )}
                </>
              )}

              {/* Media Counter */}
              {item.media.length > 1 && (
                <div className="absolute bottom-4 right-4 bg-charcoal-900/80 text-white px-3 py-1 rounded-full text-sm">
                  {currentMediaIndex + 1} / {item.media.length}
                </div>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {item.media.length > 1 && (
              <div className="p-4 border-t border-charcoal-100">
                <div className="flex space-x-2 overflow-x-auto">
                  {item.media.map((media, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMediaIndex(index)}
                      className={`relative flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentMediaIndex
                          ? 'border-saffron-500'
                          : 'border-charcoal-200 hover:border-saffron-300'
                      }`}
                    >
                      {media.type === 'image' && (
                        <Image
                          src={media.src}
                          alt={media.alt || `${item.title} thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      )}
                      {media.type === 'video' && (
                        <div className="w-full h-full bg-charcoal-200 flex items-center justify-center">
                          <Play className="w-4 h-4 text-charcoal-600" />
                        </div>
                      )}
                      {media.type === 'iframe' && (
                        <div className="w-full h-full bg-charcoal-200 flex items-center justify-center">
                          <ExternalLink className="w-4 h-4 text-charcoal-600" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h3 className="text-lg font-semibold text-charcoal-900 mb-3">
                  Project Overview
                </h3>
                <p className="text-charcoal-600 mb-4">
                  {item.summary}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-md font-semibold text-charcoal-900 mb-3">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-saffron-500 mr-2 mt-1">•</span>
                          <span className="text-charcoal-600 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.features && item.features.length > 0 && (
                  <div>
                    <h4 className="text-md font-semibold text-charcoal-900 mb-3">
                      Features Included
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* KPIs */}
                {item.kpis && item.kpis.length > 0 && (
                  <div>
                    <h4 className="text-md font-semibold text-charcoal-900 mb-3">
                      Key Results
                    </h4>
                    <div className="space-y-2">
                      {item.kpis.map((kpi, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-3 bg-saffron-50 rounded-lg"
                        >
                          <span className="text-sm text-charcoal-600">{kpi.label}</span>
                          <span className="font-semibold text-saffron-700">{kpi.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                {item.techStack && item.techStack.length > 0 && (
                  <div>
                    <h4 className="text-md font-semibold text-charcoal-900 mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-charcoal-100 text-charcoal-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Demo Access */}
                {item.demo && (
                  <div>
                    <h4 className="text-md font-semibold text-charcoal-900 mb-3">
                      Live Demo
                    </h4>
                    <button
                      onClick={handleDemoClick}
                      className="w-full bg-gradient-to-r from-saffron-500 to-teal-500 text-white px-4 py-3 rounded-lg font-semibold hover:from-saffron-600 hover:to-teal-600 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 inline" />
                      View Live Demo
                    </button>
                    {item.demo.creds && (
                      <div className="mt-2 text-xs text-charcoal-500">
                        <p>Demo credentials:</p>
                        <p>User: {item.demo.creds.user}</p>
                        <p>Pass: {item.demo.creds.pass}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
