import React from "react";
const SearchBox = (props) => {
    return (
        <div className="col col-sm-4">
            <input 
            className="from-control" 
            placeholder=" search for movies"
            value={props.value}
            onChange={(event) => props.setSearchMovie(event.target.value)}/>
        </div>
    );
}
export default SearchBox;