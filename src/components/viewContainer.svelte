<script>
  import { cn } from '@/utils';
  
  const { children, class: className } = $props();
</script>

<main class={cn('container max-w-4xl flex-1', className)}>
  {@render children?.()}
</main>
