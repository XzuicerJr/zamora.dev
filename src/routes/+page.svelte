<script lang="ts">
  import ViewContainer from '@/components/viewContainer.svelte';
  
  import About from '@/components/about.svelte';
  import Experience from '@/components/experience.svelte';
  import Projects from '@/components/featuredProjects.svelte';
</script>

<svelte:head>
  <title>César Zamora - zmra.dev</title>
  <meta property="og:title" content="César Zamora" />
  <meta property="og:description" content="Building cool stuff" />
  <meta name="image" property="og:image" content="https://zmra.dev/images/readme-img.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
</svelte:head>

<ViewContainer class="grid items-center gap-14 py-4 md:py-4">
  <About />
  <Projects />
  <Experience />
</ViewContainer>
