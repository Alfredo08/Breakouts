import { useEffect, useState } from 'react';
import './App.css';
import Article from './components/Article';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const updateCounterByOne = (event) => {
    console.log(event);
    setCounter((prevCounter) => prevCounter + 1);
  }

  const updateCounterByFive = (event) => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }

  const retrieveArticles = (event) => {
    event.preventDefault();
    const currentSearchTerm = event.target.searchTerm.value;
    setSearchTerm((prevSearchTerm) => currentSearchTerm);
  }

  useEffect(() => {
    const fetchArticles = async() => {
      const URL = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=e993fe0805de4ec0abaff5d967e9302a`;
      const response = await fetch(URL);
      const data = await response.json();
      setArticles((prevArticles) => data.articles);
    }
    if(searchTerm !== ""){
      fetchArticles();
    }
  }, [searchTerm]);

  return (
    <div className="App">
      <h1> Welcome to the React breakout </h1>
      <p> You've clicked the button {counter} times! </p>
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
      <form onSubmit={(e) => retrieveArticles(e)}>
        <div>
          <label htmlFor="searchTerm">
            Search criteria:
          </label>
          <input id="searchTerm" name="searchTerm"/>
        </div>
        <button type="submit">
          Get the news!
        </button>
      </form>
      <div className="results">
        {articles.map((article, index) => {
          return (<Article author={article.author}
                           title={article.title}
                           description={article.description}
                           urlToImage={article.urlToImage}/>);
        })}
      </div>
    </div>
  );
}

export default App;
