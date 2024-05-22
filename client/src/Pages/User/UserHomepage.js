import React, { useEffect, useState } from 'react'
import UserNav from '../../Components/UserNav'
import UserCategories from '../../Components/UserCategories'
import '../../Css/User/UserHomepage.css'
import { tailChase } from 'ldrs'
import { infinity } from 'ldrs'



// Default values shown


const UserHomepage = () => {

  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [forYouMovies, setForYouMovies] = useState([]);

  const [loading, setLoading] = useState(false);

  tailChase.register()
  infinity.register()


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
        if (categ === 'Featured') {
          setFeaturedMovies(data.getMovie);
        } else if (categ === 'Trending') {
          setTrendingMovies(data.getMovie);
        } else if (categ === 'ForYou') {
          setForYouMovies(data.getMovie);
        }
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  }
  


  useEffect(() => {
    getCategoriesMovies('Featured');
    getCategoriesMovies('Trending');
    getCategoriesMovies('ForYou');
  }, []);

  // console.log(featuredMovies);



  return (
    <>
        <UserNav />
        <UserCategories />
        {loading ? (
          <div className='loading'>
            {/* <l-tail-chase
              size="40"
              speed="1.75" 
              color="#FFC94A " 
            ></l-tail-chase> */}
  
          <l-infinity
            size="55"
            stroke="4"
            stroke-length="0.15"
            bg-opacity="0.1"
            speed="1.0" 
            color="#FFC94A" 
          ></l-infinity>
          </div>
        ):null}
        <div className='main-container'>
            <div className='featured-movies-container'>
                <h2>Featured Movies</h2>
                <div className='featured-movies'>
                  {featuredMovies && (
                    <div className='movie-short-info'>
                      {/* Iterate over the movies */}
                      {[1, 2, 3, 4, 5].map(index => {
                        const movie = featuredMovies[`movie${index}`];
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
                  )}
                </div>
            </div>

            <div className='trending-movies-container'>
                <h2>Trending Movies</h2>
                <div className='trending-movies'>
                    {trendingMovies && (
                        <div className='movie-short-info'>
                            {[1, 2, 3, 4, 5].map(index => {
                                const movie = trendingMovies[`movie${index}`];
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
                    )}
                </div>
            </div>

            <div className='all-moives-container'>
              <h2>Movies</h2>

            </div>

        </div>
      
        
    </>
  )
}

export default UserHomepage