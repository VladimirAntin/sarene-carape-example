import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {products} from '@components/data/products';
import ProductDetail from '@/components/shop/ProductDetail';

type Props = {params: Promise<{slug: string}>};

export async function generateStaticParams() {
  return products.map(p => ({slug: p.slug}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const product = products.find(p => p.slug === slug);
  if (!product) return {title: 'Proizvod nije pronađen'};
  return {
    title: product.name + ' — Šarene Čarape',
    description: product.tagline + '. ' + product.description.slice(0, 120) + '...',
  };
}

export default async function ProizvodPage({params}: Props) {
  const {slug} = await params;
  const product = products.find(p => p.slug === slug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}

