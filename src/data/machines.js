// ─── Coffee Machines ─────────────────────────────────────────────────────────
export const BRANDS = [
  {
    id: 'jura',
    name: 'Jura',
    tagline: { en: 'Swiss-engineered bean-to-cup precision.', es: 'Precisión suiza grano a taza.' },
    description: {
      en: 'Jura Professional machines are built for offices that refuse to compromise. Bean-to-cup automatic espresso with Swiss engineering, intuitive interfaces, and the reliability your team demands every day.',
      es: 'Las máquinas Jura Professional están diseñadas para oficinas que se niegan a hacer concesiones. Espresso automático grano a taza con ingeniería suiza, interfaces intuitivas y la fiabilidad que tu equipo exige cada día.',
    },
    badge: { en: 'Automatic Espresso', es: 'Espresso Automático' },
    logo: '🇨🇭',
  },
  {
    id: 'behmor',
    name: 'Behmor',
    tagline: { en: 'Precision batch brewing for serious filter fans.', es: 'Cafetera de filtro de precisión para los más exigentes.' },
    description: {
      en: 'For teams that take their filter coffee as seriously as their espresso. The Brazen Plus 3 gives you temperature control to 0.1°, altitude compensation, and a customisable pre-soak.',
      es: 'Para equipos que se toman su café de filtro tan en serio como el espresso. La Brazen Plus 3 ofrece control de temperatura hasta 0,1°, compensación de altitud y pre-infusión personalizable.',
    },
    badge: { en: 'Precision Batch Brew', es: 'Cafetera de Filtro de Precisión' },
    logo: '☕',
  },
]

