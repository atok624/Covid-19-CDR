import '../styles/MainPage.css';
import React, { useEffect, useState } from 'react';
import {
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import GetData from '../redux/Home-Api/HomeAPI';

const Section = ({ country, cases }) => {
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
  const [searchData] = useState('');

  useEffect(() => {
    if (data.length < 1) {
      dispatch(GetData());
    }
  }, [dispatch, data]);

  let content;
  if (state === 'Success') {
    content = (
      <div className="second-row">
        {data.rawData
          .slice(0, 700)
          .filter((x) => x.Country_Region.toLowerCase().includes(searchData.toLowerCase()))
          .map((item, index) => (
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
  console.log(searchData);

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
