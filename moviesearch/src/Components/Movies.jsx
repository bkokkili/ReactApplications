import React, { useState, useEffect } from "react";
import MoviesList from "./MoviesList";
import TextField from '@mui/material/TextField';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    let API_key = "7722ae9b";
   fetch(`http://localhost:8082/loadMoviesBySearch?searchTerm=${searchTerm}&apiKey=${API_key}`)
    //fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_key}`)
      .then((response) => response.json())
      .then((data) => setMoviesData(data));
     //.then((data) => console.log(data.Search));
  }, [searchTerm]);

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "blue" }}>Movies Search</h1>
      <header style={{ textAlign: "center" }}>

        <TextField id="outlined-basic" label="Enter Movie" variant="outlined"  onChange={(e) => setSearchTerm(e.target.value)}/>
       
      </header>
      <MoviesList data={moviesData} />
    </div>
  );
};

export default Movies;