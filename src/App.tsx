import React from "react";
import Sidebar from './Sidebar';
import './App.css';

function App() {
  return (
    <div className="App" id="container">
      <Sidebar ContainerId={'container'} />
    </div>
  );
}

export default App;