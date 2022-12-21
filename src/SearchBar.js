import React from "react";
import "./src/SearchBar.css";

import Form from 'react-bootstrap/Form';


export default function SearchBar() {
  return (
    <div>
      <form className="new-city" id="city-form">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Search for a city"
              className="search-bar"
              id="city-bar"
              autocomplete="off"
            />
          </div>
          <div className="col-3 go-button">
            <input
              type="submit"
              value="Go!"
              className="search-button form-control"
            />
          </div>
          <div className="col-3 current-button">
            <input
              type="submit"
              value="Current"
              className="search-button form-control"
              id="current-location"
            />
          </div>
        </div>
      </form>
      <br />
      <p>or go to...</p>
    </div>
  );
}
