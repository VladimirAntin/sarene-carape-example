'use client';
import {memo, useState} from 'react';
import Link from 'next/link';
import {motion, AnimatePresence} from 'framer-motion';
import {useCart} from '@/context/CartContext';
import {cn} from '@utils/CN';
import {products} from '@components/data/products';

type Props = {product: Product};

const StarRating = ({rating, reviews}: {rating: number; reviews: number}) => (
  <div className={'flex items-center gap-2'}>
    <div className={'flex gap-0.5'}>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} className={cn('text-lg', i <= Math.round(rating) ? 'text-fun-yellow' : 'text-stone-200')}>
          {'★'}
        </span>
      ))}
    </div>
    <span className={'text-sm font-semibold text-stone-700'}>{rating}</span>
    <span className={'text-sm text-stone-400'}>{'(' + reviews + ' recenzija)'}</span>
  </div>
);

const ProductDetail = ({product}: Props) => {
  const {addItem, totalItems} = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    addItem({product, quantity: qty, size: selectedSize});
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className={'min-h-screen bg-white'}>
      {/* Breadcrumb */}
      <div className={'border-b border-stone-100 bg-stone-50'}>
        <div className={'mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8'}>
          <nav className={'flex items-center gap-2 text-sm text-stone-500'}>
            <Link href={'/'} className={'hover:text-primary transition'}>{'Početna'}</Link>
            <span>{'/'}</span>
            <Link href={'/proizvodi'} className={'hover:text-primary transition'}>{'Proizvodi'}</Link>
            <span>{'/'}</span>
            <span className={'text-stone-800 font-medium'}>{product.name}</span>
          </nav>
        </div>
      </div>

      <div className={'mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8'}>
        <div className={'grid gap-12 lg:grid-cols-2'}>

          {/* Images */}
          <motion.div
            initial={{opacity: 0, x: -20}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5}}>
            {/* Main image */}
            <div className={'relative mb-4 overflow-hidden rounded-3xl bg-stone-100 aspect-square'}>
              <AnimatePresence mode={'wait'}>
                <motion.img
                  key={activeImg}
                  src={product.images[activeImg] ?? product.image}
                  alt={product.name}
                  initial={{opacity: 0, scale: 1.04}}
                  animate={{opacity: 1, scale: 1}}
                  exit={{opacity: 0}}
                  transition={{duration: 0.35}}
                  className={'h-full w-full object-cover'}
                />
              </AnimatePresence>
              {product.badge && (
                <span className={'absolute top-4 left-4 rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-white shadow-lg'}>
                  {product.badge}
                </span>
              )}
              {product.originalPrice && (
                <span className={'absolute top-4 right-4 rounded-full bg-fun-yellow px-3 py-1.5 text-sm font-black text-stone-900'}>
                  {'-' + Math.round((1 - product.price / product.originalPrice) * 100) + '%'}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className={'flex gap-3'}>
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={cn(
                      'h-20 w-20 overflow-hidden rounded-xl border-2 transition',
                      i === activeImg ? 'border-primary' : 'border-stone-200 hover:border-stone-400',
                    )}>
                    <img src={img} alt={''} className={'h-full w-full object-cover'} />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{opacity: 0, x: 20}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5}}>

            {/* Category */}
            <span className={'mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-widest text-primary uppercase'}>
              {product.category}
            </span>

            <h1 className={'mb-2 text-4xl font-bold text-stone-900'}>{product.name}</h1>
            <p className={'mb-4 text-lg text-stone-500'}>{product.tagline}</p>

            <StarRating rating={product.rating} reviews={product.reviews} />

            {/* Price */}
            <div className={'my-6 flex items-baseline gap-3'}>
              <span className={'text-4xl font-bold text-stone-900'}>{product.price.toLocaleString('sr-RS')}</span>
              <span className={'text-lg text-stone-400'}>{'RSD'}</span>
              {product.originalPrice && (
                <span className={'text-xl text-stone-400 line-through'}>
                  {product.originalPrice.toLocaleString('sr-RS')} {'RSD'}
                </span>
              )}
            </div>

            {/* Description */}
            <p className={'mb-8 leading-relaxed text-stone-600'}>{product.description}</p>

            {/* Size selector */}
            <div className={'mb-6'}>
              <label className={'mb-3 block text-sm font-semibold tracking-widest text-stone-700 uppercase'}>
                {'Veličina'}
                {selectedSize && <span className={'ml-2 text-primary'}>{' — ' + selectedSize}</span>}
              </label>
              <div className={'flex flex-wrap gap-2'}>
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      'rounded-xl border-2 px-5 py-2.5 text-sm font-semibold transition-all duration-150',
                      size === selectedSize
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-stone-200 text-stone-700 hover:border-primary/50',
                    )}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className={'mb-8'}>
              <label className={'mb-3 block text-sm font-semibold tracking-widest text-stone-700 uppercase'}>
                {'Količina'}
              </label>
              <div className={'inline-flex items-center gap-0 overflow-hidden rounded-xl border-2 border-stone-200'}>
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className={'flex h-12 w-12 items-center justify-center text-xl font-bold text-stone-600 transition hover:bg-stone-100'}>
                  {'−'}
                </button>
                <span className={'flex h-12 w-12 items-center justify-center text-lg font-bold text-stone-900'}>
                  {qty}
                </span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className={'flex h-12 w-12 items-center justify-center text-xl font-bold text-stone-600 transition hover:bg-stone-100'}>
                  {'+'}
                </button>
              </div>
            </div>

            {/* CTA buttons */}
            <div className={'flex flex-col gap-3 sm:flex-row'}>
              <AnimatePresence mode={'wait'}>
                <motion.button
                  key={added ? 'added' : 'add'}
                  initial={{scale: 0.95, opacity: 0}}
                  animate={{scale: 1, opacity: 1}}
                  exit={{scale: 0.95, opacity: 0}}
                  transition={{duration: 0.2}}
                  onClick={handleAddToCart}
                  className={cn(
                    'flex flex-1 items-center justify-center gap-2 rounded-2xl py-4 text-base font-bold shadow-lg transition',
                    added
                      ? 'bg-fun-green text-white shadow-green-200'
                      : 'bg-primary text-white shadow-primary/30 hover:bg-primary-dark',
                  )}>
                  {added ? '✓ Dodato u korpu!' : '🛒 Dodaj u korpu'}
                </motion.button>
              </AnimatePresence>

              <Link
                href={'/korpa'}
                className={'flex items-center justify-center gap-2 rounded-2xl border-2 border-stone-200 px-8 py-4 font-bold text-stone-700 transition hover:border-primary hover:text-primary'}>
                {'Korpa (' + totalItems + ')'}
              </Link>
            </div>

            {/* Trust badges */}
            <div className={'mt-8 grid grid-cols-3 gap-3'}>
              {[
                {emoji: '📦', text: 'Dostava 24–48h'},
                {emoji: '↩️', text: 'Besplatna zamena'},
                {emoji: '🔒', text: 'Sigurna kupovina'},
              ].map((badge, i) => (
                <div key={i} className={'rounded-xl border border-stone-100 bg-stone-50 p-3 text-center'}>
                  <div className={'mb-1 text-xl'}>{badge.emoji}</div>
                  <div className={'text-[11px] font-semibold text-stone-500'}>{badge.text}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className={'mt-20'}>
            <h2 className={'mb-8 text-2xl font-bold text-stone-900'}>{'Slični Proizvodi'}</h2>
            <div className={'grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6'}>
              {related.map((rp, i) => (
                <motion.div
                  key={rp.id}
                  initial={{opacity: 0, y: 16}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{duration: 0.4, delay: i * 0.08}}
                  className={'group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow'}>
                  <Link href={`/proizvodi/${rp.slug}`} className={'block overflow-hidden aspect-square'}>
                    <img
                      src={rp.image}
                      alt={rp.name}
                      loading={'lazy'}
                      className={'h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'}
                    />
                  </Link>
                  <div className={'p-4'}>
                    <Link href={`/proizvodi/${rp.slug}`}>
                      <h3 className={'font-bold text-stone-900 hover:text-primary transition'}>{rp.name}</h3>
                    </Link>
                    <p className={'text-sm font-bold text-stone-700 mt-1'}>{rp.price.toLocaleString('sr-RS')} {'RSD'}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(ProductDetail);

