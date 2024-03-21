import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi everyone, I am{' '}
        <span className={s.purple}> Mohammad Alamin </span>
        from{' '}
        <span className={s.purple}> London, United Kingdom.</span>
        <br />
        full-stack engineer with expertise in browser-based
        development <br />
        using PERN Stack.
        <br />
        <br />
        I am a graduate from the Code Your Future institution in
        London, UK. An institution teaches coding skills to
        underprivileged and low-income people volunteered by
        professional developers.
        <br />
        <br />
        I have been trained in advanced coding languages. DevOps
        basics, Github, collaborative hackathon, and Agile software
        development in the real world project-based full-stack
        training programme.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Digital art and animation
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Green-peace based activities
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Explore new cities
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
