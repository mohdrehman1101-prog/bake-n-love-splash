import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MapPin, Menu } from "lucide-react";

import heroImage from "@/assets/bake-n-love-hero.jpg";
import interiorImage from "@/assets/cafe-interior.jpg";
import cappuccinoImage from "@/assets/cappuccino.jpg";
import cheesecakeImage from "@/assets/cheesecake.jpg";
import croissantImage from "@/assets/croissant.jpg";
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
    <div
      className={`relative grid shrink-0 place-items-center text-center text-logo-ink ${compact ? "h-20 w-20" : "h-28 w-28 sm:h-32 sm:w-32"}`}
      aria-label="Bake 'N Love Cafe and Bistro"
    >
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path
          d="M60 5c8 0 12 7 18 9 7 2 14-2 20 3s2 13 6 19c4 6 12 8 12 16s-7 12-9 19c-2 7 2 14-3 20s-13 2-19 6c-6 4-8 12-16 12s-12-7-19-9c-7-2-14 2-20-3s-2-13-6-19c-4-6-12-8-12-16s7-12 9-19c2-7-2-14 3-20s13-2 19-6C49 13 52 5 60 5Z"
          className="fill-logo-bg stroke-brand"
          strokeWidth="2.5"
        />
        <path
          d="M60 10c7 0 11 6 17 8 6 2 13-1 17 3 5 5 2 11 5 17 4 6 10 8 10 15 0 7-6 11-8 17-2 7 1 13-3 18-5 5-11 2-17 5-6 4-8 10-15 10-7 0-11-6-17-8-7-2-13 1-18-3-5-5-2-11-5-17-4-6-10-8-10-15 0-7 6-11 8-17 2-7-1-13 3-18 5-5 11-2 17-5 6-4 8-10 15-10Z"
          fill="none"
          className="stroke-brand/55"
          strokeWidth="1"
        />
      </svg>
      <div className="relative z-10 flex flex-col items-center">
        <span className={`${compact ? "text-[8px]" : "text-[10px] sm:text-[11px]"} font-extrabold uppercase tracking-[0.18em]`}>
          Bake 'N Love
        </span>
        <svg
          viewBox="0 0 54 32"
          className={`${compact ? "my-0.5 h-6 w-10" : "my-1 h-8 w-12"}`}
          aria-hidden="true"
        >
          <path d="M17 10h25v9c0 7-5 10-12 10s-13-3-13-10v-9Z" className="fill-logo-cup stroke-logo-ink" strokeWidth="1.7" />
          <path d="M42 13h4c6 0 5 8-1 8h-3" fill="none" className="stroke-logo-ink" strokeWidth="1.7" />
          <path d="M22 13c5 3 11 3 16 0M25 7c-3-3 3-4 1-7M32 8c4-4-1-5 1-8" fill="none" className="stroke-logo-ink" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M9 23c2-4 5-4 7 0-2 3-5 3-7 0Zm35 3c2-4 5-4 7 0-2 3-5 3-7 0Z" className="fill-coffee stroke-logo-ink" strokeWidth="1" />
        </svg>
        <span className={`${compact ? "text-[5px]" : "text-[7px]"} font-bold uppercase tracking-[0.12em]`}>
          Café & Bistro
        </span>
      </div>
    </div>
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
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="relative z-20 mx-auto flex h-36 w-full max-w-7xl items-center justify-between px-6 sm:h-40 sm:px-10 lg:px-16">
        <a href="#top" aria-label="Bake 'N Love home" className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <BrandMark />
        </a>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open navigation" className="h-14 w-14 rounded-full text-foreground hover:bg-secondary">
              <Menu className="size-10!" strokeWidth={2.1} />
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

      <section id="top" className="relative mx-auto min-h-[620px] w-full max-w-[1600px] overflow-hidden sm:min-h-[720px] lg:min-h-[740px]">
        <img src={heroImage} alt="Croissant and cappuccino on a sunlit café table" width={912} height={1200} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[56%_69%] sm:object-[55%_66%] lg:object-[68%_67%]" />
        <div className="absolute inset-0 bg-hero-wash" />
        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl flex-col px-6 pt-16 sm:min-h-[720px] sm:px-10 sm:pt-20 lg:min-h-[740px] lg:px-16 lg:pt-24">
          <p className="font-script text-5xl leading-none text-script sm:text-6xl">Welcome to</p>
          <h1 className="mt-1 font-serif text-[3.65rem] font-bold leading-[0.95] text-foreground sm:text-7xl lg:text-8xl">Bake 'N Love</h1>
          <p className="mt-4 text-xl font-extrabold uppercase tracking-[0.2em] text-brand sm:text-2xl">Café <span className="text-muted-foreground">&amp; Bistro</span></p>
          <p className="mt-7 max-w-xl text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
            Freshly baked. Carefully crafted.<br />Good food, great coffee, better together.
          </p>
          <div className="mt-6 grid max-w-md grid-cols-[minmax(0,1.18fr)_minmax(0,0.92fr)] gap-3 sm:flex sm:max-w-none sm:gap-4">
            <Button asChild className="h-15 rounded-full bg-brand px-5 text-[1.05rem] font-medium text-primary-foreground shadow-none hover:bg-brand-strong sm:px-8 sm:text-lg">
              <a href="#specials">Explore Menu <ArrowRight /></a>
            </Button>
            <Button asChild variant="outline" className="h-15 rounded-full border-2 border-border-strong bg-background/90 px-5 text-[1.05rem] font-medium shadow-none backdrop-blur-sm hover:bg-secondary sm:px-8 sm:text-lg">
              <a href="#about"><MapPin /> Visit Us</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="specials" className="bg-background py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <p className="text-base font-extrabold uppercase tracking-[0.05em] text-brand sm:text-lg">Our Specials</p>
          <h2 className="mt-1 font-serif text-5xl font-bold leading-none sm:text-6xl">Must Try</h2>
        </div>
        <div className="mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-10 lg:px-[max(4rem,calc((100vw-80rem)/2+4rem))]">
          {specials.map((special) => (
            <article key={special.title} className="w-[76vw] max-w-[310px] shrink-0 snap-start overflow-hidden rounded-card border border-border bg-card shadow-card sm:w-[300px]">
              <img src={special.image} alt={special.alt} width={880} height={752} loading="lazy" className="aspect-[1.18/1] w-full object-cover" />
              <div className="min-h-32 px-4 py-4">
                <h3 className="text-lg font-extrabold leading-tight sm:text-xl">{special.title}</h3>
                <p className="mt-2 text-base leading-snug text-foreground/90 sm:text-lg">{special.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-5 flex justify-center gap-4" aria-label="Carousel pagination">
          <span className="h-3.5 w-3.5 rounded-full bg-brand" />
          <span className="h-3.5 w-3.5 rounded-full bg-dot" />
          <span className="h-3.5 w-3.5 rounded-full bg-dot" />
        </div>
      </section>

      <section id="about" className="mt-1 bg-story py-9 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-7 px-6 sm:px-10 lg:grid-cols-[1fr_0.92fr] lg:items-end lg:px-16">
          <div className="relative">
            <p className="text-base font-extrabold uppercase tracking-[0.08em] text-brand sm:text-lg">About Us</p>
            <div className="mt-1 flex items-start gap-5">
              <h2 className="font-serif text-5xl font-bold leading-none sm:text-6xl">Our Story</h2>
              <div className="-mt-2"><LeafSprig /></div>
            </div>
            <p className="mt-4 max-w-xl text-lg font-medium leading-relaxed sm:text-xl">
              Bake 'N Love was born from a simple idea — that good food brings people together. We serve freshly baked treats, aromatic coffee and wholesome meals in a cozy, welcoming space.
            </p>
            <Button asChild className="mt-5 h-14 rounded-full bg-brand px-7 text-lg font-medium text-primary-foreground shadow-none hover:bg-brand-strong">
              <a href="#top">Our Story <ArrowRight /></a>
            </Button>
          </div>
          <div className="relative ml-auto w-[86%] max-w-xl sm:w-[72%] lg:w-full">
            <img src={interiorImage} alt="Warm café interior with teal seating and wooden tables" width={1008} height={800} loading="lazy" className="aspect-[1.2/1] w-full rounded-photo object-cover shadow-card" />
            <div className="absolute left-1/2 top-[47%] -translate-x-1/2 -translate-y-1/2 drop-shadow-sm">
              <BrandMark compact />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}