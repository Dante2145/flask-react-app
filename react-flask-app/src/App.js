import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/form'
import Links from './components/links';
import Scanner from './components/scanner';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [scanResult, setScanResult] = useState('');
  const [TestValue, setTestValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);
  
  const handleScan = () => {
    fetch('/api/scan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input: inputValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        setScanResult(data.result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  //Testing, Can Remove
    const handleTest = () => {
      fetch('/test').then(res => res.json()).then(data =>{
        setTestValue(data.response);
      });
    };

  return (
    <div className="App">
      <header className="App-header">
        <p>The current time is {currentTime}.</p>
      </header>
      <div>
        <Scanner/>
        <Form />
        <Links/>
      </div>
    </div>
    
  ); 

}
export default App;
