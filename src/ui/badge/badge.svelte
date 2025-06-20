<script lang="ts">
  import { cn } from '@/utils';
  import { badgeVariants, type Variant } from './badge.js';

  interface Props {
    extraClasses?: string;
    variant?: Variant;
    children?: import('svelte').Snippet;
  }

  let { extraClasses = '', variant = 'default', children }: Props = $props();
</script>

<span
  class={cn(
    badgeVariants({ variant }),
    extraClasses
  )}
>
  {@render children?.()}
</span>
