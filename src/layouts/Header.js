import './Header.css';
import './Dropdown.css';

import logo from '../images/logo.png';
import HeaderProfile from './HeaderProfile';
import SearchbarHeader from '../components/SearchbarHeader';
import { Link, useMatch } from 'react-router-dom';

export default function Header() {

  return (
    <nav className="navbar">
      <div className="container-fluid p-0 nav-container">

        <div className="row m-0 justify-content-md-center">
          <div className="col-1 navbar-header p-0">
            <Link to='/movies'>

              <img src={logo} className="icon img-responsive" alt="Logo" />
            </Link>
          </div>
          <div className="col-10 search-bar-container">
            {useMatch('/movies') &&
              <SearchbarHeader />
            }
          </div>
          <div className="col-1 profile-container">
            <HeaderProfile />
          </div>
        </div>
      </div>
    </nav >
  )
}