import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player'
import CloseIcon from '@mui/icons-material/Close';

const Movie = () => {
  const [movieData, setMovieData] = useState();
  const location = useLocation();
  const [similarMovies, setSimilarMovies] = useState();
  const [showTrailer, setShowTrailer] = useState(false);
  const movieId = window.location.pathname.replace('/movie/', "");

  const [trailerKey, setTrailerKey] = useState("");
  
  const authkey = import.meta.env.VITE_REACT_APP_AUTHORIZATION_TMDB;

  const imageURLBase = "https://image.tmdb.org/t/p/original";

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}`,
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: authkey
    }
  };

  const optionsForRec = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}/recommendations`,
    params: {language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: authkey
    }
  };

  const optionForTrailer = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}/videos`,
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: authkey
    }
  };

  useEffect(() => {
    const getData = async () => {
        await axios
          .request(options)
          .then(function (response) {
            // console.log(response.data);
            setMovieData(response.data);
            
          })
          .catch(function (error) {
            console.error(error);
        });
      }
    getData();

    const getRec = async () => {
      await axios
          .request(optionsForRec)
          .then(function (response) {
            // console.log(response.data);
            setSimilarMovies(response.data.results);
            
          })
          .catch(function (error) {
            console.error(error);
        });
    }

    getRec();

    const getTrailer = async () => {
      await axios
          .request(optionForTrailer)
          .then(function (response) {
            response.data.results.forEach(element => {
              if((element.type == "Trailer" || element.type == "Official Trailer") && element.site == "YouTube") {
                setTrailerKey(element.key);
              }else{
                setTrailerKey("");
              }
            });
          })
          .catch(function (error) {
            console.error(error);
        });
    }
    getTrailer();
  }, [location]);

  // useEffect(()=> {
  //   if(movieData.backdrop_path) {
  //     setImageURL(imageURLBase + movieData.backdrop_path);
  //   }else{
  //     setImageURL(imageURLBase + movieData.poster_path);
  //   }
  // }, [movieData])

  return (
    <div>
      <div>
        {movieData && (
          <div className='relative'>
            <div>
              <img src={imageURLBase + movieData.backdrop_path} 
              className='min-h-[90vh] w-full opacity-20 object-fill'
              />
            </div>
            <div className='absolute md:top-20 top-10 flex md:flex-row flex-col justify-center items-center w-full space-x-4 space-y-4'>
              <div>
                <img src={imageURLBase + movieData.poster_path} 
                className='w-[260px]'
                />
              </div>
              <div className='md:max-w-[50vw] max-w-[100vw] space-y-2'>
                <p className='md:text-3xl text-2xl text-white text-center'>{movieData.title}</p>
                <p className='md:text-2xl text-xl text-white'>{movieData.overview}</p>
                <div>
                  <button className='border-2 rounded-3xl p-2 border-orange-500 text-white font-mono hover:bg-orange-500'
                  onClick={(e) => setShowTrailer(true)}
                  >
                    Watch Trailer
                  </button>
                </div>
              </div>
            </div>
            <div className='absolute top-5 w-full flex justify-center bg-opacity-30'>
              {showTrailer && (
                <div className=''>
                  <button onClick={(e) => setShowTrailer(!showTrailer)} className='flex w-full justify-end my-2'><CloseIcon sx={{ color: 'white', fontSize: 36 }} /></button>
                  <ReactPlayer url={`https://www.youtube.com/watch?v=${trailerKey}`} 
                  controls='true'
                  width={'90vw'}
                  height={'70vh'}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div>
        <h1 className='text-center py-8 text-xl md:text-3xl text-white'>Similar Movies</h1>
        <div className='flex flex-wrap space-x-4 gap-y-4 justify-center w-full py-4 px-10'>
          {similarMovies && similarMovies.map((movie) => (
            <div>
              <MovieCard movie={movie}/>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Movie
