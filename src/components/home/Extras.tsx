'use client';
import {memo} from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import WaveDivider from '@/components/WaveDivider';

const TESTIMONIALS = [
  {
    name: 'Milica T.',
    city: 'Beograd',
    emoji: '🌈',
    text: 'Kupila sam za poklon i svi su oduševljeni! Pakovanje je prelepo, a čarape su meke i ne gube boju. Definitivno ponovo naručujem!',
    rating: 5,
  },
  {
    name: 'Marko J.',
    city: 'Novi Sad',
    emoji: '🧦',
    text: 'Naručio 4 para, stigli za 24h. Kvalitet je odličan, pruge su vivid i žive. Sada ih nosim svaki dan u kancelariji i svi pitaju gde sam ih kupio.',
    rating: 5,
  },
  {
    name: 'Ana P.',
    city: 'Niš',
    emoji: '🐱',
    text: 'Mačkice čarape su hit! Moji muškarci kod kuće ne daju da ih skidam 😂 Super kvalitet i brza dostava. Preporučujem svima!',
    rating: 5,
  },
  {
    name: 'Stefan R.',
    city: 'Loznica',
    emoji: '⭐',
    text: 'Lokalni shop koji stvarno drži reč. Naručio sam prugaste i sportske — sve kao na slikama, mekano i udobno. Podrška odlična!',
    rating: 5,
  },
  {
    name: 'Jelena K.',
    city: 'Kragujevac',
    emoji: '🎁',
    text: 'Uzela za decu — oduševljeni! Svemirske i pizza čarape su im omiljene. Pranje u mašini i kao nove. Preporučujem Šarene Čarape svima!',
    rating: 5,
  },
  {
    name: 'Ivan M.',
    city: 'Subotica',
    emoji: '🌟',
    text: 'Sjajna ideja za poklone! Sakupljam zanimljive čarape i ovaj shop je zlatni rudnik. Svaki mesec naručim nešto novo.',
    rating: 5,
  },
];

const WhyUs = () => (
  <section id={'utisci'} className={'relative bg-stone-950 pb-40 pt-20 lg:pb-52 lg:pt-28'}>
    <div className={'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>

      {/* Header */}
      <motion.div
        className={'mb-14 text-center'}
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-50px'}}
        transition={{duration: 0.5, ease: 'easeOut'}}>
        <span className={'mb-4 block text-sm font-semibold tracking-widest text-secondary uppercase'}>
          {'Utisci kupaca'}
        </span>
        <h2 className={'mb-4 text-4xl font-light text-white sm:text-5xl lg:text-6xl'}>
          {'Šta kažu naši kupci?'}
        </h2>
        <div className={'flex items-center justify-center gap-1'}>
          {[1,2,3,4,5].map(i => (
            <span key={i} className={'text-fun-yellow text-2xl'}>{'★'}</span>
          ))}
          <span className={'ml-2 text-white/50 text-sm'}>{'4.9 prosečna ocena'}</span>
        </div>
      </motion.div>

      {/* Testimonials grid */}
      <div className={'grid gap-4 sm:grid-cols-2 lg:grid-cols-3'}>
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            initial={{opacity: 0, y: 24}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-40px'}}
            transition={{duration: 0.45, ease: 'easeOut', delay: i * 0.07}}
            className={'group relative overflow-hidden rounded-3xl border border-white/8 bg-white/5 p-6 transition-all duration-300 hover:bg-white/8 hover:border-white/15'}>

            {/* Top accent bar */}
            <div className={'absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl bg-linear-to-r from-primary via-fun-orange to-fun-yellow'} />

            {/* Header */}
            <div className={'mb-4 flex items-start justify-between'}>
              <div className={'flex items-center gap-3'}>
                <div className={'flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-xl'}>
                  {t.emoji}
                </div>
                <div>
                  <div className={'font-semibold text-white'}>{t.name}</div>
                  <div className={'text-xs text-white/40'}>{t.city}</div>
                </div>
              </div>
              <div className={'flex gap-0.5'}>
                {Array.from({length: t.rating}).map((_, j) => (
                  <span key={j} className={'text-fun-yellow text-sm'}>{'★'}</span>
                ))}
              </div>
            </div>

            {/* Text */}
            <p className={'text-sm leading-relaxed text-white/60'}>{'"'}{t.text}{'"'}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className={'mt-12 text-center'}
        initial={{opacity: 0, y: 16}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-30px'}}
        transition={{duration: 0.5, ease: 'easeOut'}}>
        <p className={'mb-5 text-sm text-white/40'}>
          {'Pridruži se 1.200+ zadovoljnih kupaca širom Srbije'}
        </p>
        <Link
          href={'/proizvodi'}
          className={'inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark'}>
          {'🧦 Naruči Sada'}
        </Link>
      </motion.div>
    </div>

    <WaveDivider fill={'#1c1917'} />
  </section>
);

export default memo(WhyUs);
