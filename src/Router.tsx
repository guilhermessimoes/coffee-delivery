import { Routes, Route } from 'react-router-dom'
import { Confirm } from './pages/Confirm'
import { Delivery } from './pages/Delivery'
import { Home } from './pages/Home'


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/delivery" element={<Delivery />}/>
      <Route path="/delivery/confirm" element={<Confirm />}/>
    </Routes>
  )
}