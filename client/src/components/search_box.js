import React from 'react';

function SearchBox() {
    return(
    <div className='card text-center'>
        <br/>
        <h1>Search for your next great read</h1>
        <form action="/search">
        <div className='form-group'>
        <input className='form-control' type="text"/>
        </div>
        <div className='form-group'>
        <button className='btn btn-outline-primary btn-lg' type='submit'>Search</button>
        </div>
        </form>
    </div>
    )
}
export default SearchBox;