import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import Indextem from './templete/Indextem';
import Logintem from './templete/Logintem';
import Jointem from './templete/Jointem';



function App() {
  return (
    <>
      <Route exact path='/' component={Indextem}></Route>
      <Route path='/login' component={Logintem}></Route>
      <Route path='/join' component={Jointem}></Route> 

    </>
  );
}

export default App;
