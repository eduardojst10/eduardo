import { defineStore } from 'pinia'
import fenTeam from '../assets/outside/fen-team.jpg'
import brussels from '../assets/outside/brussels.jpg'
import nightOut from '../assets/outside/night-out.jpg'
import lunchWithFriends from '../assets/outside/lunch-with-friends.jpg'
import groupNight from '../assets/outside/group-night.jpg'
import festivalPolaroid from '../assets/outside/festival-polaroid.jpg'
import dissertationDefence from '../assets/outside/dissertation-defence.jpg'
import letterboxd from '../assets/letterboxd-decal-dots-pos-mono.svg'

export const useStore = defineStore({
        id: 'store',
        state: () => ({
          contactLinks: [
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eduardo-teixeira-16b807196/', icon: 'mdi-linkedin' },
            { label: 'GitHub', href: 'https://github.com/eduardojst10', icon: 'mdi-github' },
          ],
          // "Work so far", in chronological order. Keep descriptions short: the detail is for interviews.
          work: [
            {
              title: "Master's dissertation",
              where: 'University of Minho',
              date: 'July 2024',
              paragraphs: [
                'Deep learning for detecting anatomical landmarks in knee MRI, including a desktop tool for labelling the images.',
              ],
              stack: ['Python', 'TensorFlow', 'PyQt5', 'pydicom'],
              link: { label: 'Dissertation (PDF, 10 MB)', href: `${import.meta.env.BASE_URL}files/Master_Thesis_Eduardo.pdf` },
            },
            {
              title: 'Analyst Programmer, Java Developer (professional internship)',
              where: 'Petrotec, Engineering and Development',
              date: 'February 2025 – March 2025',
              paragraphs: [
                "Part of a small team on an introductory project to monitor outdoor payment terminals, fuel pumps and maintenance metrics across the group's systems.",
              ],
              stack: ['Java'],
            },
            {
              title: 'Junior Full Stack Software Engineer',
              where: 'KEEP Solutions',
              date: 'May 2025 – present',
              paragraphs: [
                "Part of the team behind RODA, an open-source digital preservation platform. I also work on digital signature services and CI/CD for KEEP's clients.",
              ],
              stack: ['Java', 'Spring Boot', 'GWT', 'Apache Solr', 'PostgreSQL', 'Docker', 'Shell'],
              link: { label: 'RODA on GitHub', href: 'https://github.com/keeps/roda' },
            },
          ],
          // Shown in "Beyond the day job", in chronological order.
          sideProjects: [
            {
              title: 'FEN festival website',
              where: 'Cidade Fulgurante',
              date: 'February 2024 – present',
              paragraphs: [
                'Member of Cidade Fulgurante, the association in Fafe behind the FEN music festival. I help maintain the festival website.',
              ],
              stack: ['React', 'JavaScript'],
              link: { label: 'fafeenosso.pt', href: 'https://fafeenosso.pt' },
            },
            {
              // Internal proof of concept: keep it high level. No client or data source names, no repository link, no screenshots.
              title: 'semantic-search POC',
              where: 'KEEP Solutions, innovation proof of concept',
              date: '2026',
              paragraphs: [
                'A proof of concept comparing lexical, hybrid and semantic search with Elasticsearch and embedding models. I worked on data preparation, indexing and model benchmarks.',
              ],
              stack: ['Python', 'Elasticsearch', 'sentence-transformers', 'MTEB'],
            },
          ],
          carouselImages: [
            {
              src: dissertationDefence,
              alt: "Group photo at my master's dissertation presentation, with the title slide on the screen behind",
              position: 'center 38%',
            },
            {
              src: fenTeam,
              alt: 'The FEN festival team',
            },
            {
              src: brussels,
              alt: 'A selfie with friends at a bar in Brussels',
            },
            {
              src: nightOut,
              alt: "Friends on a night out: 'Malfeito é amor'",
            },
            // `position` is the crop focus (object-position): the carousel is 16:9, so taller photos lose most of their height.
            {
              src: lunchWithFriends,
              alt: 'Lunch with friends around a restaurant table',
              position: 'center 60%',
            },
            {
              src: groupNight,
              alt: 'A large group of friends gathered in a hall with a wooden ceiling',
              position: 'center 55%',
            },
            {
              src: festivalPolaroid,
              alt: 'A polaroid of three friends held up in front of a festival stage at night',
            },
          ],
          outsideLinks: [
            { label: 'Instagram', href: 'https://www.instagram.com/eduardojst10/', icon: 'mdi-instagram' },
            { label: 'Letterboxd', href: 'https://letterboxd.com/eduardojst10/', icon: letterboxd },
            { label: 'Spotify', href: 'https://open.spotify.com/user/11129013284', icon: 'mdi-spotify' },
          ],
        }),
        actions: {
          // async getProjects() {
          //   let res=await client.get('projects');
          //   console.log(JSON.stringify(res));
          //   this.addProjects(res.data);
          // },
        }
})
