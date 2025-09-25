import { SHOWCASE_ITEMS } from '@/data/showcase';
import { notFound } from 'next/navigation';
import React from 'react';

// Dynamically import all demo components
const DemoComponents = {
  'retail-dashboard': () => import('@/components/demos/retail-dashboard/RetailDashboardDemo'),
  'cleaning-services-booking': () => import('@/components/demos/cleaning-service/CleaningServiceDemo'),
  'restaurant-online-ordering': () => import('@/components/demos/restaurant-ordering/RestaurantDemo'),
  'professional-services-crm': () => import('@/components/demos/professional-services-crm/CrmDemo'),
  'pos-data-warehouse-automation': () => import('@/components/demos/pos-automation/PosAutomationDemo'),
  'smoke-shop-inventory-management': () => import('@/components/demos/smoke-shop-inventory/SmokeShopInventoryDemo'),
  'ai-customer-service-chatbot': () => import('@/components/demos/ai-chatbot/AiChatbotDemo'),
  'multi-platform-integration': () => import('@/components/demos/multi-platform-integration/IntegrationDemo'),
};

export default async function DemoPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  if (!SHOWCASE_ITEMS.some(item => item.slug === slug)) {
    notFound();
  }

  const item = SHOWCASE_ITEMS.find(i => i.slug === slug)!;
  const DemoComponentImport = DemoComponents[slug as keyof typeof DemoComponents];

  if (!DemoComponentImport) {
    notFound();
  }

  const DemoComponent = (await DemoComponentImport()).default;

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <DemoComponent item={item} />
    </div>
  );
}

export async function generateStaticParams() {
  return SHOWCASE_ITEMS.map(item => ({
    slug: item.slug,
  }));
}
