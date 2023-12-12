import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function GameScreen({questions, numOfQuestions}){
    const [results, setResults] = useState({})
    const microurl = "http://localhost:8777/stats/";

    //Initialize answers object for microservice
    useEffect(() => {
        for(let i = 0; i < numOfQuestions; i++){
            results[i] = false;
        };
    });

    const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }

    let questionsAnswers = questions.map((question) => {
        let answersArray = question.incorrect_answers;
        answersArray.push(question.correct_answer);
        // shuffleArray(answersArray);
        if (question.type === 'multiple'){
            return(
                <>
                    <h3>{question.question}</h3><br></br>
                    <input key={answersArray[0]} name={questions.indexOf(question)} type="radio" id={answersArray[0]} value={answersArray[0]}/><label htmlFor={answersArray[0]}>{answersArray[0]}</label><br></br>
                    <input key={answersArray[1]} name={questions.indexOf(question)} type="radio" id={answersArray[1]} value={answersArray[1]}/><label htmlFor={answersArray[1]}>{answersArray[1]}</label><br></br>
                    <input key={answersArray[2]} name={questions.indexOf(question)} type="radio" id={answersArray[2]} value={answersArray[2]}/><label htmlFor={answersArray[2]}>{answersArray[2]}</label><br></br>
                    <input key={answersArray[3]} name={questions.indexOf(question)} type="radio" id={answersArray[3]} value={answersArray[3]}/><label htmlFor={answersArray[3]}>{answersArray[3]}</label><br></br>
                </>
            );
        } else {
            return(
                <>
                    <h3>{question.question}</h3><br></br>
                    <input id={question.question + "true"} name={questions.indexOf(question)} type="radio" value="True"/><label htmlFor={question.question + "true"}>True</label><br></br>
                    <input id={question.question + "false"} name={questions.indexOf(question)} type="radio" value="False"/><label htmlFor={question.question + "false"}>False</label><br></br>
                </>
            )
        }
        
    });

    function onChangeAnswer(event){
        let questionPosition = event.target.name;
        let resultsCopy = results;
        if(event.target.value === questions[questionPosition].correct_answer){
            resultsCopy[questionPosition] = true;
        } else {
            resultsCopy[questionPosition] = false
        }
        setResults(resultsCopy);
    }

    async function postFinalStats(url = "", data = {}) {
        const response = await fetch(url, {
          method: "POST", 
          mode: "cors", 
          cache: "no-cache", 
          credentials: "same-origin", 
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow", 
          referrerPolicy: "no-referrer", 
          body: JSON.stringify(data),
        });
        return response.json(); 
      }

    function handleSubmission(event){
        console.log(results);
        // postFinalStats(microurl, results);
        postFinalStats(microurl, results).then((data) => {
            console.log(data); 
          });
        event.preventDefault();
    }

    return(
        <div>
            <h2>Let's play!</h2>
            <form onSubmit={handleSubmission}>
                <div onChange={onChangeAnswer}>
                    {questionsAnswers}
                </div>
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
