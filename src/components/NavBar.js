import React from 'react';

export function NavBar({ handleLogout, goHelp, goHome }){
    return(
        <div className = 'navbar'>
            <ul className = 'navbar-ul'>
                <li className='navbar-li'><a onClick={goHome}>Home</a></li>
                <li className='navbar-li'><a onClick={goHelp}>Help</a></li>
                <li className='navbar-li'><a onClick={handleLogout}>Logout</a></li>
            </ul>
        </div>
    );
}

