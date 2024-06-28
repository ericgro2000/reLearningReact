
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {

  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  );
};

export default Navbar;