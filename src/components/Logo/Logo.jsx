
import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';
import nameLogo from './M.Alamin.svg'
const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.HOME} aria-label="site logo">
        <img src={nameLogo} alt="SVG name" />
      </Link>
    </div>
  );
};

export default Logo;
