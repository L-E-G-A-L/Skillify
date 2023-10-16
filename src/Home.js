import React from 'react';
import Navbar from './Nav';
import './Home.css';

function Homepage() {
  return (
  <body className='homebody'>
    <header className='homeheader'>
      <a href="#" className="logo">Group15</a>
      <div className="menu-toggle"></div>
      <Navbar />
      <div className="clearfix"></div>
    </header>
  </body>  
  );
}

export default Homepage;
