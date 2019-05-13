import React from 'react'

function Header() {
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1 className="navbar-brand">Bookworm</h1>
        <ul className='navbar-nav'>
            <li className='nav-item'>
                <a class='nav-link' href='/'>Search</a>
            </li>
            <li className='nav-item'>
                <a class='nav-link' href='/saved'>Saved</a>
            </li>
        </ul>   
    </nav> 
)
}

export default Header;