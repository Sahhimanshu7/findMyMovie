import React, { useEffect, useState } from 'react'
import { MoodsList } from '../assets/MoodsList';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const Movies = () => {
  const [moviesData, setMoviesData] = useState();
  const moodPath = window.location.pathname.replace('/movies/', "");
  const GenreParams = (`${MoodsList[moodPath]}`).replaceAll(",", "%2C%");
  console.log(GenreParams);
  
  const authkey = import.meta.env.VITE_REACT_APP_AUTHORIZATION_TMDB;

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        include_adult: 'true',
        include_video: 'true',
        language: 'en-US',
        page: '1',
        sort_by: 'vote_count.desc',
        with_genres: GenreParams,
      },
      headers: {
        accept: 'application/json',
        Authorization: authkey
      }
    };

    const getData = async () => {
      await axios
        .request(options)
        .then(function (response) {
          // console.log(response.data);
          setMoviesData(response.data.results);
        })
        .catch(function (error) {
          console.error(error);
      });
    }
    getData();
  }, []);

  return (
    <div>
      <h1 className='md:text-3xl text-xl text-center my-4 text-white'>{moodPath.toUpperCase()} MOVIES</h1>
      <div className='flex flex-wrap space-x-4 gap-y-4 justify-center'>
        {moviesData && (moviesData.map((movie) => (
          <div>
            <MovieCard movie={movie}/>
          </div>
        )))}
      </div>
      <button className='w-full flex justify-center py-4 text-white cursor-pointer'>
        Load More
      </button>
    </div>
  )
}

export default Movies





