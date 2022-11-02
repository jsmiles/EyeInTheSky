import React from 'react';

const Hero = () => {
  return (
    <main className='hero'>
      <h2>Welcome</h2>
      <section>
        <p>
          Have you ever wanted to see what NASA sees? Now you can! In this app I
          utilise the public{' '}
          <a href='https://api.nasa.gov/'>Landsat Imagery API</a>. Below, simply
          input a location and a date, then submit and wait for the satellite
          image.
        </p>
        <p>
          Please note, the nature of the returned images is such that there is
          no guarantee of a clear picture. The initial rendered image of London
          from 2020-06-01 illustrates what you might see on a clear day.
          However, clouds might prohibit the view or it may be restricted for
          other reasons at NASA's discretion. Despite that, I hope you have fun.
        </p>
      </section>
    </main>
  );
};

export default Hero;
