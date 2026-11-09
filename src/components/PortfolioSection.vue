<template>
  <section id="work" class="section" aria-labelledby="work-title">
    <div class="wrap">
      <h2 id="work-title">Work so far</h2>
      <ol class="records">
        <li v-for="item in work" :key="item.title">
          <article class="record">
            <h3>{{ item.title }}</h3>
            <div class="body">
              <p v-for="(text, i) in item.paragraphs" :key="i">{{ text }}</p>
            </div>
            <dl class="record-meta">
              <dt>Date</dt>
              <dd>{{ item.date }}</dd>
              <dt>Where</dt>
              <dd>{{ item.where }}</dd>
              <dt>Stack</dt>
              <dd>{{ item.stack.join(', ') }}</dd>
              <template v-if="item.link">
                <dt>Access</dt>
                <dd><a :href="item.link.href">{{ item.link.label }}</a></dd>
              </template>
            </dl>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
import { useStore } from '../stores/counter';

export default {
  name: 'PortfolioSection',
  setup() {
    const store = useStore();
    return { work: store.work };
  },
};
</script>

<style scoped lang="scss">
h2 {
  margin-bottom: var(--space-6);
}

.records {
  display: grid;
  gap: var(--space-6);
  margin: 0;
  padding: 0;
  list-style: none;
}

.records > li + li {
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-rule);
}

.record {
  display: grid;
  gap: var(--space-4);
}

.body {
  display: grid;
  align-content: start;
  gap: var(--space-3);
  max-width: var(--measure);

  p {
    margin: 0;
  }
}

// Text on the left, metadata card on the right.
@media (min-width: 768px) {
  .record {
    grid-template-columns: minmax(0, 1fr) 17rem;
    // Extra height from a tall metadata card goes to the text row, not between title and text.
    grid-template-rows: auto 1fr;
    column-gap: var(--space-7);
  }

  .record-meta {
    grid-column: 2;
    grid-row: 1 / span 2;
  }
}
</style>
