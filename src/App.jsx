import { Listado } from './backend/Listado'
import { Register } from './routes/Register'
import { Init } from './routes/Init'
import { Login } from './routes/Login'
import { GalleryApp } from './routes/GalleryApp'
import './styles/index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={'/'} element={<Init />}></Route>
          <Route path={'/login'} element={<Login />}></Route>
          <Route path={'/register'} element={<Register />}></Route>
          <Route path={'/listado'} element={<Listado />}></Route>
          <Route path={'/gallery'} element={<GalleryApp />}></Route>
          <Route path={"/*"} element={ <Navigate to="/"></Navigate> }></Route>
      </Routes>
    </BrowserRouter>
  )
}
