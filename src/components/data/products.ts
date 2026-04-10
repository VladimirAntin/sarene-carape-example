const products: Product[] = [
  {
    id: '1',
    slug: 'dugine-pruge',
    name: 'Dugine Pruge',
    tagline: 'Sve boje duge na tvojim nogama',
    description:
      'Naše najtraženije čarape! Vedre horizontalne pruge u svim bojama duge garantuju osmeh na svakom koraku. Napravljene od 80% kvalitetnog češljanog pamuka sa 20% elastana za savršen fit koji traje ceo dan. Pranje na 40°C, zadržavaju boje posle 100+ pranja.',
    price: 590,
    originalPrice: 750,
    category: 'Prugaste',
    sizes: ['36-38', '39-41', '42-44', '45-47'],
    colors: ['Višebojne'],
    image:
      'https://images.pexels.com/photos/9050061/pexels-photo-9050061.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/9050061/pexels-photo-9050061.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/9050050/pexels-photo-9050050.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    badge: 'Bestseler',
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 247,
  },
  {
    id: '2',
    slug: 'srca-i-tackice',
    name: 'Srca i Tačkice',
    tagline: 'Za one koji vole da se igraju',
    description:
      'Slatke čarape sa uzorkom srca i tačkica — savršene za poklone i za svaki dan. Mekani pamučni materijal prijatan na koži, idealne za prolećne i letnje dane. Dostupne u pastelnim i jarkim varijantama.',
    price: 550,
    category: 'Sa Uzorkom',
    sizes: ['36-38', '39-41', '42-44'],
    colors: ['Roze', 'Crvena', 'Ljubičasta'],
    image:
      'https://images.pexels.com/photos/1057005/pexels-photo-1057005.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1057005/pexels-photo-1057005.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6031549/pexels-photo-6031549.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    badge: 'Novo',
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 183,
  },
  {
    id: '3',
    slug: 'cvetni-vrt',
    name: 'Cvetni Vrt',
    tagline: 'Prolećna radost za svaki dan',
    description:
      'Čarape sa sočnim cvećem inspirisanim Lozničkim pejzažima. Svaki par je kao mali cvetni vrt koji nosiš sa sobom. Izuzetno mekane zahvaljujući bambusovim vlaknima u mešavini. Antibakterijsko i hipoalergijsko.',
    price: 620,
    category: 'Sa Uzorkom',
    sizes: ['36-38', '39-41', '42-44'],
    colors: ['Višebojne', 'Pastelne'],
    image:
      'https://images.pexels.com/photos/18910081/pexels-photo-18910081.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/18910081/pexels-photo-18910081.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 94,
  },
  {
    id: '4',
    slug: 'retro-talasi',
    name: 'Retro Talasi',
    tagline: '80-te su se vratile — na čarapama',
    description:
      'Retro vibracije sa geometrijskim talasima u neonskim bojama. Ove čarape su conversation starter na svakoj žurci. Duži model koji pokriva list, idealan za kombinovanje sa patikama i farmerikama.',
    price: 580,
    category: 'Prugaste',
    sizes: ['36-38', '39-41', '42-44', '45-47'],
    colors: ['Neon Miks'],
    image:
      'https://images.pexels.com/photos/9742012/pexels-photo-9742012.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/9742012/pexels-photo-9742012.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    badge: 'Ograničeno',
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 156,
  },
  {
    id: '5',
    slug: 'svemirska-avantura',
    name: 'Svemirska Avantura',
    tagline: 'Za one koji sanjaju o zvezdama',
    description:
      'Rakete, planete, zvezde i astronauti — sve na tvojim čarapama! Savršen poklon za decu i odrasle koji vole svemir i avanturu. Tamno plava osnova sa sjajnim metalik detaljima.',
    price: 650,
    category: 'Tematske',
    sizes: ['36-38', '39-41', '42-44', '45-47'],
    colors: ['Tamno Plava'],
    image:
      'https://images.pexels.com/photos/14037350/pexels-photo-14037350.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/14037350/pexels-photo-14037350.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    badge: 'Top Poklon',
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 312,
  },
  {
    id: '6',
    slug: 'kaktus-zurka',
    name: 'Kaktus Žurka',
    tagline: 'Bodljikav stil, meko podnožje',
    description:
      'Veseli kaktusi sa šeširima i cvecićima na zelenkastoj osnovi. Ovaj par je hit sezone! Osvežavajući dizajn koji savršeno ide uz letnje kombinacije. Lagani materijal, idealan za tople dane.',
    price: 590,
    category: 'Tematske',
    sizes: ['36-38', '39-41', '42-44'],
    colors: ['Zelena'],
    image:
      'https://images.pexels.com/photos/4853035/pexels-photo-4853035.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/4853035/pexels-photo-4853035.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 78,
  },
  {
    id: '7',
    slug: 'macke-svuda',
    name: 'Mačke Svuda',
    tagline: 'Za prave ljubitelje mačaka',
    description:
      'Slatke mačkice u različitim pozama — spavaju, igraju se, sede u kutijama. Svaki par priča priču. Napravljene za ljubitelje mačaka koji žele to pokazati svetu. Mekana frotir unutrašnjost za zimske dane.',
    price: 610,
    category: 'Tematske',
    sizes: ['36-38', '39-41', '42-44'],
    colors: ['Bela', 'Siva', 'Crna'],
    image:
      'https://images.pexels.com/photos/8184720/pexels-photo-8184720.png?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/8184720/pexels-photo-8184720.png?auto=compress&cs=tinysrgb&w=800',
    ],
    badge: 'Hit',
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 204,
  },
  {
    id: '8',
    slug: 'pizza-party',
    name: 'Pizza Party',
    tagline: 'Hrana je jedina ljubav',
    description:
      'Pizze, hamburgeri, hotdogi i ostala fastfood ljubimci na tvojim nogama. Savršeno za opuštene vikende i casual out. Ovaj par garantuje razgovor na svakoj žurci. Udobna srednja visina.',
    price: 570,
    category: 'Tematske',
    sizes: ['36-38', '39-41', '42-44', '45-47'],
    colors: ['Crvena', 'Žuta'],
    image:
      'https://images.pexels.com/photos/5737914/pexels-photo-5737914.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/5737914/pexels-photo-5737914.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 143,
  },
  {
    id: '9',
    slug: 'neonska-geometrija',
    name: 'Neonska Geometrija',
    tagline: 'Matematički savršen dizajn',
    description:
      'Trokuti, dijamanti i heksagoni u neonskim bojama na crnoj osnovi. Moderan i edgy dizajn za one koji vole da se istaknu. Duži model do lista — idealan za patike i čizme.',
    price: 600,
    originalPrice: 700,
    category: 'Prugaste',
    sizes: ['36-38', '39-41', '42-44', '45-47'],
    colors: ['Crna / Neon'],
    image:
      'https://images.pexels.com/photos/8187661/pexels-photo-8187661.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/8187661/pexels-photo-8187661.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    badge: 'Akcija',
    inStock: true,
    featured: false,
    rating: 4.8,
    reviews: 89,
  },
  {
    id: '10',
    slug: 'avokado-i-limun',
    name: 'Avokado & Limun',
    tagline: 'Zdrav duh, šarene noge',
    description:
      'Avokadi, limuni i tropsko voće na žutoj osnovi. Vedar i osvežavajući dizajn za pozitivne ljude. Organskim pamuk sertifikovan, ekološki. Idealan poklon za zdrave entuzijaste.',
    price: 580,
    category: 'Tematske',
    sizes: ['36-38', '39-41', '42-44'],
    colors: ['Žuta', 'Zelena'],
    image:
      'https://images.pexels.com/photos/15195265/pexels-photo-15195265.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/15195265/pexels-photo-15195265.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 67,
  },
  {
    id: '11',
    slug: 'sportski-tigar',
    name: 'Sportski Tigar',
    tagline: 'Trči kao tigar, izgledi savršeno',
    description:
      'Čarape za sport i svaki dan — tigrasta šara na narančastoj osnovi. Ojačani peti i prsti, anticlip đon koji sprečava klizanje u patikama. Upijaju znoj i drže stopalo suvo tokom cele aktivnosti.',
    price: 690,
    category: 'Sport',
    sizes: ['36-38', '39-41', '42-44', '45-47'],
    colors: ['Narandžasta'],
    image:
      'https://images.pexels.com/photos/10923062/pexels-photo-10923062.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/10923062/pexels-photo-10923062.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    badge: 'Sport',
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 175,
  },
  {
    id: '12',
    slug: 'zimske-pahulje',
    name: 'Zimske Pahulje',
    tagline: 'Toplo i šareno kao u bajci',
    description:
      'Debele zimske čarape sa pahuljama, jelenima i božićnim motivima. Termal materijal koji drži toplotu. Savršene za hladne zimske jutro, fotelju i vrelu kafu. Idealan poklon za Novu godinu.',
    price: 720,
    category: 'Sezonske',
    sizes: ['36-38', '39-41', '42-44'],
    colors: ['Crvena', 'Plava', 'Zelena'],
    image:
      'https://images.pexels.com/photos/6533978/pexels-photo-6533978.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6533978/pexels-photo-6533978.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    badge: 'Sezone',
    inStock: true,
    featured: false,
    rating: 4.9,
    reviews: 198,
  },
];

const categories = ['Sve', 'Prugaste', 'Sa Uzorkom', 'Tematske', 'Sport', 'Sezonske'];

export {products, categories};
