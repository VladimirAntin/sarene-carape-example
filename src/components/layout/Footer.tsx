'use client';
import Link from 'next/link';
import Icon from '@/icons/Icon';
import LogoIcon from '@/icons/LogoIcon';
import {footerItems, footerServices, socialLinks} from '@/components/data/footer';
import {memo} from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={'bg-stone-900 py-14 text-white'}>
      <div className={'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'}>

        {/* Rainbow bar */}
        <div className={'mb-10 flex h-1 overflow-hidden rounded-full'}>
          {['#e91e63','#ff6b35','#ffd600','#00c853','#2979ff','#9c27b0'].map((c, i) => (
            <div key={i} className={'flex-1'} style={{backgroundColor: c}} />
          ))}
        </div>

        <div className={'mb-10 grid gap-8 md:grid-cols-4'}>
          <div className={'md:col-span-2'}>
            <div className={'mb-3 flex items-center gap-2'}>
              <LogoIcon width={32} height={32} />
              <h3 className={'text-xl font-bold'}>
                {'Šarene '}
                <span className={'text-primary'}>{'Čarape'}</span>
              </h3>
            </div>
            <p className={'mb-5 max-w-sm text-sm leading-relaxed text-gray-400'}>
              {'Jedinstven online shop šarenih čarapa iz Loznice. Svaki par nosi osmeh — prugaste, tematske, cvjetne i sport čarape.'}
            </p>
            <div className={'mb-4 flex items-center gap-2 text-sm text-gray-400'}>
              <span className={'h-2 w-2 animate-pulse rounded-full bg-emerald-400'} />
              <span>{'Pon–Sub 9–18h · Dostava 24–48h'}</span>
            </div>
            <div className={'mb-4 flex items-center gap-2 text-sm text-gray-400'}>
              <span>{'📍'}</span>
              <span>{'Loznica, Mačvanski okrug, Srbija'}</span>
            </div>
            <div className={'flex gap-3'}>
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                  className={'flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-primary/40'}
                  aria-label={link.name}>
                  <Icon name={link.icon} height={20} width={20} />
                </a>
              ))}
            </div>
          </div>
          <div className={'flex flex-row justify-between'}>
            <div>
              <h4 className={'mb-4 font-semibold text-white'}>{'Kategorije'}</h4>
              <ul className={'space-y-2 text-gray-400 text-sm'}>
                {footerServices.map(service => (
                  <li key={service}>
                    <Link href={'/proizvodi'} className={'transition hover:text-primary'}>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={'mb-4 font-semibold text-white'}>{'Navigacija'}</h4>
              <ul className={'space-y-2 text-gray-400 text-sm'}>
                {footerItems.map(item => (
                  <li key={item.href}>
                    <Link href={item.href} className={'transition hover:text-primary'}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={'border-t border-white/10 pt-8 text-center text-sm text-gray-500'}>
          <p>
            {'© '}{currentYear}{' Šarene Čarape. Sva prava zadržana. Napravljeno s '}
            <span className={'text-primary'}>{'❤️'}</span>
            {' u Loznici.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
