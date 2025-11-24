import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  'Getting Started': {
    'Installing Rust and writing your first program': 1,
    'Understanding Cargo': 8,
    'Building and running projects': 10,
  },
  'A Real Program': {
    'Fetching data asynchronously': 11,
    'Working with external crates': 12,
    'Handling JSON and user input': 13,
  },
  'Core Concepts': {
    'Variables and types': 18,
    'Shadowing and mutability': 19,
    'Tuples and arrays': 21,
    'Expressions vs statements': 21,
  },
  'Ownership and Borrowing': {
    'Stack vs heap': 23,
    'Scopes and moves': 24,
    'References and borrowing': 26,
    Slices: 26,
  },
  'Structs, Enums, and Traits': {
    'Defining structs': 28,
    'Enums and pattern matching': 33,
    'Trait implementations': 67,
  },
  Collections: {
    Vectors: 44,
    Strings: 47,
    'Hash Maps': 49,
    'Collection projects': 51,
  },
  'Errors and Testing': {
    'Recoverable vs unrecoverable errors': 53,
    'The ? operator': 57,
    'Unit testing': 73,
    'Integration testing': 76,
  },
  'Generics and Lifetimes': {
    'Lifetime annotations': 60,
    'Generic types': 63,
    'Traits and bounds': 68,
  },
  'Concurrency and Patterns': {
    'Threads and mutexes': 115,
    'Smart pointers': 104,
    'Destructuring and patterns': 123,
  },
  'Real-World Rust': {
    Benchmarking: 131,
    'Building a portfolio allocation library': 79,
    'Full-stack Rust web app': 137,
  },
}

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          Table of contents
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Get a look at all of the content covered in the book. Everything you
          need to know is inside.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          “Rust With Jason” is comprised tightly edited, pages designed to teach
          you everything you need as a modern Rust learning companion with a
          no-nonsense approach.
        </p>
        <Expandable>
          <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
            <ExpandableItems>
              {Object.entries(tableOfContents).map(([title, pages]) => (
                <li key={title}>
                  <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                    {title}
                  </h3>
                  <ol
                    role="list"
                    className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
                  >
                    {Object.entries(pages).map(([title, pageNumber]) => (
                      <li
                        key={title}
                        className="flex justify-between py-3"
                        aria-label={`${title} on page ${pageNumber}`}
                      >
                        <span
                          className="font-medium text-slate-900"
                          aria-hidden="true"
                        >
                          {title}
                        </span>
                        <span
                          className="font-mono text-slate-400"
                          aria-hidden="true"
                        >
                          {pageNumber}
                        </span>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ExpandableItems>
          </ol>
          <ExpandableButton>See more</ExpandableButton>
        </Expandable>
      </Container>
    </section>
  )
}
