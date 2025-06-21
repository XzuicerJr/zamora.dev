<script lang="ts">
  import '@/styles/globals.css';

  import { ModeWatcher } from 'mode-watcher';
  import { browser, dev } from '$app/environment';

  import Header from '@/components/header.svelte';
  import Footer from '@/components/footer.svelte';

  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

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

<section class="relative flex min-h-screen flex-col py-4 md:py-6">
  <Header />
  {@render children?.()}
  <Footer />
</section>

<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-S8V4YT48DQ"></script>
</svelte:head>
