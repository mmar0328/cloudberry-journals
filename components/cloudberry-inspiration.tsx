import Image from 'next/image'
import {
  CloudberryFooter,
  CloudberryHeader,
  CloudberryShellStyles,
} from './cloudberry-shell'

const images = [
  {
    src: '/images/inspiration/April-Spread.jpg',
    alt: 'April monthly spread decorated with delicate floral details',
    width: 1080,
    height: 1080,
  },
  {
    src: '/images/inspiration/artists.jpg',
    alt: 'Cloudberry Journal spread inspired by art and travel',
    width: 1080,
    height: 1080,
  },
  {
    src: '/images/inspiration/autumn-leaves.jpg',
    alt: 'Cloudberry Journal spread decorated with autumn leaves',
    width: 1200,
    height: 1200,
  },
  {
    src: '/images/inspiration/black-white-botanicals.jpg',
    alt: 'Black and white botanical Cloudberry Journal spread',
    width: 1080,
    height: 1080,
  },
  {
    src: '/images/inspiration/blue-bird.jpg',
    alt: 'Blue and green illustrated Cloudberry Journal spread',
    width: 1080,
    height: 1080,
  },
  {
    src: '/images/inspiration/blue-green-floral.jpg',
    alt: 'Blue and green floral Cloudberry Journal spread',
    width: 1080,
    height: 675,
  },
  {
    src: '/images/inspiration/butterfly.jpg',
    alt: 'Colorful butterfly Cloudberry Journal spread',
    width: 1200,
    height: 1200,
  },
  {
    src: '/images/inspiration/country-state-tracker.jpg',
    alt: 'Country and state tracker in a Cloudberry Journal',
    width: 1080,
    height: 810,
  },
  {
    src: '/images/inspiration/eucalyptus.jpg',
    alt: 'Eucalyptus botanical Cloudberry Journal spread',
    width: 756,
    height: 756,
  },
  {
    src: '/images/inspiration/house-mood-tracker.jpg',
    alt: 'House-themed mood tracker in a Cloudberry Journal',
    width: 1200,
    height: 1600,
  },
  {
    src: '/images/inspiration/lemons.jpg',
    alt: 'Lemon-themed Cloudberry Journal spread',
    width: 1080,
    height: 1080,
  },
  {
    src: '/images/inspiration/milkweed.jpg',
    alt: 'Botanical Cloudberry Journal spread',
    width: 3024,
    height: 3024,
  },
  {
    src: '/images/inspiration/minimal-monthly.jpg',
    alt: 'Minimal monthly Cloudberry Journal spread',
    width: 1080,
    height: 810,
  },
  {
    src: '/images/inspiration/paper-cranes-smaller.jpg',
    alt: 'Paper crane Cloudberry Journal spread',
    width: 1500,
    height: 1500,
  },
  {
    src: '/images/inspiration/peaches.jpg',
    alt: 'Peach-themed Cloudberry Journal spread',
    width: 1200,
    height: 1200,
  },
  {
    src: '/images/inspiration/poppies.jpg',
    alt: 'Poppy-themed Cloudberry Journal spread',
    width: 1080,
    height: 810,
  },
  {
    src: '/images/inspiration/scandinavian-flowers.jpg',
    alt: 'Scandinavian-inspired floral Cloudberry Journal spread',
    width: 1200,
    height: 1200,
  },
  {
    src: '/images/inspiration/sunflower-butterfly.jpg',
    alt: 'Sunflower and butterfly Cloudberry Journal spread',
    width: 1061,
    height: 675,
  },
  {
    src: '/images/inspiration/watercolor-landscape.jpg',
    alt: 'Watercolor landscape Cloudberry Journal spread',
    width: 756,
    height: 756,
  },
  {
    src: '/images/inspiration/yellow-weekly.jpg',
    alt: 'Yellow botanical weekly Cloudberry Journal spread',
    width: 1080,
    height: 675,
  },
   {
    src: '/images/inspiration/wild-and-free.jpg',
    alt: 'Wild and Free Cloudberry Journal spread',
    width: 1080,
    height: 1080,
  },
    {
    src: '/images/inspiration/succulents.jpg',
    alt: 'Succulent-inspired Cloudberry Journal spread',
    width: 1080,
    height: 675,
  },
  
]

export function CloudberryInspiration() {
  return (
    <main>
      <CloudberryHeader />

      {/* Intro */}
      <section className="inspiration-intro content-width">
        <p className="eyebrow">Inspiration</p>

        <h1>Get inspired.</h1>

        <p>
          See what others have done with their Cloudberry Journals—and find a
          few ideas to get you started.
        </p>
      </section>

      {/* Inspiration gallery */}
      <section className="inspiration-gallery content-width">
        {images.map((image, index) => (
          <figure className="gallery-item" key={image.src}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="gallery-image"
              priority={index < 6}
            />
          </figure>
        ))}
      </section>

      {/* Closing CTA */}
      <section className="inspiration-closing">
        <div className="content-width">
          <p className="eyebrow">Make it yours</p>

          <h2>Your journal. Your way.</h2>

          <a
            className="brand-button"
            href="https://www.etsy.com/shop/CloudberryJournals"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop the journal <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <CloudberryFooter />
      <CloudberryShellStyles />

      <style>{`
        .inspiration-intro {
          padding-block: clamp(3.5rem, 7vw, 6rem) clamp(2.5rem, 5vw, 4rem);
        }

        .inspiration-intro h1 {
          color: var(--cloudberry-dusty-rose);
          font-family: var(--font-accent);
          font-size: clamp(3.5rem, 6vw, 6rem);
          font-weight: 400;
          letter-spacing: 0;
          line-height: .95;
          margin: .65rem 0 1rem;
        }

        .inspiration-intro > p:last-child {
          font-family: var(--font-display);
          font-size: clamp(1.25rem, 2vw, 1.55rem);
          line-height: 1.25;
          max-width: 38rem;
        }

        .inspiration-gallery {
          column-count: 3;
          column-gap: clamp(.75rem, 1.5vw, 1.25rem);
          padding-bottom: var(--section-space);
        }

        .gallery-item {
          break-inside: avoid;
          margin: 0 0 clamp(.75rem, 1.5vw, 1.25rem);
          overflow: hidden;
        }

        .gallery-image {
          display: block;
          height: auto;
          transition: transform .5s ease;
          width: 100%;
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.015);
        }

        .inspiration-closing {
          background: var(--cloudberry-pale-sage);
          padding-block: clamp(4rem, 8vw, 7rem);
          text-align: center;
        }

        .inspiration-closing h2 {
          color: var(--cloudberry-deep-navy);
          font-size: clamp(2.75rem, 5vw, 5rem);
          margin: .6rem auto 1.75rem;
        }

        @media (max-width: 900px) {
          .inspiration-gallery {
            column-count: 2;
          }
        }

        @media (max-width: 600px) {
          .inspiration-intro {
            padding-block: 3.5rem 2.5rem;
          }

          .inspiration-gallery {
            column-count: 1;
          }

          .gallery-item {
            margin-bottom: .75rem;
          }

          .inspiration-closing {
            padding-block: 4rem 5rem;
          }
        }
      `}</style>
    </main>
  )
}

export default CloudberryInspiration