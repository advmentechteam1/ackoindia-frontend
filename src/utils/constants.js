export const NAV_LINKS = [
  { name: 'Products', href: '#products', hasDropdown: true },
  { name: 'Enterprise', href: '#enterprise' },
  { name: 'Why Us?', href: '#why-us' },
  { name: 'Digital Showroom', href: '#showroom' },
  { name: 'Free Services', href: '#free-services' },
  { name: 'Support', href: '#support' },
];

export const TRUST_METRICS = [
  {
    id: 1,
    value: '7 mins',
    label: 'Fastest claim settlement',
    subtext: 'Minor damage claims approved in minutes',
    icon: 'Zap'
  },
  {
    id: 2,
    value: '94.3%',
    label: 'Claims settled in 1 week',
    subtext: 'Hassle-free direct bank transfer',
    icon: 'CheckCircle2'
  },
  {
    id: 3,
    value: '24x7',
    label: 'Instant customer support',
    subtext: 'Dedicated claims manager support',
    icon: 'Headphones'
  },
  {
    id: 4,
    value: '5 Crore+',
    label: 'Trusted Indians',
    subtext: 'Direct insurance with zero commission',
    icon: 'ShieldCheck'
  }
];

export const INSURANCE_PRODUCTS = [
  {
    id: 'car',
    title: 'Car Insurance',
    subtitle: 'Zero commission. Super fast claims.',
    priceBadge: 'Starting at just ₹2,094*',
    discountBadge: 'Save up to 85%*',
    popular: true,
    category: 'auto',
    icon: 'Car',
    accentColor: 'from-blue-600 to-indigo-600',
    lightBg: 'bg-blue-50 hover:bg-blue-100/70',
    borderColor: 'border-blue-200',
    features: ['Instant digital inspection', 'Cashless repair at 7,000+ garages', 'Doorstep pickup & drop']
  },
  {
    id: 'bike',
    title: 'Bike Insurance',
    subtitle: 'Insure your two-wheeler in 60 seconds.',
    priceBadge: 'Starting at just ₹457*',
    discountBadge: 'Instant Policy',
    popular: false,
    category: 'auto',
    icon: 'Bike',
    accentColor: 'from-teal-600 to-emerald-600',
    lightBg: 'bg-teal-50 hover:bg-teal-100/70',
    borderColor: 'border-teal-200',
    features: ['Zero paperwork needed', 'Instant policy download', 'Accidental & theft coverage']
  },
  {
    id: 'health',
    title: 'Health Insurance',
    subtitle: '100% hospital bill payments. 0 deductions.',
    priceBadge: 'From ₹365/month*',
    discountBadge: 'Zero Deductibles',
    popular: true,
    category: 'health',
    icon: 'HeartPulse',
    accentColor: 'from-rose-600 to-pink-600',
    lightBg: 'bg-rose-50 hover:bg-rose-100/70',
    borderColor: 'border-rose-200',
    features: ['14,300+ cashless hospitals', 'No room-rent capping', 'Pre-existing diseases covered']
  },
  {
    id: 'life',
    title: 'Term Life Insurance',
    subtitle: 'Coverage from ₹25 Lakh to ₹50 Crore.',
    priceBadge: 'Pure Life Cover',
    discountBadge: 'Up to 10% Women Discount',
    popular: false,
    category: 'life',
    icon: 'ShieldAlert',
    accentColor: 'from-amber-600 to-orange-600',
    lightBg: 'bg-amber-50 hover:bg-amber-100/70',
    borderColor: 'border-amber-200',
    features: ['Instant tele-medical checkup', 'Tax benefits under Sec 80C', 'Lump sum + monthly payout']
  },
  {
    id: 'travel',
    title: 'Travel Insurance',
    subtitle: 'Worldwide emergency medical & baggage cover.',
    priceBadge: 'From ₹49/day*',
    discountBadge: 'Covers Flight Delays',
    popular: false,
    category: 'travel',
    icon: 'Plane',
    accentColor: 'from-cyan-600 to-blue-600',
    lightBg: 'bg-cyan-50 hover:bg-cyan-100/70',
    borderColor: 'border-cyan-200',
    features: ['Cashless hospitalization abroad', 'Passport loss assistance', 'Trip cancellation refund']
  },
  {
    id: 'ev',
    title: 'EV Smart Protect',
    subtitle: 'Battery warranty & charger protection covered.',
    priceBadge: 'Special EV Discounts*',
    discountBadge: 'Battery Cover Included',
    popular: false,
    category: 'auto',
    icon: 'Zap',
    accentColor: 'from-emerald-600 to-green-600',
    lightBg: 'bg-emerald-50 hover:bg-emerald-100/70',
    borderColor: 'border-emerald-200',
    features: ['EV battery breakdown cover', 'Towing to nearest charging station', 'Charger theft protection']
  }
];

