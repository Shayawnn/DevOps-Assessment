import React, { useEffect, useState } from "react";
import './App.css';

function App()
{
  const [backendMsg, setBackendMsg] = useState();

  const REACT_APP_API_URL = window.env.REACT_APP_API_URL ? window.env.REACT_APP_API_URL : process.env.REACT_APP_API_URL;
  const REACT_APP_WELCOME = window.env.REACT_APP_WELCOME ? window.env.REACT_APP_WELCOME : process.env.REACT_APP_WELCOME;

  // get the backend message
  const getBackendMessage = async () =>
  {
    const url = REACT_APP_API_URL + '/welcome'
    const response = await fetch(url).then((response) => response.json());
    setBackendMsg(response.msg);
  };

  useEffect(() =>
  {
    getBackendMessage();
  });

  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome message on frontend: <u>{REACT_APP_WELCOME}</u></h2>
        <h2>Welcome message on backend: <u>{backendMsg}</u></h2>
      </header>
    </div>
  );
}

export default App;