export const MACHINES = [
  // ── JURA ──────────────────────────────────────────────────────────────────
  {
    id: 'jura-we8',
    slug: 'jura-we8',
    brand: 'jura',
    brandName: 'Jura',
    name: 'WE8',
    tagline: { en: 'The perfect first office machine.', es: 'La máquina ideal para empezar en la oficina.' },
    tag: { en: 'Entry Office', es: 'Oficina Básica' },
    tagVariant: 'default',
    price: 1299,
    description: {
      en: 'Compact and capable, the WE8 handles 30+ cups a day with Jura\'s pulse extraction process and an intuitive colour touchscreen. Set it, forget it, and let your team brew.',
      es: 'Compacta y potente, la WE8 prepara 30+ cafés al día con el proceso de extracción pulsada de Jura y una pantalla táctil en color intuitiva.',
    },
    detail: {
      en: 'The Jura WE8 is the entry point into professional office coffee — and what an entry point it is. Jura\'s Pulse Extraction Process (P.E.P.®) delivers precision extraction for short specialities, while the Intelligent Pre-Brew Aroma system ensures every cup is aromatic and full. The colour touchscreen makes it effortless for everyone to use, and the 2.4L water tank keeps the coffee flowing all morning.',
      es: 'La Jura WE8 es el punto de entrada al café profesional de oficina. El Proceso de Extracción Pulsada (P.E.P.®) de Jura garantiza una extracción precisa para las especialidades cortas, mientras que el sistema Intelligent Pre-Brew Aroma asegura que cada taza sea aromática y completa.',
    },
    specs: {
      en: [
        { label: 'Daily capacity', value: '30+ cups' },
        { label: 'Grinder', value: 'Aroma G2' },
        { label: 'Coffee products', value: '6' },
        { label: 'Milk system', value: 'Manual' },
        { label: 'Water tank', value: '2.4 L' },
        { label: 'Bean container', value: '280 g' },
      ],
      es: [
        { label: 'Capacidad diaria', value: '30+ tazas' },
        { label: 'Molino', value: 'Aroma G2' },
        { label: 'Especialidades', value: '6' },
        { label: 'Sistema de leche', value: 'Manual' },
        { label: 'Depósito de agua', value: '2,4 L' },
        { label: 'Depósito de granos', value: '280 g' },
      ],
    },
    features: {
      en: ['P.E.P.® Pulse Extraction', 'Intelligent Pre-Brew Aroma', 'Colour touchscreen', 'One-touch operation', 'Energy save mode', 'Adjustable grind level'],
      es: ['Extracción Pulsada P.E.P.®', 'Intelligent Pre-Brew Aroma', 'Pantalla táctil en color', 'Operación en un toque', 'Modo ahorro de energía', 'Nivel de molienda ajustable'],
    },
    ideal: { en: 'Teams of 5–20 people', es: 'Equipos de 5–20 personas' },
  },
  {
    id: 'jura-x8',
    slug: 'jura-x8',
    brand: 'jura',
    brandName: 'Jura',
    name: 'X8 Platinum',
    tagline: { en: 'The benchmark for serious offices.', es: 'El referente para oficinas exigentes.' },
    tag: { en: 'Most Popular', es: 'Más Popular' },
    tagVariant: 'yellow',
    price: 1999,
    description: {
      en: 'Touchscreen TFT display, 12 programmable specialities, and up to 50 cups a day — completely automatic bean-to-cup. The machine your team will genuinely look forward to using.',
      es: 'Pantalla TFT táctil, 12 especialidades programables y hasta 50 cafés al día — automático de principio a fin. La máquina que tu equipo realmente tendrá ganas de usar.',
    },
    detail: {
      en: 'The X8 Platinum is where professional office coffee reaches its peak. Jura\'s Intelligent Water System (I.W.S.®) automatically detects filter changes, the 4.3" TFT touchscreen guides anyone through the menu, and 12 programmable coffee products means everyone from the espresso purist to the flat white fanatic is covered. Up to 50 cups a day, without compromise.',
      es: 'La X8 Platinum es donde el café profesional de oficina alcanza su cima. El Sistema Inteligente de Agua (I.W.S.®) de Jura detecta automáticamente los cambios de filtro, la pantalla táctil TFT de 4,3" guía a cualquiera por el menú y 12 especialidades programables cubren desde el purista del espresso hasta el fanático del flat white.',
    },
    specs: {
      en: [
        { label: 'Daily capacity', value: '50+ cups' },
        { label: 'Grinder', value: 'Aroma G3' },
        { label: 'Coffee products', value: '12' },
        { label: 'Milk system', value: 'Automatic' },
        { label: 'Water tank', value: '2.8 L' },
        { label: 'Bean container', value: '300 g' },
      ],
      es: [
        { label: 'Capacidad diaria', value: '50+ tazas' },
        { label: 'Molino', value: 'Aroma G3' },
        { label: 'Especialidades', value: '12' },
        { label: 'Sistema de leche', value: 'Automático' },
        { label: 'Depósito de agua', value: '2,8 L' },
        { label: 'Depósito de granos', value: '300 g' },
      ],
    },
    features: {
      en: ['P.E.P.® Pulse Extraction', '4.3" TFT Touchscreen', 'Automatic milk system', '12 coffee specialities', 'I.W.S.® Water System', 'Smart Energy Mode'],
      es: ['Extracción Pulsada P.E.P.®', 'Pantalla TFT 4,3"', 'Sistema de leche automático', '12 especialidades', 'Sistema I.W.S.®', 'Modo Smart Energy'],
    },
    ideal: { en: 'Teams of 15–40 people', es: 'Equipos de 15–40 personas' },
  },
  {
    id: 'jura-giga-x8',
    slug: 'jura-giga-x8',
    brand: 'jura',
    brandName: 'Jura',
    name: 'GIGA X8 G2',
    tagline: { en: 'Built for large teams who refuse to queue.', es: 'Diseñada para equipos grandes que no quieren colas.' },
    tag: { en: 'High Volume', es: 'Alto Volumen' },
    tagVariant: 'outline',
    price: 2999,
    description: {
      en: 'Two grinders, two brewing units — the GIGA X8 G2 serves 100+ cups a day without breaking a sweat. Peak office performance.',
      es: 'Dos molinos, dos grupos de extracción — la GIGA X8 G2 sirve 100+ cafés al día sin esfuerzo. El máximo rendimiento de oficina.',
    },
    detail: {
      en: 'When you have a large team with serious coffee demands, the GIGA X8 G2 is the answer. Two separate grinders and brewing units operate independently, meaning simultaneous brewing and a throughput that makes queues a thing of the past. Twenty-seven programmable products. One machine to rule the kitchen.',
      es: 'Cuando tienes un equipo grande con grandes exigencias de café, la GIGA X8 G2 es la respuesta. Dos molinos y grupos de extracción independientes operan simultáneamente, lo que significa doble caudal y que las colas son cosa del pasado. Veintisiete especialidades programables. Una máquina para gobernarlas todas.',
    },
    specs: {
      en: [
        { label: 'Daily capacity', value: '100+ cups' },
        { label: 'Grinders', value: '2 × Aroma G3' },
        { label: 'Coffee products', value: '27' },
        { label: 'Milk system', value: 'Automatic' },
        { label: 'Water tank', value: '4.7 L' },
        { label: 'Bean containers', value: '2 × 300 g' },
      ],
      es: [
        { label: 'Capacidad diaria', value: '100+ tazas' },
        { label: 'Molinos', value: '2 × Aroma G3' },
        { label: 'Especialidades', value: '27' },
        { label: 'Sistema de leche', value: 'Automático' },
        { label: 'Depósito de agua', value: '4,7 L' },
        { label: 'Depósitos de granos', value: '2 × 300 g' },
      ],
    },
    features: {
      en: ['Dual grinders & brew units', 'Simultaneous extraction', '27 coffee specialities', 'TFT touchscreen', 'Zero-energy switch', 'Auto milk cleaning'],
      es: ['Doble molino y grupo', 'Extracción simultánea', '27 especialidades', 'Pantalla táctil TFT', 'Interruptor cero energía', 'Limpieza automática de leche'],
    },
    ideal: { en: 'Teams of 40–150 people', es: 'Equipos de 40–150 personas' },
  },
  // ── BEHMOR ────────────────────────────────────────────────────────────────
  {
    id: 'behmor-brazen',
    slug: 'behmor-brazen',
    brand: 'behmor',
    brandName: 'Behmor',
    name: 'Brazen Plus 3',
    tagline: { en: 'Batch brewing elevated to a craft.', es: 'La preparación por lotes elevada a un arte.' },
    tag: { en: 'Filter Coffee', es: 'Café de Filtro' },
    tagVariant: 'default',
    price: 199,
    description: {
      en: 'Temperature control to 0.1°, altitude compensation for Madrid\'s 667 m elevation, and a customisable pre-soak — so every pot is dialled in, not just drinkable.',
      es: 'Control de temperatura hasta 0,1°, compensación de altitud para los 667 m de Madrid y pre-infusión personalizable — para que cada cafetera sea perfecta.',
    },
    detail: {
      en: 'Most batch brewers are set-and-forget. The Behmor Brazen Plus 3 is set-and-perfect. It\'s SCA certified, which means it brews in the ideal temperature range (92–96°C) and maintains it for the entire brew cycle. The altitude compensation is especially relevant for Madrid: at 667m, water boils at a lower temperature, and the Brazen accounts for this automatically. Pair it with Explorer or Alpine tier beans for a genuinely revelatory cup.',
      es: 'La mayoría de las cafeteras de filtro son de poner y olvidar. La Behmor Brazen Plus 3 es de poner y perfeccionar. Está certificada por la SCA, lo que significa que prepara en el rango de temperatura ideal (92–96°C) y lo mantiene durante todo el ciclo. La compensación de altitud es especialmente relevante para Madrid: a 667 m, el agua hierve a una temperatura más baja, y la Brazen lo tiene en cuenta automáticamente.',
    },
    specs: {
      en: [
        { label: 'Carafe capacity', value: '1.7 L' },
        { label: 'Temp control', value: 'To 0.1°C' },
        { label: 'Pre-soak', value: 'Adjustable' },
        { label: 'Altitude comp.', value: 'Yes' },
        { label: 'Keep warm', value: 'Up to 2 hrs' },
        { label: 'Certification', value: 'SCA' },
      ],
      es: [
        { label: 'Capacidad', value: '1,7 L' },
        { label: 'Control temp.', value: 'Hasta 0,1°C' },
        { label: 'Pre-infusión', value: 'Ajustable' },
        { label: 'Comp. altitud', value: 'Sí' },
        { label: 'Mantiene calor', value: 'Hasta 2 h' },
        { label: 'Certificación', value: 'SCA' },
      ],
    },
    features: {
      en: ['Temperature to 0.1° precision', 'Altitude compensation', 'Customisable pre-soak', '1.7 L carafe', 'SCA Certified', 'Thermal keep-warm 2 hrs'],
      es: ['Temperatura con precisión 0,1°', 'Compensación de altitud', 'Pre-infusión personalizable', 'Jarra de 1,7 L', 'Certificada SCA', 'Mantiene calor 2 horas'],
    },
    ideal: { en: 'Teams of any size who love filter', es: 'Equipos de cualquier tamaño que amen el filtro' },
  },
]

export const getMachineBySlug = (slug) => MACHINES.find(m => m.slug === slug)
export const getMachinesByBrand = (brandId) => MACHINES.filter(m => m.brand === brandId)
export const getBrandById = (id) => BRANDS.find(b => b.id === id)
