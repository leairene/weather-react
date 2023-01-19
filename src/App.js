import React from "react";

import "./App.css";
import SearchBar from "./SearchBar";
import FavoriteCity from "./FavoriteCity";
import Source from "./Source";
import Units from "./Units";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Units />
        <SearchBar />
        <FavoriteCity />
        <section>
          <h1 className="headline">Fancy Forecast</h1>
        </section>
        <Source />
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossorigin="anonymous"
      ></script>
      <script src="src/index.js"></script>
    </div>
  );
}
