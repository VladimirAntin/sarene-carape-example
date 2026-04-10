'use client';
import {memo} from 'react';
import {motion} from 'framer-motion';
import WaveDivider from '@/components/WaveDivider';
import Link from 'next/link';

const PERKS = [
  {emoji: '🧦', title: 'Ručno birani dizajni', desc: 'Svaki dizajn prolazi kroz pažljivu selekciju — samo najlepši stižu do tebe.'},
  {emoji: '🌈', title: '50+ aktivnih dizajna', desc: 'Kolekcija se stalno obnavlja — uvek ima nešto novo za otkriti.'},
  {emoji: '📦', title: 'Brza dostava 24–48h', desc: 'Naručiš danas, stigne sutra ili prekosutra. Dostava širom Srbije.'},
  {emoji: '🎁', title: 'Savršen poklon', desc: 'Lepo upakovano u poklon kutiji — bez doplate za sva naručivanja.'},
  {emoji: '♻️', title: 'Kvalitetni materijali', desc: '80% češljani pamuk, 20% elastan. Dugtrajne, mekane, ne blijede.'},
  {emoji: '💌', title: 'Zadovoljstvo garantovano', desc: 'Nije odgovaralo? Besplatna zamena veličine ili povrat para.'},
];

const AboutLoznica = () => (
  <section id={'onama'} className={'relative bg-white pb-40 pt-20 lg:pb-52 lg:pt-28'}>
    <div className={'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>

      <div className={'grid gap-16 lg:grid-cols-2 lg:items-center'}>

        {/* Left: map / visual */}
        <motion.div
          className={'relative'}
          initial={{opacity: 0, x: -30}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true, margin: '-50px'}}
          transition={{duration: 0.6, ease: 'easeOut'}}>

          {/* Map container */}
          <div className={'relative overflow-hidden rounded-3xl shadow-2xl'}>
            <iframe
              title={'Loznica lokacija'}
              src={'https://www.openstreetmap.org/export/embed.html?bbox=19.1%2C44.5%2C19.3%2C44.6&layer=mapnik&marker=44.535%2C19.221'}
              className={'h-80 w-full border-0 lg:h-96'}
              loading={'lazy'}
            />
          </div>

          {/* Floating card */}
          <motion.div
            className={'absolute -bottom-6 -right-4 rounded-2xl bg-primary p-5 shadow-xl shadow-primary/30 lg:-right-8'}
            initial={{scale: 0.8, opacity: 0}}
            whileInView={{scale: 1, opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: 0.3}}>
            <div className={'text-3xl mb-1'}>{'📍'}</div>
            <div className={'text-sm font-bold text-white'}>{'Loznica'}</div>
            <div className={'text-xs text-white/70'}>{'Mačvanski okrug, Srbija'}</div>
          </motion.div>

          {/* Rainbow stripe decoration */}
          <div className={'absolute -top-3 -left-3 flex gap-1.5'}>
            {['#e91e63','#ff6b35','#ffd600','#00c853','#2979ff','#9c27b0'].map((c, i) => (
              <div key={i} className={'h-12 w-2 rounded-full'} style={{backgroundColor: c}} />
            ))}
          </div>
        </motion.div>

        {/* Right: text */}
        <motion.div
          initial={{opacity: 0, x: 30}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true, margin: '-50px'}}
          transition={{duration: 0.6, ease: 'easeOut'}}>
          <span className={'mb-4 block text-sm font-semibold tracking-widest text-primary uppercase'}>
            {'Naša priča'}
          </span>
          <h2 className={'mb-5 text-4xl font-light text-stone-900 sm:text-5xl'}>
            {'Iz Loznice,'}
            <br />
            {'s ljubavlju 🧦'}
          </h2>
          <p className={'mb-5 text-lg leading-relaxed text-stone-600'}>
            {'Šarene Čarape su nastale iz jednostavne ideje — da svaki dan bude malo vedriji. Pokrenuli smo shop u Loznici sa željom da donesemo radost kroz male, šarene detalje.'}
          </p>
          <p className={'mb-8 leading-relaxed text-stone-500'}>
            {'Svaki dizajn pažljivo biramo, svaki par pakujemo s ljubavlju. Dostavljamo širom Srbije, a naši kupci nam govore da im Šarene Čarape izmame osmeh svaki put kad se obuju.'}
          </p>

          <Link
            href={'/proizvodi'}
            className={'inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-white shadow-md shadow-primary/30 transition hover:bg-primary-dark'}>
            {'Istraži Shop →'}
          </Link>
        </motion.div>
      </div>

      {/* Perks grid */}
      <div className={'mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'}>
        {PERKS.map((perk, i) => (
          <motion.div
            key={i}
            className={'rounded-2xl border border-stone-100 bg-stone-50 p-6 transition hover:border-pink-200 hover:bg-pink-50/50'}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-30px'}}
            transition={{duration: 0.4, delay: i * 0.07}}>
            <div className={'mb-3 text-3xl'}>{perk.emoji}</div>
            <h3 className={'mb-2 font-bold text-stone-900'}>{perk.title}</h3>
            <p className={'text-sm leading-relaxed text-stone-500'}>{perk.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
    <WaveDivider fill={'#1c1917'} />
  </section>
);

export default memo(AboutLoznica);
