const data = [
  {
    id: '1',
    title: 'Free Games Play',
    description:
      'This project is developed entirely with React, utilizing advanced React Hooks and CSS for seamless functionality and design. It leverages useEffect to efficiently fetch data from APIs, providing users with a dynamic and engaging experience. The website allows users to explore games by genre and play them for free, all while ensuring a fully responsive and optimized experience across devices of all sizes.',
    image: {
      src: 'https://res.cloudinary.com/dthoibanb/image/upload/v1703217919/Screenshot_from_2023-12-22_04-04-34_pebu3p.png',
    },
    links: {
      site: 'https://game-play-mohammad-alamin.netlify.app/',
    },
    technologies: [
      '#ReactJS',
      '#gapi',
      '#Bootstrap',
      '#Javascript',
      '#CSS3',
    ],
  },
  {
    id: '2',
    title: 'Classic TV Shows(React version under development)',
    description:
      'The modern version of a fully responsive, classic TV shows website allows users to navigate to each show by clicking, with detailed information on all episodes for a particular program. The site also includes many other user-friendly features. Unfortunately, no videos are available due to API restrictions and copyright reasons.',
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
      'This full-stack hackathon project was completed with a team of three developers. We created a fully responsive trainee tracker website for CYF. The app allows CYF trainees to track their progress through their GitHub accounts. I worked on both the front-end and back-end development, ensuring the web app met accessibility standards and provided an intuitive user experience.',
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
      '#CSS3',
      '#REST API',
      '#express.js',
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
      'This user-friendly cryptocurrency tracker provides real-time updates on the top 100 cryptocurrencies. With a seamless interface, users can access current prices and historical data to make informed decisions. Designed for beginners and experienced investors alike, it helps efficiently track trends and stay updated on the crypto market.',
    image: {
      src: 'https://res.cloudinary.com/dthoibanb/image/upload/v1694894033/website%20screen%20shots/Screenshot_from_2023-09-16_20-29-44_jkbddn.png',
    },
    links: {
      site: 'https://crypto-dailytracker.netlify.app/',
      repo: 'https://github.com/Alamin-eng/Crypto-daily-tracker',
    },
    technologies: [
      '#Tailwind CSS',
      '#React',
      'React Hooks',
      '#Node.js',
      '#React spring',
    ],
  },
  {
    id: '6',
    title: 'Prickles & co. USA',
    description:
      'A multi-page, fully responsive plant-based products website for a U.S. company. It was part of our class assignment. The site includes many front-end features and can easily be upgraded to a full-stack site',
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
      'A fully responsive front-end application built with React, leveraging advanced React libraries and CSS for a seamless user experience. Users can search for countries by name to explore countries and toggle between light and dark modes for improved accessibility and personalization. With an intuitive design, the site adapts beautifully across devices, ensuring a smooth browsing experience for all users.',
    image: {
      src: 'https://res.cloudinary.com/dthoibanb/image/upload/v1694894037/website%20screen%20shots/Screenshot_from_2023-09-16_20-19-27_fkmj0n.png',
    },
    links: {
      site: 'https://cyf-alamin-eng-country-react.netlify.app/',
    },
    technologies: [
      '#ReactJS',
      '#Bootstrap',
      '#Javascript',
      '#CSS3',
    ],
  },
  {
    id: '8',
    title: 'TV Shows(old version)',
    description:
      'A fully responsive TV show website showcases over 300 TV series. The site allows users to navigate to each show, detailing all episodes for a particular program. Unfortunately, no videos are available due to API restrictions and copyright reasons.',
    image: {
      src: 'https://res.cloudinary.com/dthoibanb/image/upload/v1694894036/website%20screen%20shots/Screenshot_from_2023-09-16_20-20-24_tzawao.png',
    },
    links: {
      site: 'https://cyf-alamin-eng-tv-shows.netlify.app/',
    },
    technologies: ['#Javascript ES6', '#HTML5', '#CSS3', '#Bootstrap'],
  },
  {
    id: '9',
    title: 'Portfolio',
    description:
      'Welcome to my portfolio! This website is a reflection of my journey as a software developer. I started with a pre-built portfolio app, customized it to fit my personal style, and filled it with projects that represent my skills and growth. Each project shows how I tackle problems, design solutions, and implement them effectively. I always welcome any constructive feedback to help me improve, so please do not hesitate to reach out via email with your thoughts or suggestions.',
    image: {
      src: 'https://res.cloudinary.com/dthoibanb/image/upload/v1695273333/website%20screen%20shots/Screenshot_from_2023-09-21_06-09-34_bt0vtl.png',
    },
    links: {
      site: 'https://mohammad-alamin-portfolio.netlify.app/',
      repo: '',
    },
    technologies: ['#React', '#Sass', '#CSS3', '#Cloudinary'],
  },
];

export default data;
