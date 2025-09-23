import React from 'react';

const ContactMap = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
          <p className="text-lg text-gray-600">Visit our office in the heart of New York</p>
        </div>
        
        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
          <div className="aspect-video bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Map</h3>
              <p className="text-gray-600 mb-4">
                123 Business Ave, Suite 100<br />
                New York, NY 10001
              </p>
              <div className="space-y-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors mr-2">
                  Get Directions
                </button>
                <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                  Street View
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Public Transportation</h4>
            <p className="text-gray-600 text-sm">
              Subway: 4, 5, 6 trains to 42nd St<br />
              Bus: M15, M42, M104
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Parking</h4>
            <p className="text-gray-600 text-sm">
              Street parking available<br />
              Nearby garages: 2 blocks away
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Accessibility</h4>
            <p className="text-gray-600 text-sm">
              Wheelchair accessible<br />
              Elevator available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
