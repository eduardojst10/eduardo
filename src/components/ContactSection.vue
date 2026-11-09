<template>
  <section id="contact" class="section" aria-labelledby="contact-title">
    <div class="wrap contact">
      <h2 id="contact-title">Contact</h2>

      <div class="side">
        <p>Send me a message with the form, or find me on LinkedIn and GitHub.</p>
        <LinkList :links="links" />
      </div>

      <!-- Posts straight to Formspree; the browser enforces required fields and email format. -->
      <form class="form" action="https://formspree.io/f/xrbzvvay" method="POST">
        <div class="field">
          <label for="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" autocomplete="name" required />
        </div>
        <div class="field">
          <label for="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" autocomplete="email" required />
        </div>
        <div class="field">
          <label for="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows="6" required></textarea>
        </div>
        <button type="submit">Send message</button>
      </form>
    </div>
  </section>
</template>

<script>
import { useStore } from '../stores/counter';
import LinkList from './LinkList.vue';

export default {
  name: 'ContactSection',
  components: { LinkList },
  setup() {
    const store = useStore();
    return { links: store.contactLinks };
  },
};
</script>

<style scoped lang="scss">
.contact {
  display: grid;
  gap: var(--space-5);
}

.side {
  display: grid;
  align-content: start;
  gap: var(--space-4);

  p {
    margin: 0;
  }
}

.form {
  display: grid;
  gap: var(--space-4);
  max-width: 36rem;
}

.field {
  display: grid;
  gap: var(--space-1);
}

label {
  font-size: var(--text-small);
  font-weight: 500;
}

input,
textarea {
  width: 100%;
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--color-input-border);
  border-radius: var(--radius);
  background: var(--color-bg);
  color: var(--color-text);
  font: inherit;
}

textarea {
  resize: vertical;
}

button {
  justify-self: start;
  padding: var(--space-2) var(--space-5);
  border: 0;
  border-radius: var(--radius);
  background: var(--color-accent);
  color: var(--color-bg);
  font: inherit;
  font-weight: 500;
  cursor: pointer;
  transition: background-color var(--transition);

  &:hover {
    background: var(--color-accent-hover);
  }
}

@media (min-width: 768px) {
  .contact {
    grid-template-columns: minmax(0, 1fr) 17rem;
    grid-template-rows: auto 1fr;
    column-gap: var(--space-7);
  }

  .form {
    grid-column: 1;
    grid-row: 2;
  }

  .side {
    grid-column: 2;
    grid-row: 1 / span 2;
  }
}
</style>
