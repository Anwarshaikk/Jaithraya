import { APP_CONFIG } from '@/constants';

const SEO_CONFIG = {
  defaultTitle: `${APP_CONFIG.name} - ${APP_CONFIG.tagline}`,
  titleTemplate: `%s | ${APP_CONFIG.name}`,
  description: APP_CONFIG.description,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: APP_CONFIG.url,
    site_name: APP_CONFIG.name,
    images: [
      {
        url: `${APP_CONFIG.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${APP_CONFIG.name} - ${APP_CONFIG.tagline}`,
      },
    ],
  },
  twitter: {
    handle: '@jaithraya',
    site: '@jaithraya',
    cardType: 'summary_large_image',
  },
};

export default SEO_CONFIG;
