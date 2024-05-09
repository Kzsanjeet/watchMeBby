
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Login from './Pages/Admin/Login';
import Register from './Pages/Admin/Register';
import HomepageAdmin from './Pages/Admin/HomepageAdmin';
import AddMovies from './Pages/Admin/AddMovies';
import AdminSetting from './Pages/Admin/AdminSetting';
import AddFeatureMovies from './Pages/Admin/AddFeatureMovies';
import AddTrendingMovies from './Pages/Admin/AddTrendingMovies';
import AddForYouMovies from './Pages/Admin/AddForYouMovies';
import SeeUsers from './Pages/Admin/SeeUsers';
import SeeMovies from './Pages/Admin/SeeMovies';
import UserHomepage from './Pages/User/UserHomepage';

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
        <Route path='/admin/add-featured' element={<AddFeatureMovies />} />
        <Route path='/admin/add-trending' element={<AddTrendingMovies />} />
        <Route path='/admin/add-for-you' element={<AddForYouMovies />} />
        <Route path='/admin/users' element={<SeeUsers/>}/>
        <Route path='/admin/movies' element={<SeeMovies/>} />


        {/* for user */}
        <Route path='/' element={<UserHomepage />} />

      </Routes>
    </Router>
    
  );
}

export default App;
