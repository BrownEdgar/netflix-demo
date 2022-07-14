import React, { useState, useEffect } from 'react';
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { IoIosClose } from "react-icons/io";
import "./Row.scss"

const base_url = 'https://image.tmdb.org/t/p/w500/';

export default function Row({ title, fetchUrl, islargeRow }) {
  const [movies, setmovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState('');
  const [timeToPlay, settimeToPlay] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results)
    }
    fetchData()
  }, [fetchUrl])

  const opts = {
    height: '490',
    width: '60%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {

    if (trailerUrl) {
      settrailerUrl('');
    } else {
      movieTrailer(movie?.name || movie?.title || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search)
          settrailerUrl(urlParams.get('v'));
        })
        .catch(err => console.log(err))
    }
  }
  return <div className='row'>
    <h2>{title}</h2>
    <div className="row__posters">
      {movies.map(movie => {
        return <img
          className={`row__poster ${islargeRow && "row_posterlarge"}`}
          key={movie.id}
          onClick={() => {
            handleClick(movie)
            settimeToPlay(true)
          }}
          src={`${base_url}${islargeRow ? movie.poster_path : movie.backdrop_path}`}
          alt={movie.title} />
      })}
    </div>
    {(trailerUrl && timeToPlay) && <div className='video_box'>
      <span onClick={() => {
        settimeToPlay(false)
      }}><IoIosClose /></span>
      <YouTube
        videoId={trailerUrl}
        onEnd={() => settimeToPlay(false)}
        opts={opts}
        className='player' />
    </div>}
  </div>
}
