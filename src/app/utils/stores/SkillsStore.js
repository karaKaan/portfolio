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
    title: 'Teamwork',
    imgSrc: 'team.svg',
    text: '',
    alt: 'That is an Illustration of a Team.',
  },
  {
    id: 2,
    title: 'Time Management',
    text: '',
    imgSrc: 'time.svg',
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
    title: 'Critical Thinking',
    text: '',
    imgSrc: 'thinking.svg',
    alt: 'That is an Illustration of a men sits on a desk and write codes.',
  },
  {
    id: 5,
    title: 'Adaptability',
    text: '',
    imgSrc: 'passionate.svg',
    alt: 'That is an Illustration of a men who embraces things that he loves.',
  },
  {
    id: 6,
    title: 'Creativity',
    text: '',
    imgSrc: 'creative.svg',
    alt: 'That is an Illustration of a men who embraces things that he loves.',
  },
])

export const Hardskill = writable([
  {
    id: 1,
    icon: "fa-brands:js-square",
    delay: 200,
  },
  {
    id: 2,
    icon: "akar-icons:react-fill",
    delay: 300,
  },
  {
    id: 3,
    icon: "akar-icons:nextjs-fill",
    delay: 400,
  },
  {
    id: 4,
    icon: "file-icons:test-typescript",
        delay: 500,
  },

  {
    id: 5,
    icon: "akar-icons:html-fill",
        delay: 600,
  },
  {
    id: 6,
    icon: "akar-icons:css-fill",
        delay: 700,
  },
  
  {
    id: 7,
    icon: "bxl:tailwind-css",
        delay: 800,
  },
  {
    id: 8,
    icon: "file-icons:styledcomponents",
        delay: 900,
  },
  
  {
    id: 9,
    icon: "cib:svelte",
        delay: 1000,
  },

  {
    id: 10,
    icon: "fa-brands:node-js",
        delay: 1100,
  },
  {
    id: 11,
    icon: "bxl:vuejs",
        delay: 1200,
  },
  {
    id: 12,
    icon: "bi:git",
        delay: 1300,
  },
  {
    id: 13,
    icon: "file-icons:jest",
        delay: 1400,
  },
  {
    id: 14,
    icon: "simple-icons:cypress",
        delay: 1500,
  },
  {
    id: 15,
    icon: "ant-design:ci-circle-filled",
        delay: 1600,
  },
  {
    id: 16,
    icon: "bxl:firebase",
        delay: 1700,
  },
  {
    id: 17,
    icon: "carbon:sql",
        delay: 1800,
    },
])