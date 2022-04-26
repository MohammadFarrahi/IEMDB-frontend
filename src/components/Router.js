import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Movies from "../pages/Movies";

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/movies' element={<Movies/>}/>
      </Route>
    </Routes>
  )
}