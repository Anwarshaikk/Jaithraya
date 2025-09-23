'use client';
import React from 'react';
import Image from 'next/image';
import { testimonials, logos } from '@/data/testimonials';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel';
import Autoplay from 'embla-carousel-autoplay';

const TestimonialCarousel = () => {
  return (
    <section id="success" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900">
            Don't Just Take Our Word For It
          </h2>
          <p className="mt-4 text-lg text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Hear from business owners who have transformed their operations with Jaithraya.
          </p>
        </div>

        <Carousel
          opts={{
            loop: true,
            align: 'start',
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="h-full p-2">
                  <div className="flex h-full flex-col justify-between rounded-lg border border-neutral-200 bg-neutral-50 p-8">
                    <p className="text-charcoal-700 italic leading-relaxed text-lg">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-6 flex items-center">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div className="ml-4">
                        <p className="font-semibold text-charcoal-800 text-base">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-charcoal-600">
                          {testimonial.role}
                        </p>
                      </div>
                      <div className="ml-auto rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700">
                        {testimonial.metric}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="mt-20">
          <p className="text-center text-lg font-medium text-charcoal-600 max-w-2xl mx-auto">
            Powering growth for ambitious service businesses nationwide.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {logos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={60}
                className="opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
