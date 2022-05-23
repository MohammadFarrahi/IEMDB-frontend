import { Navigate, Outlet, useLocation } from "react-router-dom";


export default function UnrotectedPages() {

  const location = useLocation();

  var isLoggedIn = localStorage.getItem('userLoggedIn');

  if (isLoggedIn) {
    return <Navigate to="/movies" state={{ from: location }} replace />;
  }

  return (<Outlet/>);

}