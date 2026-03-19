type Story = {
    title: string;
    category: string;
    excerpt: string;
    date: string;
    readTime: string;
    image: string;
};

type Product = {
    name: string;
    roast: string;
    price: string;
    size: string;
    notes: string[];
    description: string;
    badge: string;
    intensity: number;
    image: string;
};

type BrewNote = {
    method: string;
    dose: string;
    yield: string;
    time: string;
    note: string;
    accent: string;
};

const stories: Story[] = [
    {
        title: "Why I keep returning to washed Ethiopian coffees every spring",
        category: "Origin Notes",
        excerpt:
            "Bright florals, tea-like structure, and the kind of sweetness that makes a slow morning feel ceremonial.",
        date: "April 18",
        readTime: "6 min read",
        image:
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "My current V60 recipe for jammy cups with clean acidity",
        category: "Brewing Journal",
        excerpt:
            "A repeatable ratio, slightly cooler water, and one small agitation change that improved clarity instantly.",
        date: "April 10",
        readTime: "4 min read",
        image:
            "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Building a tiny shelf of coffees that covers every mood",
        category: "Studio Notes",
        excerpt:
            "A practical approach to keeping one clean daily driver, one adventurous bag, and one comfort roast on hand.",
        date: "March 29",
        readTime: "5 min read",
        image:
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
    },
];

const products: Product[] = [
    {
        name: "Daybreak House",
        roast: "Balanced Medium Roast",
        price: "$18",
        size: "250 g",
        notes: ["Toffee", "Cocoa", "Red Apple"],
        description: "My everyday bag: rounded sweetness, gentle acidity, and a finish that works black or with milk.",
        badge: "Best Seller",
        intensity: 62,
        image:
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Bloom Set",
        roast: "Light Roast Filter",
        price: "$22",
        size: "250 g",
        notes: ["Jasmine", "Peach", "Cane Sugar"],
        description: "A clean and expressive bag chosen for pour-over drinkers who want floral lift and sparkling cups.",
        badge: "Seasonal Lot",
        intensity: 38,
        image:
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Fireside Espresso",
        roast: "Darker Espresso Roast",
        price: "$19",
        size: "250 g",
        notes: ["Molasses", "Walnut", "Cherry"],
        description: "Built for syrupy espresso, rich cortados, and anyone chasing a deeper, dessert-like profile.",
        badge: "For Milk Drinks",
        intensity: 84,
        image:
            "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Saturday Subscription",
        roast: "Curated Monthly Pair",
        price: "$34",
        size: "2 × 250 g",
        notes: ["Rotating", "Fresh Crop", "Roaster Notes"],
        description: "A two-bag club with one familiar profile and one more adventurous pick, shipped every first Saturday.",
        badge: "Members Favorite",
        intensity: 58,
        image:
            "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
    },
];

const brewNotes: BrewNote[] = [
    {
        method: "V60 / 02",
        dose: "18 g",
        yield: "300 g",
        time: "2:45",
        note: "Sweet and tea-like with a softer first pour and one gentle swirl after the bloom.",
        accent: "from-amber-200 via-orange-100 to-white",
    },
    {
        method: "Kalita Wave",
        dose: "20 g",
        yield: "320 g",
        time: "3:05",
        note: "More body, less edge, and a caramel finish that suits medium roasts beautifully.",
        accent: "from-rose-200 via-orange-100 to-white",
    },
    {
        method: "Espresso",
        dose: "18 g",
        yield: "36 g",
        time: "29 sec",
        note: "Tighter ratio for syrupy texture, especially good on the darker profile bags.",
        accent: "from-stone-300 via-zinc-100 to-white",
    },
];

const highlights = [
    { value: "42", label: "journal entries published" },
    { value: "12", label: "small-batch roasts this season" },
    { value: "Thu", label: "weekly roast & ship day" },
];

const shopPillars = [
    "Roasted in tiny weekly batches",
    "Simple tasting-note system",
    "Journal-first brand storytelling",
    "Clean cards, chips, and editorial layouts",
];

function LogoMark() {
    return (
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#3b2417] text-[#fff7ef] shadow-[0_14px_30px_rgba(59,36,23,0.18)]">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 4c3.8 0 6 2.8 6 6.6 0 4.8-3.3 9.2-6 9.2s-6-4.4-6-9.2C6 6.8 8.2 4 12 4Z" />
                <path d="M12 6.5c-1.6 2-2.3 4-2.3 6.1 0 2.3.8 4.4 2.3 6" />
            </svg>
        </div>
    );
}

