import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPostgresql,
  DiHtml5,
  DiCss3,
  DiDocker,
  DiWordpress,
  DiBootstrap,
  DiGit,
  DiSass,
  DiIllustrator,
  DiAws,
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
      </li>
      <li className={s.techIcon}>
        <SiTailwindcss />
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiPostgresql />
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
    </ul>
  );
};

export default TechSkills;
