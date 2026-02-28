import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPostgresql,
  DiPython,
  DiHtml5,
  DiCss3,
  DiDocker,
  DiWordpress,
  DiBootstrap,
  DiGit,
  DiSass,
  DiIllustrator,
  DiPhotoshop,
  DiAws,
  DiJira,

} from 'react-icons/di';
import {
  SiTailwindcss,
  SiPostman,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 />
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
        <DiSass />
        <span className={s.tooltip}>Sass</span>
      </li>
      <li className={s.techIcon}>
        <DiCss3 />
        <span className={s.tooltip}>CSS3</span>
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
        <DiGit />
        <span className={s.tooltip}>Git</span>
      </li>
      <li className={s.techIcon}>
        <DiAws />
        <span className={s.tooltip}>AWS</span>
      </li>
      <li className={s.techIcon}>
        <DiJira /> 
        <span className={s.tooltip}>Jira</span>
      </li>
    </ul>
  );
};

export default TechSkills;
