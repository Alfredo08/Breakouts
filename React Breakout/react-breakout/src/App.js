import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import Dog from './components/Dog';

import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchDogs = async() => {
      const response = await fetch("https://dog.ceo/api/breeds/image/random/10");
      const data = await response.json();
      setImages((previousImages) => data.message);
    }

    fetchDogs();
  }, []);

  const updateCounterByOne = (e) => {
    setCounter((previousCounter) => previousCounter + 1);
  }

  const updateCounterByFive = (e) => {
    setCounter((previousCounter) => previousCounter + 1);
    setCounter((previousCounter) => previousCounter + 1);
    setCounter((previousCounter) => previousCounter + 1);
    setCounter((previousCounter) => previousCounter + 1);
    setCounter((previousCounter) => previousCounter + 1);
  }

  return (
    <div className="App">
      <h1> Hey there. You have clicked {counter} times the counter button. </h1>
      <div>
        <button onClick={(e) => updateCounterByOne(e)}>
          Update counter by 1
        </button>
      </div>
      <div>
        <button onClick={(e) => updateCounterByFive(e)}>
          Update counter by 5
        </button>
      </div>
      <div>
        {images.map((imageUrl, index) => {
          return (<Dog imageUrl={imageUrl} key={index} updateCounterByOne={updateCounterByOne}/>);
        })}
      </div>
    </div>
  );
}

export default App;
