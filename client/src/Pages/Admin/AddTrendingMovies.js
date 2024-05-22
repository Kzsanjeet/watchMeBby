import React, { useEffect, useState } from 'react';
import AdminNav from '../../Components/AdminNav';
import '../../Css/Admin/AddFeaturedMovies.css';

const AddTrendingMovies = () => {
  const [movie1, setMovie1] = useState([]);
  const [movie2, setMovie2] = useState([]);
  const [movie3, setMovie3] = useState([]);
  const [movie4, setMovie4] = useState([]);
  const [movie5, setMovie5] = useState([]);


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
    console.log(movie1, movie2, movie3, movie4, movie5);
    console.log('Featured');
    try {
      const response = await fetch(`${apiUrl}/add-category-movies`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ movie1, movie2, movie3, movie4, movie5, category: 'Trending'}),
      });
      const respo = await response.json();
      if(respo.success){
        alert("Movies added to Trending")
        setMovie1('');
        setMovie2('');
        setMovie3('');
        setMovie4('');
        setMovie5('');
      }
      
    } catch (error) {
      console.error('Error:', error);
    }
  }
 
  
 
  return (
    <>
      <AdminNav />
      <div className="add-feature-movies">
        <h2>Add Trending Movies</h2>
        <div className='container'>
          <div className="movie-buttons">
              <label>Movie 1</label>
              <input type="text" placeholder="Enter Movie ID" onChange={(e) => setMovie1(e.target.value)} />
              <label>Movie 2</label>
              <input type="text" placeholder="Enter Movie ID" onChange={(e) => setMovie2(e.target.value)} />
              <label>Movie 3</label>
              <input type="text" placeholder="Enter Movie ID" onChange={(e) => setMovie3(e.target.value)} />
              <label>Movie 4</label>
              <input type="text" placeholder="Enter Movie ID" onChange={(e) => setMovie4(e.target.value)} />
              <label>Movie 5</label>
              <input type="text" placeholder="Enter Movie ID" onChange={(e) => setMovie5(e.target.value)} />

              <button onClick={addMoviesToFeatured}>Add Movies To Featured</button>

          </div>
          <div className='show-movie'>
            {
              movies && movies.map((movie) => (
                <div className="movie" key={movie._id} onClick={() => copyToClipboard(movie._id)}>
                  <img src={`${apiUrl}/${movie.image}`} alt={movie.movieName} />
                  <h3>{movie.movieName}</h3>
                  <p>IMDB Score: {movie.IMDB_score}</p>
                  <p>Released Year: {movie.Released_year}</p>
                  <p>{movie._id}</p>
                </div>
              ))
            }
          </div>

        </div>
      </div>
    </>
  );
};

export default AddTrendingMovies;
