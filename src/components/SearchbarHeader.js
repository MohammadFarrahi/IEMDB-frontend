
export default function SearchbarHeader() {

  return (
    <>
      <div className="dropdown">
        <button className="btn btn-secondary btn-lg dropdown-toggle dropdown-btn" type="button" id="dropdownMenuButton"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="dropdown-text" dir="rtl">جستجو بر اساس:</span>
        </button>
        <div className="sort-by-menu dropdown-menu " aria-labelledby="dropdownMenuButton">
          <a className="menu-item dropdown-item " href="#">نام</a>
          <a className="menu-item dropdown-item " href="#">ژانر</a>
          <a className="menu-item dropdown-item " href="#">تاریخ تولید</a>
        </div>
      </div>

      <div className="search-input-container">
        <form>
          <div className="input-group md-form form-sm form-2 pl-0">
            <input className="form-control my-0 py-1 amber-border" type="text" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <span className="search-icon input-group-text amber " id="basic-text1"><i className="iconify-inline"
                data-icon="carbon:search" aria-hidden="true"></i></span>
            </div>
          </div>
        </form>
      </div>
    </>
  
  )
}