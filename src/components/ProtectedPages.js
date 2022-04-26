import { Navigate, Outlet } from "react-router-dom";


export default function ProtectedPages() {

  var isLoggedIn = localStorage.getItem('userLoggedIn');

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (<Outlet/>);

}