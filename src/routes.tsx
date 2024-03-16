import { Routes, Route } from 'react-router-dom'

import Categories from './pages/Categories/'
import Home from './pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home></Home>} />
    <Route path="/categories/:id" element={<Categories></Categories>} />
  </Routes>
)

export default Rotas
