import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<div> folan</div>}/>
      </Route>
    </Routes>
  )
}