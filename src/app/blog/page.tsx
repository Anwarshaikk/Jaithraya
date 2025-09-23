import BlogHero from '@/components/sections/blog/BlogHero';
import BlogFeatured from '@/components/sections/blog/BlogFeatured';
import BlogCategories from '@/components/sections/blog/BlogCategories';
import BlogArticles from '@/components/sections/blog/BlogArticles';
import BlogNewsletter from '@/components/sections/blog/BlogNewsletter';

export default function Blog() {
  return (
    <main>
      <BlogHero />
      <BlogFeatured />
      <BlogCategories />
      <BlogArticles />
      <BlogNewsletter />
    </main>
  );
}
