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
        processes, and working with applications to identify and
        resolve issues. I have experience collaborating on shared
        codebases using GitHub and working within agile team
        environments.
        <br />
        <br />
        I value clear communication, problem solving, and
        adaptability, and I approach technical challenges with a
        practical and structured mindset.
        <br />
        <br />
        I am looking to begin my career in an IT-related role where I
        can apply my skills, contribute to real-world projects, and
        continue developing within a professional environment.
        <br />
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
