import { tv, type VariantProps } from 'tailwind-variants';

const badgeVariants = tv({
  base: 'inline-flex cursor-default items-center space-x-2 rounded-md border px-2 py-1 font-mono text-xs font-medium',
  variants: {
    variant: {
      default:
        'border-neutral-300 bg-neutral-200/50 text-neutral-700 dark:border-neutral-800 dark:bg-neutral-800/60 dark:text-neutral-300',
      success: 'border-green-500 bg-green-500/10 text-green-500',
      warning: 'border-orange-500 bg-orange-500/10 text-orange-500'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

type Variant = VariantProps<typeof badgeVariants>['variant'];

export { badgeVariants, type Variant };
