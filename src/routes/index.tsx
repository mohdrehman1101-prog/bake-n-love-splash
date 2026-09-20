import { createFileRoute } from "@tanstack/react-router";
import {
  Armchair,
  ArrowRight,
  CakeSlice,
  Coffee,
  Heart,
  HeartHandshake,
  MapPin,
  Menu,
  Star,
} from "lucide-react";

import heroImage from "@/assets/bake-n-love-hero.jpg";
import interiorImage from "@/assets/cafe-interior.jpg";
import cappuccinoImage from "@/assets/cappuccino.jpg";
import cheesecakeImage from "@/assets/cheesecake.jpg";
import cookieDoughPieImage from "@/assets/cookie-dough-pie.jpg";
import croissantImage from "@/assets/croissant.jpg";
import logoAsset from "@/assets/bake-n-love-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bake 'N Love Cafe & Bistro" },
      {
        name: "description",
        content:
          "Freshly baked treats, aromatic coffee and wholesome meals in a cozy, welcoming cafe.",
      },
      { property: "og:title", content: "Bake 'N Love Cafe & Bistro" },
      {
        property: "og:description",
        content: "Freshly baked. Carefully crafted. Better together.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const experiences = [
  {
    number: "01",
    icon: Coffee,
    title: "Artisan Coffee",
    description:
      "Carefully selected beans, expertly brewed to deliver rich flavour and a memorable experience.",
  },
  {
    number: "02",
    icon: CakeSlice,
    title: "Curated Flavours",
    description:
      "Handcrafted dishes and beverages prepared fresh with quality ingredients and thoughtful presentation.",
  },
  {
    number: "03",
    icon: Armchair,
    title: "Premium Ambience",
    description:
      "Beautiful interiors designed for relaxing conversations, productive meetings and special celebrations.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Genuine Hospitality",
    description:
      "Attentive service and welcoming experiences that make every visit feel comfortable and special.",
  },
];

const specials = [
  {
    title: "Cappuccino",
    description: "Rich espresso with steamed milk & foam",
    image: cappuccinoImage,
    alt: "Cappuccino with latte art in a blue cup",
  },
  {
    title: "Butter Croissant",
    description: "Flaky, buttery, fresh from the oven",
    image: croissantImage,
    alt: "Freshly baked butter croissants",
  },
  {
    title: "Blueberry Cheesecake",
    description: "Creamy, fresh, full of flavor",
    image: cheesecakeImage,
    alt: "Blueberry cheesecake topped with fresh berries",
  },
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <img
      src={logoAsset.url}
      alt="Bake 'N Love Cafe and Bistro"
      width={720}
      height={610}
      className={`shrink-0 object-contain ${compact ? "h-[68px] w-[78px]" : "h-[88px] w-[102px]"}`}
    />
  );
}

