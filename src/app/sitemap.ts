import type {MetadataRoute} from 'next';
import {products} from '@components/data/products';

export const dynamic = 'force-static';

const BASE_URL = 'https://sarenecarepe.rs';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const productPages: MetadataRoute.Sitemap = products.map(p => ({
    url: BASE_URL + '/proizvodi/' + p.slug,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {url: BASE_URL, lastModified, changeFrequency: 'monthly', priority: 1.0},
    {url: BASE_URL + '/proizvodi', lastModified, changeFrequency: 'weekly', priority: 0.9},
    {url: BASE_URL + '/korpa', lastModified, changeFrequency: 'never', priority: 0.3},
    ...productPages,
  ];
}
