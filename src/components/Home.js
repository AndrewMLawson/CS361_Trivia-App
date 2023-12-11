import React from 'react';

export function Home({goPlayGame, goSettings, goStats, playerName, setQuestions}){
    return(
    <div>
      <br></br>
      <h1>Hello, {playerName}!</h1>
      <button onClick={goPlayGame}>Play</button>
      <br></br>
      <button onClick={goSettings}>Settings</button>
      <br></br>
      <button onClick={goStats}>Statistics</button>
      <br></br>
      <p>Message for updates...</p>
    </div>
    );
}