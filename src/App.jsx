import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Loader from './components/Loader/Loader';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="character__block">
          <Cards/>
        </div>
      </div>
    </div>
  );
}

export default App;
