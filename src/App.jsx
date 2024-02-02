import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Loader from './components/Loader/Loader';
import { lazy } from 'react';
import { Suspense } from 'react';

const Cards = lazy(()=> import('./components/Cards/Cards'))

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="character__block">
          <Suspense fallback={<Loader/>}>
            <Cards/>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
