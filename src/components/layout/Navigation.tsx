'use client';
import {memo, useEffect, useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {cn} from '@/utils/CN';
import LogoIcon from '@/icons/LogoIcon';
import {useCart} from '@/context/CartContext';
import {motion, AnimatePresence} from 'framer-motion';

const navLinks = [
	{
		href: '/',
		title: 'Početna',
		section: '',
		icon: (
			<svg viewBox={'0 0 24 24'} fill={'none'} stroke={'currentColor'} strokeWidth={1.8} strokeLinecap={'round'} strokeLinejoin={'round'} className={'h-5 w-5'}>
				<path d={'M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1v-9.5z'} />
				<path d={'M9 21V12h6v9'} />
			</svg>
		),
	},
	{
		href: '/#kolekcija',
		title: 'Kolekcija',
		section: 'kolekcija',
		icon: (
			<svg viewBox={'0 0 24 24'} fill={'none'} stroke={'currentColor'} strokeWidth={1.8} strokeLinecap={'round'} strokeLinejoin={'round'} className={'h-5 w-5'}>
				<rect x={'2'} y={'3'} width={'20'} height={'14'} rx={'2'} />
				<path d={'M8 21h8M12 17v4'} />
			</svg>
		),
	},
	{
		href: '/proizvodi',
		title: 'Proizvodi',
		section: 'proizvodi',
		icon: (
			<svg viewBox={'0 0 24 24'} fill={'none'} stroke={'currentColor'} strokeWidth={1.8} strokeLinecap={'round'} strokeLinejoin={'round'} className={'h-5 w-5'}>
				<path d={'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z'} />
				<line x1={'3'} y1={'6'} x2={'21'} y2={'6'} />
				<path d={'M16 10a4 4 0 01-8 0'} />
			</svg>
		),
	},
	{
		href: '/#kontakt',
		title: 'Kontakt',
		section: 'kontakt',
		icon: (
			<svg viewBox={'0 0 24 24'} fill={'none'} stroke={'currentColor'} strokeWidth={1.8} strokeLinecap={'round'} strokeLinejoin={'round'} className={'h-5 w-5'}>
				<path d={'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16v2.92z'} />
			</svg>
		),
	},
];

const Navigation = () => {
	const [activeSection, setActiveSection] = useState<string>('');
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();
	const {totalItems} = useCart();
	const isHome = pathname === '/';

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener('scroll', handleScroll, {passive: true});
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		if (!isHome) return;
		const sections = navLinks
			.filter(l => l.section !== '' && l.section !== 'proizvodi')
			.map(l => ({id: l.section, el: document.getElementById(l.section)}))
			.filter(s => s.el !== null) as {id: string; el: HTMLElement}[];

		const handleScroll = () => {
			const scrollY = window.scrollY;
			if (scrollY < 80) { setActiveSection(''); return; }
			let current = '';
			for (const s of sections) {
				if (s.el.offsetTop - window.innerHeight * 0.45 <= scrollY) current = s.id;
			}
			setActiveSection(current);
		};

		window.addEventListener('scroll', handleScroll, {passive: true});
		handleScroll();
		return () => { window.removeEventListener('scroll', handleScroll); setActiveSection(''); };
	}, [isHome]);

	const isLinkActive = (link: (typeof navLinks)[0]) => {
		if (link.href === '/proizvodi') return pathname.startsWith('/proizvodi');
		if (!isHome) return false;
		return link.section === '' ? activeSection === '' : activeSection === link.section;
	};

	return (
		<>
			{/* ── Desktop: fixed top navbar ── */}
			<nav
				className={cn(
					'hidden md:flex fixed top-0 left-0 right-0 z-50 h-16 items-center justify-between px-6 lg:px-10 transition-all duration-300',
					scrolled
						? 'bg-white/95 shadow-md shadow-pink-100/50 backdrop-blur-md'
						: 'bg-white/80 backdrop-blur-sm',
				)}>
				{/* Logo */}
				<Link href={'/'} className={'flex items-center gap-2.5 group'} aria-label={'Šarene Čarape'}>
					<LogoIcon width={36} height={36} />
					<span className={'text-lg font-bold tracking-tight text-stone-900 group-hover:text-primary transition-colors'}>
						{'Šarene '}
						<span className={'text-primary'}>{'Čarape'}</span>
					</span>
				</Link>

				{/* Nav links */}
				<div className={'flex items-center gap-1'}>
					{navLinks.map(link => (
						<Link
							key={link.href}
							href={link.href}
							className={cn(
								'rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200',
								isLinkActive(link)
									? 'bg-primary/10 text-primary'
									: 'text-stone-600 hover:text-primary hover:bg-pink-50',
							)}>
							{link.title}
						</Link>
					))}
				</div>

				{/* Cart button */}
				<Link
					href={'/korpa'}
					className={'relative flex items-center gap-2 rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-primary/30 transition hover:bg-primary-dark'}>
					<svg viewBox={'0 0 24 24'} fill={'none'} stroke={'currentColor'} strokeWidth={2} strokeLinecap={'round'} strokeLinejoin={'round'} className={'h-4 w-4'}>
						<path d={'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z'} />
						<line x1={'3'} y1={'6'} x2={'21'} y2={'6'} />
						<path d={'M16 10a4 4 0 01-8 0'} />
					</svg>
					{'Korpa'}
					<AnimatePresence>
						{totalItems > 0 && (
							<motion.span
								key={'badge'}
								initial={{scale: 0}}
								animate={{scale: 1}}
								exit={{scale: 0}}
								className={'absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-fun-yellow text-[10px] font-black text-stone-900'}>
								{totalItems}
							</motion.span>
						)}
					</AnimatePresence>
				</Link>
			</nav>

			{/* ── Mobile: bottom tab bar ── */}
			<nav className={'md:hidden fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-pink-100 bg-white shadow-[0_-4px_20px_rgba(233,30,99,0.12)]'}>
				{navLinks.map(link => (
					<Link
						key={link.href}
						href={link.href}
						className={cn(
							'flex flex-col items-center justify-center gap-0.5 px-2 py-1 transition-all duration-200',
							isLinkActive(link) ? 'text-primary' : 'text-stone-400 hover:text-stone-700',
						)}>
						{link.icon}
						<span className={'text-[9px] font-semibold tracking-wide'}>{link.title}</span>
					</Link>
				))}
				{/* Cart tab */}
				<Link
					href={'/korpa'}
					className={cn(
						'relative flex flex-col items-center justify-center gap-0.5 px-2 py-1 transition-all duration-200',
						pathname === '/korpa' ? 'text-primary' : 'text-stone-400 hover:text-stone-700',
					)}>
					<svg viewBox={'0 0 24 24'} fill={'none'} stroke={'currentColor'} strokeWidth={1.8} strokeLinecap={'round'} strokeLinejoin={'round'} className={'h-5 w-5'}>
						<path d={'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z'} />
						<line x1={'3'} y1={'6'} x2={'21'} y2={'6'} />
						<path d={'M16 10a4 4 0 01-8 0'} />
					</svg>
					<span className={'text-[9px] font-semibold tracking-wide'}>{'Korpa'}</span>
					<AnimatePresence>
						{totalItems > 0 && (
							<motion.span
								key={'mobile-badge'}
								initial={{scale: 0}}
								animate={{scale: 1}}
								exit={{scale: 0}}
								className={'absolute top-0.5 right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-primary text-[9px] font-black text-white'}>
								{totalItems}
							</motion.span>
						)}
					</AnimatePresence>
				</Link>
			</nav>
		</>
	);
};

export default memo(Navigation);
