'use client';

import { ShowcaseItem } from '@/data/showcase';
import React from 'react';
import { DemoFrame } from '../DemoFrame';
import { motion } from 'framer-motion';
import { MoreHorizontal, User, Clock } from 'lucide-react';
import { DemoSlider } from '../DemoSlider';

const CrmDemo = ({ item }: { item: ShowcaseItem }) => {
  return (
    <DemoFrame item={item}>
      <h2 className="text-2xl font-bold text-white/90 mb-6">Project Dashboard</h2>
      <DemoSlider tabs={["Pipeline", "Client View", "Workload"]}>
        <Pipeline />
        <ClientView />
        <Workload />
      </DemoSlider>
    </DemoFrame>
  );
};

const pipelineColumns = {
  'To Do': [{ id: 1, title: 'New Client Onboarding', company: 'Innovate Inc.' }],
  'In Progress': [{ id: 3, title: 'Develop Marketing Strategy', company: 'Sunrise Solutions' }],
  'Done': [{ id: 4, title: 'Q3 Financial Audit', company: 'Apex Enterprises' }],
};
const Pipeline = () => (
  <div className="grid grid-cols-3 gap-6">
    {Object.entries(pipelineColumns).map(([title, tasks]) => (
      <Column key={title} title={title} count={tasks.length}>
        {tasks.map((task, index) => <TaskCard key={task.id} task={task} index={index} />)}
      </Column>
    ))}
  </div>
);

const ClientView = () => (
  <div className="bg-white/5 p-6 rounded-lg">
    <div className="flex items-center space-x-4">
      <div className="w-16 h-16 bg-gray-900/50 rounded-lg flex items-center justify-center">
        <User size={32} className="text-purple-400" />
      </div>
      <div>
        <h3 className="font-bold text-xl text-white/90">Sunrise Solutions</h3>
        <p className="text-gray-400">Active Client Since 2022</p>
      </div>
    </div>
    <div className="mt-6 space-y-3">
      <div className="flex justify-between items-center"><span className="text-gray-400">Active Projects:</span> <span className="font-bold text-white/90">3</span></div>
      <div className="flex justify-between items-center"><span className="text-gray-400">Pending Invoices:</span> <span className="font-bold text-red-400">$12,500</span></div>
    </div>
  </div>
);

const workloadData = [
  { name: 'Alice', hours: 40 }, { name: 'Bob', hours: 32 },
  { name: 'Charlie', hours: 48, over: true }, { name: 'Diana', hours: 24 },
];
const Workload = () => (
  <div className="space-y-4">
    {workloadData.map(d => (
      <div key={d.name} className="flex items-center bg-white/5 p-4 rounded-lg">
        <div className="flex items-center space-x-3 flex-1">
          <Clock className={d.over ? 'text-red-400' : 'text-gray-400'}/>
          <span className="font-semibold text-white/90">{d.name}</span>
        </div>
        <div className="flex-1">
          <div className="w-full bg-gray-900/50 rounded-full h-4">
            <div className={`h-4 rounded-full ${d.over ? 'bg-red-500' : 'bg-purple-500'}`} style={{width: `${(d.hours/50)*100}%`}}></div>
          </div>
        </div>
        <div className="w-1/4 text-right font-bold text-white/90">{d.hours} hrs</div>
      </div>
    ))}
  </div>
);

const Column = ({ title, count, children }: { title: string, count: number, children: React.ReactNode }) => (
  <div className="bg-white/5 p-4 rounded-lg h-[28rem]"><div className="flex justify-between items-center mb-4"><div className="flex items-center space-x-2"><h3 className="font-bold text-white/80">{title}</h3><span className="text-sm text-gray-400 bg-gray-700/50 rounded-full px-2 py-0.5">{count}</span></div><MoreHorizontal className="text-gray-500" /></div><div className="space-y-4">{children}</div></div>
);
const TaskCard = ({ task, index }: { task: { title: string, company: string }, index: number }) => (
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-gray-900/50 p-4 rounded-md"><p className="font-semibold text-white/90">{task.title}</p><p className="text-sm text-gray-400 mt-1">{task.company}</p></motion.div>
);

export default CrmDemo;
