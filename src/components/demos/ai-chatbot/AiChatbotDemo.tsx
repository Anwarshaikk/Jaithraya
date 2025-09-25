'use client';

import { ShowcaseItem } from '@/data/showcase';
import React, { useEffect, useState } from 'react';
import { DemoFrame } from '../DemoFrame';
import { motion } from 'framer-motion';
import { Bot, User, BarChart, Book } from 'lucide-react';
import { DemoSlider } from '../DemoSlider';

const AiChatbotDemo = ({ item }: { item: ShowcaseItem }) => {
  return (
    <DemoFrame item={item}>
      <h2 className="text-2xl font-bold text-white/90 mb-6">AI Customer Service</h2>
      <DemoSlider tabs={["Live Chat", "Analytics", "Knowledge Base"]}>
        <LiveChat />
        <Analytics />
        <KnowledgeBase />
      </DemoSlider>
    </DemoFrame>
  );
};

const conversation = [
  { from: 'user', text: 'Hi, I need to change my delivery address.' },
  { from: 'bot', text: 'Of course! What is your order number?' },
  { from: 'user', text: 'It\'s #123-456789.' },
  { from: 'bot', text: 'Thank you. What is the new address?' },
];
const LiveChat = () => {
  const [messages, setMessages] = useState<any[]>([]);
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < conversation.length) setMessages(prev => [...prev, conversation[i++]]);
      else clearInterval(interval);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900/50 rounded-lg p-4 h-96 flex flex-col">
      <div className="flex-1 space-y-4 overflow-y-auto pr-2">
        {messages.map((msg, i) => <Message key={i} {...msg} />)}
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <input type="text" placeholder="Type a message..." className="w-full p-2 border rounded-lg bg-gray-700/50 text-white border-gray-600" disabled />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Send</button>
      </div>
    </div>
  );
};

const Analytics = () => (
  <div className="bg-white/5 p-6 rounded-lg h-96 flex flex-col justify-between">
    <div>
      <h3 className="font-bold text-xl text-white/90">Chatbot Performance</h3>
      <p className="text-gray-400 text-sm">Last 30 days</p>
    </div>
    <div className="grid grid-cols-2 gap-6">
      <div className="text-center"><p className="text-4xl font-bold text-green-400">78%</p><p className="text-gray-400">Resolution Rate</p></div>
      <div className="text-center"><p className="text-4xl font-bold text-blue-400">1,245</p><p className="text-gray-400">Total Conversations</p></div>
    </div>
    <div></div>
  </div>
);

const knowledgeData = [ "Shipping & Delivery", "Returns & Exchanges", "Product Information" ];
const KnowledgeBase = () => (
  <div className="space-y-4 h-96">
    {knowledgeData.map(d => (
      <div key={d} className="flex items-center bg-white/5 p-4 rounded-lg">
        <Book className="text-purple-400" />
        <p className="ml-4 font-semibold text-white/90">{d}</p>
      </div>
    ))}
  </div>
);

const Message = ({ from, text }: { from: string, text: string }) => {
  const isBot = from === 'bot';
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex items-start space-x-3 ${isBot ? '' : 'justify-end'}`}>
      {isBot && <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center flex-shrink-0"><Bot size={20} /></div>}
      <div className={`p-3 rounded-lg max-w-xs ${isBot ? 'bg-gray-700/50 text-gray-300' : 'bg-blue-500 text-white'}`}>{text}</div>
      {!isBot && <div className="w-8 h-8 rounded-full bg-gray-600 text-gray-300 flex items-center justify-center flex-shrink-0"><User size={20} /></div>}
    </motion.div>
  );
};

export default AiChatbotDemo;
