<template>
  <section id="beyond" class="section" aria-labelledby="beyond-title">
    <div class="wrap beyond">
      <h2 id="beyond-title">Beyond the day job</h2>

      <div class="projects">
        <article v-for="project in projects" :key="project.title" class="project">
          <h3>{{ project.title }}</h3>
          <div class="body">
            <p v-for="(text, i) in project.paragraphs" :key="i">{{ text }}</p>
          </div>
          <dl class="record-meta">
            <dt>Date</dt>
            <dd>{{ project.date }}</dd>
            <dt>Where</dt>
            <dd>{{ project.where }}</dd>
            <dt>Stack</dt>
            <dd>{{ project.stack.join(', ') }}</dd>
            <template v-if="project.link">
              <dt>Access</dt>
              <dd><a :href="project.link.href">{{ project.link.label }}</a></dd>
            </template>
          </dl>
        </article>
      </div>

      <div class="gallery">
        <!-- No autoplay: an auto-rotating carousel needs a pause control (WCAG 2.2.2). -->
        <v-carousel class="carousel" height="auto" show-arrows="hover" hide-delimiters>
          <v-carousel-item v-for="image in images" :key="image.src" :src="image.src" :alt="image.alt"
            :position="image.position" :aspect-ratio="16 / 9" cover>
            <button type="button" class="zoom" aria-label="View photo larger" @click="openViewer(image, $event)"></button>
          </v-carousel-item>
        </v-carousel>

        <!-- Esc, the backdrop and the close button all close it; focus goes back to the photo that opened it. -->
        <v-dialog v-model="viewerOpen" width="auto" opacity="0.85" @after-leave="returnFocus">
          <figure v-if="viewerImage" class="viewer">
            <img :src="viewerImage.src" :alt="viewerImage.alt" />
            <button type="button" class="close" aria-label="Close" @click="viewerOpen = false">
              <span class="mdi mdi-close" aria-hidden="true"></span>
            </button>
          </figure>
        </v-dialog>

        <div class="life">
          <div class="body">
            <p>
              My interest in artificial intelligence, and deep learning in particular, started at the
              University of Minho, where my dissertation applied convolutional neural networks to
              medical images. I still enjoy using AI to solve practical problems.
            </p>
            <p>My interest in music and culture didn’t stop at grade 5 in saxophone. I chose not to pursue it
              professionally,
              but I wanted to stay connected to it, which is why I joined Cidade Fulgurante during my master’s. Outside
              work,
              I like creating good moments for the people around me, whether that’s sharing music or spending time with
              friends.
            </p>
            <p>I like learning by doing and working with others, and I'm always ready for a new challenge. Check out my
              other
              socials:</p>
          </div>
          <LinkList :links="links" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useStore } from '../stores/counter';
import LinkList from './LinkList.vue';

export default {
  name: 'OutsideSection',
  components: { LinkList },
  setup() {
    const store = useStore();
    return { images: store.carouselImages, links: store.outsideLinks, projects: store.sideProjects };
  },
  data: () => ({ viewerOpen: false, viewerImage: null, viewerTrigger: null }),
  methods: {
    openViewer(image, event) {
      this.viewerImage = image;
      this.viewerTrigger = event.currentTarget;
      this.viewerOpen = true;
    },
    // The dialog has no activator, so Vuetify can't restore focus by itself.
    returnFocus() {
      this.viewerTrigger?.focus();
    },
  },
};
</script>

<style scoped lang="scss">
// Two rows that share the same two columns: side projects, then the carousel beside the personal text.
.beyond {
  display: grid;
  gap: var(--space-7);
}

.projects,
.gallery {
  display: grid;
  gap: var(--space-6);
}

.project {
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: var(--space-4);
  padding-top: var(--space-5);
  border-top: 1px solid var(--color-rule);
}

// Metadata cards line up at the bottom when the two descriptions differ in length.
.project .record-meta {
  align-self: end;
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

// A centred, half-width, 1px rule closes the projects: subtler than the 2px rules between sections.
// Drawn as a background so it adds no grid item.
.gallery {
  padding-top: var(--space-7);
  background: linear-gradient(var(--color-rule), var(--color-rule)) top center / 50% 1px no-repeat;
}

.carousel {
  min-width: 0;
  align-self: start;
  background: var(--color-surface);
}

// Vuetify only reveals hover arrows on :hover. Also show them for keyboard focus,
// and always on touch screens, which have no hover.
.carousel:focus-within :deep(.v-window__left),
.carousel:focus-within :deep(.v-window__right) {
  transform: translateX(0);
}

@media (hover: none) {
  .carousel :deep(.v-window__left),
  .carousel :deep(.v-window__right) {
    transform: translateX(0);
  }
}

// Invisible button over the whole photo: click or Enter opens the larger view.
.zoom {
  position: absolute;
  inset: 0;
  cursor: zoom-in;

  &:focus-visible {
    outline-offset: -4px;
  }
}

.viewer {
  position: relative;
  margin: 0;

  img {
    display: block;
    max-width: 90vw;
    max-height: 85vh;
    width: auto;
    height: auto;
  }
}

.close {
  position: absolute;
  top: var(--space-2);
  right: var(--space-2);
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: var(--color-inverse-bg);
  color: var(--color-inverse-text);
  font-size: 1.4rem;
  --color-focus: var(--color-inverse-accent);
}

.life {
  display: grid;
  align-content: start;
  gap: var(--space-5);
}

@media (min-width: 768px) {

  .projects,
  .gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: var(--space-7);
  }
}
</style>
