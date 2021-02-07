import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Josh Stephens', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Off by one bit', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Josh Stephens',
  subtitle: 'I am a mega nerd who loves software development, electronics and woodworking.',
  cta: "Let's build together",
};

// ABOUT DATA
export const aboutData = {
  img: 'js_profile.jpg',
  paragraphOne:
    'Hello and thank you for checking out my profile. I am a Systems Architect turned software developer.',
  paragraphTwo:
    'From frontend to the backend, Vue or React, python or nodejs I would love to help you build your dream. ',
  paragraphThree:
    'When not working or perfecting my coding skills you can find me either in my workshop building, out in the woods on my four wheeler or hanging out with my family.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: "Let's build",
  email: 'me@joshstephens.io',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/bsdtux',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/josh-stephens-05625414/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/bsdtux',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
