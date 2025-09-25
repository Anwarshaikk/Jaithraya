'use client';

import { ShowcaseItem } from '@/data/showcase';
import React from 'react';
import { DemoFrame } from '../DemoFrame';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, Search, Package, BarChart2, Truck } from 'lucide-react';
import { DemoSlider } from '../DemoSlider';

const SmokeShopInventoryDemo = ({ item }: { item: ShowcaseItem }) => {
  return (
    <DemoFrame item={item}>
      <h2 className="text-2xl font-bold text-white/90 mb-6">Inventory Management</h2>
      <DemoSlider tabs={["Compliance", "Analytics", "Suppliers"]}>
        <Compliance />
        <Analytics />
        <Suppliers />
      </DemoSlider>
    </DemoFrame>
  );
};

const products = [
  { name: 'Delta-8 Gummies', status: 'compliant' },
  { name: 'CBD Tincture', status: 'compliant' },
  { name: 'Exotic Blend Vape', status: 'restricted' },
];
const Compliance = () => (
  <div>
    <div className="flex items-center space-x-2 bg-gray-900/50 p-2 rounded-lg mb-4">
      <Search className="text-gray-500" /><input type="text" placeholder="Search products..." className="bg-transparent focus:outline-none text-white" />
    </div>
    <div className="bg-white/5 rounded-lg">
      {products.map((p, i) => (
        <motion.div key={p.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
          className="grid grid-cols-2 p-4 items-center border-b border-gray-700/50 last:border-b-0">
          <div className="font-semibold text-white/90">{p.name}</div>
          <div className="flex justify-end"><StatusBadge status={p.status} /></div>
        </motion.div>
      ))}
    </div>
  </div>
);

const analyticsData = [
  { name: 'Delta-8 Gummies', sales: 45 }, { name: 'CBD Tincture', sales: 32 }, { name: 'Glass Pipes', sales: 28 },
];
const Analytics = () => (
  <div className="space-y-4">
    {analyticsData.map(d => (
      <div key={d.name} className="flex items-center bg-white/5 p-4 rounded-lg">
        <BarChart2 className="text-purple-400" />
        <div className="ml-4 flex-1"><p className="font-semibold text-white/90">{d.name}</p></div>
        <div className="w-1/2 bg-gray-900/50 rounded-full h-4"><div className="h-4 rounded-full bg-purple-500" style={{width: `${(d.sales/50)*100}%`}}></div></div>
      </div>
    ))}
  </div>
);

const suppliersData = [
  { name: 'Vape Dynamics', status: 'On Time' }, { name: 'Glass Emporium', status: 'Delayed' }, { name: 'CBD Wellness', status: 'On Time' },
];
const Suppliers = () => (
  <div className="space-y-4">
    {suppliersData.map(s => (
      <div key={s.name} className="flex justify-between items-center bg-white/5 p-4 rounded-lg">
        <div className="flex items-center space-x-3">
          <Truck className={s.status === 'Delayed' ? "text-red-400" : "text-gray-400"} />
          <p className="font-semibold text-white/90">{s.name}</p>
        </div>
        <div className={`font-bold text-sm ${s.status === 'Delayed' ? 'text-red-400' : 'text-green-400'}`}>{s.status}</div>
      </div>
    ))}
  </div>
);

const StatusBadge = ({ status }: { status: string }) => {
  const isCompliant = status === 'compliant';
  return <span className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center justify-center w-32 ${isCompliant ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}`}>{isCompliant ? <CheckCircle className="mr-2" size={16} /> : <AlertTriangle className="mr-2" size={16} />}{isCompliant ? 'Compliant' : 'Restricted'}</span>;
};

export default SmokeShopInventoryDemo;
