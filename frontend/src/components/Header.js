import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-light py-3 shadow-sm fixed-top w-100">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <img
          src={logo}
          alt="Orange Parking Logo"
          style={{ maxWidth: '125px', height: 'auto' }}
        />

        {/* Desktop Nav Links */}
        {!isMobile && (
          <nav>
            <ul className="d-flex gap-4 list-unstyled mb-0">
              <li><a href="#about" className="text-dark text-decoration-none">About</a></li>
              <li><a href="#consumer" className="text-dark text-decoration-none">Consumer</a></li>
              <li><a href="#driver" className="text-dark text-decoration-none">Driver</a></li>
              <li><a href="#enterprise" className="text-dark text-decoration-none">Enterprise</a></li>
            </ul>
          </nav>
        )}

        {/* Burger Menu for Mobile */}
        {isMobile && (
          <button
            className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
            style={{ width: '40px', height: '40px' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* SVG icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M2 12.5a.5.5 0 0 1 0-1h12a.5.5 0 0 1 0 1H2zm0-4a.5.5 0 0 1 0-1h12a.5.5 0 0 1 0 1H2zm0-4a.5.5 0 0 1 0-1h12a.5.5 0 0 1 0 1H2z"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Floating Dropdown (Mobile Only) */}
      {isMobile && isMenuOpen && (
        <div
          className="position-absolute bg-white shadow-lg rounded p-4"
          style={{
            top: '70px',
            right: '20px',
            width: '250px',
            zIndex: 1000,
          }}
        >
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><a href="#about" className="text-dark text-decoration-none">About</a></li>
            <li className="mb-2"><a href="#consumer" className="text-dark text-decoration-none">Consumer</a></li>
            <li className="mb-2"><a href="#driver" className="text-dark text-decoration-none">Driver</a></li>
            <li><a href="#enterprise" className="text-dark text-decoration-none">Enterprise</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
