import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';

const MovieCard = (movie) => {
  const imageURLBase = "https://image.tmdb.org/t/p/original";
  const imageURL = imageURLBase + movie.movie.poster_path;
  
  return (
    <div className='relative group cursor-pointer'>
      <div>
        <img src={imageURL} className='w-[260px] group-hover:opacity-35 z-10'/>
      </div>
      <div className='absolute top-10 max-w-[240px] max-h-[260px] hidden z-20 group-hover:block'>
        <p className='text-white max-h-[170px] overflow-y-hidden mx-2'>{movie.movie.overview}.</p>
        <div className='absolute top-72 w-full flex justify-around'>
          <Link to={`/movie/${movie.movie.id}`}>
          <button className='text-white bg-blue-800 px-2 py-1 rounded-2xl'>
            Learn More
          </button>
          </Link>
          <button>
            Share
          </button>
          <button>
            <FavoriteBorderIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovieCard