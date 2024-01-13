import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Loader from './components/Loader/Loader';

function App() {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const count = 1

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then((res) => {
        setData(res.data.results)
        setIsLoading(false)
        console.log(res.data);
      })
  }, [])

  return (
    <div className="App">
      <div className="container">
        <div className="character__block">
          {
            isLoading ? <Loader /> :
              data.map((item) => (
                <div className='character__card' key={count + 1}>
                  <h1>{item.name}</h1>
                  <img src={item.image} alt="character_image" />
                </div>
              ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
