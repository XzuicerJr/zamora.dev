<script lang="ts">
  import { cn } from '@/utils';

  interface Props {
    extraClasses?: string;
    children?: import('svelte').Snippet;
  }

  let { extraClasses = '', children }: Props = $props();
</script>

<div
  class={cn(
    "animate-shine cursor-default inline-flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-800 bg-[linear-gradient(110deg,#f5f5f5,45%,#d4d4d4,55%,#f5f5f5)] dark:bg-[linear-gradient(110deg,#171717,45%,#262626,55%,#171717)] bg-[length:200%_100%] px-2 py-0.5 text-[0.625rem] font-medium text-neutral-700 dark:text-neutral-200 transition-colors",
    extraClasses
  )}
>
  {@render children?.()}
</div>
