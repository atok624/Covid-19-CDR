import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import {
  faSkull,
  faPeopleGroup,
  faChartSimple,
  faMaskFace,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Details.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Details = (
) => {
  const { country } = useParams();
  const countries = useSelector((state) => state.Home.data);
  const [countryDetails, setCountryDetails] = useState();

  useEffect(() => {
    if (countries && countries.rawData.length) {
      const selectedCountry = countries.rawData.find((country) => country.Country_Region);
      setCountryDetails(selectedCountry);
    }
  }, [country, countries]);

  return (
    <>
      {
        countryDetails && (
          <>
            <h2 className="Country">
              {country}
              {' '}
              (
              {countryDetails.Last_Update
                .slice(0, 10)}
              )
            </h2>
            <span className="span-item">
              <span className="header">
                <i className="icon-wrapper">
                  <FontAwesomeIcon icon={faMaskFace} />
                </i>
                <p className="incident-text">INCIDENT</p>
              </span>
              <p className="incident-details">{countryDetails.Incident_Rate}</p>
            </span>

            <span className="span-item">
              <span className="header">
                <i className="icon-wrapper">
                  <FontAwesomeIcon icon={faPeopleGroup} />
                </i>
                <p className="confirmed-text">CONFIRMED</p>
              </span>
              <p className="cases-details">{countryDetails.Confirmed}</p>
            </span>

            <span className="span-item">
              <span className="header">
                <i className="icon-wrapper">
                  <FontAwesomeIcon icon={faSkull} />
                </i>
                <p className="death-text">DEATH(S)</p>
              </span>
              <p className="deaths-details">{countryDetails.Deaths}</p>
            </span>

            <span className="span-item">
              <span className="header">
                <i className="icon-wrapper">
                  <FontAwesomeIcon icon={faChartSimple} />
                </i>
                <p className="ratio-text">RATIO</p>
              </span>
              <p className="ratio-details">{countryDetails.Incident_Rate}</p>
            </span>
          </>
        )
      }
    </>
  );
};

export default Details;
