<template>
  <footer class="site-footer inverse">
    <div class="wrap footer">
      <span>© {{ year }} Eduardo Teixeira</span>
      <a href="#top">Back to top</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
  data: () => ({
    year: new Date().getFullYear(),
  }),
};
</script>

<style scoped lang="scss">
// Background, link and focus colours come from the shared .inverse class.
.site-footer {
  color: var(--color-inverse-muted);
}

.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--space-2) var(--space-5);
  padding-block: var(--space-7);
  font-family: var(--font-mono);
  font-size: var(--text-meta);
}
</style>
