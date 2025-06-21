<script lang="ts">
  import { featuredProjects } from '@/data/featuredProjects';
  import { ArrowRight } from 'lucide-svelte';

  import ProjectCard from './featuredProjectCard.svelte';
  import { cn } from '@/utils';
</script>

<section
  class={cn(
    'flex flex-col space-y-4',
    'delay-100 duration-500 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards'
  )}
>
  <h2 class="text-xl font-medium">Projects</h2>
  <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
    {#each featuredProjects as project}
      <ProjectCard {...project} />
    {/each}
  </div>
</section>
