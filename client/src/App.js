
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Login from './Pages/Admin/Login';
import Register from './Pages/Admin/Register';
import HomepageAdmin from './Pages/Admin/HomepageAdmin';
import AddMovies from './Pages/Admin/AddMovies';
import AdminSetting from './Pages/Admin/AdminSetting';

function App() {
  return (
    <Router>
      <Routes>
        {/* for admin  */}
        <Route path='/admin/home' element={<HomepageAdmin />} />
        <Route path='/admin/login' element={<Login />} />
        <Route path='/admin/register' element={<Register />} />
        <Route path='/admin/add-movie' element={<AddMovies />} />
        <Route path='/admin/setting' element={<AdminSetting />} />

      </Routes>
    </Router>
    
  );
}

export default App;
