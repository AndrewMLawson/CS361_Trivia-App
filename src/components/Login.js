import React from 'react';


export function Login({ isLoggedIn, onClick}){
    return(
        <div>
        <header>
          <h1>Welcome to TriviaApp</h1>
          <h2>Sign In...</h2>
          <button onClick={onClick}>Continue as guest</button>
        </header>
      </div>
    );
}
