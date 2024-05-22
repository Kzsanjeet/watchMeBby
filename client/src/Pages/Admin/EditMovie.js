import React, { useEffect, useState } from 'react';
import AdminNav from '../../Components/AdminNav';
import { Link, useParams } from 'react-router-dom';
import '../../Css/Admin/EditMovie.css';

export const EditMovie = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
    const movieId = useParams().id;

  const [formData, setFormData] = useState({
    movieName: '',
    IMDB_score: '',
    Released_year: '',
    Duration: '',
    Genre: '',
    Cast: '',
    type: '',
    Production: '',
    image: null,
  });

  const [movieDetails, setMovieDetails] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await fetch(`${apiUrl}/edit-movie/${movieId}`, {
        method: 'PATCH',
        body: formDataToSend,
      });
      const data = await response.json();
      if (data.success) {
        alert('Movie updated successfully');
        setFormData({
            movieName: '',
            IMDB_score: '',
            Released_year: '',
            Duration: '',
            Genre: '',
            Cast: '',
            Production: '',
            type: '',
            image: null,
          });
      }
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getMovieDetails = async () => {
    try {
      const response = await fetch(`${apiUrl}/both/get-specific-movie/${movieId}`);
      const res = await response.json();
      if (res.success) {
        const movie = res.getSpecific;
        setMovieDetails(movie);
        setFormData({
          movieName: movie.movieName || '',
          IMDB_score: movie.IMDB_score || '',
          Released_year: movie.Released_year ? new Date(movie.Released_year).toISOString().split('T')[0] : '',
          Duration: movie.Duration || '',
          Genre: movie.Genre || '',
          Cast: movie.Cast || '',
          type: movie.type || '',
          Production: movie.Production || '',
          image: null,
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <>
      <AdminNav />
      <div className="edit-movie-container">
        <Link to="/admin/movies">
          <button>Back To Movies</button>
        </Link>
        <h2>Edit Movie</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="movieName">Movie Name:</label>
            <input type="text" id="movieName" name="movieName" value={formData.movieName} onChange={handleChange} placeholder="Enter movie name" required />
          </div>
          <div className="form-group">
            <label htmlFor="IMDB_score">IMDB Score:</label>
            <input type="number" id="IMDB_score" name="IMDB_score" value={formData.IMDB_score} onChange={handleChange} placeholder="Enter IMDB score" required />
          </div>
          <div className="form-group">
            <label htmlFor="Released_year">Released Year:</label>
            <input type="date" id="Released_year" name="Released_year" value={formData.Released_year} onChange={handleChange} placeholder="Select release date" required />
          </div>
          <div className="form-group">
            <label htmlFor="Duration">Duration (minutes):</label>
            <input type="number" id="Duration" name="Duration" value={formData.Duration} onChange={handleChange} placeholder="Enter duration" required />
          </div>
          <div className="form-group">
            <label htmlFor="Genre">Genre:</label>
            <input type="text" id="Genre" name="Genre" value={formData.Genre} onChange={handleChange} placeholder="Enter genre" required />
          </div>
          <div className="form-group">
            <label htmlFor="Cast">Cast:</label>
            <input type="text" id="Cast" name="Cast" value={formData.Cast} onChange={handleChange} placeholder="Enter cast members" required />
          </div>
          <div className="form-group">
            <label htmlFor="Production">Production:</label>
            <input type="text" id="Production" name="Production" value={formData.Production} onChange={handleChange} placeholder="Enter production company" required />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type:</label>
            <select id="type" name="type" value={formData.type} onChange={handleChange} required>
              <option value="">Select type</option>
              <option value="Movie">Movie</option>
              <option value="TV-Show">TV-Show</option>
              <option value="Series">Series</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image File:</label>
            <input type="file" id="image" name="image" accept="image/*" onChange={handleFileChange} />
          </div>
          <button type="submit">Update Movie</button>
        </form>
      </div>
    </>
  );
};
