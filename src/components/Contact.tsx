'use client';
import {memo, Suspense} from 'react';
import {Controller, useForm} from 'react-hook-form';
import SendIcon from '@/icons/SendIcon';
import Link from 'next/link';
import {contactItems} from '@/components/data/contact';
import Icon from '@/icons/Icon';
import {motion} from 'framer-motion';

type ContactData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const underlineInput =
  'w-full border-0 border-b-2 border-stone-200 bg-transparent pb-2 pt-1 text-stone-900 placeholder-transparent transition focus:border-primary focus:outline-none';
const floatLabel =
  'pointer-events-none absolute left-0 top-0 text-xs font-semibold tracking-widest text-primary uppercase transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-stone-400 peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold peer-focus:tracking-widest peer-focus:text-primary';

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    formState: {isSubmitted},
  } = useForm<ContactData>({
    defaultValues: {name: '', email: '', phone: '', subject: '', message: ''},
  });

  const onSubmit = (data: ContactData) => {
    console.log('Kontakt poruka:', data);
  };

  if (isSubmitted) {
    return (
      <div className={'flex flex-col items-center justify-center py-12 text-center'}>
        <div className={'mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 ring-4 ring-primary/20'}>
          <span className={'text-4xl'}>{'🧦'}</span>
        </div>
        <h4 className={'mb-2 text-2xl font-light text-stone-900'}>{'Poruka primljena! 🎉'}</h4>
        <p className={'text-gray-500'}>{'Javićemo ti se u roku od 24h. Hvala na poverenju!'}</p>
      </div>
    );
  }

  return (
    <form className={'space-y-8'} onSubmit={handleSubmit(onSubmit)}>
      <div className={'grid gap-8 sm:grid-cols-2'}>
        <Controller
          name={'name'}
          control={control}
          rules={{required: true}}
          render={({field}) => (
            <div className={'relative'}>
              <input {...field} placeholder={'Ime i prezime'} className={underlineInput + ' peer'} />
              <label className={floatLabel}>{'Ime i prezime'}</label>
            </div>
          )}
        />
        <Controller
          name={'email'}
          control={control}
          rules={{required: true}}
          render={({field}) => (
            <div className={'relative'}>
              <input {...field} type={'email'} placeholder={'Email adresa'} className={underlineInput + ' peer'} />
              <label className={floatLabel}>{'Email adresa'}</label>
            </div>
          )}
        />
      </div>

      <div className={'grid gap-8 sm:grid-cols-2'}>
        <Controller
          name={'phone'}
          control={control}
          render={({field}) => (
            <div className={'relative'}>
              <input {...field} type={'tel'} placeholder={'Telefon (opciono)'} className={underlineInput + ' peer'} />
              <label className={floatLabel}>{'Telefon (opciono)'}</label>
            </div>
          )}
        />
        <Controller
          name={'subject'}
          control={control}
          rules={{required: true}}
          render={({field}) => (
            <div className={'relative'}>
              <input {...field} placeholder={'Tema poruke'} className={underlineInput + ' peer'} />
              <label className={floatLabel}>{'Tema poruke'}</label>
            </div>
          )}
        />
      </div>

      <Controller
        name={'message'}
        control={control}
        rules={{required: true}}
        render={({field}) => (
          <div className={'relative'}>
            <textarea
              {...field}
              rows={4}
              placeholder={'Tvoja poruka'}
              className={'peer w-full resize-none border-0 border-b-2 border-stone-200 bg-transparent pb-2 pt-1 text-stone-900 placeholder-transparent transition focus:border-primary focus:outline-none'}
            />
            <label className={floatLabel}>{'Tvoja poruka'}</label>
          </div>
        )}
      />

      <button
        type={'submit'}
        className={'group flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark'}>
        {'Pošalji Poruku'}
        <SendIcon className={'transition group-hover:translate-x-1'} height={16} width={16} />
      </button>
    </form>
  );
};

const Contact = () => (
  <section id={'kontakt'} className={'bg-stone-900 py-24'}>
    <div className={'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>

      {/* Header */}
      <motion.div
        className={'mb-12 text-center'}
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-50px'}}
        transition={{duration: 0.5, ease: 'easeOut'}}>
        <span className={'mb-3 inline-block text-sm font-semibold tracking-widest text-primary uppercase'}>
          {'Kontakt'}
        </span>
        <h2 className={'mb-3 text-4xl text-white sm:text-5xl'}>{'Pišite Nam'}</h2>
        <p className={'mx-auto max-w-xl text-white/50'}>
          {'Pitanja, sugestije, veleprodaja ili samo pozdrav — tu smo! Javićemo se u roku od 24h.'}
        </p>
      </motion.div>

      <motion.div
        initial={{opacity: 0, y: 28}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-40px'}}
        transition={{duration: 0.6, delay: 0.1, ease: 'easeOut'}}
        className={'overflow-hidden rounded-3xl lg:grid lg:grid-cols-5'}>

        {/* Left decorative panel */}
        <div className={'relative hidden overflow-hidden lg:col-span-2 lg:flex lg:flex-col lg:justify-between lg:p-10'}
          style={{background: 'linear-gradient(135deg, #e91e63, #9c27b0)'}}>
          <div
            className={'absolute inset-0 opacity-10'}
            style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px'}}
          />
          <div className={'relative'}>
            <div className={'mb-6 text-5xl'}>{'🧦'}</div>
            <h3 className={'mb-3 text-2xl font-light text-white'}>{'Direktan kontakt'}</h3>
            <p className={'text-sm leading-relaxed text-white/65'}>
              {'Dostupni smo radnim danima od 9 do 18h. Pišite slobodno — odgovaramo na svaku poruku!'}
            </p>
          </div>
          <div className={'relative space-y-4'}>
            {contactItems.map((item, i) => (
              <Link
                key={i}
                href={item.href || '#'}
                className={'flex items-center gap-3 text-white/80 transition hover:text-white'}>
                <span className={'flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10'}>
                  <Icon name={item.icon} height={15} width={15} className={'fill-current'} />
                </span>
                <div>
                  <div className={'text-[10px] font-semibold tracking-wider text-white/40 uppercase'}>{item.title}</div>
                  <div className={'text-sm font-medium'}>{item.value}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className={'bg-white lg:col-span-3'}>
          {/* Mobile contact info */}
          <div className={'grid grid-cols-2 gap-3 p-6 lg:hidden'}>
            {contactItems.map((item, i) => (
              <Link
                key={i}
                href={item.href || '#'}
                className={'flex items-center gap-2 rounded-2xl border border-stone-100 bg-stone-50 p-3'}>
                <span className={'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10'}>
                  <Icon name={item.icon} height={14} width={14} className={'fill-current text-primary'} />
                </span>
                <div className={'min-w-0'}>
                  <div className={'text-[10px] font-semibold tracking-wider text-gray-400 uppercase'}>{item.title}</div>
                  <div className={'truncate text-xs font-semibold text-gray-700'}>{item.value}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Form */}
          <div className={'p-8 lg:p-10'}>
            <Suspense fallback={<div className={'h-64 animate-pulse rounded-2xl bg-stone-100'} />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default memo(Contact);
