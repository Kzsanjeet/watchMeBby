import React, { useEffect, useState } from 'react'
import UserNav from '../../Components/UserNav'
import UserCategories from '../../Components/UserCategories'
import '../../Css/User/AllMovies.css'
import { infinity } from 'ldrs'
import { Link } from 'react-router-dom'


const AllMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

  infinity.register()


    const getAllMovies = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/get-movie`);
            const data = await response.json();
            if (data.success) {
                setMovies(data.movies);
            }
        } catch (error) {
            console.error('Error fetching movies:', error);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        getAllMovies();
    }, []);

    // console.log(movies);

  return (
    <>
    <UserNav />
    <UserCategories />

    <div className="movies-container">
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
        <div className='specific-details'>
            {movies && movies.map((movie) => (
                <Link to={`/watch-movie/${movie._id}`} id='watch-movie'>
                    <div className={`movie-details`} >
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
                </Link>
            ))}
        </div>
    </div>

    </>
  )
}

export default AllMovies