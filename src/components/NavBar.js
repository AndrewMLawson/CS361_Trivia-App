import React from 'react';
import { SlClose, SlQuestion, SlHome } from "react-icons/sl";

export function NavBar({ handleLogout, goHelp, goHome }){
    return(
        <div className = 'navbar'>
            <ul className = 'navbar-ul'>
                <li className='navbar-li'><a onClick={goHome}>< SlHome /> Home</a></li>
                <li className='navbar-li'><a onClick={goHelp}>< SlQuestion /> Help</a></li>
                <li className='navbar-li'><a onClick={handleLogout}>< SlClose /> Logout</a></li>
            </ul>
        </div>
    );
}

