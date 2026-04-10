'use client';
import {useCart} from '@/context/CartContext';
import {AnimatePresence, motion} from 'framer-motion';
import Link from 'next/link';

export default function KorpaPage() {
  const {items, removeItem, updateQty, totalItems, totalPrice, clearCart} = useCart();

  if (items.length === 0) {
    return (
      <div className={'flex min-h-[70vh] flex-col items-center justify-center px-4 text-center'}>
        <motion.div
          initial={{opacity: 0, scale: 0.8}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}>
          <motion.div
            className={'mb-6 text-8xl'}
            animate={{rotate: [0, -10, 10, -10, 0]}}
            transition={{duration: 2, repeat: Infinity, ease: 'easeInOut'}}>
            {'🧦'}
          </motion.div>
          <h1 className={'mb-3 text-3xl font-bold text-stone-800'}>{'Korpa je prazna'}</h1>
          <p className={'mb-8 text-stone-500'}>{'Dodaj neke šarene čarape i vrati se ovde!'}</p>
          <Link
            href={'/proizvodi'}
            className={
              'bg-primary shadow-primary/30 hover:bg-primary-dark inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-white shadow-lg transition'
            }>
            {'🌈 Istraži Kolekciju'}
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={'min-h-screen bg-stone-50 py-10'}>
      <div className={'mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'}>
        {/* Header */}
        <motion.div
          className={'mb-8 flex items-center justify-between'}
          initial={{opacity: 0, y: -16}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.4}}>
          <div>
            <h1 className={'text-3xl font-bold text-stone-900'}>{'Moja Korpa'}</h1>
            <p className={'text-stone-500'}>
              {totalItems + ' ' + (totalItems === 1 ? 'par' : 'para')}
            </p>
          </div>
          <button
            onClick={clearCart}
            className={
              'rounded-xl border border-stone-200 px-4 py-2 text-sm font-medium text-stone-500 transition hover:border-red-300 hover:bg-red-50 hover:text-red-600'
            }>
            {'Isprazni korpu'}
          </button>
        </motion.div>

        <div className={'grid gap-8 lg:grid-cols-3'}>
          {/* Items list */}
          <div className={'lg:col-span-2'}>
            <AnimatePresence>
              {items.map((item, index) => (
                <motion.div
                  key={item.product.id + '-' + item.size}
                  initial={{opacity: 0, y: 12}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, x: -40, height: 0}}
                  transition={{duration: 0.3, delay: index * 0.06}}
                  className={'mb-4 overflow-hidden rounded-2xl bg-white shadow-sm'}>
                  <div className={'flex gap-4 p-4'}>
                    {/* Image */}
                    <Link
                      href={`/proizvodi/${item.product.slug}`}
                      className={'shrink-0'}>
                      <div className={'h-24 w-24 overflow-hidden rounded-xl bg-stone-100'}>
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className={
                            'h-full w-full object-cover transition duration-300 hover:scale-105'
                          }
                        />
                      </div>
                    </Link>

                    {/* Info */}
                    <div className={'min-w-0 flex-1'}>
                      <div className={'flex items-start justify-between gap-2'}>
                        <div>
                          <Link href={`/proizvodi/${item.product.slug}`}>
                            <h3
                              className={'hover:text-primary font-bold text-stone-900 transition'}>
                              {item.product.name}
                            </h3>
                          </Link>
                          <p className={'text-sm text-stone-500'}>{item.product.tagline}</p>
                          <div className={'mt-1 flex items-center gap-2'}>
                            <span
                              className={
                                'rounded-lg bg-stone-100 px-2.5 py-0.5 text-xs font-semibold text-stone-600'
                              }>
                              {'vel. ' + item.size}
                            </span>
                            <span className={'text-xs text-stone-400'}>
                              {item.product.category}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id, item.size)}
                          className={
                            'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-stone-400 transition hover:bg-red-50 hover:text-red-500'
                          }>
                          {'✕'}
                        </button>
                      </div>

                      {/* Qty + Price */}
                      <div className={'mt-3 flex items-center justify-between'}>
                        <div
                          className={
                            'inline-flex items-center gap-0 overflow-hidden rounded-xl border border-stone-200'
                          }>
                          <button
                            onClick={() => {
                              if (item.quantity <= 1) removeItem(item.product.id, item.size);
                              else updateQty(item.product.id, item.size, item.quantity - 1);
                            }}
                            className={
                              'flex h-8 w-8 items-center justify-center font-bold text-stone-600 transition hover:bg-stone-100'
                            }>
                            {'−'}
                          </button>
                          <span
                            className={
                              'flex h-8 w-8 items-center justify-center text-sm font-bold'
                            }>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQty(item.product.id, item.size, item.quantity + 1)}
                            className={
                              'flex h-8 w-8 items-center justify-center font-bold text-stone-600 transition hover:bg-stone-100'
                            }>
                            {'+'}
                          </button>
                        </div>
                        <span className={'font-bold text-stone-900'}>
                          {(item.product.price * item.quantity).toLocaleString('sr-RS')} {' RSD'}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Continue shopping */}
            <Link
              href={'/proizvodi'}
              className={
                'hover:text-primary mt-4 inline-flex items-center gap-2 text-sm font-semibold text-stone-500 transition'
              }>
              {'← Nastavi kupovinu'}
            </Link>
          </div>

          {/* Order summary */}
          <motion.div
            className={'lg:col-span-1'}
            initial={{opacity: 0, y: 12}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.4, delay: 0.2}}>
            <div className={'sticky top-24 rounded-3xl bg-white p-6 shadow-sm'}>
              <h2 className={'mb-6 text-xl font-bold text-stone-900'}>{'Pregled Narudžbine'}</h2>

              {/* Line items summary */}
              <div className={'mb-4 space-y-2'}>
                {items.map(item => (
                  <div
                    key={item.product.id + item.size}
                    className={'flex items-center justify-between text-sm'}>
                    <span className={'text-stone-600'}>
                      {item.product.name}
                      <span className={'ml-1 text-stone-400'}>{'× ' + item.quantity}</span>
                    </span>
                    <span className={'font-semibold text-stone-800'}>
                      {(item.product.price * item.quantity).toLocaleString('sr-RS')} {'RSD'}
                    </span>
                  </div>
                ))}
              </div>

              <div className={'mb-6 space-y-3 border-t border-stone-100 pt-4'}>
                <div className={'flex justify-between text-sm text-stone-500'}>
                  <span>{'Dostava'}</span>
                  <span className={'text-fun-green font-semibold'}>{'Besplatno'}</span>
                </div>
                <div className={'flex justify-between border-t border-stone-100 pt-3'}>
                  <span className={'text-lg font-bold text-stone-900'}>{'Ukupno'}</span>
                  <div className={'text-right'}>
                    <span className={'text-primary text-2xl font-bold'}>
                      {totalPrice.toLocaleString('sr-RS')}
                    </span>
                    <span className={'ml-1 text-sm text-stone-400'}>{'RSD'}</span>
                  </div>
                </div>
              </div>

              <Link
                href={'/naruci'}
                className={
                  'bg-primary shadow-primary/30 hover:bg-primary-dark block w-full rounded-2xl py-4 text-center text-base font-bold text-white shadow-lg transition'
                }>
                {'Naruči Sada →'}
              </Link>

              {/* Trust */}
              <div className={'mt-4 space-y-2 text-center text-xs text-stone-400'}>
                <p>{'🔒 Sigurna kupovina | 📦 Dostava 24–48h'}</p>
                <p>{'↩️ Besplatna zamena veličine'}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
