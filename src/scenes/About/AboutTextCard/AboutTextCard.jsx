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

        I am an IT-focused professional with a background in full-stack
        development and hands-on experience working with JavaScript, React,
        Node.js, SQL, and Python.

        <br />
        <br />

        Through my training, projects, and practical experience, I have worked on
        building web applications, troubleshooting technical issues, and working
        with data and APIs in real-world scenarios.

        <br />
        <br />

        I am particularly interested in working within IT environments where I
        can contribute to system support, application reliability, and continuous
        improvement while developing my technical skills further.

        <br />
        <br />

        I have experience working in agile, team-based settings and I value clear
        communication, problem solving, and adaptability in fast-paced
        environments.
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Problem solving and troubleshooting
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Building and improving web applications
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Learning new technologies and tools
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
