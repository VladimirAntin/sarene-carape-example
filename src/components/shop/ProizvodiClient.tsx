'use client';
import {memo, useMemo, useState} from 'react';
import {products, categories} from '@components/data/products';
import {motion, AnimatePresence} from 'framer-motion';
import Link from 'next/link';
import {useCart} from '@/context/CartContext';
import {cn} from '@utils/CN';

const ProizvodiClient = () => {
  const [activeCategory, setActiveCategory] = useState('Sve');
  const [search, setSearch] = useState('');
  const {addItem} = useCart();
  const [added, setAdded] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      products.filter(p => {
        const matchCat = activeCategory === 'Sve' || p.category === activeCategory;
        const matchQ =
          !search ||
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.tagline.toLowerCase().includes(search.toLowerCase()) ||
          p.category.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchQ;
      }),
    [activeCategory, search],
  );

  const handleAdd = (product: Product) => {
    addItem({product, quantity: 1, size: product.sizes[0]});
    setAdded(product.id);
    setTimeout(() => setAdded(null), 1800);
  };

  return (
    <div className={'min-h-screen bg-stone-50'}>
      {/* Page header */}
      <div
        className={'relative overflow-hidden py-24 text-center'}
        style={{background: 'linear-gradient(135deg, #4a0030 0%, #3b0066 50%, #1a0050 100%)'}}>
        {/* Floating decorations */}
        {['🧦', '🌈', '🎨', '✨', '🎀', '🧶'].map((emoji, i) => (
          <motion.span
            key={i}
            className={'pointer-events-none absolute select-none text-2xl opacity-15'}
            style={{left: `${8 + i * 16}%`, top: `${20 + (i % 2) * 40}%`}}
            animate={{y: [0, -15, 0], rotate: [0, 10, -10, 0]}}
            transition={{duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3}}>
            {emoji}
          </motion.span>
        ))}
        <motion.div
          className={'relative z-10'}
          initial={{opacity: 0, y: 24}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}>
          <span className={'mb-3 inline-block text-sm font-semibold tracking-widest text-pink-300 uppercase'}>
            {'Sve kolekcije'}
          </span>
          <h1 className={'mb-4 text-4xl font-light text-white sm:text-6xl'}>{'Naše Čarape'}</h1>
          <p className={'mx-auto max-w-lg text-white/60'}>
            {'Pronađi savršen par — ' + products.length + ' dizajna za svaki stil i raspoloženje'}
          </p>

          {/* Search */}
          <div className={'mx-auto mt-8 max-w-md px-4'}>
            <div className={'relative'}>
              <span className={'absolute top-1/2 left-4 -translate-y-1/2 text-white/40'}>{'🔍'}</span>
              <input
                type={'text'}
                placeholder={'Pretraži čarape...'}
                value={search}
                onChange={e => setSearch(e.target.value)}
                className={'w-full rounded-2xl border border-white/20 bg-white/10 py-3 pl-11 pr-4 text-white placeholder-white/40 backdrop-blur-sm transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Category filters */}
      <div className={'sticky top-16 z-30 border-b border-stone-200 bg-white/95 backdrop-blur-sm'}>
        <div className={'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>
          <div className={'flex gap-2 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200',
                  cat === activeCategory
                    ? 'bg-primary text-white shadow-md shadow-primary/30'
                    : 'border border-stone-200 bg-white text-stone-600 hover:border-primary/40 hover:text-primary',
                )}>
                {cat}
                {cat !== 'Sve' && (
                  <span className={'ml-1.5 text-xs opacity-60'}>
                    {'(' + products.filter(p => p.category === cat).length + ')'}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className={'mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8'}>
        <AnimatePresence mode={'wait'}>
          {filtered.length === 0 ? (
            <motion.div
              key={'empty'}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              className={'py-24 text-center'}>
              <div className={'mb-4 text-5xl'}>{'🧦'}</div>
              <h3 className={'mb-2 text-xl font-semibold text-stone-700'}>{'Nema rezultata'}</h3>
              <p className={'text-stone-500'}>{'Pokušaj sa drugačijim pojmom ili kategorijom'}</p>
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory + search}
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0}}
              transition={{duration: 0.3}}
              className={'grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4'}>
              {filtered.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.4, delay: index * 0.05}}
                  className={'group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg'}>

                  {/* Image */}
                  <Link href={`/proizvodi/${product.slug}`} className={'relative block overflow-hidden aspect-square'}>
                    <img
                      src={product.image}
                      alt={product.name}
                      loading={'lazy'}
                      className={'h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'}
                    />
                    {product.badge && (
                      <span className={'absolute top-2 left-2 rounded-full bg-primary px-2.5 py-1 text-[11px] font-bold text-white shadow'}>
                        {product.badge}
                      </span>
                    )}
                    {product.originalPrice && (
                      <span className={'absolute top-2 right-2 rounded-full bg-fun-yellow px-2 py-0.5 text-[10px] font-black text-stone-900'}>
                        {'-' + Math.round((1 - product.price / product.originalPrice) * 100) + '%'}
                      </span>
                    )}
                  </Link>

                  {/* Info */}
                  <div className={'p-4'}>
                    <div className={'mb-1 flex items-center justify-between'}>
                      <span className={'text-[10px] font-semibold tracking-widest text-stone-400 uppercase'}>{product.category}</span>
                      <span className={'text-[11px] text-stone-400'}>{'★ ' + product.rating}</span>
                    </div>
                    <Link href={`/proizvodi/${product.slug}`}>
                      <h3 className={'mb-1 text-sm font-bold text-stone-900 transition hover:text-primary sm:text-base'}>
                        {product.name}
                      </h3>
                    </Link>
                    <p className={'mb-3 hidden text-xs text-stone-500 line-clamp-1 sm:block'}>{product.tagline}</p>

                    <div className={'flex items-center justify-between gap-2'}>
                      <div>
                        <span className={'font-bold text-stone-900'}>{product.price.toLocaleString('sr-RS')}</span>
                        <span className={'ml-0.5 text-xs text-stone-400'}>{'rsd'}</span>
                      </div>
                      <AnimatePresence mode={'wait'}>
                        <motion.button
                          key={added === product.id ? 'ok' : 'add'}
                          initial={{scale: 0.85, opacity: 0}}
                          animate={{scale: 1, opacity: 1}}
                          exit={{scale: 0.85, opacity: 0}}
                          transition={{duration: 0.18}}
                          onClick={() => handleAdd(product)}
                          className={cn(
                            'shrink-0 rounded-xl px-3 py-2 text-xs font-bold transition-colors duration-200',
                            added === product.id
                              ? 'bg-fun-green text-white'
                              : 'bg-primary text-white hover:bg-primary-dark',
                          )}>
                          {added === product.id ? '✓' : '+'}
                        </motion.button>
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results count */}
        <p className={'mt-8 text-center text-sm text-stone-400'}>
          {filtered.length === products.length
            ? 'Svi proizvodi (' + products.length + ')'
            : filtered.length + ' od ' + products.length + ' proizvoda'}
        </p>
      </div>
    </div>
  );
};

export default memo(ProizvodiClient);

