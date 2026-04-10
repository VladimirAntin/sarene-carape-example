import Hero from '@components/home/Hero';
import Collections from '@components/home/Services';
import FeaturedProducts from '@components/home/Packages';
import AboutLoznica from '@components/home/Timetable';
import WhyUs from '@components/home/Extras';
import Contact from '@/components/Contact';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Šarene Čarape — Online Shop Šarenih Čarapa | Loznica',
  description:
    'Jedinstven online shop šarenih čarapa iz Loznice. Prugaste, tematske, cvjetne i sport čarape. Brza dostava širom Srbije.',
  alternates: {canonical: 'https://sarenecarepe.rs'},
};

export default function Home() {
  return (
    <>
      <Hero />
      <Collections />
      <FeaturedProducts />
      <AboutLoznica />
      <WhyUs />
      <Contact />
    </>
  );
}
