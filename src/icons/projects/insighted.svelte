<script lang="ts">
  import { cn } from '@/utils';
  import type { IconProps } from '@/types/icons.type';
  let { width = 24, height = 24, styles = '' }: IconProps = $props();
</script>

<svg 
  viewBox="0 0 119 119"
  fill="currentColor" 
  xmlns="http://www.w3.org/2000/svg"
  {width}
  {height}
  class={cn(styles, 'text-white bg-black rounded-md p-1')}
>
  <path
    d="M0 28C0 12.536 12.536 0 28 0h86.46L97 18H31.37L64 50.5 51 64 18 31v65.5l-18 18V28ZM118 92.5c.275 14.296-11.205 26.05-25.504 26.112L3.5 119l17-18L41 80.5 53.5 68 87 34.5v26L47.5 100h45.266l.508-.222A11.9 11.9 0 0 0 100 92l-.468-69.928L118 3.5v89Z"
    fill="currentColor"
  />
</svg>

