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
      </li>
      <li className={s.techIcon}>
        <DiSass />
      </li>
      <li className={s.techIcon}>
        <DiCss3 />
      </li>
      <li className={s.techIcon}>
        <DiHtml5 />
      </li>
      <li className={s.techIcon}>
        <SiPostman />
      </li>
      <li className={s.techIcon}>
        <DiDocker />
      </li>
      <li className={s.techIcon}>
        <DiWordpress />
      </li>
      <li className={s.techIcon}>
        <DiBootstrap />
      </li>
      <li className={s.techIcon}>
        <DiIllustrator />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <DiAws /> 
      </li>
      <li className={s.techIcon}>
        <DiJira /> 
      </li>
    </ul>
  );
};

export default TechSkills;