function SectionHeading({
    eyebrow,
    title,
    description,
}: {
    eyebrow: string;
    title: string;
    description: string;
}) {
    return (
        <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d9c7b5] bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#8a5a3b] shadow-sm backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#b87444]" />
                {eyebrow}
            </div>
            <div className="space-y-3">
                <h2 className="text-3xl font-semibold tracking-tight text-[#2c1a12] sm:text-4xl">{title}</h2>
                <p className="text-base leading-7 text-[#6f594a] sm:text-lg">{description}</p>
            </div>
        </div>
    );
}

function StoryCard({ story }: { story: Story }) {
    return (
        <article className="group overflow-hidden rounded-[28px] border border-white/70 bg-[#fffaf4]/95 shadow-[0_20px_60px_rgba(78,50,31,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(78,50,31,0.14)]">
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c1a12]/40 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    {story.category}
                </div>
            </div>
            <div className="space-y-5 p-6 sm:p-7">
                <div className="flex items-center gap-3 text-sm text-[#8a7364]">
                    <span>{story.date}</span>
                    <span className="h-1 w-1 rounded-full bg-[#c3a68f]" />
                    <span>{story.readTime}</span>
                </div>
                <div className="space-y-3">
                    <h3 className="text-xl font-semibold leading-tight tracking-tight text-[#2c1a12]">{story.title}</h3>
                    <p className="leading-7 text-[#6f594a]">{story.excerpt}</p>
                </div>
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#7b4f31] transition hover:gap-3">
                    Read journal
                    <span aria-hidden="true">→</span>
                </button>
            </div>
        </article>
    );
}

