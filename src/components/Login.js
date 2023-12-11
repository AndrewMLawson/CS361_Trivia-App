import React from 'react';


export function Login({ isLoggedIn, handleLogin, getQuestions}){
    return(
        <div>
        <header>
          <h1>Welcome to TriviaApp</h1>
          <h2>**Sign-In functionality coming soon!</h2>
          <button onClick={() => {handleLogin(); getQuestions();}}>Continue as guest</button>
        </header>
      </div>
    );
}
