import React, { useEffect, useState } from 'react'
import { MoodsList } from '../assets/MoodsList';
import axios from 'axios';

const Movies = () => {
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
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
      });
    }
    getData();
  }, []);

  
  return (
    <div>Movies</div>
  )
}

export default Movies





