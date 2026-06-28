import s from './GithubActivity.module.scss';
import GitHubCalendar from 'react-github-calendar';

const GithubActivity = () => {
  const colorTheme = {
    background: 'transparent',
    text: '#ffffff',
    level4: '#00de30',
    level3: '#079f30',
    level2: '#06891a',
    level1: '#0b440c',
    level0: '#162218',
  };
  return (
    <div className={s.container}>
      <GitHubCalendar
        username="alamin-eng"
        blockSize={15}
        blockMargin={5}
        theme={colorTheme}
        fontSize={16}
      />
    </div>
  );
};

export default GithubActivity;
