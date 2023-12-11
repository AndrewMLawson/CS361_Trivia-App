import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  let content;

  function handleLogin(){
    setLoggedIn(!isLoggedIn);
  }

  if (isLoggedIn){
    content = <Home/>;
  } else {
    content = <Login isLoggedIn={isLoggedIn} onClick={handleLogin} />;
  }
  return (
    <div className = 'main'>
      <NavBar isLoggedIn={isLoggedIn} onClick={handleLogin}/>
      {content}
  </div>
  );
}

export default App;
