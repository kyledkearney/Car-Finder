import React from 'react';
import SearchBox from '../components/search_box'
import Results from '../components/results'
function Search() {
return (
    <div className='container'>
        <br/>
        <br/>
        <br/>
        <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
                <SearchBox/>
            </div>
            <div className="col-lg-1"></div>
        </div>
        <br/>
        <br/>
        <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
                <Results/>
            </div>
            <div className="col-lg-1"></div>
        </div>
    </div>
)
}

export default Search;