'use client';

import { ShowcaseItem } from '@/data/showcase';
import React from 'react';
import { DemoFrame } from '../DemoFrame';
import { motion } from 'framer-motion';
import { TrendingUp, ShoppingCart, DollarSign, Users, Package, PieChart } from 'lucide-react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Pie, Cell } from 'recharts';
import { DemoSlider } from '../DemoSlider';

const RetailDashboardDemo = ({ item }: { item: ShowcaseItem }) => {
  return (
    <DemoFrame item={item}>
      <h2 className="text-2xl font-bold text-white/90 mb-6">Sales Dashboard</h2>
      <DemoSlider tabs={["Sales", "Inventory", "Customers"]}>
        <SalesDashboard />
        <InventoryDashboard />
        <CustomersDashboard />
      </DemoSlider>
    </DemoFrame>
  );
};

const salesData = [
  { name: 'Jan', revenue: 4000 }, { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 }, { name: 'Apr', revenue: 4500 },
];
const SalesDashboard = () => (
  <div>
    <div className="grid grid-cols-4 gap-6">
      <KpiCard title="Total Revenue" value="$45,231" icon={<DollarSign />} />
      <KpiCard title="Subscriptions" value="+2350" icon={<Users />} />
      <KpiCard title="Sales" value="+12,234" icon={<ShoppingCart />} />
      <KpiCard title="Active Now" value="+573" icon={<TrendingUp />} />
    </div>
    <div className="bg-white/5 p-6 rounded-lg mt-6 h-80">
      <ResponsiveContainer>
        <BarChart data={salesData}>
          <XAxis dataKey="name" stroke="#888888" fontSize={12} />
          <YAxis stroke="#888888" fontSize={12} />
          <Tooltip contentStyle={{ backgroundColor: '#2D3748', border: 'none' }} />
          <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const inventoryData = [
  { name: 'Gummies', stock: 120 }, { name: 'CBD Tincture', stock: 80 },
  { name: 'Vape Pens', stock: 45, low: true }, { name: 'Glass Pipes', stock: 150 },
];
const InventoryDashboard = () => (
  <div className="space-y-4">
    {inventoryData.map(p => (
      <div key={p.name} className="flex justify-between items-center bg-white/5 p-4 rounded-lg">
        <div className="flex items-center space-x-3">
          <Package className={p.low ? "text-red-400" : "text-gray-400"} />
          <p className="font-semibold text-white/90">{p.name}</p>
        </div>
        <div className={`font-bold ${p.low ? 'text-red-400' : 'text-white/90'}`}>{p.stock} units</div>
      </div>
    ))}
  </div>
);

const customerData = [ { name: 'New', value: 400 }, { name: 'Returning', value: 300 }, { name: 'Lapsed', value: 100 }];
const COLORS = ['#3b82f6', '#10b981', '#ef4444'];
const CustomersDashboard = () => (
  <div className="h-[420px]">
    <ResponsiveContainer>
      <PieChart>
        <Pie data={customerData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} label>
          {customerData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
        </Pie>
        <Tooltip contentStyle={{ backgroundColor: '#2D3748', border: 'none' }} />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

const KpiCard = ({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) => (
    <motion.div whileHover={{ y: -5 }} className="bg-white/5 p-6 rounded-lg">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-400">{title}</p>
          <p className="text-2xl font-bold mt-1 text-white/90">{value}</p>
        </div>
        <div className="text-blue-400 bg-blue-500/10 p-2 rounded-lg">{icon}</div>
      </div>
    </motion.div>
);

export default RetailDashboardDemo;
