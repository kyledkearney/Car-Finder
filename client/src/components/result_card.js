import React from 'react'

function ResultCard () {
return (
    <div className='card'>
        <div className='card-header'>Sample Book Title</div>
        <div className='card-body'>
            <div className='row'>
                <h6>author</h6>
            </div>
            <div className='row'>
                <div className='col-lg-6'>

                </div>
                <div className='col-lg-6'>
                </div>
            </div>
        </div>
        <div className='card-footer'>
        <a href=''>Go to Google Books</a>
        </div>
    </div>
);
}

export default ResultCard;