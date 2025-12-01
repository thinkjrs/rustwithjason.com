'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Pattern } from '@/components/Pattern'

export function FreeChapters() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.')
      }

      setSubmitMessage("Success! Check your inbox for the free chapters.")
      setEmail('')
    } catch (error) {
      if (error instanceof Error) {
        setSubmitMessage(`Error: ${error.message}`)
      } else {
        setSubmitMessage('An unknown error occurred.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="free-chapters"
      aria-label="Free preview"
      className="scroll-mt-14 bg-orange-600 sm:scroll-mt-32"
    >
      <div className="overflow-hidden lg:relative">
        <Container
          size="md"
          className="relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
        >
          <Pattern className="absolute -top-32 left-0 w-full sm:-top-5 sm:left-3/4 sm:ml-8 sm:w-auto md:left-2/3 lg:right-2 lg:left-auto lg:ml-0 xl:right-auto xl:left-2/3" />
          <div>
            <h2 className="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
              Get the free sample chapters
            </h2>
            <p className="mt-4 text-lg tracking-tight text-orange-200">
              Enter your email address and I’ll send you a sample from the book
              containing two of my favorite chapters.
            </p>
          </div>
          <form className="lg:pl-16" onSubmit={handleSubmit}>
            <h3 className="text-base font-medium tracking-tight text-white">
              Get two free chapters straight to your inbox{' '}
              <span aria-hidden="true">&rarr;</span>
            </h3>
            <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
              <div className="relative sm:static sm:flex-auto">
                <input
                  type="email"
                  id="email-address"
                  required
                  aria-label="Email address"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-hidden sm:py-3"
                />
                <div className="absolute inset-0 rounded-md border border-white/20 peer-focus:border-orange-300 peer-focus:bg-orange-500 peer-focus:ring-1 peer-focus:ring-orange-300 sm:rounded-xl" />
              </div>
              <Button
                type="submit"
                color="white"
                className="mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Get free chapters'}
              </Button>
            </div>
            {submitMessage && (
              <p className="mt-4 text-sm text-white">{submitMessage}</p>
            )}
          </form>
        </Container>
      </div>
    </section>
  )
}
