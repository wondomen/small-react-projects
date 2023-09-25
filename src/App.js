
import './App.css';
import {useEffect, useState} from 'react'  // import useState from react
import MovieLists from './components/MovieLists';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

const App=()=>{
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState(''); // useState returns an array with two elements [0, 
  const getMovieRequest = async (searchMovie) => {
  const url = `http://www.omdbapi.com/?s=${searchMovie}&apikey=ab294668`;
  const response = await fetch(url);
  const responseJson = await response.json();
  if(responseJson.Search){
    setMovies(responseJson.Search)};
   };
   
 useEffect(() => {
  getMovieRequest(searchMovie);}, [searchMovie]);

  return (
    <div className="App container-fluid movie-css">
      <div className="row d-flex align-items-center mb-4">
       <MovieListHeading heading='Movies'/>
       <SearchBox searchMovie={searchMovie} setSearchMovie={setSearchMovie}/> 
      </div>
      <div className="row">
       <MovieLists movies={movies}/>
      </div>
    </div>
  );
}

export default App;  
