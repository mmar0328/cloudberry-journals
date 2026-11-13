import Image from 'next/image'

const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-DlfglfIZWMG79XXeelWEcWLNgktMld.jpg'
const etsy = 'https://www.etsy.com/shop/CloudberryJournals'

export function CloudberryHeader() {
  return (
    <header className="site-header">
      <a href="/" aria-label="Cloudberry Journals home">
        <Image src={logo} alt="Cloudberry Journals" width={540} height={135} className="site-logo" priority />
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/our-story">Our Story</a>
        <a href="/inspiration">Inspiration</a>
        <a href="/contact">Contact</a>
      </nav>
      <a
        className="header-shop"
        href={etsy}
        target="_blank"
        rel="noopener noreferrer"
      >
        Shop Journal <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}

export function CloudberryFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Image
          src={logo}
          alt="Cloudberry Journals"
          width={680}
          height={170}
          className="site-logo"
        />
      </div>

      <nav aria-label="Footer navigation">
        <a href="/">Home</a>
        <a href="/our-story">Our Story</a>
        <a href="/inspiration">Inspiration</a>
        <a href="/contact">Contact</a>
        <a href="/shop" className="footer-shop-link">
          Shop Journal <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <p className="copyright">© 2026 Cloudberry Journals</p>
    </footer>
  )
}

export function CloudberryShellStyles() {
  return (
    <style>{`
      .content-width { width: min(100% - 3rem, 76rem); margin-inline: auto; }
      .eyebrow { color: var(--cloudberry-charcoal); font-family: var(--font-body); font-size: .6875rem; font-weight: 500; letter-spacing: .22em; line-height: 1.4; text-transform: uppercase; }
      .script-accent { font-family: var(--font-accent); font-size: 1.25em; font-weight: 400; letter-spacing: 0; }
      .image-treatment { display: block; height: 100%; object-fit: cover; width: 100%; }
      .brand-button { align-items: center; background: var(--cloudberry-deep-navy); border: 0; color: var(--cloudberry-white); display: inline-flex; font-size: .65rem; gap: 1.5rem; letter-spacing: .18em; padding: 1rem 1.3rem; text-decoration: none; text-transform: uppercase; transition: background .2s ease, transform .2s ease; }
      .brand-button:hover { background: var(--cloudberry-dusty-rose); transform: translateY(-2px); }
      .brand-button--inverted { background: var(--cloudberry-cream); color: var(--cloudberry-deep-navy); }
      .brand-button--rose {background: var(--cloudberry-dusty-rose); color: var(--cloudberry-white);}
      .brand-button--rose:hover {background: var(--cloudberry-blush); color: var(--cloudberry-deep-navy);}
      .site-header { align-items: center; background: var(--cloudberry-cream); display: flex; gap: 2rem; justify-content: space-between; padding: 1.25rem max(1.25rem, calc((100vw - 76rem) / 2)); position: relative; z-index: 2; }
      .site-logo { display: block; height: auto; mix-blend-mode: multiply; width: clamp(13rem, 20vw, 17rem); }
      .desktop-nav { display: flex; gap: clamp(1rem, 3vw, 2.75rem); margin-left: auto; }
      .desktop-nav a, .header-shop, .site-footer a { color: var(--cloudberry-ink); font-size: .65rem; letter-spacing: .16em; text-decoration: none; text-transform: uppercase; }
      .header-shop { border-bottom: 1px solid var(--cloudberry-ink); padding-bottom: .35rem; }
      .site-footer { background: var(--cloudberry-cream); display: grid; grid-template-columns: 1fr auto; align-items: end;padding: 3rem max(1.25rem, calc((100vw - 76rem) / 2)) 4rem; position: relative; }
      .site-footer .site-logo { width: 18rem !important;  height: auto !important;}
      .site-footer p { font-family: var(--font-display); font-size: 1.25rem; line-height: 1.15;}
      .site-footer nav { display: flex; flex-direction: column; gap: .75rem; }
      .site-footer .copyright { position: absolute; left: 50%; bottom: 1.5rem; transform: translateX(-50%); margin: 0; text-align: center; white-space: nowrap;}
      .copyright { bottom: 1.5rem; color: var(--cloudberry-charcoal); font-family: var(--font-body) !important; font-size: .6rem !important; letter-spacing: .1em; position: absolute; right: max(1.25rem, calc((100vw - 76rem) / 2)); text-transform: uppercase; }
      @media (max-width: 800px) {
        .content-width { width: min(100% - 2.5rem, 76rem); }
        .site-header { padding: 1rem 1.25rem; }
        .desktop-nav { display: none; }
        .header-shop { margin-left: auto; }
        .site-footer { grid-template-columns: 1fr 1fr; padding: 3rem 1.25rem 5rem; }
        .footer-etsy { grid-column: 2; grid-row: 1; justify-self: end; }
        .copyright { bottom: 1.5rem; left: 1.25rem; right: auto; }
      }
      @media (max-width: 420px) { .header-shop { font-size: .56rem; } .site-logo { width: 12rem; } }
    `}</style>
  )
}
