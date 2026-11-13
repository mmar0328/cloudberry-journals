'use client'

import { FormEvent, useState } from 'react'
import {
  CloudberryFooter,
  CloudberryHeader,
  CloudberryShellStyles,
} from './cloudberry-shell'

export default function CloudberryContact() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget

    if (!form.checkValidity()) {
      setError('Please complete each field before sending.')
      return
    }

    setError('')
    setSubmitted(false)

    try {
      const formData = new FormData(form)

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString(),
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      setSubmitted(true)
      form.reset()
    } catch {
      setError(
        'Something went wrong while sending your message. Please try again.'
      )
    }
  }

  return (
    <main>
      <CloudberryHeader />

      <section className="contact-section bg-[var(--cloudberry-pale-sage)]">
        <div className="contact-page content-width">
          <div className="contact-intro">
            <p className="eyebrow">Get in touch</p>

            <h1>
              We&apos;d love to
              <br />
              <span>hear from you.</span>
            </h1>

            <p>
              Have a question about Cloudberry Journals? We&apos;d love to hear
              from you.
            </p>
          </div>

          <form
            className="contact-form"
            name="cloudberry-contact"
            method="POST"
            onSubmit={handleSubmit}
            noValidate
          >
            <input
              type="hidden"
              name="form-name"
              value="cloudberry-contact"
            />

            <label htmlFor="contact-name">Name</label>

            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
            />

            <label htmlFor="contact-email">Email</label>

            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />

            <label htmlFor="contact-message">Message</label>

            <textarea
              id="contact-message"
              name="message"
              rows={6}
              required
            />

            <button className="brand-button" type="submit">
              Send message <span aria-hidden="true">↗</span>
            </button>

            {error && (
              <p className="form-message form-message--error" role="alert">
                {error}
              </p>
            )}

            {submitted && (
              <p className="form-message" role="status">
                Thanks for reaching out. We&apos;ll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </section>

      <CloudberryFooter />
      <CloudberryShellStyles />

      <style>{`
        .contact-section {
          background: var(--cloudberry-pale-sage);
        }

        .contact-page {
          display: grid;
          gap: clamp(3rem, 9vw, 9rem);
          grid-template-columns: .9fr 1.1fr;
          padding-block: clamp(4rem, 8vw, 7rem);
        }

        .contact-intro h1 {
          color: var(--cloudberry-deep-navy);
          font-size: clamp(3.25rem, 5.5vw, 5.8rem);
          line-height: .95;
          margin: .7rem 0 1.25rem;
        }

        .contact-intro h1 span {
          color: var(--cloudberry-dusty-rose);
          font-family: var(--font-accent);
          font-size: 1.05em;
          font-weight: 400;
          letter-spacing: 0;
        }

        .contact-intro > p:last-child {
          font-family: var(--font-display);
          font-size: 1.35rem;
          line-height: 1.25;
          max-width: 22rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
        }

        .contact-form label {
          color: var(--cloudberry-deep-navy);
          font-size: .68rem;
          letter-spacing: .12em;
          margin-top: 1.15rem;
          text-transform: uppercase;
        }

        .contact-form input,
        .contact-form textarea {
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--border);
          border-radius: 0;
          color: var(--cloudberry-ink);
          font-family: var(--font-body);
          font-size: .9rem;
          outline: 0;
          padding: .7rem 0;
          resize: vertical;
          width: 100%;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-bottom-color: var(--cloudberry-deep-navy);
          box-shadow: 0 1px 0 var(--cloudberry-deep-navy);
        }

        .contact-form input:invalid:not(:placeholder-shown),
        .contact-form textarea:invalid:not(:placeholder-shown) {
          border-bottom-color: var(--cloudberry-dusty-rose);
        }

        .contact-form .brand-button {
          align-self: flex-start;
          border: 0;
          cursor: pointer;
          margin-top: 1.75rem;
        }

        .form-message {
          color: var(--cloudberry-deep-navy);
          font-family: var(--font-display);
          font-size: 1.2rem;
          margin-top: 1.25rem;
        }

        .form-message--error {
          color: var(--cloudberry-dusty-rose);
          font-family: var(--font-body);
          font-size: .75rem;
        }

        @media (max-width: 800px) {
          .contact-page {
            display: block;
            padding-block: 4rem 5rem;
          }

          .contact-form {
            margin-top: 3rem;
          }

          .contact-divider {
            height: 9rem;
          }

          .contact-divider-mark img {
            height: 10rem;
            width: 10rem;
          }
        }
      `}</style>
    </main>
  )
}