<script lang="ts">
  import { cn } from '@/utils';
  import type { IconProps } from '@/types/icons.type';

  let { width = 24, height = 24, styles = '' }: IconProps = $props();
</script>

<svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="4 0 17 25"
  fill="currentColor"
  {width} 
  {height} 
  class={cn(styles, 'fill-black dark:fill-white')}
>
  <path d="M12 25a8 8 0 1 1 0-16v16zM12 0H4v8h8V0zM17 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
</svg>
