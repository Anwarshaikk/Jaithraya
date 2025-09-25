'use client';

import { ShowcaseItem } from '@/data/showcase';
import React from 'react';
import { DemoFrame } from '../DemoFrame';
import { motion } from 'framer-motion';
import { BedDouble, Bath, Sofa, Sparkles, Calendar, Clock } from 'lucide-react';
import { DemoSlider } from '../DemoSlider';

const CleaningServiceDemo = ({ item }: { item: ShowcaseItem }) => {
  return (
    <DemoFrame item={item}>
      <DemoSlider tabs={["Estimate", "Services", "Schedule"]}>
        <EstimateCalculator />
        <ServiceSelection />
        <Scheduling />
      </DemoSlider>
    </DemoFrame>
  );
};

const EstimateCalculator = () => {
  const [bedrooms, setBedrooms] = React.useState(2);
  const [bathrooms, setBathrooms] = React.useState(1);
  const [livingRooms, setLivingRooms] = React.useState(1);
  const price = bedrooms * 50 + bathrooms * 30 + livingRooms * 40;

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white/90">Instant Estimate</h1>
      <p className="mt-2 text-gray-400">Select the size of your home to get an instant price.</p>
      <div className="mt-10 space-y-6">
        <Counter label="Bedrooms" icon={<BedDouble />} value={bedrooms} setValue={setBedrooms} />
        <Counter label="Bathrooms" icon={<Bath />} value={bathrooms} setValue={setBathrooms} />
        <Counter label="Living Rooms" icon={<Sofa />} value={livingRooms} setValue={setLivingRooms} />
      </div>
      <div className="mt-10 bg-white/10 p-6 rounded-lg">
        <p className="text-lg text-gray-300">Estimated Price:</p>
        <p className="text-5xl font-extrabold text-white">${price}</p>
      </div>
    </div>
  );
};

const ServiceSelection = () => (
  <div className="text-center">
    <h1 className="text-4xl font-bold text-white/90">Choose Your Service</h1>
    <p className="mt-2 text-gray-400">We offer a range of services to fit your needs.</p>
    <div className="mt-10 grid grid-cols-2 gap-4">
      <ServiceCard icon={<Sparkles />} title="Standard Clean" description="The essentials for a sparkling home." />
      <ServiceCard icon={<Sparkles className="text-sky-400" />} title="Deep Clean" description="A thorough clean for a fresh start." active />
    </div>
  </div>
);

const Scheduling = () => (
  <div className="text-center">
    <h1 className="text-4xl font-bold text-white/90">Schedule Your Clean</h1>
    <p className="mt-2 text-gray-400">Pick a date and time that works for you.</p>
    <div className="mt-10 p-6 bg-white/5 rounded-lg">
      <div className="flex justify-between items-center text-white/80 font-semibold">
        <span>‹</span>
        <span>October 2023</span>
        <span>›</span>
      </div>
      <div className="mt-4 grid grid-cols-7 gap-2 text-center text-gray-400">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <div key={d}>{d}</div>)}
        {Array.from({length: 31}).map((_, i) => <div key={i} className={`${i+1 === 15 ? 'bg-sky-500 text-white rounded-full' : ''}`}>{i+1}</div>)}
      </div>
    </div>
  </div>
);

const Counter = ({ label, icon, value, setValue }: { label: string, icon: React.ReactNode, value: number, setValue: (v: number) => void }) => (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="text-sky-400">{icon}</div>
        <p className="font-medium text-lg text-gray-300">{label}</p>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={() => setValue(Math.max(0, value - 1))} className="w-8 h-8 rounded-full bg-gray-600/50 text-xl font-bold text-white">-</button>
        <span className="w-8 text-center text-xl font-bold text-white">{value}</span>
        <button onClick={() => setValue(value + 1)} className="w-8 h-8 rounded-full bg-gray-600/50 text-xl font-bold text-white">+</button>
      </div>
    </div>
);

const ServiceCard = ({ icon, title, description, active }: { icon: React.ReactNode, title: string, description: string, active?: boolean }) => (
  <div className={`p-6 rounded-lg text-left ${active ? 'bg-sky-500/20 border-2 border-sky-500' : 'bg-white/5'}`}>
    <div className="text-sky-400">{icon}</div>
    <h3 className="mt-2 font-bold text-white/90">{title}</h3>
    <p className="mt-1 text-sm text-gray-400">{description}</p>
  </div>
);

export default CleaningServiceDemo;
