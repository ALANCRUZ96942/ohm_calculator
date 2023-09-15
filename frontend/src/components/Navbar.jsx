import React, { useEffect, useState } from 'react';
import { useLocation,Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import ArrowSvg from '../assets/arrow.svg'; 

function Navbar() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');
  const [navClass, setnavClass] = useState('');

  useEffect(() => {
    // Actualiza el título de la página según la ruta actual
    switch (location.pathname) {
      case '/':
        setPageTitle('Welcome to Ohm Calculator');
        setnavClass('extra-size text-center text-light');
        break;
      case '/calculate':
        setPageTitle("Let's to calculate the electrical resistance");
        setnavClass('text-center text-light');
        break;
      default:
        setPageTitle('');
    }
  }, [location.pathname]);

  function renderArrow() {
    console.log(location.pathname);
    if (location.pathname === '/calculate') {
      return (
      <Link to="/">  
        <img src={ArrowSvg} alt="Arrow" className="arrow-svg" />
      </Link>  );
    }
    return null; 
  }

  return (
    <div>
      <Container>
        <div className="row justify-content-center p-5">
          <h1 className={navClass}>{renderArrow()}{pageTitle}</h1>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;