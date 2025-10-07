<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { Button } from '@/ui/button';
  import { ExternalLink, Home } from 'lucide-svelte';
  
  import ViewContainer from '@/components/viewContainer.svelte';

  $: error = $page.error;
  $: status = $page.status;

  function goHome() {
    goto('/');
  }
</script>

<svelte:head>
  <title>Page Not Found - zmra.dev</title>
  <meta name="description" content="The page you're looking for doesn't exist." />
</svelte:head>

<ViewContainer class="delay-0 duration-500 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards flex flex-col justify-center items-center space-y-6 text-center">
  <div class="space-y-2 flex flex-col items-center">
    <h1 class="text-6xl font-bold text-gray-900 dark:text-white md:text-8xl">
      {status}
    </h1>
    <h2 class="text-xl text-gray-600 dark:text-gray-400 md:text-2xl">
      {status === 404 ? 'Page Not Found' : 'Something went wrong'}
    </h2>
  </div>

  {#if status === 404}
    <p class="max-w-md text-gray-500 dark:text-gray-400">
      The page you're looking for doesn't exist or has been moved.
    </p>
  {:else}
    <p class="max-w-md text-gray-500 dark:text-gray-400">
      An unexpected error occurred. Please try again later.
    </p>
  {/if}

  <Button
    variant="ghost"
    on:click={goHome}
    class="border border-gray-500 bg-gray-500/10 hover:bg-gray-500/20 space-x-1 group"
  >
    <span class="decoration-dotted underline-offset-[0.3125rem] group-hover:underline">Go Home</span>
    <span class="relative size-4">
      <Home height={16} class="absolute size-4 transition-all duration-100 group-hover:opacity-0 group-hover:size-0 group-focus-within:opacity-0 group-focus-within:size-0" />
      <ExternalLink height={16} class="absolute size-0 transition-all duration-100 group-hover:opacity-100 group-hover:size-4 group-focus-within:opacity-100 group-focus-within:size-4" />
    </span>
  </Button>
</ViewContainer>
