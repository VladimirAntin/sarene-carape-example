'use client';
import {useCart} from '@/context/CartContext';
import {Controller, useForm} from 'react-hook-form';
import {motion} from 'framer-motion';
import Link from 'next/link';
import {useState} from 'react';
import SendIcon from '@/icons/SendIcon';

type OrderData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  note: string;
  paymentMethod: 'pouzecem' | 'kartica';
};

const DELIVERY_OPTIONS = [
  {id: 'pouzecem', label: 'Pouzećem (plaćanje pri dostavi)', emoji: '💵'},
  {id: 'kartica', label: 'Karticom online', emoji: '💳'},
];

const field =
  'w-full rounded-xl border-2 border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder-stone-400 transition focus:border-primary focus:outline-none';

export default function NaruciPage() {
  const {items, totalPrice, totalItems, clearCart} = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber] = useState(() => 'SC-' + Math.floor(10000 + Math.random() * 90000));

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<OrderData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      zipCode: '',
      note: '',
      paymentMethod: 'pouzecem',
    },
  });

  const onSubmit = (data: OrderData) => {
    console.log('Narudžbina:', {order: data, items, totalPrice});
    clearCart();
    setOrderPlaced(true);
  };

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className={'flex min-h-[60vh] flex-col items-center justify-center px-4 text-center'}>
        <div className={'mb-4 text-6xl'}>{'🧦'}</div>
        <h2 className={'mb-3 text-2xl font-bold text-stone-800'}>{'Korpa je prazna'}</h2>
        <p className={'mb-6 text-stone-500'}>{'Dodaj neke čarape pre naručivanja'}</p>
        <Link
          href={'/proizvodi'}
          className={
            'bg-primary hover:bg-primary-dark rounded-full px-6 py-3 font-bold text-white transition'
          }>
          {'Istraži Kolekciju'}
        </Link>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div
        className={'flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center'}>
        <motion.div
          initial={{opacity: 0, scale: 0.7}}
          animate={{opacity: 1, scale: 1}}
          transition={{type: 'spring', stiffness: 200, damping: 20}}>
          <motion.div
            className={'mb-6 text-8xl'}
            animate={{rotate: [0, -15, 15, -10, 10, 0]}}
            transition={{duration: 1, delay: 0.3}}>
            {'🎉'}
          </motion.div>
          <h1 className={'mb-3 text-4xl font-bold text-stone-900'}>{'Narudžbina primljena!'}</h1>
          <p className={'mb-2 text-xl text-stone-600'}>
            {'Hvala ti na poverenju, Šarena Čarapa familio! 🧦'}
          </p>
          <p className={'mb-2 text-stone-500'}>
            {'Broj narudžbine: '}
            <span className={'text-primary font-bold'}>{orderNumber}</span>
          </p>
          <p className={'mb-8 text-stone-500'}>
            {'Poslaćemo ti potvrdu na email. Čarape stižu za 24–48h.'}
          </p>
          <div className={'flex flex-col items-center gap-3 sm:flex-row sm:justify-center'}>
            <Link
              href={'/proizvodi'}
              className={
                'bg-primary shadow-primary/30 hover:bg-primary-dark rounded-full px-8 py-4 font-bold text-white shadow-lg transition'
              }>
              {'Naruči Još Čarapa'}
            </Link>
            <Link
              href={'/'}
              className={
                'hover:border-primary hover:text-primary rounded-full border-2 border-stone-200 px-8 py-4 font-bold text-stone-700 transition'
              }>
              {'Početna'}
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={'min-h-screen bg-stone-50 py-10'}>
      <div className={'mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'}>
        {/* Header */}
        <motion.div
          className={'mb-8'}
          initial={{opacity: 0, y: -16}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.4}}>
          <Link
            href={'/korpa'}
            className={
              'hover:text-primary mb-4 inline-flex items-center gap-1 text-sm text-stone-500 transition'
            }>
            {'← Nazad na korpu'}
          </Link>
          <h1 className={'text-3xl font-bold text-stone-900'}>{'Naruči'}</h1>
          <p className={'text-stone-500'}>
            {totalItems + ' ' + (totalItems === 1 ? 'par' : 'para') + ' · Besplatna dostava'}
          </p>
        </motion.div>

        <div className={'grid gap-8 lg:grid-cols-3'}>
          {/* Form */}
          <motion.div
            className={'lg:col-span-2'}
            initial={{opacity: 0, y: 12}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.4}}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={'space-y-6'}>
              {/* Personal info */}
              <div className={'rounded-3xl bg-white p-6 shadow-sm'}>
                <h2 className={'mb-5 flex items-center gap-2 text-xl font-bold text-stone-900'}>
                  <span
                    className={
                      'bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-black'
                    }>
                    {'1'}
                  </span>
                  {'Lični Podaci'}
                </h2>
                <div className={'grid gap-4 sm:grid-cols-2'}>
                  <Controller
                    name={'firstName'}
                    control={control}
                    rules={{required: 'Obavezno polje'}}
                    render={({field: f}) => (
                      <div>
                        <label
                          className={
                            'mb-1 block text-xs font-semibold tracking-wide text-stone-600 uppercase'
                          }>
                          {'Ime *'}
                        </label>
                        <input
                          {...f}
                          placeholder={'Marko'}
                          className={field}
                        />
                        {errors.firstName && (
                          <p className={'mt-1 text-xs text-red-500'}>{errors.firstName.message}</p>
                        )}
                      </div>
                    )}
                  />
                  <Controller
                    name={'lastName'}
                    control={control}
                    rules={{required: 'Obavezno polje'}}
                    render={({field: f}) => (
                      <div>
                        <label
                          className={
                            'mb-1 block text-xs font-semibold tracking-wide text-stone-600 uppercase'
                          }>
                          {'Prezime *'}
                        </label>
                        <input
                          {...f}
                          placeholder={'Petrović'}
                          className={field}
                        />
                        {errors.lastName && (
                          <p className={'mt-1 text-xs text-red-500'}>{errors.lastName.message}</p>
                        )}
                      </div>
                    )}
                  />
                  <Controller
                    name={'email'}
                    control={control}
                    rules={{
                      required: 'Obavezno polje',
                      pattern: {value: /^[^@]+@[^@]+\.[^@]+$/, message: 'Neispravan email'},
                    }}
                    render={({field: f}) => (
                      <div>
                        <label
                          className={
                            'mb-1 block text-xs font-semibold tracking-wide text-stone-600 uppercase'
                          }>
                          {'Email *'}
                        </label>
                        <input
                          {...f}
                          type={'email'}
                          placeholder={'marko@email.com'}
                          className={field}
                        />
                        {errors.email && (
                          <p className={'mt-1 text-xs text-red-500'}>{errors.email.message}</p>
                        )}
                      </div>
                    )}
                  />
                  <Controller
                    name={'phone'}
                    control={control}
                    rules={{required: 'Obavezno polje'}}
                    render={({field: f}) => (
                      <div>
                        <label
                          className={
                            'mb-1 block text-xs font-semibold tracking-wide text-stone-600 uppercase'
                          }>
                          {'Telefon *'}
                        </label>
                        <input
                          {...f}
                          type={'tel'}
                          placeholder={'+381 65 358 0793'}
                          className={field}
                        />
                        {errors.phone && (
                          <p className={'mt-1 text-xs text-red-500'}>{errors.phone.message}</p>
                        )}
                      </div>
                    )}
                  />
                </div>
              </div>

              {/* Delivery address */}
              <div className={'rounded-3xl bg-white p-6 shadow-sm'}>
                <h2 className={'mb-5 flex items-center gap-2 text-xl font-bold text-stone-900'}>
                  <span
                    className={
                      'bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-black'
                    }>
                    {'2'}
                  </span>
                  {'Adresa Dostave'}
                </h2>
                <div className={'grid gap-4'}>
                  <Controller
                    name={'address'}
                    control={control}
                    rules={{required: 'Obavezno polje'}}
                    render={({field: f}) => (
                      <div>
                        <label
                          className={
                            'mb-1 block text-xs font-semibold tracking-wide text-stone-600 uppercase'
                          }>
                          {'Ulica i broj *'}
                        </label>
                        <input
                          {...f}
                          placeholder={'Ulica Pere Perovića 12'}
                          className={field}
                        />
                        {errors.address && (
                          <p className={'mt-1 text-xs text-red-500'}>{errors.address.message}</p>
                        )}
                      </div>
                    )}
                  />
                  <div className={'grid gap-4 sm:grid-cols-2'}>
                    <Controller
                      name={'city'}
                      control={control}
                      rules={{required: 'Obavezno polje'}}
                      render={({field: f}) => (
                        <div>
                          <label
                            className={
                              'mb-1 block text-xs font-semibold tracking-wide text-stone-600 uppercase'
                            }>
                            {'Grad *'}
                          </label>
                          <input
                            {...f}
                            placeholder={'Beograd'}
                            className={field}
                          />
                          {errors.city && (
                            <p className={'mt-1 text-xs text-red-500'}>{errors.city.message}</p>
                          )}
                        </div>
                      )}
                    />
                    <Controller
                      name={'zipCode'}
                      control={control}
                      render={({field: f}) => (
                        <div>
                          <label
                            className={
                              'mb-1 block text-xs font-semibold tracking-wide text-stone-600 uppercase'
                            }>
                            {'Poštanski broj'}
                          </label>
                          <input
                            {...f}
                            placeholder={'11000'}
                            className={field}
                          />
                        </div>
                      )}
                    />
                  </div>
                  <Controller
                    name={'note'}
                    control={control}
                    render={({field: f}) => (
                      <div>
                        <label
                          className={
                            'mb-1 block text-xs font-semibold tracking-wide text-stone-600 uppercase'
                          }>
                          {'Napomena (opciono)'}
                        </label>
                        <textarea
                          {...f}
                          rows={3}
                          placeholder={'Posebne napomene za dostavu...'}
                          className={field + ' resize-none'}
                        />
                      </div>
                    )}
                  />
                </div>
              </div>

              {/* Payment */}
              <div className={'rounded-3xl bg-white p-6 shadow-sm'}>
                <h2 className={'mb-5 flex items-center gap-2 text-xl font-bold text-stone-900'}>
                  <span
                    className={
                      'bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-black'
                    }>
                    {'3'}
                  </span>
                  {'Način Plaćanja'}
                </h2>
                <Controller
                  name={'paymentMethod'}
                  control={control}
                  render={({field: f}) => (
                    <div className={'space-y-3'}>
                      {DELIVERY_OPTIONS.map(opt => (
                        <label
                          key={opt.id}
                          className={`flex cursor-pointer items-center gap-4 rounded-2xl border-2 p-4 transition ${
                            f.value === opt.id
                              ? 'border-primary bg-primary/5'
                              : 'border-stone-200 hover:border-stone-300'
                          }`}>
                          <input
                            type={'radio'}
                            value={opt.id}
                            checked={f.value === opt.id}
                            onChange={() => f.onChange(opt.id)}
                            className={'accent-primary'}
                          />
                          <span className={'text-xl'}>{opt.emoji}</span>
                          <span className={'font-semibold text-stone-800'}>{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  )}
                />
              </div>

              {/* Submit */}
              <button
                type={'submit'}
                className={
                  'group bg-primary shadow-primary/30 hover:bg-primary-dark flex w-full items-center justify-center gap-2 rounded-2xl py-5 text-lg font-bold text-white shadow-xl transition'
                }>
                {'Potvrdi Narudžbinu 🧦'}
                <SendIcon
                  className={'transition group-hover:translate-x-1'}
                  height={20}
                  width={20}
                />
              </button>
            </form>
          </motion.div>

          {/* Order summary */}
          <motion.div
            className={'lg:col-span-1'}
            initial={{opacity: 0, y: 12}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.4, delay: 0.15}}>
            <div className={'sticky top-24 rounded-3xl bg-white p-6 shadow-sm'}>
              <h2 className={'mb-5 text-xl font-bold text-stone-900'}>{'Tvoja Narudžbina'}</h2>

              <div className={'mb-4 space-y-4'}>
                {items.map(item => (
                  <div
                    key={item.product.id + item.size}
                    className={'flex items-center gap-3'}>
                    <div className={'h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-stone-100'}>
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className={'h-full w-full object-cover'}
                      />
                    </div>
                    <div className={'min-w-0 flex-1'}>
                      <p className={'truncate text-sm font-bold text-stone-800'}>
                        {item.product.name}
                      </p>
                      <p className={'text-xs text-stone-500'}>
                        {'vel. ' + item.size + ' · ' + item.quantity + '×'}
                      </p>
                    </div>
                    <span className={'shrink-0 text-sm font-bold text-stone-800'}>
                      {(item.product.price * item.quantity).toLocaleString('sr-RS')}
                    </span>
                  </div>
                ))}
              </div>

              <div className={'space-y-2 border-t border-stone-100 pt-4'}>
                <div className={'flex justify-between text-sm text-stone-500'}>
                  <span>{'Dostava'}</span>
                  <span className={'text-fun-green font-semibold'}>{'Besplatno'}</span>
                </div>
                <div className={'flex justify-between pt-2'}>
                  <span className={'text-lg font-bold text-stone-900'}>{'Ukupno'}</span>
                  <div>
                    <span className={'text-primary text-2xl font-bold'}>
                      {totalPrice.toLocaleString('sr-RS')}
                    </span>
                    <span className={'ml-1 text-sm text-stone-400'}>{'RSD'}</span>
                  </div>
                </div>
              </div>

              <div
                className={'mt-5 rounded-2xl bg-stone-50 p-4 text-center text-xs text-stone-400'}>
                {'🔒 Sigurna kupovina · 📦 Dostava 24–48h · ↩️ Besplatna zamena'}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
