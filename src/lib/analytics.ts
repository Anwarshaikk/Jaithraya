type AnalyticsEvent =
  | {
      name: 'hero_cta_click';
      properties?: Record<string, any>;
    }
  | {
      name: 'pricing_select';
      properties: {
        plan: 'Starter' | 'Growth' | 'Enterprise';
        isAnnual: boolean;
      };
    }
  | {
      name: 'consult_submit_success';
      properties: {
        form_duration: number;
      };
    }
  | {
      name: 'sticky_cta_click';
      properties?: Record<string, any>;
    }
  | {
      name: 'cta_click';
      properties?: Record<string, any>;
    };

const logEvent = (event: AnalyticsEvent) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', event.name, event.properties || '');
  }
  // In a real app, you would send this to your analytics service
  // e.g., window.gtag('event', event.name, event.properties);
};

export default logEvent;
