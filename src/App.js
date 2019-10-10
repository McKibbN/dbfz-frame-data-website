import React, { Component }from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen.js'
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
      sideDrawerOpen: false,
      isLoading: true
    }
    this.drawerClickHandle = this.drawerClickHandle.bind(this)
  }

  componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 3000)
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
          {this.state.isLoading ? <LoadingScreen /> : null}
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
