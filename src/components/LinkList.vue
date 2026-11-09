<template>
  <ul class="link-list">
    <li v-for="link in links" :key="link.href">
      <a :href="link.href" rel="me noopener">
        <span v-if="link.icon.startsWith('mdi-')" :class="['icon', 'mdi', link.icon]" aria-hidden="true"></span>
        <!-- Imported image for brands the icon font lacks. Empty alt: the label already names the link. -->
        <img v-else class="icon" :src="link.icon" alt="" width="20" height="20" />
        <span class="label">{{ link.label }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LinkList',
  props: {
    // [{ label, href, icon }] where icon is an `mdi-*` class or an imported image URL.
    links: { type: Array, required: true },
  },
};
</script>

<style scoped lang="scss">
.link-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-5);
  margin: 0;
  padding: 0;
  list-style: none;
  font-weight: 500;
}

// Underline only the text, so the icon reads as a marker and not as part of the link text.
a {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  text-decoration: none;

  &:hover .label {
    text-decoration-thickness: 2px;
  }
}

.label {
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.22em;
}

.icon {
  flex: none;
  width: 1.15em;
  height: 1.15em;
  font-size: 1.15em;
  line-height: 1;
}

// MDI glyphs leave 2/24 of empty space on each side of their box; an imported logo fills the
// whole box, so pad it by the same fraction to match the glyphs' visual size.
img.icon {
  box-sizing: border-box;
  padding: calc(1.15em / 12);
}
</style>
