import React, { useEffect, useState } from 'react';
import AdminNav from '../../Components/AdminNav';
import '../../Css/Admin/SeeMovies.css'; 

const SeeMovies = () => {
  const [movies, setMovies] = useState([]);

  const apiUrl = "http://localhost:4000";
  const getMovies = async () => {
    try {
      const response = await fetch(`${apiUrl}/get-movie`);
      const data = await response.json();
      if (data.success) {
        setMovies(data.movies);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <AdminNav />
      <div className="see-movies-container">
        <h1>See Movies</h1>
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
            </tr>
          </thead>
          <tbody>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SeeMovies;
