import React from "react";

const MovieLists = (props) => {
    return (
        <>
            {props.movies.map(
              (movie, index) => 
                 <div className="d-flex justify-content-start m-3">
                    <img src={movie.Poster} alt="movie poster" />
    
                </div>
           )
            }
        </>
    );

}




export default MovieLists