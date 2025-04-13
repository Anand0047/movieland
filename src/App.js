import { useEffect, useState } from "react";
// 46617fe4
import './App.css';
import searchIcon from './search.svg';
import Moviecard from './MovieCard'

const API_URL ="https://www.omdbapi.com/?apikey=46617fe4";
const movie1 = {
    "Title": "The Batman",
    "Year": "2022",
    "imdbID": "tt1877830",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_SX300.jpg"
}
const App= ()=>{
const [movie , setMovie] = useState([])
const [searchTerm ,setSearchterm] = useState('')
    const searchMovie = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovie(data.Search);
        
    }


    useEffect(()=>{
        searchMovie('Batman');

    },[])

    return(
        <div className="app">
            <h1>MoviePedia   </h1>

            <div className="search">
                <input 
                 placeholder="Search for the movies"
                 value={searchTerm}
                 onChange={(e)=>setSearchterm(e.target.value)}

                />
                 <img
                 src={searchIcon}
                 alt=""
                 onClick={()=>searchMovie(searchTerm)}
                 />

            </div>

            {   movie?.length >0
                ?(
                    <div className="container">
                        {movie.map((movie) =>(
                            <Moviecard movie={movie}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }

            
        </div>   
        
    );


}
export default App;