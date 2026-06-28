import s from './GithubActivity.module.scss';
import GitHubCalendar from 'react-github-calendar';

const GithubActivity = () => {
  const colorTheme = {
    background: 'transparent',
    text: '#ffffff',
    level4: '#216e39',
    level3: '#30a14e',
    level2: '#40c463',
    level1: '#9be9a8',
    level0: '#333333',
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
