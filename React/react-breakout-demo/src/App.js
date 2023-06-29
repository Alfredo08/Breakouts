import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Dog from './components/Dog';

function App() {
  const [counter, setCounter] = useState(0);
  const [dogImages, setDogImages] = useState([]);

  const updateCounterByOne = (e) => {
    setCounter((prevCounter) => prevCounter + 1);
  }

  const updateCounterByFive = (e) => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }

  useEffect( () => {
    const fetchDogs = async() => {
      const url = "https://dog.ceo/api/breeds/image/random/5";
      const response = await fetch(url);
      const data = await response.json();

      setDogImages((prevDogImages) => data.message);
    }
    fetchDogs();
  }, []);

  return (
    <div className="App">
      <h1>
        Hey there. You have clicked in the counter {counter} times!
      </h1>
      <div>
        <button onClick={(e) => updateCounterByOne(e)}>
          Update the counter by 1
        </button>
      </div>
      <div>
        <button onClick={(e) => updateCounterByFive(e)}>
          Update the counter by 5
        </button>
      </div>
      {
        dogImages.map((image, i) => {
          return(<Dog key={i} dogImage={image}/>);
        })
      }
    </div>
  );
}

export default App;
