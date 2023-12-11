import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Settings } from './components/Settings';
import { Statistics } from './components/Statistics';
import { Help } from './components/Help';
import { GameScreen } from './components/GameScreen';
import { EndGame } from './components/EndGame';
import { useState, useEffect } from 'react';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [playerName, setPlayerName] = useState("Guest");
  const [isHome, setIsHome] = useState(true);
  const [settingsMenu, setSettings] = useState(false);
  const [categories, setCategories] = useState("");
  const [numOfQuestions, setNumQuestions] = useState(10);
  const [playGame, setPlayGame] = useState(false);
  const [questions, setQuestions] = useState({});
  const [endGame, setEndGame] = useState(false);
  const [statsMenu, setStatsMenu] = useState(false);
  const [helpMenu, setHelpMenu] = useState(false);


  //URL for trivia question database
  let triviaurl = "https://opentdb.com/api.php?"

  //Partner's URL 
  let microurl = "http://24.199.127.136:8000/stats/"

  //Changes to state for content rendering
  let content;
  let navbar;

  function handleLogin(){
    setLoggedIn(true);
    setIsHome(true);
  }

  function handleLogout(){
    setIsHome(false);
    setLoggedIn(false);
    setSettings(false);
    setPlayGame(false);
    setEndGame(false);
    setStatsMenu(false);
    setHelpMenu(false);
    setNumQuestions(10);
    setCategories("");
  }

  function goHome(){
    setIsHome(true);
    setSettings(false);
    setPlayGame(false);
    setEndGame(false);
    setStatsMenu(false);
    setHelpMenu(false);
  }

  function goSettings(){
    setIsHome(false);
    setSettings(true);
    setPlayGame(false);
    setEndGame(false);
    setStatsMenu(false);
    setHelpMenu(false);
    console.log(categories);
    console.log(numOfQuestions);
  }

  function goStats(){
    setIsHome(false);
    setSettings(false);
    setPlayGame(false);
    setEndGame(false);
    setStatsMenu(true);
    setHelpMenu(false);
  }

  function goHelp(){
    setIsHome(false);
    setSettings(false);
    setPlayGame(false);
    setEndGame(false);
    setStatsMenu(false);
    setHelpMenu(true);
  }

  function goPlayGame(){
      setIsHome(false);
      setSettings(false);
      setPlayGame(true);
      setEndGame(false);
      setStatsMenu(false);
      setHelpMenu(false);
  }

  function getQuestions(){
      let categories_url = "";
      let num_url = "";
      if(categories) {
        categories_url = `&category=${categories}`
      }
      if(numOfQuestions){
        num_url = `amount=${numOfQuestions}`
      }
      let newurl = triviaurl + num_url + categories_url;
      console.log(newurl);
      let questions;
      axios.post(newurl)
      .then(function(response){
        questions = response.data.results
        console.log(questions);
        setQuestions(questions);
      })
  }


  //Conditional content rendering
  if (!isLoggedIn){
    navbar = <></>
  } else {
    navbar = <NavBar goHome={goHome} handleLogout={handleLogout} goHelp={goHelp}/>;
  }
  if (isHome && isLoggedIn){
    content = <Home playerName={playerName} goPlayGame={goPlayGame} goSettings={goSettings} goStats={goStats}/>;
  } else if (settingsMenu){
    content = <Settings numOfQuestions={numOfQuestions} setNumQuestions={setNumQuestions} categories={categories} setCategories={setCategories} getQuestions={getQuestions}/>;
  } else if(statsMenu){
    content = <Statistics />;
  } else if(helpMenu){
    content = <Help />;
  } else if(playGame){
    content = <GameScreen questions={questions}/>;
  } else if(endGame){
    content = <EndGame />;
  } else {
    content = <Login isLoggedIn={isLoggedIn} handleLogin={handleLogin} getQuestions={getQuestions}/>;
  }

  // useEffect(() => {
  //   getQuestions();
  //   console.log("Init!");
  // }, []);

  //Root rendering
  return (
    <div className = 'main'>
      {navbar}
      {content}
    </div>
  );
}

export default App;
