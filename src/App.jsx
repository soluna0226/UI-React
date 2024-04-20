import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Welcome from './pages/welcome';
import Login from './pages/login';
import Home from './pages/home';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' exact element={<Welcome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
      </Routes>
  </BrowserRouter>
  )
}
