import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import {
  Armchair,
  ArrowRight,
  CakeSlice,
  CalendarDays,
  Check,
  ChevronDown,
  Clock,
  Coffee,
  Facebook,
  Heart,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Star,
  User,
  Users,
} from "lucide-react";

import heroImage from "@/assets/bake-n-love-hero.jpg";
import interiorImage from "@/assets/cafe-interior.jpg";
import cappuccinoImage from "@/assets/cappuccino.jpg";
import cheesecakeImage from "@/assets/cheesecake.jpg";
import cookieDoughPieImage from "@/assets/cookie-dough-pie.jpg";
import ananyaAvatar from "@/assets/avatar-ananya.jpg";
import rohanAvatar from "@/assets/avatar-rohan.jpg";
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

// ⚙️ BOOKING CONFIG — the restaurant's WhatsApp number, in international format with digits only.
// Example: "919876543210" for +91 98765 43210. Change this one value; the whole site uses it.
const RESTAURANT_WHATSAPP_NUMBER = "919876543210";

// ⚙️ FOOTER CONFIG — the cafe's real details, all in one place. Update these values; the whole footer uses them.
const RESTAURANT_ADDRESS = "Shop 12, MG Road, Indore, Madhya Pradesh 452001"; // ← replace with the real address
const RESTAURANT_PHONE_DISPLAY = "+91 98765 43210"; // ← replace with the real phone number
const RESTAURANT_PHONE_TEL = "+919876543210";
const RESTAURANT_EMAIL = "hello@bakenlove.in"; // ← replace with the real email
const OPENING_HOURS = [
  { days: "Monday – Friday", time: "8:00 AM – 11:00 PM" },
  { days: "Saturday – Sunday", time: "9:00 AM – 11:30 PM" },
];
const SOCIAL_LINKS = {
  instagram: "#", // ← replace with the cafe's Instagram profile link
  facebook: "#", // ← replace with the cafe's Facebook page link
};
const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(RESTAURANT_ADDRESS)}`;
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(RESTAURANT_ADDRESS)}&output=embed`;


const timeSlots = Array.from({ length: 31 }, (_, index) => {
  const minutes = 8 * 60 + index * 30;
  return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
});

const shortDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "short" });

const shortTime = (value: string) =>
  new Date(`2000-01-01T${value}`).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

const reviews = [
  {
    name: "Ananya Sharma",
    time: "2 weeks ago",
    avatar: ananyaAvatar,
    text: "“The desserts are just amazing! Loved the cozy ambience and friendly staff. Definitely coming back soon!”",
  },
  {
    name: "Rohan Verma",
    time: "1 month ago",
    avatar: rohanAvatar,
    text: "“Best café in town! The cookie dough pie is a must-try. Everything was perfect — from taste to presentation.”",
  },
];

function Stars({ className = "size-3.5" }: { className?: string }) {
  return (
    <div className="flex gap-0.5" aria-label="Rated 5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className={`${className} fill-star text-star`} aria-hidden="true" />
      ))}
    </div>
  );
}

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

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

