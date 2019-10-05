import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { resetNavigation } from './actions/navigationController'
import Header from './utilities/Header.js'
import CharList from './utilities/characterList/CharList.js'
import MoveList from './utilities/moveList/MoveList.js'
import FrameData from './utilities/frameData/FrameData.js'
import './App.css';

function mapStateToProps(state) {
  return {
    toHome: state.navigationReducer.toHome,
    toMoveList: state.navigationReducer.toMovelist,
    toFrameData: state.navigationReducer.toFrameData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetNavigation: () => dispatch(resetNavigation())
  }
}

class App extends Component {
  componentWillReceiveProps(props) {
    setTimeout(100, this.props.resetNavigation())
  }
  render() {
    var url
    if(this.props.toHome) {
      url = <Redirect to='/' />
    } else if (this.props.toMoveList) {
      url = <Redirect to='/moveList' />
    } else if (this.props.toFrameData) {
      url = <Redirect to='/frameData' />
    } else {
      url = <div></div>
    }
    return (
      <div className='App'>
        <BrowserRouter>
          <div>
            <Header />
            {url}
            <Switch>
              <Route exact path='/' component={CharList} />
              <Route exact path='/moveList' component={MoveList} />
              <Route exact path='/frameData' component={FrameData} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
