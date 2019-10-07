import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './utilities/Header.js'
import CharList from './utilities/characterList/CharList.js'
import MoveList from './utilities/moveList/MoveList.js'
import FrameData from './utilities/frameData/FrameData.js'
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Route exact path='/' component={CharList}/>
        <Route path='/moveList' component={MoveList}/>
        <Route path='/frameData' component={FrameData}/>
      </div>
    </Router>
  )
}

export default App;
