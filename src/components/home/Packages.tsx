'use client';
import {memo, useState} from 'react';
import Link from 'next/link';
import {cn} from '@utils/CN';
import {products} from '@components/data/products';
import {motion, AnimatePresence} from 'framer-motion';
import WaveDivider from '@/components/WaveDivider';
import {useCart} from '@/context/CartContext';

const featured = products.filter(p => p.featured);

const FeaturedProducts = () => {
  const {addItem} = useCart();
  const [added, setAdded] = useState<string | null>(null);

  const handleAddToCart = (product: Product) => {
    addItem({product, quantity: 1, size: product.sizes[0]});
    setAdded(product.id);
    setTimeout(() => setAdded(null), 1800);
  };

  return (
    <section id={'istaknuti'} className={'relative bg-stone-50 pb-40 pt-20 lg:pb-52 lg:pt-28'}>
      <div className={'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>

        {/* Header */}
        <motion.div
          className={'mb-12 text-center'}
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-50px'}}
          transition={{duration: 0.5, ease: 'easeOut'}}>
          <span className={'mb-3 inline-block text-sm font-semibold tracking-widest text-primary uppercase'}>
            {'Istaknuti Proizvodi'}
          </span>
          <h2 className={'text-4xl text-stone-900 sm:text-5xl'}>{'Naši Bestselersi'}</h2>
          <p className={'mt-3 text-stone-500'}>{'Najomiljeniji parovi naših kupaca'}</p>
        </motion.div>

        {/* Products grid */}
        <div className={'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'}>
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{opacity: 0, y: 24}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-40px'}}
              transition={{duration: 0.45, ease: 'easeOut', delay: index * 0.08}}
              className={'group overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-shadow duration-300'}>

              {/* Image */}
              <Link href={`/proizvodi/${product.slug}`} className={'relative block overflow-hidden aspect-square'}>
                <img
                  src={product.image}
                  alt={product.name}
                  loading={'lazy'}
                  className={'h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'}
                />
                {product.badge && (
                  <span className={'absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow-md'}>
                    {product.badge}
                  </span>
                )}
                {product.originalPrice && (
                  <span className={'absolute top-3 right-3 rounded-full bg-fun-yellow px-2 py-1 text-[10px] font-black text-stone-900'}>
                    {'-' + Math.round((1 - product.price / product.originalPrice) * 100) + '%'}
                  </span>
                )}
              </Link>

              {/* Content */}
              <div className={'p-5'}>
                <div className={'mb-1 flex items-center justify-between'}>
                  <span className={'text-xs font-semibold tracking-widest text-stone-400 uppercase'}>{product.category}</span>
                  <div className={'flex items-center gap-1 text-xs text-stone-500'}>
                    <span className={'text-fun-yellow'}>{'★'}</span>
                    <span>{product.rating}</span>
                    <span className={'text-stone-400'}>{'(' + product.reviews + ')'}</span>
                  </div>
                </div>
                <Link href={`/proizvodi/${product.slug}`}>
                  <h3 className={'mb-1 text-lg font-bold text-stone-900 hover:text-primary transition-colors'}>
                    {product.name}
                  </h3>
                </Link>
                <p className={'mb-4 text-sm text-stone-500 line-clamp-2'}>{product.tagline}</p>

                {/* Sizes */}
                <div className={'mb-4 flex flex-wrap gap-1'}>
                  {product.sizes.map(size => (
                    <span key={size} className={'rounded-lg border border-stone-200 px-2 py-0.5 text-[11px] font-medium text-stone-600'}>
                      {size}
                    </span>
                  ))}
                </div>

                {/* Price + cart */}
                <div className={'flex items-center justify-between'}>
                  <div>
                    <span className={'text-2xl font-bold text-stone-900'}>{product.price.toLocaleString('sr-RS')}</span>
                    <span className={'ml-1 text-sm text-stone-400'}>{'RSD'}</span>
                    {product.originalPrice && (
                      <span className={'ml-2 text-sm text-stone-400 line-through'}>
                        {product.originalPrice.toLocaleString('sr-RS')}
                      </span>
                    )}
                  </div>
                  <AnimatePresence mode={'wait'}>
                    <motion.button
                      key={added === product.id ? 'added' : 'add'}
                      initial={{scale: 0.9, opacity: 0}}
                      animate={{scale: 1, opacity: 1}}
                      exit={{scale: 0.9, opacity: 0}}
                      transition={{duration: 0.2}}
                      onClick={() => handleAddToCart(product)}
                      className={cn(
                        'flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200',
                        added === product.id
                          ? 'bg-fun-green text-white'
                          : 'bg-primary text-white hover:bg-primary-dark',
                      )}>
                      {added === product.id ? '✓ Dodato' : '+ Korpa'}
                    </motion.button>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          className={'mt-12 text-center'}
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5}}>
          <Link
            href={'/proizvodi'}
            className={'inline-flex items-center gap-2 rounded-full border-2 border-stone-200 bg-white px-8 py-4 font-semibold text-stone-700 transition hover:border-primary hover:text-primary'}>
            {'Pogledaj sve čarape'}
            <span>{'→'}</span>
          </Link>
        </motion.div>
      </div>
      <WaveDivider fill={'#1c1917'} />
    </section>
  );
};

export default memo(FeaturedProducts);
