const data = [
  {
    id: '1',
    title: 'Free Games Play',
    description:
      'A project using React.js, advanced React Hooks, and CSS. Utilised useEffect hooks to fetch data from external APIs. The website allows users to navigate to games based on genre and platform and provides external links to play any game for free. The site is also fully responsive on all devices.',
    image: {
      src: 'https://res.cloudinary.com/dthoibanb/image/upload/v1703217919/Screenshot_from_2023-12-22_04-04-34_pebu3p.png',
    },
    links: {
      site: 'https://game-play-mohammad-alamin.netlify.app/',
    },
    technologies: [
      '#ReactJS',
      '#Hooks',
      '#gapi',
      '#Bootstrap',
      '#Javascript',
      '#CSS',
    ],
  },
  {
    id: '2',
    title: 'Classic TV Shows(react version)',
    description:
      'Modern version of fully responsive classic TV shows website allows the user to navigate to each show by clicking, detailing all episodes for a particular program. The site has many other user-friendly features. Unfortunately, no video is available for API`s restriction and copyright reasons.',
    image: {
      src: 'https://res.cloudinary.com/dthoibanb/image/upload/v1731278137/Screenshot_203_j3twzp.png',
    },
    links: {
      site: 'https://classic-tvshows-tvmaze.netlify.app/',
    },
    technologies: ['#React', '#HTML5', '#CSS3', '#Bootstrap'],
  },
  {
    id: '3',
    title: 'Milestone tracker (Hackathon)',
    description:
      'Fullstack project. Completed the final project with a team of three developers and created the trainee tracker`s fully responsive website for CYF. The app lets CYF trainees check their progress with their GitHub accounts. I have contributed 80% to the backend and 20% to the frontend of the entire project.',
    image: {
      src: 'https://res.cloudinary.com/dthoibanb/image/upload/v1694900059/website%20screen%20shots/Screenshot_from_2023-09-16_22-30-32_d9a8rv.png',
    },
    links: {
      site: 'https://github.com/Doris-Siu/in-a-class-of-our-own',
      repo: 'https://github.com/Doris-Siu/in-a-class-of-our-own',
    },
    technologies: [
      '#ReactJS',
      '#Node.js',
      '#PostgreSQL',
      '#CSS',
      '#REST API',
      '#express.js',
      '#React-libraries',
    ],
  },
  {
    id: '4',
    title: 'CYF Hotel',
    description:
      'Implemented a date calculation feature using the React Moment library to accurately count booking dates, resulting in a 30% reduction in booking errors and improved user satisfaction, and added a restaurant order option to satisfy product owner`s demand. The website shows the guest list and has the option to show the guest`s profile.',
    image: {
      src: 'https://res.cloudinary.com/dthoibanb/image/upload/v1694894031/website%20screen%20shots/Screenshot_from_2023-09-16_20-32-03_eik4yy.png',
    },
    links: {
      site: 'https://cyf-alamin-eng-react-hotel-app.netlify.app/',
      repo: 'https://github.com/Alamin-eng/cyf-hotel-react',
    },
    technologies: ['#ReactJS', '#CSS', '#Bootstrap', '#Moment.js'],
  },
  {
    id: '5',
    title: 'Crypto daily tracker',
    description:
      'Generated this highly informative crypto currency tracker website allows users to check top 100 crypto currency real-time prices and all past records of a particular currency.',
    image: {
      src: 'https://res.cloudinary.com/dthoibanb/image/upload/v1694894033/website%20screen%20shots/Screenshot_from_2023-09-16_20-29-44_jkbddn.png',
    },
    links: {
      site: 'https://crypto-dailytracker.netlify.app/',
      repo: 'https://github.com/Alamin-eng/Crypto-daily-tracker',
    },
    technologies: [
      '#Tailwind CSS',
      '#ReactJS',
      '#Hooks',
      '#Node.js',
      '#React spring',
    ],
  },
  {
    id: '6',
    title: 'Prickles & co. USA',
    description:
      'A multi-page, fully responsive plant-based website for a USA company, It was part of our class assignment. The page has many front-end features and can always be upgraded to a fullstack site.',
    image: {
      src: 'https://res.cloudinary.com/dthoibanb/image/upload/v1694894035/website%20screen%20shots/Screenshot_from_2023-09-16_20-25-43_w7im1g.png',
    },
    links: {
      site: 'https://alamin-eng.github.io/responsive-grid-project/',
      repo: 'https://github.com/Alamin-eng/responsive-grid-project',
    },
    technologies: ['#HTML5', '#JQuery', '#CSS3'],
  },
  {
    id: '7',
    title: 'Country app',
    description:
      'A front-end project using React.js, advanced React libraries, and CSS uses useEffect to fetch external API data. The website shows information for all countries. The website is fully responsive and has features like search or selection by continent. The site is also user-friendly to navigate in a light or dark mood.',
    image: {
      src: 'https://res.cloudinary.com/dthoibanb/image/upload/v1694894037/website%20screen%20shots/Screenshot_from_2023-09-16_20-19-27_fkmj0n.png',
    },
    links: {
      site: 'https://cyf-alamin-eng-country-react.netlify.app/',
    },
    technologies: [
      '#ReactJS',
      '#React Hooks',
      '#Bootstrap',
      '#Javascript',
      '#CSS',
    ],
  },
  {
    id: '8',
    title: 'TV Shows(old version)',
    description:
      'A fully responsive TV show websites show over 300 TV series. The site allows the user to navigate to each show, detailing all episodes for a particular program. Unfortunately, no video is available for API`s restriction and copyright reasons.',
    image: {
      src: 'https://res.cloudinary.com/dthoibanb/image/upload/v1694894036/website%20screen%20shots/Screenshot_from_2023-09-16_20-20-24_tzawao.png',
    },
    links: {
      site: 'https://cyf-alamin-eng-tv-shows.netlify.app/',
    },
    technologies: ['#Javascript', '#HTML5', '#CSS3', '#Bootstrap'],
  },
  {
    id: '9',
    title: 'Portfolio',
    description:
      'My portfolio website showcases my work and experience. I will welcome any constructive feedback to improve my portfolio site. Please feel free to email me about it.',
    image: {
      src: 'https://res.cloudinary.com/dthoibanb/image/upload/v1695273333/website%20screen%20shots/Screenshot_from_2023-09-21_06-09-34_bt0vtl.png',
    },
    links: {
      site: 'https://mohammad-alamin-portfolio.netlify.app/',
      repo: '',
    },
    technologies: ['#React', 'Sass', '#CSS', '#Cloudinary'],
  },
];

export default data;
