import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import HomePage from './components/homepage/homepage'
import NavBar from './components/navbar/navbar'
function App() {
  return (
    <div className='App'>
      <Route path='/' component={NavBar}></Route>

      <Route exact path='/' component={HomePage}></Route>
    </div>

  );
}

export default App;
