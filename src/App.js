import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';
import Results from "./components/Results/Results";


function App() {

  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [format, setFormat] = useState("");

  const imageSearch = () => {
    Axios.get(``)
    // https://www.loc.gov/${format}/?q=${query}&fo=json - this is standard query form
    // https://www.loc.gov/search/?in=&q=${query}&fo=json&c=150 - this gets first 150 results of all format types
    // how write in pagination, or all results at once?
    .then(res => {
        setResults(res.data.results);
        console.log(res.data.results);
    });
  }


  return (
    <div className="App">

      <header>
        <h1>Search the Library of Congress</h1>
        <p>Powered by the <a href="https://libraryofcongress.github.io/data-exploration/" target="_blank" rel="noreferrer">LOC API</a></p>
      </header>
      

      <form
        className="searchForm"
        onSubmit={event => {
          event.preventDefault();
          imageSearch();
        }}>

        <h4>Enter a search term:</h4>

        <input 
          className="input"
          value={query}
          onChange={event => {
              event.preventDefault();
              setQuery(event.target.value);
          }}
        />

        <br/>
        <br/>

        {/* does LOC api access multiple {format}? */}
        {/* also need a "read more" option for long results */}

        <select 
            className="formatDropdown form-select form-select-sm"
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
        <br/>

        <button className="btn btn-dark">Submit</button>

      </form>

      {/* add spinner, and "no results" result */}
      {/* should link to result on LOC page */}

      <div className="resultsDiv">
        {results.map((result, index) => {
          return (
            <Results
              className="singleResult" 
              key={index}
              title={result.title}
              description={result.description}
              image={result.image_url[0]}
              url={result.url}
              format={result.original_format}
            />
          )
        })}
      </div>

    </div>
    // end App

  );
}

export default App;
