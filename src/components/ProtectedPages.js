import { Navigate, Outlet, useLocation } from "react-router-dom";


export default function ProtectedPages() {

  const location = useLocation();

  var isLoggedIn = localStorage.getItem('userLoggedIn');

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (<Outlet/>);

}