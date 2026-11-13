
import Image from 'next/image'
import {
  CloudberryFooter,
  CloudberryHeader,
  CloudberryShellStyles,
} from './cloudberry-shell'

const etsy = 'https://www.etsy.com/shop/CloudberryJournals'

const images = {
  journal: '/images/inspiration/eucalyptus.jpg',
  megan: '/images/megan-portrait.jpg',
}

export function CloudberryStory() {
  return (
    <main>
      <CloudberryHeader />

      <section className="story-intro">
        <div className="content-width story-intro-grid">
          <div className="story-intro-copy">
            <p className="eyebrow">Our story</p>
            <h1>
              A little idea, <em>born out of real life.</em>
            </h1>
            <p>
              Cloudberry Journals began with a simple frustration: we wanted
              the beauty and flexibility of creative journaling without
              spending hours setting up every page.
            </p>
            <p>
              We believed the structure should be there when you needed it,
              leaving you free to make the journal your own—and spend more
              time doing what you love.
            </p>
          </div>

          <div className="story-intro-image">
            <Image
              src={images.journal}
              alt="A Cloudberry Journal decorated with botanical details"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 48vw"
              className="image-treatment"
            />
          </div>
        </div>
      </section>

      <section className="story-founder">
        <div className="content-width story-founder-grid">
          <div className="story-founder-image">
            <Image
              src={images.megan}
              alt="Megan, owner of Cloudberry Journals"
              fill
              sizes="(max-width: 800px) 100vw, 42vw"
              className="image-treatment"
            />
          </div>

          <div className="story-founder-copy">
            <p className="eyebrow">A note from the founder</p>
            <h2>
              Hi, I'm <em>Megan.</em>
            </h2>
            <p>
              Cloudberry grew out of my belief that organization should
              support your life, not become another thing that takes you
              away from it.
            </p>
            <p>
              Today, I continue that vision through Cloudberry Journals.
              My hope is that these journals give you a little structure,
              a little creative freedom, and more room for the things you
              love.
            </p>
            <p className="story-signoff">With joy, Megan</p>
          </div>
        </div>
      </section>

      <section className="story-closing content-width">
        <p className="eyebrow">Make it yours</p>
        <h2>
          Your journal.
          <br />
          <em>Your way.</em>
        </h2>
        <a
            className="brand-button"
            href="https://www.etsy.com/shop/CloudberryJournals"
            target="_blank"
            rel="noopener noreferrer"
            > 
            Shop the journal <span aria-hidden="true">↗</span>
          </a>
      </section>

      <CloudberryFooter />
      <CloudberryShellStyles />

      <style>{`
        .story-intro {
          background: var(--cloudberry-cream);
          padding: clamp(2.5rem, 4vw, 4rem) 0;
        }

        .story-intro-grid {
          align-items: center;
          display: grid;
          gap: clamp(2rem, 5vw, 4rem);
          grid-template-columns: 1fr 1fr;
        }

        .story-intro-copy h1 {
          color: var(--cloudberry-deep-navy);
          font-size: clamp(2.8rem, 4.3vw, 4.5rem);
          line-height: 1.02;
          margin: 0.75rem 0 1rem;
          max-width: 11ch;
        }

        .story-intro-copy h1 em,
        .story-founder-copy h2 em,
        .story-closing h2 em {
          color: var(--cloudberry-dusty-rose);
          font-style: italic;
        }

        .story-intro-copy > p:not(.eyebrow) {
          line-height: 1.7;
          max-width: 34rem;
        }

        .story-intro-copy > p + p {
          margin-top: 0.75rem;
        }

        .story-intro-image {
          height: clamp(19rem, 29vw, 27rem);
          position: relative;
        }

        .story-founder {
          background: var(--cloudberry-pale-sage);
          padding: clamp(2.5rem, 4vw, 4rem) 0;
        }

        .story-founder-grid {
          align-items: center;
          display: grid;
          gap: clamp(2rem, 5vw, 4rem);
          grid-template-columns: 0.8fr 1.2fr;
          max-width: 68rem;
        }

        .story-founder-image {
          height: clamp(19rem, 29vw, 27rem);
          position: relative;
        }

        .story-founder-copy h2 {
          color: var(--cloudberry-deep-navy);
          font-size: clamp(2.5rem, 3.8vw, 3.8rem);
          line-height: 1.05;
          margin: 0.6rem 0 1rem;
        }

        .story-founder-copy > p:not(.eyebrow):not(.story-signoff) {
          line-height: 1.7;
          max-width: 34rem;
        }

        .story-founder-copy > p + p {
          margin-top: 0.75rem;
        }

        .story-signoff {
          color: var(--cloudberry-dusty-rose);
          font-family: var(--font-accent);
          font-size: 2.25rem;
          margin-top: 1rem;
        }

        .story-closing {
          padding-block: clamp(3rem, 5vw, 4.5rem);
          text-align: center;
        }

        .story-closing h2 {
          color: var(--cloudberry-deep-navy);
          font-size: clamp(2.7rem, 4.5vw, 4rem);
          line-height: 1.05;
          margin: 0.75rem 0 1.5rem;
        }

        @media (max-width: 800px) {
          .story-intro,
          .story-founder {
            padding-block: 2.5rem;
          }

          .story-intro-grid,
          .story-founder-grid {
            grid-template-columns: 1fr;
          }

          .story-intro-copy h1 {
            font-size: clamp(2.8rem, 9vw, 4rem);
          }

          .story-intro-image {
            height: 22rem;
          }

          .story-founder-image {
            height: 22rem;
            max-width: 28rem;
            width: 100%;
          }

          .story-founder-copy {
            max-width: 38rem;
          }
        }

        @media (max-width: 480px) {
          .story-intro-image,
          .story-founder-image {
            height: 19rem;
          }
        }

       `}</style>
    </main>
  )
}

export default CloudberryStory