export const SHOWROOM_CARS = [
  {
    id: 'c1',
    name: 'KIA Seltos 2025',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&auto=format&fit=crop&q=80',
    originalPrice: '₹12.80 Lakh',
    offerPrice: '₹12.53 Lakh',
    savings: 'Save ₹26,519',
    rating: 4.8,
    fuel: 'Petrol / Diesel',
    transmission: 'Auto / Manual'
  },
  {
    id: 'c2',
    name: 'Hyundai Creta Facelift',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop&q=80',
    originalPrice: '₹11.20 Lakh',
    offerPrice: '₹10.82 Lakh',
    savings: 'Save ₹38,000',
    rating: 4.9,
    fuel: 'Petrol',
    transmission: 'Automatic'
  },
  {
    id: 'c3',
    name: 'Tata Nexon EV Max',
    category: 'EV',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&auto=format&fit=crop&q=80',
    originalPrice: '₹14.99 Lakh',
    offerPrice: '₹14.29 Lakh',
    savings: 'Save ₹70,000',
    rating: 4.7,
    fuel: 'Electric (465 km)',
    transmission: 'Automatic'
  },
  {
    id: 'c4',
    name: 'Mahindra XUV 700',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&auto=format&fit=crop&q=80',
    originalPrice: '₹14.50 Lakh',
    offerPrice: '₹13.70 Lakh',
    savings: 'Save ₹80,000',
    rating: 4.9,
    fuel: 'Diesel',
    transmission: 'Automatic'
  }
];

export const FREE_SERVICES = [
  {
    id: 'traffic-fines',
    title: 'Check & Pay Traffic Fines',
    description: 'Instant challan alert & easy zero-fee clearing.',
    icon: 'AlertTriangle',
    tag: 'Free Tool',
    category: 'Vehicle Tools'
  },
  {
    id: 'fastag-balance',
    title: 'FASTag Balance Alerts',
    description: 'Recharge & track balance across all toll plazas.',
    icon: 'Wallet',
    tag: 'Quick Recharge',
    category: 'Vehicle Tools'
  },
  {
    id: 'pucc-expiry',
    title: 'PUCC Expiry Reminders',
    description: 'Never miss pollution certificate renewals.',
    icon: 'BellRing',
    tag: 'Automated Alert',
    category: 'Vehicle Tools'
  },
  {
    id: 'ambulance',
    title: 'Book an Ambulance (SOS)',
    description: 'Fastest GPS dispatched emergency ambulance.',
    icon: 'Ambulance',
    tag: '24x7 Emergency',
    category: 'Emergency Help'
  },
  {
    id: 'towing',
    title: 'Tow My Car / Bike',
    description: 'Breakdown towing to the nearest authorized workshop.',
    icon: 'Truck',
    tag: 'On-Demand Assistance',
    category: 'Emergency Help'
  },
  {
    id: 'flat-tyre',
    title: 'Flat Tyre & Battery Jumpstart',
    description: 'Mechanic sent to your location within 30 minutes.',
    icon: 'Wrench',
    tag: 'Roadside Help',
    category: 'Emergency Help'
  },
  {
    id: 'abha-card',
    title: 'Create ABHA Health Card',
    description: 'Government backed digital health account in 1 min.',
    icon: 'FileBadge',
    tag: 'Govt. Approved',
    category: 'Health Locker'
  },
  {
    id: 'policy-analyzer',
    title: 'Analyze Existing Health Policy',
    description: 'AI detects hidden clauses, sub-limits & missing covers.',
    icon: 'FileSearch',
    tag: 'Free AI Scan',
    category: 'Health Locker'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sahil Roy',
    role: 'Verified ACKOIndia Customer',
    location: 'Bengaluru',
    rating: 5,
    text: 'I recently switched to ACKOIndia Insurance and I am thoroughly impressed! Their app is incredibly user-friendly, making it easy to purchase and manage policies. The claims process is ultra seamless and completely hassle-free.',
    policy: 'Car Comprehensive Policy'
  },
  {
    id: 2,
    name: 'Priyanka Sharma',
    role: 'Health Policyholder',
    location: 'Mumbai',
    rating: 5,
    text: 'Had to undergo unexpected knee surgery. Zero deductions on hospital room charges, full bill settled directly via cashless network within 2 hours. Truly lifesaver service!',
    policy: 'Platinum Health Cover'
  },
  {
    id: 3,
    name: 'Vikram Malhotra',
    role: 'Two-Wheeler Owner',
    location: 'Delhi NCR',
    rating: 5,
    text: 'Renewed my bike insurance in less than 90 seconds while sitting in my office. No surveyor visited, no useless paperwork, instant PDF sent on WhatsApp.',
    policy: 'Bike Comprehensive 3-Year'
  }
];

export const FAQS = [
  {
    q: 'Why are prices on direct insurance so affordable?',
    a: 'We operate completely digitally without middleman commissions, high agent brokerage, or physical office overheads. We pass 100% of these direct savings to you as lower premiums and faster digital claims.'
  },
  {
    q: 'How fast does the claim settlement actually happen?',
    a: 'Minor damages (like scratches, bumper dents, mirror cracks) are settled digitally in as little as 7 minutes via instant video/photo submission in the app. For major accidental repairs, cashless settlement is handled directly with the authorized garage.'
  },
  {
    q: 'Can I transfer my existing No Claim Bonus (NCB)?',
    a: 'Yes, absolutely! You can transfer up to 50% No Claim Bonus from your previous insurer seamlessly during policy renewal.'
  },
  {
    q: 'Are your policies approved by IRDAI?',
    a: 'Yes. All insurance products are registered and strictly regulated by the Insurance Regulatory and Development Authority of India (IRDAI).'
  }
];

