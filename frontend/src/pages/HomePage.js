import React from 'react';
import driverImage from '../assets/driver.jpg'; // Make sure the path is correct

const HomePage = () => {
  return (
    <div className="container-fluid p-0 m-0">
      <img
        src={driverImage}
        alt="Driver"
        className="img-fluid"
        style={{
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </div>
  );
};

export default HomePage;