function ProductCard({ product }: { product: Product }) {
    return (
        <article className="group rounded-[30px] border border-white/80 bg-white/90 p-4 shadow-[0_20px_60px_rgba(78,50,31,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(78,50,31,0.14)] sm:p-5">
            <div className="relative overflow-hidden rounded-[24px]">
                <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-[4/3] h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2f1d14]/45 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-[#fff7ef] px-3 py-1 text-xs font-semibold text-[#7a4f31] shadow-sm">
                    {product.badge}
                </div>
                <div className="absolute bottom-4 left-4 rounded-full border border-white/50 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    {product.size}
                </div>
            </div>
            <div className="space-y-5 px-1 pb-1 pt-5">
                <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5">
                        <h3 className="text-xl font-semibold text-[#2c1a12]">{product.name}</h3>
                        <p className="text-sm text-[#8a7364]">{product.roast}</p>
                    </div>
                    <div className="rounded-full bg-[#f4e6d8] px-3 py-1 text-sm font-semibold text-[#73472d]">
                        {product.price}
                    </div>
                </div>

                <p className="leading-7 text-[#6f594a]">{product.description}</p>

                <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-[#8a7364]">
                        <span>Roast depth</span>
                        <span>{product.intensity}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[#efe3d5]">
                        <div
                            className="h-full rounded-full bg-gradient-to-r from-[#d69b68] via-[#a35e34] to-[#573525]"
                            style={{ width: `${product.intensity}%` }}
                        />
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {product.notes.map((note) => (
                        <span
                            key={note}
                            className="rounded-full border border-[#ead9ca] bg-[#fff9f3] px-3 py-1.5 text-xs font-medium text-[#704e3b]"
                        >
                            {note}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-3 pt-1">
                    <button className="inline-flex flex-1 items-center justify-center rounded-full bg-[#2f1d14] px-4 py-3 text-sm font-semibold text-[#fff7ef] transition hover:bg-[#40281b]">
                        Add to cart
                    </button>
                    <button className="inline-flex items-center justify-center rounded-full border border-[#dcc8b6] px-4 py-3 text-sm font-semibold text-[#7b4f31] transition hover:border-[#c7ac95] hover:bg-[#fff8f1]">
                        Details
                    </button>
                </div>
            </div>
        </article>
    );
}

function BrewNoteCard({ note }: { note: BrewNote }) {
    return (
        <div className="rounded-[28px] border border-white/80 bg-white/85 p-5 shadow-[0_18px_50px_rgba(78,50,31,0.07)] backdrop-blur-sm sm:p-6">
            <div className={`rounded-[22px] bg-gradient-to-br ${note.accent} p-5`}>
                <div className="space-y-4">
                    <div className="inline-flex rounded-full border border-[#e1c9b5] bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a5a3b]">
                        {note.method}
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-sm text-[#704e3b]">
                        <div>
                            <p className="text-xs uppercase tracking-[0.18em] text-[#9c7f6b]">Dose</p>
                            <p className="mt-1 font-semibold text-[#2c1a12]">{note.dose}</p>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-[0.18em] text-[#9c7f6b]">Yield</p>
                            <p className="mt-1 font-semibold text-[#2c1a12]">{note.yield}</p>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-[0.18em] text-[#9c7f6b]">Time</p>
                            <p className="mt-1 font-semibold text-[#2c1a12]">{note.time}</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="mt-5 leading-7 text-[#6f594a]">{note.note}</p>
        </div>
    );
}

export default function App() {
    return (
        <div className="relative overflow-hidden bg-[#f5ede3] text-[#2c1a12]">
            <div className="page-noise pointer-events-none absolute inset-0 opacity-50" />

            <header className="sticky top-0 z-50 border-b border-white/50 bg-[#f5ede3]/80 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
                    <a href="#top" className="flex items-center gap-3">
                        <LogoMark />
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8a5a3b]">Drift Roast</p>
                            <p className="text-sm text-[#6f594a]">Journal & Coffee Shop</p>
                        </div>
                    </a>

                    <nav className="hidden items-center gap-8 text-sm font-medium text-[#6f594a] md:flex">
                        <a href="#journal" className="transition hover:text-[#2c1a12]">Journal</a>
                        <a href="#shop" className="transition hover:text-[#2c1a12]">Shop</a>
                        <a href="#brewing" className="transition hover:text-[#2c1a12]">Brewing Notes</a>
                        <a href="#about" className="transition hover:text-[#2c1a12]">About</a>
                    </nav>

                    <div className="flex items-center gap-3">
                        <button className="hidden rounded-full border border-[#dac7b5] px-4 py-2 text-sm font-semibold text-[#7b4f31] transition hover:bg-white/70 sm:inline-flex">
                            Search archive
                        </button>
                        <button className="rounded-full bg-[#2f1d14] px-4 py-2 text-sm font-semibold text-[#fff7ef] transition hover:bg-[#40281b]">
                            Bag · 02
                        </button>
                    </div>
                </div>
            </header>

            <main id="top">
                <section className="relative isolate">
                    <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-10 sm:px-6 sm:pt-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:px-8 lg:pb-28 lg:pt-20">
                        <div className="space-y-8 lg:space-y-10">
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#dac7b5] bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#8a5a3b] shadow-sm backdrop-blur-sm">
                                Personal coffee journal · small-batch bean shop
                            </div>

                            <div className="space-y-6">
                                <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight text-[#2c1a12] sm:text-6xl lg:text-7xl">
                                    Notes from a coffee-obsessed desk, paired with beans I actually roast and drink.
                                </h1>
                                <p className="max-w-2xl text-lg leading-8 text-[#6f594a] sm:text-xl">
                                    Drift Roast is an editorial-style personal blog for brewing rituals, tasting notes, and origin stories —
                                    with a focused shop of small-batch coffees designed as a single cohesive product family.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 sm:flex-row">
                                <a
                                    href="#shop"
                                    className="inline-flex items-center justify-center rounded-full bg-[#2f1d14] px-6 py-3.5 text-sm font-semibold text-[#fff7ef] transition hover:bg-[#40281b]"
                                >
                                    Shop fresh roast
                                </a>
                                <a
                                    href="#journal"
                                    className="inline-flex items-center justify-center rounded-full border border-[#d8c5b3] bg-white/80 px-6 py-3.5 text-sm font-semibold text-[#7b4f31] transition hover:bg-white"
                                >
                                    Explore the journal
                                </a>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-3">
                                {highlights.map((item) => (
                                    <div
                                        key={item.label}
                                        className="rounded-[24px] border border-white/75 bg-white/75 p-5 shadow-[0_12px_30px_rgba(78,50,31,0.06)] backdrop-blur-sm"
                                    >
                                        <p className="text-2xl font-semibold tracking-tight text-[#2c1a12]">{item.value}</p>
                                        <p className="mt-2 text-sm leading-6 text-[#786353]">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-[#dca06f]/25 blur-3xl" />
                            <div className="absolute -right-3 bottom-10 h-36 w-36 rounded-full bg-[#8a5a3b]/15 blur-3xl" />

                            <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                                <div className="overflow-hidden rounded-[34px] border border-white/70 bg-white/75 p-3 shadow-[0_24px_70px_rgba(78,50,31,0.1)] backdrop-blur-sm">
                                    <div className="relative overflow-hidden rounded-[28px]">
                                        <img
                                            src="https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&w=1200&q=80"
                                            alt="Coffee brewing setup with notebook"
                                            className="aspect-[4/5] h-full w-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#2c1a12]/45 via-transparent to-transparent" />
                                        <div className="absolute bottom-5 left-5 right-5 rounded-[22px] border border-white/30 bg-white/15 p-4 text-white backdrop-blur-md">
                                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">This week on the desk</p>
                                            <p className="mt-2 text-lg font-semibold leading-tight">Bloom Set on V60 with a peach-tea cup and a very soft finish.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className="rounded-[30px] border border-white/75 bg-[#fffaf4]/90 p-5 shadow-[0_18px_50px_rgba(78,50,31,0.08)]">
                                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a5a3b]">Editorial card</p>
                                        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#2c1a12]">A layout built for component study.</h2>
                                        <p className="mt-3 leading-7 text-[#6f594a]">
                                            Layered cards, badges, image blocks, metric panels, pill filters, and clear spacing rhythms for easy Figma reconstruction.
                                        </p>
                                    </div>

                                    <div className="rounded-[30px] border border-[#d9c7b5] bg-[#2f1d14] p-5 text-[#fff7ef] shadow-[0_20px_60px_rgba(47,29,20,0.24)]">
                                        <div className="flex items-center justify-between gap-4">
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d9b79d]">Monthly drop</p>
                                                <p className="mt-2 text-2xl font-semibold tracking-tight">2 fresh coffees + brew letter</p>
                                            </div>
                                            <div className="rounded-full border border-white/15 px-3 py-2 text-sm">$34</div>
                                        </div>
                                        <p className="mt-4 text-sm leading-6 text-[#e7d4c5]">
                                            Subscribe for the most useful pairing: one approachable daily bag and one brighter weekend bag.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-y border-white/40 bg-white/35 py-6 backdrop-blur-sm">
                    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
                        <div className="flex flex-wrap gap-3">
                            {shopPillars.map((pillar) => (
                                <div
                                    key={pillar}
                                    className="rounded-full border border-[#ddcbbb] bg-[#fff9f3] px-4 py-2 text-sm font-medium text-[#704e3b] shadow-sm"
                                >
                                    {pillar}
                                </div>
                            ))}
                        </div>
                        <p className="text-sm leading-6 text-[#7a6658]">
                            Ideal for practicing: nested cards, CTA hierarchy, chips, soft dividers, and asymmetric grid behavior.
                        </p>
                    </div>
                </section>

                <section id="journal" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
                    <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
                        <SectionHeading
                            eyebrow="Journal"
                            title="Latest writing from the brew desk"
                            description="A personal archive of recipes, origin impressions, and slower reflections around coffee — written to feel warm, useful, and visual."
                        />
                        <button className="w-fit rounded-full border border-[#d9c7b5] bg-white/75 px-5 py-3 text-sm font-semibold text-[#7b4f31] shadow-sm transition hover:bg-white">
                            Browse all posts
                        </button>
                    </div>
                    <div className="mt-10 grid gap-6 lg:grid-cols-3">
                        {stories.map((story) => (
                            <StoryCard key={story.title} story={story} />
                        ))}
                    </div>
                </section>

                <section id="shop" className="mx-auto max-w-7xl px-5 py-4 sm:px-6 lg:px-8 lg:py-8">
                    <div className="rounded-[36px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,250,244,0.94),rgba(255,246,237,0.84))] p-6 shadow-[0_24px_80px_rgba(78,50,31,0.08)] sm:p-8 lg:p-10">
                        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
                            <SectionHeading
                                eyebrow="Shop"
                                title="One focused collection: small-batch coffee beans"
                                description="No mugs, no apparel, no clutter — just a tight range of coffees with distinctive roast profiles, tasting notes, and a consistent packaging language."
                            />
                            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                                {['All Beans', 'Filter', 'Espresso', 'Subscription'].map((filter) => (
                                    <button
                                        key={filter}
                                        className={`rounded-full px-4 py-2.5 text-sm font-semibold shadow-sm transition ${filter === 'All Beans'
                                            ? 'bg-[#2f1d14] text-[#fff7ef]'
                                            : 'border border-[#ddcbbb] bg-white/80 text-[#7b4f31] hover:bg-white'
                                            }`}
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mt-10 grid gap-6 xl:grid-cols-4 md:grid-cols-2">
                            {products.map((product) => (
                                <ProductCard key={product.name} product={product} />
                            ))}
                        </div>
                    </div>
                </section>

                <section id="brewing" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
                    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                        <div className="space-y-7">
                            <SectionHeading
                                eyebrow="Brewing Notes"
                                title="A modular section for recipes, process cards, and utility layouts"
                                description="This block adds a second content rhythm: compact specification cards paired with larger text areas, ideal for recreating with Auto Layout and reusable components."
                            />

                            <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-[0_18px_50px_rgba(78,50,31,0.08)] sm:p-7">
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a5a3b]">Current workflow</p>
                                <div className="mt-5 space-y-5">
                                    {[
                                        'Choose one bright coffee and one comfort roast each month.',
                                        'Write tasting notes in plain language instead of technical jargon.',
                                        'Pair every product card with a real brewing recommendation.',
                                    ].map((item, index) => (
                                        <div key={item} className="flex gap-4">
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f2e2d4] text-sm font-semibold text-[#7b4f31]">
                                                0{index + 1}
                                            </div>
                                            <p className="pt-1 leading-7 text-[#6f594a]">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                            {brewNotes.map((note) => (
                                <BrewNoteCard key={note.method} note={note} />
                            ))}
                        </div>
                    </div>
                </section>

                <section id="about" className="mx-auto max-w-7xl px-5 pb-24 sm:px-6 lg:px-8">
                    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                        <div className="rounded-[34px] border border-white/80 bg-[#2f1d14] p-8 text-[#fff7ef] shadow-[0_24px_80px_rgba(47,29,20,0.2)] sm:p-10">
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d9b79d]">About the project</p>
                            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
                                A complete reference for extracting a premium visual system into Figma.
                            </h2>
                            <p className="mt-5 max-w-2xl text-base leading-8 text-[#ead7c8] sm:text-lg">
                                The page intentionally mixes editorial and commerce patterns: sticky navigation, hero storytelling, metrics,
                                journal cards, product cards, filter pills, utility blocks, and subscription CTAs — all inside one consistent coffee-first brand world.
                            </p>
                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                <button className="rounded-full bg-[#fff7ef] px-6 py-3 text-sm font-semibold text-[#2f1d14] transition hover:bg-white">
                                    Join the newsletter
                                </button>
                                <button className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-[#fff7ef] transition hover:bg-white/10">
                                    Download tasting notes
                                </button>
                            </div>
                        </div>

                        <div className="rounded-[34px] border border-white/80 bg-white/88 p-8 shadow-[0_24px_80px_rgba(78,50,31,0.08)] sm:p-10">
                            <div className="flex items-center gap-4">
                                <LogoMark />
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8a5a3b]">Drift Roast Letter</p>
                                    <p className="text-sm text-[#6f594a]">A monthly note on coffee and quiet routines.</p>
                                </div>
                            </div>
                            <div className="mt-8 grid gap-4">
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="rounded-2xl border border-[#e6d6c8] bg-[#fffaf4] px-4 py-3.5 text-sm text-[#2c1a12] outline-none transition placeholder:text-[#a48d7b] focus:border-[#c79b78]"
                                />
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="rounded-2xl border border-[#e6d6c8] bg-[#fffaf4] px-4 py-3.5 text-sm text-[#2c1a12] outline-none transition placeholder:text-[#a48d7b] focus:border-[#c79b78]"
                                />
                                <button className="rounded-2xl bg-[#c37a49] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#b96d39]">
                                    Subscribe for notes + new roast alerts
                                </button>
                            </div>
                            <p className="mt-4 text-sm leading-6 text-[#7a6658]">
                                Expect thoughtful brew notes, new coffee releases, and behind-the-scenes decisions from a personal one-theme shop.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t border-white/50 bg-[#f1e7db]">
                <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 text-sm text-[#7a6658] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
                    <div>
                        <p className="font-semibold text-[#5f3d29]">Drift Roast</p>
                        <p className="mt-1">Personal coffee blog and single-category bean shop.</p>
                    </div>
                    <div className="flex flex-wrap gap-5">
                        <a href="#journal" className="transition hover:text-[#2c1a12]">Journal</a>
                        <a href="#shop" className="transition hover:text-[#2c1a12]">Shop</a>
                        <a href="#brewing" className="transition hover:text-[#2c1a12]">Brewing Notes</a>
                        <a href="#top" className="transition hover:text-[#2c1a12]">Back to top</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
