import './Header.css'
import logo from '../images/logo.png'

export default function Header() {
  return (
    <nav className="navbar">
    <div className="container-fluid p-0 nav-container">

      <div className="row m-0 justify-content-md-center">
        <div className="col-1 navbar-header p-0">
          <img src={logo} className="icon img-responsive" alt="Logo"/>
        </div>
        <div className="col-10 search-bar-container">
          <div className="dropdown">
            <button className="btn btn-secondary btn-lg dropdown-toggle dropdown-btn" type="button" id="dropdownMenuButton"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="dropdown-text" dir="rtl">جستجو بر اساس:</span>
            </button>
            <div className="sort-by-menu dropdown-menu " aria-labelledby="dropdownMenuButton">
              <a className="sort-by-item dropdown-item " href="#">نام</a>
              <a className="sort-by-item dropdown-item " href="#">ژانر</a>
              <a className="sort-by-item dropdown-item " href="#">تاریخ تولید</a>
            </div>
          </div>

          <div className="search-input-container">
            <form>
              <div className="input-group md-form form-sm form-2 pl-0">
                <input className="form-control my-0 py-1 amber-border" type="text" placeholder="Search" aria-label="Search"/>
                <div className="input-group-append">
                  <span className="search-icon input-group-text amber " id="basic-text1"><i className="iconify-inline"
                      data-icon="carbon:search" aria-hidden="true"></i></span>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-1 profile-container">
          <span className="profile-icon iconify-inline" data-icon="healthicons:ui-user-profile-negative"></span>
        </div>
      </div>
    </div>
  </nav>
  )
}