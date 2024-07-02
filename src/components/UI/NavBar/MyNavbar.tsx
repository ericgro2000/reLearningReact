
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../content/context';
import MyButton from '../Button/MyButton';

const Navbar: React.FC = () => {

  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
      setIsAuth(false);
      localStorage.removeItem('auth')
  }
  
  return (
    <div className="navbar">
      {isAuth ? (
        <MyButton onClick={logout}>Ausloggen</MyButton>
      ) : null}
      <div className="navbar__links">
        <Link style={{marginRight:20}} to="/about">Über die Website</Link>
        <Link to="/posts">Beiträge</Link>
      </div>
    </div>
  );
};

export default Navbar;