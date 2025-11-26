import { GridPattern } from '@/components/GridPattern'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="relative pt-5 pb-20 sm:pt-14 sm:pb-32">
      <div className="absolute inset-x-0 top-0 h-32 mask-[linear-gradient(white,transparent)] text-slate-900/10">
        <GridPattern x="50%" />
      </div>
      <div className="relative text-center text-sm text-slate-600">
        <p>
          Copyright &copy; {new Date().getFullYear()}{' '}
          <Link
            href="https://0x3f1.com"
            target="_blank"
            className="hover:text-slate-500"
          >
            <code>0x3f1 Licensing LLC</code>
          </Link>
        </p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  )
}
