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
        <br />
        I am an IT-focused professional with a background in
        full-stack development and hands-on experience working with
        JavaScript, React, CSS3, Node.js, SQL, and Python.
        <br />
        <br />
        Through my training and project work, I have built and
        maintained web applications, worked with APIs, and supported
        application functionality through debugging and testing. I
        also have experience collaborating using GitHub, working in
        agile team environments, and contributing to shared codebases.
        <br />
        <br />
        I have practical exposure to API testing, deployment
        processes, and maintaining reliable application performance. I
        am particularly interested in roles where I can contribute to
        system support, application stability, and continuous
        improvement.
        <br />
        <br />I value clear communication, problem solving, and
        adaptability, and I am looking to grow within an IT
        environment where I can develop my skills further while
        contributing effectively to a team.
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Troubleshooting and resolving technical
          issues
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Collaborating in agile development teams
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Building and improving web applications
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
