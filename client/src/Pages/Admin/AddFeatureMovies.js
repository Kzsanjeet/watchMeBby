import React, { useEffect, useState } from 'react';
import AdminNav from '../../Components/AdminNav';
import '../../Css/Admin/AddFeaturedMovies.css';

const AddFeatureMovies = () => {
  const [moviesIds, setMoviesIds] = useState({});

  const [movie1, setMovie1] = useState('');
  const [movie2, setMovie2] = useState('');
  const [movie3, setMovie3] = useState('');
  const [movie4, setMovie4] = useState('');
  const [movie5, setMovie5] = useState('');

  const [movies, setMovies] = useState([]);

  const apiUrl = process.env.REACT_APP_API_URL;

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

  // Function to copy text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Movie Id copied to clipboard:');
        // Optionally, you can show a success message to the user
      })
      .catch((error) => {
        console.error('Error copying text to clipboard:', error);
        // Optionally, you can show an error message to the user
      });
  };

  const addMoviesToFeatured = async () => { 
    try {
      const response = await fetch(`${apiUrl}/add-category-movies`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ movie1, movie2, movie3, movie4, movie5, category: 'Featured' }),
      });
      const resp = await response.json();
      if (resp.success) {
        alert('Movies added to featured successfully');
        setMovie1('');
        setMovie2('');
        setMovie3('');
        setMovie4('');
        setMovie5('');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Fetching the movie IDs for featured category
  const getMoviesIds = async () => {
    try {
      const response = await fetch(`${apiUrl}/both/get-category-movies?category=Featured`);
      const data = await response.json();
      if (data.success) {
        setMoviesIds(data.getMovie);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    getMoviesIds();
  }, []);

  // Update state when moviesIds is fetched
  useEffect(() => {
    if (moviesIds) {
      setMovie1(moviesIds.movie1 || '');
      setMovie2(moviesIds.movie2 || '');
      setMovie3(moviesIds.movie3 || '');
      setMovie4(moviesIds.movie4 || '');
      setMovie5(moviesIds.movie5 || '');
    }
  }, [moviesIds]);


  return (
    <>
      <AdminNav />
      <div className="add-feature-movies">
        <h2>Add Featured Movies</h2>
        <div className='container'>
          <div className="movie-buttons">
            <label>Movie 1 ({movie1?.movieName})</label>
            <input type="text" value={movie1?._id} placeholder="Enter Movie ID" onChange={(e) => setMovie1(e.target.value)} />
            <label>Movie 2 ({movie2?.movieName})</label>
            <input type="text" value={movie2?._id} placeholder="Enter Movie ID" onChange={(e) => setMovie2(e.target.value)} />
            <label>Movie 3 ({movie3?.movieName})</label>
            <input type="text" value={movie3?._id} placeholder="Enter Movie ID" onChange={(e) => setMovie3(e.target.value)} />
            <label>Movie 4 ({movie4?.movieName})</label>
            <input type="text" value={movie4?._id} placeholder="Enter Movie ID" onChange={(e) => setMovie4(e.target.value)} />
            <label>Movie 5 ({movie5?.movieName})</label>
            <input type="text" value={movie5?._id} placeholder="Enter Movie ID" onChange={(e) => setMovie5(e.target.value)} />
            <button onClick={addMoviesToFeatured}>Add Movies To Featured</button>
          </div>
          <div className='show-movie'>
            {movies && movies.map((movie) => (
              <div className="movie" key={movie._id} onClick={() => copyToClipboard(movie._id)}>
                <img src={`${apiUrl}/${movie.image}`} alt={movie.movieName} />
                <h3>{movie.movieName}</h3>
                <p>IMDB Score: {movie.IMDB_score}</p>
                <p>Released Year: {movie.Released_year}</p>
                <p>{movie._id}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFeatureMovies;
