import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
              I have a background in full-stack development, building
              and maintaining responsive web applications using
              JavaScript, React, and modern web technologies.
            </p>

            <p>
              My experience includes working with{' '}
              <i>
                <b className={s.purple}>
                  JavaScript, React, Node.js, PostgreSQL, HTML, Wordpress and
                  CSS
                </b>
              </i>
              , integrating REST APIs, and collaborating on projects
              using GitHub within agile environments. I am also
              familiar with Docker, CMS platforms, and test-driven
              development practices.
            </p>

            <p>
              My field of Interest is building new
              <i>
                <b className={s.purple}>
                  {' '}
                  technologies and products that can positively impact
                  people's lives.
                </b>
              </i>
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/Alamin-eng"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="mailto:mohammedalaminruben@gmail.com"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="telegram"
            >
              <FaTelegramPlane />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/mohammad-alamin-846376220/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
