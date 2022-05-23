import { Link, useLocation, useNavigate } from 'react-router-dom';
import './HeaderProfile.css';
import './Dropdown.css';
import axios from 'axios';
import { isUserLoggedIn } from '../functions/isUserLoggedIn';
import { getUserId } from '../functions/getUserId';
import { logout } from '../functions/logout';


export default function HeaderProfile() {
  var isLoggedIn = isUserLoggedIn();
  var userId = getUserId();

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout();
    navigate('/movies');

      
  }

  return (
    <div className="dropdown porfile-dropdown-contianer">
      <span
        id="profileDropdown"
        data-toggle="dropdown"
        className="profile-icon iconify-inline"
        data-icon="healthicons:ui-user-profile-negative"
      ></span>
      <div className="profile-menu dropdown-menu " aria-labelledby="profileDropdown">
        {isLoggedIn ?
          <>
            <span className="menu-item dropdown-item ">{userId}</span>
            <Link className="menu-item dropdown-item " to='/watchlist'>watch list</Link>
            <div
              onClick={handleLogout}
              className="menu-item dropdown-item"
            >
              <span>Logout</span>
            </div>
          </>
          :
          <>
            <Link state={{ from: location }} className="menu-item dropdown-item " to="/login">ورود</Link>
            <Link className="menu-item dropdown-item " to='signup'>ثبت نام</Link>
          </>
        }
      </div>
    </div>
  )
}