function LeafSprig({ className = "h-20 w-12 text-botanical" }: { className?: string }) {
  return (
    <svg viewBox="0 0 52 92" className={className} aria-hidden="true">
      <path d="M22 87C19 58 23 31 39 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 53C13 50 7 42 7 32c11 2 18 8 19 21ZM30 38c1-12 7-21 17-25 0 11-5 20-17 25ZM22 67C11 66 5 60 3 51c10 0 17 5 19 16ZM34 24c-1-9 2-17 10-22 2 9-1 17-10 22Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function Index() {
  const [booking, setBooking] = useState({ date: "", time: "", guests: "1", name: "", phone: "" });
  const [notice, setNotice] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [dateOptions, setDateOptions] = useState<string[]>([]);

  useEffect(() => {
    const days = Array.from({ length: 30 }, (_, index) => {
      const day = new Date();
      day.setHours(12, 0, 0, 0);
      day.setDate(day.getDate() + index);
      return day.toISOString().slice(0, 10);
    });
    setDateOptions(days);
  }, []);

  const updateBooking =
    (key: keyof typeof booking) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setBooking((current) => ({ ...current, [key]: event.target.value }));

  const guestLabel = `${booking.guests} ${booking.guests === "1" ? "guest" : "guests"}`;

  function handleReserve() {
    const name = booking.name.trim();
    const phone = booking.phone.trim();
    if (!booking.date || !booking.time || !name || !phone) {
      setNotice({ type: "error", text: "Please fill in all the fields to reserve your table." });
      return;
    }
    if (phone.replace(/\D/g, "").length < 7) {
      setNotice({ type: "error", text: "Please enter a valid phone number." });
      return;
    }
    const message = [
      "🍰 New Table Booking",
      "",
      `📅 Date: ${new Date(`${booking.date}T00:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}`,
      `⏰ Time: ${new Date(`2000-01-01T${booking.time}`).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}`,
      `👥 Guests: ${guestLabel}`,
      `👤 Name: ${name}`,
      `📞 Phone: ${phone}`,
      "",
      "Please confirm this table booking.",
    ].join("\n");
    window.open(
      `https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setNotice({
      type: "success",
      text: "Your booking request is ready on WhatsApp. Please send the message to confirm your reservation.",
    });
  }

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

      <section id="booking" className="bg-background py-6">
        <div className="mx-4 rounded-[2.25rem] border border-brand/20 bg-story p-2 shadow-card">
          <div className="relative overflow-hidden rounded-[1.9rem] bg-card px-5 pb-7 pt-8">
            <LeafSprig className="absolute -left-1 top-3 h-14 w-8 -rotate-[35deg] text-brand/30" />
            <LeafSprig className="absolute -right-1 bottom-3 h-14 w-8 rotate-[145deg] text-brand/30" />

            <div className="relative text-center">
              <p className="flex items-center justify-center gap-2 font-script text-[26px] leading-none text-brand">
                <span className="h-px w-5 rounded-full bg-brand/40" aria-hidden="true" />
                Save Your Table
                <span className="h-px w-5 rounded-full bg-brand/40" aria-hidden="true" />
              </p>
              <h2 className="mt-1.5 font-serif text-[34px] font-bold leading-none text-foreground">Table Booking</h2>
              <p className="mx-auto mt-2.5 max-w-[300px] text-[13.5px] leading-[1.5] text-muted-foreground">
                Reserve your favorite table and enjoy a beautiful moment with Bake 'N Love.
              </p>
            </div>

            <div className="relative mt-5">
              <div className="grid grid-cols-3 gap-2.5">
                <label className="flex min-w-0 items-center gap-1.5 rounded-[0.9rem] border border-brand/25 bg-background px-2.5 py-2 shadow-card">
                  <CalendarDays className="size-4 shrink-0 text-brand" strokeWidth={2.2} aria-hidden="true" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-extrabold leading-tight text-foreground">Date</span>
                    <span className="relative flex items-center">
                      <select
                        value={booking.date}
                        onChange={updateBooking("date")}
                        aria-label="Select date"
                        className={`w-full appearance-none bg-transparent pr-4 text-[11px] font-medium outline-none ${booking.date ? "text-foreground" : "text-muted-foreground"}`}
                      >
                        <option value="">Select date</option>
                        {dateOptions.map((iso) => (
                          <option key={iso} value={iso}>{shortDate(iso)}</option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-0 size-3 text-muted-foreground" aria-hidden="true" />
                    </span>
                  </span>
                </label>
                <label className="flex min-w-0 items-center gap-1.5 rounded-[0.9rem] border border-brand/25 bg-background px-2.5 py-2 shadow-card">
                  <Clock className="size-4 shrink-0 text-brand" strokeWidth={2.2} aria-hidden="true" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-extrabold leading-tight text-foreground">Time</span>
                    <span className="relative flex items-center">
                      <select
                        value={booking.time}
                        onChange={updateBooking("time")}
                        aria-label="Select time"
                        className={`w-full appearance-none bg-transparent pr-3.5 text-[10.5px] font-medium outline-none ${booking.time ? "text-foreground" : "text-muted-foreground"}`}
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{shortTime(slot)}</option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-0 size-3 text-muted-foreground" aria-hidden="true" />
                    </span>
                  </span>
                </label>
                <label className="flex min-w-0 items-center gap-1.5 rounded-[0.9rem] border border-brand/25 bg-background px-2.5 py-2 shadow-card">
                  <Users className="size-4 shrink-0 text-brand" strokeWidth={2.2} aria-hidden="true" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-extrabold leading-tight text-foreground">Guests</span>
                    <span className="relative flex items-center">
                      <select
                        value={booking.guests}
                        onChange={updateBooking("guests")}
                        aria-label="Number of guests"
                        className="w-full appearance-none bg-transparent pr-4 text-[11px] font-medium text-foreground outline-none"
                      >
                        {Array.from({ length: 12 }).map((_, index) => (
                          <option key={index + 1} value={index + 1}>
                            {index + 1} {index === 0 ? "guest" : "guests"}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-0 size-3 text-muted-foreground" aria-hidden="true" />
                    </span>
                  </span>
                </label>
              </div>

              <div className="mt-2.5 grid grid-cols-2 gap-2.5">
                <label className="flex items-center gap-2 rounded-[0.9rem] border border-brand/25 bg-background px-3 py-2 shadow-card">
                  <User className="size-4 shrink-0 text-brand" strokeWidth={2.2} aria-hidden="true" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-extrabold leading-tight text-foreground">Your Name</span>
                    <input
                      type="text"
                      suppressHydrationWarning
                      value={booking.name}
                      onChange={updateBooking("name")}
                      placeholder="Enter your name"
                      maxLength={60}
                      aria-label="Your name"
                      className="w-full bg-transparent text-[12px] font-medium text-foreground outline-none placeholder:font-normal placeholder:text-muted-foreground"
                    />
                  </span>
                </label>
                <label className="flex items-center gap-2 rounded-[0.9rem] border border-brand/25 bg-background px-3 py-2 shadow-card">
                  <Phone className="size-4 shrink-0 text-brand" strokeWidth={2.2} aria-hidden="true" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-extrabold leading-tight text-foreground">Phone Number</span>
                    <input
                      type="tel"
                      suppressHydrationWarning
                      inputMode="tel"
                      value={booking.phone}
                      onChange={updateBooking("phone")}
                      placeholder="+91 98765 43210"
                      maxLength={20}
                      aria-label="Phone number"
                      className="w-full bg-transparent text-[12px] font-medium text-foreground outline-none placeholder:font-normal placeholder:text-muted-foreground"
                    />
                  </span>
                </label>
              </div>

              <Button
                onClick={handleReserve}
                className="mt-4 h-[48px] w-full rounded-full bg-brand text-[15px] font-semibold text-primary-foreground shadow-md hover:bg-brand-strong"
              >
                Reserve My Table <ArrowRight />
              </Button>

              {notice ? (
                <p
                  role="status"
                  className={`mt-3 text-center text-[12.5px] font-semibold leading-[1.45] ${notice.type === "success" ? "text-brand-strong" : "text-destructive"}`}
                >
                  {notice.text}
                </p>
              ) : null}
            </div>

            <div className="relative mt-6 text-center">
              <p className="flex items-center justify-center gap-2 font-script text-[19px] leading-none text-brand">
                <span className="h-px w-7 rounded-full bg-brand/30" aria-hidden="true" />
                Good food tastes better when shared.
                <span className="h-px w-7 rounded-full bg-brand/30" aria-hidden="true" />
              </p>
              <Heart className="mx-auto mt-2.5 size-3.5 fill-brand text-brand" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-background pb-9 pt-1">
        <div className="mx-4 rounded-[2.25rem] border border-brand/20 bg-story p-2 shadow-card">
          <div className="relative overflow-hidden rounded-[1.9rem] bg-card px-5 pb-7 pt-8">
            <LeafSprig className="absolute -left-1 bottom-4 h-14 w-8 rotate-[35deg] text-brand/30" />
            <LeafSprig className="absolute -right-1 bottom-6 h-12 w-7 rotate-[145deg] text-brand/30" />

            <div className="relative text-center">
              <p className="flex items-center justify-center gap-2 font-script text-[26px] leading-none text-brand">
                <span className="h-px w-5 rounded-full bg-brand/40" aria-hidden="true" />
                What Our Customers Say
                <span className="h-px w-5 rounded-full bg-brand/40" aria-hidden="true" />
              </p>
              <h2 className="mt-1.5 font-serif text-[34px] font-bold leading-none text-foreground">Google Reviews</h2>
              <p className="mx-auto mt-2.5 max-w-[300px] text-[13.5px] leading-[1.5] text-muted-foreground">
                Real people. Real moments. We're so grateful for all the love and support!
              </p>
            </div>

            <div className="relative mt-6 grid grid-cols-2 items-center">
              <div className="text-center">
                <p className="font-serif text-[40px] font-bold leading-none text-foreground">4.8</p>
                <div className="mt-2 flex justify-center">
                  <Stars className="size-4" />
                </div>
                <p className="mt-2 text-[11.5px] font-medium text-muted-foreground">Based on 124 reviews</p>
              </div>
              <div className="border-l border-brand/25 py-1 text-center">
                <div className="flex items-center justify-center gap-2">
                  <GoogleG className="size-7" />
                  <span className="text-[26px] font-medium leading-none tracking-tight">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </span>
                </div>
                <p className="mt-2 flex items-center justify-center gap-1.5 text-[12px] font-semibold text-foreground">
                  Verified Reviews
                  <span className="flex size-4 items-center justify-center rounded-full bg-[#4285F4]">
                    <Check className="size-2.5 text-white" strokeWidth={4} aria-hidden="true" />
                  </span>
                </p>
              </div>
            </div>

            <div className="relative mt-5 grid grid-cols-2 gap-3">
              {reviews.map((review) => (
                <article key={review.name} className="rounded-[1.1rem] border border-brand/15 bg-background p-3.5 shadow-card">
                  <div className="flex items-center gap-2">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      width={816}
                      height={816}
                      loading="lazy"
                      className="size-9 shrink-0 rounded-full object-cover"
                    />
                    <div className="min-w-0">
                      <h3 className="text-[11.5px] font-extrabold leading-tight text-foreground">{review.name}</h3>
                      <p className="text-[10.5px] text-muted-foreground">{review.time}</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Stars className="size-3" />
                  </div>
                  <p className="mt-2 text-[12px] leading-[1.55] text-foreground/90">{review.text}</p>
                </article>
              ))}
            </div>

            <div className="relative mt-6 flex justify-center">
              <Button
                asChild
                variant="outline"
                className="h-10 rounded-full border border-border-strong bg-background px-6 text-[13px] font-semibold shadow-card hover:bg-secondary"
              >
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Bake%20%27N%20Love%20Cafe%20%26%20Bistro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More Reviews <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}