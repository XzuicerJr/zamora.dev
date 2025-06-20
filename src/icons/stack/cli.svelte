<script lang="ts">
  import { cn } from '@/utils';
  import type { IconProps } from '@/types/icons.type';

  let { width = 24, height = 24, styles = '' }: IconProps = $props();
</script>

<svg 
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 25 24"
  fill="none"
  {width}
  {height}
  class={cn(styles, 'stroke-black dark:stroke-white')}
>
  <path
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M4.336 17l6-6-6-6M12.336 19h8"
  />
</svg>
     
