import { useState } from "react"
import { useSearchParams } from "react-router-dom";

export default function SearchbarHeader() {

  const [filterBy, setFilterBy] = useState('name');
  const [searchValue, setSearchValue] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  // const searchParam = 

  const handleSearchSubmit = e => {
    e.preventDefault();
    setSearchParams({
      filterBy, 
      searchValue
    })
  } 


  return (
    <>
      <div className="dropdown">
        <button className="btn btn-secondary btn-lg dropdown-toggle dropdown-btn" type="button" id="dropdownMenuButton"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="dropdown-text" dir="rtl">جستجو بر اساس:</span>
        </button>
        <div className="sort-by-menu dropdown-menu " aria-labelledby="dropdownMenuButton">
          <div className="menu-item dropdown-item "
            onClick={() => { setFilterBy('name'); }}
          >
            <span>نام</span>
          </div>
          <div className="menu-item dropdown-item "
            onClick={() => { setFilterBy('genre'); }}
          >
            <span>ژانر</span>
          </div>
          <div className="menu-item dropdown-item "
            onClick={() => { setFilterBy('date'); }}
          >
            <span>تاریخ تولید</span>
          </div>
        </div>
      </div>

      <div className="search-input-container">
        <form onSubmit={handleSearchSubmit}>
          <div className="input-group md-form form-sm form-2 pl-0">
            <input
              value={searchValue}
              onChange={e => { setSearchValue(e.target.value); }}
              className="form-control my-0 py-1 amber-border"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />

            <div
              className="input-group-append">
              <button className="btn btn-danger p-0" type="submit">
                <span className="search-icon input-group-text amber m-0" id="basic-text1"><i className="iconify-inline"
                  data-icon="carbon:search" aria-hidden="true"></i></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>

  )
}