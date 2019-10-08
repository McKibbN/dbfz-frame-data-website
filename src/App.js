import React, { Component }from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header.js'
import SideDrawer from './components/SideDrawer.js'
import CharList from './components/characterList/CharList.js'
import MoveList from './components/moveList/MoveList.js'
import FrameData from './components/frameData/FrameData.js'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      sideDrawerOpen: false
    }
    this.drawerClickHandle = this.drawerClickHandle.bind(this)
  }

  drawerClickHandle() {
    this.setState(prevState => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Header drawerClickHandle={this.drawerClickHandle}/>
          {
            this.state.sideDrawerOpen
            ?
            <SideDrawer show={this.state.sideDrawerOpen} drawerClickHandle={this.drawerClickHandle}/>
            :
            null
          }
          <Route exact path='/' component={CharList}/>
          <Route path='/moveList' component={MoveList}/>
          <Route path='/frameData' component={FrameData}/>
        </div>
      </Router>
    )
  }
}

export default App;
