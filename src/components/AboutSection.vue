<template>
  <section id="about" class="section" aria-labelledby="about-title">
    <div class="wrap about">
      <h2 id="about-title">About</h2>
      <div class="body">
        <p>
          I studied at the University of Minho, where I completed a Master's in Informatics
          Engineering with a specialization in Deep Learning in 2024.
        </p>
        <p>
          Since May 2025 I've worked as a junior full stack engineer at KEEP Solutions, on web interfaces, back-end services, integrations and
          infrastructure.
        </p>
        <dl class="record-meta">
          <template v-for="row in facts" :key="row.label">
            <dt>{{ row.label }}</dt>
            <dd>{{ row.value }}</dd>
          </template>
        </dl>
      </div>
      <div class="side">
        <div class="frame">
          <img class="portrait" :src="portrait" alt="Eduardo Teixeira, arms crossed, in front of a stone wall"
            width="560" height="518" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import portrait from '../assets/portrait.jpg';

export default {
  name: 'AboutSection',
  data: () => ({
    portrait,
    facts: [
      { label: 'Education', value: "Master's in Informatics Engineering, University of Minho, 2024" },
      { label: 'Languages', value: 'Java, JavaScript, Python, SQL, Shell' },
      { label: 'Back end', value: 'Spring Boot, Maven, Flyway' },
      { label: 'Front end', value: 'GWT, Vue, React' },
      { label: 'Data', value: 'PostgreSQL, Apache Solr' },
      { label: 'Infra', value: 'Docker, CI/CD pipelines' },
      { label: 'ML', value: 'TensorFlow, NumPy, pandas' },
    ],
  }),
};
</script>

<style scoped lang="scss">
.about {
  display: grid;
  gap: var(--space-5);
}

.body {
  display: grid;
  align-content: start;
  gap: var(--space-3);
  max-width: var(--measure);

  p {
    margin: 0;
  }

  // A little more air between the last paragraph and the facts card.
  .record-meta {
    margin-top: var(--space-3);
  }
}

.side {
  display: grid;
  align-content: start;
  gap: var(--space-4);
}

// Offset frame: a solid ink block behind the photo, echoing the dark header and footer.
// The width leaves room for the 10px offset so the block never overflows the column.
.frame {
  width: min(calc(100% - 10px), 15rem);
  box-shadow: 10px 10px 0 var(--color-inverse-bg);
}

.portrait {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: 50% 15%;
}

// Narrow screens: portrait first, then the text with its facts card.
@media (max-width: 767.98px) {
  .side {
    order: 1;
  }

  .body {
    order: 2;
  }
}

// Same two-column rhythm as the Work so far records.
@media (min-width: 768px) {
  .about {
    grid-template-columns: minmax(0, 1fr) 17rem;
    grid-template-rows: auto 1fr;
    column-gap: var(--space-7);
  }

  // Centred against the whole left column (heading, text and facts card), not pinned to the top.
  .side {
    grid-column: 2;
    grid-row: 1 / span 2;
    align-self: center;
  }
}
</style>
