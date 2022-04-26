import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Movie from "../pages/Movie";
import Movies from "../pages/Movies";

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:id' element={<Movie/>}/>
      </Route>
    </Routes>
  )
}