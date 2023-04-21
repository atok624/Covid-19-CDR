import '../styles/MainPage.css';
import React, { useEffect, useRef, useState } from 'react';
import {
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import GetData from '../redux/Home-Api/HomeAPI';
// import Component from './Details';
import { setDetails } from '../redux/Home-Api/HomeSlice';

const Section = ({ country, cases }) => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleClick() {
    navigate(`details/${country}`);
  }
  return (
    <button type="button" className="section" onClick={() => handleClick()}>
      <i className="arrow">
        <i>
          <FontAwesomeIcon icon={faArrowRight} />
        </i>
      </i>
      <p className="country-section-text">{country}</p>
      <p className="cases">{cases}</p>
    </button>
  );
};

const Home = () => {
  const dispatch = useDispatch();
  const { data, state } = useSelector((store) => store.Home);
  const [searchData, setSearchData] = useState('');
  const arrowBack = useRef(null);

  useEffect(() => {
    if (data.length < 1) {
      dispatch(GetData());
    }
  }, [dispatch, data]);

  function handleArrowBack() {
    dispatch(setDetails(null));
    arrowBack.current.style.display = 'none';
  }

  let content;

  if (state === 'Success') {
    const filteredData = data.rawData.filter((item) => item.Country_Region.toLowerCase()
      .includes(searchData.toLowerCase()));

    content = (
      <div className="second-row">
        {filteredData.slice(0, 700).map((item, index) => (
          <Section
            key={uuidv4()}
            index={index}
            country={item.Combined_Key}
            cases={item.Confirmed}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="home">
      {content}
    </div>
  );
};

Section.propTypes = {
  country: PropTypes.string.isRequired,
  cases: PropTypes.string.isRequired,
};
export default Home;
