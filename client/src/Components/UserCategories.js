import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/User/UserCategories.css';

const UserCategories = () => {
  const [genreOpen, setGenreOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleGenreDropdown = () => {
    setGenreOpen(!genreOpen);
  };

  const toggleCountryDropdown = () => {
    setCountryOpen(!countryOpen);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='man-nav-container'>
        <div className="main-container">
      <nav className="user-categories">
        <div className='nav-menu'>

            <h3>Menu</h3>
         
        </div>
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/tv-shows">Tv Shows</Link>
          </li>
          <li>
            <Link to="/top-imdb">Top IMDB</Link>
          </li>
          <li className="dropdown">
            <button onClick={toggleGenreDropdown}>Genre</button>
            {genreOpen && (
              <ul className="dropdown-content">
              <li>
                <Link to="/genre/action">Action</Link>
              </li>
              <li>
                <Link to="/genre/adventure">Adventure</Link>
              </li>
              <li>
                <Link to="/genre/comedy">Comedy</Link>
              </li>
              <li>
                <Link to="/genre/crime">Crime</Link>
              </li>
              <li>
                <Link to="/genre/drama">Drama</Link>
              </li>
              <li>
                <Link to="/genre/fantasy">Fantasy</Link>
              </li>
              <li>
                <Link to="/genre/horror">Horror</Link>
              </li>
              <li>
                <Link to="/genre/mystery">Mystery</Link>
              </li>
              <li>
                <Link to="/genre/sci-fi">Sci-Fi</Link>
              </li>
              <li>
                <Link to="/genre/thriller">Thriller</Link>
              </li>
            </ul>
            
            )}
          </li>
          <li className="dropdown">
            <button onClick={toggleCountryDropdown}>Country</button>
            {countryOpen && (
              <ul className="dropdown-content">
              <li>
                <Link to="/country/usa">Nepal</Link>
              </li>
              <li>
                <Link to="/country/canada">Canada</Link>
              </li>
              <li>
                <Link to="/country/uk">UK</Link>
              </li>
              <li>
                <Link to="/country/australia">Australia</Link>
              </li>
              <li>
                <Link to="/country/germany">Germany</Link>
              </li>
              <li>
                <Link to="/country/france">France</Link>
              </li>
              <li>
                <Link to="/country/japan">Japan</Link>
              </li>
              <li>
                <Link to="/country/china">China</Link>
              </li>
              <li>
                <Link to="/country/brazil">Brazil</Link>
              </li>
              <li>
                <Link to="/country/russia">USA</Link>
              </li>
            </ul>
            
            )}
          </li>
        </ul>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button> 
        </div>
      </nav>
    </div>
    </div>
  );
};

export default UserCategories;
