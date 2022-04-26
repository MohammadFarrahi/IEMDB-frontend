import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Actor from "../pages/Actor";
import Login from "../pages/Login";
import Movie from "../pages/Movie";
import Movies from "../pages/Movies";
import Watchlist from "../pages/Watchlist";
import ProtectedPages from "./ProtectedPages";

export default function Router() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route element={<Layout />}>
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<Movie />} />
        <Route path='/actors/:id' element={<Actor />} />
        {/* Protected Pages */}
        <Route element={<ProtectedPages />}>

        </Route>
      </Route>
    </Routes>
  )
}