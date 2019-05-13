import React from 'react';

function SearchBox() {
    return(
    <div className='card'>
        <br/>
        <form action="/search">
        <div className='form-group'>
        <label>Search for your next great read</label>
        <input className='form-control' type="text"/>
        </div>
        </form>
    </div>
    )
}
export default SearchBox;