<script lang="ts">
  import '@/styles/globals.css';

  import { ModeWatcher } from 'mode-watcher';
  import { browser, dev } from '$app/environment';

  import Header from '@/components/header.svelte';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  const currentYear = new Date().getFullYear();

  if (browser && !dev) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', 'G-S8V4YT48DQ');
  }
</script>

<ModeWatcher />

<main class="relative flex min-h-screen flex-col py-4 md:py-6">
  <Header />
  <div class="container max-w-4xl flex-1">
    {@render children?.()}
  </div>
  <footer
    class="container mt-10 flex max-w-4xl flex-col items-center justify-center space-y-1 md:flex-row md:justify-between md:space-y-0"
  >
    <p class="font-gambarino">👾 Building cool stuff</p>
    <div class="flex items-center space-x-1 text-sm md:text-md">
      <h2>César Zamora</h2>
      <span class="text-gray-500 dark:text-gray-400">-</span>
      <p>{currentYear}</p>
    </div>
  </footer>
</main>

<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-S8V4YT48DQ"></script>
</svelte:head>
