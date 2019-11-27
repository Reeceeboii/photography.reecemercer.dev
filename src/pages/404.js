import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../styles/home.css';


function NotFound(props) {
  return(
      <div className="ContentSection">
        <h1 className="Header">404 :(</h1>
        <p className="TextSection">{`I don't think you're meant to be here!`}</p>
        <Link className="SecondaryLink" to="/">Go back</Link>
    </div>
  );
}

export default NotFound;