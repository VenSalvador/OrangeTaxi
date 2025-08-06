import React from 'react';
import driverVideo from '../assets/car.mp4';

const HomePage = () => {
  return (
    <div className="container-fluid p-0 m-0">
      <div
        className="position-relative w-100"
        style={{ height: '50vh', overflow: 'hidden',}}
      >
        {/* Background Video */}
        <video
          src={driverVideo}
          autoPlay
          muted
          loop
          className="w-50 h-100"
          style={{
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 0,
          }}
        />

        {/* Text Overlay */}
        <div className="position-absolute top-50 start-50 translate-middle text-center">
          <h1
            className="display-3 fw-bold"
            style={{
              fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
              textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
              letterSpacing: '2px',
            }}
          >
            <span style={{ color: '#FFB84D' }}>Orange</span>{' '}
            <span style={{ color: '#464544' }}>Taxi</span>
          </h1>
          <p
            className="lead text-white"
            style={{
              fontStyle: 'italic',
              textShadow: '1px 1px 6px rgba(0,0,0,0.5)',
            }}
          >
            Fast. Safe. Always on Time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
