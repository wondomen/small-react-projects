
import './App.css';
import {useEffect, useState} from 'react'  // import useState from react
import MovieLists from './components/MovieLists';
import 'bootstrap/dist/css/bootstrap.min.css';

const App=()=>{

  const [movies, setMovies] = useState([]);
const getMovieRequest = async () => {
  const url = `http://www.omdbapi.com/?s=Lord of The Rings&apikey=ab294668`;
  const response = await fetch(url);
  const responseJson = await response.json();
  console.log(responseJson);
  setMovies(responseJson.Search);
}
useEffect(() => {
getMovieRequest();}, []);

  return (
    <div className="App container-fluid movie-css">
      <div className="row">
       <MovieLists movies={movies}/>
      </div>
    </div>
  );
}

export default App;  
