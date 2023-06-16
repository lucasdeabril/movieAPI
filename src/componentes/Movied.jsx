import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const api_key = 'ebdf776';
      const movie_id = 157336;

      try {
        const response = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=ebdf776');
        
        setMovie(response.data);
        console.log(movie.Poster)
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
    <div>
      <h1>{movie.Title}</h1>
      <p>{movie.Plot}</p>
      <img src={movie.Poster}></img>
    </div>
  );
};

export default MovieDetails;