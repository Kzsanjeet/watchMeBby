import React, { useEffect, useState } from 'react';
import AdminNav from '../../Components/AdminNav';
import '../../Css/Admin/AddFeaturedMovies.css';

const AddFeatureMovies = () => {
  const [movie1, setMovie1] = useState([]);
  const [movie2, setMovie2] = useState([]);
  const [movie3, setMovie3] = useState([]);
  const [movie4, setMovie4] = useState([]);
  const [movie5, setMovie5] = useState([]);

  const [showMovie1, setShowMovie1] = useState(false);

  const [movies, setMovies] = useState();

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


  const showMovie = () => {
    setShowMovie1(true);
  }

  console.log(movie1)
 
  
 
  return (
    <>
      <AdminNav />
      <div className="add-feature-movies">
        <h2>Add Featured Movies</h2>
        <div className="movie-buttons">

            <div className="add-movie">
              <button onClick={showMovie}>Add Movie 1</button>
            </div>
            <div className="add-movie">
            <button>Add Movie 2</button>

            </div>
            <div className="add-movie">
              <button>Add Movie 3</button>

            </div>
            <div className="add-movie">
              <button>Add Movie 4</button>

            </div>
            <div className="add-movie">
              <button>Add Movie 5</button>

            </div>

        </div>
        <div className='show-movie'>
        {showMovie1 ? (
          movies && movies.map((movie) => (
            <div className="movie" key={movie._id} >
              <img src={`${apiUrl}/${movie.image}`} alt={movie.movieName} />
              <h3>{movie.movieName}</h3>
              <p>IMDB Score: {movie.IMDB_score}</p>
              <p>Released Year: {movie.Released_year}</p>
            </div>
          ))
        ) : null}
        </div>
      </div>
    </>
  );
};

export default AddFeatureMovies;
