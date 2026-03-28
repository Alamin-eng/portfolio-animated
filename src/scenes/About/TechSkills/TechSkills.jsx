import s from './TechSkills.module.scss';
import {
  DiJavascript,
  DiReact,
  DiNodejs,
  DiPostgresql,
  DiPython,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiDocker,
  DiWordpress,
  DiBootstrap,
  DiGithub,
  DiIllustrator,
  DiPhotoshop,
  DiAws,
  DiJira,
  DiLinux,
  DiGoogleCloudPlatform,
  

} from 'react-icons/di';
import {
  SiTailwindcss,
  SiPostman,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript />
        <span className={s.tooltip}>JavaScript</span>
      </li>
      <li className={s.techIcon}>
        <SiTailwindcss />
        <span className={s.tooltip}>Tailwind CSS</span>
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
        <span className={s.tooltip}>Node.js</span>
      </li>
      <li className={s.techIcon}>
        <DiReact />
        <span className={s.tooltip}>React</span>
      </li>
      <li className={s.techIcon}>
        <DiPostgresql />
        <span className={s.tooltip}>PostgreSQL</span>
      </li>
      <li className={s.techIcon}>
        <DiPython />
        <span className={s.tooltip}>Python</span>
      </li>
      
      <li className={s.techIcon}>
        <DiBootstrap />
        <span className={s.tooltip}>Bootstrap</span>
      </li>
      <li className={s.techIcon}>
        <DiHtml5 />
        <span className={s.tooltip}>HTML5</span>
      </li>
      <li className={s.techIcon}>
        <SiPostman />
        <span className={s.tooltip}>Postman</span>
      </li>
      <li className={s.techIcon}>
        <DiDocker />
        <span className={s.tooltip}>Docker</span>
      </li>
      <li className={s.techIcon}>
        <DiWordpress />
        <span className={s.tooltip}>WordPress</span>
      </li>
      <li className={s.techIcon}>
        <DiBootstrap />
        <span className={s.tooltip}>Bootstrap</span>
      </li>
      <li className={s.techIcon}>
        <DiIllustrator />
        <span className={s.tooltip}>Adobe Illustrator</span>
      </li>
      <li className={s.techIcon}>
        <DiPhotoshop />
        <span className={s.tooltip}>Adobe Photoshop</span>
      </li>
      <li className={s.techIcon}>
        <DiGithub />
        <span className={s.tooltip}>GitHub</span>
      </li>
      <li className={s.techIcon}>
        <DiAws />
        <span className={s.tooltip}>AWS</span>
      </li>
      <li className={s.techIcon}>
        <DiJira /> 
        <span className={s.tooltip}>Jira</span>
      </li>
      <li className={s.techIcon}>
        <DiLinux />
        <span className={s.tooltip}>Linux</span>
      </li>
      <li className={s.techIcon}>
        <DiGoogleCloudPlatform />
        <span className={s.tooltip}>Google Cloud Platform</span>
      </li>
    </ul>
  );
};

export default TechSkills;
