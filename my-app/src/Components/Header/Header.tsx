import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header-P">
      <div className="Header-P-container">
        <Link to='/'>
          <p className="Header-P-item">Users</p>
        </Link>
        <Link to='/posts'>
          <p className="Header-P-item">Posts</p>
        </Link>
      </div>
      <img className='Header-Img' src='https://wmpics.pics/dm-0FXF.jpg' alt="" />
    </div>
  )
}

export default Header;
