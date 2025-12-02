// src/components/Button.tsx
import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm',
  outline:
    'inline-flex justify-center rounded-md border py-[calc(--spacing(1)-1px)] px-[calc(--spacing(4)-1px)] text-base font-semibold tracking-tight',
}

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-slate-900',
    blue: 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600',
    orange:
      'bg-orange-600 text-white hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:bg-orange-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-orange-600',
    white:
      'bg-white text-orange-600 hover:text-orange-700 focus-visible:text-orange-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-orange-50 active:text-orange-900/80 disabled:opacity-40 disabled:hover:text-orange-600',
  },
  outline: {
    slate:
      'border-slate-200 text-slate-900 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 active:border-slate-200 active:bg-slate-50 active:text-slate-900/70 disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:bg-transparent',
    blue: 'border-blue-300 text-blue-600 hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:text-blue-600/70 disabled:opacity-40 disabled:hover:border-blue-300 disabled:hover:bg-transparent',
    orange:
      'border-orange-300 text-orange-600 hover:border-orange-400 hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:text-orange-600/70 disabled:opacity-40 disabled:hover:border-orange-300 disabled:hover:bg-transparent',
  },
}

type VariantProps =
  | {
      variant?: 'solid'
      color?: keyof typeof variantStyles.solid
    }
  | {
      variant: 'outline'
      color?: keyof typeof variantStyles.outline
    }

type LinkLikeProps = Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>

type ButtonAsLink = VariantProps &
  LinkLikeProps & {
    disabled?: boolean
  }

type NativeButtonProps = Omit<
  React.ComponentPropsWithoutRef<'button'>,
  'color'
> & {
  href?: undefined
}

type ButtonAsButton = VariantProps & NativeButtonProps

export type ButtonProps = ButtonAsLink | ButtonAsButton

export function Button({ className, ...props }: ButtonProps) {
  const variant = props.variant ?? 'solid'
  const color =
    props.color ??
    (variant === 'outline'
      ? ('slate' as keyof typeof variantStyles.outline)
      : ('slate' as keyof typeof variantStyles.solid))

  const classes = clsx(
    baseStyles[variant],
    variant === 'outline'
      ? variantStyles.outline[color as keyof typeof variantStyles.outline]
      : variantStyles.solid[color as keyof typeof variantStyles.solid],
    className,
  )

  const isLink = 'href' in props && props.href !== undefined && !props.disabled

  if (isLink) {
    const { href, disabled: _disabled, ...linkProps } = props as ButtonAsLink

    return <Link href={href} className={classes} {...linkProps} />
  }

  const { disabled, href: _href, ...buttonProps } = props as ButtonAsButton

  return <button className={classes} disabled={disabled} {...buttonProps} />
}
