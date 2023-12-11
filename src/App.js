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
import { useState } from 'react';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [playerName, setPlayerName] = useState("Guest");
  const [isHome, setIsHome] = useState(true);
  const [settingsMenu, setSettings] = useState(false);
  const [categories, setCategories] = useState([]);
  const [numOfRounds, setRounds] = useState(3);
  const [numOfQuestions, setNumQuestions] = useState(10);
  const [playGame, setPlayGame] = useState(false);
  const [questions, setQuestions] = useState({});
  const [endGame, setEndGame] = useState(false);
  const [statsMenu, setStatsMenu] = useState(false);
  const [helpMenu, setHelpMenu] = useState(false);


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

  function handleSetRounds(num){
    setRounds(num);
  }

  //Conditional content rendering
  if (!isLoggedIn){
    navbar = <></>
  } else {
    navbar = <NavBar goHome={goHome} handleLogout={handleLogout} goHelp={goHelp}/>
  }
  if (isHome && isLoggedIn){
    content = <Home playerName={playerName} goPlayGame={goPlayGame} goSettings={goSettings} goStats={goStats}/>;
  } else if (settingsMenu){
    content = <Settings />;
  } else if(statsMenu){
    content = <Statistics />;
  } else if(helpMenu){
    content = <Help />;
  } else if(playGame){
    content = <GameScreen />;
  } else if(endGame){
    content = <EndGame />;
  } else {
    content = <Login isLoggedIn={isLoggedIn} handleLogin={handleLogin}/>;
  }
  //Root rendering
  return (
    <div className = 'main'>
      {navbar}
      {content}
  </div>
  );
}

export default App;
