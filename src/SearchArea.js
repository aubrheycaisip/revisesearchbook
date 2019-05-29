import React from 'react';
import './App.css';

const SearchArea = (props) =>{
    return(
       <div className="area-search">
           <form onSubmit={props.bookSearch} action="">
               <input onChange={props.searchHandle} type="text"/>
               <button type="submit">Search</button>
           </form>
       </div>

    )
}
export default SearchArea;