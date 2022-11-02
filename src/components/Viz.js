import React, { useState, useEffect } from 'react';
import { PacmanLoader } from 'react-spinners';

const Viz = (props) => {
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.nasa.gov/planetary/earth/assets?lon=${props.lon}&lat=${props.lat}&date=${props.inputDate}&dim=0.15&api_key=YOUR_API_KEY`
    )
      .then((response) => response.json())
      .then((data) => setLink(data.url))
      .then(
        setTimeout(() => {
          setLoading(false);
        }, 4000)
      );
  }, [props.lon, props.lat, props.inputDate]);

  return (
    <section className='form'>
      <div className='card'>
        <div>
          <PacmanLoader loading={loading} color='#4f46e5' />
        </div>
        <br />
        <img
          src={link}
          alt='returned nasa satellite view'
          height='400'
          width='400'
        />
        <div>
          {props.inputLocation}, around the {props.inputDate}
        </div>
      </div>
    </section>
  );
};

export default Viz;
