'use client'

import Image from 'next/image'
import { CloudberryFooter, CloudberryHeader, CloudberryShellStyles } from './cloudberry-shell'

const images = {
  hero: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/paper%20cranes%20smaller-G6yA0srO8AosN5tvBHJMxOnLpo4NS3.jpg',
  weekly: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Weekly%20Spread-ZzCIcdojTZftLLo1lLEiwAzvA2lzgg.avif',
  april: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/April-Spread-l3gzOcUJe5keS0SpOaijp4J4sa4And.jpg',
  milkweed: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/milkweed-8VaHEjIr3G8QwXpsjjNuCMYALQLowO.jpg',
}

const etsy = 'https://www.etsy.com/shop/CloudberryJournals'

function Button({
  children,
  href = etsy,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
    className={`brand-button ${className}`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
    <span aria-hidden="true">↗</span>
  </a>
  );
}


export default function CloudberryHomepage() {
  return (
    <main className="homepage">
      <CloudberryHeader />

      {/* HERO */}
      <section className="grid min-h-[calc(100vh-5rem)] grid-cols-1 overflow-hidden md:grid-cols-[.85fr_1.15fr] bg-[var(--cloudberry-pale-sage)]">
        <div className="flex flex-col justify-center px-6 py-16 md:px-10 lg:px-16 xl:px-24">
         <p className="eyebrow">
           A more intentional way to plan
          </p>

         <h1 className="mt-5 text-5xl font-normal leading-[.92] tracking-[-.01em] text-[var(--cloudberry-deep-navy)] md:text-5xl lg:text-7xl">
            Beautifully structured.
            <br />
            <em
              className="mt-8 inline-block text-[1.12em] font-normal text-[var(--cloudberry-dusty-rose)]"
              style={{ fontFamily: '"True Blue", cursive' }}
              >
              Completely yours.
            </em>
          </h1>

         <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--cloudberry-charcoal)] md:text-lg">
            A journal that gives you a solid foundation—with plenty
            of room to make it your own.
          </p>

         <div className="mt-7">
            <Button>Shop the journal</Button>
         </div>
       </div>

       <div className="relative min-h-[28rem] md:min-h-0">
         <Image
           src="/images/all-3-journals.jpg"
           alt="three Cloudberry journals"
           fill
           priority
           sizes="(max-width: 768px) 100vw, 58vw"
           className="object-cover object-center"
          />
       </div>
      </section>

      {/* THE CLOUDBERRY JOURNAL */}
      <section className="bg-[var(--cloudberry-cream)] px-6 py-14 text-[var(--cloudberry-ink)] md:py-20 lg:py-24">
        <div className="content-width grid items-center gap-10 md:grid-cols-[1.1fr_.9fr] lg:gap-16">

          {/* Image */}
          <div className="relative h-[26rem] border-[.65rem] border-white md:h-[29rem]">
            <Image
              src="/images/paper-cranes.jpg"
              alt="Cloudberry Journal open beside drawing tools and greenery"
              fill
              sizes="(max-width: 768px) 100vw, 52vw"
              className="object-cover object-center"
            />

            <div className="pointer-events-none absolute inset-[.65rem] z-10 border border-[rgba(22,32,59,.16)]" />
          </div>

          {/* Text */}
          <div>
            <p className="eyebrow text-[var(--cloudberry-dusty-rose)]">
              The Cloudberry Journal
            </p>

            <h2 className="mt-2 max-w-[14ch] text-[2.5rem] font-normal leading-[.98] text-[var(--cloudberry-deep-navy)] md:mt-3 md:text-[3rem] lg:text-[3.75rem]">
              A beautiful place to begin.
            </h2>

            <p className="mt-4 max-w-[28rem]">
              One thoughtfully designed journal for planning, sketching, lists, memory keeping, ideas,
              and all the small details that make up your days.
            </p>

            <ul className="mt-6 grid grid-cols-3 border-y border-[rgba(22,32,59,.22)] py-3.5">
              <li className="flex flex-col gap-[.15rem]">
                <strong className="font-[var(--font-display)] text-[1.65rem] font-normal leading-none text-[var(--cloudberry-dusty-rose)]">
                  12
                </strong>
                <span className="text-[.58rem] uppercase tracking-[.12em] text-[var(--cloudberry-charcoal)]">
                  monthly spreads
                </span>
              </li>

              <li className="flex flex-col gap-[.15rem]">
                <strong className="font-[var(--font-display)] text-[1.65rem] font-normal leading-none text-[var(--cloudberry-dusty-rose)]">
                  60
                </strong>
                <span className="text-[.58rem] uppercase tracking-[.12em] text-[var(--cloudberry-charcoal)]">
                  weekly spreads
                </span>
              </li>

              <li className="flex flex-col gap-[.15rem]">
                <strong className="font-[var(--font-display)] text-[1.65rem] font-normal leading-none text-[var(--cloudberry-dusty-rose)]">
                  A5
                </strong>
                <span className="text-[.58rem] uppercase tracking-[.12em] text-[var(--cloudberry-charcoal)]">
                  lay-flat format
                </span>
              </li>
            </ul>

            <div className="mt-5">
              <Button>Shop on Etsy</Button>
            </div>
          </div>

        </div>
      </section>

     {/* FRAMEWORK */}
      <section className="bg-[var(--cloudberry-pale-sage)] px-6 py-12 pb-8 md:pt-20 md:pb-10 lg:pt-20 lg:pb-0">
        <div className="content-width grid items-center gap-12 md:grid-cols-[.9fr_1.1fr] lg:gap-20">

          {/* Text */}
          <div>
            <p className="eyebrow">
              A thoughtful framework
            </p>

            <h2 className="mt-3 max-w-[15ch] text-[2.5rem] font-normal leading-[.98] text-[var(--cloudberry-deep-navy)] md:text-[3rem] lg:text-[3.75rem]">
              Structure where you need it.
              <br />
              <em
                className="mt-4 inline-block text-[.93em] font-normal text-[var(--cloudberry-dusty-rose)]"
                style={{ fontFamily: '"True Blue", cursive' }}
              >
                Freedom where you don&apos;t.
              </em>
            </h2>

            <p className="mt-4 max-w-[36rem] text-[var(--cloudberry-charcoal)]">
              Cloudberry gives you a simplified, pre-built structure
              so you don't have to build a system from scratch. The framework
              is there; how you use it is completely up to you.
            </p>

            <p className="mt-7 border-t border-[var(--cloudberry-dusty-rose)] pt-3 font-[var(--font-display)] text-[1rem] text-[var(--cloudberry-dusty-rose)]">
              Monthly rhythm · Weekly detail · Space to make it yours
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[26rem] md:h-[29rem] lg:h-[31rem]">
            <Image
              src={images.weekly}
              alt="A Cloudberry weekly journal spread"
              fill
              sizes="(max-width: 768px) 100vw, 48vw"
              className="object-cover object-center"
            />
          </div>

        </div>
      </section>

      {/* MAKE IT YOUR OWN */}
      <section className="bg-[var(--cloudberry-pale-sage)] px-6 py-16 md:py-20 lg:py-24">
        <div className="content-width border-t border-[rgba(22,32,59,.18)] pt-6">
          <div className="grid items-center gap-10 md:grid-cols-[.9fr_1.1fr] lg:gap-16">

            {/* IMAGE */}
            <div className="relative h-[26rem] md:h-[29rem] lg:h-[32rem]">
              <Image
                src="/images/milkweed.jpg"
                alt="Hand-drawn floral journal spread beside a watercolor palette"
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover object-center"
              />
            </div>

            {/* TEXT */}
            <div>
              <p className="eyebrow">Make it your own</p>

              <h2 className="mt-3 max-w-[20ch] text-[2.5rem] font-normal leading-[.98] text-[var(--cloudberry-deep-navy)] md:text-[3rem] lg:text-[3.75rem]">
                Make it as creative as you like.
              </h2>

              <p className="mt-5 max-w-[34rem]">
                Fill it with habit trackers, washi tape, watercolor, lettering,
                illustrations, lists, ideas—or keep it beautifully simple.
                There&apos;s no right way to make a Cloudberry Journal yours.
              </p>

              <div className="mt-6">
                <Button href="/inspiration">Explore inspiration</Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FLIP THROUGH */}
      <section className="bg-[var(--cloudberry-deep-navy)] px-6 py-16 text-white md:py-20 lg:py-28">
        <div className="content-width">
          <div className="text-center">
            <p className="eyebrow text-[var(--cloudberry-cream)]">
              Between the covers
            </p>

            <h2 className="mt-2 text-[2.8rem] font-normal leading-tight text-white md:text-[3.5rem] lg:text-[4.5rem]">
              A Flip Through of The Journal
            </h2>
          </div>

          <div className="relative mt-8 overflow-hidden md:mt-10">
            <video
              controls
              playsInline
              className="h-auto w-full"
            >
              <source
                src="/videos/cloudberry-flip-through.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

     {/* TESTIMONIALS */}
      <section className="relative overflow-hidden bg-[var(--cloudberry-cream)] px-6 py-20 md:py-24 lg:py-28">
        {/* Background pattern */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.08]"
          style={{ backgroundImage: "url('/images/cloudberry-background.png')" }}
        />

        <div className="content-width relative z-10">
          <div className="text-center">
            <p className="eyebrow">In their words</p>

            <h2 className="mt-3 text-[2.8rem] font-normal leading-[.98] text-[var(--cloudberry-deep-navy)] md:text-[3.5rem] lg:text-[4.25rem]">
              What Cloudberry customers have to say:
            </h2>
          </div>

          {/* Testimonial cards */}
          <div className="relative mt-10 lg:mt-14">
            {/* Softer background directly behind cards */}
            <div className="pointer-events-none absolute -inset-6 bg-[var(--cloudberry-cream)]/70" />

            <div className="relative grid gap-6 md:grid-cols-3">

              {/* HEATHER */}
              <div className="h-[30rem] border border-[rgba(22,32,59,.28)] p-3">
                <div className="flex h-full flex-col border border-[rgba(176,134,134,.55)] px-7 py-7">
                  <div className="flex flex-1 flex-col">
                    <p className="font-display text-[1.3rem] leading-[1.28] text-[var(--cloudberry-deep-navy)] md:text-[1.4rem]">
                      “I love that the ‘boring’ parts of making a planner are done for
                      me already (printed calendars and weekly layouts); now I can
                      concentrate on the fun part of designing and decorating.”
                    </p>

                    <p className="mt-4 text-[.65rem] font-medium uppercase tracking-[.18em] text-[var(--cloudberry-charcoal)]">
                      — Heather
                    </p>
                  </div>

                  <div className="mt-6 flex h-10 shrink-0 items-end justify-center">
                    <Image
                      src="/images/favicon.png"
                      alt=""
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* SUSAN */}
              <div className="h-[30rem] border border-[rgba(22,32,59,.28)] p-3">
                <div className="flex h-full flex-col border border-[rgba(176,134,134,.55)] px-7 py-7">
                  <div className="flex flex-1 flex-col">
                    <p className="font-display text-[1.3rem] leading-[1.28] text-[var(--cloudberry-deep-navy)] md:text-[1.4rem]">
                      “I have been wanting to try to bullet journal, but was
                      overwhelmed at the thought of a fully blank book. Cloudberry is
                      a good balance, having calendar and daily planner pages
                      ready-made for any month you want to start with page numbers
                      pre-made, but an otherwise really flexible design.”
                    </p>

                    <p className="mt-4 text-[.65rem] font-medium uppercase tracking-[.18em] text-[var(--cloudberry-charcoal)]">
                      — Susan
                    </p>
                  </div>

                  <div className="mt-6 flex h-10 shrink-0 items-end justify-center">
                    <Image
                      src="/images/favicon.png"
                      alt=""
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* CALLIE */}
              <div className="h-[30rem] border border-[rgba(22,32,59,.28)] p-3">
                <div className="flex h-full flex-col border border-[rgba(176,134,134,.55)] px-7 py-7">
                  <div className="flex flex-1 flex-col">
                    <p className="font-display text-[1.3rem] leading-[1.28] text-[var(--cloudberry-deep-navy)] md:text-[1.4rem]">
                      “I have purchased 5 of these journals now. It’s the only
                      ‘planner’ I have ever kept up with and the only reason I am able
                      to stay organized at work.”
                    </p>

                    <p className="mt-4 text-[.65rem] font-medium uppercase tracking-[.18em] text-[var(--cloudberry-charcoal)]">
                      — Callie
                    </p>
                  </div>

                  <div className="mt-6 flex h-10 shrink-0 items-end justify-center">
                    <Image
                      src="/images/favicon.png"
                      alt=""
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="overflow-hidden bg-[var(--cloudberry-deep-navy)] px-6 py-20 text-white md:py-24 lg:py-28">
        <div className="content-width">
          <div className="grid items-center gap-12 md:grid-cols-[1fr_.9fr] lg:gap-20">

            {/* CTA COPY */}
            <div className="max-w-2xl">
              <p className="eyebrow text-[var(--cloudberry-blush)]">
                Make it yours
              </p>

              <h2 className="mt-4 max-w-[12ch] text-[3.5rem] font-normal leading-[.92] text-white md:text-[5rem] lg:text-[6rem]">
                The journal that fits your life.
              </h2>

              <div className="mt-9">
                <Button
                  href="/shop"
                  className="brand-button--rose"
                >
                  Shop the journal
                </Button>
              </div>
            </div>

            {/* CTA IMAGE */}
            <div className="relative min-h-[24rem] md:min-h-[30rem] lg:min-h-[34rem]">
              <Image
                src="/images/april-spread.jpg"
                alt="Cloudberry Journal open to a hand-decorated journal spread"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      <CloudberryFooter />
      <CloudberryShellStyles />
      <style>{`
        .homepage { background: var(--cloudberry-cream); }
      `}</style>
    </main>
  )
}
