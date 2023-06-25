import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieDetails = (props) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const api_key = 'ebdf776';
      const movie_id = props.nome;
      console.log(movie_id)
      try {
        const response = await axios.get(`http://www.omdbapi.com/?t=${movie_id}&apikey=${api_key}`);
        
        setMovie(response.data);
        
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    fetchMovieDetails();
  }, []);


  if (!movie) {
    return (<div>Carregando...</div>);
  }

  return (
    <div className='filme'>
      <img className='poster' src={movie.Poster}></img>
      <div className='discricao'>
        <h1 className='title'>{movie.Title}</h1>
        <p className='plot'>{movie.Plot}</p>
      </div>
      
    </div>
  );
};

export default MovieDetails;