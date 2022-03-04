import { writable } from "svelte/store";

export const SkillsOut = writable([
  {
    id: 1,
    icon: "bi:git",
    left: "30%",
    top: "-15%",
    needCircle: true,
  },
  {
    id: 2,
    icon: "file-icons:jest",
    left: "80%",
    top: "-8%",
    needCircle: true,
  },
  {
    id: 3,
    icon: "simple-icons:cypress",
    left: "105%",
    top: "30%",
  },
  {
    id: 4,
    icon: "ant-design:ci-circle-filled",
    left: "-10%",
    top: "10%",
  },
  {
    id: 5,
    icon: "bxl:firebase",
    left: "-20%",
    top: "60%",
  },
  {
    id: 6,
    icon: "carbon:sql",
    left: "10%",
    top: "102%",
  },
  {
    id: 7,
    icon: "bxl:tailwind-css",
    left: "65%",
    top: "105%",
    needCircle: true,
  },
  {
    id: 8,
    icon: "file-icons:styledcomponents",
    left: "100%",
    top: "80%",
    needCircle: true,
  },
]);
export const SkillsIn = writable([
  {
    id: 1,
    icon: "akar-icons:react-fill",
    left: "43%",
    top: "-2%",
    needCircle: true,
  },
  {
    id: 2,
    icon: "akar-icons:nextjs-fill",
    left: "70%",
    top: "5%",
  },
  {
    id: 3,
    icon: "file-icons:test-typescript",
    left: "90%",
    top: "25%",
    needCircle: true,
  },
  {
    id: 4,
    icon: "fa-brands:js-square",
    left: "90%",
    top: "55%",
  },

  {
    id: 6,
    icon: "akar-icons:html-fill",
    left: "35%",
    top: "90%",
    needCircle: true,
  },
  {
    id: 7,
    icon: "akar-icons:css-fill",
    left: "70%",
    top: "85%",
    needCircle: true,
  },
  {
    id: 8,
    icon: "cib:svelte",
    left: "10%",
    top: "10%",
    needCircle: true,
  },

  {
    id: 10,
    icon: "fa-brands:node-js",
    left: "8%",
    top: "70%",
  },
  {
    id: 11,
    icon: "bxl:vuejs",
    left: "-5%",
    top: "40%",
  },
]);

export const Softskill = writable([
  {
    id: 1,
    title: 'Teamplayer',
    imgSrc: 'team.svg',
    text: '',
    alt: 'That is an Illustration of a Team.',
  },
  {
    id: 2,
    title: 'Fast Learner',
    text: '',
    imgSrc: 'book.png',
    alt: 'That is an Illustration of a men who reads a book, sitting on top of books.',

  },
  {
    id: 3,
    title: 'Solution Oriented',
    text: '',
    imgSrc: 'solution.svg',
    alt: 'That is an Illustration of a men who reads a book, sitting on top of books.',

  },
  {
    id: 4,
    title: 'Ambitious',
    text: '',
    imgSrc: 'ambitious.svg',
    alt: 'That is an Illustration of a men sits on a desk and write codes.',
  },
  {
    id: 5,
    title: 'Passionate',
    text: '',
    imgSrc: 'passionate.svg',
    alt: 'That is an Illustration of a men who embraces things that he loves.',
  },
])