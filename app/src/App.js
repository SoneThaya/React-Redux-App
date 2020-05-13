import React from 'react';
import Dog from './components/Dog'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="App">
      <h1>Random Dog Generator</h1>
      <Button variant="primary" onClick={refreshPage}>Click to see another dog!</Button>
      <Dog />
    </div>
  );
}

export default App;
