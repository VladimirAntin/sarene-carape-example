import type {Metadata} from 'next';
import ProizvodiClient from '@/components/shop/ProizvodiClient';

export const metadata: Metadata = {
  title: 'Svi Proizvodi — Šarene Čarape Online Shop',
  description:
    'Pogledaj sve šarene čarape — prugaste, tematske, cvjetne, sport i sezonske kolekcije. Brza dostava širom Srbije.',
};

export default function ProizvodiPage() {
  return <ProizvodiClient />;
}

