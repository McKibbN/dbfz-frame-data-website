import React from 'react';
import Header from './utilities/Header.js'
import CharList from './utilities/characterList/CharList.js'
import MoveList from './utilities/moveList/MoveList.js'
import FrameData from './utilities/frameData/FrameData.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <FrameData />
    </div>
  );
}

export default App;
