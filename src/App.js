import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import Player from './components/player.js';
import Clan from './components/clan.js';

class App extends Component {
  render(){
      return(
          <BrowserRouter>
            <div>
                <Route exact path='/' Component={Player} />
                <Route exact path='/clan' Component={Clan}/>
            </div>
          </BrowserRouter>
            
      );
  }
}

export default App;
