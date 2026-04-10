'use client';
import {memo} from 'react';
import {servicesItems} from '@components/data/services';
import {motion} from 'framer-motion';
import {cn} from '@utils/CN';
import WaveDivider from '@/components/WaveDivider';
import Link from 'next/link';

const ACCENTS = [
  {top: 'from-pink-500/40', chip: 'border-pink-400/25 bg-pink-400/15 text-pink-200'},
  {top: 'from-purple-500/40', chip: 'border-purple-400/25 bg-purple-400/15 text-purple-200'},
  {top: 'from-amber-500/40', chip: 'border-amber-400/25 bg-amber-400/15 text-amber-200'},
  {top: 'from-emerald-500/40', chip: 'border-emerald-400/25 bg-emerald-400/15 text-emerald-200'},
  {top: 'from-sky-500/40', chip: 'border-sky-400/25 bg-sky-400/15 text-sky-200'},
];

const Collections = () => (
  <section id={'kolekcija'} className={'relative bg-stone-950 pb-40 pt-20 lg:pb-52 lg:pt-28'}>
    <div className={'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>
      {/* Header */}
      <motion.div
        className={'mb-10'}
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-50px'}}
        transition={{duration: 0.5, ease: 'easeOut'}}>
        <span className={'mb-4 block text-sm font-semibold tracking-widest text-primary uppercase'}>
          {'Naše kategorije'}
        </span>
        <div className={'flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'}>
          <h2 className={'text-4xl font-light text-white sm:text-5xl lg:text-6xl'}>
            {'Naša Kolekcija'}
          </h2>
          <p className={'max-w-xs text-sm leading-relaxed text-white/35 lg:text-right'}>
            {'Svaki par je priča za sebe — pronađi svoju savršenu kombinaciju'}
          </p>
        </div>
      </motion.div>

      {/* Bento grid */}
      <div className={'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'}>
        {servicesItems.map((category, index) => {
          const accent = ACCENTS[index] ?? ACCENTS[0];
          const isFeature = index === 0;

          return (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 28}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-50px'}}
              transition={{duration: 0.5, ease: 'easeOut', delay: index * 0.08}}
              className={cn(
                'group relative overflow-hidden rounded-3xl cursor-pointer',
                isFeature ? 'sm:col-span-2 lg:col-span-2 min-h-100' : 'min-h-80',
              )}>
              <Link href={`/proizvodi?kategorija=${encodeURIComponent(category.title.split(' ')[0])}`} className={'block h-full'}>
                {/* Background image */}
                <img
                  src={category.image}
                  alt={category.title}
                  loading={'lazy'}
                  className={'absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'}
                />
                <div className={'absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent'} />
                <div className={cn('absolute inset-0 bg-linear-to-br opacity-50', accent.top, 'to-transparent')} />

                {/* Number */}
                <span className={'absolute top-5 right-5 font-mono text-xs font-bold tracking-widest text-white/25'}>
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Content */}
                <div className={'absolute bottom-0 left-0 right-0 p-6'}>
                  <h3 className={'mb-3 text-xl font-bold text-white drop-shadow lg:text-2xl'}>
                    {category.title}
                  </h3>
                  <p className={'mb-4 text-sm leading-relaxed text-white/65 line-clamp-2'}>
                    {category.description}
                  </p>
                  <div className={'flex flex-wrap gap-1.5'}>
                    {category.features.map((f, i) => (
                      <span
                        key={i}
                        className={cn('rounded-full border px-2.5 py-0.5 text-[11px] font-medium backdrop-blur-sm', accent.chip)}>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover arrow */}
                <div className={'absolute top-5 left-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:bg-primary/80'}>
                  <span className={'text-white text-sm'}>{'→'}</span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div
        className={'mt-10 text-center'}
        initial={{opacity: 0, y: 16}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.5}}>
        <Link
          href={'/proizvodi'}
          className={'inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-white/40'}>
          {'Pogledaj sve proizvode →'}
        </Link>
      </motion.div>
    </div>
    <WaveDivider fill={'#ffffff'} inverted />
  </section>
);

export default memo(Collections);
