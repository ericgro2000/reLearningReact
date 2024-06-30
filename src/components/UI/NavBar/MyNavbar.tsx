
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {

  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link style={{marginRight:20}} to="/about">Über die Website</Link>
        <Link to="/posts">Beiträge</Link>
      </div>
    </div>
  );
};

export default Navbar;