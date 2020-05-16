import React, { Component } from 'react';

export default class SearchBox extends Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
      }

      onSubmit(e) {
        e.preventDefault();
        var book = this.book.value;
        console.log(book)
    }

    render() {
        return(
            <div className='card text-center'>
                <br/>
                <h1>Search for your next great read</h1>
                <form action="/search">
                <div className='form-group'>
                <input className='form-control' type="text" ref={(c) => this.book = c} name="book"/>
                </div>
                <div className='form-group'>
                <button className='btn btn-outline-primary btn-lg' type='submit' onClick={this.onSubmit}>Search</button>
                </div>
                </form>
            </div>
        )
    }
}