function LeafSprig() {
  return (
    <svg viewBox="0 0 52 92" className="h-20 w-12 text-botanical" aria-hidden="true">
      <path d="M22 87C19 58 23 31 39 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 53C13 50 7 42 7 32c11 2 18 8 19 21ZM30 38c1-12 7-21 17-25 0 11-5 20-17 25ZM22 67C11 66 5 60 3 51c10 0 17 5 19 16ZM34 24c-1-9 2-17 10-22 2 9-1 17-10 22Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function Index() {
  return (
    <main className="mx-auto min-h-screen max-w-[430px] overflow-hidden bg-background text-foreground shadow-shell md:my-6 md:rounded-[44px]">
      <header className="relative z-20 flex h-[104px] w-full items-center justify-between px-6">
        <a href="#top" aria-label="Bake 'N Love home" className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <BrandMark />
        </a>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open navigation" className="h-11 w-11 rounded-full text-foreground hover:bg-secondary">
              <Menu className="size-7!" strokeWidth={2.2} />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[82%] border-l border-border bg-background px-8 pt-14">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <SheetDescription className="sr-only">Browse this page</SheetDescription>
            <BrandMark compact />
            <nav className="mt-10 flex flex-col font-serif text-3xl" aria-label="Main navigation">
              <SheetClose asChild><a href="#top" className="border-b border-border py-5">Home</a></SheetClose>
              <SheetClose asChild><a href="#specials" className="border-b border-border py-5">Our Specials</a></SheetClose>
              <SheetClose asChild><a href="#about" className="border-b border-border py-5">Our Story</a></SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </header>

      <section id="top" className="relative h-[380px] w-full overflow-hidden">
        <img src={heroImage} alt="Croissant and cappuccino on a sunlit café table" width={912} height={1200} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[52%_66%]" />
        <div className="absolute inset-0 bg-hero-wash" />
        <div className="relative px-6 pt-[44px]">
          <p className="font-script text-[31px] leading-none text-script">Welcome to</p>
          <h1 className="mt-2 font-serif text-[43px] font-bold leading-[0.95] text-foreground">Bake 'N Love</h1>
          <p className="mt-3 text-[13px] font-extrabold uppercase tracking-[0.19em] text-brand">Café <span className="text-muted-foreground">&amp; Bistro</span></p>
          <p className="mt-5 text-[14px] font-medium leading-[1.55] text-foreground">
            Freshly baked. Carefully crafted.<br />Good food, great coffee, better together.
          </p>
          <div className="mt-4 grid grid-cols-[minmax(0,1.14fr)_minmax(0,0.86fr)] gap-3">
            <Button asChild className="h-[44px] rounded-full bg-brand px-5 text-[14px] font-medium text-primary-foreground shadow-none hover:bg-brand-strong">
              <a href="#specials">Explore Menu <ArrowRight /></a>
            </Button>
            <Button asChild variant="outline" className="h-[44px] rounded-full border border-border-strong bg-background/95 px-4 text-[14px] font-medium shadow-none hover:bg-secondary">
              <a href="#about"><MapPin /> Visit Us</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="specials" className="bg-background py-5">
        <div className="px-5">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-brand">Our Specials</p>
          <h2 className="mt-1 font-serif text-[30px] font-bold leading-none">Must Try</h2>
        </div>
        <div className="mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {specials.map((special) => (
            <article key={special.title} className="w-[145px] shrink-0 snap-start overflow-hidden rounded-card border border-border bg-card shadow-card">
              <img src={special.image} alt={special.alt} width={880} height={752} loading="lazy" className="h-[112px] w-full object-cover" />
              <div className="min-h-[108px] px-3 py-3">
                <h3 className="text-[14px] font-extrabold leading-tight">{special.title}</h3>
                <p className="mt-1.5 text-[13px] leading-[1.4] text-foreground/90">{special.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-4 flex justify-center gap-2.5" aria-label="Carousel pagination">
          <span className="h-2 w-2 rounded-full bg-brand" />
          <span className="h-2 w-2 rounded-full bg-dot" />
          <span className="h-2 w-2 rounded-full bg-dot" />
        </div>
      </section>

      <section id="about" className="mt-1 bg-story py-6">
        <div className="grid grid-cols-[1.12fr_0.88fr] items-end gap-2 px-5">
          <div className="relative">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-brand">About Us</p>
            <div className="mt-1 flex items-start gap-1">
              <h2 className="font-serif text-[30px] font-bold leading-none">Our Story</h2>
              <div className="-mt-4 scale-60"><LeafSprig /></div>
            </div>
            <p className="mt-3 text-sm font-medium leading-[1.45]">
              Bake 'N Love was born from a simple idea — that good food brings people together. We serve freshly baked treats, aromatic coffee and wholesome meals in a cozy, welcoming space.
            </p>
            <Button asChild className="mt-4 h-10 rounded-full bg-brand px-5 text-sm font-medium text-primary-foreground shadow-none hover:bg-brand-strong">
              <a href="#top">Our Story <ArrowRight /></a>
            </Button>
          </div>
          <div className="relative w-full">
            <img src={interiorImage} alt="Warm café interior with teal seating and wooden tables" width={1008} height={800} loading="lazy" className="h-[205px] w-full rounded-photo object-cover shadow-card [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%,0_18%)]" />
            <div className="absolute left-1/2 top-[47%] -translate-x-1/2 -translate-y-1/2 drop-shadow-sm">
              <BrandMark compact />
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="bg-background py-10">
        <div className="px-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-story px-4 py-1.5 font-script text-[22px] leading-none text-brand shadow-card">
            <Heart className="size-3 fill-current" aria-hidden="true" />
            The Bake 'N Love Experience
          </span>
          <h2 className="mt-3 font-serif text-[28px] font-bold leading-tight tracking-tight text-foreground">
            What Makes Bake 'N Love Special?
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-brand/30" />
        </div>

        <div className="mt-6 flex flex-col gap-4 px-5">
          {experiences.map((item) => (
            <article
              key={item.number}
              className="group rounded-[1.75rem] border border-border bg-card p-6 shadow-card transition-colors duration-300 hover:border-brand/30"
            >
              <div className="mb-5 flex items-start justify-between">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-story text-brand shadow-card transition-transform duration-300 group-hover:scale-105">
                  <item.icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <span
                  aria-hidden="true"
                  className="select-none font-serif text-[40px] font-light leading-none text-dot transition-colors duration-300 group-hover:text-brand/20"
                >
                  {item.number}
                </span>
              </div>
              <h3 className="font-serif text-[20px] font-bold uppercase tracking-wide text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="signature" className="bg-background py-6">
        <div className="mx-4 rounded-[2.25rem] border border-brand/15 bg-story p-4 shadow-card">
          <div className="relative mb-6 overflow-hidden rounded-[1.5rem] bg-white p-2.5 shadow-card">
            <div className="relative h-[260px] overflow-hidden rounded-[1.2rem] bg-secondary">
              <img
                src={cookieDoughPieImage}
                alt="Cookie dough pie with vanilla ice cream and chocolate chips"
                width={896}
                height={736}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute left-3 top-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-background/90 px-4 py-1.5 font-script text-[20px] leading-none text-brand shadow-card">
                  <Star className="size-3 fill-current" aria-hidden="true" /> Chef's Masterpiece
                </span>
              </div>
            </div>
          </div>

          <div className="px-2 pb-2 text-center">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-brand">
              Signature Dessert
            </span>
            <h2 className="mt-2 font-serif text-[30px] font-bold leading-none tracking-tight text-foreground">
              Cookie Dough Pie
            </h2>
            <p className="mt-3 text-[14px] leading-[1.6] text-muted-foreground">
              Warm, indulgent cookie dough baked to perfection, topped with creamy vanilla ice cream and generous chocolate chips for a comforting dessert worth coming back for.
            </p>

            <div className="mt-6 space-y-3 border-y border-brand/20 py-5">
              {["Cookie Dough", "Vanilla Ice Cream", "Chocolate Chips"].map((item) => (
                <div key={item} className="flex items-center justify-center gap-3 text-[12.5px] font-bold uppercase tracking-[0.12em] text-foreground">
                  <span className="size-2 rounded-full bg-brand" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button asChild className="mt-6 h-[44px] rounded-full bg-brand px-8 text-[14px] font-semibold text-primary-foreground shadow-none hover:bg-brand-strong">
              <a href="#specials">View Full Menu <ArrowRight /></a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}