import Image from 'next/image'
import Link from 'next/link'

import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import authorImage from '@/images/avatars/author.jpg'

export function Author() {
  return (
    <section
      id="author"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pt-8 pb-3 sm:scroll-mt-32 sm:pt-10 sm:pb-16 lg:pt-16"
    >
      <div className="absolute inset-x-0 top-1/2 bottom-0 mask-[linear-gradient(transparent,white)] text-slate-900/10">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={authorImage}
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <SectionHeading number="5" id="author-title">
              Author
            </SectionHeading>
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              <span className="block text-orange-600">
                Jason R. Stevens, CFA -
              </span>{' '}
              Hey there, I’m the Jason behind ‘Rust With Jason’.
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              {`I’ve been building software professionally for over a decade and
              have built applications ranging from institutional trading systems
              and securities pricers to consumer web and mobile aplications. I’m
              also a Chartered Financial Analyst (CFA) charterholder, with deep
              experience in the financial and investment management industries.
              As teaching staff in the graduate department of Financial
              Mathematics at the University of Chicago, I've had the privilege
              helping to educate the next generation of quants and financial
              engineers.`}
            </p>
            <p className="mt-8">
              <Link
                href="https://thinkjrs.dev"
                className="inline-flex items-center text-base font-medium tracking-tight text-slate-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="">➡️ Read my blog</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
