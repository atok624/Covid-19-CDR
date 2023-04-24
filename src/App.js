import { Outlet } from 'react-router-dom';
import {
  faArrowLeft,
  faSearch,
  faVirusCovid,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function App() {
  const summary = useSelector((state) => state.Home.data);
  const [global, setGlobal] = useState();
  const [searchData, setSearchData] = useState('');

  useEffect(() => {
    if (summary && summary.summaryStats) {
      setGlobal(summary.summaryStats.global);
    }
  }, [summary]);

  return (
    <>
      <nav className="navbar">
        <i
          role="button"
          tabIndex={0}
          className="goBack"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </i>
        <p className="covid-19-report">
          <FontAwesomeIcon icon={faVirusCovid} />
          COVID-19 CDR
        </p>
        <span className="searchBar">
          <input
            type="text"
            placeholder="Search Country"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
          <i className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </i>
        </span>
        <p className="second covid-19-report">
          <FontAwesomeIcon icon={faGlobe} />
          GLOBAL CASES
        </p>
      </nav>
      <div className="Info">
        <h2 className="global">
          GLOBAL COVID CASES
          <br />
          (2020 - PRESENT)
        </h2>
        <div className="Info-Wrapper">
          <span className="span">
            <p className="confirmed-text-home">CONFIRMED</p>
            <p className="confirmed">{global ? global.confirmed : 0}</p>
          </span>
          <span>
            <p className="deaths-text">DEATHS</p>
            <p className="deaths">{global ? global.deaths : 0}</p>
          </span>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default App;
