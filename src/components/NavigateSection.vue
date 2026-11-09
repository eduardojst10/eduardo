<template>
  <header class="site-header inverse">
    <a class="skip-link" href="#main">Skip to content</a>
    <nav class="wrap nav" aria-label="Main">
      <a class="name" href="#top">Eduardo Teixeira</a>
      <ul class="links">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href">{{ link.label }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavigateSection',
  data: () => ({
    links: [
      { href: '#about', label: 'About' },
      { href: '#work', label: 'Work' },
      { href: '#beyond', label: 'Beyond the day job' },
      { href: '#contact', label: 'Contact' },
    ],
  }),
};
</script>

<style scoped lang="scss">
.site-header {
  border-bottom: 1px solid var(--color-inverse-rule);
}

.nav {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-2) var(--space-6);
  padding-block: var(--space-4);
}

// Nav links read as text, not accent links. The .nav prefix outranks the global `.inverse a` rule.
.nav .name,
.nav .links a {
  color: inherit;
  text-decoration: none;

  &:hover {
    color: inherit;
    text-decoration: underline;
  }
}

.name {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 600;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1) var(--space-5);
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: var(--text-small);
}

// Hidden until it receives keyboard focus.
.skip-link {
  position: absolute;
  left: var(--gutter);
  top: var(--space-2);
  z-index: 10;
  padding: var(--space-2) var(--space-3);
  background: var(--color-inverse-bg);
  transform: translateY(-200%);

  &:focus {
    transform: none;
  }
}
</style>
