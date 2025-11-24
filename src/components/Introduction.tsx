import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          {`“Rust With Jason” is your essential guide to rocking Rust, the modern
          systems programming language that's taking the software world by
          storm.`}
        </p>
        <p className="mt-4">
          {`Whether you're an experienced developer looking to expand your
          language set or a beginner eager to dive into the world of systems
          programming, this book is designed to equip you with the knowledge and
          practical skills you need.`}
        </p>
        <p className="mt-4">
          But it turns out this isn’t how great icon designers work at all.
          {`Rust is known for its emphasis on safety, speed, and concurrency – qualities that are indispensable in today's software development landscape.`}
        </p>
        <p className="mt-4">
          {`In this comprehensive guide, you'll explore the core concepts of Rust, from basic syntax and data types to more advanced topics like ownership, lifetimes, and concurrency. Each chapter is packed with clear explanations, practical examples, and hands-on exercises to reinforce your learning and build your confidence.`}
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Understanding Rust’s memory model so you can reason clearly about ownership, borrowing, and lifetimes',
            'Building real programs as you go, from small command line tools to async networked apps',
            'Working with Rust’s core building blocks and using them together to shape meaningful programs',
            'Developing reliable habits around errors, testing, benchmarking, and project structure',
            'Applying Rust to practical engineering problems and turning concepts into working systems',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-orange-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          {`By the end of this journey, you'll not only have a deep understanding of Rust's capabilities but also the ability to apply your knowledge to real-world projects. Whether you're building web applications, developing low-level systems software, or exploring new programming paradigms, "Rust with Jason" will be your trusted companion on this exciting adventure.`}
        </p>
        <p className="mt-8">
          {`Join the growing community of Rustaceans and unlock the full potential of Rust. Get your copy of "Rust With Jason" today and start crafting robust, reliable, and high-performance software!`}
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-orange-600 hover:text-orange-800"
          >
            Get two free chapters straight to your inbox{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
