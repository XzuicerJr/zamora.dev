<script lang="ts">
  // Sections:
  import About from '@/components/about.svelte';
  import Experience from '@/components/experience.svelte';
  import Projects from '@/components/featuredProjects.svelte';
</script>

<svelte:head>
  <title>César Zamora - zamora.dev</title>
  <meta property="og:title" content="César Zamora" />
  <meta property="og:description" content="Building amazing things" />
  <meta name="image" property="og:image" content="https://zamora.dev/images/readme_img.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
</svelte:head>

<div class="grid items-center gap-14 py-4 md:py-4">
  <About />
  <Projects />
  <Experience />
</div>
