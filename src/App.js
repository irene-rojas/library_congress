import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';
import Results from "./components/Results/Results";
import Pagination from "./components/Pagination/Pagination";


function App() {

  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [format, setFormat] = useState("");
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pagination, setPages] = useState([
    {id: 0, value: ""},
    {id: 1, value: ""},
    {id: 2, value: ""},
    {id: 3, value: ""}
  ]);
  // need to resubmit formatSearch() every time you get next page?
  // https://www.jstips.co/en/javascript/create-range-0/.n-easily-using-one-line/


  const imageSearch = () => {
    if (checked) {
      allSearch();
    }
     else {
       formatSearch();
     }
  }

  const formatSearch = () => {
    setLoading(true);
    Axios.get(`https://www.loc.gov/${format}/?q=${query}&fo=json`)
    .then(res => {
        setResults(res.data.results);
        // console.log(res.data.results);
        setPages(res.data.pagination);
        console.log(res.data.pagination);
        // sp=1 is the first page of results
    }).then(() => {
      setLoading(false);
    });
  }
  // Pagination: https://libraryofcongress.github.io/data-exploration/pagination.html
  // https://www.robinwieruch.de/react-pass-props-to-component
  // https://www.loc.gov/photos/?q=cars&fo=json


  const allSearch = () => {
    Axios.get(`https://www.loc.gov/search/?in=&q=${query}&fo=json&c=150`)
    // returns first 150 results
    .then(res => {
      setResults(res.data.results);
      console.log(res.data.results);
      setPages(res.data.pagination);
  });
  }

  const clearSearch = () => {
    setResults([]);
    setQuery("");
    setFormat("");
    setChecked(false);
    // defaultChecked
    // problem: checkbox is not visibly clearing after reset
  }

  const pageOne = () => {
    setLoading(true);
    Axios.get(`https://www.loc.gov/${format}/?q=${query}&fo=json&sp=1`)
    .then(res => {
        setResults(res.data.results);
        // sp=1 is the first page of results
    }).then(() => {
      setLoading(false);
    });
  }

  const pageTwo = () => {
    setLoading(true);
    Axios.get(`https://www.loc.gov/${format}/?q=${query}&fo=json&sp=2`)
    .then(res => {
        setResults(res.data.results);
        // sp=1 is the first page of results
    }).then(() => {
      setLoading(false);
    });
  }

  const pageThree = () => {
    setLoading(true);
    Axios.get(`https://www.loc.gov/${format}/?q=${query}&fo=json&sp=3`)
    .then(res => {
        setResults(res.data.results);
        // sp=1 is the first page of results
    }).then(() => {
      setLoading(false);
    });
  }

  const pageFour = () => {
    setLoading(true);
    Axios.get(`https://www.loc.gov/${format}/?q=${query}&fo=json&sp=4`)
    .then(res => {
        setResults(res.data.results);
        // sp=1 is the first page of results
    }).then(() => {
      setLoading(false);
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

        <label>
          <input 
            type="checkbox" 
            id="searchAll"
            defaultChecked={checked}
            onChange={() => setChecked(!checked)}
          />
          Search all formats
        </label>

        <br/>
        <br/>
      
        <button className="btn btn-secondary">Submit</button>

        <button className="btn btn-danger" 
          onClick={event => {
            event.preventDefault();
            clearSearch();
        }}>
          Reset
        </button>

      </form>

      {/* add "no results" result? */}

      <div className="d-flex justify-content-center">
        {loading === true && 
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>}
      </div>

      <div className="resultsDiv">
        {loading === false && 
         results.map((result, index) => {
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

      {/* hide pagination until there are results */}
      <div className="pagesDiv">

        {/* would pagination work better as Router? */}
        <Pagination
          // key={pagination.index}
          pageNum={pagination.page_list}
          pageUrl={pagination.page_list}
          // nextPage={pagination.next}
          lastPage={pagination.last}
        />

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {/* <li className="page-item"><a className="page-link" href="#">Previous</a></li> */}
          <li className="page-item"><a className="page-link" 
            onClick={event => {
            event.preventDefault();
            pageOne();
            }}>1</a></li>
          <li className="page-item"><a className="page-link" 
            onClick={event => {
            event.preventDefault();
            pageTwo();
            }}>2</a></li>
          <li className="page-item"><a className="page-link" 
            onClick={event => {
            event.preventDefault();
            pageThree();
            }}>3</a></li>
            <li className="page-item"><a className="page-link" 
            onClick={event => {
            event.preventDefault();
            pageFour();
            }}>4</a></li>
          {/* <li className="page-item"><a className="page-link" href="#">Next</a></li> */}
        </ul>
      </nav>

      </div>

    </div>
    // end App

  );
}

export default App;
