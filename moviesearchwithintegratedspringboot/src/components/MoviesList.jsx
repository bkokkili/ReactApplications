
import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const MoviesList = ({ data }) => {
  return (
    <div>
      <Grid
        container
        style={{ marginTop: "10px" }}
        spacing={3}
        columns={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        height={640}
      >
        {data &&
          data.map((movie, index) => (
            <Grid key={index} item height={670} width={290}>
              <Card>
                <Grid height={630}>
                  <CardActionArea>
                    <CardMedia>
                      <img src={movie.Poster} alt={movie.Title} height={400}/>
                    </CardMedia>
                    <CardContent>
                      <h2>{movie.Title}</h2>
                      <p>Year: {movie.Year}</p>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                   
                    <Button variant="contained" style={{marginLeft:'60px',marginTop:'10px'}}>
                      <a
                        href={`https://www.imdb.com/title/${movie.imdbID}`}
                        style={{ textDecoration: "none", color: "white" }}
                        target="_blank"
                      >
                        Check Imdb
                      </a>
                    </Button>
                   
                  </CardActions>
                </Grid>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default MoviesList;
