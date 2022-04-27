import { Link, useLocation } from 'react-router-dom';
import './HeaderProfile.css';
import './Dropdown.css';


export default function HeaderProfile() {
  var isLoggedIn = localStorage.getItem('userLoggedIn');
  var userId = localStorage.getItem('userId');

  const location = useLocation();


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