<template>
  <section id="top" class="hero inverse" aria-labelledby="hero-title">
    <div class="wrap hero-inner">
      <p class="eyebrow">Software Engineer · Portugal</p>
      <h1 id="hero-title">Eduardo Teixeira</h1>
      <p class="lede">
        I'm a full stack software engineer at the start of my careeron software development, integrations and
        infrastructure at KEEP Solutions. I've speciliazed on deep learning research for medical imaging in BiRDLAB (University of Minho).
      </p>
      <p class="actions">
        <a href="#work">Career</a>
        <a href="#contact">Get in touch</a>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BannerSection',
};
</script>

<style scoped lang="scss">
.hero {
  padding-block: var(--space-9) var(--space-8);
}

.hero-inner {
  display: grid;
  gap: var(--space-5);
}

.lede {
  max-width: 58ch;
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.6;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-6);
  margin: 0;
  font-weight: 500;
}

@media (max-width: 600px) {
  .hero {
    padding-block: var(--space-8) var(--space-7);
  }

  .lede {
    font-size: 1.1rem;
  }
}
</style>
