import s from './GithubActivity.module.scss';
import GitHubCalendar from 'react-github-calendar';

const GithubActivity = () => {
  const colorTheme = {
    background: 'transparent',
    text: '#ffffff',
    level4: '#019cdf',
    level3: '#06699a',
    level2: '#064e89',
    level1: '#14306b',
    level0: '#252b44',
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
