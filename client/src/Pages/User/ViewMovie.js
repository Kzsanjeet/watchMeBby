import React, { useEffect, useState } from 'react'
import UserNav from '../../Components/UserNav'
import { useParams } from 'react-router-dom';
import { infinity } from 'ldrs'
import '../../Css/User/ViewMovie.css'


const ViewMovie = () => {
    const [movieDetails, setMovieDetails] = useState({});
    const [comments, setComments] = useState([]);
    const [forYouMovies, setForYouMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const movieId = useParams().id;

  infinity.register()


    const getMovieDetails = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/both/get-specific-movie/${movieId}`);
            const data = await response.json();
            if (data.success) {
                setMovieDetails(data.getSpecific);
            }
        } catch (error) {
            console.error('Error fetching movie details:', error);
        } finally {
            setLoading(false);
        }
    }

    const getCategoriesMovies = async (categ) => {
        setLoading(true);
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/both/get-category-movies?category=${categ}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          if (data.success) {
            setForYouMovies(data.getMovie);
          }
        } catch (error) {
          console.error('Error fetching movies:', error);
        } finally {
          setLoading(false);
        }
      }

      useEffect(() => {
        getCategoriesMovies('ForYou');
      }, []);




    useEffect(() => {
        getMovieDetails();
    },[]);

    // console.log(movieDetails);


  return (
    <>
    <UserNav  />
    {loading && (
        <l-infinity
        size="55"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.0" 
        color="#FFC94A" 
      ></l-infinity>
    )}
    <div>
        <div className='poster-container'>
            <img src={`${process.env.REACT_APP_API_URL}/${movieDetails.image}`} alt={movieDetails.movieName} />

        </div>
        <div className='player-server'>
            <p>If current server doesn't work please try other servers below.</p>
            <div className='players'>
                <div className='player1 server'>
                    <p>VidPlay</p>
                    <button>Play</button>
                </div>
                <div className='player2 server'>
                    <p>FileCloud</p>
                    <button>Play</button>
                </div>
                <div className='player3 server'>
                    <p>MoonFile</p>
                    <button>Play</button>
                </div>
            </div>
        </div>

        <div className='movie-details'>
            <div className='movie-image'>
                <img src={`${process.env.REACT_APP_API_URL}/${movieDetails.image}`} alt={movieDetails.movieName} />
            </div>
            <div className='movie-info'>
                <h1>{movieDetails.movieName}</h1>
                <p>Type: {movieDetails.type}</p>
                <p>Imdb: {movieDetails.IMDB_score}</p>
                <p>Length: {movieDetails.Duration} minutes</p>
                <p>Production: {movieDetails.Production}</p>
                <p>Released_year: {movieDetails.Released_year}</p>
                <p>Genre: {movieDetails.Genre}</p>
                <p>Cast: {movieDetails.Cast}</p>
            </div>
            
        </div>
        <div className='like-movie'>
                <button>Like this movie</button>
            </div>

        <div className='comment-section'>
            <h1>Comments</h1>
            <div className='comments'>
                <div className='comment'>
                    <h3>Username</h3>
                    <p>Comment</p>
                </div>
                <div className='comment'>
                    <h3>Username</h3>
                    <p>Comment</p>
                </div>
                <div className='comment'>
                    <h3>Username</h3>
                    <p>Comment</p>
                </div>
            </div>
            <div className='add-comment'>
                <textarea placeholder='Add a comment'></textarea>
                <button>Comment</button>
            </div>

        </div>

        <div className='for-you-movie-section'>
            {forYouMovies && (
                <div className='for-you-movies'>
                    <h2>Recommended For You</h2>
                    <div className='for-you-movie'>
                        {[1, 2, 3, 4, 5].map(index => {
                            const movie = forYouMovies[`movie${index}`];
                            return movie ? (
                                <div className={`movie${index}`} key={index}>
                                    <div className='image-movie'>
                                        <img src={`${process.env.REACT_APP_API_URL}/${movie.image}`} alt='movie' />
                                    </div>
                                    <p className='name-movie'>{movie.movieName}</p>
                                    <div className='extra-details-movie'>
                                        <p>{new Date(movie.Released_year).getFullYear()}</p>
                                        <p>•</p>
                                        <p>{movie.IMDB_score}</p>
                                        <p>•</p>
                                        <p>{movie?.type}</p>
                                    </div>
                                </div>
                            ) : null;
                        })}
                    </div>
                </div>
            )}

        </div>
        
    </div>
    </>
  )
}

export default ViewMovie
