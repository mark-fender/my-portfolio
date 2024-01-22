export const navBarLinks = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Front-End Developer',
    company: 'Indra Avitech',
    description:
      'Part of a development team responsible for development and testing of frontend of applications used by employees in aviation sector.',
    date: 'May 2023 - present',
  },
  {
    title: 'Front-End Developer',
    company: ' Global Logic',
    description:
      'Lead the development of user interface for controlling sample registration module that processes samples of patients tissue in medical environment.',
    date: 'November 2022 - April 2023',
  },
  {
    title: 'Front-End Developer',
    company: 'Workflows',
    description:
      'Development, testing and maintenance of frontend projects, mostly for Austrian client NTS Retail. Built several projects from scratch and helped to refactor and improve code quality in legacy codebase.',
    date: 'September 2018 - October 2022',
  },
  {
    title: 'Software Engineer',
    company: 'Software AG',
    description:
      'Testing software features using JUnit and Selenium and development of internal tools. Managed to optimize stability and execution times of existing test suites.',
    date: 'September 2017 - September 2018',
  },
] as const;

export const projectsData = [
  {
    title: 'AIXM Editor & Digital NOTAM management',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.',
    tags: [
      'ReactJS',
      'TypeScript',
      'SCSS',
      'Jest',
      'React Query',
      'Ant Design',
      'Jenkins',
      'BitBucket',
      'REST API',
    ],
  },
  {
    title: 'Inveox SampleX',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.',
    tags: ['ReactJS', 'TypeScript', 'Emotion', 'GitHub', 'WebSocket', 'REST API', 'Docker'],
  },
  {
    title: 'NTS Retail POS & Welcome Manager',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.',
    tags: [
      'Angular',
      'TypeScript',
      'SCSS',
      'RxJS',
      'NgRx',
      'Jenkins',
      'Gitlab',
      'WebSocket',
      'REST API',
      'Docker',
    ],
  },
] as const;

export const skillsData = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'ReactJS',
  'Angular',
  'Jest',
  'React Query',
  'Git',
  'Tailwind',
  'Emotion',
  'Styled Components',
  'RxJs',
  'REST API',
  'WebSocket',
  'Docker',
] as const;
