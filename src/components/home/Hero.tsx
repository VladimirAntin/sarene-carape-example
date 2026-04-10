'use client';
import {FC, memo, ReactNode} from 'react';
import Link from 'next/link';
import {cn} from '@utils/CN';
import WaveDivider from '@/components/WaveDivider';
import {motion} from 'framer-motion';

const SLIDES = [
  'https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/3621123/pexels-photo-3621123.jpeg?auto=compress&cs=tinysrgb&w=1920',
];

const TAGS = [
  {emoji: '🧦', label: 'Prugaste', color: 'bg-pink-500/20 border-pink-400/30 text-pink-100'},
  {emoji: '🌈', label: 'Šarene', color: 'bg-orange-500/20 border-orange-400/30 text-orange-100'},
  {emoji: '🐱', label: 'Tematske', color: 'bg-purple-500/20 border-purple-400/30 text-purple-100'},
  {emoji: '⚡', label: 'Sport', color: 'bg-sky-500/20 border-sky-400/30 text-sky-100'},
  {
    emoji: '🎁',
    label: 'Pokloni',
    color: 'bg-emerald-500/20 border-emerald-400/30 text-emerald-100',
  },
];

const FLOATERS = ['🧦', '🌈', '🎨', '🧶', '✨', '🎀'];

const Highlight: FC<{children?: ReactNode}> = ({children}) => (
  <span
    className={
      'bg-linear-to-r from-pink-300 via-yellow-300 to-purple-300 bg-clip-text text-transparent'
    }>
    {children}
  </span>
);

const Hero = () => {
  return (
    <section
      className={'relative flex min-h-screen flex-col items-center justify-center overflow-hidden'}>
      {/* Background image */}
      <div className={'absolute inset-0'}>
        <img
          src={SLIDES[0]}
          alt={''}
          aria-hidden={'true'}
          className={'absolute inset-0 h-full w-full object-cover'}
        />
        {/* Colorful gradient overlay */}
        <div
          className={
            'absolute inset-0 bg-linear-to-br from-pink-950/90 via-purple-900/80 to-indigo-950/90'
          }
        />
        {/* Decorative rainbow blobs */}
        <div
          className={'absolute top-1/4 left-1/6 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl'}
        />
        <div
          className={
            'absolute right-1/5 bottom-1/3 h-96 w-96 rounded-full bg-purple-500/15 blur-3xl'
          }
        />
        <div
          className={'bg-fun-orange/15 absolute top-2/3 left-1/2 h-64 w-64 rounded-full blur-3xl'}
        />
        <div
          className={'bg-fun-yellow/10 absolute top-1/3 right-1/3 h-48 w-48 rounded-full blur-3xl'}
        />
      </div>

      {/* Floating emoji decorations */}
      <div className={'pointer-events-none absolute inset-0 overflow-hidden'}>
        {FLOATERS.map((emoji, i) => (
          <motion.span
            key={i}
            className={'absolute text-2xl opacity-20 select-none'}
            style={{
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 15, -15, 0],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}>
            {emoji}
          </motion.span>
        ))}
      </div>

      {/* Content */}
      <div className={'relative z-10 mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8'}>
        {/* Badge */}
        <motion.div
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className={
            'mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm'
          }>
          <span className={'bg-fun-green h-2 w-2 animate-pulse rounded-full'} />
          {'📍 Iz Loznice, s ljubavlju 🇷🇸'}
        </motion.div>

        {/* Tags */}
        <motion.div
          className={'mb-8 flex flex-wrap items-center justify-center gap-2'}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.2}}>
          {TAGS.map(tag => (
            <span
              key={tag.label}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm backdrop-blur-sm',
                tag.color,
              )}>
              <span>{tag.emoji}</span>
              {tag.label}
            </span>
          ))}
        </motion.div>

        {/* Heading */}
        <motion.h1
          className={'mb-5 text-5xl leading-tight font-light text-white sm:text-6xl lg:text-8xl'}
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.7, delay: 0.3}}>
          {'Obuci '}
          <Highlight>{'Radost'}</Highlight>
          {'!'}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className={'mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl'}
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.7, delay: 0.45}}>
          {
            'Jedinstven shop šarenih čarapa iz srca Loznice — prugaste, tematske, cvjetne i sport čarape koje će razveseliti svaki dan.'
          }
        </motion.p>

        {/* CTAs */}
        <motion.div
          className={'flex flex-col items-center justify-center gap-4 sm:flex-row'}
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.7, delay: 0.6}}>
          <Link
            href={'/proizvodi'}
            className={
              'group bg-primary shadow-primary/40 hover:bg-primary-dark flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-white shadow-lg transition'
            }>
            {'🧦 Istraži Kolekciju'}
            <span className={'transition-transform duration-200 group-hover:translate-x-1'}>
              {'→'}
            </span>
          </Link>
          <Link
            href={'/#kolekcija'}
            className={
              'group flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:border-white/70 hover:bg-white/20'
            }>
            {'🌈 Naše Kategorije'}
            <span className={'transition-transform duration-200 group-hover:translate-x-1'}>
              {'→'}
            </span>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          className={'mt-14 flex flex-wrap items-center justify-center gap-8'}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.8, delay: 0.9}}>
          {[
            {num: '50+', label: 'Dizajna'},
            {num: '1200+', label: 'Zadovoljnih kupaca'},
            {num: '4.9★', label: 'Ocena'},
            {num: '24h', label: 'Dostava'},
          ].map(stat => (
            <div
              key={stat.label}
              className={'text-center'}>
              <div className={'text-2xl font-bold text-white'}>{stat.num}</div>
              <div className={'text-xs text-white/50'}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <WaveDivider fill={'#0c0a09'} />
    </section>
  );
};

export default memo(Hero);
