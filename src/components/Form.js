import React, { Fragment, useEffect, useState } from 'react';
import Viz from './Viz';

const InputForm = () => {
  const [location, setLocation] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [submissionLocation, setSubmissionLocation] = useState('London');
  const [submissionDate, setSubmissionDate] = useState('2020-06-01');
  const [lat, setLat] = useState(0.1276);
  const [lon, setLon] = useState(51.5072);

  const newSubmitHandler = (e) => {
    e.preventDefault();
    setSubmissionLocation(location);
    setSubmissionDate(inputDate);
  };

  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/search/${submissionLocation}?format=json&addressdetails=1&limit=1&polygon_svg=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setLat(data[0].lat);
        setLon(data[0].lon);
      });
  }, [submissionLocation]);

  return (
    <Fragment>
      <section>
        <form className='form' id='location-form' onSubmit={newSubmitHandler}>
          <label className='form-label'>
            What location would you like to see from space?
          </label>
          <input
            className='form-input form-row'
            type='text'
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder='cities work best...'
          />
          <label className='form-label'>Select a date?</label>
          <input
            className='form-input form-row'
            type='date'
            required
            value={inputDate}
            min='2018-01-01'
            max='2022-09-31'
            onChange={(e) => setInputDate(e.target.value)}
          />
          <button className='btn' type='submit' value='Submit'>
            Submit
          </button>
        </form>
        <Viz
          lat={lat}
          lon={lon}
          inputLocation={submissionLocation}
          inputDate={submissionDate}
        />
      </section>
    </Fragment>
  );
};

export default InputForm;
