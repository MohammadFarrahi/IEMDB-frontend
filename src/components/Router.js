import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Actor from "../pages/Actor";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Movie from "../pages/Movie";
import Movies from "../pages/Movies";
import Watchlist from "../pages/Watchlist";
import ProtectedPages from "./ProtectedPages";
import UnprotectedPages from "./UnprotectedPages";
import NotFound404 from "../pages/NotFound404";

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/movies' />} />
      <Route path='*' element={<Navigate to='/404' />} />
      <Route path='/404' element={<NotFound404 />} />
      <Route element={< UnprotectedPages />}>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/callback' element={<Callback />} />
      </Route>
      {/* Protected Pages */}
      <Route element={<ProtectedPages />}>
        <Route element={<Layout />}>
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:id' element={<Movie />} />
          <Route path='/actors/:id' element={<Actor />} />
          <Route path='/watchlist' element={<Watchlist />} />
        </Route>
      </Route>
    </Routes>
  )
}