import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';
import Results from "./components/Results/Results";


function App() {

  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [format, setFormat] = useState("");

  const imageSearch = () => {
    Axios.get(`https://www.loc.gov/${format}/?q=${query}&fo=json`)
    .then(res => {
        setResults(res.data.results);
        console.log(res.data.results);
    });
  }


  return (
    <div className="App">

      <header><h1>Search the Library of Congress</h1></header>

      <form
        className="searchForm"
        onSubmit={event => {
          event.preventDefault();
          imageSearch();
        }}>

        <input 
          value={query}
          onChange={event => {
              event.preventDefault();
              setQuery(event.target.value);
          }}
        />

        <br/>

        <select
            className="formatDropdown"
            value={format}
            onChange={event => {
                event.preventDefault();
                setFormat(event.target.value);
            }}>
            <option>Select media format</option>
            <option value="photos">Photos</option>
            <option value="audio">Audio</option>
            <option value="film-and-videos">Film/Videos</option>
            <option value="newspapers">Newspapers</option>
            <option value="maps">Maps</option>
            <option value="manuscripts">Manuscripts</option>
            <option value="websites">Websites</option>
            <option value="notated-music">Printed Music</option>
        </select>

        <br/>

        <button className="button">Submit</button>

      </form>

      <div className="resultsDiv">
        {results.map((result, index) => {
          return (
            <Results
              className="singleResult" 
              key={index}
              title={result.title}
              description={result.description}
              image={result.image_url[0]}
            />
          )
        })}
      </div>

    </div>
    // end App

  );
}

export default App;
