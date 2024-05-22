import React, { useEffect, useState } from 'react';
import AdminNav from '../../Components/AdminNav';
import '../../Css/Admin/SeeMovies.css'; 
import { tailChase } from 'ldrs'
import { Link } from 'react-router-dom';


const SeeMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  tailChase.register()


  const apiUrl = "http://localhost:4000";
  const getMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/get-movie`);
      const data = await response.json();
      if (data.success) {
        setMovies(data.movies);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      // setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <AdminNav />
      <div className="see-movies-container">
      <h1>See Movies ({movies.length})</h1>
        <table className="movies-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Movie Name</th>
              <th>IMDB Score</th>
              <th>Released Year</th>
              <th>Duration (min)</th>
              <th>Genre</th>
              <th>Cast</th>
              <th>Production</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {loading ? (
              <tr>
                <div className='loading'>
                  <l-tail-chase
                    size="40"
                    speed="1.75" 
                    color="#FFC94A " 
                  ></l-tail-chase>
                </div>
              </tr>
            ):null}

            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>
                  <img src={`${apiUrl}/${movie.image}`} alt={movie.movieName} />
                </td>
                <td>{movie.movieName}</td>
                <td>{movie.IMDB_score}</td>
                <td>{movie.Released_year}</td>
                <td>{movie.Duration}</td>
                <td>{movie.Genre}</td>
                <td>{movie.Cast}</td>
                <td>{movie.Production}</td>
                <td>{movie?.type}</td>
                <td >
          
                    <Link to={`/admin/edit-movie/${movie._id}`}>
                      <button className="edit-button" >
                        Edit
                      </button>
                    </Link>
                    
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SeeMovies;
