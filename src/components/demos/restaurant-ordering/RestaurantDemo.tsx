'use client';

import { ShowcaseItem } from '@/data/showcase';
import React from 'react';
import { DemoFrame } from '../DemoFrame';
import { motion } from 'framer-motion';
import { Utensils, Calendar, Users, Clock, Package, ChefHat, Bike, CheckCircle } from 'lucide-react';
import { DemoSlider } from '../DemoSlider';

const RestaurantDemo = ({ item }: { item: ShowcaseItem }) => {
  return (
    <DemoFrame item={item}>
      <DemoSlider tabs={["Menu", "Reservation", "Track Order"]}>
        <Menu />
        <Reservation />
        <OrderTracking />
      </DemoSlider>
    </DemoFrame>
  );
};

const menuItems = [
  { name: 'Spicy Rigatoni', price: '$24' },
  { name: 'Truffle Pizza', price: '$28' },
  { name: 'Golden Lava Cake', price: '$15' },
];

const Menu = () => {
  const [selected, setSelected] = React.useState(menuItems[0]);
  return (
    <div className="flex space-x-8">
      <div className="w-1/3">
        <h2 className="text-2xl font-bold text-white/90">Menu</h2>
        <div className="mt-4 space-y-2">
          {menuItems.map((item) => (
            <div 
              key={item.name} 
              onClick={() => setSelected(item)}
              className={`p-3 rounded-lg cursor-pointer transition-colors ${selected.name === item.name ? 'bg-orange-500 text-white' : 'hover:bg-gray-700/50'}`}
            >
              <p className="font-semibold text-gray-300">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-2/3 bg-white/5 rounded-lg p-8 flex flex-col items-center justify-center text-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} key={selected.name}>
          <div className="bg-gray-900/50 p-4 rounded-full shadow-lg">
            <Utensils className="w-12 h-12 text-orange-400" />
          </div>
          <h3 className="mt-4 text-3xl font-extrabold text-white/90">{selected.name}</h3>
          <p className="mt-2 text-2xl font-bold text-orange-400">{selected.price}</p>
          <button className="mt-6 bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-md">
            Add to Order
          </button>
        </motion.div>
      </div>
    </div>
  );
};

const Reservation = () => (
  <div className="text-center">
    <h1 className="text-4xl font-bold text-white/90">Book a Table</h1>
    <div className="mt-8 grid grid-cols-3 gap-4">
      <Input label="Party Size" icon={<Users />} defaultValue="2 people" />
      <Input label="Date" icon={<Calendar />} defaultValue="October 26, 2023" />
      <Input label="Time" icon={<Clock />} defaultValue="7:00 PM" />
    </div>
    <button className="mt-8 w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">Find a Table</button>
  </div>
);

const OrderTracking = () => {
  const steps = [
    { icon: <Package size={32} />, label: 'Order Placed', completed: true },
    { icon: <ChefHat size={32} />, label: 'In the Kitchen', completed: true },
    { icon: <Bike size={32} />, label: 'Out for Delivery', completed: false },
    { icon: <CheckCircle size={32} />, label: 'Delivered', completed: false },
  ];
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white/90">Track Your Order</h1>
      <div className="mt-8 flex justify-between items-center relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-700/50 transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-0 w-1/2 h-1 bg-orange-500 transform -translate-y-1/2"></div>
        {steps.map((step, index) => (
          <div key={index} className="z-10 text-center">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${step.completed ? 'bg-orange-500 text-white' : 'bg-gray-700/50 text-gray-400'}`}>
              {step.icon}
            </div>
            <p className="mt-2 font-semibold text-sm text-gray-300">{step.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Input = ({ label, icon, defaultValue }: { label: string, icon: React.ReactNode, defaultValue: string }) => (
  <div>
    <label className="block text-sm font-medium text-gray-400 text-left">{label}</label>
    <div className="mt-1 flex items-center space-x-2 border border-gray-700/50 rounded-lg p-3 bg-gray-900/50">
      <div className="text-gray-400">{icon}</div>
      <input type="text" defaultValue={defaultValue} className="w-full bg-transparent focus:outline-none text-white/90" />
    </div>
  </div>
);

export default RestaurantDemo;
