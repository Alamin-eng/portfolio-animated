import s from './GithubActivity.module.scss';
import GitHubCalendar from 'react-github-calendar';

const GithubActivity = () => {
  const colorTheme = {
    background: 'transparent',
    text: '#ffffff',
    level4: '#02c50f',
    level3: '#128230',
    level2: '#1f7e38',
    level1: '#10521b',
    level0: '#243328',
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
