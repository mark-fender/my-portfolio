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
      'Part of a development team responsible for development and testing of frontend of applications used by employees in aviation sector. Greatly contributed to improving visual design and usability of developed products and increasing test coverage of the codebase.',
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
    title: 'Imaginify',
    description: (
      <>
        An online SaaS platform enabling users to edit photos using AI. It is possible to restore
        images in poor quality, generative fill image surroundings,remove or recolor objects or
        remove image background. Each edit costs one credit and credits can be purchased via Stripe
        payment gateway. Each user can view their edited images in their profile and all of the
        edits in homepage. Used for learning and based on design and resources provided by{' '}
        <a style={{ textDecoration: 'underline' }} href='https://www.jsmastery.pro/'>
          Javascript Mastery
        </a>
        . Live preview available{' '}
        <a style={{ textDecoration: 'underline' }} href='https://imaginify-amber-omega.vercel.app/'>
          here
        </a>
        .
      </>
    ),
    tags: [
      'ReactJS',
      'NextJS',
      'TypeScript',
      'Tailwind',
      'Shadcn UI',
      'React Hook Form',
      'Zod',
      'Cloudinary AI',
      'Clerk Auth',
      'Stripe',
      'MongoDB',
    ],
  },
  {
    title: 'AIXM Editor & Digital NOTAM management',
    description:
      'Applications used in aviation sector to encode messages containing operationally relevant updates exchanged between systems according to specific set of rules also known as digital NOTAMs. Digital NOTAM data can be used to provide information on temporary changes affecting flight operations such as work in progress areas, closed taxiways/runways, new obstacles such as cranes and more. Also displaying these changes on the map and editing them either via forms or real time map editing.',
    tags: [
      'ReactJS',
      'TypeScript',
      'SCSS',
      'Ant Design',
      'Jest',
      'React Query',
      'React Hook Form',
      'Zod',
      'Jenkins',
      'BitBucket',
      'REST API',
    ],
  },
  {
    title: 'Inveox SampleX',
    description:
      "User interface for a machine intended to be used in hospitals with built in user authentication with PIN code and admin user management. Provides functionality to manage and monitor the processing containers housing patients' tissue samples being analysed for detecting cancer cells.",
    tags: [
      'ReactJS',
      'TypeScript',
      'Emotion',
      'React Hook Form',
      'GitHub',
      'WebSocket',
      'REST API',
      'Docker',
    ],
  },
  {
    title: 'NTS Retail POS & Welcome Manager',
    description:
      "Applications enabling the retail staff to manage cash flow of the store, adding products to cart and processing payments, calculating daily turnover and employee shift management for supervisors. Also managing the queues of incoming customers, assigning consultants for them and sending automatic notifications, alerting customers when it's their turn in line.",
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
