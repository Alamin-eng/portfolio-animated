import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}> Mohammad Alamin </span>
        from{' '}
        <span className={s.purple}> London, United Kingdom.</span>
        <br />
        Full-stack engineer with expertise in browser-based
        development <br />
        using PERN Stack.
        <br />
        <br />
        I am a full-stack developer graduate from the Code Your Future
        institution in London, UK. An institution teaches coding
        skills to underprivileged and low-income people volunteered by
        professional developers.
        <br />
        I have been trained in advanced programmeming languages,
        DevOps basics, Github, and Agile software development in a
        project-based collaborative training programme.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Green-peace based activities
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Digital art and animation
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Explore new cities
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Football
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
