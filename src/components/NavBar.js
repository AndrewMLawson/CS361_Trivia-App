import React from 'react';

export function NavBar({ isLoggedIn, onClick}){
    return(
        <div className = 'navbar'>
            <ul className = 'navbar-ul'>
                <li className='navbar-li'><a>Home</a></li>
                <li className='navbar-li'><a>Help</a></li>
                <li className='navbar-li'><a onClick={onClick}>Logout</a></li>
            </ul>
        </div>
    );
}

