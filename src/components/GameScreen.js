import React from 'react';

export function GameScreen({questions}){
    let content;

    if(questions){
        content = <p>{questions[0].category}</p>
    } else {
        content = <p>Loading...</p>
    }
    return(
        <div>
            <h2>Let's play!</h2>
            {content}
        </div>
    );
}
